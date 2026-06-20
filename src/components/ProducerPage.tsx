'use client';

import { useRef, useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { ArrowRight, ChevronRight, ChevronLeft, Star } from 'lucide-react';

const EASE = [0.25, 0.46, 0.45, 0.94] as const;

function useReveal(threshold = 0.1) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: threshold });
  return { ref, inView };
}

/* ─────────────────────────────────────────
   HERO  — centered, no background image
───────────────────────────────────────── */
function Hero() {
  return (
    <section className="relative overflow-hidden bg-gray-950 pt-28 pb-20">
      <div className="absolute inset-0 bg-geo-subtle" />
      <div className="pointer-events-none absolute left-1/2 top-0 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-500/6 blur-[160px]" />

      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        <motion.h1
          className="font-heading mb-6 text-[52px] font-bold leading-[1.06] tracking-[-1.5px] text-white lg:text-[72px] xl:text-[84px]"
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1, ease: EASE }}
        >
          Sell smarter.{' '}
          <span className="text-gradient">Get paid faster.</span>
        </motion.h1>

        <motion.p
          className="mx-auto mb-10 max-w-2xl text-[19px] leading-[1.75] text-gray-400"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25, ease: EASE }}
        >
          List your harvest, connect directly with verified buyers across Africa,
          and receive instant mobile payment — all from your phone.
          Built for every producer in the agro-pastoral chain.
        </motion.p>

        <motion.div
          className="flex flex-wrap items-center justify-center gap-4"
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4, ease: EASE }}
        >
          <a
            href="https://play.google.com/store/apps/details?id=com.i4u.synthi_ai.farms2market_mobile"
            target="_blank"
            rel="noopener noreferrer"
            className="font-cta inline-flex items-center gap-2 rounded-full bg-emerald-500 px-8 py-3.5 text-[13px] font-bold uppercase tracking-[1.5px] text-black transition-all hover:bg-emerald-400 hover:shadow-xl hover:shadow-emerald-500/20"
          >
            Start selling <ArrowRight className="h-4 w-4" />
          </a>
          <a
            href="#how-it-works"
            className="inline-flex items-center gap-1.5 text-[15px] font-medium text-gray-400 transition-colors hover:text-white"
          >
            See how it works <ChevronRight className="h-4 w-4" />
          </a>
        </motion.div>

        <motion.p
          className="mt-8 text-xs text-gray-700"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.6 }}
        >
          No registration fee · Available on Android · 15 countries
        </motion.p>
      </div>

      {/* Partner logo strip */}
      <motion.div
        className="relative z-10 mx-auto mt-20 max-w-4xl px-6"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.85, ease: EASE }}
      >
        <p className="mb-6 text-center text-[11px] uppercase tracking-[2.5px] text-gray-700">
          Trusted payment partners
        </p>
        <div className="flex flex-wrap items-center justify-center gap-10">
          <Image src="/partners/orange-money.png" alt="Orange Money" width={90} height={36}
            className="h-7 w-auto object-contain opacity-40 grayscale transition-all hover:opacity-80 hover:grayscale-0" />
          <div className="flex items-center gap-1.5 opacity-40 transition-opacity hover:opacity-80">
            <div className="flex h-5 items-center justify-center rounded px-1.5 bg-[#FFCC00] text-[8px] font-black text-gray-900">MTN</div>
            <span className="text-[12px] font-bold text-[#FFCC00]">MoMo</span>
          </div>
          <div className="flex items-center gap-1.5 opacity-40 transition-opacity hover:opacity-80">
            <div className="h-4 w-[3px] rounded-full bg-[#003087]" />
            <div className="leading-none">
              <span className="block text-[10px] font-bold text-gray-300">Afriland</span>
              <span className="block text-[8px] text-gray-600">First Bank</span>
            </div>
          </div>
          <Image src="/logo/logo.svg" alt="SYNTHI-AI" width={80} height={28}
            className="h-5 w-auto object-contain opacity-40 grayscale transition-all hover:opacity-80 hover:grayscale-0" />
          <span className="font-heading text-[12px] font-bold tracking-tight text-gray-700 transition-colors hover:text-gray-400">
            kiliwa<span className="text-emerald-500">.</span>ai
          </span>
        </div>
      </motion.div>
    </section>
  );
}

/* ─────────────────────────────────────────
   INTRO — "We are the platform…"
   Centered narrow, 3 badges, 2 stats
───────────────────────────────────────── */
function Intro() {
  const { ref, inView } = useReveal();
  return (
    <section ref={ref} className="border-t border-gray-800/60 py-28">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <motion.p
          className="mb-3 text-[11px] uppercase tracking-[2.5px] text-emerald-500"
          initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ duration: 0.5 }}
        >
          Who we serve
        </motion.p>
        <motion.h2
          className="font-heading mb-6 text-[36px] font-bold leading-[1.1] tracking-[-1px] text-white lg:text-[46px]"
          initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1, ease: EASE }}
        >
          We are the platform for every producer in Africa.
        </motion.h2>
        <motion.p
          className="mb-10 text-[17px] leading-[1.8] text-gray-400"
          initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ duration: 0.7, delay: 0.2 }}
        >
          From smallholder farmers to large cooperatives — whether you grow crops,
          raise livestock, fish, process food or transport goods — FarmsToMarket
          gives you the tools to sell at fair prices and get paid the same day.
          No intermediary. No branch visit. No paperwork.
        </motion.p>

        {/* 3 badges */}
        <motion.div
          className="mb-16 flex flex-wrap items-center justify-center gap-3"
          initial={{ opacity: 0, y: 12 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.3, ease: EASE }}
        >
          {['AI Fair Pricing', 'Instant Mobile Payment', 'Pan-African Buyers'].map((label) => (
            <span
              key={label}
              className="rounded-full border border-emerald-500/25 bg-emerald-500/8 px-5 py-2 text-[13px] font-medium text-emerald-400"
            >
              {label}
            </span>
          ))}
        </motion.div>

        {/* 2 key metrics */}
        <motion.div
          className="grid grid-cols-2 divide-x divide-gray-800/60"
          initial={{ opacity: 0, y: 16 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.4, ease: EASE }}
        >
          <div className="px-8 py-2">
            <p className="font-heading text-[48px] font-bold text-white">50K+</p>
            <p className="mt-1 text-[14px] text-gray-400">active producers on FarmsToMarket</p>
          </div>
          <div className="px-8 py-2">
            <p className="font-heading text-[48px] font-bold text-white">30%+</p>
            <p className="mt-1 text-[14px] text-gray-400">average income growth after 6 months</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────
   TESTIMONIAL CAROUSEL — centered single card
───────────────────────────────────────── */
const TESTIMONIALS = [
  {
    quote: "I used to sell at the market gate and lose 40% to middlemen. With FarmsToMarket I reach buyers in Yaoundé and get paid the same day. My income tripled in one season.",
    author: 'Amadou K.',
    role: 'Maize Producer · North Cameroon',
    avatar: '/farmers/2.jpeg',
  },
  {
    quote: "The AI price suggestions are always fair. I stopped guessing and started pricing my cassava based on real market data. My margins went from 12% to 38%.",
    author: 'Fatima N.',
    role: 'Cassava Farmer · Adamawa Region',
    avatar: '/farmers/cassava1.jpeg',
  },
  {
    quote: "My cooperative uses FarmsToMarket to pool our harvest and negotiate bulk orders. We've grown our collective income by 35% in less than a year.",
    author: 'Jean-Pierre M.',
    role: 'Cooperative Leader · West Region',
    avatar: '/farmers/3.jpeg',
  },
  {
    quote: "AgroCredit gave me a loan based on my sales history — no branch visit, no guarantor. I bought seeds and fertiliser for the whole season and repaid in 4 months.",
    author: 'Aïssatou D.',
    role: 'Livestock Breeder · Ngaoundéré',
    avatar: '/farmers/4.jpeg',
  },
  {
    quote: "I fish at Lake Chad. Before FarmsToMarket I had no way to reach buyers beyond the local dock. Now I list my catch and it's sold before I reach shore.",
    author: 'Ibrahim S.',
    role: 'Fisher · Far North Region',
    avatar: '/farmers/5.jpeg',
  },
];

function TestimonialCarousel() {
  const [active, setActive] = useState(0);
  const { ref, inView } = useReveal(0.08);
  const go = (dir: number) => setActive((p) => ((p + dir + TESTIMONIALS.length) % TESTIMONIALS.length));

  return (
    <section ref={ref} className="border-t border-gray-800/60 py-28">
      <div className="mx-auto max-w-3xl px-6">
        <motion.p
          className="mb-3 text-center text-[11px] uppercase tracking-[2.5px] text-emerald-500"
          initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ duration: 0.5 }}
        >
          Producer stories
        </motion.p>
        <motion.h2
          className="font-heading mb-16 text-center text-[36px] font-bold text-white lg:text-[46px]"
          initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1, ease: EASE }}
        >
          Hear from the field.
        </motion.h2>

        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            className="rounded-2xl border border-gray-800/60 bg-gray-900/60 p-10"
            initial={{ opacity: 0, x: 32 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -32 }}
            transition={{ duration: 0.38, ease: EASE }}
          >
            {/* Quote icon */}
            <svg className="mb-6 h-9 w-9 text-emerald-400" fill="currentColor" viewBox="0 0 24 24">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H14.017zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10H0z" />
            </svg>
            <p className="mb-8 text-[18px] leading-[1.75] text-gray-300">
              &ldquo;{TESTIMONIALS[active].quote}&rdquo;
            </p>
            <div className="flex items-center gap-4">
              <div className="relative h-11 w-11 overflow-hidden rounded-full bg-gray-800 shrink-0">
                <Image src={TESTIMONIALS[active].avatar} alt={TESTIMONIALS[active].author} fill className="object-cover" sizes="44px" />
              </div>
              <div>
                <p className="text-[14px] font-semibold text-white">{TESTIMONIALS[active].author}</p>
                <p className="text-[13px] text-gray-500">{TESTIMONIALS[active].role}</p>
              </div>
              <div className="ml-auto flex gap-0.5">
                {[...Array(5)].map((_, i) => <Star key={i} className="h-3.5 w-3.5 fill-emerald-400 text-emerald-400" />)}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        <div className="mt-6 flex items-center justify-between">
          <div className="flex gap-2">
            {TESTIMONIALS.map((_, i) => (
              <button key={i} onClick={() => setActive(i)}
                className={`h-1.5 rounded-full transition-all duration-300 ${i === active ? 'w-6 bg-emerald-500' : 'w-1.5 bg-gray-700 hover:bg-gray-500'}`}
                aria-label={`Testimonial ${i + 1}`} />
            ))}
          </div>
          <div className="flex gap-2">
            <button onClick={() => go(-1)} className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-800 text-gray-500 transition-all hover:border-gray-600 hover:text-white">
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button onClick={() => go(1)} className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-800 text-gray-500 transition-all hover:border-gray-600 hover:text-white">
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────
   ACTIVITY GRID — image cards 2–3 cols
   Like opencv's industry showcase
───────────────────────────────────────── */
const ACTIVITIES = [
  { label: 'Agriculture', sub: 'Crops & cereals', img: '/farmers/cassava.jpeg' },
  { label: 'Élevage', sub: 'Livestock & dairy', img: '/farmers/farms2.jpeg' },
  { label: 'Pêche', sub: 'Fish & aquaculture', img: '/farmers/imag2.jpeg' },
  { label: 'Transformation', sub: 'Processing & packaging', img: '/farmers/poivrons.jpeg' },
  { label: 'Transport', sub: 'Logistics & cold chain', img: '/farmers/img1.jpeg' },
  { label: 'Export', sub: 'International markets', img: '/farmers/images1.jpeg' },
  { label: 'Coopératives', sub: 'Group selling', img: '/farmers/6.jpeg' },
];

function ActivityGrid() {
  const { ref, inView } = useReveal(0.06);
  return (
    <section ref={ref} className="border-t border-gray-800/60 py-28">
      <div className="mx-auto max-w-6xl px-6">
        <motion.p className="mb-3 text-[11px] uppercase tracking-[2.5px] text-emerald-500"
          initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ duration: 0.5 }}>
          Every activity
        </motion.p>
        <motion.h2 className="font-heading mb-4 text-[36px] font-bold text-white lg:text-[46px]"
          initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1, ease: EASE }}>
          In every agro-pastoral sector.
        </motion.h2>
        <motion.p className="mb-14 max-w-xl text-[17px] leading-[1.75] text-gray-400"
          initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ duration: 0.7, delay: 0.2 }}>
          Farming, livestock, fishing, processing, transport, export — FarmsToMarket
          connects every link in the chain to buyers and markets.
        </motion.p>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {ACTIVITIES.map((a, i) => (
            <motion.div
              key={i}
              className="group relative overflow-hidden rounded-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.07, ease: EASE }}
            >
              <div className="relative aspect-[3/4] w-full overflow-hidden rounded-xl bg-gray-900">
                <Image src={a.img} alt={a.label} fill className="object-cover transition-transform duration-500 group-hover:scale-105" sizes="(max-width:640px)50vw,(max-width:1024px)33vw,25vw" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 p-4">
                  <p className="text-[15px] font-bold text-white">{a.label}</p>
                  <p className="text-[12px] text-gray-400">{a.sub}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div className="mt-10"
          initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ duration: 0.6, delay: 0.6 }}>
          <a href="https://play.google.com/store/apps/details?id=com.i4u.synthi_ai.farms2market_mobile"
            target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-[15px] font-medium text-emerald-400 transition-colors hover:text-emerald-300">
            Download the app and start selling <ChevronRight className="h-4 w-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────
   STATS — 3 numbers, centered
───────────────────────────────────────── */
function Stats() {
  const { ref, inView } = useReveal();
  return (
    <section ref={ref} className="border-t border-gray-800/60 py-24">
      <div className="mx-auto max-w-5xl px-6">
        <div className="grid grid-cols-1 divide-y divide-gray-800/60 md:grid-cols-3 md:divide-x md:divide-y-0">
          {[
            { value: '2 min', label: 'To list a product', sub: 'No paperwork required' },
            { value: 'XAF 2B+', label: 'In transactions', sub: 'Processed to date' },
            { value: '30%+', label: 'Average income growth', sub: 'Reported after 6 months' },
          ].map((s, i) => (
            <motion.div key={i} className="px-8 py-8 text-center first:pt-0 last:pb-0 md:first:pl-0 md:last:pr-0 md:py-0"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: i * 0.12, ease: EASE }}>
              <p className="font-heading text-[52px] font-bold text-white">{s.value}</p>
              <p className="mt-1 text-[15px] font-semibold text-emerald-400">{s.label}</p>
              <p className="mt-0.5 text-[13px] text-gray-600">{s.sub}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────
   STANDALONE QUOTE
───────────────────────────────────────── */
function SoloQuote() {
  const { ref, inView } = useReveal();
  return (
    <section ref={ref} className="border-t border-gray-800/60 py-24">
      <motion.div className="mx-auto max-w-3xl px-6 text-center"
        initial={{ opacity: 0, y: 24 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.9, ease: EASE }}>
        <svg className="mx-auto mb-6 h-10 w-10 text-emerald-400" fill="currentColor" viewBox="0 0 24 24">
          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H14.017zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10H0z" />
        </svg>
        <p className="font-heading mb-8 text-[22px] font-semibold italic leading-[1.6] text-white lg:text-[26px]">
          &ldquo;FarmsToMarket is the most important tool a modern African producer can have.
          It gives us access to buyers we could never reach before — and pays us in minutes, not weeks.&rdquo;
        </p>
        <div className="flex items-center justify-center gap-4">
          <div className="relative h-13 w-13 overflow-hidden rounded-full bg-gray-800">
            <Image src="/farmers/7.jpeg" alt="Diallo B." fill className="object-cover" sizes="52px" />
          </div>
          <div className="text-left">
            <p className="font-semibold text-white">Diallo B.</p>
            <p className="text-sm text-gray-500">Large-scale Producer · Ivory Coast</p>
            <div className="mt-1 flex gap-0.5">
              {[...Array(5)].map((_, i) => <Star key={i} className="h-3 w-3 fill-emerald-400 text-emerald-400" />)}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

/* ─────────────────────────────────────────
   SOLUTIONS CARDS  — 6 cards, 3 cols
   Each: mockup image top, number, title, desc
───────────────────────────────────────── */
const SOLUTION_CARDS = [
  { num: '01', title: 'Object Detection', label: 'Market Access', desc: 'Connect directly with verified buyers — wholesalers, retailers, exporters — across 15 African countries. No broker, no commission lost.', img: '/Mockups/mockup 01.png' },
  { num: '02', title: 'Smart Pricing', label: 'AI Pricing', desc: 'AI-powered price suggestions based on real-time market data. Know what your harvest is worth before you negotiate.', img: '/Mockups/mockup 02.png' },
  { num: '03', title: 'Instant Payment', label: 'Mobile Money', desc: 'Get paid via Orange Money or MTN MoMo the moment your buyer confirms delivery. Zero waiting. Zero branch.', img: '/Mockups/mockup 03.png' },
  { num: '04', title: 'Analytics', label: 'Sales Dashboard', desc: 'Full transaction history, price trends, best buyers. Use data from your past sales to plan your next season.', img: '/Mockups/mockup 04.png' },
  { num: '05', title: 'AgroCredit', label: 'Financing', desc: 'Flexible loans for seeds, fertiliser and equipment — based on your sales history. Approved in under 24 hours.', img: '/Mockups/mockup 11.png' },
  { num: '06', title: 'Cooperatives', label: 'Group Selling', desc: 'Pool your harvest with fellow producers, negotiate bulk orders and access buyers that would be unreachable alone.', img: '/Mockups/mockup 15.png' },
];

function SolutionCards() {
  const { ref, inView } = useReveal(0.06);
  return (
    <section ref={ref} className="border-t border-gray-800/60 py-28">
      <div className="mx-auto max-w-6xl px-6">
        <motion.p className="mb-3 text-[11px] uppercase tracking-[2.5px] text-emerald-500"
          initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ duration: 0.5 }}>
          Our solutions
        </motion.p>
        <motion.h2 className="font-heading mb-4 text-[36px] font-bold text-white lg:text-[46px]"
          initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1, ease: EASE }}>
          Tools built for producers.
        </motion.h2>
        <motion.p className="mb-16 max-w-xl text-[17px] leading-[1.75] text-gray-400"
          initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ duration: 0.7, delay: 0.2 }}>
          Six capabilities that work together to grow your income, protect your harvest and finance your next season.
        </motion.p>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {SOLUTION_CARDS.map((c, i) => (
            <motion.div key={i} className="flex flex-col"
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.08, ease: EASE }}>
              {/* Image at top like opencv */}
              <div className="relative mb-6 aspect-[9/16] w-full max-w-[200px] overflow-hidden rounded-xl bg-gray-900">
                <Image src={c.img} alt={c.title} fill className="object-contain" sizes="200px" />
              </div>
              <p className="mb-1 font-mono text-[13px] font-bold text-emerald-500">{c.num}</p>
              <h3 className="font-heading mb-2 text-[20px] font-bold text-white">{c.label}</h3>
              <p className="text-[15px] leading-[1.7] text-gray-400">{c.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────
   STORYTELLING — "Our solutions help producers succeed"
   Alternating numbered sections — the HEART of the page
───────────────────────────────────────── */
const STORY_STEPS = [
  {
    num: '01',
    title: 'Aminata lists her maize in 30 seconds.',
    desc: "It's harvest morning in the North. Aminata opens FarmsToMarket, takes a photo of her grain bags, enters the quantity. The app suggests XAF 285/kg — the real market price. She taps confirm. Her listing is live, visible to 4,000 verified buyers across Cameroon. She goes back to loading her truck.",
    img: '/Mockups/mockup 01.png',
    reverse: false,
  },
  {
    num: '02',
    title: 'Three buyers make offers within the hour.',
    desc: "A wholesaler in Douala offers XAF 280/kg for the full lot. A processor in Bafoussam bids XAF 292/kg. Aminata counter-offers XAF 295/kg to the processor, explains her grain quality with photos. They agree on XAF 293/kg. No broker takes a cut. No phone call to a middleman. The deal is done in the app.",
    img: '/Mockups/mockup 02.png',
    reverse: true,
  },
  {
    num: '03',
    title: 'Payment arrives before the truck does.',
    desc: "The buyer confirms receipt via the escrow system. Within seconds, XAF 1,172,000 lands in Aminata's AgroWallet — accessible via Orange Money. She sees the notification before the truck driver calls her. She screenshots it and sends it to her husband. This is the first time in twelve years she's been paid on delivery.",
    img: '/Mockups/mockup 03.png',
    reverse: false,
  },
  {
    num: '04',
    title: 'Her transaction history becomes her credit score.',
    desc: "Six months later, Aminata has 23 completed transactions logged in her dashboard. Revenue, buyers, price trends — it's all there. The app tells her: based on her history, she's eligible for an AgroCredit loan of up to XAF 850,000. She applies for XAF 500,000 to buy certified seeds for the next season. Approved in 18 hours.",
    img: '/Mockups/mockup 11.png',
    reverse: true,
  },
  {
    num: '05',
    title: 'She insures her harvest for the first time.',
    desc: "The rainy season is unpredictable. Aminata activates AgroInsure for her 3-hectare field — XAF 12,000 for the season. It's linked to satellite weather data. If rainfall drops below threshold, the payout is automatic. No claims form. No adjuster. No waiting. She plants knowing the risk is covered.",
    img: '/Mockups/mockup 12.png',
    reverse: false,
  },
  {
    num: '06',
    title: 'Twelve farmers join. A cooperative is born.',
    desc: "Aminata tells her neighbours. Twelve producers from the same village join FarmsToMarket. They create a cooperative on the app, pool their next harvest — 48 tonnes of maize — and negotiate as a single entity. A buyer in Yaoundé offers a contract. They accept. Each farmer sees their share in their wallet by Friday.",
    img: '/Mockups/mockup 15.png',
    reverse: true,
  },
] as const;

function StoryItem({ step }: { step: (typeof STORY_STEPS)[number] }) {
  const { ref, inView } = useReveal(0.08);
  return (
    <motion.div
      ref={ref}
      className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2"
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.9, ease: EASE }}
    >
      {/* Text */}
      <div className={step.reverse ? 'lg:order-2' : ''}>
        <span className="mb-5 block font-mono text-[40px] font-bold leading-none text-gray-800 lg:text-[56px]">
          {step.num}
        </span>
        <h3 className="font-heading mb-5 text-[26px] font-bold leading-[1.2] text-white lg:text-[32px]">
          {step.title}
        </h3>
        <p className="text-[16px] leading-[1.85] text-gray-400">{step.desc}</p>
      </div>

      {/* Mockup */}
      <div className={`flex items-center justify-center ${step.reverse ? 'lg:order-1' : ''}`}>
        <div className="relative">
          <div className="pointer-events-none absolute -inset-16 rounded-full bg-emerald-500/5 blur-[100px]" />
          <Image
            src={step.img}
            alt={step.title}
            width={280}
            height={560}
            className="relative z-10 drop-shadow-2xl"
            sizes="280px"
          />
        </div>
      </div>
    </motion.div>
  );
}

function Storytelling() {
  const { ref, inView } = useReveal(0.05);
  return (
    <section id="how-it-works" className="border-t border-gray-800/60 py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto mb-24 max-w-3xl">
          <motion.p className="mb-3 text-[11px] uppercase tracking-[2.5px] text-emerald-500"
            ref={ref} initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ duration: 0.5 }}>
            How it works
          </motion.p>
          <motion.h2 className="font-heading mb-4 text-[36px] font-bold text-white lg:text-[46px]"
            initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1, ease: EASE }}>
            Our solutions help producers succeed.
          </motion.h2>
          <motion.p className="text-[17px] leading-[1.8] text-gray-400"
            initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ duration: 0.7, delay: 0.2 }}>
            Follow Aminata — a maize producer from North Cameroon — through her first full season on FarmsToMarket.
            From first listing to financed cooperative, this is what the platform does for every producer.
          </motion.p>
        </div>

        <div className="space-y-32">
          {STORY_STEPS.map((step) => (
            <StoryItem key={step.num} step={step} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────
   APP DOWNLOAD — form-style centered CTA
───────────────────────────────────────── */
const PLAY_ICON = (
  <svg className="h-5 w-5 shrink-0" viewBox="0 0 24 24">
    <path d="M3.18 23.76A2 2 0 012 22V2a2 2 0 011.18-1.76l11.65 11.73L3.18 23.76z" fill="#4285F4" />
    <path d="M20.33 10.27L17.5 8.7l-3.27 3.27 3.27 3.28 2.86-1.6a1.89 1.89 0 000-3.38z" fill="#FBBC04" />
    <path d="M3.18.24L14.83 12 11.56 15.27.95 4.66A2 2 0 013.18.24z" fill="#EA4335" />
    <path d="M3.18 23.76a2 2 0 002.23-.48L17.5 15.3l-2.67-2.67L3.18 23.76z" fill="#34A853" />
  </svg>
);

function AppDownload() {
  const { ref, inView } = useReveal();
  return (
    <section ref={ref} className="border-t border-gray-800/60 py-28">
      <div className="mx-auto max-w-2xl px-6 text-center">
        <motion.p className="mb-3 text-[11px] uppercase tracking-[2.5px] text-emerald-500"
          initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ duration: 0.5 }}>
          Get started today
        </motion.p>
        <motion.h2 className="font-heading mb-4 text-[36px] font-bold text-white lg:text-[44px]"
          initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1, ease: EASE }}>
          Start selling your harvest today.
        </motion.h2>
        <motion.p className="mb-10 text-[17px] leading-[1.8] text-gray-400"
          initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ duration: 0.7, delay: 0.2 }}>
          Download FarmsToMarket, create your free account in 2 minutes and list your first product immediately.
        </motion.p>

        <motion.div className="flex flex-wrap items-center justify-center gap-4"
          initial={{ opacity: 0, y: 14 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.3 }}>
          <a
            href="https://play.google.com/store/apps/details?id=com.i4u.synthi_ai.farms2market_mobile"
            target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-3 rounded-xl border border-gray-700 bg-gray-900 px-6 py-4 transition-all hover:border-emerald-500/30 hover:bg-gray-800/80"
          >
            {PLAY_ICON}
            <div className="text-left">
              <p className="text-[10px] text-gray-500">Download on</p>
              <p className="text-[14px] font-semibold text-white">Google Play</p>
            </div>
          </a>
          <a
            href="https://play.google.com/store/apps/details?id=com.i4u.synthi_ai.farms2markets_agents"
            target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-3 rounded-xl border border-gray-700 bg-gray-900 px-6 py-4 transition-all hover:border-emerald-500/30 hover:bg-gray-800/80"
          >
            {PLAY_ICON}
            <div className="text-left">
              <p className="text-[10px] text-gray-500">Download on</p>
              <p className="text-[14px] font-semibold text-white">Google Play Pro</p>
            </div>
          </a>
        </motion.div>

        <motion.p className="mt-6 text-[12px] text-gray-700"
          initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ duration: 0.7, delay: 0.45 }}>
          Free to list · Commission only on successful sales · No subscription fees
        </motion.p>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────
   PAGE EXPORT
───────────────────────────────────────── */
export default function ProducerPage() {
  return (
    <div className="min-h-screen bg-gray-950">
      <Hero />
      <Intro />
      <TestimonialCarousel />
      <ActivityGrid />
      <Stats />
      <SoloQuote />
      <SolutionCards />
      <Storytelling />
      <AppDownload />
    </div>
  );
}
