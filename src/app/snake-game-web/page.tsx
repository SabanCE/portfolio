import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import Link from "next/link";

export default function SnakeGamePage() {
  return (
    <>
      <Header />
      <main className="min-h-screen pt-28 pb-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h1 className="text-3xl font-bold text-ink dark:text-slate-100">Snake Game</h1>
              <p className="mt-2 text-ink-muted dark:text-slate-400">
                Oyun içeriği artık kendi sitenizde açılıyor. Bu sayfadan oyunu doğrudan oynayabilirsiniz.
              </p>
            </div>
            <Link
              href="/projeler/snake-game-web"
              className="btn-secondary inline-flex items-center justify-center !text-sm"
            >
              Proje sayfasına geri dön
            </Link>
          </div>

          <div className="overflow-hidden rounded-3xl border border-slate-200/80 bg-black shadow-card">
            <iframe
              src="https://sabance.github.io/snake-game-web/"
              title="Snake Game"
              className="h-[80vh] w-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              referrerPolicy="strict-origin-when-cross-origin"
            />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
