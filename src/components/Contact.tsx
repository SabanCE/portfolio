"use client";

import { type ReactNode } from "react";
import { useLocale } from "@/components/providers/LocaleProvider";
import { siteConfig } from "@/config/site";
import { AnimateIn } from "./AnimateIn";
import { SectionHeading } from "./SectionHeading";

const externalLinks: { label: string; href: string; icon: ReactNode }[] = [
  {
    label: "GitHub",
    href: siteConfig.social.github,
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
        <path d="M12 0C5.37 0 0 5.373 0 12c0 5.303 3.438 9.8 8.207 11.387.6.113.793-.26.793-.577 0-.285-.01-1.04-.016-2.04-3.338.726-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.083-.73.083-.73 1.205.085 1.84 1.239 1.84 1.239 1.07 1.835 2.809 1.305 3.494.997.108-.775.42-1.305.762-1.605-2.665-.303-5.466-1.333-5.466-5.932 0-1.31.468-2.382 1.236-3.222-.124-.303-.536-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.289-1.552 3.295-1.23 3.295-1.23.655 1.652.243 2.873.12 3.176.77.84 1.235 1.912 1.235 3.222 0 4.61-2.804 5.625-5.476 5.922.431.372.815 1.102.815 2.222 0 1.606-.015 2.898-.015 3.293 0 .32.192.694.8.576C20.565 21.796 24 17.3 24 12c0-6.627-5.373-12-12-12Z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: siteConfig.social.linkedin,
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
        <path d="M4.98 3.5C4.98 4.88 3.9 6 2.5 6S0 4.88 0 3.5 1.1 1 2.5 1 4.98 2.12 4.98 3.5ZM0 8.5h5V24H0V8.5Zm7.5 0h4.78v2.14h.07c.67-1.27 2.3-2.61 4.73-2.61 5.06 0 6 3.33 6 7.66V24h-5V16.25c0-1.84-.03-4.22-2.57-4.22-2.58 0-2.98 2.02-2.98 4.09V24h-5V8.5Z" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: siteConfig.social.instagram,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4" stroke="currentColor" strokeWidth="1.8">
        <rect x="2.5" y="2.5" width="19" height="19" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <path d="M17.5 6.5h.01" />
      </svg>
    ),
  },
];

export function Contact() {
  const { t } = useLocale();
  const mailto = `mailto:${siteConfig.email}`;

  return (
    <section
      id="iletisim"
      className="scroll-mt-24 bg-white/40 py-20 md:py-28 dark:bg-slate-900/40"
    >
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          title={t.contact.title}
          subtitle={t.contact.subtitle}
        />

        <AnimateIn delay={150}>
          <div className="relative overflow-hidden rounded-3xl border border-slate-200/80 bg-gradient-to-br from-white via-sky-50/30 to-violet-50/30 p-8 shadow-card dark:border-slate-700 dark:from-slate-900 dark:via-slate-900 dark:to-slate-800 md:p-12">
            <div className="blob -right-10 -top-10 h-40 w-40 bg-sky-300/30 dark:bg-sky-500/15" />
            <div className="blob -bottom-10 -left-10 h-32 w-32 bg-violet-300/25 dark:bg-violet-500/10" />

            <div className="relative">
              <a
                href={mailto}
                className="mt-2 inline-block font-display text-2xl font-bold text-gradient transition-transform duration-300 hover:scale-[1.02] md:text-3xl"
              >
                {siteConfig.email}
              </a>

              <ul className="mt-10 flex flex-wrap gap-4">
                {externalLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-secondary gap-3"
                    >
                      <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-gradient-to-br from-sky-500 to-violet-500 text-xs font-bold text-white">
                        {link.icon}
                      </span>
                      {link.label}
                    </a>
                  </li>
                ))}
                <li>
                  <a href={mailto} className="btn-primary">
                    {t.contact.sendEmail}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
