# Admin panel ve veritabanı rehberi

## Veritabanı gerekli mi?

| Ne yapmak istiyorsunuz? | Veritabanı gerekir mi? |
|-------------------------|------------------------|
| Sadece siz, ara sıra, kod dosyasından düzenleme | **Hayır** — `blog.ts`, `gallery.ts` yeterli |
| Tarayıcıdan giriş → yazı / fotoğraf ekleme | **Evet** (+ fotoğraf için **dosya depolama**) |
| Başkalarının da yazı eklemesi | **Evet** + güçlü kimlik doğrulama |

**Özet:** Gerçek bir admin paneli (formdan blog, galeri yükleme) istiyorsanız **evet**, kalıcı veri için veritabanı ve fotoğraflar için **storage** gerekir. Sadece giriş sayfası yetmez.

## Şu an projede ne var?

- `/giris` — Admin girişi (`.env.local` kullanıcı adı / şifre)
- `/admin` — Korunan panel (middleware ile)
- `/admin/blog`, `/admin/galeri` — İskelet sayfalar (veritabanı bağlanınca doldurulacak)

## Kurulum (giriş için)

1. `.env.example` dosyasını `.env.local` olarak kopyalayın
2. `ADMIN_USERNAME`, `ADMIN_PASSWORD`, `SESSION_SECRET` (min. 32 karakter) doldurun
3. `npm run dev` yeniden başlatın
4. http://localhost:3000/giris adresine gidin

## Önerilen yol (portfolyo için)

**Supabase** (ücretsiz katman):

- **Auth** — İleride e-posta ile giriş genişletilebilir
- **PostgreSQL** — `blog_posts`, `gallery_photos` tabloları
- **Storage** — `gallery/` bucket’ına fotoğraf yükleme
- Next.js ile iyi dokümante edilmiş

Alternatifler:

- **Turso / SQLite** — Hafif, blog metni için yeterli; fotoğraf için yine storage lazım
- **Sanity / Contentful** — Hazır admin UI, kod yazmadan içerik (öğrenme eğrisi farklı)
- **Markdown + Git** — Veritabanı yok; admin paneli sınırlı kalır

## Sonraki adımlar (isterseniz birlikte)

1. Supabase projesi açma
2. Tablolar: `blog_posts`, `gallery_photos`
3. API routes: CRUD + upload
4. Admin formlarını bağlama
5. Ana siteyi DB’den okuyacak şekilde güncelleme

Hangi yolu seçmek istediğinizi yazın; Supabase ile devam edebiliriz.
