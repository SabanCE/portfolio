export type Locale = "tr" | "en";

export const locales: Locale[] = ["tr", "en"];
export const defaultLocale: Locale = "tr";
export const LOCALE_COOKIE = "locale";

export type TranslationKey = {
  nav: {
    about: string;
    projects: string;
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
    skillsList: readonly string[];
    story: readonly string[];
  };
  demoProject: {
    title: string;
    subtitle: string;
    description: string;
    watchVideo: string;
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
    featuredTitle: string;
    featuredDescription: string;
    sideTitle: string;
    sideDescription: string;
    multipleLanguages: string;
    liveDemoLabel: string;
    githubSourceLabel: string;
    previewLabel: string;
    technologyLabel: string;
  };
  blog: {
    title: string;
    subtitle: string;
    allPosts: string;
    returnHome: string;
    noPostsTitle: string;
    noPostsHint: string;
    readMore: string;
    backToBlog: string;
    postNotFound: string;
    postNotFoundHint: string;
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
    previous: string;
    next: string;
    features: string;
    technologies: string;
    screenshots: string;
    demoVideo: string;
    previewImage: string;
    liveDemo: string;
  };
  pages: {
    snakeGame: {
      title: string;
      description: string;
      back: string;
    };
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
    skillsList: [
      "AI",
      "Unity",
      "Kotlin",
      "Flutter",
      "Firebase",
      "Node.js",
      "Python",
      "HTML, CSS, JavaScript",
      "Git",
      "Çeşitli API'ler (Google Maps, OpenAI, vb.)",
      "C / C++ / C#",
      "Vercel, Railway",
      "Veri Yapıları, Algoritmalar",
    ],
    story: [
      "Merhaba, ben Şaban Akçehre. Bilgisayar Mühendisliği mezunuyum ve şu anda IT departmanında staj yapıyorum. Ağ sistemleri, sunucu yönetimi, switch ve access point yapılandırmaları ile teknik destek süreçlerinde kendimi geliştirmeye devam ediyorum.",
      "Staj sürecinde kurumsal IT altyapısını yakından tanıyarak problem çözme ve sistem yönetimi konularında pratik deneyim kazanıyorum. Teknik destek, ağ altyapısı ve sistem yönetimi alanında öğrenmeye açık ve disiplinli bir şekilde çalışmaya devam ediyorum.",
      "Öğrenmeye açık, araştırmayı seven ve sürekli kendini geliştirmeye önem veren bir geliştirici olarak yeni teknolojileri takip ediyor, kendimi sürekli geliştirmeye odaklanıyorum.",
    ],
  },
  demoProject: {
    title: "Demo Proje",
    subtitle: "YouTube'da paylaştığım proje demo tanıtımı.",
    description:
      "Unity ve C# kullanılarak geliştirilmiş üçüncü şahıs bir sosyal simülasyon oyunudur. Şu anda geliştirmeye devam ediyorum. Oyuncunun diyalog seçimleri NPC'lerin güven seviyesini etkiler ve güven arttıkça yeni etkileşimler (oturma, telefon numarası alma ve mesajlaşma) açılır. Modüler diyalog sistemi sayesinde yeni karakterler ve konuşmalar kolayca eklenebilir.",
    watchVideo: "Videoyu izle",
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
    featuredTitle: "Öne Çıkan Projeler",
    featuredDescription:
      "Gerçek kullanıcı problemlerini çözmek için geliştirdiğim ana projeler.",
    sideTitle: "Yan Projeler",
    sideDescription:
      "Öğrenme, deneysel geliştirme ve küçük ölçekli çalışmalar.",
    multipleLanguages: "Çoklu",
    liveDemoLabel: "Canlı Demo",
    githubSourceLabel: "GitHub Kaynağı",
    previewLabel: "Proje Önizlemesi",
    technologyLabel: "Kullanılan Teknolojiler",
  },
  blog: {
    title: "Blog",
    subtitle: "Teknoloji, projeler ve öğrenme notlarım.",
    allPosts: "Tüm yazılar →",
    returnHome: "← Ana sayfaya dön",
    noPostsTitle: "Henüz blog yazısı yok.",
    noPostsHint: "İlk yazınızı ekleyin.",
    readMore: "Devamını oku →",
    backToBlog: "← Bloga dön",
    postNotFound: "Blog yazısı bulunamadı",
    postNotFoundHint: "Aradığınız blog yazısı mevcut değil.",
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
    previous: "Geri",
    next: "İleri",
    features: "Öne Çıkan Özellikler",
    technologies: "Kullanılan Teknolojiler",
    screenshots: "Ekran Görüntüleri",
    demoVideo: "Demo Video",
    previewImage: "Proje Önizleme Görseli",
    liveDemo: "Canlı Demo",
  },
  pages: {
    snakeGame: {
      title: "Snake Game",
      description:
        "Oyun artık tarayıcınızda açılıyor. Bu sayfadan doğrudan oynayabilirsiniz.",
      back: "Proje sayfasına geri dön",
    },
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
    skillsList: [
      "AI",
      "Unity",
      "Kotlin",
      "Flutter",
      "Firebase",
      "Node.js",
      "Python",
      "HTML, CSS, JavaScript",
      "Git",
      "Various APIs (Google Maps, OpenAI, etc.)",
      "C / C++ / C#",
      "Vercel, Railway",
      "Data Structures, Algorithms",
    ],
    story: [
      "Hi, I'm Şaban Akçehre. I'm about to graduate from Atatürk University with a degree in Computer Engineering. I especially focus on Android app development, aiming to build applications that prioritize user experience and solve real problems.",
      "During university, I gained experience in problem solving, analytical thinking, and turning ideas into working products by developing various projects. As a developer who is open to learning, loves research, and values continuous self-improvement, I aim to specialize in mobile technologies.",
      "I am currently open to internship and career opportunities where I can develop myself.",
    ],
  },
  demoProject: {
    title: "Demo Project",
    subtitle: "A project demo introduction uploaded to YouTube.",
    description:
      "A third-person social simulation game developed with Unity and C#. I am still actively developing it. The player's dialogue choices affect NPC trust levels, and as trust increases, new interactions such as sitting down, getting a phone number, and messaging become available. Thanks to the modular dialogue system, new characters and conversations can be added easily.",
    watchVideo: "Watch video",
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
    featuredTitle: "Featured Projects",
    featuredDescription: "Main projects I built to solve real user problems.",
    sideTitle: "Side Projects",
    sideDescription: "Learning experiments and small utilities.",
    multipleLanguages: "Multiple",
    liveDemoLabel: "Live demo",
    githubSourceLabel: "GitHub source",
    previewLabel: "Project preview",
    technologyLabel: "Used technologies",
  },
  blog: {
    title: "Blog",
    subtitle: "Notes on technology, projects, and learning.",
    allPosts: "All posts →",
    returnHome: "← Back home",
    noPostsTitle: "No blog posts yet.",
    noPostsHint: "Add your first post.",
    readMore: "Read more →",
    backToBlog: "← Back to blog",
    postNotFound: "Blog post not found",
    postNotFoundHint: "The blog post you are looking for does not exist.",
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
    previous: "Previous",
    next: "Next",
    features: "Key features",
    technologies: "Used technologies",
    screenshots: "Screenshots",
    demoVideo: "Demo video",
    previewImage: "Project preview",
    liveDemo: "Live demo",
  },
  pages: {
    snakeGame: {
      title: "Snake Game",
      description:
        "The game now opens directly in your browser. Play it from this page.",
      back: "Back to project page",
    },
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
