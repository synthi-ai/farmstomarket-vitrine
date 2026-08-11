'use client';

import { useState, useRef } from 'react'; // useState used by Leadership
import Image from 'next/image';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { ArrowRight, ChevronLeft, ChevronRight, Target, Users, Leaf } from 'lucide-react';

const EASE = [0.25, 0.46, 0.45, 0.94] as const;

function useReveal(threshold = 0.1) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: threshold });
  return { ref, inView };
}

/* ─────────────────────────────────────────
   1. HERO
   Headline + CTA on clean bg,
   then 3 static images side-by-side below
    exact opencv.ai structure
───────────────────────────────────────── */
const HERO_IMAGES = [
  { src: '/farmers/farms2.jpeg',   alt: 'FarmsToMarket team in the field' },
  { src: '/farmers/cassava.jpeg',  alt: 'Harvest season  Cameroon' },
  { src: '/farmers/poivrons.jpeg', alt: 'African agricultural markets' },
];

function Hero() {
  const { ref, inView } = useReveal(0.05);
  return (
    <>
      {/* Headline block  geo mask only */}
      <section ref={ref} className="relative overflow-hidden pt-32 pb-16 px-6">
        <div className="absolute inset-0 bg-gray-950 bg-geo-subtle" />
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-500/6 blur-[140px]" />

        <div className="relative z-10 mx-auto max-w-5xl text-center">
          <motion.h1
            className="font-heading mb-8 text-[52px] font-bold leading-[1.05] tracking-[-1.5px] text-white lg:text-[68px] xl:text-[84px]"
            initial={{ opacity: 0, y: 32 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, ease: EASE }}
          >
            The human intelligence that powers{' '}
            <span className="text-gradient">African agriculture.</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3, ease: EASE }}
          >
            <a
              href="#contact"
              className="font-cta inline-flex items-center gap-2 rounded-full bg-emerald-500 px-8 py-4 text-[13px] font-bold uppercase tracking-[1.5px] text-black transition-all hover:bg-emerald-400 hover:shadow-2xl hover:shadow-emerald-500/25"
            >
              Get in touch <ArrowRight className="h-4 w-4" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* 3 static images side by side */}
      <section className="pb-28 px-6">
        <motion.div
          className="mx-auto grid max-w-7xl grid-cols-1 gap-4 sm:grid-cols-3"
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.4, ease: EASE }}
        >
          {HERO_IMAGES.map((img, i) => (
            <div
              key={i}
              className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-gray-900"
            >
              <Image
                src={img.src}
                alt={img.alt}
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

/* ─────────────────────────────────────────
   2. WHY US
   Intro paragraph + key stat +
   3 icon cards side by side
───────────────────────────────────────── */
const WHY_CARDS = [
  {
    Icon: Target,
    title: 'We will find a way.',
    desc: "Every farmer, every cooperative, every link in the agro-pastoral chain deserves fair market access. We build until the problem is solved  not until it's good enough.",
  },
  {
    Icon: Users,
    title: 'Empathy for producers.',
    desc: "Our tools are designed in the field with real producers. We build for Aminata, Ibrahim and Jean-Pierre  not for an imagined user sitting in a startup office.",
  },
  {
    Icon: Leaf,
    title: 'We will do it right  always.',
    desc: 'Fair pricing, transparent transactions, zero hidden fees. We protect producers from exploitation by building systems that serve their interests  legally and ethically.',
  },
];

function WhyUs() {
  const { ref, inView } = useReveal();
  return (
    <section ref={ref} className="border-t border-gray-800/60 py-28 px-6">
      <div className="mx-auto max-w-5xl">

        {/* Intro paragraph + stat */}
        <motion.p
          className="mb-10 text-[22px] font-medium leading-[1.65] text-white sm:text-[26px] md:text-[30px]"
          initial={{ opacity: 0, y: 28 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, ease: EASE }}
        >
          We are experts in agri-tech and financial inclusion for Africa. FarmsToMarket is built by the
          team behind <span className="text-emerald-400">SYNTHI-AI</span>  with{' '}
          <span className="text-white font-bold">50,000+ producers</span> and{' '}
          <span className="text-white font-bold">XAF 2 billion+</span> in transactions processed.
        </motion.p>

        {/* 3 icon cards */}
        <motion.div
          className="grid grid-cols-1 gap-8 md:grid-cols-3"
          initial={{ opacity: 0, y: 32 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, delay: 0.15, ease: EASE }}
        >
          {WHY_CARDS.map(({ Icon, title, desc }, i) => (
            <div key={i}>
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-emerald-500/10">
                <Icon className="h-5 w-5 text-emerald-400" />
              </div>
              <h3 className="font-heading mb-3 text-[19px] font-bold text-white">{title}</h3>
              <p className="text-[15px] leading-[1.75] text-gray-400">{desc}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────
   3. LEADERSHIP
   One profile at a time  large photo +
   name + role + bio, with numbered
   tabs + arrows + progress bar
───────────────────────────────────────── */
const TEAM = [
  {
    name: 'Romain Krohn',
    role: 'CEO & Co-Founder',
    bio: "Product strategist and entrepreneur with deep experience building agricultural platforms in Central and West Africa. Romain leads FarmsToMarket's vision of connecting every producer on the continent to fair, transparent, digital markets. He pioneered the integration of SYNTHI-AI into the agro-pastoral value chain.",
    img: '/farmers/8.jpg',
  },
  {
    name: 'Chief Technology Officer',
    role: 'CTO',
    bio: "Fullstack engineer and AI specialist with 10+ years in mobile-first platforms. Leads the development of FarmsToMarket's core marketplace engine, the AgroBank fintech stack, and the SYNTHI-AI machine learning models for crop quality detection and dynamic pricing.",
    img: '/farmers/2.jpeg',
  },
  {
    name: 'Head of Product',
    role: 'CPO',
    bio: 'Former agricultural economist turned product designer. Conducts field research across 15 countries to build tools producers can use on entry-level Android devices with intermittent connectivity. Drives the UX philosophy: if a first-time smartphone user in rural Cameroon can use it, it ships.',
    img: '/farmers/5.jpeg',
  },
  {
    name: 'Chief Operating Officer',
    role: 'COO',
    bio: 'Operations specialist with experience scaling agri-businesses across Sub-Saharan Africa. Oversees logistics partnerships, cooperative onboarding, regulatory compliance in 15 markets, and the continent-wide rollout of AgroBank  the first natively agro-pastoral digital bank.',
    img: '/farmers/6.jpeg',
  },
];

function Leadership() {
  const [active, setActive] = useState(0);
  const { ref, inView } = useReveal(0.08);
  const go = (dir: number) => setActive((p) => ((p + dir + TEAM.length) % TEAM.length));

  return (
    <section ref={ref} className="border-t border-gray-800/60 py-28 px-6">
      <div className="mx-auto max-w-5xl">
        <motion.h2
          className="font-heading mb-16 text-[36px] font-bold text-white sm:text-[42px] md:text-[50px]"
          initial={{ opacity: 0, y: 28 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, ease: EASE }}
        >
          Leadership.
        </motion.h2>

        {/* One profile at a time */}
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
              {/* Large portrait */}
              <div className="relative aspect-[3/4] max-h-[500px] overflow-hidden rounded-2xl bg-gray-900">
                <Image
                  src={TEAM[active].img}
                  alt={TEAM[active].name}
                  fill
                  className="object-cover"
                  sizes="(max-width:768px)100vw,50vw"
                />
              </div>

              {/* Bio */}
              <div className="flex flex-col justify-center">
                <span className="mb-4 block font-mono text-[13px] text-emerald-500">
                  .00{active + 1}
                </span>
                <h3 className="font-heading mb-1 text-[34px] font-bold leading-tight text-white lg:text-[42px]">
                  {TEAM[active].name}
                </h3>
                <p className="mb-7 text-[15px] font-medium text-emerald-400">
                  {TEAM[active].role}
                </p>
                <p className="text-[17px] leading-[1.8] text-gray-400">
                  {TEAM[active].bio}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
        </motion.div>

        {/* Arrows + numbered tabs + progress bar */}
        <div className="flex items-center gap-2">
          <button onClick={() => go(-1)} className="p-2 text-gray-500 transition-colors hover:text-white" aria-label="Previous">
            <ChevronLeft className="h-5 w-5" />
          </button>

          <div className="flex items-center gap-1">
            {TEAM.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`px-3 py-2 font-mono text-sm transition-colors ${
                  i === active ? 'text-emerald-400' : 'text-gray-600 hover:text-gray-300'
                }`}
              >
                0{i + 1}
              </button>
            ))}
          </div>

          <button onClick={() => go(1)} className="p-2 text-gray-500 transition-colors hover:text-white" aria-label="Next">
            <ChevronRight className="h-5 w-5" />
          </button>

          <div className="relative ml-4 h-px flex-1 bg-gray-800">
            <motion.div
              className="absolute left-0 top-0 h-px bg-emerald-500"
              animate={{ width: `${((active + 1) / TEAM.length) * 100}%` }}
              transition={{ duration: 0.4, ease: EASE }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}


/* ─────────────────────────────────────────
   PAGE EXPORT
───────────────────────────────────────── */
export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-950">
      <Hero />
      <WhyUs />
      <Leadership />
    </div>
  );
}
