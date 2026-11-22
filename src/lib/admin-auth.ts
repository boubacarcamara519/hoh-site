import { createHash, createHmac, timingSafeEqual } from "node:crypto";
import { cookies } from "next/headers";

export const ADMIN_SESSION_COOKIE = "hoh-admin-session";
const SESSION_DURATION_SECONDS = 60 * 60 * 8;

function getSessionSecret() {
  return process.env.NEXTAUTH_SECRET;
}

export function isAdminConfigurationReady() {
  const password = process.env.ADMIN_PASSWORD;
  const secret = getSessionSecret();
  return Boolean(
    password &&
      password.length >= 12 &&
      !password.startsWith("replace-with-") &&
      secret &&
      secret.length >= 32 &&
      !secret.startsWith("replace-with-")
  );
}

export function verifyAdminPassword(password: string) {
  const expectedPassword = process.env.ADMIN_PASSWORD;
  if (!expectedPassword) return false;

  const providedHash = createHash("sha256").update(password).digest();
  const expectedHash = createHash("sha256").update(expectedPassword).digest();
  return timingSafeEqual(providedHash, expectedHash);
}

export function createAdminSessionToken() {
  const secret = getSessionSecret();
  if (!secret || secret.length < 32 || secret.startsWith("replace-with-")) {
    throw new Error("NEXTAUTH_SECRET is not configured securely");
  }

  const expiresAt = Math.floor(Date.now() / 1000) + SESSION_DURATION_SECONDS;
  const signature = createHmac("sha256", secret)
    .update(String(expiresAt))
    .digest("base64url");
  return `${expiresAt}.${signature}`;
}

export function verifyAdminSessionToken(token: string | undefined) {
  const secret = getSessionSecret();
  if (
    !secret ||
    secret.length < 32 ||
    secret.startsWith("replace-with-") ||
    !token
  ) {
    return false;
  }

  const [expiresAt, signature, extra] = token.split(".");
  if (!expiresAt || !signature || extra !== undefined) return false;

  const expiry = Number(expiresAt);
  if (!Number.isSafeInteger(expiry) || expiry <= Math.floor(Date.now() / 1000)) {
    return false;
  }

  const expectedSignature = createHmac("sha256", secret)
    .update(expiresAt)
    .digest("base64url");
  const providedBuffer = Buffer.from(signature);
  const expectedBuffer = Buffer.from(expectedSignature);

  return (
    providedBuffer.length === expectedBuffer.length &&
    timingSafeEqual(providedBuffer, expectedBuffer)
  );
}

export async function isAdminAuthenticated() {
  const cookieStore = await cookies();
  return verifyAdminSessionToken(
    cookieStore.get(ADMIN_SESSION_COOKIE)?.value
  );
}
