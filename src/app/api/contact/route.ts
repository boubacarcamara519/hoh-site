import { NextResponse } from "next/server";
import { contactSchema } from "@/lib/validators";
import { saveContactMessage } from "@/lib/db";

export async function POST(req: Request) {
  try {
    const json = await req.json();
    const parsed = contactSchema.parse(json);

    await saveContactMessage(parsed);

    return NextResponse.json({ ok: true });
  } catch (err) {
    return NextResponse.json(
      { ok: false, error: "Invalid data" },
      { status: 400 }
    );
  }
}

