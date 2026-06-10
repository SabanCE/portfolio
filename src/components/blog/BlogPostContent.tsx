import type { Locale } from "@/i18n/translations";
import { getBlogPost } from "@/config/blog";

type BlogPostContentProps = {
  slug: string;
  locale: Locale;
};

export function BlogPostContent({ slug, locale }: BlogPostContentProps) {
  const post = getBlogPost(slug);

  if (!post) {
    const message =
      locale === "en"
        ? "This blog post could not be found."
        : "Bu yazı bulunamadı.";
    return (
      <div className="rounded-2xl border border-dashed border-sky-200 bg-sky-50/50 p-8 text-center">
        <p className="font-medium text-ink">{message}</p>
      </div>
    );
  }

  const content = locale === "en" ? post.content.en : post.content.tr;
  const emptyContent = !content?.trim();

  if (emptyContent) {
    return (
      <div className="rounded-2xl border border-dashed border-sky-200 bg-sky-50/50 p-8 text-center">
        <p className="font-medium text-ink">
          {locale === "en"
            ? "This post content has not been added yet."
            : "Bu yazının içeriği henüz eklenmedi."}
        </p>
      </div>
    );
  }

  return (
    <article className="prose-blog space-y-8 text-ink-muted">
      {content
        .trim()
        .split("\n\n")
        .map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
    </article>
  );
}
