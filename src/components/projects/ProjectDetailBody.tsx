"use client";

import { useLocale } from "@/components/providers/LocaleProvider";

type ProjectDetailBodyProps = {
  slug: string;
  repoName: string;
};

export function ProjectDetailBody({ slug, repoName }: ProjectDetailBodyProps) {
  const { locale, t } = useLocale();

  switch (slug) {
    case "aiyardimcim":
      return (
        <article className="max-w-3xl space-y-8 text-white/60">
          <div>
            <h2 className="font-mono text-[10px] uppercase tracking-[0.25em] text-white/40">
              {t.projectPage.features}
            </h2>
            <ul className="mt-4 space-y-3 text-sm leading-relaxed">
              <li>
                <strong className="text-white/80">
                  {locale === "en" ? "Persistent Memory:" : "Kalıcı Bellek:"}
                </strong>{" "}
                {locale === "en"
                  ? "Stores your profession, hobbies, and preferences to keep conversations coherent over time."
                  : "Meslek, hobiler ve tercihler profilinize işlenir."}
              </li>
              <li>
                <strong className="text-white/80">
                  {locale === "en" ? "Social Context Retention:" : "Sosyal Çevre Hafızası:"}
                </strong>{" "}
                {locale === "en"
                  ? "Remembers people and relationships mentioned in chat so follow-up questions stay meaningful."
                  : "Bahsettiğiniz kişiler ilişkileriyle kaydedilir."}
              </li>
              <li>
                <strong className="text-white/80">
                  {locale === "en" ? "Multimodal Analysis:" : "Multimodal Analiz:"}
                </strong>{" "}
                {locale === "en"
                  ? "Processes images, PDFs, and Word documents for richer AI responses."
                  : "Fotoğraf, PDF ve Word dökümanları analiz edilir."}
              </li>
              <li>
                <strong className="text-white/80">
                  {locale === "en" ? "Emotional Journey:" : "Duygusal Yolculuk:"}
                </strong>{" "}
                {locale === "en"
                  ? "Implements a custom canvas-based mood tracker for a more engaging UI."
                  : "Canvas API ile ruh hali grafiği."}
              </li>
              <li>
                <strong className="text-white/80">
                  {locale === "en" ? "Proactive Task Extraction:" : "Proaktif Görev Çıkarma:"}
                </strong>{" "}
                {locale === "en"
                  ? "Automatically extracts action items from conversations and adds them to a task list."
                  : "Sohbetten görevler otomatik eklenir."}
              </li>
            </ul>
          </div>
          <p className="text-sm leading-relaxed">
            {locale === "en"
              ? "A full stack AI life assistant built with Kotlin, Jetpack Compose, Node.js, Gemini AI, and Firebase."
              : "Kotlin, Jetpack Compose, Node.js, Gemini AI ve Firebase ile geliştirilmiş full stack AI yaşam asistanı."}
          </p>
        </article>
      );

    case "mobilprogramlamaproje":
      return (
        <article className="max-w-3xl text-sm leading-relaxed text-white/60">
          <h2 className="font-mono text-[10px] uppercase tracking-[0.25em] text-white/40">
            {t.projectPage.technologies}
          </h2>
          <p className="mt-4">
            {locale === "en"
              ? "Firebase · Kotlin · Google Maps SDK"
              : "Firebase · Kotlin · Google Maps SDK"}
          </p>
        </article>
      );

    case "autonomous-kmeans-architecture":
      return (
        <article className="max-w-3xl text-sm leading-relaxed text-white/60">
          <p>
            {locale === "en"
              ? "An intelligent MATLAB algorithm that optimizes clustering parameters without human intervention."
              : "İnsan müdahalesi olmadan kümeleme parametrelerini optimize eden akıllı bir MATLAB algoritması."}
          </p>
        </article>
      );

    default:
      return (
        <div className="max-w-3xl border border-dashed border-white/15 p-8 text-center">
          <p className="text-sm text-white/60">{t.projectPage.noDetail}</p>
          <p className="mt-2 font-mono text-[10px] uppercase tracking-widest text-white/30">
            {repoName}
          </p>
        </div>
      );
  }
}
