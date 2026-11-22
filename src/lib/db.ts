import type {
  ProfessionalPayload,
  StudentPayload,
  ContactPayload,
  NewsletterPayload
} from "./validators";

import { Pool, type PoolClient } from "pg";

const globalForDb = globalThis as typeof globalThis & {
  hohPool?: Pool;
  hohSchemaReady?: Promise<void>;
};

function getPool() {
  if (!process.env.DATABASE_URL) {
    throw new Error("DATABASE_URL is not configured");
  }

  if (!globalForDb.hohPool) {
    globalForDb.hohPool = new Pool({
      connectionString: process.env.DATABASE_URL,
      max: Number(process.env.DATABASE_POOL_MAX ?? 10),
      connectionTimeoutMillis: 10_000,
      idleTimeoutMillis: 30_000,
      ssl: process.env.DATABASE_SSL === "true"
        ? { rejectUnauthorized: false }
        : undefined
    });
  }

  return globalForDb.hohPool;
}

async function ensureSchema() {
  if (!globalForDb.hohSchemaReady) {
    globalForDb.hohSchemaReady = initializeSchema().catch((error) => {
      globalForDb.hohSchemaReady = undefined;
      throw error;
    });
  }

  return globalForDb.hohSchemaReady;
}

async function initializeSchema() {
  const client = await getPool().connect();

  try {
    await client.query(`
      CREATE TABLE IF NOT EXISTS professional_submissions (
        id BIGSERIAL PRIMARY KEY,
        full_name TEXT NOT NULL,
        email TEXT NOT NULL,
        whatsapp TEXT NOT NULL,
        reason TEXT NOT NULL,
        payload JSONB NOT NULL,
        created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
      );

      CREATE INDEX IF NOT EXISTS professional_submissions_created_at_idx
        ON professional_submissions (created_at DESC);

      CREATE TABLE IF NOT EXISTS student_submissions (
        id BIGSERIAL PRIMARY KEY,
        full_name TEXT NOT NULL,
        email TEXT NOT NULL,
        whatsapp TEXT NOT NULL,
        payload JSONB NOT NULL,
        created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
      );

      CREATE INDEX IF NOT EXISTS student_submissions_created_at_idx
        ON student_submissions (created_at DESC);

      CREATE TABLE IF NOT EXISTS student_documents (
        id BIGSERIAL PRIMARY KEY,
        student_submission_id BIGINT NOT NULL
          REFERENCES student_submissions (id) ON DELETE CASCADE,
        file_name TEXT NOT NULL,
        mime_type TEXT NOT NULL,
        size_bytes INTEGER NOT NULL CHECK (size_bytes > 0),
        file_data BYTEA NOT NULL,
        created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
      );

      CREATE INDEX IF NOT EXISTS student_documents_submission_idx
        ON student_documents (student_submission_id);

      CREATE TABLE IF NOT EXISTS contact_messages (
        id BIGSERIAL PRIMARY KEY,
        name TEXT NOT NULL,
        email TEXT NOT NULL,
        subject TEXT,
        message TEXT NOT NULL,
        payload JSONB NOT NULL,
        created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
      );

      CREATE INDEX IF NOT EXISTS contact_messages_created_at_idx
        ON contact_messages (created_at DESC);

      CREATE TABLE IF NOT EXISTS newsletter_subscribers (
        id BIGSERIAL PRIMARY KEY,
        email TEXT NOT NULL UNIQUE,
        created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
      );

      ALTER TABLE newsletter_subscribers
        ADD COLUMN IF NOT EXISTS unsubscribed_at TIMESTAMPTZ;

      CREATE INDEX IF NOT EXISTS newsletter_subscribers_created_at_idx
        ON newsletter_subscribers (created_at DESC);
    `);
  } finally {
    client.release();
  }
}

async function withDatabase<T>(callback: (client: PoolClient) => Promise<T>) {
  await ensureSchema();
  const client = await getPool().connect();

  try {
    return await callback(client);
  } finally {
    client.release();
  }
}

type EmailSubmissionTable =
  | "professional_submissions"
  | "student_submissions"
  | "newsletter_subscribers";

async function saveIfEmailIsNew(
  table: EmailSubmissionTable,
  email: string,
  save: (client: PoolClient) => Promise<void>
) {
  return withDatabase(async (client) => {
    await client.query("BEGIN");

    try {
      await client.query(
        "SELECT pg_advisory_xact_lock(hashtext($1), 0)",
        [`${table}:${email.toLowerCase()}`]
      );
      const existing = await client.query(
        `SELECT 1 FROM ${table} WHERE LOWER(email) = LOWER($1) LIMIT 1`,
        [email]
      );

      if (existing.rowCount) {
        await client.query("ROLLBACK");
        return false;
      }

      await save(client);
      await client.query("COMMIT");
      return true;
    } catch (error) {
      await client.query("ROLLBACK");
      throw error;
    }
  });
}

export async function saveProfessionalForm(data: ProfessionalPayload) {
  return saveIfEmailIsNew("professional_submissions", data.email, async (client) => {
    await client.query(
      `INSERT INTO professional_submissions
        (full_name, email, whatsapp, reason, payload)
       VALUES ($1, $2, $3, $4, $5::jsonb)`,
      [
        data.fullName,
        data.email,
        data.whatsapp,
        data.reason,
        JSON.stringify(data)
      ]
    );
  });
}

export type StudentDocumentUpload = {
  fileName: string;
  mimeType: string;
  sizeBytes: number;
  fileData: Buffer;
};

export async function saveStudentForm(
  data: StudentPayload,
  documents: StudentDocumentUpload[] = []
) {
  return saveIfEmailIsNew("student_submissions", data.email, async (client) => {
    const result = await client.query<{ id: string }>(
      `INSERT INTO student_submissions
        (full_name, email, whatsapp, payload)
       VALUES ($1, $2, $3, $4::jsonb)
       RETURNING id`,
      [
        data.fullName,
        data.email,
        data.whatsapp,
        JSON.stringify(data)
      ]
    );

    for (const document of documents) {
      await client.query(
        `INSERT INTO student_documents
          (student_submission_id, file_name, mime_type, size_bytes, file_data)
         VALUES ($1, $2, $3, $4, $5)`,
        [
          result.rows[0].id,
          document.fileName,
          document.mimeType,
          document.sizeBytes,
          document.fileData
        ]
      );
    }
  });
}

export async function saveContactMessage(data: ContactPayload) {
  await withDatabase((client) =>
    client.query(
      `INSERT INTO contact_messages
        (name, email, subject, message, payload)
       VALUES ($1, $2, $3, $4, $5::jsonb)`,
      [
        data.name,
        data.email,
        data.subject ?? null,
        data.message,
        JSON.stringify(data)
      ]
    )
  );
}

export async function saveNewsletterSubscriber(data: NewsletterPayload) {
  return withDatabase(async (client) => {
    await client.query("BEGIN");

    try {
      await client.query(
        "SELECT pg_advisory_xact_lock(hashtext($1), 0)",
        [`newsletter_subscribers:${data.email.toLowerCase()}`]
      );
      const existing = await client.query<{ unsubscribed_at: Date | null }>(
        `SELECT unsubscribed_at
         FROM newsletter_subscribers
         WHERE LOWER(email) = LOWER($1)
         LIMIT 1
         FOR UPDATE`,
        [data.email]
      );

      if (existing.rowCount) {
        if (existing.rows[0].unsubscribed_at) {
          await client.query(
            `UPDATE newsletter_subscribers
             SET unsubscribed_at = NULL
             WHERE LOWER(email) = LOWER($1)`,
            [data.email]
          );
          await client.query("COMMIT");
          return true;
        }

        await client.query("ROLLBACK");
        return false;
      }

      await client.query(
        `INSERT INTO newsletter_subscribers (email)
         VALUES ($1)`,
        [data.email]
      );
      await client.query("COMMIT");
      return true;
    } catch (error) {
      await client.query("ROLLBACK");
      throw error;
    }
  });
}

export type NewsletterSubscriber = {
  id: string;
  email: string;
  created_at: Date;
};

export async function getActiveNewsletterSubscribers() {
  return withDatabase(async (client) => {
    const result = await client.query<NewsletterSubscriber>(
      `SELECT id, email, created_at
       FROM newsletter_subscribers
       WHERE unsubscribed_at IS NULL
       ORDER BY created_at DESC`
    );
    return result.rows;
  });
}

export async function unsubscribeNewsletterSubscriber(id: string) {
  return withDatabase(async (client) => {
    const result = await client.query(
      `UPDATE newsletter_subscribers
       SET unsubscribed_at = COALESCE(unsubscribed_at, NOW())
       WHERE id = $1`,
      [id]
    );
    return result.rowCount === 1;
  });
}
