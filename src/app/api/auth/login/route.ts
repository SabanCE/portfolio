import { isAdminConfigured, sessionOptions, type AdminSession } from "@/lib/session";
import { getIronSession } from "iron-session";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  if (!isAdminConfigured()) {
    return NextResponse.json(
      {
        error:
          "Admin girişi yapılandırılmamış. .env.local dosyasını kontrol edin.",
      },
      { status: 503 }
    );
  }

  const body = (await request.json()) as {
    username?: string;
    password?: string;
  };

  const username = body.username?.trim();
  const password = body.password;

  if (
    username !== process.env.ADMIN_USERNAME ||
    password !== process.env.ADMIN_PASSWORD
  ) {
    return NextResponse.json(
      { error: "Kullanıcı adı veya şifre hatalı." },
      { status: 401 }
    );
  }

  const session = await getIronSession<AdminSession>(
    await cookies(),
    sessionOptions
  );
  session.isAdmin = true;
  await session.save();

  return NextResponse.json({ ok: true });
}
