'use client';

import { useEffect, useState } from 'react';
import { ArrowLeft, ArrowRight, ArrowUpRight } from 'lucide-react';
import Image from 'next/image';
import Link from '@/components/LocaleLink';
import { useLanguage } from '@/contexts/LanguageContext';
import type { TranslationKey } from '@/types/i18n';
import { BlurFade } from '@/components/ui/magicui/blur-fade';
import { Meteors } from '@/components/ui/magicui/meteors';
import { AnimatedGradientText } from '@/components/ui/magicui/animated-gradient-text';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from '@/components/ui/carousel';

interface Slide {
  id: string;
  titleKey: TranslationKey;
  descKey: TranslationKey;
  href: string;
  image: string;
}

const SLIDES: Slide[] = [
  {
    id: 'secure',
    titleKey: 'agrobank.features.secure.title',
    descKey: 'agrobank.features.secure.description',
    href: '/agrobank',
    image: '/farmers/4.jpeg',
  },
  {
    id: 'analytics',
    titleKey: 'agrobank.features.analytics.title',
    descKey: 'agrobank.features.analytics.description',
    href: '/agrobank',
    image: '/farmers/farms2.jpeg',
  },
  {
    id: 'mobile',
    titleKey: 'agrobank.features.mobile.title',
    descKey: 'agrobank.features.mobile.description',
    href: '/agrobank',
    image: '/farmers/cassava.jpeg',
  },
  {
    id: 'contracts',
    titleKey: 'agrobank.features.contracts.title',
    descKey: 'agrobank.features.contracts.description',
    href: '/agrobank',
    image: '/farmers/7.jpeg',
  },
  {
    id: 'payments',
    titleKey: 'features.payments.title',
    descKey: 'features.payments.description',
    href: '/agrobank',
    image: '/farmers/5.jpeg',
  },
];

export default function CapitalStats() {
  const { t } = useLanguage();
  const [carouselApi, setCarouselApi] = useState<CarouselApi>();
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  useEffect(() => {
    if (!carouselApi) return;
    const update = () => {
      setCanScrollPrev(carouselApi.canScrollPrev());
      setCanScrollNext(carouselApi.canScrollNext());
    };
    update();
    carouselApi.on('select', update);
    return () => { carouselApi.off('select', update); };
  }, [carouselApi]);

  return (
    <section className="relative py-28 md:py-36 bg-gray-950 overflow-hidden">
      {/* Meteors */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <Meteors number={10} />
      </div>
      {/* Glow */}
      <div className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 h-[500px] w-[700px] rounded-full bg-emerald-500/5 blur-[120px]" aria-hidden="true" />

      {/* ── Header ── */}
      <BlurFade inView>
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="mb-10 flex flex-col justify-between gap-6 md:flex-row md:items-end md:mb-14">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-1.5 text-xs font-semibold text-emerald-400 uppercase tracking-wider mb-4 block w-fit">
                {t('agrobank.badge')}
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight leading-[1.1] mb-4">
                <AnimatedGradientText colorFrom="#00e834" colorTo="#99ff99" speed={0.5}>
                  {t('agrobank.title')}
                </AnimatedGradientText>
              </h2>
              <Link
                href="/agrobank"
                className="group inline-flex items-center gap-1.5 text-sm font-medium text-emerald-400 hover:text-emerald-300 transition-colors"
              >
                {t('agrobank.cta.open')}
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>

            {/* Nav arrows */}
            <div className="flex shrink-0 items-center gap-2">
              <button
                onClick={() => carouselApi?.scrollPrev()}
                disabled={!canScrollPrev}
                aria-label="Slide précédent"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-700 bg-gray-900/80 text-gray-400 transition-all hover:border-emerald-500/50 hover:text-emerald-400 disabled:opacity-30 disabled:cursor-not-allowed"
              >
                <ArrowLeft className="h-4 w-4" />
              </button>
              <button
                onClick={() => carouselApi?.scrollNext()}
                disabled={!canScrollNext}
                aria-label="Slide suivant"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-700 bg-gray-900/80 text-gray-400 transition-all hover:border-emerald-500/50 hover:text-emerald-400 disabled:opacity-30 disabled:cursor-not-allowed"
              >
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </BlurFade>

      {/* ── Carousel ── */}
      <div className="w-full">
        <Carousel
          setApi={setCarouselApi}
          opts={{
            align: 'start',
            breakpoints: { '(max-width: 768px)': { dragFree: true } },
          }}
          className="relative"
        >
          <CarouselContent className="-mr-4 ml-[max(1.25rem,calc(50vw-672px+1rem))] 2xl:ml-[max(8rem,calc(50vw-700px+1rem))]">
            {SLIDES.map((slide) => (
              <CarouselItem key={slide.id} className="pl-4 md:max-w-[420px]">
                <Link
                  href={slide.href}
                  className="group flex flex-col"
                >
                  {/* Image */}
                  <div className="flex aspect-[3/2] overflow-hidden rounded-2xl">
                    <div className="relative h-full w-full flex-1 origin-bottom transition-transform duration-500 group-hover:scale-[1.04]">
                      <Image
                        src={slide.image}
                        alt={t(slide.titleKey)}
                        fill
                        className="object-cover object-center"
                        sizes="(max-width: 768px) 90vw, 420px"
                        loading="lazy"
                      />
                      {/* Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-950/60 via-transparent to-transparent" />
                    </div>
                  </div>

                  {/* Text */}
                  <h3 className="mt-5 mb-2 line-clamp-2 text-lg font-semibold text-white transition-colors group-hover:text-emerald-400 md:text-xl lg:text-2xl">
                    {t(slide.titleKey)}
                  </h3>
                  <p className="mb-6 line-clamp-2 text-sm text-gray-400 md:text-base">
                    {t(slide.descKey)}
                  </p>
                  <div className="flex items-center text-sm font-medium text-emerald-400 group-hover:text-emerald-300 transition-colors">
                    En savoir plus
                    <ArrowRight className="ml-1.5 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </Link>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>

      {/* Footer trust */}
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8 mt-12">
        <p className="text-center text-xs text-gray-600 tracking-wide">
          {t('agrobank.cta.footer')}
        </p>
      </div>
    </section>
  );
}
