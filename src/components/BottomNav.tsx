"use client";

import { useLocale } from "@/components/providers/LocaleProvider";
import { siteConfig } from "@/config/site";
import { useEffect, useState } from "react";

const socialLinks = [
  { label: "GitHub", href: siteConfig.social.github },
  { label: "LinkedIn", href: siteConfig.social.linkedin },
  { label: "Instagram", href: siteConfig.social.instagram },
] as const;

export function BottomNav({
  visible = true,
  delayIntro = false,
}: {
  visible?: boolean;
  delayIntro?: boolean;
}) {
  const { t } = useLocale();
  const [menuOpen, setMenuOpen] = useState(false);
  const [showNav, setShowNav] = useState(!delayIntro);

  useEffect(() => {
    if (!delayIntro) return;
    const timer = window.setTimeout(() => setShowNav(true), 2400);
    return () => window.clearTimeout(timer);
  }, [delayIntro]);

  const isVisible = visible && showNav;

  const navItems = [
    { label: t.nav.projects, href: "/#projeler" },
    { label: t.nav.about, href: "/#hakkimda" },
    { label: t.nav.gallery, href: "/#galeri" },
    { label: t.nav.blog, href: "/blog" },
    { label: t.nav.contact, href: "/#iletisim" },
  ];

  return (
    <footer
      className={`fixed inset-x-0 bottom-0 z-50 border-t border-white/15 bg-black/80 backdrop-blur-md transition-all duration-700 ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"
      }`}
    >
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between gap-4 px-4 md:h-16 md:px-6">
        <span className="hidden shrink-0 font-mono text-[10px] uppercase tracking-[0.25em] text-white/50 sm:inline">
          → v2.0
        </span>

        <nav className="hidden flex-1 items-center justify-center gap-4 md:flex lg:gap-8">
          {socialLinks.map((link, i) => (
            <span key={link.label} className="flex items-center gap-4 lg:gap-8">
              {i > 0 && (
                <span className="text-white/20" aria-hidden>
                  /
                </span>
              )}
              <a
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/70 transition-colors hover:text-white lg:text-xs"
              >
                {link.label}
              </a>
            </span>
          ))}
        </nav>

        <nav className="hidden items-center gap-4 md:flex lg:gap-8">
          {navItems.map((item, i) => (
            <span key={item.href} className="flex items-center gap-4 lg:gap-8">
              {i > 0 && (
                <span className="text-white/20" aria-hidden>
                  /
                </span>
              )}
              <a
                href={item.href}
                className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/70 transition-colors hover:text-white lg:text-xs"
              >
                {item.label}
              </a>
            </span>
          ))}
        </nav>

        <button
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          className="ml-auto font-mono text-[10px] uppercase tracking-[0.2em] text-white/70 md:hidden"
          aria-label="Menü"
        >
          {menuOpen ? "Kapat" : "Menü"}
        </button>
      </div>

      {menuOpen && (
        <div className="border-t border-white/10 px-4 py-4 md:hidden">
          <div className="flex flex-col gap-3">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="font-mono text-xs uppercase tracking-[0.2em] text-white/70"
              >
                {item.label}
              </a>
            ))}
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-xs uppercase tracking-[0.2em] text-white/70"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </footer>
  );
}
