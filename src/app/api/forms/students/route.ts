import { NextResponse } from "next/server";
import { studentSchema } from "@/lib/validators";
import { saveStudentForm } from "@/lib/db";

export async function POST(req: Request) {
  try {
    const json = await req.json();
    const parsed = studentSchema.parse(json);

    await saveStudentForm(parsed);

    return NextResponse.json({ ok: true });
  } catch (err) {
    return NextResponse.json(
      { ok: false, error: "Invalid data" },
      { status: 400 }
    );
  }
}

