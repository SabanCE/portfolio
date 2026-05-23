/**
 * Blog yazı içeriklerini buraya ekleyin.
 * Her yazı için slug ile eşleşen bir case yazın.
 */
import { postContent } from "@/config/blog";

type BlogPostContentProps = {
  slug: string;
};

export function BlogPostContent({ slug }: BlogPostContentProps) {
  switch (slug) {
    case "ilk-blog-yazim":
      return (
        <article className="prose-blog space-y-8 text-ink-muted">
          {postContent
            .trim()
            .split("\n\n")
            .map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
        </article>
      );

    default:
      return (
        <div className="rounded-2xl border border-dashed border-sky-200 bg-sky-50/50 p-8 text-center">
          <p className="font-medium text-ink">Bu yazının içeriği henüz eklenmedi.</p>
          <p className="mt-2 text-sm text-ink-muted">
            <code className="text-sky-600">
              src/components/blog/BlogPostContent.tsx
            </code>{" "}
            dosyasına <strong>{slug}</strong> için içerik ekleyin.
          </p>
        </div>
      );
  }
}
