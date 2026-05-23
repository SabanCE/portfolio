import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import Link from "next/link";

export default function BlogPostNotFound() {
  return (
    <>
      <Header />
      <main className="flex min-h-screen flex-col items-center justify-center px-6 pt-24 pb-20 text-center">
        <h1 className="font-display text-3xl font-bold text-ink">
          Yazı bulunamadı
        </h1>
        <p className="mt-3 text-ink-muted">
          Aradığınız blog yazısı mevcut değil.
        </p>
        <Link href="/blog" className="btn-primary mt-8">
          Bloga dön
        </Link>
      </main>
      <Footer />
    </>
  );
}
