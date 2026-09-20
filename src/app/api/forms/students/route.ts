import { NextResponse } from "next/server";
import { ZodError } from "zod";
import { studentSchema } from "@/lib/validators";
import { saveStudentForm } from "@/lib/db";

export async function POST(req: Request) {
  try {
    const json = await req.json();
    const parsed = studentSchema.parse(json);

    await saveStudentForm(parsed);

    return NextResponse.json({ ok: true });
  } catch (error) {
    if (error instanceof SyntaxError) {
      return NextResponse.json(
        { ok: false, error: "Invalid JSON" },
        { status: 400 }
      );
    }

    if (error instanceof ZodError) {
      return NextResponse.json(
        { ok: false, error: "Invalid data" },
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
