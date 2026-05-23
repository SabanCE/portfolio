import { ComingSoonPanel } from "@/components/admin/ComingSoonPanel";

export default function AdminBlogPage() {
  return (
    <ComingSoonPanel
      title="Blog yönetimi"
      description="Tarayıcıdan yazı eklemek için yazıların veritabanında saklanması gerekir."
      steps={[
        "Supabase veya benzeri bir serviste PostgreSQL tablosu oluşturun.",
        "API route ile yazı ekleme / güncelleme / silme endpoint'leri yazın.",
        "Bu sayfadaki formu API'ye bağlayın.",
        "İsteğe bağlı: Markdown editörü ekleyin.",
      ]}
    />
  );
}
