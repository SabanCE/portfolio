/** GitHub repo bilgisini geçersiz kılan proje detay alanları (slug ile eşleşir). */
export const projectDetailOverrides: Record<
  string,
  {
    title?: string;
    titleEn?: string;
    description?: string;
    descriptionEn?: string;
  }
> = {
  aiyardimcim: {
    title: "AI Yaşam Asistanı",
    titleEn: "AI Life Assistant",
    description:
      "Kalıcı bellek, sosyal çevre hafızası, multimodal analiz ve proaktif görev çıkarma ile full stack AI yaşam asistanı.",
    descriptionEn:
      "A full-stack AI life assistant with persistent memory, social context awareness, multimodal analysis, and proactive task extraction.",
  },
  restoranpos: {
    title: "Restoran Pos Otomasyonu",
    titleEn: "Restaurant POS Automation",
  },
  "calculator-kotlin": {
    title: "Calculator Mobile App",
    description:
      "Bu proje, Kotlin kullanılarak geliştirilmiş basit bir hesap makinesi uygulamasıdır. Temel aritmetik işlemleri (toplama, çıkarma, çarpma, bölme) destekler.",
    descriptionEn:
      "This project is a simple calculator app built with Kotlin that supports basic arithmetic operations like addition, subtraction, multiplication, and division.",
  },
  "snake-game-web": {
    title: "Snake Game",
    description:
      "HTML, CSS ve JS ile geliştirilmiş klasik yılan oyunu.",
    descriptionEn: "Classic snake game built with HTML, CSS, and JavaScript.",
  },
  chatapp: {
    title: "ChatApp",
    description:
      "Firebase kullanılarak Kotlin ile geliştirilmiş gerçek zamanlı bir mesajlaşma uygulamasıdır. Kullanıcılar benzersiz Kısa Kimlikler aracılığıyla bağlantı kurabilir, bire bir veya gruplar halinde sohbet edebilir ve modern, özelleştirilebilir bir kullanıcı arayüzünün keyfini çıkarabilirler.",
    descriptionEn:
      "A real-time messaging app built with Kotlin and Firebase. Users connect via unique short IDs and chat one-on-one or in groups with a modern, customizable interface.",
  },
  gymtracking: {
    description:
      "Kotlin (MVVM + Jetpack Compose) ile geliştirilmiş istemci tarafı fitness takip uygulaması. Çevrimdışı öncelikli veri kalıcılığı için Room DB kullanarak egzersiz takibi, aşamalı yüklenme, makro hesaplama ve ilerleme izleme özelliklerini içerir.",
    descriptionEn:
      "A client-side fitness tracker built with Kotlin, MVVM, and Jetpack Compose. It uses Room DB for offline persistence and includes workout tracking, progressive overload, macro calculation, and progress monitoring.",
  },
  zirve2: {
    title: "Çekiliş Sayfası",
    titleEn: "Giveaway Page",
    description:
      "Girişimcilik zirvesi için tam kapsamlı hediye dağıtım web uygulaması. HTML, CSS, JS, Node.js ile geliştirildi; Firebase ve Google Sheets API'leri entegre edildi. Canlı bir alan adı ile Railway ve Cloudflare üzerinden dağıtıldı. Gerçek zamanlı veri işleme, ölçeklenebilirlik ve üretim ortamına dağıtıma odaklanıldı.",
    descriptionEn:
      "A full-featured giveaway distribution web app for an entrepreneurship summit. Built with HTML, CSS, JS, and Node.js with Firebase and Google Sheets API integration, deployed via Railway and Cloudflare.",
  },
  mobilprogramlamaproje: {
    title: "Kampüs Güvende",
    titleEn: "Campus Safe",
    description:
      "Kotlin ile geliştirilmiş, kampüs hayatını kolaylaştırmak için tasarlanmış bir mobil uygulama. Öğrencilerin kayıp eşyaları, acil durumları, güvenlik risklerini, teknik sorunları ve sağlık problemlerini birkaç dokunuşla bildirmelerini sağlıyor. Kampüs içi iletişimi daha hızlı, daha güvenli ve daha verimli hale getirmek için geliştirildi.",
    descriptionEn:
      "A mobile app built with Kotlin to simplify campus life. Students can report lost items, emergencies, safety risks, technical issues, and health problems in a few taps.",
  },
  deprembitirmeprojesi: {
    title: "Afet Haberleşme ve Erken Uyarı Sistemi",
    titleEn: "Disaster Comms and Early Warning System",
    description:
      "Deprem ve afet durumlarında iletişim altyapılarının devre dışı kalması halinde mağdurlar ile kurtarma ekipleri arasında kesintisiz haberleşme sağlamayı amaçlayan Android tabanlı bir mobil platform geliştirdim. Uygulama; cihaz sensörlerinden elde edilen verileri analiz ederek olası deprem hareketlerini tespit etmekte, STA/LTA algoritmaları ile sismik aktiviteleri değerlendirmekte ve yanlış alarmları azaltmak için güvenilirlik skorları oluşturmaktadır. Sistem, Bluetooth ve Wi-Fi destekli Mesh Network yapısı sayesinde internet olmadan cihazlar arasında mesajlaşma imkânı sunmaktadır. Ayrıca konum paylaşımı, acil durum bildirimleri, yapay zekâ destekli öneriler ve kurtarma ekipleri için yoğunluk haritaları ile risk analizleri sağlayarak afet yönetimi süreçlerini desteklemektedir.",
    descriptionEn:
      "An Android platform designed to keep victims and rescue teams connected when communication infrastructure fails in earthquake or disaster scenarios. It analyzes sensor data, applies STA/LTA seismic detection, and reduces false alarms with reliability scores.",
  },
  "flower-gift": {
    title: "Flower Gift Animations",
    description: "HTML, CSS ve JS ile yapılmıştır.",
    descriptionEn: "Built with HTML, CSS, and JavaScript.",
  },
  "autonomous-kmeans-architecture": {
    description:
      "Akıllı K-Means Motoru: İnsan müdahalesi olmadan kümeleme parametrelerini optimize eden akıllı bir MATLAB algoritması.",
    descriptionEn:
      "Intelligent K-Means engine: a MATLAB algorithm that optimizes clustering parameters without human intervention.",
  },
};

export function getProjectDisplayInfo(
  slug: string,
  repo: { name: string; description: string | null },
  noDescription = "Açıklama eklenmemiş.",
  locale: "tr" | "en" = "tr"
) {
  const override = projectDetailOverrides[slug];
  return {
    title:
      (locale === "en" ? override?.titleEn : override?.title) ?? repo.name,
    description:
      (locale === "en" ? override?.descriptionEn : override?.description) ??
      repo.description ??
      noDescription,
  };
}
