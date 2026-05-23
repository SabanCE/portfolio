# Kişisel Portfolyo Sitesi

Bilgisayar mühendisliği portfolyosu: hakkımda, GitHub projeleri, fotoğraf arşivi ve iletişim.

## Hızlı başlangıç

```bash
npm install
npm run dev
```

Tarayıcıda [http://localhost:3000](http://localhost:3000) adresini açın.

## Kişiselleştirme

Tüm metinler ve bağlantılar tek dosyada:

**`src/config/site.ts`**

| Alan | Açıklama |
|------|----------|
| `name`, `title`, `tagline` | Ana sayfa metinleri |
| `githubUsername` | GitHub repoları otomatik çekilir |
| `about`, `skills` | Hakkımda bölümü |
| `social` | GitHub, LinkedIn, e-posta linkleri |
| `galleryPhotos` | Galeri listesi |

### Profil fotoğrafı

`public/profile.jpg` (veya `.png`) dosyasını ekleyin ve `site.ts` içinde `avatar: "/profile.jpg"` yapın.

### Fotoğraf arşivi

1. Fotoğrafları `public/gallery/` klasörüne kopyalayın.
2. `src/config/site.ts` → `galleryPhotos` dizisine `src`, `alt`, `caption` ekleyin.

### GitHub

`githubUsername` alanına kendi kullanıcı adınızı yazın. API her saat önbelleğe alınır; özel repolar görünmez.

### Blog

1. `src/config/blog.ts` → yazı listesi (başlık, tarih, özet, slug, etiketler)
2. `src/components/blog/BlogPostContent.tsx` → yazının tam içeriği (`case` ile slug eşleşmesi)

- Ana sayfada son 3 yazı önizlemesi
- Tüm yazılar: `/blog`
- Yazı detayı: `/blog/[slug]`

### Proje detay sayfaları

Her proje kartındaki **Detaylı bilgi** butonu `/projeler/[slug]` sayfasına gider.

Detay içeriğini siz yazacaksınız:

1. `src/components/projects/ProjectDetailContent.tsx` dosyasını açın
2. `switch (slug)` içine projenizin slug'ı için bir `case` ekleyin (slug, detay sayfası URL'sinde görünür)
3. İstediğiniz JSX içeriğini `return` edin

## Yayınlama

- **Vercel:** Repoyu GitHub’a push edin, [vercel.com](https://vercel.com) üzerinden import edin.
- **Statik export:** `next.config.ts` içine `output: "export"` ekleyip `npm run build` çalıştırın.

## Proje yapısı

```
src/
  app/          → Sayfa ve global stiller
  components/   → Header, Hero, About, Projects, Gallery, Contact
  config/       → site.ts (sizin verileriniz)
  lib/          → GitHub API
public/
  gallery/      → Fotoğraflarınız
```
