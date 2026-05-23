import { cookies } from "next/headers";
import { getLocaleFromCookie, LOCALE_COOKIE } from "@/lib/locale";

export async function getServerLocale() {
  const cookieStore = await cookies();
  return getLocaleFromCookie(cookieStore.get(LOCALE_COOKIE)?.value);
}
