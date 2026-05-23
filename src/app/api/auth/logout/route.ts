import { sessionOptions, type AdminSession } from "@/lib/session";
import { getIronSession } from "iron-session";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function POST() {
  const session = await getIronSession<AdminSession>(
    await cookies(),
    sessionOptions
  );
  session.destroy();

  return NextResponse.json({ ok: true });
}
