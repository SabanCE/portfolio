import { BlogCard } from "@/components/BlogCard";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { getSortedBlogPosts } from "@/config/blog";
import { siteConfig } from "@/config/site";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: `Blog | ${siteConfig.name}`,
  description: "Teknoloji, projeler ve öğrenme notları.",
};

export default function BlogPage() {
  const posts = getSortedBlogPosts();

  return (
    <>
      <Header />
      <main className="min-h-screen pt-28 pb-20">
        <div className="mx-auto max-w-6xl px-6">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-medium text-ink-muted transition-colors hover:text-sky-600"
          >
            ← Ana sayfa
          </Link>

          <header className="mt-8 animate-fade-up">
            <h1 className="section-title">Blog</h1>
            <p className="mt-3 max-w-2xl text-lg text-ink-muted">
              Yazılım, mobil geliştirme ve kişisel notlarım.
            </p>
          </header>

          {posts.length === 0 ? (
            <div className="card-modern mt-12 text-center">
              <p className="font-medium text-ink">Henüz blog yazısı yok.</p>
              <p className="mt-2 text-sm text-ink-muted">
                <code className="text-sky-600">src/config/blog.ts</code> dosyasına
                ilk yazınızı ekleyin.
              </p>
            </div>
          ) : (
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {posts.map((post, index) => (
                <BlogCard key={post.slug} post={post} index={index} />
              ))}
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
