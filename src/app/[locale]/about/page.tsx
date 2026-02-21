import { Link } from "@/i18n/navigation";
import FadeUp from "@/components/FadeUp";
import { getTranslations } from "next-intl/server";

const introImage = "/images/common/about-together.webp";

export default async function AboutPage() {
  const t = await getTranslations('about');

  const testimonials = [
    { stars: 5, quote: t('testimonials.quote1'), name: t('testimonials.name1'), location: t('testimonials.location1'), initials: t('testimonials.initials1') },
    { stars: 5, quote: t('testimonials.quote2'), name: t('testimonials.name2'), location: t('testimonials.location2'), initials: t('testimonials.initials2') },
    { stars: 5, quote: t('testimonials.quote3'), name: t('testimonials.name3'), location: t('testimonials.location3'), initials: t('testimonials.initials3') },
  ];

  const steps = [
    { step: "01", title: t('howItWorks.step1Title'), desc: t('howItWorks.step1Desc'), icon: t('howItWorks.step1Icon') },
    { step: "02", title: t('howItWorks.step2Title'), desc: t('howItWorks.step2Desc'), icon: t('howItWorks.step2Icon') },
    { step: "03", title: t('howItWorks.step3Title'), desc: t('howItWorks.step3Desc'), icon: t('howItWorks.step3Icon') },
    { step: "04", title: t('howItWorks.step4Title'), desc: t('howItWorks.step4Desc'), icon: t('howItWorks.step4Icon') },
  ];

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
          <p className="font-korean text-gold-light text-lg mt-4 tracking-widest">
            {t('header.subtitle')}
          </p>
        </div>
      </section>

      {/* ── ABOUT CONTENT ── */}
      <section className="bg-cream py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <FadeUp>
            <div className="flex flex-col gap-7">
              <h2 className="font-serif text-4xl md:text-5xl text-ink leading-tight tracking-tight">
                {t('content.title1')}
                <br />
                <em className="italic text-gold">{t('content.title2')}</em>
              </h2>
              <p className="font-sans text-warm-gray text-base leading-relaxed">
                {t('content.paragraph1')}
              </p>
              <p className="font-sans text-warm-gray text-base leading-relaxed">
                {t('content.paragraph2')}
              </p>
              <p className="font-sans text-gold font-medium text-[15px]">
                {t('content.quote')}
              </p>

              <div className="flex flex-wrap gap-8 pt-4 border-t border-ink/10">
                {[
                  [t('content.stat1Value'), t('content.stat1Label')],
                  [t('content.stat2Value'), t('content.stat2Label')],
                  [t('content.stat3Value'), t('content.stat3Label')],
                ].map(([val, label]) => (
                  <div key={label}>
                    <div className="font-serif text-2xl text-ink font-bold">
                      {val}
                    </div>
                    <div className="font-sans text-warm-gray text-xs tracking-[0.12em] uppercase mt-0.5">
                      {label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </FadeUp>

          <FadeUp delay={150}>
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-2/3 h-2/3 border-2 border-gold/25 pointer-events-none z-0" />
              <div className="relative z-10 overflow-hidden">
                <img
                  src={introImage}
                  alt="Sri Lankan and Korean friends making kimchi together at Gyeongbokgung Palace"
                  className="w-full object-cover"
                  style={{ aspectRatio: "4/5" }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/30 to-transparent" />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-ink text-cream p-6 shadow-2xl z-20 w-44">
                <div className="font-serif text-3xl text-gold font-bold">{t('content.nightsValue')}</div>
                <div className="font-sans text-xs text-warm-gray tracking-[0.12em] uppercase mt-1 leading-snug">
                  {t('content.nightsLabel')}
                </div>
                <div className="mt-3 w-8 h-px bg-gold" />
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section className="bg-cream border-t border-ink/8 py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <FadeUp>
            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-3">
                <span className="inline-block w-8 h-px bg-gold" />
                <span className="text-gold text-xs tracking-[0.25em] uppercase font-sans">
                  {t('howItWorks.label')}
                </span>
              </div>
              <h2 className="font-serif text-4xl md:text-5xl text-ink leading-tight tracking-tight">
                {t('howItWorks.title1')}
                <br />
                <em className="italic text-gold">{t('howItWorks.title2')}</em>
              </h2>
              <p className="font-sans text-warm-gray text-base leading-relaxed max-w-sm">
                {t('howItWorks.description')}
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-ink text-cream px-7 py-3.5 text-sm font-sans font-medium tracking-[0.12em] uppercase hover:bg-gold hover:text-ink transition-colors duration-300 self-start"
              >
                {t('howItWorks.cta')}
              </Link>
            </div>
          </FadeUp>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {steps.map((item, i) => (
              <FadeUp key={item.step} delay={i * 100}>
                <div className="group bg-white border border-ink/8 p-7 hover:border-gold/40 hover:shadow-lg transition-all duration-300 h-full">
                  <div className="flex items-start justify-between mb-5">
                    <span className="font-serif text-4xl text-ink/10 font-bold leading-none">
                      {item.step}
                    </span>
                    <span className="text-2xl">{item.icon}</span>
                  </div>
                  <h3 className="font-serif text-xl text-ink mb-2 tracking-tight">
                    {item.title}
                  </h3>
                  <p className="font-sans text-warm-gray text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="bg-ink py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16">
          <FadeUp>
            <div className="text-center mb-14">
              <div className="flex items-center justify-center gap-3 mb-4">
                <span className="inline-block w-8 h-px bg-gold" />
                <span className="text-gold text-xs tracking-[0.25em] uppercase font-sans">
                  {t('testimonials.label')}
                </span>
                <span className="inline-block w-8 h-px bg-gold" />
              </div>
              <h2 className="font-serif text-4xl md:text-5xl text-cream leading-tight tracking-tight">
                {t('testimonials.title')} <em className="italic text-gold">{t('testimonials.titleHighlight')}</em>
              </h2>
            </div>
          </FadeUp>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((item, i) => (
              <FadeUp key={item.name} delay={i * 100}>
                <div className="border border-white/8 p-8 flex flex-col gap-6 hover:border-gold/30 transition-colors duration-300 h-full">
                  <div className="flex gap-1">
                    {Array.from({ length: item.stars }).map((_, si) => (
                      <span key={si} className="text-gold text-sm">★</span>
                    ))}
                  </div>
                  <div className="relative">
                    <span className="absolute -top-3 -left-2 font-serif text-5xl text-gold/20 leading-none select-none">
                      &ldquo;
                    </span>
                    <p className="font-sans text-warm-gray text-sm leading-relaxed pt-3 relative z-10">
                      {item.quote}
                    </p>
                  </div>
                  <div className="flex items-center gap-4 pt-2 border-t border-white/8 mt-auto">
                    <div className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center flex-shrink-0">
                      <span className="font-serif text-gold text-sm font-bold">
                        {item.initials}
                      </span>
                    </div>
                    <div>
                      <div className="font-sans text-cream text-sm font-medium">{item.name}</div>
                      <div className="font-sans text-warm-gray text-xs tracking-wide mt-0.5">
                        {item.location}
                      </div>
                    </div>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
