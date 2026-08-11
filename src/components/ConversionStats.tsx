'use client';

import Image from 'next/image';
import { useLanguage } from '@/contexts/LanguageContext';
import { BlurFade } from '@/components/ui/magicui/blur-fade';
import { NumberTicker } from '@/components/ui/magicui/number-ticker';

export default function ConversionStats() {
  const { t } = useLanguage();

  const stats = [
    { value: 50, suffix: 'K+', label: t('showcase.stat.users') },
    { value: 72.9, suffix: 'K+', label: t('showcase.stat.transactions'), decimalPlaces: 1 },
    { value: 15, suffix: '+', label: t('credibility.countries.label') },
    { value: 99.8, suffix: '%', label: t('credibility.uptime.label'), decimalPlaces: 1 },
  ];

  return (
    <section className="relative py-28 md:py-36 bg-gray-900 bg-geo-subtle overflow-hidden">
      {/* Accent glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[400px] w-[600px] rounded-full bg-emerald-500/5 blur-[100px]" aria-hidden="true" />

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left: Stats */}
          <BlurFade inView direction="left" delay={0}>
            <span className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-1.5 text-xs font-semibold text-emerald-400 uppercase tracking-wider mb-6 block w-fit">
              {t('secure.payments.title')}
            </span>

            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight leading-[1.1] mb-8">
              {t('features.cta.title')}
            </h2>

            {/* Animated counters */}
            <div className="grid grid-cols-2 gap-8 mb-10">
              {stats.map((stat, i) => (
                <div key={i}>
                  <div className="font-heading text-4xl md:text-5xl font-bold text-gradient tracking-tight flex items-baseline gap-0.5">
                    <NumberTicker
                      value={stat.value}
                      decimalPlaces={stat.decimalPlaces ?? 0}
                      className="text-gradient font-heading text-4xl md:text-5xl font-bold"
                    />
                    <span className="text-gradient font-heading text-3xl md:text-4xl font-bold">{stat.suffix}</span>
                  </div>
                  <div className="text-gray-400 text-sm mt-1.5">{stat.label}</div>
                </div>
              ))}
            </div>

            <p className="text-gray-500 text-sm italic leading-relaxed max-w-md">
              {t('features.cta.description')}
            </p>
          </BlurFade>

          {/* Right: Mockup */}
          <BlurFade inView direction="right" delay={0.08}>
            <div className="relative flex justify-center">
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none" aria-hidden="true">
                <div className="w-[350px] h-[350px] bg-emerald-500/8 rounded-full blur-[80px]" />
              </div>
              <Image
                src="/Mockups/mockup 13.png"
                alt="Secure Payment Interface"
                width={350}
                height={700}
                className="object-contain drop-shadow-2xl relative z-10"
                sizes="(max-width: 1024px) 80vw, 350px"
                loading="lazy"
              />
            </div>
          </BlurFade>
        </div>
      </div>
    </section>
  );
}
