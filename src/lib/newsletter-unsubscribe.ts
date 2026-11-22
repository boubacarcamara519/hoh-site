import { createHmac, timingSafeEqual } from "node:crypto";

function createToken(id: string) {
  const secret = process.env.NEXTAUTH_SECRET;
  if (!secret || secret.length < 32 || secret.startsWith("replace-with-")) {
    throw new Error("NEXTAUTH_SECRET is not configured securely");
  }

  return createHmac("sha256", secret)
    .update(`newsletter-unsubscribe:${id}`)
    .digest("hex");
}

export function createUnsubscribeToken(id: string) {
  return createToken(id);
}

export function verifyUnsubscribeToken(id: string, token: string) {
  const secret = process.env.NEXTAUTH_SECRET;
  if (
    !secret ||
    secret.length < 32 ||
    secret.startsWith("replace-with-") ||
    !/^\d+$/.test(id) ||
    !/^[a-f0-9]{64}$/.test(token)
  ) {
    return false;
  }

  const expected = Buffer.from(createToken(id), "hex");
  const provided = Buffer.from(token, "hex");
  return timingSafeEqual(provided, expected);
}
