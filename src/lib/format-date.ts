import type { Locale } from "@/i18n/translations";

export function formatDate(dateString: string, locale: Locale = "tr") {
  return new Date(dateString).toLocaleDateString(locale === "en" ? "en-US" : "tr-TR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export const formatDateTR = (dateString: string) => formatDate(dateString, "tr");
