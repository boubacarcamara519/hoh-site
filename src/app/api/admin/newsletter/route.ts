import { NextResponse } from "next/server";
import { isAdminAuthenticated } from "@/lib/admin-auth";
import {
  getActiveNewsletterSubscribers
} from "@/lib/db";
import { sendNewsletterToSubscribers } from "@/lib/newsletter-mailer";

export async function GET() {
  if (!(await isAdminAuthenticated())) {
    return NextResponse.json({ error: "Non autorisé." }, { status: 401 });
  }

  try {
    const subscribers = await getActiveNewsletterSubscribers();
    return NextResponse.json(
      {
        subscribers: subscribers.map((subscriber) => ({
          ...subscriber,
          created_at: subscriber.created_at.toISOString()
        }))
      },
      { headers: { "Cache-Control": "no-store" } }
    );
  } catch (error) {
    console.error("Unable to load newsletter subscribers:", error);
    return NextResponse.json(
      { error: "Impossible de charger les abonnés." },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  if (!(await isAdminAuthenticated())) {
    return NextResponse.json({ error: "Non autorisé." }, { status: 401 });
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Requête invalide." }, { status: 400 });
  }

  if (!body || typeof body !== "object") {
    return NextResponse.json({ error: "Requête invalide." }, { status: 400 });
  }

  const { subject, message } = body as {
    subject?: unknown;
    message?: unknown;
  };
  if (
    typeof subject !== "string" ||
    typeof message !== "string" ||
    subject.trim().length === 0 ||
    subject.length > 200 ||
    /[\r\n]/.test(subject) ||
    message.trim().length === 0 ||
    message.length > 10000
  ) {
    return NextResponse.json(
      { error: "Renseigne un objet et un message valides." },
      { status: 400 }
    );
  }

  try {
    const subscribers = await getActiveNewsletterSubscribers();
    if (subscribers.length === 0) {
      return NextResponse.json(
        { error: "Aucun abonné actif à contacter." },
        { status: 400 }
      );
    }

    const result = await sendNewsletterToSubscribers(
      subject.trim(),
      message.trim(),
      subscribers
    );
    return NextResponse.json({
      ...result,
      totalCount: subscribers.length
    });
  } catch (error) {
    console.error("Unable to send newsletter campaign:", error);
    return NextResponse.json(
      { error: "Échec de l’envoi. Vérifie la configuration SMTP." },
      { status: 500 }
    );
  }
}
