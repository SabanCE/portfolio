import { getProjectDisplayInfo } from "@/config/project-details";
import { getTranslations } from "@/i18n/translations";
import { siteConfig } from "@/config/site";
import { fetchGitHubRepos, type GitHubRepo } from "@/lib/github";
import { getServerLocale } from "@/lib/get-server-locale";
import { repoToSlug } from "@/lib/project-slug";
import type { TranslationKey } from "@/i18n/translations";
import { AnimateIn } from "./AnimateIn";
import { SectionHeading } from "./SectionHeading";
import { ProjectCard } from "./ProjectCard";


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
                  {t.projects.featuredTitle}
                </h3>

                <p className="mt-2 text-sm text-ink-muted dark:text-slate-400">
                  {t.projects.featuredDescription}
                </p>
              </div>

              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {featuredRepos.map((repo, index) => {
                  const slug = repoToSlug(repo.name);
                  const info = getProjectDisplayInfo(
                    slug,
                    repo,
                    t.projects.noDescription,
                    locale
                  );

                  return (
                    <ProjectCard
                      key={repo.id}
                      repo={repo}
                      index={index}
                      t={t}
                      info={info}
                    />
                  );
                })}
              </div>
            </div>

            {/* Side Projects */}
            <div>
              <div className="mb-8">
                <h3 className="font-display text-2xl font-bold text-slate-900 dark:text-white">
                  {t.projects.sideTitle}
                </h3>

                <p className="mt-2 text-sm text-ink-muted dark:text-slate-400">
                  {t.projects.sideDescription}
                </p>
              </div>

              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {sideRepos.map((repo, index) => {
                  const slug = repoToSlug(repo.name);
                  const info = getProjectDisplayInfo(
                    slug,
                    repo,
                    t.projects.noDescription,
                    locale
                  );

                  return (
                    <ProjectCard
                      key={repo.id}
                      repo={repo}
                      index={index}
                      t={t}
                      info={info}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}