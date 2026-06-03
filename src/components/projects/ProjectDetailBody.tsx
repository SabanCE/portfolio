"use client";

import { useLocale } from "@/components/providers/LocaleProvider";

type ProjectDetailBodyProps = {
  slug: string;
  repoName: string;
};

export function ProjectDetailBody({ slug, repoName }: ProjectDetailBodyProps) {
  const { t } = useLocale();

  switch (slug) {
    case "aiyardimcim":
      return (
        <article className="max-w-3xl space-y-8 text-white/60">
          <div>
            <h2 className="font-mono text-[10px] uppercase tracking-[0.25em] text-white/40">
              Öne Çıkan Özellikler
            </h2>
            <ul className="mt-4 space-y-3 text-sm leading-relaxed">
              <li>
                <strong className="text-white/80">Kalıcı Bellek:</strong> Meslek,
                hobiler ve tercihler profilinize işlenir.
              </li>
              <li>
                <strong className="text-white/80">Sosyal Çevre Hafızası:</strong>{" "}
                Bahsettiğiniz kişiler ilişkileriyle kaydedilir.
              </li>
              <li>
                <strong className="text-white/80">Multimodal Analiz:</strong>{" "}
                Fotoğraf, PDF ve Word dökümanları analiz edilir.
              </li>
              <li>
                <strong className="text-white/80">Duygusal Yolculuk:</strong>{" "}
                Canvas API ile ruh hali grafiği.
              </li>
              <li>
                <strong className="text-white/80">Proaktif Görev Çıkarma:</strong>{" "}
                Sohbetten görevler otomatik eklenir.
              </li>
            </ul>
          </div>
          <p className="text-sm leading-relaxed">
            Kotlin, Jetpack Compose, Node.js, Gemini AI ve Firebase ile geliştirilmiş
            full stack AI yaşam asistanı.
          </p>
        </article>
      );

    case "mobilprogramlamaproje":
      return (
        <article className="max-w-3xl text-sm leading-relaxed text-white/60">
          <h2 className="font-mono text-[10px] uppercase tracking-[0.25em] text-white/40">
            Kullanılan Teknolojiler
          </h2>
          <p className="mt-4">Firebase · Kotlin · Google Maps SDK</p>
        </article>
      );

    case "autonomous-kmeans-architecture":
      return (
        <article className="max-w-3xl text-sm leading-relaxed text-white/60">
          <p>
            İnsan müdahalesi olmadan kümeleme parametrelerini optimize eden akıllı
            bir MATLAB algoritması.
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
