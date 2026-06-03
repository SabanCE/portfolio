export type GitHubRepo = {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  stargazers_count: number;
  language: string | null;
  topics: string[];
  fork: boolean;
  updated_at: string;
};

export async function fetchGitHubRepos(
  username: string
): Promise<GitHubRepo[]> {
  const res = await fetch(
    `https://api.github.com/users/${username}/repos?sort=updated&per_page=100`,
    {
      next: { revalidate: 3600 },
      headers: { Accept: "application/vnd.github+json" },
    }
  );

  if (!res.ok) {
    throw new Error(`GitHub API hatası: ${res.status}`);
  }

  const data = (await res.json()) as GitHubRepo[];

  return data
    .filter((repo) => !repo.fork)
    .sort(
      (a, b) =>
        new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime()
    );
}
