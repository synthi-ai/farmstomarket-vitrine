'use client';

import { useState, useRef } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import type { LucideIcon } from 'lucide-react';
import { ArrowRight, ChevronLeft, ChevronRight, Target, Users, Leaf } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { buttonVariants } from '@/components/ui/button';
import { CONTACT } from '@/data/site';
import type { TranslationKey } from '@/types/i18n';

const EASE = [0.25, 0.46, 0.45, 0.94] as const;

function useReveal(threshold = 0.1) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: threshold });
  return { ref, inView };
}

const HERO_IMAGES = [
  { src: '/farmers/farms2.jpeg', altKey: 'aboutPage.hero.img1.alt' },
  { src: '/farmers/cassava.jpeg', altKey: 'aboutPage.hero.img2.alt' },
  { src: '/farmers/poivrons.jpeg', altKey: 'aboutPage.hero.img3.alt' },
] as const satisfies readonly { src: string; altKey: TranslationKey }[];

function Hero() {
  const { t } = useLanguage();
  const { ref, inView } = useReveal(0.05);
  return (
    <>
      <section ref={ref} className="relative overflow-hidden px-6 pt-32 pb-16">
        <div className="absolute inset-0 bg-gray-950 bg-geo-subtle" />
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-500/6 blur-[140px]" />

        <div className="relative z-10 mx-auto max-w-5xl text-center">
          <motion.h1
            className="font-heading mb-8 text-[52px] font-bold leading-[1.05] tracking-[-1.5px] text-white lg:text-[68px] xl:text-[84px]"
            initial={{ opacity: 0, y: 32 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, ease: EASE }}
          >
            {t('aboutPage.hero.title')}{' '}
            <span className="text-gradient">{t('aboutPage.hero.highlight')}</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3, ease: EASE }}
          >
            <a
              href={`mailto:${CONTACT.email}`}
              className={buttonVariants({ variant: 'cta', size: 'cta-lg' })}
            >
              {t('aboutPage.hero.cta')} <ArrowRight className="h-4 w-4" />
            </a>
          </motion.div>
        </div>
      </section>

      <section className="px-6 pb-28">
        <motion.div
          className="mx-auto grid max-w-7xl grid-cols-1 gap-4 sm:grid-cols-3"
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.4, ease: EASE }}
        >
          {HERO_IMAGES.map((img, i) => (
            <div key={img.src} className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-gray-900">
              <Image
                src={img.src}
                alt={t(img.altKey)}
                fill
                className="object-cover"
                sizes="(max-width:640px)100vw,33vw"
                priority={i === 0}
              />
            </div>
          ))}
        </motion.div>
      </section>
    </>
  );
}

const WHY_CARDS = [
  { Icon: Target, key: 1 },
  { Icon: Users, key: 2 },
  { Icon: Leaf, key: 3 },
] as const satisfies readonly { Icon: LucideIcon; key: 1 | 2 | 3 }[];

const cardKey = (n: 1 | 2 | 3, field: 'title' | 'desc') =>
  `aboutPage.why.card${n}.${field}` as TranslationKey;

function WhyUs() {
  const { t } = useLanguage();
  const { ref, inView } = useReveal();
  return (
    <section id="mission" ref={ref} className="border-t border-gray-800/60 px-6 py-28">
      <div className="mx-auto max-w-5xl">
        <motion.p
          className="mb-10 text-[22px] font-medium leading-[1.65] text-white sm:text-[26px] md:text-[30px]"
          initial={{ opacity: 0, y: 28 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, ease: EASE }}
        >
          {t('aboutPage.why.lead', {
            partner: 'SYNTHI-AI',
            users: t('aboutPage.figures.users'),
            volume: t('aboutPage.figures.volume'),
          })}
        </motion.p>

        <motion.div
          className="grid grid-cols-1 gap-8 md:grid-cols-3"
          initial={{ opacity: 0, y: 32 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, delay: 0.15, ease: EASE }}
        >
          {WHY_CARDS.map(({ Icon, key }) => (
            <div key={key}>
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-emerald-500/10">
                <Icon className="h-5 w-5 text-emerald-400" />
              </div>
              <h3 className="font-heading mb-3 text-[19px] font-bold text-white">
                {t(cardKey(key, 'title'))}
              </h3>
              <p className="text-[15px] leading-[1.75] text-gray-400">{t(cardKey(key, 'desc'))}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

interface Member {
  /** Absent when the role is public but the person has not been named yet. */
  nameKey?: TranslationKey;
  roleKey: TranslationKey;
  bioKey: TranslationKey;
  img: string;
}

const TEAM: readonly Member[] = [
  {
    nameKey: 'aboutPage.team.ceo.name',
    roleKey: 'aboutPage.team.ceo.role',
    bioKey: 'aboutPage.team.ceo.bio',
    img: '/farmers/8.jpg',
  },
  {
    roleKey: 'aboutPage.team.cto.role',
    bioKey: 'aboutPage.team.cto.bio',
    img: '/farmers/2.jpeg',
  },
  {
    roleKey: 'aboutPage.team.cpo.role',
    bioKey: 'aboutPage.team.cpo.bio',
    img: '/farmers/5.jpeg',
  },
  {
    roleKey: 'aboutPage.team.coo.role',
    bioKey: 'aboutPage.team.coo.bio',
    img: '/farmers/6.jpeg',
  },
];

function Leadership() {
  const { t } = useLanguage();
  const [active, setActive] = useState(0);
  const { ref, inView } = useReveal(0.08);
  const go = (dir: number) => setActive((p) => (p + dir + TEAM.length) % TEAM.length);
  const member = TEAM[active];

  return (
    <section id="team" ref={ref} className="border-t border-gray-800/60 px-6 py-28">
      <div className="mx-auto max-w-5xl">
        <motion.h2
          className="font-heading mb-16 text-[36px] font-bold text-white sm:text-[42px] md:text-[50px]"
          initial={{ opacity: 0, y: 28 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, ease: EASE }}
        >
          {t('aboutPage.leadership.title')}
        </motion.h2>

        <motion.div
          className="mb-12"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              className="grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-14"
              initial={{ opacity: 0, x: 28 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -28 }}
              transition={{ duration: 0.38, ease: EASE }}
            >
              <div className="relative aspect-[3/4] max-h-[500px] overflow-hidden rounded-2xl bg-gray-900">
                <Image
                  src={member.img}
                  alt={member.nameKey ? t(member.nameKey) : t(member.roleKey)}
                  fill
                  className="object-cover"
                  sizes="(max-width:768px)100vw,50vw"
                />
              </div>

              <div className="flex flex-col justify-center">
                <span className="mb-4 block font-mono text-[13px] text-emerald-500">
                  .00{active + 1}
                </span>
                <h3 className="font-heading mb-1 text-[34px] font-bold leading-tight text-white lg:text-[42px]">
                  {member.nameKey ? t(member.nameKey) : t(member.roleKey)}
                </h3>
                {/* Only rendered when the profile carries a real name, so the role is never printed twice. */}
                {member.nameKey && (
                  <p className="mb-7 text-[15px] font-medium text-emerald-400">{t(member.roleKey)}</p>
                )}
                <p className="text-[17px] leading-[1.8] text-gray-400">{t(member.bioKey)}</p>
              </div>
            </motion.div>
          </AnimatePresence>
        </motion.div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => go(-1)}
            className="p-2 text-gray-500 transition-colors hover:text-white"
            aria-label={t('aboutPage.leadership.prev')}
          >
            <ChevronLeft className="h-5 w-5" />
          </button>

          <div className="flex items-center gap-1">
            {TEAM.map((person, i) => (
              <button
                key={person.roleKey}
                onClick={() => setActive(i)}
                aria-current={i === active}
                className={`px-3 py-2 font-mono text-sm transition-colors ${
                  i === active ? 'text-emerald-400' : 'text-gray-600 hover:text-gray-300'
                }`}
              >
                0{i + 1}
              </button>
            ))}
          </div>

          <button
            onClick={() => go(1)}
            className="p-2 text-gray-500 transition-colors hover:text-white"
            aria-label={t('aboutPage.leadership.next')}
          >
            <ChevronRight className="h-5 w-5" />
          </button>

          <div className="relative ml-4 h-px flex-1 bg-gray-800">
            <motion.div
              className="absolute top-0 left-0 h-px bg-emerald-500"
              animate={{ width: `${((active + 1) / TEAM.length) * 100}%` }}
              transition={{ duration: 0.4, ease: EASE }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-950">
      <Hero />
      <WhyUs />
      <Leadership />
    </div>
  );
}