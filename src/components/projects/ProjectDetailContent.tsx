"use client";

import { useLocale } from "@/components/providers/LocaleProvider";
import { getProjectDisplayInfo } from "@/config/project-details";
import Image from "next/image";

function ProjectDemoLink({
  description,
  href,
  label,
}: {
  description: string;
  href: string;
  label: string;
}) {
  return (
    <div className="rounded-2xl bg-gradient-to-br from-slate-800 via-slate-900 to-violet-950 p-8 shadow-card">
      <p className="text-lg leading-relaxed text-white">{description}</p>
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="btn-primary mt-6 inline-flex !text-sm !text-white no-underline hover:!text-white"
      >
        {label}
      </a>
    </div>
  );
}

const chatappScreenshots = [
  { src: "/screenshots/chatapp/login.jpeg", alt: "ChatApp giriş ekranı" },
  { src: "/screenshots/chatapp/home.jpeg", alt: "ChatApp ana ekran" },
  { src: "/screenshots/chatapp/onetoone.jpeg", alt: "ChatApp bire bir sohbet" },
  { src: "/screenshots/chatapp/groupchat.jpeg", alt: "ChatApp grup sohbeti" },
  { src: "/screenshots/chatapp/newgroup.jpeg", alt: "ChatApp yeni grup oluşturma" },
  { src: "/screenshots/chatapp/settings.jpeg", alt: "ChatApp ayarlar ekranı" },
] as const;

const gymScreenshots = [
  { src: "/screenshots/gym/h1.png", alt: "GymTracking ana sayfa", width: 382, height: 829 },
  { src: "/screenshots/gym/h2.png", alt: "GymTracking ana sayfa görünümü", width: 403, height: 831 },
  { src: "/screenshots/gym/w1.png", alt: "GymTracking egzersiz takibi", width: 417, height: 854 },
  { src: "/screenshots/gym/w2.png", alt: "GymTracking antrenman ekranı", width: 398, height: 840 },
  { src: "/screenshots/gym/m1.png", alt: "GymTracking makro hesaplama", width: 401, height: 841 },
  { src: "/screenshots/gym/p1.png", alt: "GymTracking ilerleme izleme", width: 398, height: 851 },
  { src: "/screenshots/gym/g1.png", alt: "GymTracking genel görünüm", width: 412, height: 835 },
  { src: "/screenshots/gym/np1.png", alt: "GymTracking yeni program", width: 422, height: 859 },
] as const;

const zirveScreenshots = [
  {
    src: "/screenshots/egz/1777465641258.jfif",
    alt: "Çekiliş sayfası ekran görüntüsü 1",
    width: 1280,
    height: 608,
  },
  {
    src: "/screenshots/egz/1777465641349.jfif",
    alt: "Çekiliş sayfası ekran görüntüsü 2",
    width: 1280,
    height: 603,
  },
  {
    src: "/screenshots/egz/1777465641517.jfif",
    alt: "Çekiliş sayfası ekran görüntüsü 3",
    width: 1280,
    height: 608,
  },
] as const;

const kampusScreenshots = [
  { src: "/screenshots/kampus/giris.jpeg", alt: "Kampüs Güvende giriş ekranı" },
  { src: "/screenshots/kampus/anaekran.jpeg", alt: "Kampüs Güvende ana ekran" },
  { src: "/screenshots/kampus/acildurum.jpeg", alt: "Kampüs Güvende acil durum bildirimi" },
  { src: "/screenshots/kampus/harita.jpeg", alt: "Kampüs Güvende harita görünümü" },
  { src: "/screenshots/kampus/bildirimdetay.jpeg", alt: "Kampüs Güvende bildirim detayı" },
  { src: "/screenshots/kampus/adminpanel.jpeg", alt: "Kampüs Güvende admin paneli" },
  { src: "/screenshots/kampus/ayarlar.jpeg", alt: "Kampüs Güvende ayarlar" },
] as const;

/**
 * Proje detay içeriklerini buraya ekleyin. *
 * Her proje için `slug` değerine göre bir `case` yazın.
 * Slug, GitHub repo adından üretilir (ör. "My-App" → "my-app").
 *
 * Örnek:
 *   case "my-android-app":
 *     return ( ... JSX ... );
 */
type ProjectDetailContentProps = {
  slug: string;
  repoName: string;
  repoUrl: string;
};

export function ProjectDetailContent({
  slug,
  repoName,
  repoUrl,
}: ProjectDetailContentProps) {
  const { t } = useLocale();

  switch (slug) {
    case "aiyardimcim":
      return (
        <article className="prose-blog space-y-6 text-ink-muted">
          <div className="overflow-hidden rounded-2xl border border-slate-200/80 bg-slate-900 shadow-card">
            <video
              controls
              playsInline
              preload="metadata"
              className="aspect-video w-full"
            >
              <source src="/video/Aiyardimcim.mp4" type="video/mp4" />
              {t.projectPage.videoUnsupported}
            </video>
          </div>

          <h2>Öne Çıkan Teknik Özellikler</h2>
          <ul>
            <li>
              <strong>🧠 Kalıcı Bellek &amp; Profil Yönetimi:</strong> Uygulama
              mesleğinizi, hobilerinizi ve tercihlerinizi asla unutmuyor.
              Backend&apos;de kurguladığım akıllı filtreleme algoritması, sohbet
              içinden &quot;kalıcı bilgileri&quot; ayıklayıp profilinize
              işliyor.
            </li>
            <li>
              <strong>👥 Sosyal Çevre Hafızası (Personal CRM):</strong>{" "}
              Bahsettiğiniz kişileri (müdürünüz Ahmet, komşunuz Ayşe)
              ilişkileriyle birlikte kaydediyor. Bir dahaki sefere &quot;Ahmet
              ne demişti?&quot; dediğinizde, &quot;Hangi Ahmet? Müdürün mü,
              komşun mu?&quot; diye soracak kadar akıllı.
            </li>
            <li>
              <strong>👁️ Görsel Zeka &amp; Belge Analizi (Multimodal):</strong>{" "}
              Gemini 2.0 entegrasyonu ile sadece metinleri değil; fotoğrafları,
              PDF ve Word dökümanlarını analiz edebiliyor.
            </li>
            <li>
              <strong>📈 Duygusal Yolculuk (Custom Canvas Viz):</strong>{" "}
              Jetpack Compose&apos;un Canvas API&apos;sini kullanarak,
              kullanıcının ruh halini emojilerle takip eden, yana
              kaydırılabilir interaktif bir grafik motoru yazdım.
            </li>
            <li>
              <strong>🎯 Proaktif Görev Çıkarma:</strong> Sohbet akışından
              niyetlerinizi (etmeliyim, yapacağım vb.) otomatik olarak ayıklayıp
              görev listenize ekliyor.
            </li>
          </ul>

          <h2>Kullandığım Teknolojiler</h2>
          <ul>
            <li>
              <strong>Android:</strong> Kotlin, Jetpack Compose, Material 3,
              MVVM, StateFlow, Room DB, Coil 3.
            </li>
            <li>
              <strong>Backend:</strong> Node.js, Express.js.
            </li>
            <li>
              <strong>AI:</strong> Google Gemini 2.0 &amp; 2.5 Flash/Pro.
            </li>
            <li>
              <strong>Database:</strong> Firebase Firestore &amp; Firebase Admin
              SDK.
            </li>
            <li>
              <strong>Networking:</strong> Retrofit &amp; OkHttp.
            </li>
          </ul>

          <p>
            Bu süreçte bir mobil uygulamanın en uç noktadan (UI) en derin
            noktaya (AI Analizi &amp; DB) kadar nasıl kurgulandığını
            deneyimlemek harikaydı. Yapay zekanın sadece sorulara cevap veren
            bir kutu değil, hayatımızı kolaylaştıran proaktif bir asistan olması
            gerektiğine inanıyorum.
          </p>
        </article>
      );

    case "restoranpos":
      return (
        <article className="prose-blog space-y-6 text-ink-muted">
          <div className="overflow-hidden rounded-2xl border border-slate-200/80 bg-slate-900 shadow-card">
            <video
              controls
              playsInline
              preload="metadata"
              className="aspect-video w-full"
            >
              <source src="/video/restoran.mp4" type="video/mp4" />
              {t.projectPage.videoUnsupported}
            </video>
          </div>
        </article>
      );

    case "calculator-kotlin":
      return (
        <article className="prose-blog space-y-6 text-ink-muted">
          <div className="mx-auto max-w-sm overflow-hidden rounded-2xl border border-slate-200/80 bg-white p-4 shadow-card">
            <Image
              src="/screenshots/calculator.png"
              alt="Calculator Mobile App ekran görüntüsü"
              width={386}
              height={813}
              className="h-auto w-full rounded-xl"
            />
          </div>
        </article>
      );

    case "snake-game-web": {
      const { description } = getProjectDisplayInfo(slug, {
        name: repoName,
        description: null,
      });
      return (
        <ProjectDemoLink
          description={description}
          href="https://sabance.github.io/snake-game-web/"
          label="Oyunu oyna →"
        />
      );
    }

    case "chatapp":
      return (
        <article className="prose-blog space-y-6 text-ink-muted">
          <div className="grid gap-6 sm:grid-cols-2">
            {chatappScreenshots.map((shot) => (
              <div
                key={shot.src}
                className="overflow-hidden rounded-2xl border border-slate-200/80 bg-white p-3 shadow-card"
              >
                <Image
                  src={shot.src}
                  alt={shot.alt}
                  width={921}
                  height={2048}
                  className="mx-auto h-auto w-full max-w-xs rounded-xl"
                />
              </div>
            ))}
          </div>
        </article>
      );

    case "gymtracking":
      return (
        <article className="prose-blog space-y-6 text-ink-muted">
          <div className="grid gap-6 sm:grid-cols-2">
            {gymScreenshots.map((shot) => (
              <div
                key={shot.src}
                className="overflow-hidden rounded-2xl border border-slate-200/80 bg-white p-3 shadow-card"
              >
                <Image
                  src={shot.src}
                  alt={shot.alt}
                  width={shot.width}
                  height={shot.height}
                  className="mx-auto h-auto w-full max-w-xs rounded-xl"
                />
              </div>
            ))}
          </div>
        </article>
      );

    case "zirve2":
      return (
        <article className="prose-blog space-y-6 text-ink-muted">
          <div className="grid gap-6">
            {zirveScreenshots.map((shot) => (
              <div
                key={shot.src}
                className="overflow-hidden rounded-2xl border border-slate-200/80 bg-white p-3 shadow-card"
              >
                <Image
                  src={shot.src}
                  alt={shot.alt}
                  width={shot.width}
                  height={shot.height}
                  unoptimized
                  className="h-auto w-full rounded-xl"
                />
              </div>
            ))}
          </div>
        </article>
      );

    case "mobilprogramlamaproje":
      return (
        <article className="prose-blog space-y-6 text-ink-muted">
          <h2>Kullanılan Teknolojiler</h2>
          <ul>
            <li>Firebase</li>
            <li>Kotlin</li>
            <li>Google Maps SDK</li>
          </ul>

          <div className="grid gap-6 sm:grid-cols-2">
            {kampusScreenshots.map((shot) => (
              <div
                key={shot.src}
                className="overflow-hidden rounded-2xl border border-slate-200/80 bg-white p-3 shadow-card"
              >
                <Image
                  src={shot.src}
                  alt={shot.alt}
                  width={720}
                  height={1600}
                  className="mx-auto h-auto w-full max-w-xs rounded-xl"
                />
              </div>
            ))}
          </div>
        </article>
      );

    case "databaseoperations":
      return (
        <article className="prose-blog space-y-6 text-ink-muted">
          <div className="overflow-hidden rounded-2xl border border-slate-200/80 bg-white p-3 shadow-card">
            <Image
              src="/screenshots/gor.png"
              alt="Database Operations uygulama ekranı"
              width={792}
              height={626}
              className="h-auto w-full rounded-xl"
            />
          </div>
        </article>
      );

    case "autonomous-kmeans-architecture":
      return (
        <article className="prose-blog text-ink-muted dark:text-slate-400">
          <a
            href={repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary !text-sm no-underline"
          >
            {t.projectPage.openGithub}
          </a>
        </article>
      );

    case "flower-gift": {
      const { description } = getProjectDisplayInfo(slug, {
        name: repoName,
        description: null,
      });
      return (
        <ProjectDemoLink
          description={description}
          href="https://sabance.github.io/flower-gift/"
          label="Projeyi görüntüle →"
        />
      );
    }

    // case "ornek-proje":
    //   return (
    //     <div className="prose prose-slate max-w-none">
    //       <h2>Proje hakkında</h2>
    //       <p>Detaylı açıklamanız...</p>
    //     </div>
    //   );

    default:
      return (
        <div className="rounded-2xl border border-dashed border-sky-200 bg-sky-50/50 p-8 text-center">
          <p className="font-medium text-ink dark:text-slate-100">
            {t.projectPage.noDetail}
          </p>
          <p className="mt-2 text-sm text-ink-muted dark:text-slate-400">
            {t.projectPage.noDetailHint}{" "}
            <code className="rounded bg-white px-1.5 py-0.5 text-sky-600 dark:bg-slate-800 dark:text-sky-400">
              src/components/projects/ProjectDetailContent.tsx
            </code>
          </p>
          <p className="mt-4 text-xs text-ink-faint">
            Slug: <strong>{slug}</strong> · Repo: <strong>{repoName}</strong>
          </p>
        </div>
      );
  }
}
