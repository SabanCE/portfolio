# Şaban Akçehre | Kişisel Portfolyo

Bilgisayar mühendisliği, Android geliştirme ve kurumsal IT deneyimini bir
arada sunan kişisel portfolyo sitesi. Site; projeleri, teknik yetkinlikleri,
blog yazılarını, fotoğraf galerisini ve iletişim kanallarını tek bir yerde
toplar.

## Özellikler

- Türkçe ve İngilizce dil desteği
- Açık/koyu tema ve responsive tasarım
- GitHub depolarını otomatik getiren proje bölümü
- Öne çıkan projeler için detay sayfaları
- Tarihe göre sıralanan blog ve yazı detay sayfaları
- Fotoğraf galerisi
- Ziyaretçi sayacı (Upstash Redis ile)
- Admin girişi ve korumalı yönetim paneli
- Framer Motion ve GSAP ile animasyonlar

## Teknolojiler

- Next.js 15 ve React 19
- TypeScript
- Tailwind CSS
- Framer Motion ve GSAP
- Iron Session
- Upstash Redis

## Kurulum

Gereksinimler: Node.js 18.18 veya daha yeni bir sürüm.

```bash
npm install
npm run dev
```

Geliştirme sunucusunu başlatınca [http://localhost:3000](http://localhost:3000)
adresini açın.

Üretim derlemesini kontrol etmek için:

```bash
npm run build
npm start
```

## Ortam değişkenleri

Admin girişi ve ziyaretçi sayacı için proje kökünde `.env.local` dosyası
oluşturun:

```env
ADMIN_USERNAME=admin
ADMIN_PASSWORD=guclu-bir-sifre
SESSION_SECRET=en-az-32-karakterlik-rastgele-bir-deger
UPSTASH_REDIS_REST_URL=https://your-database.upstash.io
UPSTASH_REDIS_REST_TOKEN=your-upstash-token
```

`SESSION_SECRET` en az 32 karakter olmalıdır. Upstash bilgileri yalnızca
ziyaretçi sayacı kullanılacaksa gereklidir. `.env.local` dosyasını Git’e
eklemeyin.

## Sayfalar ve rotalar

| Rota | Açıklama |
| --- | --- |
| `/` | Ana portfolyo: tanıtım, hakkımda, projeler ve iletişim |
| `/blog` | Tüm blog yazıları |
| `/blog/[slug]` | Blog yazısı detayı |
| `/projeler/[slug]` | Proje detay sayfası |
| `/giris` | Admin giriş ekranı |
| `/admin` | Korumalı admin paneli |
| `/snake-game-web` | Snake Game projesi |

## İçerik yönetimi

### Site bilgileri

Ana sayfadaki ad, unvan, açıklamalar, yetenekler, sosyal medya bağlantıları,
GitHub kullanıcı adı ve öne çıkan projeler [`src/config/site.ts`](src/config/site.ts)
dosyasından düzenlenir.

### Projeler

`githubUsername` alanı, GitHub’daki public repoları proje listesine bağlar.
`featuredProjectSlugs` öne çıkarılacak repoları, `excludedProjectSlugs` ise
listeden gizlenecek repoları belirler. GitHub API yanıtları bir saat boyunca
önbelleğe alınır.

Proje detay içeriği için
[`src/components/projects/ProjectDetailContent.tsx`](src/components/projects/ProjectDetailContent.tsx)
dosyasındaki `slug` eşleşmelerini güncelleyin.

### Blog

Yazıları [`src/config/blog.ts`](src/config/blog.ts) içinde tanımlayın. Her yazı
`slug`, başlık, özet, tarih, etiketler ve Türkçe/İngilizce içerik alanlarından
oluşur. Ana sayfada en yeni üç yazı gösterilir.

### Galeri

Fotoğrafları `public/gallery/` klasörüne ekleyin ve
[`src/config/gallery.ts`](src/config/gallery.ts) içindeki listeye görsel yolu,
alt metni ve açıklamayı yazın. Profil fotoğrafı `public/profile.jpeg` olarak
beklenir; farklı bir dosya kullanırsanız `siteConfig.avatar` değerini değiştirin.

Admin panelindeki blog ve galeri ekranları için giriş akışı hazırdır; içerik
kalıcılığı şu anda config dosyaları üzerinden yapılır.

## Proje yapısı

```text
src/app/          Next.js sayfaları ve API route'ları
src/components/   Arayüz bileşenleri
src/config/       Site, blog, galeri ve proje verileri
src/i18n/         Çeviri metinleri
src/lib/          GitHub, session, tarih ve yardımcı fonksiyonlar
public/           Görseller, galeri ve statik varlıklar
middleware.ts     Admin rotası koruması
```

## Yayınlama

Vercel, Next.js uygulaması için önerilen dağıtım seçeneğidir. Projeyi GitHub’a
push edip Vercel’de import edin ve `.env.local` içindeki değişkenleri proje
ayarlarından ekleyin. Ardından `npm run build` ile üretim derlemesini
doğrulayın.
