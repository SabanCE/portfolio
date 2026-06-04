"use client";

import Image from "next/image";
import { AnimatePresence, motion, useMotionValue, useTransform } from "framer-motion";
import Link from "next/link";
import { useRef, useState } from "react";
import type { GitHubRepo } from "@/lib/github";
import { projectDetailPath, repoToSlug } from "@/lib/project-slug";
import { getProjectMedia } from "@/lib/project-media";
import type { TranslationKey } from "@/i18n/translations";

type ProjectDisplayInfo = {
  title: string;
  description: string;
};

export type ProjectCardProps = {
  repo: GitHubRepo;
  index: number;
  t: TranslationKey;
  info: ProjectDisplayInfo;
};

const staggerClasses = [
  "stagger-1",
  "stagger-2",
  "stagger-3",
  "stagger-4",
  "stagger-5",
  "stagger-6",
];

const DEMO_OPEN_DELAY_MS = 1000;
const DEMO_REOPEN_DELAY_MS = 1000;
let lastDemoCloseAt = 0;

export function ProjectCard({ repo, index, t, info }: ProjectCardProps) {
  const stagger = staggerClasses[index % staggerClasses.length];
  const [isHovered, setIsHovered] = useState(false);
  const hoverTimeout = useRef<number | null>(null);
  const openTimeout = useRef<number | null>(null);

  const slug = repoToSlug(repo.name);
  const mediaItems = getProjectMedia(slug);
  const previewImage = mediaItems.find((item) => item.type === "image");

  const pointerX = useMotionValue(0.5);
  const pointerY = useMotionValue(0.5);
  const rotateX = useTransform(pointerY, [0, 1], [10, -10]);
  const rotateY = useTransform(pointerX, [0, 1], [-10, 10]);

  const handlePointerMove = (event: any) => {
    const rect = event.currentTarget.getBoundingClientRect();
    pointerX.set((event.clientX - rect.left) / rect.width);
    pointerY.set((event.clientY - rect.top) / rect.height);
  };

  const handlePointerLeave = () => {
    pointerX.set(0.5);
    pointerY.set(0.5);
  };

  const preventImmediateReopen = () => {
    lastDemoCloseAt = Date.now() + DEMO_REOPEN_DELAY_MS;
  };

  const clearOpenTimeout = () => {
    if (openTimeout.current) {
      window.clearTimeout(openTimeout.current);
      openTimeout.current = null;
    }
  };

  const handleHoverStart = () => {
    if (Date.now() < lastDemoCloseAt) {
      return;
    }

    clearOpenTimeout();
    if (hoverTimeout.current) {
      window.clearTimeout(hoverTimeout.current);
      hoverTimeout.current = null;
    }

    if (!isHovered) {
      openTimeout.current = window.setTimeout(() => {
        setIsHovered(true);
        openTimeout.current = null;
      }, DEMO_OPEN_DELAY_MS);
    }
  };

  const handleHoverEnd = () => {
    clearOpenTimeout();
    if (hoverTimeout.current) {
      window.clearTimeout(hoverTimeout.current);
    }
    hoverTimeout.current = window.setTimeout(() => {
      setIsHovered(false);
      preventImmediateReopen();
      hoverTimeout.current = null;
    }, 120);
  };

  const handleOverlayEnter = () => {
    clearOpenTimeout();
    if (hoverTimeout.current) {
      window.clearTimeout(hoverTimeout.current);
      hoverTimeout.current = null;
    }
    setIsHovered(true);
  };

  const handleOverlayLeave = () => {
    clearOpenTimeout();
    if (hoverTimeout.current) {
      window.clearTimeout(hoverTimeout.current);
    }
    hoverTimeout.current = window.setTimeout(() => {
      setIsHovered(false);
      preventImmediateReopen();
      hoverTimeout.current = null;
    }, 120);
  };

  return (
    <>
      <motion.article
        className={`card-modern group relative flex flex-col opacity-0 animate-fade-up ${stagger}`}
        style={{ perspective: 1200, animationFillMode: "forwards" }}
        onPointerMove={handlePointerMove}
        onPointerEnter={handleHoverStart}
        onPointerLeave={(event) => {
          handlePointerLeave();
          handleHoverEnd();
        }}
        whileHover={{ scale: 1.04 }}
        transition={{ type: "spring", stiffness: 220, damping: 22 }}
      >
      <motion.div
        className="h-full"
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      >
        <div className="mb-4 flex items-start justify-between gap-3">
          <h3 className="font-display text-lg font-bold transition-colors duration-300 group-hover:text-sky-600 dark:group-hover:text-sky-400">
            <Link href={projectDetailPath(repo.name)}>{info.title}</Link>
          </h3>

          {repo.language && (
            <span className="shrink-0 rounded-full bg-gradient-to-r from-sky-100 to-violet-100 px-3 py-1 text-xs font-semibold text-sky-700 dark:from-sky-900/50 dark:to-violet-900/50 dark:text-sky-300">
              {repo.language}
            </span>
          )}
        </div>

        <p className="mb-6 flex-1 text-sm leading-relaxed text-ink-muted line-clamp-3 dark:text-slate-400">
          {info.description}
        </p>

        <div className="flex items-center gap-1 border-t border-slate-100 pt-4 text-sm text-ink-faint dark:border-slate-700 dark:text-slate-500">
          <span className="text-amber-400">★</span>
          {repo.stargazers_count}
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          <Link
            href={projectDetailPath(repo.name)}
            className="btn-primary flex-1 !px-4 !py-2 text-center text-xs sm:flex-none"
          >
            {t.projects.details}
          </Link>

          <a
            href={repo.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary !px-4 !py-2 text-xs"
          >
            {t.projects.openRepo}
          </a>
        </div>

        <div className="mt-4 rounded-2xl border border-slate-100 bg-slate-50/90 p-3 text-xs text-slate-700 opacity-0 transition-all duration-300 group-hover:opacity-100 dark:border-slate-700 dark:bg-slate-950/80 dark:text-slate-200">
          <div className="mb-2 font-semibold text-slate-900 dark:text-slate-100">
            Canlı Demo & Teknoloji
          </div>
          <div className="flex flex-wrap gap-2">
            <span className="rounded-full bg-slate-100 px-2 py-1 dark:bg-slate-800">
              {repo.language ?? "Çoklu"}
            </span>
            {repo.homepage ? (
              <a
                href={repo.homepage}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-sky-100 px-2 py-1 text-sky-700 transition hover:bg-sky-200 dark:bg-sky-900/50 dark:text-sky-200"
              >
                Canlı Demo
              </a>
            ) : (
              <span className="rounded-full bg-slate-200 px-2 py-1 dark:bg-slate-800">
                GitHub Kaynağı
              </span>
            )}
          </div>
        </div>
      </motion.div>
    </motion.article>

    <AnimatePresence>
      {isHovered && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/40 p-6 backdrop-blur-xl pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
        >
          <motion.div
            className="pointer-events-auto relative mx-auto flex w-full max-w-4xl flex-col overflow-hidden rounded-[2rem] border border-slate-200/80 bg-white text-slate-900 shadow-2xl"
            initial={{ scale: 0.96, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.96, opacity: 0 }}
            transition={{ duration: 0.28, ease: "easeOut" }}
            onPointerEnter={handleOverlayEnter}
            onPointerLeave={handleOverlayLeave}
          >
            <div className="grid gap-6 lg:grid-cols-[1.2fr_0.9fr] p-6 lg:p-8">
              <div className="rounded-[1.75rem] border border-slate-200/70 bg-slate-100 p-4 shadow-sm">
                {previewImage ? (
                  <div className="overflow-hidden rounded-[1.5rem] bg-slate-200" style={{ maxHeight: "60vh" }}>
                    <Image
                      src={previewImage.src}
                      alt={previewImage.alt}
                      width={previewImage.width ?? 900}
                      height={previewImage.height ?? 600}
                      className="block h-auto max-h-[60vh] w-full object-contain"
                    />
                  </div>
                ) : (
                  <div className="flex h-[320px] items-center justify-center rounded-[1.5rem] bg-slate-200 text-center text-slate-500">
                    <span>Demo görseli mevcut değil.</span>
                  </div>
                )}
              </div>

              <div className="flex flex-col justify-between gap-6">
                <div>
                  <p className="text-xs uppercase tracking-[0.35em] text-sky-500/80">
                    Proje Önizlemesi
                  </p>
                  <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950">
                    {info.title}
                  </h2>
                  
                </div>

                <div className="space-y-4">
                  <div className="rounded-3xl border border-slate-200/80 bg-slate-50 p-4">
                  <div className="mb-3 text-sm font-semibold text-slate-900">Kullanılan Teknolojiler</div>
                  <div className="space-y-3 text-sm text-slate-700">
                    <div className="flex items-center justify-between gap-3">
                      <span className="text-slate-500">Teknoloji</span>
                      <span className="font-semibold text-slate-900">{repo.language ?? "Çoklu"}</span>
                      </div>
                    </div>
                  </div>

                  <div className="grid gap-3 sm:grid-cols-2">
                    <Link
                      href={projectDetailPath(repo.name)}
                      className="btn-primary !px-4 !py-3 text-sm"
                    >
                      Detay Sayfası
                    </Link>
                    <a
                      href={repo.homepage ?? repo.html_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-secondary !px-4 !py-3 text-sm"
                    >
                      {repo.homepage ? "Canlı Demo" : "GitHub Kaynağı"}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
    </>
  );
}
