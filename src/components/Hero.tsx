"use client";

import { motion } from "framer-motion";
import { useLocale } from "@/components/providers/LocaleProvider";
import { siteConfig } from "@/config/site";
import Image from "next/image";
import { VisitorCounter } from "@/components/VisitorCounter";

export function Hero() {
  const { t } = useLocale();

  const heroContainer: any = {
    hidden: { opacity: 0, y: -40, filter: "blur(24px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: 1.8,
        ease: [0.22, 1, 0.36, 1],
        delayChildren: 0.2,
        staggerChildren: 0.16,
      },
    },
  };

  const heroItem: any = {
    hidden: { opacity: 0, y: -24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1.1, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <motion.section
      initial="hidden"
      animate="visible"
      variants={heroContainer}
      className="relative overflow-hidden pt-28 pb-24 md:pt-36 md:pb-32"
    >
      <div className="blob -left-20 top-10 h-72 w-72 bg-sky-300/40 animate-float dark:bg-sky-500/20" />
      <div className="blob -right-16 top-32 h-80 w-80 bg-violet-300/30 animate-float-delayed dark:bg-violet-500/15" />
      <div className="blob bottom-0 left-1/3 h-64 w-64 bg-sky-200/50 animate-pulse-soft dark:bg-sky-500/10" />

      <div className="relative z-10 mx-auto grid max-w-6xl gap-14 px-6 md:grid-cols-[1fr_auto] md:items-center">
        <motion.div
          variants={heroItem}
          className="space-y-6"
        >
          <div className="flex flex-wrap items-center gap-3">
            <p className="inline-flex items-center gap-2 rounded-full border border-sky-100 bg-white/80 px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-sky-700 shadow-soft backdrop-blur-sm dark:border-slate-700 dark:bg-slate-900/80 dark:text-sky-400">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-sky-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-sky-500" />
              </span>
              {siteConfig.location}
            </p>
            <VisitorCounter />
          </div>
          <h1 className="font-display text-4xl font-bold leading-[1.08] tracking-tight text-ink dark:text-slate-100 md:text-6xl">
            {t.hero.greeting}{" "}
            <span className="text-gradient">{siteConfig.name}</span>
          </h1>
          <p className="max-w-xl text-lg leading-relaxed text-ink-muted dark:text-slate-400 md:text-xl">
            <span className="font-medium text-ink dark:text-slate-200">
              {t.site.title}
            </span>
            {" — "}
            {t.site.tagline}
          </p>
          <div className="flex flex-wrap gap-4 pt-3">
            <a href="#projeler" className="btn-primary">
              {t.hero.viewProjects}
              <span aria-hidden>→</span>
            </a>
            <a href="#hakkimda" className="btn-secondary">
              {t.hero.about}
            </a>
          </div>
        </motion.div>

        <motion.div
          variants={heroItem}
          className="relative mx-auto md:mx-0"
        >
          <div className="photo-frame h-56 w-56 md:h-72 md:w-72">
            <div className="relative h-full w-full overflow-hidden rounded-2xl">
              <Image
                src={siteConfig.avatar}
                alt={siteConfig.name}
                fill
                className="object-cover transition-transform duration-700 hover:scale-105"
                priority
                sizes="(max-width: 768px) 224px, 288px"
              />
            </div>
          </div>
          <div className="absolute -right-3 -top-3 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-500 to-violet-500 text-2xl shadow-glow animate-float">
            ✦
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
