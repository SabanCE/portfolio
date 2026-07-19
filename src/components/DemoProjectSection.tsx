"use client";

import { useLocale } from "@/components/providers/LocaleProvider";
import { AnimateIn } from "./AnimateIn";

export function DemoProjectSection() {
  const { t } = useLocale();
  const videoUrl = new URL("https://www.youtube.com/embed/-jpQbrujgT8");

  videoUrl.searchParams.set("autoplay", "1");
  videoUrl.searchParams.set("mute", "1");
  videoUrl.searchParams.set("playsinline", "1");
  videoUrl.searchParams.set("loop", "1");
  videoUrl.searchParams.set("playlist", "-jpQbrujgT8");
  videoUrl.searchParams.set("controls", "0");
  videoUrl.searchParams.set("rel", "0");
  videoUrl.searchParams.set("showinfo", "0");
  videoUrl.searchParams.set("modestbranding", "1");
  videoUrl.searchParams.set("fs", "0");
  videoUrl.searchParams.set("iv_load_policy", "3");

  return (
    <section id="demo-proje" className="scroll-mt-24 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-10">
          <div className="inline-flex items-center rounded-full border border-sky-200 bg-sky-50/80 px-3 py-1 text-sm font-semibold uppercase tracking-[0.25em] text-sky-700 dark:border-sky-800 dark:bg-sky-950/40 dark:text-sky-300">
            Demo
          </div>
          <h2 className="mt-4 section-title dark:text-slate-100">
            Eric&apos;s Choice: The Coffee Date
          </h2>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1fr_1fr]">
          <AnimateIn delay={100}>
            <div className="card-modern flex h-full flex-col justify-between !p-8 transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-600 dark:text-sky-400">
                  Açıklama
                </p>
                <p className="mt-4 text-lg leading-relaxed text-ink-muted dark:text-slate-400">
                  {t.demoProject.description}
                </p>
              </div>
            </div>
          </AnimateIn>

          <AnimateIn delay={200}>
            <div className="card-modern h-full overflow-hidden !p-0 shadow-xl transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl">
              <div className="aspect-video h-full max-h-[420px]">
                <iframe
                  src={videoUrl.toString()}
                  title="Eric's Choice: The Coffee Date demo"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen={false}
                  className="h-full w-full border-0"
                />
              </div>
            </div>
          </AnimateIn>
        </div>
      </div>
    </section>
  );
}
