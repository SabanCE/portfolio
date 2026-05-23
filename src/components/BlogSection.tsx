import { getSortedBlogPosts } from "@/config/blog";
import { getTranslations } from "@/i18n/translations";
import { getServerLocale } from "@/lib/get-server-locale";
import Link from "next/link";
import { AnimateIn } from "./AnimateIn";
import { BlogCard } from "./BlogCard";
import { SectionHeading } from "./SectionHeading";

export async function BlogSection() {
  const locale = await getServerLocale();
  const t = getTranslations(locale);
  const posts = getSortedBlogPosts().slice(0, 3);

  if (posts.length === 0) {
    return null;
  }

  return (
    <section id="blog" className="scroll-mt-24 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          title={t.blog.title}
          subtitle={t.blog.subtitle}
          action={
            <Link href="/blog" className="btn-secondary !text-sm">
              {t.blog.allPosts}
            </Link>
          }
        />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post, index) => (
            <BlogCard key={post.slug} post={post} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
