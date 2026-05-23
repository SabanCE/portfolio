/** GitHub repo adından detay sayfası URL slug'ı üretir. */
export function repoToSlug(repoName: string): string {
  return repoName
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export function projectDetailPath(repoName: string): string {
  return `/projeler/${repoToSlug(repoName)}`;
}
