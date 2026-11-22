import nodemailer from "nodemailer";
import type { NewsletterSubscriber } from "@/lib/db";
import { createUnsubscribeToken } from "@/lib/newsletter-unsubscribe";

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export async function sendNewsletterToSubscribers(
  subject: string,
  message: string,
  subscribers: NewsletterSubscriber[]
) {
  const host = process.env.SMTP_HOST;
  const port = Number(process.env.SMTP_PORT);
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;
  const from = process.env.SMTP_FROM;
  const siteUrl = process.env.SITE_URL;

  if (
    !host ||
    !Number.isInteger(port) ||
    port < 1 ||
    port > 65535 ||
    !user ||
    !pass ||
    !from ||
    !siteUrl
  ) {
    throw new Error("SMTP or SITE_URL configuration is incomplete");
  }

  const baseUrl = new URL(siteUrl);
  if (
    (baseUrl.protocol !== "https:" && process.env.NODE_ENV === "production") ||
    (baseUrl.protocol !== "https:" && baseUrl.hostname !== "localhost")
  ) {
    throw new Error("SITE_URL must use HTTPS outside local development");
  }

  const transporter = nodemailer.createTransport({
    host,
    port,
    secure: process.env.SMTP_SECURE === "true" || port === 465,
    auth: { user, pass },
    pool: true,
    maxConnections: 3,
    maxMessages: 100
  });

  let sentCount = 0;
  let failedCount = 0;
  const htmlMessage = escapeHtml(message).replace(/\r?\n/g, "<br>");

  try {
    await transporter.verify();

    for (let offset = 0; offset < subscribers.length; offset += 3) {
      const batch = subscribers.slice(offset, offset + 3);
      const results = await Promise.all(
        batch.map(async (subscriber) => {
          const unsubscribeUrl = new URL("/newsletter/unsubscribe", baseUrl);
          unsubscribeUrl.searchParams.set("id", subscriber.id);
          unsubscribeUrl.searchParams.set(
            "token",
            createUnsubscribeToken(subscriber.id)
          );

          try {
            const result = await transporter.sendMail({
              from,
              to: subscriber.email,
              subject,
              text: `${message}\n\nSe désabonner : ${unsubscribeUrl.toString()}`,
              html: `<div style="font-family:Arial,sans-serif;line-height:1.6">${htmlMessage}</div><p style="margin-top:32px;font-size:12px;color:#64748b"><a href="${escapeHtml(unsubscribeUrl.toString())}">Se désabonner</a></p>`,
              headers: {
                "List-Unsubscribe": `<${unsubscribeUrl.toString()}>`
              }
            });
            return result.accepted.length > 0;
          } catch (error) {
            console.error(
              "Unable to send newsletter to a subscriber:",
              error instanceof Error ? error.name : "Unknown error"
            );
            return false;
          }
        })
      );

      sentCount += results.filter(Boolean).length;
      failedCount += results.filter((sent) => !sent).length;
    }
  } finally {
    transporter.close();
  }

  return { sentCount, failedCount };
}
