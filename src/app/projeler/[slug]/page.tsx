import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { ProjectDetailContent } from "@/components/projects/ProjectDetailContent";
import { getProjectDisplayInfo } from "@/config/project-details";
import { getTranslations } from "@/i18n/translations";
import { siteConfig } from "@/config/site";
import { fetchGitHubRepos } from "@/lib/github";
import { getServerLocale } from "@/lib/get-server-locale";
import { repoToSlug } from "@/lib/project-slug";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

type PageProps = {
  params: Promise<{ slug: string }>;
};

async function findRepoBySlug(slug: string) {
  const repos = await fetchGitHubRepos(siteConfig.githubUsername);
  return repos.find((repo) => repoToSlug(repo.name) === slug);
}

export async function generateStaticParams() {
  try {
    const repos = await fetchGitHubRepos(siteConfig.githubUsername);
    return repos.map((repo) => ({ slug: repoToSlug(repo.name) }));
  } catch {
    return [];
  }
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const locale = await getServerLocale();
  const t = getTranslations(locale);
  const repo = await findRepoBySlug(slug);

  if (!repo) {
    return { title: t.projectPage.notFound };
  }

  const { title, description } = getProjectDisplayInfo(slug, repo);

  return {
    title: `${title} | ${siteConfig.name}`,
    description: description ?? `${repo.name} ${t.projectPage.details}`,
  };
}

export default async function ProjectDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const repo = await findRepoBySlug(slug);

  if (!repo) {
    notFound();
  }

  const locale = await getServerLocale();
  const t = getTranslations(locale);
  const { title, description } = getProjectDisplayInfo(slug, repo);
  const hideHeaderDescription =
    slug === "snake-game-web" ||
    slug === "flower-gift" ||
    slug === "autonomous-kmeans-architecture" ||
    slug === "deprembitirmeprojesi";

  return (
    <>
      <Header />
      <main className="min-h-screen pt-28 pb-20">
        <div className="mx-auto max-w-3xl px-6">
          <Link
            href="/#projeler"
            className="inline-flex items-center gap-2 text-sm font-medium text-ink-muted transition-colors hover:text-sky-600 dark:text-slate-400 dark:hover:text-sky-400"
          >
            {t.projectPage.back}
          </Link>

          <header className="mt-8 animate-fade-up">
            <div className="flex flex-wrap items-center gap-3">
              {repo.language && (
                <span className="rounded-full bg-gradient-to-r from-sky-100 to-violet-100 px-3 py-1 text-xs font-semibold text-sky-700">
                  {repo.language}
                </span>
              )}
            </div>
            <h1 className="mt-4 font-display text-3xl font-bold text-ink dark:text-slate-100 md:text-4xl">
              {title}
            </h1>
            {!hideHeaderDescription && description && (
              <p className="mt-3 text-lg text-ink-muted dark:text-slate-400">
                {description}
              </p>
            )}
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={repo.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary !text-sm"
              >
                {t.projectPage.openGithub}
              </a>
            </div>
          </header>

          <div className="mt-12 animate-fade-up animate-delay-200">
            <ProjectDetailContent
              slug={slug}
              repoName={repo.name}
              repoUrl={repo.html_url}
            />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
