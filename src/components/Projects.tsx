import { getProjectDisplayInfo } from "@/config/project-details";
import { getTranslations } from "@/i18n/translations";
import { siteConfig } from "@/config/site";
import { fetchGitHubRepos, type GitHubRepo } from "@/lib/github";
import { getServerLocale } from "@/lib/get-server-locale";
import { projectDetailPath, repoToSlug } from "@/lib/project-slug";
import type { TranslationKey } from "@/i18n/translations";
import Link from "next/link";
import { AnimateIn } from "./AnimateIn";
import { SectionHeading } from "./SectionHeading";

const staggerClasses = [
  "stagger-1",
  "stagger-2",
  "stagger-3",
  "stagger-4",
  "stagger-5",
  "stagger-6",
];

function ProjectCard({
  repo,
  index,
  t,
}: {
  repo: GitHubRepo;
  index: number;
  t: TranslationKey;
}) {
  const stagger = staggerClasses[index % staggerClasses.length];
  const slug = repoToSlug(repo.name);

  const { title, description } = getProjectDisplayInfo(
    slug,
    repo,
    t.projects.noDescription
  );

  return (
    <article
      className={`card-modern group flex flex-col opacity-0 animate-fade-up ${stagger}`}
      style={{ animationFillMode: "forwards" }}
    >
      <div className="mb-4 flex items-start justify-between gap-3">
        <h3 className="font-display text-lg font-bold transition-colors duration-300 group-hover:text-sky-600 dark:group-hover:text-sky-400">
          <Link href={projectDetailPath(repo.name)}>{title}</Link>
        </h3>

        {repo.language && (
          <span className="shrink-0 rounded-full bg-gradient-to-r from-sky-100 to-violet-100 px-3 py-1 text-xs font-semibold text-sky-700 dark:from-sky-900/50 dark:to-violet-900/50 dark:text-sky-300">
            {repo.language}
          </span>
        )}
      </div>

      <p className="mb-6 flex-1 text-sm leading-relaxed text-ink-muted line-clamp-3 dark:text-slate-400">
        {description}
      </p>

      <div className="flex items-center gap-1 border-t border-slate-100 pt-4 text-sm text-ink-faint dark:border-slate-700 dark:text-slate-500">
        <span className="text-amber-400">★</span>
        {repo.stargazers_count}
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        <Link
          href={projectDetailPath(repo.name)}
          className="btn-primary flex-1 !px-4 !py-2 text-center text-xs sm:flex-none"
        >
          {t.projects.details}
        </Link>

        <a
          href={repo.html_url}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-secondary !px-4 !py-2 text-xs"
        >
          {t.projects.openRepo}
        </a>
      </div>
    </article>
  );
}

function ProjectsFallback({ t }: { t: TranslationKey }) {
  return (
    <div className="card-modern border-amber-200/80 bg-amber-50/50 !text-amber-900 dark:border-amber-800/80 dark:bg-amber-950/40 dark:!text-amber-200">
      <p className="font-semibold">{t.projects.loadError}</p>

      <p className="mt-2 text-sm text-ink-muted dark:text-slate-400">
        <code className="rounded bg-white px-1.5 py-0.5 text-sky-600 dark:bg-slate-800 dark:text-sky-400">
          src/config/site.ts
        </code>{" "}
        {t.projects.loadErrorHint}
      </p>
    </div>
  );
}

export async function Projects() {
  const locale = await getServerLocale();
  const t = getTranslations(locale);

  let repos: GitHubRepo[] = [];

  try {
    const allRepos = await fetchGitHubRepos(siteConfig.githubUsername);

    repos = allRepos.filter(
      (repo) =>
        !siteConfig.excludedProjectSlugs.includes(repoToSlug(repo.name))
    );
  } catch {
    return (
      <section
        id="projeler"
        className="scroll-mt-24 bg-white/40 py-20 md:py-28 dark:bg-slate-900/40"
      >
        <div className="mx-auto max-w-6xl px-6">
          <SectionHeading title={t.projects.title} />
          <ProjectsFallback t={t} />
        </div>
      </section>
    );
  }

  const featuredRepos = repos.filter((repo) =>
    siteConfig.featuredProjectSlugs.includes(repoToSlug(repo.name))
  );

  const sideRepos = repos.filter(
    (repo) =>
      !siteConfig.featuredProjectSlugs.includes(repoToSlug(repo.name))
  );

  return (
    <section
      id="projeler"
      className="scroll-mt-24 bg-white/40 py-20 md:py-28 dark:bg-slate-900/40"
    >
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          title={t.projects.title}
          subtitle={t.projects.subtitle}
          action={
            <a
              href={siteConfig.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary !text-sm"
            >
              {t.projects.allRepos}
            </a>
          }
        />

        {repos.length === 0 ? (
          <AnimateIn>
            <ProjectsFallback t={t} />
          </AnimateIn>
        ) : (
          <div className="space-y-20">
            {/* Featured Projects */}
            <div>
              <div className="mb-8">
                <h3 className="font-display text-2xl font-bold text-slate-900 dark:text-white">
                  Öne Çıkan Projeler
                </h3>

                <p className="mt-2 text-sm text-ink-muted dark:text-slate-400">
                  Gerçek kullanıcı problemlerini çözmek için geliştirdiğim ana
                  projeler.
                </p>
              </div>

              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {featuredRepos.map((repo, index) => (
                  <ProjectCard
                    key={repo.id}
                    repo={repo}
                    index={index}
                    t={t}
                  />
                ))}
              </div>
            </div>

            {/* Side Projects */}
            <div>
              <div className="mb-8">
                <h3 className="font-display text-2xl font-bold text-slate-900 dark:text-white">
                  Yan Projeler
                </h3>

                <p className="mt-2 text-sm text-ink-muted dark:text-slate-400">
                  Öğrenme, deneysel geliştirme ve küçük ölçekli çalışmalar.
                </p>
              </div>

              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {sideRepos.map((repo, index) => (
                  <ProjectCard
                    key={repo.id}
                    repo={repo}
                    index={index}
                    t={t}
                  />
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}