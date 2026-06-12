"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useLocale } from "@/components/providers/LocaleProvider";
import Image from "next/image";
import { galleryPhotos } from "@/config/gallery";
import { useEffect, useRef, useState } from "react";
import { SectionHeading } from "./SectionHeading";

export function Gallery() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [isExpanded, setIsExpanded] = useState(false);
  const { t } = useLocale();
  const normalScrollRef = useRef<HTMLDivElement>(null);
  const expandedScrollRef = useRef<HTMLDivElement>(null);
  const autoplayIntervalRef = useRef<NodeJS.Timeout | null>(null);
  const [isHovering, setIsHovering] = useState(false);

  const currentPhoto = activeIndex !== null ? galleryPhotos[activeIndex] : null;

  useEffect(() => {
    const startAutoplay = () => {
      if (autoplayIntervalRef.current) clearInterval(autoplayIntervalRef.current);

      autoplayIntervalRef.current = setInterval(() => {
        const activeContainer = isExpanded ? expandedScrollRef.current : normalScrollRef.current;

        if (activeContainer && !isHovering) {
          const scrollWidth = activeContainer.scrollWidth;
          const clientWidth = activeContainer.clientWidth;
          const currentScroll = activeContainer.scrollLeft;

          if (currentScroll + clientWidth >= scrollWidth - 10) {
            activeContainer.scrollTo({ left: 0, behavior: "smooth" });
          } else {
            activeContainer.scrollBy({ left: 320, behavior: "smooth" });
          }
        }
      }, 3000);
    };

    startAutoplay();

    return () => {
      if (autoplayIntervalRef.current) clearInterval(autoplayIntervalRef.current);
    };
  }, [isHovering, isExpanded]);

  // Keep filmstrip synced to the selected index and preserve scroll position
  useEffect(() => {
    const scrollToIndexIn = (container: HTMLDivElement | null) => {
      if (!container || activeIndex === null) return;
      const child = container.children[activeIndex] as HTMLElement | undefined;
      if (child && typeof child.scrollIntoView === "function") {
        child.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
      }
    };

    // When expanding, if there's a selected index, center it in the expanded strip.
    if (isExpanded) {
      // if no explicit activeIndex, preserve exact scroll position
      if (activeIndex === null && normalScrollRef.current && expandedScrollRef.current) {
        expandedScrollRef.current.scrollLeft = normalScrollRef.current.scrollLeft;
      }
      scrollToIndexIn(expandedScrollRef.current);
    } else {
      // when collapsing or just selecting an index, make sure the visible strip centers
      scrollToIndexIn(normalScrollRef.current);
    }
  }, [activeIndex, isExpanded]);

  return (
    <section id="galeri" className="scroll-mt-24 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading title={t.gallery.title} subtitle={t.gallery.subtitle} />

        <motion.div layoutId="gallery-frame" className="relative mt-10 overflow-hidden rounded-3xl border border-slate-200/80 bg-gradient-to-br from-white via-sky-50/30 to-violet-50/30 p-8 shadow-card dark:border-slate-700 dark:from-slate-900 dark:via-slate-900 dark:to-slate-800">
          <div className="absolute top-3 left-6 right-6 flex gap-3">
            {[...Array(12)].map((_, i) => (
              <div
                key={i}
                className="h-3 w-2 rounded-full bg-slate-200 shadow-inner dark:bg-slate-600"
              />
            ))}
          </div>

          <div className="absolute bottom-16 left-6 right-6 flex gap-3">
            {[...Array(12)].map((_, i) => (
              <div
                key={i}
                className="h-3 w-2 rounded-full bg-slate-200 shadow-inner dark:bg-slate-600"
              />
            ))}
          </div>

          <div className="relative pt-6 pb-20">
            <div className="absolute right-6 top-6 z-20 flex items-center gap-2">
              <button
                type="button"
                onClick={() => setIsExpanded(true)}
                className="rounded-full bg-slate-900/90 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-slate-950/20 transition hover:bg-slate-800"
              >
                Büyüt
              </button>
            </div>

            <div
              ref={normalScrollRef}
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
              className="flex gap-5 overflow-x-auto scroll-smooth rounded-[2rem] bg-slate-100/90 px-4 py-5 shadow-inner ring-1 ring-slate-200/70 dark:bg-slate-950/70 dark:ring-slate-700"
              style={{ scrollBehavior: "smooth" }}
            >
              {galleryPhotos.map((photo, index) => (
                <motion.div
                  key={photo.src}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.45, delay: index * 0.06, ease: "easeOut" }}
                  viewport={{ once: true, amount: 0.3 }}
                  className="flex-shrink-0 min-w-[18rem] sm:min-w-[22rem] md:min-w-[26rem] lg:min-w-[30rem]"
                >
                  <button
                    type="button"
                    onClick={() => setActiveIndex(index)}
                    className="group relative flex h-[22rem] w-full overflow-hidden rounded-[2rem] border border-slate-200/70 bg-white/95 shadow-[0_24px_80px_rgba(15,23,42,0.12)] transition duration-300 hover:-translate-y-1 hover:shadow-2xl active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-sky-400/50 focus:ring-offset-2 focus:ring-offset-slate-100 dark:border-slate-700 dark:bg-slate-950"
                  >
                    <div className="relative h-full w-full overflow-hidden bg-slate-900">
                      <Image
                        src={photo.src}
                        alt={photo.alt}
                        fill
                        className="object-cover transition-transform duration-500 ease-out group-hover:scale-110"
                        sizes="(max-width: 640px) 90vw, (max-width: 1024px) 60vw, 28rem"
                      />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                    <div className="absolute inset-0 flex items-end p-4">
                      <div className="w-full rounded-3xl bg-slate-950/70 px-4 py-3 backdrop-blur-sm opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                        <p className="text-sm font-semibold uppercase tracking-[0.15em] text-sky-400">
                          {t.gallery.enlarge}
                        </p>
                        {photo.caption && (
                          <p className="mt-2 text-base font-semibold text-white">
                            {photo.caption}
                          </p>
                        )}
                      </div>
                    </div>
                  </button>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      <AnimatePresence>
        {isExpanded && (
          <motion.div
            className="fixed inset-0 z-[90] flex items-center justify-center bg-white/65 p-4 backdrop-blur-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              layoutId="gallery-frame"
              className="relative flex w-full max-w-[1600px] flex-col overflow-hidden rounded-[2rem] border border-slate-200/80 bg-gradient-to-br from-white via-sky-50/30 to-violet-50/30 p-4 pb-12 shadow-2xl ring-1 ring-slate-200/80 dark:border-slate-700 dark:from-slate-900 dark:via-slate-900 dark:to-slate-800"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="absolute top-4 left-6 right-6 flex gap-3">
                {[...Array(12)].map((_, i) => (
                  <div
                    key={i}
                    className="h-3 w-2 rounded-full bg-slate-200 shadow-inner dark:bg-slate-600"
                  />
                ))}
              </div>

              <div className="absolute bottom-20 left-6 right-6 flex gap-3">
                {[...Array(12)].map((_, i) => (
                  <div
                    key={i}
                    className="h-3 w-2 rounded-full bg-slate-200 shadow-inner dark:bg-slate-600"
                  />
                ))}
              </div>

              <div className="flex items-center justify-end gap-3 px-2 pb-4">
                <button
                  type="button"
                  onClick={() => setIsExpanded(false)}
                  className="rounded-full bg-slate-900/90 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-slate-950/20 transition hover:bg-slate-800"
                >
                  Küçült
                </button>
              </div>
              <div
                ref={expandedScrollRef}
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
                className="flex gap-5 overflow-x-auto scroll-smooth rounded-[1.75rem] bg-slate-100/90 px-4 py-5 shadow-inner ring-1 ring-slate-200/70 dark:bg-slate-950/70 dark:ring-slate-700"
                style={{ scrollBehavior: "smooth" }}
              >
                {galleryPhotos.map((photo, index) => (
                  <motion.div
                    key={photo.src}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.45, delay: index * 0.05, ease: "easeOut" }}
                    viewport={{ once: true, amount: 0.3 }}
                    className="flex-shrink-0 min-w-[24rem] md:min-w-[30rem] lg:min-w-[36rem]"
                  >
                    <button
                      type="button"
                      onClick={() => setActiveIndex(index)}
                      className="group relative flex h-[30rem] w-full overflow-hidden rounded-[1.75rem] border border-slate-200/70 bg-white/95 shadow-[0_24px_80px_rgba(15,23,42,0.12)] transition duration-300 hover:-translate-y-1 hover:shadow-2xl active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-sky-400/50 focus:ring-offset-2 focus:ring-offset-slate-100 dark:border-slate-700 dark:bg-slate-900"
                    >
                      <div className="relative h-full w-full overflow-hidden bg-slate-900">
                        <Image
                          src={photo.src}
                          alt={photo.alt}
                          fill
                          className="object-cover transition-transform duration-500 ease-out group-hover:scale-110"
                          sizes="(max-width: 640px) 90vw, (max-width: 1024px) 50vw, 36rem"
                        />
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                      <div className="absolute inset-0 flex items-end p-4">
                        <div className="w-full rounded-3xl bg-slate-950/70 px-4 py-3 backdrop-blur-sm opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                          <p className="text-sm font-semibold uppercase tracking-[0.15em] text-sky-400">
                            {t.gallery.enlarge}
                          </p>
                          {photo.caption && (
                            <p className="mt-2 text-base font-semibold text-white">
                              {photo.caption}
                            </p>
                          )}
                        </div>
                      </div>
                    </button>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {activeIndex !== null && (
        <div
          className="fixed inset-0 z-[100] flex animate-fade-in items-center justify-center bg-slate-900/50 p-4 backdrop-blur-md"
          role="dialog"
          aria-modal="true"
          onClick={() => setActiveIndex(null)}
          onKeyDown={(e) => {
            if (e.key === "Escape") setActiveIndex(null);
            if (e.key === "ArrowLeft")
              setActiveIndex((prev) =>
                prev === null ? null : prev === 0 ? galleryPhotos.length - 1 : prev - 1
              );
            if (e.key === "ArrowRight")
              setActiveIndex((prev) =>
                prev === null ? null : (prev + 1) % galleryPhotos.length
              );
          }}
        >
          <button
            type="button"
            className="absolute right-6 top-6 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-lg text-ink shadow-lg transition-all hover:bg-white hover:scale-110 z-10"
            onClick={() => setActiveIndex(null)}
            aria-label={t.gallery.close}
          >
            ✕
          </button>

          <button
            type="button"
            className="absolute left-4 top-1/2 -translate-y-1/2 flex h-12 w-12 items-center justify-center rounded-full bg-white/80 text-xl text-ink shadow-lg transition-all hover:bg-white hover:scale-110"
            onClick={(e) => {
              e.stopPropagation();
              setActiveIndex((prev) =>
                prev === null ? null : prev === 0 ? galleryPhotos.length - 1 : prev - 1
              );
            }}
            aria-label="Previous photo"
          >
            ←
          </button>

          <motion.div
            className="animate-scale-in max-h-[90vh] w-[min(96vw,1200px)] rounded-3xl bg-white shadow-2xl overflow-hidden"
            style={{ animationFillMode: "forwards" }}
            onClick={(e) => e.stopPropagation()}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
          >
            <div className="relative flex h-[75vh] items-center justify-center bg-slate-900">
              <Image
                src={currentPhoto?.src ?? ""}
                alt={currentPhoto?.alt ?? ""}
                fill
                className="object-contain"
                sizes="(max-width: 768px) 100vw, 1200px"
                priority
              />
            </div>
            {currentPhoto?.caption && (
              <div className="px-4 py-4 border-t border-slate-200">
                <p className="text-center text-sm font-medium text-ink">
                  {currentPhoto.caption}
                </p>
                <p className="text-center text-xs text-ink-muted mt-2">
                  {activeIndex !== null ? activeIndex + 1 : 0} / {galleryPhotos.length}
                </p>
              </div>
            )}
          </motion.div>

          <button
            type="button"
            className="absolute right-4 top-1/2 -translate-y-1/2 flex h-12 w-12 items-center justify-center rounded-full bg-white/80 text-xl text-ink shadow-lg transition-all hover:bg-white hover:scale-110"
            onClick={(e) => {
              e.stopPropagation();
              setActiveIndex((prev) =>
                prev === null ? null : (prev + 1) % galleryPhotos.length
              );
            }}
            aria-label="Next photo"
          >
            →
          </button>
        </div>
      )}
    </section>
  );
}
