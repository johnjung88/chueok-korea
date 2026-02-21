"use client";

import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";

export default function Footer() {
  const t = useTranslations('common');

  return (
    <footer className="bg-ink text-cream/40 px-6 md:px-12 lg:px-20 py-12 border-t border-gold/10">
      <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-8">
        <div className="text-center md:text-left">
          <div className="font-serif text-xl text-cream">{t('footer.brand')}</div>
          <span className="font-korean text-[11px] text-gold font-light tracking-[0.15em]">
            {t('footer.brandKr')} · {t('footer.brandSi')}
          </span>
        </div>

        <div className="text-xs">{t('footer.copyright')}</div>

        <div className="flex gap-6">
          {[
            { href: "/about", label: t('footer.about') },
            { href: "/modules", label: t('footer.modules') },
            { href: "/packages", label: t('footer.packages') },
            { href: "/contact", label: t('footer.contact') },
          ].map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-cream/40 text-xs tracking-[0.05em] hover:text-gold transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>

      <div className="border-t border-gold/10 pt-6 text-center">
        <p className="font-sans text-[11px] text-cream/25 tracking-wide leading-relaxed">
          AIO &nbsp;|&nbsp; 경기도 김포시 대곶면 흥신로 67 &nbsp;|&nbsp; (우) 10037
        </p>
      </div>
    </footer>
  );
}
