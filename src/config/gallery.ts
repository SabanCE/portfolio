/**
 * Galeri: 1 = en yeni, 32 = en eski.
 * Dosya adları public/gallery/ ile eşleşmelidir.
 */
const galleryItems = [
  { file: "1-Hackhatlon Yarışması.jpeg", caption: "Hackatlon Yarışması" },
  { file: "2-Hackhatlon Yarışması.jpeg", caption: "Hackatlon Yarışması" },
  { file: "3-Kudakaf Fuarı.jpeg", caption: "Kudakaf Fuarı" },
  { file: "4-Girişmcilik Zirvesi.jpeg", caption: "Girişmcilik Zirvesi" },
  { file: "5-Girişmcilik Zirvesi.jpeg", caption: "Girişmcilik Zirvesi" },
  { file: "6-Tedx Etkinliği.jpeg", caption: "Tedx Etkinliği" },
  { file: "7-Antalya Karaalioğlu park.jpeg", caption: "Antalya Karaalioğlu Parkı" },
  { file: "8-tortum şelalesi.jpeg", caption: "Tortum Şelalesi" },
  { file: "9-yerebatan sarnıcı.jpeg", caption: "Yerebatan Sarnıcı" },
  { file: "10-palandöken dağı.jpeg", caption: "Palandöken Dağı" },
  { file: "11-Kıbrıs.jpeg", caption: "Kıbrıs" },
  { file: "12-Kıbrıs.jpeg", caption: "Kıbrıs" },
  { file: "13-Kapalı Maraş.jpeg", caption: "Kapalı Maraş" },
  { file: "14-İstanbul.jpeg", caption: "İstanbul" },
  { file: "15-Kapalı Maraş.jpeg", caption: "Kapalı Maraş" },
  { file: "16-Havalimanı İş.jpeg", caption: "Havalimanı İş" },
  { file: "17-The land Of legends.jpeg", caption: "The Land Of Legends" },
  { file: "18-the land of legends.jpeg", caption: "the Land of Legends" },
  { file: "19-Antalya.jpeg", caption: "Antalya" },
  { file: "20-İcebreak Konseri.jpeg", caption: "İcebreak Konseri" },
  {
    file: "21-Cumhurbaşkanlığı Millet Kütüphanesi.jpeg",
    caption: "Cumhurbaşkanlığı Millet Kütüphanesi",
  },
  { file: "23-Batum.jpeg", caption: "Batum" },
  { file: "24-Artvin.jpeg", caption: "Artvin" },
  { file: "25-Antalya.jpeg", caption: "Antalya" },
  { file: "26-Erzurum.jpeg", caption: "Erzurum" },
  { file: "27-Antalya.jpeg", caption: "Antalya" },
  { file: "28-Erzurum.jpeg", caption: "Erzurum" },
  { file: "29-Antalya.jpeg", caption: "Antalya" },
  { file: "30-Lara Plajı.jpeg", caption: "Lara Plajı" },
  { file: "31-Erzurum.jpeg", caption: "Erzurum" },
  { file: "32-Antalya.jpeg", caption: "Antalya" },
] as const;

export const galleryPhotos = galleryItems.map(({ file, caption }) => ({
  src: `/gallery/${encodeURI(file)}`,
  alt: caption,
  caption,
}));
