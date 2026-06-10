"use client";

import { useLocale } from "@/components/providers/LocaleProvider";
import { getProjectDisplayInfo } from "@/config/project-details";
import { AnimateIn } from "@/components/AnimateIn";
import Image from "next/image";
import { useState } from "react";
import { SnakeGameIframe } from "@/components/projects/SnakeGameIframe";

type ScreenshotItem = {
  src: string;
  alt: string;
  caption: string;
  width?: number;
  height?: number;
};

function ScreenshotCarousel({
  items,
  maxWidth = 360,
  imageWidth = 360,
  imageHeight = 630,
}: {
  items: readonly ScreenshotItem[];
  maxWidth?: number;
  imageWidth?: number;
  imageHeight?: number;
}) {
  const { t } = useLocale();
  const [index, setIndex] = useState(0);
  const item = items[index];
  return (
    <div
      style={{ maxWidth: `${maxWidth}px` }}
      className="mx-auto w-full space-y-4 rounded-3xl border border-slate-200/80 bg-white/90 p-3 shadow-card dark:border-slate-700/80 dark:bg-slate-950/95"
    >
      <div className="overflow-hidden rounded-3xl bg-slate-950/5 dark:bg-slate-900/40">
        <Image
          src={item.src}
          alt={item.alt}
          width={imageWidth}
          height={imageHeight}
          className="block h-auto w-full object-contain"
        />
      </div>
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm font-semibold text-slate-900 dark:text-slate-100">
          {item.caption}
        </p>
        <div className="flex flex-wrap items-center gap-2">
          <button
            type="button"
            onClick={() => setIndex((prev) => (prev - 1 + items.length) % items.length)}
            className="btn-secondary !py-2 !px-4"
          >
            {t.projectPage.previous}
          </button>
          <button
            type="button"
            onClick={() => setIndex((prev) => (prev + 1) % items.length)}
            className="btn-secondary !py-2 !px-4"
          >
            {t.projectPage.next}
          </button>
          <span className="text-xs text-slate-500 dark:text-slate-400">
            {index + 1} / {items.length}
          </span>
        </div>
      </div>
    </div>
  );
}

function ProjectDemoLink({
  description,
  href,
  label,
}: {
  description: string;
  href: string;
  label: string;
}) {
  const isExternal = href.startsWith("http");

  return (
    <div className="rounded-2xl bg-gradient-to-br from-slate-800 via-slate-900 to-violet-950 p-8 shadow-card">
      <p className="text-lg leading-relaxed text-white">{description}</p>
      <a
        href={href}
        target={isExternal ? "_blank" : undefined}
        rel={isExternal ? "noopener noreferrer" : undefined}
        className="btn-primary mt-6 inline-flex !text-sm !text-white no-underline hover:!text-white"
      >
        {label}
      </a>
    </div>
  );
}

const chatappScreenshots = [
  {
    src: "/screenshots/chatapp/login.jpeg",
    alt: "Login screen",
    caption: "Login screen",
  },
  {
    src: "/screenshots/chatapp/home.jpeg",
    alt: "Home screen",
    caption: "Home screen",
  },
  {
    src: "/screenshots/chatapp/onetoone.jpeg",
    alt: "One-on-one chat",
    caption: "One-on-one chat",
  },
  {
    src: "/screenshots/chatapp/groupchat.jpeg",
    alt: "Group chat",
    caption: "Group chat",
  },
  {
    src: "/screenshots/chatapp/newgroup.jpeg",
    alt: "Create new group",
    caption: "Create new group",
  },
  {
    src: "/screenshots/chatapp/settings.jpeg",
    alt: "Settings",
    caption: "Settings",
  },
] as const;

const gymScreenshots = [
  {
    src: "/screenshots/gym/h1.png",
    alt: "GymTracking home screen",
    caption: "Home screen",
    width: 382,
    height: 829,
  },
  {
    src: "/screenshots/gym/h2.png",
    alt: "GymTracking home screen view",
    caption: "Home screen view",
    width: 403,
    height: 831,
  },
  {
    src: "/screenshots/gym/w1.png",
    alt: "GymTracking workout tracking",
    caption: "Workout tracking",
    width: 417,
    height: 854,
  },
  {
    src: "/screenshots/gym/w2.png",
    alt: "GymTracking training screen",
    caption: "Training details",
    width: 398,
    height: 840,
  },
  {
    src: "/screenshots/gym/m1.png",
    alt: "GymTracking macro calculator",
    caption: "Macro calculator",
    width: 401,
    height: 841,
  },
  {
    src: "/screenshots/gym/p1.png",
    alt: "GymTracking progress tracking",
    caption: "Progress tracking",
    width: 398,
    height: 851,
  },
  {
    src: "/screenshots/gym/g1.png",
    alt: "GymTracking overview",
    caption: "Overview",
    width: 412,
    height: 835,
  },
  {
    src: "/screenshots/gym/np1.png",
    alt: "GymTracking new program",
    caption: "New program",
    width: 422,
    height: 859,
  },
] as const;

const zirveScreenshots = [
  {
    src: "/screenshots/egz/1777465641258.jpg",
    alt: "Giveaway page screenshot 1",
    caption: "Landing page and participant flow",
    width: 1280,
    height: 608,
  },
  {
    src: "/screenshots/egz/1777465641349.jpg",
    alt: "Giveaway page screenshot 2",
    caption: "Form and live entry",
    width: 1280,
    height: 603,
  },
  {
    src: "/screenshots/egz/1777465641517.jpg",
    alt: "Giveaway page screenshot 3",
    caption: "Result screen and winner announcement",
    width: 1280,
    height: 608,
  },
] as const;

const kampusScreenshots = [
  {
    src: "/screenshots/kampus/giris.jpeg",
    alt: "Campus Safe login screen",
    caption: "Login screen",
  },
  {
    src: "/screenshots/kampus/anaekran.jpeg",
    alt: "Campus Safe dashboard",
    caption: "Dashboard",
  },
  {
    src: "/screenshots/kampus/acildurum.jpeg",
    alt: "Campus Safe emergency report",
    caption: "Emergency incident",
  },
  {
    src: "/screenshots/kampus/harita.jpeg",
    alt: "Campus Safe map view",
    caption: "Map view",
  },
  {
    src: "/screenshots/kampus/bildirimdetay.jpeg",
    alt: "Campus Safe notification detail",
    caption: "Notification detail",
  },
  {
    src: "/screenshots/kampus/adminpanel.jpeg",
    alt: "Campus Safe admin panel",
    caption: "Admin panel",
  },
  {
    src: "/screenshots/kampus/ayarlar.jpeg",
    alt: "Campus Safe settings",
    caption: "Settings",
  },
] as const;

const depremzedeScreenshots = [
  {
    src: "/deprem/depremzede/1-anasayfa.jpeg",
    alt: "Earthquake victim panel home screen",
    caption: "Home screen and urgent communication",
  },
  {
    src: "/deprem/depremzede/2-offline toplanma alanı bulma.jpeg",
    alt: "Offline shelter finder",
    caption: "Offline shelter finder feature",
  },
  {
    src: "/deprem/depremzede/3-ai danışman.jpeg",
    alt: "AI assistant view",
    caption: "AI-powered guidance and recommendations",
  },
  {
    src: "/deprem/depremzede/4-haberleşme.jpeg",
    alt: "Messaging screen",
    caption: "Messaging and communication interface",
  },
  {
    src: "/deprem/depremzede/5-haberleşme.jpeg",
    alt: "Mesh network messaging",
    caption: "Bluetooth/Wi-Fi mesh messaging",
  },
] as const;

const koordineScreenshots = [
  {
    src: "/deprem/koordine/1-anasayfa.jpeg",
    alt: "Coordination dashboard home screen",
    caption: "Coordination dashboard",
  },
  {
    src: "/deprem/koordine/2-map.jpeg",
    alt: "Rescue teams map view",
    caption: "Rescue team map view",
  },
  {
    src: "/deprem/koordine/3-lojistik sevk.jpeg",
    alt: "Logistics dispatch screen",
    caption: "Logistics dispatch",
  },
  {
    src: "/deprem/koordine/4-kurtarma ekibi sevk.jpeg",
    alt: "Rescue team allocation",
    caption: "Rescue team coordination",
  },
  {
    src: "/deprem/koordine/5-sağlık sevk.jpeg",
    alt: "Medical dispatch",
    caption: "Emergency medical coordination",
  },
] as const;

const personelScreenshots = [
  {
    src: "/deprem/personel/1-anasayfa.jpeg",
    alt: "Personnel dashboard home screen",
    caption: "Personnel management overview",
  },
  {
    src: "/deprem/personel/2-gecmis kayitlar.jpeg",
    alt: "Historical records screen",
    caption: "Past records and status history",
  },
  {
    src: "/deprem/personel/3-map.jpeg",
    alt: "Map-based personnel tracking",
    caption: "Personnel movement map",
  },
  {
    src: "/deprem/personel/4-koordinesyon.jpeg",
    alt: "Coordination screen",
    caption: "Team coordination and task assignment",
  },
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
  const { locale, t } = useLocale();

  switch (slug) {
    case "aiyardimcim":
      return (
        <article className="prose-blog space-y-6 text-ink-muted">
          <div className="overflow-hidden rounded-2xl border border-slate-200/70 bg-white/90 shadow-card dark:border-slate-700/70 dark:bg-slate-950/95">
            <iframe
              width="100%"
              height="600"
              src="https://www.youtube.com/embed/vAuj451avUk?rel=0&theme=dark&color=white"
              title="AI Yardımcım Projesi"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              referrerPolicy="strict-origin-when-cross-origin"
              className="aspect-video w-full"
            />
          </div>

          <h2>
            {locale === "en"
              ? "Key technical features"
              : "Öne Çıkan Teknik Özellikler"}
          </h2>
          <ul>
            <li>
              <strong>
                {locale === "en"
                  ? "🧠 Persistent Memory & Profile Management:"
                  : "🧠 Kalıcı Bellek & Profil Yönetimi:"}
              </strong>{" "}
              {locale === "en"
                ? "The app never forgets your profession, hobbies, and preferences. A custom backend filter extracts persistent details from the conversation and stores them in your profile."
                : "Uygulama mesleğinizi, hobilerinizi ve tercihlerinizi asla unutmuyor. Backend'de kurguladığım akıllı filtreleme algoritması, sohbet içinden 'kalıcı bilgileri' ayıklayıp profilinize işliyor."}
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
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {[
              "Kotlin",
              
            
              "Coil 3",
              "Node.js",
              "Google Gemini API",
              
              "Firebase Firestore",
              "Retrofit",
              "OkHttp",
            ].map((tech) => (
              <div
                key={tech}
                className="rounded-3xl border border-slate-200/80 bg-white/90 px-4 py-3 text-sm font-semibold text-slate-900 shadow-sm transition hover:-translate-y-0.5 hover:border-sky-300 hover:bg-sky-50 dark:border-slate-700/80 dark:bg-slate-950/95 dark:text-slate-100 dark:hover:border-sky-500 dark:hover:bg-slate-900"
              >
                {tech}
              </div>
            ))}
          </div>

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
          <div className="overflow-hidden rounded-3xl border border-slate-200/80 bg-black shadow-card">
            <iframe
              src="https://www.youtube.com/embed/J6llpaBRUQk?rel=0"
              title="Restoran POS Otomasyonu Demo"
              className="aspect-[16/10] w-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              referrerPolicy="strict-origin-when-cross-origin"
            />
          </div>
        </article>
      );

    case "calculator-kotlin":
      return (
        <article className="prose-blog space-y-6 text-ink-muted">
          <div className="mx-auto max-w-sm overflow-hidden rounded-2xl border border-slate-200/80 bg-white/90 p-4 shadow-card dark:border-slate-700/80 dark:bg-slate-950/95">
            <Image
              src="/screenshots/calculator.jpg"
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
        <article className="prose-blog space-y-6 text-ink-muted">
          <SnakeGameIframe />
          <p className="text-sm text-ink-muted dark:text-slate-400">{description}</p>
        </article>
      );
    }

    case "chatapp":
      return (
        <article className="prose-blog space-y-6 text-ink-muted">
          <ScreenshotCarousel items={chatappScreenshots} />
        </article>
      );

    case "gymtracking":
      return (
        <article className="prose-blog space-y-6 text-ink-muted">
          <ScreenshotCarousel items={gymScreenshots} />
        </article>
      );

    case "zirve2":
      return (
        <article className="prose-blog space-y-6 text-ink-muted">
          <ScreenshotCarousel
            items={zirveScreenshots}
            maxWidth={900}
            imageWidth={880}
            imageHeight={420}
          />
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

          <ScreenshotCarousel items={kampusScreenshots} />
        </article>
      );

    case "deprembitirmeprojesi":
      return (
        <article className="prose-blog space-y-6 text-ink-muted">
          <p>
            Deprem ve afet durumlarında iletişim altyapılarının devre dışı kalması
            halinde mağdurlar ile kurtarma ekipleri arasında kesintisiz haberleşme
            sağlamayı amaçlayan Android tabanlı bir mobil platform geliştirdim.
          </p>
          <p>
            Uygulama; cihaz sensörlerinden elde edilen verileri analiz ederek olası
            deprem hareketlerini tespit etmekte, STA/LTA algoritmaları ile sismik
            aktiviteleri değerlendirmekte ve yanlış alarmları azaltmak için
            güvenilirlik skorları oluşturmaktadır.
          </p>
          <p>
            Sistem, Bluetooth ve Wi-Fi destekli <strong>Mesh Network</strong> yapısı
            sayesinde internet olmadan cihazlar arasında mesajlaşma imkânı
            sunmaktadır. Ayrıca konum paylaşımı, acil durum bildirimleri, yapay
            zekâ destekli öneriler ve kurtarma ekipleri için yoğunluk haritaları ile
            risk analizleri sağlayarak afet yönetimi süreçlerini desteklemektedir.
          </p>

          <h2>Kullanılan Teknolojiler</h2>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {[
              "Kotlin",
              "Google Nearby API",
              "Mesh Networking",
              "Firebase",
              "Gemini AI API",
              "Google Maps API",
              "MapLibre",
              "STA/LTA Algoritması",
            ].map((tech) => (
              <div
                key={tech}
                className="rounded-3xl border border-slate-200/80 bg-white/90 px-4 py-3 text-sm font-semibold text-slate-900 shadow-sm transition hover:-translate-y-0.5 hover:border-sky-300 hover:bg-sky-50 dark:border-slate-700/80 dark:bg-slate-950/95 dark:text-slate-100 dark:hover:border-sky-500 dark:hover:bg-slate-900"
              >
                {tech}
              </div>
            ))}
          </div>

          <h2>Ekran Görüntüleri</h2>
          <div className="space-y-12">
            <section>
              <h3 className="text-lg font-semibold">1. Depremzede Paneli</h3>
              <div className="mt-5">
                <ScreenshotCarousel items={depremzedeScreenshots} />
              </div>
            </section>

            <section>
              <h3 className="text-lg font-semibold">2. Koordine Paneli</h3>
              <div className="mt-5">
                <ScreenshotCarousel items={koordineScreenshots} />
              </div>
            </section>

            <section>
              <h3 className="text-lg font-semibold">3. Personel Paneli</h3>
              <div className="mt-5">
                <ScreenshotCarousel items={personelScreenshots} />
              </div>
            </section>
          </div>
        </article>
      );

    case "databaseoperations":
      return (
        <article className="prose-blog space-y-6 text-ink-muted">
          <div className="overflow-hidden rounded-2xl border border-slate-200/80 bg-white/90 p-3 shadow-card dark:border-slate-700/80 dark:bg-slate-950/95">
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
        <article className="prose-blog space-y-8 text-ink-muted dark:text-slate-400">
          <AnimateIn blur delay={100}>
            <div className="overflow-hidden rounded-3xl border border-slate-200/80 bg-slate-950 shadow-card">
              <Image
                src="/proje_icon/k-means.png"
                alt="Autonomous K-Means Architecture Demo"
                width={1200}
                height={800}
                className="h-auto w-full rounded-3xl object-cover"
              />
            </div>
          </AnimateIn>
          <p>
            Akıllı K-Means Motoru: İnsan müdahalesi olmadan kümeleme parametrelerini optimize eden akıllı bir MATLAB algoritması.
          </p>
        </article>
      );

    case "flower-gift": {
      const { description } = getProjectDisplayInfo(slug, {
        name: repoName,
        description: null,
      });
      return (
        <article className="prose-blog space-y-6 text-ink-muted">
          <div className="overflow-hidden rounded-3xl border border-slate-200/80 bg-black shadow-card">
            <iframe
              src="https://sabance.github.io/flower-gift/"
              title="Flower Gift Animations"
              className="aspect-[16/10] w-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              referrerPolicy="strict-origin-when-cross-origin"
            />
          </div>
          <p className="text-sm text-ink-muted dark:text-slate-400">{description}</p>
        </article>
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
