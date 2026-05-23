/**
 * Kişisel bilgilerinizi buradan düzenleyin.
 * GitHub kullanıcı adınızı yazdığınızda projeler otomatik çekilir.
 */
export const siteConfig = {
  name: "Şaban Akçehre",
  title: "Bilgisayar Mühendisi",
  tagline: "Android Developer Enthusiast",
  email: "xsabanakcehre@gmail.com",
  location: "Antalya, Türkiye",
  githubUsername: "SabanCE",
  /** Ana sayfa proje listesinde gösterilmeyecek repo slug'ları */
  excludedProjectSlugs: ["qrverification", "portfolio"] as string[],
  avatar: "/profile.jpeg",
  story: [
    "Merhaba, ben Şaban Akçehre. 23 yaşındayım ve Antalya doğumluyum. Teknolojiye ve yazılıma olan ilgim lise yıllarında, sınıf öğretmenimin bana hediye ettiği Steve Jobs kitabıyla başladı. O günden beri üretmek, kendimi geliştirmek ve başladığım bir hedefi tamamlamak benim için büyük bir motivasyon kaynağı oldu.",
    "Şu anda Atatürk Üniversitesi Bilgisayar Mühendisliği bölümünde öğrenim görüyorum ve yaklaşık 1 ay içinde mezun oluyorum. Algoritmalar, web teknolojileri ve yazılım geliştirme alanlarında kendimi geliştirmeye devam ediyorum. Yeni teknolojiler öğrenmeyi, proje üretmeyi ve ekip içinde sosyal iletişim kurmayı seviyorum.",
    "Şu anda staj ve yeni kariyer fırsatlarına açığım. Hayalim; dünyayı gezebilmek, refah içinde yaşayabilmek, gerçekten keyif aldığım ve üretirken mutlu olduğum bir iş yapmak ve iyi bir aile kurmak. Kendimi sürekli geliştirmemin en büyük sebeplerinden biri de, gelecekte kurmak istediğim hayatın temellerini bugünden oluşturmak.",
  ],
  skills: [
    "AI",
    "C / C++",
    "Flutter",
    "Python",
    "Firebase",
    "Node.js",
    "Git",
    "Kotlin",
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
