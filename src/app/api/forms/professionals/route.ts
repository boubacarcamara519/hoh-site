import { NextResponse } from "next/server";
import { ZodError } from "zod";
import { professionalSchema } from "@/lib/validators";
import { saveProfessionalForm } from "@/lib/db";

export async function POST(req: Request) {
  try {
    const json = await req.json();
    const parsed = professionalSchema.parse(json);

    const saved = await saveProfessionalForm(parsed);
    if (!saved) {
      return NextResponse.json(
        { ok: false, code: "EMAIL_ALREADY_EXISTS" },
        { status: 409 }
      );
    }

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

    console.error("Unable to save professional submission:", error);
    return NextResponse.json(
      { ok: false, error: "Unable to process request" },
      { status: 500 }
    );
  }
}
