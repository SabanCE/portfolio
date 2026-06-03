"use client";

import type { ProjectMediaItem } from "@/lib/project-media";
import { getYoutubeThumbnail } from "@/lib/project-media";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

type ProjectDetailViewProps = {
  title: string;
  description: string;
  year: string;
  tags: string[];
  repoUrl: string;
  media: ProjectMediaItem[];
  githubLabel: string;
  backLabel: string;
  children?: React.ReactNode;
};

function MediaThumb({
  item,
  active,
  onClick,
}: {
  item: ProjectMediaItem;
  active: boolean;
  onClick: () => void;
}) {
  const thumbSrc =
    item.type === "image"
      ? item.src
      : item.type === "youtube"
        ? getYoutubeThumbnail(item.src)
        : null;

  return (
    <button
      type="button"
      onClick={onClick}
      className={`relative h-14 w-20 shrink-0 overflow-hidden border transition-all duration-300 md:h-16 md:w-24 ${
        active
          ? "border-white/60 opacity-100"
          : "border-white/15 opacity-50 hover:border-white/30 hover:opacity-80"
      }`}
      aria-label={item.alt}
    >
      {thumbSrc ? (
        <Image
          src={thumbSrc}
          alt=""
          fill
          className="object-cover"
          sizes="96px"
        />
      ) : (
        <span className="flex h-full w-full items-center justify-center bg-neutral-900 font-mono text-[8px] uppercase tracking-widest text-white/40">
          Demo
        </span>
      )}
    </button>
  );
}

function MediaHero({ item }: { item: ProjectMediaItem }) {
  if (item.type === "youtube" || item.type === "iframe") {
    return (
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-neutral-950">
        <iframe
          src={item.src}
          title={item.alt}
          className="absolute inset-0 h-full w-full"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          referrerPolicy="strict-origin-when-cross-origin"
        />
      </div>
    );
  }

  return (
    <div className="relative flex min-h-[280px] w-full items-center justify-center bg-neutral-950 md:min-h-[420px]">
      <Image
        src={item.src}
        alt={item.alt}
        width={item.width ?? 800}
        height={item.height ?? 600}
        className="h-auto max-h-[70vh] w-auto max-w-full object-contain"
        priority
      />
    </div>
  );
}

export function ProjectDetailView({
  title,
  description,
  year,
  tags,
  repoUrl,
  media,
  githubLabel,
  backLabel,
  children,
}: ProjectDetailViewProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeMedia = media[activeIndex] ?? null;

  return (
    <div className="relative min-h-screen bg-black pb-24 text-white">
      <div
        className="pointer-events-none absolute left-1/2 top-1/3 h-[min(80vw,520px)] w-[min(80vw,520px)] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[120px]"
        style={{
          background:
            "radial-gradient(circle, rgba(220, 60, 40, 0.25) 0%, transparent 70%)",
        }}
        aria-hidden
      />

      <div className="relative mx-auto max-w-7xl px-4 pt-8 md:px-6 md:pt-12">
        <Link
          href="/#projeler"
          className="inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.25em] text-white/50 transition-colors hover:text-white"
        >
          <span aria-hidden>↖</span>
          {backLabel}
        </Link>

        <div className="mt-12 grid gap-10 lg:mt-16 lg:grid-cols-[minmax(260px,340px)_auto_1fr] lg:gap-8 xl:gap-12">
          <div className="lg:pt-4">
            <div className="flex flex-wrap items-end gap-3">
              <h1 className="font-display text-4xl font-bold tracking-tight md:text-5xl">
                {title}
              </h1>
              <span className="pb-1 font-mono text-sm text-white/40">{year}</span>
            </div>

            <p className="mt-6 text-sm leading-relaxed text-white/55 md:text-base">
              {description}
            </p>

            {tags.length > 0 && (
              <ul className="mt-8 flex flex-wrap gap-2">
                {tags.map((tag) => (
                  <li
                    key={tag}
                    className="rounded-full border border-white/20 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.15em] text-white/60"
                  >
                    {tag}
                  </li>
                ))}
              </ul>
            )}

            <a
              href={repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex font-mono text-[10px] uppercase tracking-[0.2em] text-white/50 transition-colors hover:text-white"
            >
              {githubLabel} →
            </a>
          </div>

          {media.length > 1 && (
            <div className="flex flex-row gap-2 overflow-x-auto lg:flex-col lg:overflow-visible">
              {media.map((item, index) => (
                <MediaThumb
                  key={`${item.src}-${index}`}
                  item={item}
                  active={index === activeIndex}
                  onClick={() => setActiveIndex(index)}
                />
              ))}
            </div>
          )}

          <div className="min-w-0">
            {activeMedia ? (
              <MediaHero item={activeMedia} />
            ) : (
              <div className="flex aspect-[16/10] items-center justify-center border border-dashed border-white/15 bg-neutral-950">
                <p className="font-mono text-xs uppercase tracking-widest text-white/30">
                  Preview
                </p>
              </div>
            )}
            {activeMedia?.caption && (
              <p className="mt-3 font-mono text-[10px] uppercase tracking-[0.2em] text-white/40">
                {activeMedia.caption}
              </p>
            )}
          </div>
        </div>

        {children && (
          <div className="prose-project mt-16 border-t border-white/10 pt-12 lg:mt-20">
            {children}
          </div>
        )}
      </div>
    </div>
  );
}
