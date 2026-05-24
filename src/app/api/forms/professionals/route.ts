import { NextResponse } from "next/server";
import { professionalSchema } from "@/lib/validators";
import { saveProfessionalForm } from "@/lib/db";

export async function POST(req: Request) {
  try {
    const json = await req.json();
    const parsed = professionalSchema.parse(json);

    await saveProfessionalForm(parsed);

    return NextResponse.json({ ok: true });
  } catch (err) {
    return NextResponse.json(
      { ok: false, error: "Invalid data" },
      { status: 400 }
    );
  }
}

