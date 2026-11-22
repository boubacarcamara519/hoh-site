import { NextResponse } from "next/server";
import { unsubscribeNewsletterSubscriber } from "@/lib/db";
import { verifyUnsubscribeToken } from "@/lib/newsletter-unsubscribe";

export async function POST(request: Request) {
  const url = new URL(request.url);
  let id = url.searchParams.get("id") ?? "";
  let token = url.searchParams.get("token") ?? "";

  if (!id || !token) {
    try {
      const body: unknown = await request.json();
      if (!body || typeof body !== "object") {
        return NextResponse.json(
          { error: "Lien de désabonnement invalide." },
          { status: 400 }
        );
      }
      const payload = body as { id?: unknown; token?: unknown };
      id = typeof payload.id === "string" ? payload.id : "";
      token = typeof payload.token === "string" ? payload.token : "";
    } catch {
      return NextResponse.json(
        { error: "Lien de désabonnement invalide." },
        { status: 400 }
      );
    }
  }

  if (!process.env.NEXTAUTH_SECRET || !verifyUnsubscribeToken(id, token)) {
    return NextResponse.json(
      { error: "Lien de désabonnement invalide." },
      { status: 400 }
    );
  }

  try {
    const unsubscribed = await unsubscribeNewsletterSubscriber(id);
    if (!unsubscribed) {
      return NextResponse.json(
        { error: "Abonnement introuvable." },
        { status: 404 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Unable to unsubscribe newsletter subscriber:", error);
    return NextResponse.json(
      { error: "Impossible de finaliser le désabonnement." },
      { status: 500 }
    );
  }
}
