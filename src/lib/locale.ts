import {
  defaultLocale,
  LOCALE_COOKIE,
  type Locale,
  locales,
} from "@/i18n/translations";

export { LOCALE_COOKIE, defaultLocale, locales };
export type { Locale };

export function isLocale(value: string | undefined | null): value is Locale {
  return value === "tr" || value === "en";
}

export function getLocaleFromCookie(
  cookieValue: string | undefined | null
): Locale {
  return isLocale(cookieValue) ? cookieValue : defaultLocale;
}
