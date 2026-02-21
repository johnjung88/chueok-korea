import { Link } from "@/i18n/navigation";
import FadeUp from "@/components/FadeUp";
import { getLocalizedModules } from "@/data/modules-i18n";
import { getTranslations, getLocale } from "next-intl/server";

export default async function ModulesListPage() {
  const t = await getTranslations('modules');
  const tc = await getTranslations('common');
  const locale = await getLocale();
  const modules = getLocalizedModules(locale);
  const regularModules = modules.filter((m) => m.slug !== "jeju");
  const jejuModule = modules.find((m) => m.slug === "jeju");

  return (
    <main className="pt-20 overflow-x-hidden">
      {/* ── PAGE HEADER ── */}
      <section className="bg-ink py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="inline-block w-8 h-px bg-gold" />
            <span className="text-gold text-xs tracking-[0.25em] uppercase font-sans">
              {t('list.label')}
            </span>
            <span className="inline-block w-8 h-px bg-gold" />
          </div>
          <h1 className="font-serif text-5xl md:text-6xl text-cream leading-tight tracking-tight">
            {t('list.title')} <em className="italic text-gold">{t('list.titleHighlight')}</em>
          </h1>
          <p className="font-sans text-warm-gray text-base mt-4 max-w-lg mx-auto">
            {t('list.description')}
          </p>
        </div>
      </section>

      {/* ── MODULE GRID ── */}
      <section className="bg-ink py-8 pb-24 md:pb-32">
        <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-5">
            {regularModules.map((mod, i) => (
              <FadeUp key={mod.slug} delay={i * 80}>
                <Link href={`/modules/${mod.slug}`} className="group block h-full">
                  <div className="relative overflow-hidden w-full" style={{ aspectRatio: "3/4" }}>
                    <img
                      src={mod.cardImage}
                      alt={mod.name}
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-transparent" />

                    <div className="absolute top-5 left-5 flex items-center gap-2">
                      <span className="text-xl">{mod.emoji}</span>
                      <span className="font-sans text-xs text-gold/80 tracking-[0.2em] uppercase border border-gold/30 px-2 py-0.5 bg-ink/40 backdrop-blur-sm">
                        {mod.moduleCode}
                      </span>
                    </div>

                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <div className="flex flex-wrap gap-1.5 mb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        {mod.tags.slice(0, 3).map((tag) => (
                          <span
                            key={tag}
                            className="font-sans text-[10px] text-cream/70 tracking-[0.12em] uppercase bg-white/10 px-2 py-0.5"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <h3 className="font-serif text-2xl text-cream tracking-tight mb-0.5">
                        {mod.name}
                      </h3>
                      <p className="font-korean text-gold-light text-xs mb-3">
                        {mod.nameKr}
                      </p>
                      <div className="flex items-center gap-2 mb-4">
                        <span className="inline-block w-4 h-px bg-gold/60" />
                        <span className="font-sans text-xs text-warm-gray tracking-[0.12em]">
                          {mod.duration}
                        </span>
                      </div>

                      <div className="overflow-hidden max-h-0 group-hover:max-h-24 transition-all duration-500 ease-out">
                        <div className="border-t border-gold/30 pt-4 flex justify-end">
                          <span className="font-sans text-xs text-gold tracking-wide">
                            {tc('shared.viewDetails')}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </FadeUp>
            ))}
          </div>

          {/* Jeju — full width */}
          {jejuModule && (
            <FadeUp>
              <Link href={`/modules/${jejuModule.slug}`} className="group block">
                <div className="relative overflow-hidden w-full" style={{ aspectRatio: "21/9" }}>
                  <img
                    src={jejuModule.cardImage}
                    alt={jejuModule.name}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-ink/90 via-ink/50 to-transparent" />

                  <div className="absolute inset-0 flex items-center p-10 md:p-16">
                    <div className="max-w-lg">
                      <div className="flex items-center gap-3 mb-5">
                        <span className="text-2xl">{jejuModule.emoji}</span>
                        <span className="font-sans text-xs text-gold/80 tracking-[0.2em] uppercase border border-gold/30 px-2 py-0.5 bg-ink/40 backdrop-blur-sm">
                          {jejuModule.moduleCode}
                        </span>
                        <span className="font-sans text-xs text-cream/50 tracking-[0.15em] uppercase">
                          {tc('shared.featured')}
                        </span>
                      </div>
                      <h3 className="font-serif text-4xl md:text-5xl text-cream tracking-tight mb-1">
                        {jejuModule.name}
                      </h3>
                      <p className="font-korean text-gold text-base mb-4">
                        {jejuModule.nameKr}
                      </p>
                      <div className="flex items-center gap-2 mb-6">
                        <span className="inline-block w-6 h-px bg-gold" />
                        <span className="font-sans text-xs text-warm-gray tracking-[0.15em]">
                          {jejuModule.duration}
                        </span>
                      </div>
                      <div className="flex flex-wrap gap-2 mb-8">
                        {jejuModule.tags.map((tag) => (
                          <span
                            key={tag}
                            className="font-sans text-xs text-cream/70 tracking-[0.1em] bg-white/10 px-3 py-1"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <span className="inline-flex items-center gap-2 border border-gold text-gold px-5 py-2.5 text-xs font-sans font-medium tracking-[0.15em] uppercase group-hover:bg-gold group-hover:text-ink transition-all duration-300">
                        {t('list.exploreJeju')}
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </FadeUp>
          )}
        </div>
      </section>
    </main>
  );
}
