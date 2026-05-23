"use client";

import { useLocale } from "@/components/providers/LocaleProvider";
import { siteConfig } from "@/config/site";

export function Footer() {
  const year = new Date().getFullYear();
  const { t } = useLocale();

  return (
    <footer className="border-t border-slate-200/80 bg-white/50 py-10 backdrop-blur-sm dark:border-slate-800 dark:bg-slate-950/50">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 text-sm text-ink-faint dark:text-slate-500 md:flex-row">
        <p>
          © {year}{" "}
          <span className="font-medium text-ink dark:text-slate-200">
            {siteConfig.name}
          </span>
        </p>
        <p className="flex items-center gap-1.5">
          <span className="inline-block h-1.5 w-1.5 animate-pulse rounded-full bg-sky-400" />
          {t.footer.builtWith}
        </p>
      </div>
    </footer>
  );
}
