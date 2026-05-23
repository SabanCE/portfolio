import { ComingSoonPanel } from "@/components/admin/ComingSoonPanel";

export default function AdminGalleryPage() {
  return (
    <ComingSoonPanel
      title="Galeri yönetimi"
      description="Fotoğraf yüklemek için dosya depolama (storage) şarttır; sadece veritabanı yetmez."
      steps={[
        "Supabase Storage, Cloudinary veya S3 benzeri bir depolama seçin.",
        "Galeri meta verisi (başlık, sıra, dosya yolu) için veritabanı tablosu açın.",
        "Yükleme API'si yazın ve bu forma bağlayın.",
        "Ana sitede galeriyi veritabanından okuyacak şekilde güncelleyin.",
      ]}
    />
  );
}
