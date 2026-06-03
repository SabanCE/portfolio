export type ProjectMediaItem = {
  type: "image" | "iframe" | "youtube";
  src: string;
  alt: string;
  caption?: string;
  width?: number;
  height?: number;
};

const chatappScreenshots: ProjectMediaItem[] = [
  { type: "image", src: "/screenshots/chatapp/login.jpeg", alt: "Giriş Sayfası", caption: "Giriş Sayfası" },
  { type: "image", src: "/screenshots/chatapp/home.jpeg", alt: "Ana Sayfa", caption: "Ana Sayfa" },
  { type: "image", src: "/screenshots/chatapp/onetoone.jpeg", alt: "Birebir Mesajlaşma", caption: "Birebir Mesajlaşma" },
  { type: "image", src: "/screenshots/chatapp/groupchat.jpeg", alt: "Grup Mesajlaşma", caption: "Grup Mesajlaşma" },
  { type: "image", src: "/screenshots/chatapp/newgroup.jpeg", alt: "Yeni Grup Oluşturma", caption: "Yeni Grup Oluşturma" },
  { type: "image", src: "/screenshots/chatapp/settings.jpeg", alt: "Ayarlar", caption: "Ayarlar" },
];

const gymScreenshots: ProjectMediaItem[] = [
  { type: "image", src: "/screenshots/gym/h1.png", alt: "GymTracking ana sayfa", caption: "Ana Sayfa", width: 382, height: 829 },
  { type: "image", src: "/screenshots/gym/h2.png", alt: "GymTracking ana sayfa görünümü", caption: "Ana Sayfa Görünümü", width: 403, height: 831 },
  { type: "image", src: "/screenshots/gym/w1.png", alt: "GymTracking egzersiz takibi", caption: "Egzersiz Takibi", width: 417, height: 854 },
  { type: "image", src: "/screenshots/gym/w2.png", alt: "GymTracking antrenman ekranı", caption: "Antrenman Detayları", width: 398, height: 840 },
  { type: "image", src: "/screenshots/gym/m1.png", alt: "GymTracking makro hesaplama", caption: "Makro Hesaplama", width: 401, height: 841 },
  { type: "image", src: "/screenshots/gym/p1.png", alt: "GymTracking ilerleme izleme", caption: "İlerleme Takibi", width: 398, height: 851 },
  { type: "image", src: "/screenshots/gym/g1.png", alt: "GymTracking genel görünüm", caption: "Genel Görünüm", width: 412, height: 835 },
  { type: "image", src: "/screenshots/gym/np1.png", alt: "GymTracking yeni program", caption: "Yeni Program", width: 422, height: 859 },
];

const zirveScreenshots: ProjectMediaItem[] = [
  { type: "image", src: "/screenshots/egz/1777465641258.jfif", alt: "Çekiliş sayfası 1", caption: "Ana Sayfa", width: 1280, height: 608 },
  { type: "image", src: "/screenshots/egz/1777465641349.jfif", alt: "Çekiliş sayfası 2", caption: "Form ve Katılım", width: 1280, height: 603 },
  { type: "image", src: "/screenshots/egz/1777465641517.jfif", alt: "Çekiliş sayfası 3", caption: "Sonuç Ekranı", width: 1280, height: 608 },
];

const kampusScreenshots: ProjectMediaItem[] = [
  { type: "image", src: "/screenshots/kampus/giris.jpeg", alt: "Kampüs Güvende giriş", caption: "Giriş Ekranı" },
  { type: "image", src: "/screenshots/kampus/anaekran.jpeg", alt: "Kampüs Güvende ana ekran", caption: "Ana Sayfa" },
  { type: "image", src: "/screenshots/kampus/acildurum.jpeg", alt: "Acil durum bildirimi", caption: "Acil Durum" },
  { type: "image", src: "/screenshots/kampus/harita.jpeg", alt: "Harita görünümü", caption: "Harita" },
  { type: "image", src: "/screenshots/kampus/bildirimdetay.jpeg", alt: "Bildirim detayı", caption: "Bildirim Detayı" },
  { type: "image", src: "/screenshots/kampus/adminpanel.jpeg", alt: "Admin paneli", caption: "Admin Paneli" },
  { type: "image", src: "/screenshots/kampus/ayarlar.jpeg", alt: "Ayarlar", caption: "Ayarlar" },
];

const projectMediaMap: Record<string, ProjectMediaItem[]> = {
  aiyardimcim: [
    {
      type: "youtube",
      src: "https://www.youtube.com/embed/vAuj451avUk?rel=0",
      alt: "AI Yardımcım Projesi",
      caption: "Demo Video",
    },
  ],
  restoranpos: [
    {
      type: "youtube",
      src: "https://www.youtube.com/embed/J6llpaBRUQk?rel=0",
      alt: "Restoran POS Otomasyonu",
      caption: "Demo Video",
    },
  ],
  "calculator-kotlin": [
    {
      type: "image",
      src: "/screenshots/calculator.png",
      alt: "Calculator Mobile App",
      caption: "Hesap Makinesi",
      width: 386,
      height: 813,
    },
  ],
  "snake-game-web": [
    {
      type: "iframe",
      src: "https://sabance.github.io/snake-game-web/",
      alt: "Snake Game",
      caption: "Canlı Demo",
    },
  ],
  chatapp: chatappScreenshots,
  gymtracking: gymScreenshots,
  zirve2: zirveScreenshots,
  mobilprogramlamaproje: kampusScreenshots,
  databaseoperations: [
    {
      type: "image",
      src: "/screenshots/gor.png",
      alt: "Database Operations",
      caption: "Uygulama Ekranı",
      width: 792,
      height: 626,
    },
  ],
  "flower-gift": [
    {
      type: "iframe",
      src: "https://sabance.github.io/flower-gift/",
      alt: "Flower Gift Animations",
      caption: "Canlı Demo",
    },
  ],
};

const projectTagsMap: Record<string, string[]> = {
  aiyardimcim: ["Kotlin", "Jetpack Compose", "Node.js", "Gemini AI", "Firebase"],
  restoranpos: ["Java", "Swing", "MySQL"],
  chatapp: ["Kotlin", "Firebase", "Android"],
  gymtracking: ["Kotlin", "Jetpack Compose", "Room DB", "MVVM"],
  zirve2: ["HTML", "CSS", "JavaScript", "Node.js", "Firebase"],
  mobilprogramlamaproje: ["Kotlin", "Firebase", "Google Maps"],
  "snake-game-web": ["HTML", "CSS", "JavaScript"],
  "flower-gift": ["HTML", "CSS", "JavaScript"],
  "calculator-kotlin": ["Kotlin", "Android"],
  databaseoperations: ["C#", "SQL Server"],
  "autonomous-kmeans-architecture": ["MATLAB", "Machine Learning"],
};

export function getProjectMedia(slug: string): ProjectMediaItem[] {
  return projectMediaMap[slug] ?? [];
}

export function getProjectTags(
  slug: string,
  language: string | null
): string[] {
  const configured = projectTagsMap[slug];
  if (configured?.length) return configured;
  return language ? [language] : [];
}

export function getYoutubeThumbnail(embedUrl: string): string | null {
  const match = embedUrl.match(/embed\/([^?&]+)/);
  if (!match) return null;
  return `https://img.youtube.com/vi/${match[1]}/hqdefault.jpg`;
}
