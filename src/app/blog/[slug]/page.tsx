import { BlogPostContent } from "@/components/blog/BlogPostContent";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { getBlogPost, getSortedBlogPosts } from "@/config/blog";
import { siteConfig } from "@/config/site";
import { formatDate } from "@/lib/format-date";
import { getServerLocale } from "@/lib/get-server-locale";
import { getTranslations } from "@/i18n/translations";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getSortedBlogPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    return { title: "Blog post not found" };
  }

  const locale = await getServerLocale();
  const title = locale === "en" ? post.titleEn ?? post.title : post.title;
  const excerpt = locale === "en" ? post.excerptEn ?? post.excerpt : post.excerpt;

  return {
    title: `${title} | ${siteConfig.name}`,
    description: excerpt,
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    notFound();
  }

  const locale = await getServerLocale();
  const t = getTranslations(locale);
  const title = locale === "en" ? post.titleEn ?? post.title : post.title;
  const excerpt = locale === "en" ? post.excerptEn ?? post.excerpt : post.excerpt;

  return (
    <>
      <Header />
      <main className="min-h-screen pt-28 pb-20">
        <article className="mx-auto max-w-3xl px-6">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm font-medium text-ink-muted transition-colors hover:text-sky-600"
          >
            {t.blog.backToBlog}
          </Link>

          <header className="mt-8 animate-fade-up">
            <time
              dateTime={post.date}
              className="text-sm font-medium text-sky-600"
            >
              {formatDate(post.date, locale)}
            </time>
            <h1 className="mt-4 font-display text-3xl font-bold text-ink md:text-4xl">
              {title}
            </h1>
            {post.tags && post.tags.length > 0 && (
              <ul className="mt-4 flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <li
                    key={tag}
                    className="rounded-full bg-sky-50 px-3 py-1 text-xs font-medium text-sky-700"
                  >
                    {tag}
                  </li>
                ))}
              </ul>
            )}
            <p className="mt-6 text-lg leading-relaxed text-ink-muted">
              {excerpt}
            </p>
          </header>

          <div className="mt-12 animate-fade-up animate-delay-200">
            <BlogPostContent slug={slug} locale={locale} />
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
