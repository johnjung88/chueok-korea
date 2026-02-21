import { Link } from "@/i18n/navigation";
import FadeUp from "@/components/FadeUp";
import { getLocalizedModules } from "@/data/modules-i18n";
import { getTranslations, getLocale } from "next-intl/server";

const heroImages = [
  "/images/common/hero-1.png",
  "/images/common/hero-2.png",
  "/images/common/hero-3.png",
  "/images/common/hero-4.png",
];

export default async function HomePage() {
  const t = await getTranslations('home');
  const tc = await getTranslations('common');
  const locale = await getLocale();
  const modules = getLocalizedModules(locale);

  const quickLinks = [
    { href: "/about", title: t('quickLinks.aboutTitle'), desc: t('quickLinks.aboutDesc'), icon: t('quickLinks.aboutIcon') },
    { href: "/modules", title: t('quickLinks.modulesTitle'), desc: t('quickLinks.modulesDesc'), icon: t('quickLinks.modulesIcon') },
    { href: "/packages", title: t('quickLinks.packagesTitle'), desc: t('quickLinks.packagesDesc'), icon: t('quickLinks.packagesIcon') },
    { href: "/contact", title: t('quickLinks.contactTitle'), desc: t('quickLinks.contactDesc'), icon: t('quickLinks.contactIcon') },
  ];

  return (
    <main className="overflow-x-hidden">
      {/* ── HERO ── */}
      <section className="relative min-h-screen bg-ink flex items-center">
        <div
          className="absolute inset-0 opacity-5 pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 50%, #c9a84c 0%, transparent 50%), radial-gradient(circle at 80% 20%, #c9a84c 0%, transparent 40%)",
          }}
        />

        <div className="relative w-full max-w-7xl mx-auto px-6 md:px-10 lg:px-16 py-28 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="flex flex-col gap-6 lg:gap-8">
            <div className="flex items-center gap-3">
              <span className="inline-block w-8 h-px bg-gold" />
              <span className="text-gold text-xs tracking-[0.25em] uppercase font-sans font-medium">
                {t('hero.badge')}
              </span>
            </div>

            <h1 className="font-serif text-5xl md:text-6xl xl:text-7xl text-cream leading-[1.05] tracking-tight">
              {t('hero.titleLine1')}
              <br />
              <em className="text-gold not-italic font-serif italic">{t('hero.titleLine2')}</em>
              <br />
              {t('hero.titleLine3')}
            </h1>

            <p className="font-korean text-gold-light text-lg md:text-xl tracking-widest">
              {t('hero.subtitleKr')}
            </p>

            <p className="font-sans text-warm-gray text-base md:text-lg leading-relaxed max-w-md">
              {t('hero.description')}
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
              <Link
                href="/modules"
                className="inline-flex items-center gap-2 bg-gold text-ink px-7 py-3.5 text-sm font-sans font-medium tracking-[0.12em] uppercase hover:bg-gold-light transition-colors duration-300"
              >
                {t('hero.exploreModules')}
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 border border-gold/40 text-gold px-7 py-3.5 text-sm font-sans font-medium tracking-[0.12em] uppercase hover:border-gold hover:bg-gold/10 transition-all duration-300"
              >
                {t('hero.contactUs')}
              </Link>
            </div>

            <div className="flex flex-wrap gap-8 pt-4 border-t border-white/10">
              {[
                [t('hero.stat1Value'), t('hero.stat1Label')],
                [t('hero.stat2Value'), t('hero.stat2Label')],
                [t('hero.stat3Value'), t('hero.stat3Label')],
              ].map(([val, label]) => (
                <div key={label}>
                  <div className="font-serif text-3xl text-gold font-bold">{val}</div>
                  <div className="font-sans text-warm-gray text-xs tracking-[0.15em] uppercase mt-1">
                    {label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="grid grid-cols-2 gap-3 md:gap-4">
              {heroImages.map((src, i) => (
                <div
                  key={i}
                  className="relative overflow-hidden"
                  style={{ aspectRatio: i === 0 || i === 3 ? "3/4" : "4/3" }}
                >
                  <img
                    src={src}
                    alt={`Korea travel scene ${i + 1}`}
                    className="w-full h-full object-cover animate-kenburns"
                    style={{ animationDelay: `${i * 2}s` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-transparent" />
                </div>
              ))}
            </div>
            <div className="absolute -bottom-4 -left-4 md:-bottom-6 md:-left-6 bg-gold text-ink px-5 py-3 shadow-2xl z-10">
              <div className="font-sans text-xs font-medium tracking-[0.15em] uppercase">
                {t('hero.colomboToSeoul')}
              </div>
              <div className="font-serif text-sm mt-0.5">{t('hero.directPackages')}</div>
            </div>
            <div className="absolute -top-3 -right-3 w-16 h-16 border-t-2 border-r-2 border-gold/40 pointer-events-none" />
          </div>
        </div>
      </section>

      {/* ── MARQUEE ── */}
      <section className="bg-ink border-y border-gold/20 py-4 overflow-hidden">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...modules, ...modules].map((mod, i) => (
            <span
              key={i}
              className="inline-flex items-center gap-2 mx-8 font-sans text-xs tracking-[0.2em] uppercase text-gold/70"
            >
              <span className="text-base">{mod.emoji}</span>
              <span>{mod.name}</span>
              <span className="inline-block w-1.5 h-1.5 bg-gold/30 rounded-full mx-2" />
            </span>
          ))}
        </div>
      </section>

      {/* ── QUICK LINKS ── */}
      <section className="bg-cream py-24 md:py-32">
        <div className="max-w-6xl mx-auto px-6 md:px-10 lg:px-16">
          <FadeUp>
            <div className="text-center mb-16">
              <div className="flex items-center justify-center gap-3 mb-4">
                <span className="inline-block w-8 h-px bg-gold" />
                <span className="text-gold text-xs tracking-[0.25em] uppercase font-sans">
                  {t('quickLinks.sectionLabel')}
                </span>
                <span className="inline-block w-8 h-px bg-gold" />
              </div>
              <h2 className="font-serif text-4xl md:text-5xl text-ink leading-tight tracking-tight">
                {t('quickLinks.title')} <em className="italic text-gold">{t('quickLinks.titleHighlight')}</em>
              </h2>
              <p className="font-sans text-warm-gray text-base mt-4 max-w-lg mx-auto">
                {t('quickLinks.description')}
              </p>
            </div>
          </FadeUp>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {quickLinks.map((item, i) => (
              <FadeUp key={item.href} delay={i * 80}>
                <Link
                  href={item.href}
                  className="group block bg-white border border-ink/8 p-8 hover:border-gold/40 hover:shadow-xl transition-all duration-300 h-full"
                >
                  <span className="text-3xl mb-4 block">{item.icon}</span>
                  <h3 className="font-serif text-xl text-ink mb-2 group-hover:text-gold transition-colors">
                    {item.title}
                  </h3>
                  <p className="font-sans text-warm-gray text-sm leading-relaxed">
                    {item.desc}
                  </p>
                  <span className="inline-block mt-4 text-gold text-sm tracking-wide group-hover:translate-x-1 transition-transform">
                    {tc('shared.explore')} →
                  </span>
                </Link>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ── FEATURED MODULES PREVIEW ── */}
      <section className="bg-ink py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16">
          <FadeUp>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <span className="inline-block w-8 h-px bg-gold" />
                  <span className="text-gold text-xs tracking-[0.25em] uppercase font-sans">
                    {t('featured.sectionLabel')}
                  </span>
                </div>
                <h2 className="font-serif text-4xl md:text-5xl text-cream leading-tight tracking-tight">
                  {t('featured.title')} <em className="italic text-gold">{t('featured.titleHighlight')}</em>
                </h2>
              </div>
              <Link
                href="/modules"
                className="inline-flex items-center gap-2 border border-gold/40 text-gold px-5 py-2.5 text-xs font-sans font-medium tracking-[0.12em] uppercase hover:bg-gold hover:text-ink transition-all duration-300 self-start md:self-auto"
              >
                {t('featured.viewAll')}
              </Link>
            </div>
          </FadeUp>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {modules.slice(0, 3).map((mod, i) => (
              <FadeUp key={mod.slug} delay={i * 80}>
                <Link href={`/modules/${mod.slug}`} className="group block">
                  <div className="relative overflow-hidden" style={{ aspectRatio: "3/4" }}>
                    <img
                      src={mod.cardImage}
                      alt={mod.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-transparent" />
                    <div className="absolute top-5 left-5 flex items-center gap-2">
                      <span className="text-xl">{mod.emoji}</span>
                      <span className="font-sans text-xs text-gold/80 tracking-[0.2em] uppercase border border-gold/30 px-2 py-0.5 bg-ink/40 backdrop-blur-sm">
                        {mod.moduleCode}
                      </span>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <h3 className="font-serif text-2xl text-cream tracking-tight mb-0.5">
                        {mod.name}
                      </h3>
                      <p className="font-korean text-gold-light text-xs mb-3">
                        {mod.nameKr}
                      </p>
                      <div className="flex items-center gap-2">
                        <span className="inline-block w-4 h-px bg-gold/60" />
                        <span className="font-sans text-xs text-warm-gray tracking-[0.12em]">
                          {mod.duration}
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
