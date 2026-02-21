import { notFound } from "next/navigation";
import { Link } from "@/i18n/navigation";
import FadeUp from "@/components/FadeUp";
import { getLocalizedModules, getLocalizedModule, getTimeColor, getTransportIcon, modulesBase } from "@/data/modules-i18n";
import { routing } from "@/i18n/routing";
import { getTranslations } from "next-intl/server";

export async function generateStaticParams() {
  const params: { locale: string; slug: string }[] = [];
  for (const locale of routing.locales) {
    for (const mod of modulesBase) {
      params.push({ locale, slug: mod.slug });
    }
  }
  return params;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  const mod = getLocalizedModule(slug, locale);
  if (!mod) return {};
  return {
    title: `${mod.name} (${mod.nameKr}) | Chueok Korea`,
    description: `Explore the ${mod.name} module — ${mod.duration} across ${mod.cities}. Part of the Chueok Korea curated tour experience.`,
  };
}

export default async function ModuleDetailPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  const t = await getTranslations('modules');
  const tc = await getTranslations('common');
  const mod = getLocalizedModule(slug, locale);

  if (!mod) {
    notFound();
  }

  const allModules = getLocalizedModules(locale);
  const otherModules = allModules.filter((m) => m.slug !== mod.slug);

  return (
    <main className="bg-[#faf6ef] min-h-screen">
      {/* ─── 1. HERO BANNER ─── */}
      <section className="relative min-h-[92vh] flex items-end overflow-hidden">
        <img
          src={mod.heroImage}
          alt={mod.name}
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1a1208] via-[#1a1208]/70 to-[#1a1208]/20" />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 pt-32">
          <div className="flex flex-col items-center text-center">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-5xl">{mod.emoji}</span>
            </div>
            <span className="inline-block font-sans text-xs font-medium tracking-[0.25em] uppercase text-[#c9a84c] border border-[#c9a84c]/40 px-4 py-1.5 rounded-full mb-5">
              {mod.moduleCode}
            </span>

            <h1 className="font-serif text-5xl sm:text-7xl lg:text-8xl font-bold text-white leading-tight mb-2">
              {mod.name}
            </h1>

            <p className="font-korean text-2xl sm:text-3xl text-[#e8d5a3] mb-6 font-light">
              {mod.nameKr}
            </p>

            <p className="font-sans text-sm sm:text-base text-white/70 mb-8 max-w-xl">
              {mod.duration} &nbsp;·&nbsp; {mod.cities}
            </p>

            <div className="flex flex-wrap items-center justify-center gap-3">
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 text-white px-5 py-2.5 rounded-full font-sans text-sm flex items-center gap-2">
                <span>{getTransportIcon(mod.transport.transportType)}</span>
                <span>
                  {mod.transport.from} → {mod.name}
                </span>
                <span className="text-white/50 mx-1">·</span>
                <span>{mod.transport.duration}</span>
              </div>

              <div className="bg-white/10 backdrop-blur-sm border border-white/20 text-white px-5 py-2.5 rounded-full font-sans text-sm flex items-center gap-2">
                <span>🏨</span>
                <span>{mod.accommodation}</span>
              </div>
            </div>

            <div className="flex flex-wrap justify-center gap-2 mt-6">
              {mod.tags.map((tag) => (
                <span
                  key={tag}
                  className="font-sans text-xs text-white/60 bg-white/5 border border-white/10 px-3 py-1 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-white/40">
          <span className="font-sans text-xs tracking-widest uppercase">{tc('shared.scroll')}</span>
          <span className="text-lg animate-bounce">↓</span>
        </div>
      </section>

      {/* ─── 2. DAY-BY-DAY ITINERARY ─── */}
      <section className="py-20 lg:py-28 bg-[#1a1208]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <div className="text-center mb-16">
              <p className="font-sans text-xs font-medium tracking-[0.3em] uppercase text-[#c9a84c] mb-3">
                {t('detail.dayByDay')}
              </p>
              <h2 className="font-serif text-4xl sm:text-5xl text-white mb-4">
                {t('detail.yourItinerary')}
              </h2>
              <p className="font-korean text-[#8c7b6b] text-base">{t('detail.itinerarySub')}</p>
            </div>
          </FadeUp>

          <div className="space-y-24">
            {mod.itinerary.map((day, dayIdx) => (
              <FadeUp key={day.day} delay={dayIdx * 80}>
                <div>
                  <div className="relative rounded-2xl overflow-hidden mb-10 h-64 sm:h-80 lg:h-96 group">
                    <img
                      src={day.image}
                      alt={day.theme}
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-[#1a1208]/90 via-[#1a1208]/60 to-transparent" />
                    <div className="absolute inset-0 flex items-center px-8 sm:px-12">
                      <div>
                        <span className="inline-block font-sans text-xs font-bold tracking-[0.3em] uppercase text-[#c9a84c] mb-2">
                          {t('detail.day', { number: day.day })}
                        </span>
                        <h3 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-white font-bold">
                          {day.theme}
                        </h3>
                      </div>
                    </div>
                  </div>

                  <div className="relative pl-8 sm:pl-12">
                    <div className="absolute left-3 sm:left-5 top-0 bottom-0 w-px bg-gradient-to-b from-[#c9a84c] via-[#c9a84c]/30 to-transparent" />

                    <div className="space-y-6">
                      {day.schedule.map((item, itemIdx) => (
                        <div key={itemIdx} className="relative group">
                          <div className="absolute -left-8 sm:-left-12 top-6 w-4 h-4 rounded-full border-2 border-[#c9a84c] bg-[#1a1208] group-hover:bg-[#c9a84c] transition-colors duration-300 flex items-center justify-center">
                            <div className="w-1.5 h-1.5 rounded-full bg-[#c9a84c] group-hover:bg-[#1a1208] transition-colors duration-300" />
                          </div>

                          <div className="bg-white/5 border border-white/10 rounded-xl overflow-hidden hover:border-[#c9a84c]/40 transition-all duration-300 hover:bg-white/8">
                            <div className="flex flex-col sm:flex-row">
                              <div className="sm:w-48 lg:w-56 h-48 sm:h-auto flex-shrink-0 overflow-hidden">
                                <img
                                  src={item.image}
                                  alt={item.place}
                                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                              </div>

                              <div className="flex-1 p-5 sm:p-6 flex flex-col justify-center">
                                <span
                                  className={`inline-flex w-fit font-sans text-xs font-bold tracking-widest uppercase px-3 py-1 rounded-full mb-3 ${getTimeColor(item.timeOfDay)}`}
                                >
                                  {item.time}
                                </span>

                                <h4 className="font-serif text-xl sm:text-2xl text-white font-bold mb-2">
                                  {item.place}
                                </h4>
                                <p className="font-sans text-sm text-white/60 leading-relaxed">
                                  {item.description}
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 3. ATTRACTIONS ─── */}
      <section className="py-20 lg:py-28 bg-[#faf6ef]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <div className="text-center mb-14">
              <p className="font-sans text-xs font-medium tracking-[0.3em] uppercase text-[#c9a84c] mb-3">
                {t('detail.attractionsLabel')}
              </p>
              <h2 className="font-serif text-4xl sm:text-5xl text-[#1a1208] mb-4">
                {t('detail.attractionsTitle')}
              </h2>
            </div>
          </FadeUp>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5">
            {mod.attractions.map((attraction, idx) => (
              <FadeUp key={attraction.name} delay={idx * 50}>
                <div className="group relative rounded-xl overflow-hidden bg-white shadow-sm hover:shadow-xl transition-all duration-400 border border-[#e8d5a3]/50 hover:border-[#c9a84c]/50">
                  <div className="relative h-40 sm:h-48 overflow-hidden">
                    <img
                      src={attraction.image}
                      alt={attraction.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-600"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1a1208]/80 via-[#1a1208]/20 to-transparent" />

                    <div className="absolute bottom-0 left-0 right-0 p-3">
                      <h3 className="font-serif text-sm sm:text-base font-bold text-white leading-tight">
                        {attraction.name}
                      </h3>
                    </div>
                  </div>

                  <div className="px-4 py-3 bg-white">
                    <p className="font-sans text-xs text-[#8c7b6b] leading-relaxed">
                      {attraction.feature}
                    </p>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 4. FOOD GUIDE ─── */}
      <section className="py-20 lg:py-28 bg-[#1a1208]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <div className="text-center mb-14">
              <p className="font-sans text-xs font-medium tracking-[0.3em] uppercase text-[#c9a84c] mb-3">
                {t('detail.tasteOfKorea')}
              </p>
              <h2 className="font-serif text-4xl sm:text-5xl text-white mb-4">
                {t('detail.foodGuide')}
              </h2>
              <p className="font-korean text-[#8c7b6b] text-base">{t('detail.foodSub')}</p>
            </div>
          </FadeUp>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {mod.food.map((item, idx) => (
              <FadeUp key={item.name} delay={idx * 80}>
                <div className="group bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-[#c9a84c]/50 hover:bg-white/8 transition-all duration-400">
                  <div className="relative h-44 sm:h-52 overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-600"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1a1208] via-[#1a1208]/10 to-transparent" />
                  </div>

                  <div className="p-4 sm:p-5">
                    <h3 className="font-serif text-base sm:text-lg text-white font-bold mb-1.5 leading-tight">
                      {item.name}
                    </h3>
                    <p className="font-sans text-xs text-[#8c7b6b] flex items-start gap-1.5">
                      <span className="mt-0.5 flex-shrink-0">📍</span>
                      <span>{item.place}</span>
                    </p>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 5. TRANSPORT INFO ─── */}
      <section className="py-16 bg-[#faf6ef]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <div className="text-center mb-10">
              <p className="font-sans text-xs font-medium tracking-[0.3em] uppercase text-[#c9a84c] mb-3">
                {t('detail.gettingThere')}
              </p>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#1a1208] mb-4">
                {t('detail.transportInfo')}
              </h2>
              <p className="font-korean text-[#8c7b6b] text-sm">{t('detail.transportSub')}</p>
            </div>
          </FadeUp>

          <FadeUp delay={100}>
            <div className="bg-white rounded-2xl shadow-sm border border-[#e8d5a3] overflow-hidden">
              <div className="px-6 sm:px-10 py-8 sm:py-10">
                <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-10">
                  <div className="text-center">
                    <div className="w-16 h-16 rounded-full bg-[#faf6ef] border-2 border-[#e8d5a3] flex items-center justify-center mx-auto mb-3">
                      <span className="text-2xl">📍</span>
                    </div>
                    <p className="font-sans text-xs text-[#8c7b6b] uppercase tracking-widest mb-1">{tc('shared.from')}</p>
                    <p className="font-serif text-xl text-[#1a1208] font-bold">
                      {mod.transport.from}
                    </p>
                  </div>

                  <div className="flex flex-col items-center">
                    <div className="flex items-center gap-2 sm:gap-3">
                      <div className="h-px w-12 sm:w-20 bg-gradient-to-r from-[#e8d5a3] to-[#c9a84c]" />
                      <div className="flex flex-col items-center">
                        <span className="text-3xl">{getTransportIcon(mod.transport.transportType)}</span>
                        <span className="font-sans text-sm font-medium text-[#c9a84c] mt-1">
                          {mod.transport.method}
                        </span>
                      </div>
                      <div className="h-px w-12 sm:w-20 bg-gradient-to-l from-[#e8d5a3] to-[#c9a84c]" />
                    </div>
                    <div className="flex items-center gap-4 mt-3">
                      <span className="font-sans text-xs text-[#8c7b6b] flex items-center gap-1.5">
                        <span>⏱</span>
                        {mod.transport.duration}
                      </span>
                    </div>
                  </div>

                  <div className="text-center">
                    <div className="w-16 h-16 rounded-full bg-[#c9a84c]/10 border-2 border-[#c9a84c] flex items-center justify-center mx-auto mb-3">
                      <span className="text-2xl">{mod.emoji}</span>
                    </div>
                    <p className="font-sans text-xs text-[#8c7b6b] uppercase tracking-widest mb-1">{tc('shared.to')}</p>
                    <p className="font-serif text-xl text-[#1a1208] font-bold">
                      {mod.name}
                    </p>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-[#e8d5a3] flex flex-wrap items-center justify-center gap-4 text-center">
                  <div>
                    <p className="font-sans text-xs text-[#8c7b6b] uppercase tracking-widest mb-1">{tc('shared.accommodation')}</p>
                    <p className="font-sans text-sm font-medium text-[#1a1208]">
                      {mod.accommodation}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ─── 6. NOTE / TIPS ─── */}
      <section className="py-12 bg-[#faf6ef]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <div className="relative bg-[#1a1208] rounded-2xl overflow-hidden px-6 sm:px-10 py-8 sm:py-10 border border-[#c9a84c]/30">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#c9a84c]/5 rounded-bl-full pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-20 h-20 bg-[#c9a84c]/5 rounded-tr-full pointer-events-none" />

              <div className="relative flex gap-5 sm:gap-7">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-[#c9a84c]/15 border border-[#c9a84c]/40 flex items-center justify-center">
                    <span className="text-xl">💡</span>
                  </div>
                </div>

                <div>
                  <p className="font-sans text-xs font-medium tracking-[0.25em] uppercase text-[#c9a84c] mb-3">
                    {t('detail.travelTipsNotes')}
                  </p>
                  <p className="font-korean text-white/90 text-base sm:text-lg leading-relaxed">
                    {mod.note}
                  </p>
                </div>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ─── 7. OTHER MODULES ─── */}
      <section className="py-20 lg:py-28 bg-[#1a1208]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <div className="text-center mb-14">
              <p className="font-sans text-xs font-medium tracking-[0.3em] uppercase text-[#c9a84c] mb-3">
                {t('detail.keepExploring')}
              </p>
              <h2 className="font-serif text-4xl sm:text-5xl text-white mb-4">
                {t('detail.exploreMoreRegions')}
              </h2>
              <p className="font-korean text-[#8c7b6b] text-base">{t('detail.exploreMoreSub')}</p>
            </div>
          </FadeUp>

          <div className="flex gap-5 overflow-x-auto pb-4 sm:pb-0 sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 snap-x snap-mandatory sm:snap-none scrollbar-hide">
            {otherModules.map((other, idx) => (
              <FadeUp key={other.slug} delay={idx * 60} className="snap-start flex-shrink-0 w-64 sm:w-auto">
                <Link href={`/modules/${other.slug}`} className="group block">
                  <div className="relative rounded-2xl overflow-hidden bg-white/5 border border-white/10 hover:border-[#c9a84c]/50 transition-all duration-400 hover:-translate-y-1 hover:shadow-2xl">
                    <div className="relative h-44 overflow-hidden">
                      <img
                        src={other.heroImage}
                        alt={other.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-600"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#1a1208] via-[#1a1208]/30 to-transparent" />

                      <span className="absolute top-3 left-3 font-sans text-xs text-[#c9a84c] border border-[#c9a84c]/40 bg-[#1a1208]/60 backdrop-blur-sm px-2.5 py-0.5 rounded-full">
                        {other.moduleCode}
                      </span>
                    </div>

                    <div className="p-4">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-xl">{other.emoji}</span>
                        <h3 className="font-serif text-lg text-white font-bold group-hover:text-[#c9a84c] transition-colors">
                          {other.name}
                        </h3>
                      </div>
                      <p className="font-korean text-xs text-[#8c7b6b] mb-2">{other.nameKr}</p>
                      <p className="font-sans text-xs text-white/50 flex items-center gap-1.5">
                        <span>🕐</span>
                        {other.duration}
                      </p>
                    </div>

                    <div className="absolute bottom-4 right-4 w-7 h-7 rounded-full bg-[#c9a84c]/0 group-hover:bg-[#c9a84c] border border-[#c9a84c]/40 flex items-center justify-center transition-all duration-300">
                      <span className="text-[#c9a84c] group-hover:text-[#1a1208] text-xs font-bold transition-colors">→</span>
                    </div>
                  </div>
                </Link>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 8. CTA ─── */}
      <section className="py-20 lg:py-28 bg-[#faf6ef] relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#c9a84c]/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-[#7a9e7e]/5 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeUp>
            <div className="text-5xl mb-6">{mod.emoji}</div>

            <p className="font-sans text-xs font-medium tracking-[0.3em] uppercase text-[#c9a84c] mb-4">
              {t('detail.readyToTravel')}
            </p>

            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#1a1208] mb-4 leading-tight">
              {t('detail.readyToExplore')}{" "}
              <span className="text-[#c9a84c] italic">{mod.name}</span>?
            </h2>

            <p className="font-korean text-[#8c7b6b] text-lg mb-3">
              {mod.nameKr}{t('detail.experienceBeauty')}
            </p>

            <p className="font-sans text-[#8c7b6b] text-sm mb-10 max-w-xl mx-auto leading-relaxed">
              {mod.duration} {t('detail.across')} {mod.cities}
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-3 bg-[#c9a84c] hover:bg-[#b8963e] text-[#1a1208] font-sans font-bold text-sm tracking-wide px-8 py-4 rounded-full transition-all duration-300 shadow-lg hover:shadow-[#c9a84c]/30 hover:shadow-xl hover:-translate-y-0.5 group"
              >
                <span>{tc('shared.enquireNow')}</span>
              </Link>

              <Link
                href="/modules"
                className="inline-flex items-center gap-3 bg-transparent border-2 border-[#c9a84c]/40 hover:border-[#c9a84c] text-[#1a1208] font-sans font-medium text-sm tracking-wide px-8 py-4 rounded-full transition-all duration-300 hover:-translate-y-0.5"
              >
                {tc('shared.viewAllModules')}
              </Link>
            </div>

            <p className="font-sans text-xs text-[#8c7b6b] mt-8">
              {t('detail.socialProof')}
            </p>
          </FadeUp>
        </div>
      </section>
    </main>
  );
}
