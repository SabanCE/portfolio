"use client";

import type { Locale } from "@/i18n/translations";
import { LocaleProvider } from "./LocaleProvider";
import { ThemeProvider } from "./ThemeProvider";
import { GlobalCursorBackground } from "@/components/GlobalCursorBackground";

export function AppProviders({
  children,
  initialLocale,
}: {
  children: React.ReactNode;
  initialLocale?: Locale;
}) {
  return (
    <ThemeProvider>
      <LocaleProvider initialLocale={initialLocale}>
        <GlobalCursorBackground />
        {children}
      </LocaleProvider>
    </ThemeProvider>
  );
}
