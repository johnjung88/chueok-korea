"use client";

import { useLocale } from "next-intl";
import { useRouter, usePathname } from "@/i18n/navigation";
import { useState, useRef, useEffect } from "react";

const localeLabels: Record<string, string> = {
  en: "EN",
  ko: "한국어",
  si: "සිංහල",
};

export default function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  function switchLocale(newLocale: string) {
    setOpen(false);
    router.replace(pathname, { locale: newLocale as "en" | "ko" | "si" });
  }

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-1.5 text-sm font-sans tracking-[0.05em] text-warm-gray hover:text-gold transition-colors px-2 py-1.5 border border-gold/20 hover:border-gold/40"
        aria-label="Switch language"
      >
        <svg className="w-3.5 h-3.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
        </svg>
        <span className="text-xs tracking-widest uppercase">Language</span>
        <span className="text-gold font-medium">{localeLabels[locale]}</span>
        <svg
          className={`w-3 h-3 transition-transform ${open ? "rotate-180" : ""}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {open && (
        <div className="absolute top-full right-0 mt-0 bg-cream border border-gold/20 shadow-lg z-50 min-w-[120px]">
          {Object.entries(localeLabels).map(([loc, label]) => (
            <button
              key={loc}
              onClick={() => switchLocale(loc)}
              className={`block w-full text-left px-4 py-2.5 text-sm font-sans transition-colors ${
                loc === locale
                  ? "text-gold bg-gold/5 font-medium"
                  : "text-ink hover:text-gold hover:bg-gold/5"
              }`}
            >
              {label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
