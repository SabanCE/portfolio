"use client";

import { useLocale } from "@/components/providers/LocaleProvider";
import { locales } from "@/i18n/translations";

export function LanguageSwitcher() {
  const { locale, setLocale, t } = useLocale();

  return (
    <div
      className="inline-flex rounded-lg border border-slate-200/80 bg-white/80 p-0.5 shadow-sm dark:border-slate-700 dark:bg-slate-800/80"
      role="group"
      aria-label={t.language.label}
    >
      {locales.map((code) => (
        <button
          key={code}
          type="button"
          onClick={() => setLocale(code)}
          aria-pressed={locale === code}
          className={`rounded-md px-2.5 py-1.5 text-xs font-semibold transition-all duration-300 ${
            locale === code
              ? "bg-gradient-to-r from-sky-500 to-violet-500 text-white shadow-sm"
              : "text-ink-muted hover:text-sky-600 dark:text-slate-400 dark:hover:text-sky-400"
          }`}
        >
          {code === "tr" ? t.language.tr : t.language.en}
        </button>
      ))}
    </div>
  );
}
