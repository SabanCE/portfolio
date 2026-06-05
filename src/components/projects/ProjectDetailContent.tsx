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
            Geri
          </button>
          <button
            type="button"
            onClick={() => setIndex((prev) => (prev + 1) % items.length)}
            className="btn-secondary !py-2 !px-4"
          >
            İleri
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
    alt: "Giriş Sayfası",
    caption: "Giriş Sayfası",
  },
  {
    src: "/screenshots/chatapp/home.jpeg",
    alt: "Ana Sayfa",
    caption: "Ana Sayfa",
  },
  {
    src: "/screenshots/chatapp/onetoone.jpeg",
    alt: "Birebir Mesajlaşma",
    caption: "Birebir Mesajlaşma",
  },
  {
    src: "/screenshots/chatapp/groupchat.jpeg",
    alt: "Grup Mesajlaşma",
    caption: "Grup Mesajlaşma",
  },
  {
    src: "/screenshots/chatapp/newgroup.jpeg",
    alt: "Yeni Grup Oluşturma",
    caption: "Yeni Grup Oluşturma",
  },
  {
    src: "/screenshots/chatapp/settings.jpeg",
    alt: "Ayarlar",
    caption: "Ayarlar",
  },
] as const;

const gymScreenshots = [
  {
    src: "/screenshots/gym/h1.png",
    alt: "GymTracking ana sayfa",
    caption: "Ana Sayfa",
    width: 382,
    height: 829,
  },
  {
    src: "/screenshots/gym/h2.png",
    alt: "GymTracking ana sayfa görünümü",
    caption: "Ana Sayfa Görünümü",
    width: 403,
    height: 831,
  },
  {
    src: "/screenshots/gym/w1.png",
    alt: "GymTracking egzersiz takibi",
    caption: "Egzersiz Takibi",
    width: 417,
    height: 854,
  },
  {
    src: "/screenshots/gym/w2.png",
    alt: "GymTracking antrenman ekranı",
    caption: "Antrenman Detayları",
    width: 398,
    height: 840,
  },
  {
    src: "/screenshots/gym/m1.png",
    alt: "GymTracking makro hesaplama",
    caption: "Makro Hesaplama",
    width: 401,
    height: 841,
  },
  {
    src: "/screenshots/gym/p1.png",
    alt: "GymTracking ilerleme izleme",
    caption: "İlerleme Takibi",
    width: 398,
    height: 851,
  },
  {
    src: "/screenshots/gym/g1.png",
    alt: "GymTracking genel görünüm",
    caption: "Genel Görünüm",
    width: 412,
    height: 835,
  },
  {
    src: "/screenshots/gym/np1.png",
    alt: "GymTracking yeni program",
    caption: "Yeni Program",
    width: 422,
    height: 859,
  },
] as const;

const zirveScreenshots = [
  {
    src: "/screenshots/egz/1777465641258.jfif",
    alt: "Çekiliş sayfası ekran görüntüsü 1",
    caption: "Ana Sayfa ve Kullanıcı Etkileşimi",
    width: 1280,
    height: 608,
  },
  {
    src: "/screenshots/egz/1777465641349.jfif",
    alt: "Çekiliş sayfası ekran görüntüsü 2",
    caption: "Form ve Canlı Katılım",
    width: 1280,
    height: 603,
  },
  {
    src: "/screenshots/egz/1777465641517.jfif",
    alt: "Çekiliş sayfası ekran görüntüsü 3",
    caption: "Sonuç ve Kazanan Bildirimi",
    width: 1280,
    height: 608,
  },
] as const;

const kampusScreenshots = [
  {
    src: "/screenshots/kampus/giris.jpeg",
    alt: "Kampüs Güvende giriş ekranı",
    caption: "Giriş Ekranı",
  },
  {
    src: "/screenshots/kampus/anaekran.jpeg",
    alt: "Kampüs Güvende ana ekran",
    caption: "Ana Sayfa",
  },
  {
    src: "/screenshots/kampus/acildurum.jpeg",
    alt: "Kampüs Güvende acil durum bildirimi",
    caption: "Acil Durum Bildirimi",
  },
  {
    src: "/screenshots/kampus/harita.jpeg",
    alt: "Kampüs Güvende harita görünümü",
    caption: "Harita Görünümü",
  },
  {
    src: "/screenshots/kampus/bildirimdetay.jpeg",
    alt: "Kampüs Güvende bildirim detayı",
    caption: "Bildirim Detayı",
  },
  {
    src: "/screenshots/kampus/adminpanel.jpeg",
    alt: "Kampüs Güvende admin paneli",
    caption: "Admin Paneli",
  },
  {
    src: "/screenshots/kampus/ayarlar.jpeg",
    alt: "Kampüs Güvende ayarlar",
    caption: "Ayarlar",
  },
] as const;

const depremzedeScreenshots = [
  {
    src: "/deprem/depremzede/1-anasayfa.jpeg",
    alt: "Depremzede paneli ana sayfa ekran görüntüsü",
    caption: "Ana Sayfa ve acil haberleşme arayüzü",
  },
  {
    src: "/deprem/depremzede/2-offline toplanma alanı bulma.jpeg",
    alt: "Depremzede paneli offline toplanma alanı bulma ekran görüntüsü",
    caption: "Offline toplanma alanı bulma özelliği",
  },
  {
    src: "/deprem/depremzede/3-ai danışman.jpeg",
    alt: "Depremzede paneli yapay zekâ destekli danışman ekran görüntüsü",
    caption: "Yapay zekâ destekli öneri ve rehberlik",
  },
  {
    src: "/deprem/depremzede/4-haberleşme.jpeg",
    alt: "Depremzede paneli haberleşme ekran görüntüsü",
    caption: "Mesajlaşma ve iletişim ekranı",
  },
  {
    src: "/deprem/depremzede/5-haberleşme.jpeg",
    alt: "Depremzede paneli ikinci haberleşme ekran görüntüsü",
    caption: "Bluetooth/Wi-Fi Mesh üzerinden iletişim",
  },
] as const;

const koordineScreenshots = [
  {
    src: "/deprem/koordine/1-anasayfa.jpeg",
    alt: "Koordine paneli ana sayfa ekran görüntüsü",
    caption: "Ana Koordine kontrol paneli",
  },
  {
    src: "/deprem/koordine/2-map.jpeg",
    alt: "Koordine paneli harita ekran görüntüsü",
    caption: "Kurtarma ekiplerinin harita görünümü",
  },
  {
    src: "/deprem/koordine/3-lojistik sevk.jpeg",
    alt: "Koordine paneli lojistik sevk ekran görüntüsü",
    caption: "Lojistik sevk ve kaynak dağıtımı",
  },
  {
    src: "/deprem/koordine/4-kurtarma ekibi sevk.jpeg",
    alt: "Koordine paneli kurtarma ekibi sevk ekran görüntüsü",
    caption: "Kurtarma ekibi sevk yönetimi",
  },
  {
    src: "/deprem/koordine/5-sağlık sevk.jpeg",
    alt: "Koordine paneli sağlık sevk ekran görüntüsü",
    caption: "Acil sağlık sevk koordinasyonu",
  },
] as const;

const personelScreenshots = [
  {
    src: "/deprem/personel/1-anasayfa.jpeg",
    alt: "Personel paneli ana sayfa ekran görüntüsü",
    caption: "Personel yönetimi ana sayfası",
  },
  {
    src: "/deprem/personel/2-gecmis kayitlar.jpeg",
    alt: "Personel paneli geçmiş kayıtlar ekran görüntüsü",
    caption: "Geçmiş kayıtlar ve durum geçmişi",
  },
  {
    src: "/deprem/personel/3-map.jpeg",
    alt: "Personel paneli harita ekran görüntüsü",
    caption: "Personel hareketlerinin harita takibi",
  },
  {
    src: "/deprem/personel/4-koordinesyon.jpeg",
    alt: "Personel paneli koordinasyon ekran görüntüsü",
    caption: "Takım koordinasyon ve görev dağılımı",
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
  const { t } = useLocale();

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
          <ul>
            <li>Kotlin</li>
            <li>MVVM</li>
            <li>Coroutines</li>
            <li>Flow</li>
            <li>Google Nearby Connections API</li>
            <li>Mesh Networking</li>
            <li>Room Database</li>
            <li>Firebase (Firestore &amp; Authentication)</li>
            <li>Google Gemini AI</li>
            <li>Google Maps SDK</li>
            <li>MapLibre</li>
            <li>Android Sensor Framework</li>
            <li>MPAndroidChart</li>
            <li>STA/LTA Algoritması</li>
            <li>WorkManager</li>
            <li>Material Design Components</li>
          </ul>

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
