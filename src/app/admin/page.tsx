import Link from "next/link";

const panels = [
  {
    href: "/admin/blog",
    title: "Blog yazıları",
    desc: "Yeni yazı ekle, düzenle veya sil.",
    icon: "✍️",
  },
  {
    href: "/admin/galeri",
    title: "Galeri",
    desc: "Fotoğraf yükle ve açıklama ekle.",
    icon: "🖼️",
  },
];

export default function AdminDashboardPage() {
  return (
    <div>
      <h1 className="section-title">Yönetim paneli</h1>
      <p className="mt-2 text-ink-muted">
        Hoş geldiniz. Aşağıdan içerik türünü seçin.
      </p>

      <div className="mt-10 grid gap-6 sm:grid-cols-2">
        {panels.map((panel) => (
          <Link
            key={panel.href}
            href={panel.href}
            className="card-modern group transition hover:-translate-y-1"
          >
            <span className="text-3xl">{panel.icon}</span>
            <h2 className="mt-4 font-display text-xl font-bold group-hover:text-sky-600">
              {panel.title}
            </h2>
            <p className="mt-2 text-sm text-ink-muted">{panel.desc}</p>
            <span className="mt-4 inline-block text-sm font-medium text-sky-600">
              Yönet →
            </span>
          </Link>
        ))}
      </div>

      <div className="card-modern mt-8 border-sky-100 bg-sky-50/40">
        <h3 className="font-semibold text-ink">Şu anki durum</h3>
        <p className="mt-2 text-sm text-ink-muted">
          Giriş ve panel hazır. Blog ve galeri formları, veritabanı veya dosya
          depolama bağlandığında aktif olacak. Şimdilik içerikleri kod
          dosyalarından düzenleyebilirsiniz (
          <code className="text-sky-600">src/config/blog.ts</code>,{" "}
          <code className="text-sky-600">src/config/gallery.ts</code>).
        </p>
      </div>
    </div>
  );
}
