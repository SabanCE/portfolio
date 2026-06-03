export type Locale = "tr" | "en";

export const locales: Locale[] = ["tr", "en"];
export const defaultLocale: Locale = "tr";
export const LOCALE_COOKIE = "locale";

export type TranslationKey = {
  nav: {
    about: string;
    projects: string;
    blog: string;
    gallery: string;
    contact: string;
  };
  hero: {
    greeting: string;
    viewProjects: string;
    about: string;
  };
  about: {
    title: string;
    subtitle: string;
    skills: string;
    story: readonly string[];
  };
  projects: {
    title: string;
    subtitle: string;
    allRepos: string;
    loadError: string;
    loadErrorHint: string;
    noDescription: string;
    details: string;
    openRepo: string;
  };
  blog: {
    title: string;
    subtitle: string;
    allPosts: string;
  };
  gallery: {
    title: string;
    subtitle: string;
    enlarge: string;
    close: string;
  };
  contact: {
    title: string;
    subtitle: string;
    sendEmail: string;
  };
  footer: {
    builtWith: string;
  };
  projectPage: {
    back: string;
    openGithub: string;
    notFound: string;
    details: string;
    noDetail: string;
    noDetailHint: string;
    openGithubDetail: string;
    videoUnsupported: string;
  };
  theme: {
    light: string;
    dark: string;
    toggle: string;
  };
  language: {
    label: string;
    tr: string;
    en: string;
  };
  site: {
    title: string;
    tagline: string;
    portfolio: string;
  };
};

const tr: TranslationKey = {
  nav: {
    about: "Hakkımda",
    projects: "Projeler",
    blog: "Blog",
    gallery: "Galeri",
    contact: "İletişim",
  },
  hero: {
    greeting: "Merhaba, ben",
    viewProjects: "Projeleri gör",
    about: "Hakkımda",
  },
  about: {
    title: "Hakkımda",
    subtitle: "Kendimi, yolculuğumu ve hedeflerimi tanıyın.",
    skills: "Yetkinlikler",
    story: [
      "Merhaba, ben Şaban Akçehre. 23 yaşındayım ve Antalya doğumluyum. Teknolojiye ve yazılıma olan ilgim lise yıllarında, sınıf öğretmenimin bana hediye ettiği Steve Jobs kitabıyla başladı. O günden beri üretmek, kendimi geliştirmek ve başladığım bir hedefi tamamlamak benim için büyük bir motivasyon kaynağı oldu.",
      "Şu anda Atatürk Üniversitesi Bilgisayar Mühendisliği bölümünde öğrenim görüyorum ve yaklaşık 1 ay içinde mezun oluyorum. Algoritmalar, web teknolojileri ve yazılım geliştirme alanlarında kendimi geliştirmeye devam ediyorum. Yeni teknolojiler öğrenmeyi, proje üretmeyi ve ekip içinde sosyal iletişim kurmayı seviyorum.",
      "Şu anda staj ve yeni kariyer fırsatlarına açığım. Hayalim; dünyayı gezebilmek, refah içinde yaşayabilmek, gerçekten keyif aldığım ve üretirken mutlu olduğum bir iş yapmak ve iyi bir aile kurmak. Kendimi sürekli geliştirmemin en büyük sebeplerinden biri de, gelecekte kurmak istediğim hayatın temellerini bugünden oluşturmak.",
    ],
  },
  projects: {
    title: "Projeler",
    subtitle: "Geliştirdiğim uygulamalar ve açık kaynak çalışmalarım.",
    allRepos: "Tüm repolar →",
    loadError: "GitHub projeleri yüklenemedi.",
    loadErrorHint:
      "dosyasında githubUsername alanını kontrol edin.",
    noDescription: "Açıklama eklenmemiş.",
    details: "Detaylı bilgi",
    openRepo: "Repoyu aç →",
  },
  blog: {
    title: "Blog",
    subtitle: "Teknoloji, projeler ve öğrenme notlarım.",
    allPosts: "Tüm yazılar →",
  },
  gallery: {
    title: "Fotoğraf Arşivi",
    subtitle: "Kişisel koleksiyonum — kareye tıklayarak büyütebilirsiniz.",
    enlarge: "Büyüt",
    close: "Kapat",
  },
  contact: {
    title: "İletişim",
    subtitle:
      "İş birliği, staj veya proje fikirleri için benimle iletişime geçebilirsiniz.",
    sendEmail: "E-posta gönder ✉",
  },
  footer: {
    builtWith: "Next.js ile yapıldı",
  },
  projectPage: {
    back: "← Projelere dön",
    openGithub: "GitHub'da aç →",
    notFound: "Proje bulunamadı",
    details: "proje detayları",
    noDetail: "Bu proje için detay sayfası henüz hazırlanmadı.",
    noDetailHint: "dosyasını düzenleyin.",
    openGithubDetail: "Detaylı bilgi için GitHub'da aç",
    videoUnsupported: "Tarayıcınız video oynatmayı desteklemiyor.",
  },
  theme: {
    light: "Açık tema",
    dark: "Koyu tema",
    toggle: "Tema değiştir",
  },
  language: {
    label: "Dil",
    tr: "Türkçe",
    en: "English",
  },
  site: {
    title: "Bilgisayar Mühendisi",
    tagline: "Android Developer Enthusiast",
    portfolio: "Portfolyo",
  },
} as const;

const en: TranslationKey = {
  nav: {
    about: "About",
    projects: "Projects",
    blog: "Blog",
    gallery: "Gallery",
    contact: "Contact",
  },
  hero: {
    greeting: "Hi, I'm",
    viewProjects: "View projects",
    about: "About",
  },
  about: {
    title: "About",
    subtitle: "Get to know me, my journey, and my goals.",
    skills: "Skills",
    story: [
      "Hi, I'm Şaban Akçehre. I'm 23 years old and born in Antalya. My interest in technology and software started in high school when my teacher gave me a book about Steve Jobs. Since then, building things, improving myself, and finishing what I start has been a major source of motivation.",
      "I'm currently studying Computer Engineering at Atatürk University and graduating in about a month. I keep growing in algorithms, web technologies, and software development. I enjoy learning new technologies, shipping projects, and communicating well in teams.",
      "I'm open to internships and new career opportunities. My dream is to travel the world, live comfortably, do work I genuinely enjoy, and build a good family. One big reason I keep improving myself is laying the foundations for that future today.",
    ],
  },
  projects: {
    title: "Projects",
    subtitle: "Apps I've built and open-source work.",
    allRepos: "All repos →",
    loadError: "Could not load GitHub projects.",
    loadErrorHint: "Check the githubUsername field in",
    noDescription: "No description provided.",
    details: "View details",
    openRepo: "Open repo →",
  },
  blog: {
    title: "Blog",
    subtitle: "Notes on technology, projects, and learning.",
    allPosts: "All posts →",
  },
  gallery: {
    title: "Photo Archive",
    subtitle: "Personal collection — click a photo to enlarge.",
    enlarge: "Enlarge",
    close: "Close",
  },
  contact: {
    title: "Contact",
    subtitle:
      "Reach out for collaboration, internships, or project ideas.",
    sendEmail: "Send email ✉",
  },
  footer: {
    builtWith: "Built with Next.js",
  },
  projectPage: {
    back: "← Back to projects",
    openGithub: "Open on GitHub →",
    notFound: "Project not found",
    details: "project details",
    noDetail: "Detail page not prepared for this project yet.",
    noDetailHint: "Edit the file",
    openGithubDetail: "Open on GitHub for details",
    videoUnsupported: "Your browser does not support video playback.",
  },
  theme: {
    light: "Light theme",
    dark: "Dark theme",
    toggle: "Toggle theme",
  },
  language: {
    label: "Language",
    tr: "Türkçe",
    en: "English",
  },
  site: {
    title: "Computer Engineer",
    tagline: "Android Developer Enthusiast",
    portfolio: "Portfolio",
  },
};

export const translations: Record<Locale, TranslationKey> = { tr, en };

export function getTranslations(locale: Locale): TranslationKey {
  return translations[locale] ?? translations.tr;
}
