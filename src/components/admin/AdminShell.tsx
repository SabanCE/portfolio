"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

const adminNav = [
  { href: "/admin", label: "Panel", exact: true },
  { href: "/admin/blog", label: "Blog" },
  { href: "/admin/galeri", label: "Galeri" },
];

export function AdminShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();

  async function handleLogout() {
    await fetch("/api/auth/logout", { method: "POST" });
    router.push("/giris");
    router.refresh();
  }

  return (
    <div className="min-h-screen bg-surface">
      <header className="border-b border-slate-200/80 bg-white/80 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
          <div className="flex items-center gap-6">
            <Link
              href="/admin"
              className="font-display text-lg font-bold text-ink"
            >
              Admin<span className="text-sky-500">.</span>
            </Link>
            <nav className="hidden gap-1 sm:flex">
              {adminNav.map((item) => {
                const active = item.exact
                  ? pathname === item.href
                  : pathname.startsWith(item.href);
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`rounded-lg px-3 py-2 text-sm font-medium transition ${
                      active
                        ? "bg-sky-50 text-sky-700"
                        : "text-ink-muted hover:bg-slate-50 hover:text-ink"
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>
          </div>
          <div className="flex items-center gap-3">
            <Link
              href="/"
              target="_blank"
              className="text-sm text-ink-muted hover:text-sky-600"
            >
              Siteyi gör
            </Link>
            <button
              type="button"
              onClick={handleLogout}
              className="btn-secondary !px-3 !py-1.5 text-xs"
            >
              Çıkış
            </button>
          </div>
        </div>
      </header>
      <div className="mx-auto max-w-6xl px-6 py-10">{children}</div>
    </div>
  );
}
