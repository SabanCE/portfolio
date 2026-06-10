"use client";

import type { BlogPost } from "@/config/blog";
import { formatDate } from "@/lib/format-date";
import Link from "next/link";
import { useLocale } from "@/components/providers/LocaleProvider";

type BlogCardProps = {
  post: BlogPost;
  index?: number;
};

const staggerClasses = [
  "stagger-1",
  "stagger-2",
  "stagger-3",
  "stagger-4",
  "stagger-5",
  "stagger-6",
];

export function BlogCard({ post, index = 0 }: BlogCardProps) {
  const stagger = staggerClasses[index % staggerClasses.length];
  const { locale, t } = useLocale();

  const title = locale === "en" ? post.titleEn ?? post.title : post.title;
  const excerpt = locale === "en" ? post.excerptEn ?? post.excerpt : post.excerpt;

  return (
    <article
      className={`card-modern group flex flex-col opacity-0 animate-fade-up ${stagger}`}
      style={{ animationFillMode: "forwards" }}
    >
      <time
        dateTime={post.date}
        className="text-xs font-medium uppercase tracking-wide text-sky-600"
      >
        {formatDate(post.date, locale)}
      </time>
      <h3 className="mt-3 font-display text-xl font-bold transition-colors duration-300 group-hover:text-sky-600">
        <Link href={`/blog/${post.slug}`}>{title}</Link>
      </h3>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-muted line-clamp-3">
        {excerpt}
      </p>
      {post.tags && post.tags.length > 0 && (
        <ul className="mt-4 flex flex-wrap gap-2">
          {post.tags.map((tag) => (
            <li
              key={tag}
              className="rounded-full bg-sky-50 px-2.5 py-0.5 text-xs font-medium text-sky-700"
            >
              {tag}
            </li>
          ))}
        </ul>
      )}
      <Link
        href={`/blog/${post.slug}`}
        className="btn-primary mt-6 w-full !py-2.5 text-center text-xs sm:w-auto"
      >
        {t.blog.readMore}
      </Link>
    </article>
  );
}
