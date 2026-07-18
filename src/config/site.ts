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
    "Merhaba, ben Şaban Akçehre. Bilgisayar Mühendisliği mezunuyum ve şu anda Unity ile oyun geliştirme üzerine çalışıyorum. Oyun geliştirme sürecinde C#, oyun mekanikleri, kullanıcı deneyimi ve performans optimizasyonu gibi konularda kendimi geliştirmeye devam ediyorum.",

    "Bunun yanında yazılım geliştirme alanında mobil uygulamalar ve web teknolojileriyle de ilgileniyorum. Farklı teknolojiler kullanarak kullanıcı odaklı, işlevsel ve sürdürülebilir projeler geliştirmeyi seviyor; her projeyi yeni şeyler öğrenmek ve teknik becerilerimi geliştirmek için bir fırsat olarak görüyorum.",

    "Öğrenmeye açık, araştırmayı seven ve disiplinli bir geliştirici olarak yeni teknolojileri takip ediyor, kendimi sürekli geliştirmeye odaklanıyorum. Amacım, kaliteli yazılım çözümleri ve etkileyici oyun deneyimleri üreterek kariyerimde güçlü bir temel oluşturmak.",
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
    { label: "Blog", href: "/blog" },
    { label: "Galeri", href: "/#galeri" },
    { label: "İletişim", href: "/#iletisim" },
  ],
} as const;

export { galleryPhotos } from "./gallery";