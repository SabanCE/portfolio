"use client";

import { motion } from "framer-motion";
import { useLocale } from "@/components/providers/LocaleProvider";
import Image from "next/image";
import { galleryPhotos } from "@/config/gallery";
import { useState, useRef, useEffect } from "react";
import { SectionHeading } from "./SectionHeading";

export function Gallery() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const { t } = useLocale();
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const autoplayIntervalRef = useRef<NodeJS.Timeout | null>(null);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const startAutoplay = () => {
      if (autoplayIntervalRef.current) clearInterval(autoplayIntervalRef.current);

      autoplayIntervalRef.current = setInterval(() => {
        if (scrollContainerRef.current && !isHovering) {
          const container = scrollContainerRef.current;
          const scrollWidth = container.scrollWidth;
          const clientWidth = container.clientWidth;
          const currentScroll = container.scrollLeft;

          // Eğer sona ulaştıysa başa dön
          if (currentScroll + clientWidth >= scrollWidth - 10) {
            container.scrollTo({
              left: 0,
              behavior: "smooth",
            });
          } else {
            container.scrollBy({
              left: 320,
              behavior: "smooth",
            });
          }
        }
      }, 3000);
    };

    startAutoplay();

    return () => {
      if (autoplayIntervalRef.current) clearInterval(autoplayIntervalRef.current);
    };
  }, [isHovering]);


  return (
    <section id="galeri" className="scroll-mt-24 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          title={t.gallery.title}
          subtitle={t.gallery.subtitle}
        />

        {/* Film Şeridi Frame Container */}
        <div className="relative mt-10 overflow-hidden rounded-3xl border border-slate-200/80 bg-gradient-to-br from-white via-sky-50/30 to-violet-50/30 p-8 shadow-card dark:border-slate-700 dark:from-slate-900 dark:via-slate-900 dark:to-slate-800">
          {/* Film Şeridi Dekorasyonu - Üst */}
          <div className="absolute top-3 left-6 right-6 flex gap-3">
            {[...Array(12)].map((_, i) => (
              <div
                key={i}
                className="h-3 w-2 rounded-full bg-slate-200 shadow-inner dark:bg-slate-600"
              />
            ))}
          </div>

          {/* Film Şeridi Dekorasyonu - Alt */}
          <div className="absolute bottom-3 left-6 right-6 flex gap-3">
            {[...Array(12)].map((_, i) => (
              <div
                key={i}
                className="h-3 w-2 rounded-full bg-slate-200 shadow-inner dark:bg-slate-600"
              />
            ))}
          </div>

          {/* İçerik Container */}
          <div className="relative pt-6 pb-6">
            {/* Filmstrip Gallery */}
            <div
              ref={scrollContainerRef}
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
              className="flex gap-6 overflow-x-auto scroll-smooth rounded-3xl bg-slate-100/80 px-4 py-3 shadow-inner ring-1 ring-slate-200/70 dark:bg-slate-950/70 dark:ring-slate-700"
              style={{ scrollBehavior: "smooth" }}
            >
              {galleryPhotos.map((photo, index) => (
                <motion.div
                  key={photo.src}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.05,
                    ease: "easeOut",
                  }}
                  viewport={{ once: true, amount: 0.3 }}
                  className="flex-shrink-0"
                >
                  <button
                    type="button"
                    onClick={() => setActiveIndex(index)}
                    className="group relative h-[24rem] w-[34rem] overflow-hidden rounded-3xl shadow-xl transition-all duration-300 hover:shadow-2xl hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:ring-offset-2 focus:ring-offset-slate-100 border-4 border-slate-200 bg-slate-50 dark:border-slate-700 dark:bg-slate-900"
                  >
                    <Image
                      src={photo.src}
                      alt={photo.alt}
                      fill
                      className="object-cover transition-transform duration-500 ease-out group-hover:scale-110"
                      sizes="400px"
                    />
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                    {/* Caption Overlay */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                      <span className="rounded-full bg-white/90 px-4 py-2 text-sm font-semibold text-sky-600 shadow-lg">
                        {t.gallery.enlarge}
                      </span>
                    </div>

                    {/* Caption at Bottom */}
                    {photo.caption && (
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-slate-900 to-transparent px-3 py-3">
                        <p className="text-sm font-medium text-white line-clamp-2">
                          {photo.caption}
                        </p>
                      </div>
                    )}
                  </button>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

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
          {/* Close Button */}
          <button
            type="button"
            className="absolute right-6 top-6 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-lg text-ink shadow-lg transition-all hover:bg-white hover:scale-110 z-10"
            onClick={() => setActiveIndex(null)}
            aria-label={t.gallery.close}
          >
            ✕
          </button>

          {/* Previous Button */}
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

          {/* Modal Content */}
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
                src={galleryPhotos[activeIndex].src}
                alt={galleryPhotos[activeIndex].alt}
                fill
                className="object-contain"
                sizes="(max-width: 768px) 100vw, 1200px"
                priority
              />
            </div>
            {galleryPhotos[activeIndex].caption && (
              <div className="px-4 py-4 border-t border-slate-200">
                <p className="text-center text-sm font-medium text-ink">
                  {galleryPhotos[activeIndex].caption}
                </p>
                <p className="text-center text-xs text-ink-muted mt-2">
                  {activeIndex + 1} / {galleryPhotos.length}
                </p>
              </div>
            )}
          </motion.div>

          {/* Next Button */}
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
