"use client";

import { Link, usePathname } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import { useState } from "react";
import LanguageSwitcher from "@/components/LanguageSwitcher";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const t = useTranslations('common');

  const navLinks = [
    { href: "/", label: t('nav.home') },
    { href: "/about", label: t('nav.about') },
    { href: "/modules", label: t('nav.tourModules') },
    { href: "/packages", label: t('nav.packages') },
    { href: "/contact", label: t('nav.contact') },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 py-5 bg-cream/92 backdrop-blur-md border-b border-gold/20">
      <Link href="/" className="flex flex-col leading-none">
        <span className="font-serif text-xl md:text-[22px] font-bold text-ink tracking-[0.02em]">
          Chueok Korea
        </span>
        <span className="font-korean text-[11px] font-light text-gold tracking-[0.15em]">
          추억 코리아
        </span>
      </Link>

      <ul className="hidden lg:flex gap-9 list-none">
        {navLinks.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className={`text-sm font-normal tracking-[0.05em] transition-colors ${
                pathname === link.href
                  ? "text-gold font-medium"
                  : "text-warm-gray hover:text-gold"
              }`}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>

      <div className="flex gap-4 items-center">
        <div className="hidden lg:block">
          <LanguageSwitcher />
        </div>
        <Link
          href="/contact"
          className="hidden md:block bg-ink text-cream px-6 py-2.5 text-[13px] font-medium tracking-[0.08em] hover:bg-gold transition-colors"
        >
          {t('nav.bookNow')}
        </Link>

        <button
          className="lg:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-[2px] bg-ink transition-transform ${mobileOpen ? "rotate-45 translate-y-[7px]" : ""}`} />
          <span className={`block w-6 h-[2px] bg-ink transition-opacity ${mobileOpen ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-[2px] bg-ink transition-transform ${mobileOpen ? "-rotate-45 -translate-y-[7px]" : ""}`} />
        </button>
      </div>

      {mobileOpen && (
        <div className="absolute top-full left-0 right-0 bg-cream/98 backdrop-blur-md border-b border-gold/20 lg:hidden">
          <ul className="flex flex-col p-6 gap-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`text-base font-medium tracking-[0.05em] transition-colors ${
                    pathname === link.href ? "text-gold" : "text-ink hover:text-gold"
                  }`}
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/contact"
                className="inline-block bg-ink text-cream px-6 py-3 text-sm font-medium tracking-[0.08em] hover:bg-gold transition-colors mt-2"
                onClick={() => setMobileOpen(false)}
              >
                {t('nav.bookNow')}
              </Link>
            </li>
            <li className="pt-2 border-t border-gold/20">
              <LanguageSwitcher />
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
