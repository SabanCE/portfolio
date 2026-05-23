"use client";

import { useLocale } from "@/components/providers/LocaleProvider";
import Image from "next/image";
import { galleryPhotos } from "@/config/gallery";
import { useState } from "react";
import { AnimateIn } from "./AnimateIn";
import { SectionHeading } from "./SectionHeading";

export function Gallery() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const { t } = useLocale();

  return (
    <section id="galeri" className="scroll-mt-24 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          title={t.gallery.title}
          subtitle={t.gallery.subtitle}
        />

        <div className="columns-1 gap-5 sm:columns-2 lg:columns-3">
          {galleryPhotos.map((photo, index) => (
            <AnimateIn key={photo.src} delay={index * 80} className="mb-5">
              <button
                type="button"
                onClick={() => setActiveIndex(index)}
                className="card-modern group block w-full break-inside-avoid overflow-hidden !p-0 text-left"
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden">
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  <span className="absolute bottom-3 right-3 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-sky-600 opacity-0 shadow-md transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0 translate-y-2">
                    {t.gallery.enlarge}
                  </span>
                </div>
                {photo.caption && (
                  <p className="border-t border-slate-100 px-4 py-3 text-xs text-ink-muted">
                    {photo.caption}
                  </p>
                )}
              </button>
            </AnimateIn>
          ))}
        </div>
      </div>

      {activeIndex !== null && (
        <div
          className="fixed inset-0 z-[100] flex animate-fade-in items-center justify-center bg-slate-900/40 p-4 backdrop-blur-md"
          role="dialog"
          aria-modal="true"
          onClick={() => setActiveIndex(null)}
          onKeyDown={(e) => e.key === "Escape" && setActiveIndex(null)}
        >
          <button
            type="button"
            className="absolute right-6 top-6 flex h-10 w-10 items-center justify-center rounded-full bg-white text-lg text-ink shadow-lg transition-transform hover:scale-110"
            onClick={() => setActiveIndex(null)}
            aria-label={t.gallery.close}
          >
            ✕
          </button>
          <div
            className="animate-scale-in max-h-[85vh] max-w-4xl rounded-2xl bg-white p-3 shadow-2xl"
            style={{ animationFillMode: "forwards" }}
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={galleryPhotos[activeIndex].src}
              alt={galleryPhotos[activeIndex].alt}
              width={1200}
              height={900}
              className="max-h-[80vh] w-auto rounded-xl object-contain"
            />
            {galleryPhotos[activeIndex].caption && (
              <p className="px-2 py-3 text-center text-sm text-ink-muted">
                {galleryPhotos[activeIndex].caption}
              </p>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
