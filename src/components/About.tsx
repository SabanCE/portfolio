"use client";

import { useLocale } from "@/components/providers/LocaleProvider";
import { siteConfig } from "@/config/site";
import { AnimateIn } from "./AnimateIn";
import { SectionHeading } from "./SectionHeading";

export function About() {
  const { t } = useLocale();

  return (
    <section id="hakkimda" className="scroll-mt-24 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading title={t.about.title} subtitle={t.about.subtitle} />

        <div className="grid gap-8 lg:grid-cols-[1.4fr_1fr]">
          <AnimateIn delay={100}>
            <div className="card-modern space-y-5 !p-8">
              {siteConfig.story.map((paragraph, i) => (
                <p
                  key={i}
                  className={`leading-relaxed text-ink-muted ${
                    i < 2 ? "text-lg font-bold text-ink dark:text-slate-100" : "dark:text-slate-400"
                  }`}
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </AnimateIn>

          <AnimateIn delay={200}>
            <div className="card-modern h-full !p-8">
              <h3 className="mb-5 font-display text-xl font-bold text-ink dark:text-slate-100">
                {t.about.skills}
              </h3>
              <ul className="flex flex-wrap gap-2.5">
                {siteConfig.skills.map((skill, i) => (
                  <li
                    key={skill}
                    className="rounded-full border border-slate-200 bg-gradient-to-br from-white to-sky-50/50 px-4 py-2 text-sm font-medium text-ink-muted shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-sky-200 hover:text-sky-700 hover:shadow-md dark:border-slate-700 dark:from-slate-800 dark:to-slate-900 dark:text-slate-300 dark:hover:border-sky-500 dark:hover:text-sky-400"
                    style={{ animationDelay: `${i * 50}ms` }}
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          </AnimateIn>
        </div>
      </div>
    </section>
  );
}
