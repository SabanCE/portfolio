/**
 * Kişisel bilgilerinizi buradan düzenleyin.
 * GitHub kullanıcı adınızı yazdığınızda projeler otomatik çekilir.
 */
export const siteConfig = {
  name: "Şaban Akçehre",
  title: "Bilgisayar Mühendisi",
  tagline: "Android Developer Enthusiast",
  email: "xsabanakcehre@gmail.com",
  location: "Antalya,Turkiye",
  githubUsername: "SabanCE",

  /** Ana sayfa proje listesinde gösterilmeyecek repo slug'ları */
  excludedProjectSlugs: [
    "qrverification",
    "portfolio",
    "yasamskoru",
    "notebook-kotlin-app",
    "matlab-control-system",
    "node-auth-app",
  ] as string[],

  /** Öne çıkan ana projeler */
  featuredProjectSlugs: [
    "socialsurvive",
    "aiyardimcim",
    "restoranpos",
    "chatapp",
    "gymtracking",
    "zirve2",
    "mobilprogramlamaproje",
    "deprembitirmeprojesi",
  ] as readonly string[],

  avatar: "/profile.jpeg",

  story: [
    "Merhaba, ben Şaban Akçehre. Bilgisayar Mühendisliği mezunuyum ve şu anda IT departmanında staj yapıyorum. Ağ sistemleri, sunucu yönetimi, switch ve access point yapılandırmaları ile teknik destek süreçlerinde kendimi geliştirmeye devam ediyorum.",

    "Staj sürecinde kurumsal IT altyapısını yakından tanıyarak problem çözme ve sistem yönetimi konularında pratik deneyim kazanıyorum. Teknik destek, ağ altyapısı ve sistem yönetimi alanında öğrenmeye açık ve disiplinli bir şekilde çalışmaya devam ediyorum.",

    "Öğrenmeye açık, araştırmayı seven ve sürekli kendini geliştirmeye önem veren bir geliştirici olarak yeni teknolojileri takip ediyor, kendimi sürekli geliştirmeye odaklanıyorum.",
  ],

  skills: [
    "AI",
    "Kotlin",
    "Flutter",
    "Firebase",
    "Node.js",
    "Python",
    "HTML, CSS, JavaScript",
    "Git",
    "Çeşitli API'ler (Google Maps, OpenAI, vb.)",
    "C / C++ / C#",
    "Vercel,Railway",
    "Veri Yapıları, Algoritmalar",
  ],

  social: {
    github: "https://github.com/SabanCE?tab=repositories",
    linkedin: "https://linkedin.com/in/sabanakcehre",
    instagram: "https://www.instagram.com/sabanakcehre/?hl=tr",
    email: "xsabanakcehre@gmail.com",
  },

  nav: [
    { label: "Hakkımda", href: "/#hakkimda" },
    { label: "Projeler", href: "/#projeler" },
    { label: "İletişim", href: "/#iletisim" },
  ],
} as const;

export { galleryPhotos } from "./gallery";