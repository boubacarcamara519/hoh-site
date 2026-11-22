import { NextResponse } from "next/server";
import {
  ADMIN_SESSION_COOKIE,
  createAdminSessionToken,
  isAdminConfigurationReady,
  verifyAdminPassword
} from "@/lib/admin-auth";

const sessionDurationSeconds = 60 * 60 * 8;

export async function POST(request: Request) {
  if (!isAdminConfigurationReady()) {
    return NextResponse.json(
      { error: "L’administration n’est pas encore configurée." },
      { status: 503 }
    );
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

  const password = (body as { password?: unknown }).password;
  if (
    typeof password !== "string" ||
    password.length > 1024 ||
    !verifyAdminPassword(password)
  ) {
    return NextResponse.json(
      { error: "Mot de passe incorrect." },
      { status: 401 }
    );
  }

  const response = NextResponse.json({ ok: true });
  response.cookies.set(ADMIN_SESSION_COOKIE, createAdminSessionToken(), {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    path: "/",
    maxAge: sessionDurationSeconds
  });
  response.headers.set("Cache-Control", "no-store");
  return response;
}
