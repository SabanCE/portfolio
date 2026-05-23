import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import Link from "next/link";

export default function ProjectNotFound() {
  return (
    <>
      <Header />
      <main className="flex min-h-screen flex-col items-center justify-center px-6 pt-24 pb-20 text-center">
        <h1 className="font-display text-3xl font-bold text-ink">
          Proje bulunamadı
        </h1>
        <p className="mt-3 text-ink-muted">
          Aradığınız proje sayfası mevcut değil.
        </p>
        <Link href="/#projeler" className="btn-primary mt-8">
          Projelere dön
        </Link>
      </main>
      <Footer />
    </>
  );
}
