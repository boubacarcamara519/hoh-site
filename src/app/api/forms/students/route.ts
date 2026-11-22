import { NextResponse } from "next/server";
import { ZodError } from "zod";
import { studentSchema } from "@/lib/validators";
import {
  saveStudentForm,
  type StudentDocumentUpload
} from "@/lib/db";

const MAX_DOCUMENT_COUNT = 1;
const MAX_TOTAL_DOCUMENT_SIZE = 4 * 1024 * 1024;
const MIME_TYPES_BY_EXTENSION: Record<string, string> = {
  pdf: "application/pdf",
  jpg: "image/jpeg",
  jpeg: "image/jpeg",
  png: "image/png"
};

function detectMimeType(fileData: Buffer) {
  if (fileData.subarray(0, 5).toString("ascii") === "%PDF-") {
    return "application/pdf";
  }
  if (
    fileData.length >= 8 &&
    fileData.subarray(0, 8).equals(Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]))
  ) {
    return "image/png";
  }
  if (
    fileData.length >= 3 &&
    fileData[0] === 0xff &&
    fileData[1] === 0xd8 &&
    fileData[2] === 0xff
  ) {
    return "image/jpeg";
  }
  return null;
}

export async function POST(req: Request) {
  let formData: FormData;
  try {
    formData = await req.formData();
  } catch {
    return NextResponse.json(
      { ok: false, code: "INVALID_FORM_DATA" },
      { status: 400 }
    );
  }

  const fileEntries = formData.getAll("documents");
  if (fileEntries.some((entry) => typeof entry === "string" && entry !== "")) {
    return NextResponse.json(
      { ok: false, code: "INVALID_FILE_UPLOAD" },
      { status: 400 }
    );
  }

  const files = fileEntries.filter(
    (entry): entry is File => typeof entry !== "string" && entry.size > 0
  );
  if (files.length > MAX_DOCUMENT_COUNT) {
    return NextResponse.json(
      { ok: false, code: "TOO_MANY_FILES" },
      { status: 400 }
    );
  }

  const totalSize = files.reduce((total, file) => total + file.size, 0);
  if (totalSize > MAX_TOTAL_DOCUMENT_SIZE) {
    return NextResponse.json(
      { ok: false, code: "FILES_TOO_LARGE" },
      { status: 413 }
    );
  }

  try {
    const fields = Object.fromEntries(
      Array.from(formData.entries()).filter(
        ([key, value]) => key !== "documents" && typeof value === "string"
      )
    );
    const parsed = studentSchema.parse(fields);
    const documents: StudentDocumentUpload[] = [];

    for (const file of files) {
      const extension = file.name.split(".").pop()?.toLowerCase() ?? "";
      const expectedMimeType = MIME_TYPES_BY_EXTENSION[extension];
      const fileData = Buffer.from(await file.arrayBuffer());
      const detectedMimeType = detectMimeType(fileData);

      if (
        !expectedMimeType ||
        detectedMimeType !== expectedMimeType ||
        (file.type && file.type !== detectedMimeType)
      ) {
        return NextResponse.json(
          { ok: false, code: "UNSUPPORTED_FILE_TYPE" },
          { status: 400 }
        );
      }

      const fileName = file.name
        .replace(/[\\/\0-\x1f\x7f]/g, "_")
        .slice(0, 255);
      if (!fileName) {
        return NextResponse.json(
          { ok: false, code: "INVALID_FILE_NAME" },
          { status: 400 }
        );
      }

      documents.push({
        fileName,
        mimeType: detectedMimeType,
        sizeBytes: file.size,
        fileData
      });
    }

    const saved = await saveStudentForm(parsed, documents);
    if (!saved) {
      return NextResponse.json(
        { ok: false, code: "EMAIL_ALREADY_EXISTS" },
        { status: 409 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    if (error instanceof ZodError) {
      return NextResponse.json(
        { ok: false, code: "INVALID_FORM_FIELDS" },
        { status: 400 }
      );
    }

    console.error("Unable to save student submission:", error);
    return NextResponse.json(
      { ok: false, error: "Unable to process request" },
      { status: 500 }
    );
  }
}
