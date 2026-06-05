/** GitHub repo bilgisini geçersiz kılan proje detay alanları (slug ile eşleşir). */
export const projectDetailOverrides: Record<
  string,
  { title?: string; description?: string }
> = {
  aiyardimcim: {
    title: "AI Yaşam Asistanı",
    description:
      "Kalıcı bellek, sosyal çevre hafızası, multimodal analiz ve proaktif görev çıkarma ile full stack AI yaşam asistanı.",
  },
  restoranpos: {
    title: "Restoran Pos Otomasyonu",
  },
  "calculator-kotlin": {
    title: "Calculator Mobile App",
    description:
      "Bu proje, Kotlin kullanılarak geliştirilmiş basit bir hesap makinesi uygulamasıdır. Temel aritmetik işlemleri (toplama, çıkarma, çarpma, bölme) destekler.",
  },
  "snake-game-web": {
    title: "Snake Game",
    description:
      "HTML, CSS ve JS ile geliştirilmiş klasik yılan oyunu.",
  },
  chatapp: {
    title: "ChatApp",
    description:
      "Firebase kullanılarak Kotlin ile geliştirilmiş gerçek zamanlı bir mesajlaşma uygulamasıdır. Kullanıcılar benzersiz Kısa Kimlikler aracılığıyla bağlantı kurabilir, bire bir veya gruplar halinde sohbet edebilir ve modern, özelleştirilebilir bir kullanıcı arayüzünün keyfini çıkarabilirler.",
  },
  gymtracking: {
    description:
      "Kotlin (MVVM + Jetpack Compose) ile geliştirilmiş istemci tarafı fitness takip uygulaması. Çevrimdışı öncelikli veri kalıcılığı için Room DB kullanarak egzersiz takibi, aşamalı yüklenme, makro hesaplama ve ilerleme izleme özelliklerini içerir.",
  },
  zirve2: {
    title: "Gerçek kullanıcılarla buluşan ilk projem Çekiliş Sayfası",
    description:
      "Girişimcilik zirvesi için tam kapsamlı hediye dağıtım web uygulaması. HTML, CSS, JS, Node.js ile geliştirildi; Firebase ve Google Sheets API'leri entegre edildi. Canlı bir alan adı ile Railway ve Cloudflare üzerinden dağıtıldı. Gerçek zamanlı veri işleme, ölçeklenebilirlik ve üretim ortamına dağıtıma odaklanıldı.",
  },
  mobilprogramlamaproje: {
    title: "Kampüs Güvende",
    description:
      "Kotlin ile geliştirilmiş, kampüs hayatını kolaylaştırmak için tasarlanmış bir mobil uygulama. Öğrencilerin kayıp eşyaları, acil durumları, güvenlik risklerini, teknik sorunları ve sağlık problemlerini birkaç dokunuşla bildirmelerini sağlıyor. Kampüs içi iletişimi daha hızlı, daha güvenli ve daha verimli hale getirmek için geliştirildi.",
  },
  deprembitirmeprojesi: {
    title: "Afet Haberleşme ve Erken Uyarı Sistemi",
    description:
      "Deprem ve afet durumlarında iletişim altyapılarının devre dışı kalması halinde mağdurlar ile kurtarma ekipleri arasında kesintisiz haberleşme sağlamayı amaçlayan Android tabanlı bir mobil platform geliştirdim. Uygulama; cihaz sensörlerinden elde edilen verileri analiz ederek olası deprem hareketlerini tespit etmekte, STA/LTA algoritmaları ile sismik aktiviteleri değerlendirmekte ve yanlış alarmları azaltmak için güvenilirlik skorları oluşturmaktadır. Sistem, Bluetooth ve Wi-Fi destekli Mesh Network yapısı sayesinde internet olmadan cihazlar arasında mesajlaşma imkânı sunmaktadır. Ayrıca konum paylaşımı, acil durum bildirimleri, yapay zekâ destekli öneriler ve kurtarma ekipleri için yoğunluk haritaları ile risk analizleri sağlayarak afet yönetimi süreçlerini desteklemektedir.",
  },
  "flower-gift": {
    title: "Flower Gift Animations",
    description: "HTML, CSS ve JS ile yapılmıştır.",
  },
  "autonomous-kmeans-architecture": {
    description:
      "Akıllı K-Means Motoru: İnsan müdahalesi olmadan kümeleme parametrelerini optimize eden akıllı bir MATLAB algoritması.",
  },
};

export function getProjectDisplayInfo(
  slug: string,
  repo: { name: string; description: string | null },
  noDescription = "Açıklama eklenmemiş."
) {
  const override = projectDetailOverrides[slug];
  return {
    title: override?.title ?? repo.name,
    description:
      override?.description ?? repo.description ?? noDescription,
  };
}
