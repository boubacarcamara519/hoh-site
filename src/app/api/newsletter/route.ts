import { NextResponse } from "next/server";
import { ZodError } from "zod";
import { newsletterSchema } from "@/lib/validators";
import { saveNewsletterSubscriber } from "@/lib/db";

export async function POST(req: Request) {
  try {
    const parsed = newsletterSchema.parse(await req.json());
    const saved = await saveNewsletterSubscriber(parsed);
    if (!saved) {
      return NextResponse.json(
        { ok: false, code: "EMAIL_ALREADY_EXISTS" },
        { status: 409 }
      );
    }
    return NextResponse.json({ ok: true });
  } catch (error) {
    if (error instanceof SyntaxError || error instanceof ZodError) {
      return NextResponse.json(
        { ok: false, error: "Adresse email invalide" },
        { status: 400 }
      );
    }

    console.error("Unable to save newsletter subscriber:", error);
    return NextResponse.json(
      { ok: false, error: "Unable to process request" },
      { status: 500 }
    );
  }
}
