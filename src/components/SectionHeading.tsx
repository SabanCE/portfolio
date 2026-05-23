import type { ReactNode } from "react";
import { AnimateIn } from "./AnimateIn";

type SectionHeadingProps = {
  title: string;
  subtitle?: string;
  action?: ReactNode;
};

export function SectionHeading({ title, subtitle, action }: SectionHeadingProps) {
  return (
    <AnimateIn className="mb-12 flex flex-wrap items-end justify-between gap-4">
      <div className="max-w-2xl">
        <h2 className="section-title dark:text-slate-100">{title}</h2>
        {subtitle && (
          <p className="mt-3 text-lg text-ink-muted dark:text-slate-400">
            {subtitle}
          </p>
        )}
      </div>
      {action}
    </AnimateIn>
  );
}
