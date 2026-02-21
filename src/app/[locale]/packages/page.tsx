import { Link } from "@/i18n/navigation";
import FadeUp from "@/components/FadeUp";
import { getLocalizedCombinations } from "@/data/modules-i18n";
import { getTranslations, getLocale } from "next-intl/server";

const badgeStyles: Record<string, string> = {
  red: "bg-red text-cream",
  sage: "bg-sage text-cream",
  gold: "bg-gold text-ink",
};

export default async function PackagesPage() {
  const t = await getTranslations('packages');
  const tc = await getTranslations('common');
  const locale = await getLocale();
  const combinations = getLocalizedCombinations(locale);

  return (
    <main className="pt-20 overflow-x-hidden">
      {/* ── PAGE HEADER ── */}
      <section className="bg-ink py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="inline-block w-8 h-px bg-gold" />
            <span className="text-gold text-xs tracking-[0.25em] uppercase font-sans">
              {t('header.label')}
            </span>
            <span className="inline-block w-8 h-px bg-gold" />
          </div>
          <h1 className="font-serif text-5xl md:text-6xl text-cream leading-tight tracking-tight">
            {t('header.title')} <em className="italic text-gold">{t('header.titleHighlight')}</em>
          </h1>
          <p className="font-sans text-warm-gray text-base mt-4 max-w-lg mx-auto">
            {t('header.description')}
          </p>
        </div>
      </section>

      {/* ── PACKAGES GRID ── */}
      <section className="bg-cream py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {combinations.map((combo, i) => (
              <FadeUp key={combo.title} delay={i * 80}>
                <div className="group bg-white border border-ink/8 p-8 flex flex-col gap-5 hover:border-gold/40 hover:shadow-xl transition-all duration-300 h-full">
                  <div>
                    <span
                      className={`inline-block px-3 py-1 text-xs font-sans font-medium tracking-[0.12em] uppercase ${
                        badgeStyles[combo.badgeColor] ?? "bg-gold/20 text-ink"
                      }`}
                    >
                      {combo.badge}
                    </span>
                  </div>

                  <h3 className="font-serif text-2xl text-ink tracking-tight leading-tight">
                    {combo.title}
                  </h3>

                  <p className="font-sans text-warm-gray text-sm leading-relaxed">
                    {combo.regions}
                  </p>

                  <div className="flex items-center gap-2">
                    <span className="inline-block w-4 h-px bg-gold" />
                    <span className="font-sans text-xs text-gold tracking-[0.15em] uppercase">
                      {combo.duration}
                    </span>
                  </div>

                  <p className="font-sans text-warm-gray text-sm leading-relaxed flex-1">
                    {combo.description}
                  </p>

                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 text-ink font-sans text-xs font-medium tracking-[0.12em] uppercase border-b border-gold/40 pb-1 hover:border-gold hover:text-gold transition-all duration-300 self-start mt-auto"
                  >
                    {tc('shared.enquireNow')}
                  </Link>
                </div>
              </FadeUp>
            ))}
          </div>

          {/* Custom package CTA */}
          <FadeUp delay={200}>
            <div className="mt-16 text-center bg-ink p-12 md:p-16">
              <h3 className="font-serif text-3xl md:text-4xl text-cream mb-4">
                {t('custom.title')} <em className="italic text-gold">{t('custom.titleHighlight')}</em>
              </h3>
              <p className="font-sans text-warm-gray text-base max-w-md mx-auto mb-8">
                {t('custom.description')}
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-gold text-ink px-8 py-4 text-sm font-sans font-medium tracking-[0.12em] uppercase hover:bg-gold-light transition-colors duration-300"
              >
                {t('custom.cta')}
              </Link>
            </div>
          </FadeUp>
        </div>
      </section>
    </main>
  );
}
