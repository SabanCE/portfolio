"use client";

import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { useLocale } from "@/components/providers/LocaleProvider";
import { ThemeToggle } from "@/components/ThemeToggle";
import { siteConfig } from "@/config/site";
import { useEffect, useState } from "react";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { t } = useLocale();

  const navItems = [
    { label: t.nav.about, href: "/#hakkimda" },
    { label: t.nav.projects, href: "/#projeler" },
    { label: t.nav.blog, href: "/blog" },
    { label: t.nav.gallery, href: "/#galeri" },
    { label: t.nav.contact, href: "/#iletisim" },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "border-b border-slate-200/80 bg-white/70 shadow-soft backdrop-blur-xl dark:border-slate-800/80 dark:bg-slate-950/70"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-3 px-6">
        <a
          href="/"
          className="shrink-0 font-display text-lg font-bold tracking-tight text-ink transition-transform duration-300 hover:scale-105 dark:text-slate-100"
        >
          {siteConfig.name.split(" ")[0]}
          <span className="bg-gradient-to-r from-sky-500 to-violet-500 bg-clip-text text-transparent">
            .
          </span>
        </a>
        <nav className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-lg px-3 py-2 text-sm font-medium text-ink-muted transition-all duration-300 hover:bg-sky-50 hover:text-sky-600 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-sky-400"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <button
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white text-ink-muted transition hover:border-sky-200 hover:text-sky-600 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300 md:hidden"
          aria-label="Toggle navigation"
        >
          <span className="text-lg">{menuOpen ? "✕" : "☰"}</span>
        </button>
        <div className="flex items-center gap-2">
          <LanguageSwitcher />
          <ThemeToggle />
          <a
            href={siteConfig.social.github}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary hidden !px-4 !py-2 text-xs sm:inline-flex"
          >
            GitHub
          </a>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden">
          <div className="border-t border-slate-200/80 bg-white/95 px-6 py-4 backdrop-blur-xl dark:border-slate-800/80 dark:bg-slate-950/95">
            <div className="flex flex-col gap-3">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="rounded-2xl px-4 py-3 text-base font-medium text-ink-muted transition-all duration-300 hover:bg-sky-50 hover:text-sky-600 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-sky-400"
                >
                  {item.label}
                </a>
              ))}
              <a
                href={siteConfig.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-2xl px-4 py-3 text-base font-medium text-ink-muted transition-all duration-300 hover:bg-sky-50 hover:text-sky-600 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-sky-400"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
