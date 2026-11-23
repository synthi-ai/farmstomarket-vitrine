'use client';

import React, { useEffect, useMemo, useRef, useState, type CSSProperties } from 'react';
import { withLocale } from '@/i18n/routing';
import type { Language } from '@/types/i18n';
import {
  SOLUTIONS,
  IMG,
  LINKS,
  ORDER,
  EXTRA,
  TOAST_STYLE,
  BANK_PRODUCTS,
  BANK_STORY,
  CLOUD_HOME,
  INCOME,
  seeded,
  type SolutionKey,
} from '@/content/solutions';
import { Reveal, Marquee, useWidth, useReducedMotion, clamp01, JAKARTA } from './primitives';

const MAXW = 1320;
const eyebrow: CSSProperties = { fontSize: 14, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#00801D' };

export default function SolutionsPage({ lang, slug }: { lang: Language; slug: SolutionKey }) {
  const L = SOLUTIONS[lang];
  const ui = L.ui;
  const p = L.pages[slug];
  const X = EXTRA[lang] as unknown as {
    toasts: Record<string, string[][]>;
    bx: Bx;
    fx: { name: string; price: string; change: string; buy: string; sell: string; bids: string; asks: string; illus: string; tfs: string[]; tick: string[][] };
  };
  const img = (
    slug === 'agrobank' ? { ...IMG[slug], products: BANK_PRODUCTS, story: BANK_STORY } : IMG[slug]
  ) as { hero: string; heroFit: string; panel: string; story: string[]; products: string[] };
  const [link, linkLabel] = LINKS[slug];

  const isFaroya = slug === 'faroya';
  const isBank = slug === 'agrobank';
  const isActor = !isFaroya && !isBank;

  const w = useWidth();
  const reduce = useReducedMotion();
  const desk = w >= 900;

  const [feat, setFeat] = useState(0);
  const [prod, setProd] = useState(0);
  const [open, setOpen] = useState(0);
  const [tf, setTf] = useState(2);

  const rootRef = useRef<HTMLDivElement | null>(null);
  const manifestoRef = useRef<HTMLHeadingElement | null>(null);

  /* manifesto word reveal on scroll */
  useEffect(() => {
    const man = manifestoRef.current;
    if (!man) return;
    if (reduce) {
      man.querySelectorAll<HTMLElement>('[data-w]').forEach((el) => (el.style.opacity = '1'));
      return;
    }
    let ticking = false;
    const run = () => {
      ticking = false;
      const vh = window.innerHeight;
      const r = man.getBoundingClientRect();
      const prog = clamp01((vh * 0.85 - r.top) / (r.height + vh * 0.3));
      const ws = man.querySelectorAll<HTMLElement>('[data-w]');
      ws.forEach((el, i) => (el.style.opacity = (i + 1) / ws.length <= prog + 0.001 ? '1' : '0.2'));
    };
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(run);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    run();
    return () => window.removeEventListener('scroll', onScroll);
  }, [reduce, slug]);

  /* story sticky: active step */
  useEffect(() => {
    if (!desk) return;
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setFeat(Number((e.target as HTMLElement).dataset.feat))),
      { rootMargin: '-45% 0px -45% 0px' },
    );
    rootRef.current?.querySelectorAll('[data-feat]').forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [desk, slug]);

  /* decorative motion (floats, glow, tilt, chart, bars, scan, ripple, pulse) */
  useEffect(() => {
    if (reduce) {
      rootRef.current?.querySelectorAll<HTMLElement>('[data-bar]').forEach((el) => (el.style.transform = 'none'));
      return;
    }
    const root = rootRef.current;
    if (!root) return;
    const anims: Animation[] = [];
    const once = (sel: string, fn: (el: HTMLElement) => void) =>
      root.querySelectorAll<HTMLElement>(sel).forEach((el) => {
        if (el.dataset.m) return;
        el.dataset.m = '1';
        fn(el);
      });

    const barIO = new IntersectionObserver(
      (es) => es.forEach((e) => { if (e.isIntersecting) { (e.target as HTMLElement).style.transform = 'scaleY(1)'; barIO.unobserve(e.target); } }),
      { threshold: 0.3 },
    );
    once('[data-bar]', (el) => barIO.observe(el));
    once('[data-kb]', (el) => anims.push(el.animate([{ transform: 'scale(1.1)' }, { transform: 'scale(1)' }], { duration: 2200, easing: 'cubic-bezier(.2,.7,.2,1)', fill: 'both' })));
    once('[data-toast]', (el) => {
      const i = Number(el.dataset.toast);
      anims.push(el.animate([{ opacity: 0, transform: 'translateY(18px) scale(.96)' }, { opacity: 1, transform: 'none', offset: 0.1 }, { opacity: 1, transform: 'none', offset: 0.86 }, { opacity: 0, transform: 'translateY(-8px)', offset: 1 }], { duration: 9000, delay: 600 + i * 800, iterations: Infinity, fill: 'both', easing: 'cubic-bezier(.2,.7,.2,1)' }));
    });
    once('[data-float]', (el) => {
      const i = Number(el.dataset.float);
      anims.push(el.animate([{ translate: '0 0' }, { translate: `0 ${-8 - i * 3}px` }, { translate: '0 0' }], { duration: 4200 + i * 900, iterations: Infinity, easing: 'ease-in-out', delay: i * 300 }));
    });
    once('[data-glow]', (el) => anims.push(el.animate([{ transform: 'scale(.9)', opacity: 0.7 }, { transform: 'scale(1.08)', opacity: 1 }, { transform: 'scale(.9)', opacity: 0.7 }], { duration: 7000, iterations: Infinity, easing: 'ease-in-out' })));
    once('[data-scan]', (el) => anims.push(el.animate([{ top: '0%' }, { top: '100%' }], { duration: 3600, iterations: Infinity, direction: 'alternate', easing: 'ease-in-out' })));
    once('[data-pulse]', (el) => anims.push(el.animate([{ boxShadow: '0 0 0 0 rgba(0,165,37,.6)' }, { boxShadow: '0 0 0 8px rgba(0,165,37,0)' }], { duration: 1600, iterations: Infinity })));
    once('[data-ripple]', (el) => { const i = Number(el.dataset.ripple); anims.push(el.animate([{ transform: 'scale(1)', opacity: 0.8 }, { transform: 'scale(2.6)', opacity: 0 }], { duration: 3000, delay: i * 1000, iterations: Infinity, easing: 'ease-out' })); });
    once('[data-parcel]', (el) => { const path = el as unknown as SVGPathElement; const Ln = path.getTotalLength ? path.getTotalLength() : 600; path.style.strokeDasharray = String(Ln); anims.push(path.animate([{ strokeDashoffset: Ln }, { strokeDashoffset: 0 }], { duration: 2200, easing: 'cubic-bezier(.2,.7,.2,1)', fill: 'both', delay: 300 })); });
    once('[data-tiltzone]', (zone) => {
      const move = (e: MouseEvent) => {
        const r = zone.getBoundingClientRect();
        const x = (e.clientX - r.left) / r.width - 0.5;
        const y = (e.clientY - r.top) / r.height - 0.5;
        zone.querySelectorAll<HTMLElement>('[data-card]').forEach((c) => (c.style.transform = `rotateY(${x * 18}deg) rotateX(${-y * 14}deg)`));
        zone.querySelectorAll<HTMLElement>('[data-shine]').forEach((s) => (s.style.transform = `translate(${x * 40}%, ${y * 40}%)`));
      };
      const leave = () => zone.querySelectorAll<HTMLElement>('[data-card],[data-shine]').forEach((c) => (c.style.transform = ''));
      zone.addEventListener('mousemove', move);
      zone.addEventListener('mouseleave', leave);
    });

    // chart line draw (re-runs on tf change)
    const line = root.querySelector('[data-chartline]') as SVGPathElement | null;
    if (line) { const Ln = line.getTotalLength(); line.style.strokeDasharray = String(Ln); anims.push(line.animate([{ strokeDashoffset: Ln }, { strokeDashoffset: 0 }], { duration: 1400, easing: 'cubic-bezier(.2,.7,.2,1)', fill: 'both' })); }

    // live order-book bars
    let bookTimer: ReturnType<typeof setInterval> | null = null;
    if (root.querySelector('[data-bookbar]')) {
      bookTimer = setInterval(() => root.querySelectorAll<HTMLElement>('[data-bookbar]').forEach((b) => (b.style.width = (20 + Math.random() * 75).toFixed(0) + '%')), 1400);
    }

    return () => {
      anims.forEach((a) => a.cancel());
      barIO.disconnect();
      if (bookTimer) clearInterval(bookTimer);
    };
  }, [reduce, slug, tf]);

  const needWords = p.need.title.split(' ');
  const toasts = (X.toasts[slug] || []).map((arr: string[], i: number) => ({ g: arr[0], t: arr[1], d: arr[2], i, bg: TOAST_STYLE[i][0], fg: TOAST_STYLE[i][1] }));

  /* faroya chart + book (deterministic per timeframe) */
  const chart = useMemo(() => {
    const rnd = seeded(7 + tf * 13);
    const n = [24, 30, 36, 48][tf];
    let y = 130;
    const pts: [number, number][] = [];
    for (let i = 0; i < n; i++) { y += (rnd() - 0.42) * 18; y = Math.max(18, Math.min(150, y)); pts.push([(i / (n - 1)) * 400, y]); }
    const lineD = pts.map((q, i) => (i ? 'L' : 'M') + q[0].toFixed(1) + ' ' + q[1].toFixed(1)).join(' ');
    return { line: lineD, area: lineD + ' L400 170 L0 170 Z' };
  }, [tf]);
  const book = useMemo(() => {
    const fmt = (v: number) => (lang === 'fr' ? v.toLocaleString('fr-FR').replace(/ | /g, ' ') : v.toLocaleString('en-US'));
    const rnd = seeded(42);
    const row = (price: number) => ({ p: fmt(price), q: Math.round(80 + rnd() * 900) + ' kg', w: Math.round(20 + rnd() * 75) + '%' });
    return { bids: [4195, 4190, 4185, 4180, 4175].map(row), asks: [4205, 4210, 4215, 4220, 4225].map(row) };
  }, [lang]);

  const tickers = useMemo(() => {
    if (!p.markets) return [] as { c: string; n: string; pr: string; ch: string; path: string }[];
    const spark = () => {
      const rnd = seeded(13);
      let y = 38;
      let d = 'M0 ' + y;
      for (let x = 20; x <= 200; x += 20) { y += -1 * (rnd() * 7) + (rnd() - 0.5) * 9; y = Math.max(4, Math.min(44, y)); d += ` L${x} ${y.toFixed(1)}`; }
      return d;
    };
    const a = X.fx.tick.map(([c, n, pr, ch]: string[]) => ({ c, n, pr, ch, path: spark() }));
    return a.concat(a, a);
  }, [p.markets, X.fx.tick]);

  return (
    <div ref={rootRef} style={{ display: 'flex', flexDirection: 'column', overflowX: 'clip' }}>
      {/* ───────── HERO ───────── */}
      {isActor ? (
        <section style={{ padding: '12px 12px 0' }}>
          <div style={{ position: 'relative', maxWidth: 1440, margin: '0 auto', borderRadius: 32, overflow: 'hidden', minHeight: 'min(88vh, 860px)', background: '#232731', display: 'flex', alignItems: 'flex-end' }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img data-kb="1" src={img.hero} alt={p.nav} style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg,rgba(4,4,5,0.05) 0%,rgba(4,4,5,0.3) 45%,rgba(4,4,5,0.86) 100%)' }} />
            <div style={{ position: 'relative', width: '100%', padding: 'clamp(28px,5vw,72px)', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 420px), 1fr))', gap: '32px 56px', alignItems: 'end' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 22, color: '#FFFFFF' }}>
                <Reveal as="span" order={0} style={{ ...eyebrow, color: '#8AF4A2' }}>{p.hero.eyebrow}</Reveal>
                <Reveal as="span" order={1} style={{ fontFamily: JAKARTA, fontWeight: 800, fontSize: 'clamp(42px,6.2vw,92px)', lineHeight: 0.95, letterSpacing: '-0.055em' }}>{p.hero.title}</Reveal>
                <Reveal as="span" order={2} style={{ fontSize: 'clamp(18px,1.7vw,21px)', lineHeight: 1.55, color: '#E6E6E6', maxWidth: 600 }}>{p.hero.lead}</Reveal>
                <Reveal order={3} style={{ display: 'flex', flexWrap: 'wrap', gap: 12 }}>
                  <a href={link} target="_blank" rel="noopener noreferrer" style={ctaGreen}>{p.hero.a}</a>
                  <a href="#recit" style={ctaGhost}>{p.hero.b}</a>
                </Reveal>
              </div>
              {desk ? (
                <div style={{ justifySelf: 'end', display: 'flex', flexDirection: 'column', gap: 10, width: 'min(100%, 340px)' }}>
                  {toasts.map((o) => (
                    <div key={o.i} data-toast={o.i} style={{ display: 'flex', gap: 12, alignItems: 'center', background: 'rgba(255,255,255,0.94)', backdropFilter: 'blur(12px)', WebkitBackdropFilter: 'blur(12px)', borderRadius: 16, padding: '14px 16px', boxShadow: '0 20px 40px rgba(4,4,5,0.25)', color: '#040405' }}>
                      <span style={{ flex: 'none', width: 40, height: 40, borderRadius: 11, display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, fontSize: 17, background: o.bg, color: o.fg }}>{o.g}</span>
                      <span style={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                        <strong style={{ fontFamily: JAKARTA, fontSize: 15 }}>{o.t}</strong>
                        <span style={{ fontSize: 13, color: '#58617B' }}>{o.d}</span>
                      </span>
                    </div>
                  ))}
                </div>
              ) : null}
            </div>
          </div>
        </section>
      ) : null}

      {isBank ? (
        <section style={{ padding: '12px 12px 0' }}>
          <div data-tiltzone="1" style={{ position: 'relative', maxWidth: 1440, margin: '0 auto', borderRadius: 32, overflow: 'hidden', background: '#00300A', color: '#FFFFFF' }}>
            <div data-glow="1" style={{ position: 'absolute', right: '-10%', top: '-20%', width: '80%', aspectRatio: '1', borderRadius: '50%', background: 'radial-gradient(circle,rgba(0,232,52,0.38) 0%,rgba(0,232,52,0) 62%)', pointerEvents: 'none' }} />
            <div style={{ position: 'relative', padding: 'clamp(40px,6vw,96px) clamp(24px,5vw,72px)', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 440px), 1fr))', gap: 56, alignItems: 'center' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
                <Reveal as="span" order={0} style={{ ...eyebrow, color: '#8AF4A2' }}>{p.hero.eyebrow}</Reveal>
                <Reveal as="span" order={1} style={{ fontFamily: JAKARTA, fontWeight: 800, fontSize: 'clamp(42px,6vw,88px)', lineHeight: 0.95, letterSpacing: '-0.055em' }}>{p.hero.title}</Reveal>
                <Reveal as="span" order={2} style={{ fontSize: 'clamp(18px,1.7vw,21px)', lineHeight: 1.55, color: '#B0F8C0', maxWidth: 560 }}>{p.hero.lead}</Reveal>
                <Reveal order={3} style={{ display: 'flex', flexWrap: 'wrap', gap: 12 }}>
                  <a href={link} target="_blank" rel="noopener noreferrer" style={ctaGreen}>{p.hero.a}</a>
                  <a href="#produits" style={ctaGhost}>{p.hero.b}</a>
                </Reveal>
                <Reveal as="span" order={4} style={{ fontSize: 15, color: '#8AF4A2' }}>{X.bx.heroNote}</Reveal>
              </div>
              <div style={{ position: 'relative', height: 'clamp(420px,44vw,600px)', perspective: 1200 }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img data-float="0" src={CLOUD_HOME} alt="AgroBank" style={{ position: 'absolute', right: 0, top: 0, height: '100%', width: 'auto', maxWidth: '100%', objectFit: 'contain', filter: 'drop-shadow(0 40px 60px rgba(0,0,0,0.45))' }} />
                <div data-float="1" style={{ position: 'absolute', left: 0, bottom: '6%', width: 'min(88%, 420px)' }}>
                  <BankCard label={X.bx.cardLabel} />
                </div>
                <div data-float="2" style={{ position: 'absolute', left: '4%', top: '8%', display: 'flex', gap: 12, alignItems: 'center', background: '#FFFFFF', color: '#040405', borderRadius: 16, padding: '12px 16px 12px 12px', boxShadow: '0 20px 40px rgba(0,0,0,0.3)' }}>
                  <span style={{ width: 38, height: 38, borderRadius: 10, background: '#00E834', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800 }}>✓</span>
                  <span style={{ display: 'flex', flexDirection: 'column' }}>
                    <strong style={{ fontFamily: JAKARTA, fontSize: 15 }}>{X.bx.toastT}</strong>
                    <span style={{ fontSize: 13, color: '#58617B' }}>{X.bx.toastD}</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
      ) : null}

      {isFaroya ? (
        <section style={{ padding: '12px 12px 0' }}>
          <div style={{ position: 'relative', maxWidth: 1440, margin: '0 auto', borderRadius: 32, overflow: 'hidden', background: '#040405', color: '#FFFFFF' }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img data-kb="1" src={img.hero} alt="" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', opacity: 0.45 }} />
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(90deg,rgba(4,4,5,0.96) 0%,rgba(4,4,5,0.75) 50%,rgba(4,4,5,0.35) 100%)' }} />
            <div style={{ position: 'relative', padding: 'clamp(40px,6vw,96px) clamp(24px,5vw,72px)', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 440px), 1fr))', gap: 56, alignItems: 'center' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
                <Reveal order={0} style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 12 }}>
                  <span style={{ ...eyebrow, color: '#8AF4A2' }}>{p.hero.eyebrow}</span>
                  <span style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase', color: '#040405', background: '#00E834', padding: '5px 8px', borderRadius: 6 }}>{ui.dev}</span>
                </Reveal>
                <Reveal as="span" order={1} style={{ fontFamily: JAKARTA, fontWeight: 800, fontSize: 'clamp(42px,6vw,88px)', lineHeight: 0.95, letterSpacing: '-0.055em' }}>{p.hero.title}</Reveal>
                <Reveal as="span" order={2} style={{ fontSize: 'clamp(18px,1.7vw,21px)', lineHeight: 1.55, color: '#C1C5D0', maxWidth: 560 }}>{p.hero.lead}</Reveal>
                <Reveal order={3} style={{ display: 'flex', flexWrap: 'wrap', gap: 12 }}>
                  <a href={link} target="_blank" rel="noopener noreferrer" style={ctaGreen}>{p.hero.a}</a>
                  <a href="#recit" style={ctaGhost}>{p.hero.b}</a>
                </Reveal>
              </div>
              <Reveal order={2} style={{ background: 'rgba(11,14,17,0.92)', backdropFilter: 'blur(16px)', WebkitBackdropFilter: 'blur(16px)', border: '1px solid #232731', borderRadius: 24, padding: 'clamp(16px,2vw,24px)', display: 'flex', flexDirection: 'column', gap: 16, boxShadow: '0 40px 80px rgba(0,0,0,0.5)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 12 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                    <span style={{ fontFamily: JAKARTA, fontWeight: 800, fontSize: 14, background: '#00E834', color: '#040405', padding: '6px 8px', borderRadius: 7 }}>CAC</span>
                    <span style={{ display: 'flex', flexDirection: 'column' }}>
                      <strong style={{ fontFamily: JAKARTA, fontSize: 17 }}>{X.fx.name}</strong>
                      <span style={{ fontSize: 13, color: '#868CA0' }}>FCFA / kg</span>
                    </span>
                  </div>
                  <span style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
                    <strong style={{ fontFamily: JAKARTA, fontSize: 22, fontVariantNumeric: 'tabular-nums' }}>{X.fx.price}</strong>
                    <span style={{ fontSize: 14, fontWeight: 700, color: '#00E834' }}>{X.fx.change}</span>
                  </span>
                </div>
                <div style={{ display: 'flex', gap: 6 }}>
                  {X.fx.tfs.map((label: string, i: number) => (
                    <button key={label} onClick={() => setTf(i)} style={{ border: 0, cursor: 'pointer', minHeight: 36, minWidth: 44, padding: '0 10px', borderRadius: 8, fontWeight: 700, fontSize: 13, background: i === tf ? '#00E834' : '#1A1A1A', color: i === tf ? '#040405' : '#C1C5D0' }}>{label}</button>
                  ))}
                </div>
                <svg viewBox="0 0 400 170" preserveAspectRatio="none" style={{ width: '100%', height: 'clamp(150px,16vw,200px)', display: 'block' }} aria-hidden="true">
                  <defs>
                    <linearGradient id="faroyaArea" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#00E834" stopOpacity="0.35" />
                      <stop offset="100%" stopColor="#00E834" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  <path d={chart.area} fill="url(#faroyaArea)" />
                  <path data-chartline="1" d={chart.line} fill="none" stroke="#00E834" strokeWidth="2.5" strokeLinejoin="round" strokeLinecap="round" vectorEffect="non-scaling-stroke" />
                </svg>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, minmax(0, 1fr))', gap: 12 }}>
                  <OrderColumn title={X.fx.bids} rows={book.bids} color="#00E834" bar="rgba(0,232,52,0.14)" />
                  <OrderColumn title={X.fx.asks} rows={book.asks} color="#F75555" bar="rgba(247,85,85,0.14)" />
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, minmax(0, 1fr))', gap: 10 }}>
                  <button style={{ border: 0, cursor: 'pointer', minHeight: 48, borderRadius: 12, background: '#00E834', color: '#040405', fontWeight: 800, fontSize: 15 }}>{X.fx.buy}</button>
                  <button style={{ border: 0, cursor: 'pointer', minHeight: 48, borderRadius: 12, background: '#F75555', color: '#040405', fontWeight: 800, fontSize: 15 }}>{X.fx.sell}</button>
                </div>
                <span style={{ fontSize: 12, color: '#868CA0', textAlign: 'center' }}>{X.fx.illus}</span>
              </Reveal>
            </div>
          </div>
        </section>
      ) : null}

      {/* ───────── LE BESOIN ───────── */}
      <section style={{ padding: 'clamp(72px,10vw,144px) 24px', background: '#040405', color: '#FFFFFF' }}>
        <div style={{ maxWidth: MAXW, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 'clamp(48px,6vw,80px)' }}>
          <h2 ref={manifestoRef} style={{ margin: 0, fontFamily: JAKARTA, fontWeight: 800, fontSize: 'clamp(34px,5vw,72px)', lineHeight: 1.04, letterSpacing: '-0.045em', maxWidth: 1100 }}>
            {needWords.map((word: string, i: number) => (
              <span key={i} data-w="1" style={{ opacity: 0.2, transition: 'opacity .25s linear' }}>{word}{' '}</span>
            ))}
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))', gap: 40 }}>
            {p.need.pains.map((x: { t: string; d: string }) => (
              <Reveal key={x.t} order={1} style={{ display: 'flex', flexDirection: 'column', gap: 10, paddingTop: 22, borderTop: '1px solid #353A4A' }}>
                <h3 style={{ margin: 0, fontFamily: JAKARTA, fontWeight: 700, fontSize: 22, letterSpacing: '-0.02em', color: '#00E834' }}>{x.t}</h3>
                <p style={{ margin: 0, fontSize: 17, lineHeight: 1.55, color: '#C1C5D0' }}>{x.d}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ───────── MARKETS (faroya) ───────── */}
      {isFaroya && p.markets ? (
        <section style={{ padding: 'clamp(64px,8vw,112px) 0', background: '#040405', color: '#FFFFFF', overflow: 'hidden' }}>
          <div style={{ maxWidth: MAXW, margin: '0 auto 32px', padding: '0 24px', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'baseline', gap: 12 }}>
            <h2 style={{ margin: 0, fontFamily: JAKARTA, fontWeight: 800, fontSize: 'clamp(32px,4vw,52px)', letterSpacing: '-0.04em' }}>{p.markets.title}</h2>
            <span style={{ fontSize: 15, color: '#868CA0', maxWidth: 420 }}>{p.markets.note}</span>
          </div>
          <Marquee durationMs={40000} style={{ gap: 12, padding: '0 24px' }}>
            {tickers.map((k, i) => (
              <div key={i} style={{ flex: 'none', width: 250, background: '#1A1A1A', border: '1px solid #232731', borderRadius: 18, padding: 20, display: 'flex', flexDirection: 'column', gap: 14 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontFamily: JAKARTA, fontWeight: 800, fontSize: 14, background: '#232731', color: '#FFFFFF', padding: '5px 8px', borderRadius: 6 }}>{k.c}</span>
                  <span style={{ fontWeight: 800, fontSize: 14, color: '#00E834' }}>▲ {k.ch}</span>
                </div>
                <span style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', gap: 8 }}>
                  <strong style={{ fontFamily: JAKARTA, fontSize: 18, letterSpacing: '-0.02em' }}>{k.n}</strong>
                  <span style={{ fontWeight: 700, fontSize: 16, fontVariantNumeric: 'tabular-nums' }}>{k.pr}</span>
                </span>
                <svg viewBox="0 0 200 48" style={{ width: '100%', height: 48 }} aria-hidden="true">
                  <path d={k.path} fill="none" stroke="#00E834" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            ))}
          </Marquee>
        </section>
      ) : null}

      {/* ───────── SUITE (agrobank / faroya) ───────── */}
      {p.suite ? (
        <section id="produits" style={{ scrollMarginTop: 110, padding: 'clamp(72px,10vw,144px) 24px' }}>
          <div style={{ maxWidth: MAXW, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 48 }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 20, maxWidth: 860 }}>
              <Reveal as="span" order={0} style={eyebrow}>{p.nav}</Reveal>
              <Reveal as="span" order={1} style={{ fontFamily: JAKARTA, fontWeight: 800, fontSize: 'clamp(38px,5.4vw,80px)', lineHeight: 0.98, letterSpacing: '-0.05em' }}>{p.suite.title}</Reveal>
              <Reveal as="span" order={2} style={{ fontSize: 'clamp(18px,1.8vw,21px)', lineHeight: 1.55, color: '#464E62' }}>{p.suite.lead}</Reveal>
            </div>
            <Reveal order={1} style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
              {p.suite.products.map((pr: { name: string }, i: number) => {
                const on = i === prod;
                return (
                  <button key={pr.name} onClick={() => setProd(i)} style={{ cursor: 'pointer', minHeight: 48, padding: '0 18px', borderRadius: 12, fontWeight: 700, fontSize: 15, border: `1.5px solid ${on ? '#040405' : '#C1C5D0'}`, background: on ? '#040405' : '#FFFFFF', color: on ? '#FFFFFF' : '#040405', transition: 'background .3s ease, color .3s ease' }}>{pr.name}</button>
                );
              })}
            </Reveal>
            <div style={{ display: 'grid' }}>
              {p.suite.products.map((pr: { name: string; t: string; d: string; list: string[] }, i: number) => {
                const on = i === prod;
                return (
                  <div key={pr.name} style={{ gridArea: '1 / 1', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 420px), 1fr))', gap: '40px 72px', alignItems: 'center', background: '#EEF0F4', borderRadius: 32, padding: 'clamp(24px,4vw,56px)', opacity: on ? 1 : 0, transform: on ? 'none' : 'translateY(14px)', pointerEvents: on ? 'auto' : 'none', transition: 'opacity .5s ease, transform .5s ease' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
                      <span style={{ ...eyebrow, fontSize: 14, letterSpacing: '0.1em' }}>{String(i + 1).padStart(2, '0')} · {pr.name}</span>
                      <h3 style={{ margin: 0, fontFamily: JAKARTA, fontWeight: 800, fontSize: 'clamp(28px,3.2vw,44px)', lineHeight: 1.06, letterSpacing: '-0.035em' }}>{pr.t}</h3>
                      <p style={{ margin: 0, fontSize: 18, lineHeight: 1.55, color: '#464E62' }}>{pr.d}</p>
                      <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', borderTop: '1px solid #C1C5D0' }}>
                        {pr.list.map((li) => (
                          <li key={li} style={{ display: 'flex', gap: 14, alignItems: 'baseline', padding: '14px 0', borderBottom: '1px solid #C1C5D0', fontSize: 17, color: '#232731' }}>
                            <span style={{ flex: 'none', width: 12, height: 2, background: '#00A525', transform: 'translateY(-4px)' }} />
                            {li}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div style={{ borderRadius: 24, overflow: 'hidden', aspectRatio: '4 / 3', background: isFaroya ? '#C1C5D0' : '#E6FDEB' }}>
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={img.products[i]} alt={pr.name} loading="lazy" style={{ width: '100%', height: '100%', objectFit: isFaroya ? 'cover' : 'contain' }} />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      ) : null}

      {/* ───────── BANK EXTRAS ───────── */}
      {isBank ? <BankExtras bx={X.bx} /> : null}

      {/* ───────── TRUST ───────── */}
      {p.trust ? (
        <section style={{ padding: '0 24px clamp(72px,10vw,144px)' }}>
          <div style={{ maxWidth: MAXW, margin: '0 auto', borderRadius: 32, background: '#00300A', color: '#FFFFFF', padding: 'clamp(32px,5vw,72px)', display: 'flex', flexDirection: 'column', gap: 40 }}>
            <Reveal as="span" order={0} style={{ fontFamily: JAKARTA, fontWeight: 800, fontSize: 'clamp(32px,4.2vw,58px)', lineHeight: 1, letterSpacing: '-0.045em', maxWidth: 820 }}>{p.trust.title}</Reveal>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 230px), 1fr))', gap: 32 }}>
              {p.trust.items.map((x: { t: string; d: string }) => (
                <Reveal key={x.t} order={1} style={{ display: 'flex', flexDirection: 'column', gap: 8, paddingTop: 20, borderTop: '1px solid #006116' }}>
                  <strong style={{ fontFamily: JAKARTA, fontSize: 20, color: '#00E834' }}>{x.t}</strong>
                  <span style={{ fontSize: 16, lineHeight: 1.55, color: '#B0F8C0' }}>{x.d}</span>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      {/* ───────── STORY ───────── */}
      <section id="recit" style={{ scrollMarginTop: 110, padding: 'clamp(72px,10vw,144px) 24px 0', borderTop: '1px solid #EEF0F4' }}>
        <div style={{ maxWidth: MAXW, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 20 }}>
          <Reveal order={0} style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 12 }}>
            <span style={eyebrow}>{ui.story}</span>
            <span style={{ fontSize: 13, fontWeight: 600, color: '#58617B', border: '1px solid #C1C5D0', padding: '4px 8px', borderRadius: 6 }}>{ui.illustrative}</span>
          </Reveal>
          <Reveal as="span" order={1} style={{ fontFamily: JAKARTA, fontWeight: 800, fontSize: 'clamp(38px,5.4vw,80px)', lineHeight: 0.98, letterSpacing: '-0.05em', maxWidth: 1000 }}>{p.story.title}</Reveal>
          <Reveal as="span" order={2} style={{ fontSize: 'clamp(18px,1.8vw,21px)', lineHeight: 1.55, color: '#464E62', maxWidth: 640 }}>{p.story.intro}</Reveal>
        </div>
        {desk ? (
          <div style={{ maxWidth: MAXW, margin: '0 auto', paddingBottom: 'clamp(64px,8vw,112px)', display: 'grid', gridTemplateColumns: 'minmax(0,1fr) minmax(0,1.15fr)', gap: 72 }}>
            <div>
              {p.story.steps.map((s: { t: string; d: string }, i: number) => (
                <div key={i} data-feat={i} style={{ minHeight: '72vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 14, opacity: i === feat ? 1 : 0.25, transition: 'opacity .5s ease' }}>
                  <span style={{ ...eyebrow, fontSize: 14, letterSpacing: '0.1em' }}>{ui.chapter} {String(i + 1).padStart(2, '0')} / {String(p.story.steps.length).padStart(2, '0')}</span>
                  <h3 style={{ margin: 0, fontFamily: JAKARTA, fontWeight: 800, fontSize: 'clamp(30px,3.2vw,46px)', lineHeight: 1.04, letterSpacing: '-0.035em' }}>{s.t}</h3>
                  <p style={{ margin: 0, fontSize: 19, lineHeight: 1.6, color: '#464E62', maxWidth: 470 }}>{s.d}</p>
                </div>
              ))}
            </div>
            <div style={{ position: 'relative' }}>
              <div style={{ position: 'sticky', top: 130, height: 'calc(100vh - 170px)', maxHeight: 740, borderRadius: 32, background: '#E6FDEB', overflow: 'hidden' }}>
                {p.story.steps.map((s: { t: string }, i: number) => {
                  const src = img.story[i % img.story.length];
                  const photo = /\.(jpe?g)$/i.test(src) || src.includes('/farmers/');
                  return (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img key={i} src={src} alt={s.t} style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: photo ? 'cover' : 'contain', padding: photo ? 0 : 20, opacity: i === feat ? 1 : 0, transform: i === feat ? 'scale(1)' : i < feat ? 'translateY(-28px) scale(.96)' : 'translateY(28px) scale(.96)', transition: 'opacity .6s ease, transform .9s cubic-bezier(.2,.7,.2,1)' }} />
                  );
                })}
                <div style={{ position: 'absolute', left: 24, right: 24, bottom: 24, display: 'flex', gap: 6 }}>
                  {p.story.steps.map((_: unknown, i: number) => (
                    <span key={i} style={{ flex: 1, height: 4, borderRadius: 2, background: i <= feat ? '#00A525' : '#B0F8C0', transition: 'background .4s ease' }} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div style={{ maxWidth: MAXW, margin: '0 auto', padding: '48px 0 72px', display: 'flex', flexDirection: 'column', gap: 56 }}>
            {p.story.steps.map((s: { t: string; d: string }, i: number) => {
              const src = img.story[i % img.story.length];
              const photo = /\.(jpe?g)$/i.test(src) || src.includes('/farmers/');
              return (
                <Reveal key={i} style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                  <div style={{ borderRadius: 24, background: '#E6FDEB', aspectRatio: '4 / 3', overflow: 'hidden' }}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={src} alt={s.t} loading="lazy" style={{ width: '100%', height: '100%', objectFit: photo ? 'cover' : 'contain' }} />
                  </div>
                  <span style={{ ...eyebrow, fontSize: 13, letterSpacing: '0.1em', paddingTop: 8 }}>{ui.chapter} {String(i + 1).padStart(2, '0')}</span>
                  <h3 style={{ margin: 0, fontFamily: JAKARTA, fontWeight: 800, fontSize: 28, letterSpacing: '-0.03em' }}>{s.t}</h3>
                  <p style={{ margin: 0, fontSize: 17, lineHeight: 1.55, color: '#464E62' }}>{s.d}</p>
                </Reveal>
              );
            })}
          </div>
        )}
      </section>

      {/* ───────── FEATURES ───────── */}
      <section style={{ padding: 'clamp(72px,10vw,144px) 24px', background: '#EEF0F4' }}>
        <div style={{ maxWidth: MAXW, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 56 }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 18, maxWidth: 860 }}>
            <Reveal as="span" order={0} style={eyebrow}>{ui.features}</Reveal>
            <Reveal as="span" order={1} style={{ fontFamily: JAKARTA, fontWeight: 800, fontSize: 'clamp(36px,5vw,72px)', lineHeight: 1, letterSpacing: '-0.05em' }}>{p.features.title}</Reveal>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))', gap: 16 }}>
            {p.features.items.map((f: { t: string; d: string }, i: number) => (
              <Reveal key={f.t} order={1} className="f2m-hover-lift" style={{ background: '#FFFFFF', borderRadius: 24, padding: 30, display: 'flex', flexDirection: 'column', gap: 14, minHeight: 220 }}>
                <span style={{ fontFamily: JAKARTA, fontWeight: 800, fontSize: 15, color: '#00A525' }}>{String(i + 1).padStart(2, '0')}</span>
                <h3 style={{ margin: 'auto 0 0', fontFamily: JAKARTA, fontWeight: 700, fontSize: 23, lineHeight: 1.15, letterSpacing: '-0.02em' }}>{f.t}</h3>
                <p style={{ margin: 0, fontSize: 16, lineHeight: 1.55, color: '#464E62' }}>{f.d}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ───────── USE CASES ───────── */}
      <section style={{ padding: 'clamp(72px,10vw,144px) 24px' }}>
        <div style={{ maxWidth: MAXW, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 56 }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 18, maxWidth: 860 }}>
            <Reveal as="span" order={0} style={eyebrow}>{ui.cases}</Reveal>
            <Reveal as="span" order={1} style={{ fontFamily: JAKARTA, fontWeight: 800, fontSize: 'clamp(36px,5vw,72px)', lineHeight: 1, letterSpacing: '-0.05em' }}>{p.cases.title}</Reveal>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', borderTop: '2px solid #040405' }}>
            {p.cases.items.map((c: { who: string; s: string; w: string }) => (
              <Reveal key={c.who + c.s} style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 260px), 1fr))', gap: '16px 48px', padding: '32px 0', borderBottom: '1px solid #C1C5D0' }}>
                <strong style={{ fontFamily: JAKARTA, fontWeight: 800, fontSize: 'clamp(24px,2.4vw,32px)', letterSpacing: '-0.03em' }}>{c.who}</strong>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                  <span style={{ fontSize: 13, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#868CA0' }}>{ui.situation}</span>
                  <span style={{ fontSize: 17, lineHeight: 1.55, color: '#58617B' }}>{c.s}</span>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                  <span style={{ fontSize: 13, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#00801D' }}>{ui.withF2M}</span>
                  <span style={{ fontSize: 17, lineHeight: 1.55, color: '#040405', fontWeight: 600 }}>{c.w}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ───────── CONNECTED ───────── */}
      <section style={{ padding: '0 24px clamp(72px,10vw,144px)' }}>
        <div style={{ maxWidth: MAXW, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 28 }}>
          <h2 style={{ margin: 0, fontFamily: JAKARTA, fontWeight: 800, fontSize: 'clamp(26px,3vw,38px)', letterSpacing: '-0.03em' }}>{ui.connected}</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 240px), 1fr))', gap: 12 }}>
            {ORDER.filter((k) => k !== slug).map((k) => (
              <a key={k} href={withLocale(lang, `/solutions/${k}`)} className="f2m-hover-lift" style={{ textAlign: 'left', display: 'flex', flexDirection: 'column', gap: 10, padding: 24, borderRadius: 20, border: '1.5px solid #C1C5D0', background: '#FFFFFF', color: '#040405', minHeight: 150 }}>
                <strong style={{ fontFamily: JAKARTA, fontSize: 21, letterSpacing: '-0.02em' }}>{L.pages[k].nav}</strong>
                <span style={{ fontSize: 15, lineHeight: 1.45, color: '#58617B' }}>{L.pages[k].short}</span>
                <span style={{ marginTop: 'auto', fontWeight: 700, fontSize: 15, color: '#00801D' }}>{ui.more} →</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ───────── FAQ ───────── */}
      <section style={{ padding: 'clamp(72px,9vw,128px) 24px', background: '#EEF0F4' }}>
        <div style={{ maxWidth: MAXW, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 360px), 1fr))', gap: '40px 80px', alignItems: 'start' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
            <span style={eyebrow}>FAQ</span>
            <h2 style={{ margin: 0, fontFamily: JAKARTA, fontWeight: 800, fontSize: 'clamp(34px,4.4vw,56px)', lineHeight: 1, letterSpacing: '-0.045em' }}>{ui.faq}</h2>
            <a href="mailto:support@farmstomarket.io" style={{ fontWeight: 700, color: '#006116', paddingTop: 6 }}>support@farmstomarket.io →</a>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', borderTop: '1px solid #C1C5D0' }}>
            {p.faq.map((f: { q: string; a: string }, i: number) => {
              const isOpen = open === i;
              return (
                <div key={f.q} style={{ borderBottom: '1px solid #C1C5D0' }}>
                  <button onClick={() => setOpen(isOpen ? -1 : i)} style={{ width: '100%', border: 0, background: 'transparent', cursor: 'pointer', display: 'flex', alignItems: 'flex-start', gap: 20, textAlign: 'left', padding: '22px 0', color: '#040405' }}>
                    <span style={{ flex: 1, fontFamily: JAKARTA, fontWeight: 700, fontSize: 19, lineHeight: 1.35 }}>{f.q}</span>
                    <span style={{ flex: 'none', fontSize: 26, lineHeight: 1, transform: isOpen ? 'rotate(45deg)' : 'none', transition: 'transform .35s ease' }}>+</span>
                  </button>
                  <div style={{ display: 'grid', gridTemplateRows: isOpen ? '1fr' : '0fr', transition: 'grid-template-rows .4s ease' }}>
                    <div style={{ overflow: 'hidden' }}>
                      <p style={{ margin: 0, padding: '0 40px 24px 0', fontSize: 17, lineHeight: 1.6, color: '#464E62' }}>{f.a}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ───────── CTA ───────── */}
      <section id="cta" style={{ scrollMarginTop: 110, padding: 'clamp(72px,9vw,128px) 24px' }}>
        <Reveal style={{ maxWidth: MAXW, margin: '0 auto', borderRadius: 32, background: '#00E834', padding: 'clamp(40px,6vw,88px)', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'flex-end', gap: '32px 56px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 18, maxWidth: 760 }}>
            <h2 style={{ margin: 0, fontFamily: JAKARTA, fontWeight: 800, fontSize: 'clamp(38px,5.6vw,80px)', lineHeight: 0.98, letterSpacing: '-0.05em' }}>{p.cta.title}</h2>
            <p style={{ margin: 0, fontSize: 19, lineHeight: 1.5, color: '#00300A' }}>{p.cta.text}</p>
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12 }}>
            <a href={link} target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', minHeight: 58, padding: '0 26px', borderRadius: 14, background: '#040405', color: '#FFFFFF', fontWeight: 700, fontSize: 17 }}>{linkLabel}</a>
            <a href="mailto:contact@farmstomarket.io" style={{ display: 'flex', alignItems: 'center', minHeight: 58, padding: '0 26px', borderRadius: 14, border: '1.5px solid #040405', color: '#040405', fontWeight: 700, fontSize: 17 }}>{ui.contact}</a>
          </div>
        </Reveal>
      </section>
    </div>
  );
}

/* ── style tokens ───────────────────────────────────────────── */
const ctaGreen: CSSProperties = { display: 'flex', alignItems: 'center', minHeight: 56, padding: '0 26px', borderRadius: 14, background: '#00E834', color: '#040405', fontWeight: 700, fontSize: 17 };
const ctaGhost: CSSProperties = { display: 'flex', alignItems: 'center', minHeight: 56, padding: '0 26px', borderRadius: 14, border: '1.5px solid #FFFFFF', color: '#FFFFFF', fontWeight: 700, fontSize: 17 };

/* ── order-book column (faroya) ─────────────────────────────── */
function OrderColumn({ title, rows, color, bar }: { title: string; rows: { p: string; q: string; w: string }[]; color: string; bar: string }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
      <span style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#868CA0', paddingBottom: 4 }}>{title}</span>
      {rows.map((r, i) => (
        <div key={i} style={{ position: 'relative', display: 'flex', justifyContent: 'space-between', fontSize: 13, fontVariantNumeric: 'tabular-nums', padding: '4px 6px', borderRadius: 4, overflow: 'hidden' }}>
          <span data-bookbar="1" style={{ position: 'absolute', right: 0, top: 0, bottom: 0, width: r.w, background: bar, transition: 'width .6s ease' }} />
          <span style={{ position: 'relative', color, fontWeight: 700 }}>{r.p}</span>
          <span style={{ position: 'relative', color: '#C1C5D0' }}>{r.q}</span>
        </div>
      ))}
    </div>
  );
}

/* ── AgroBank virtual card ──────────────────────────────────── */
function BankCard({ label }: { label: string }) {
  return (
    <div data-card="1" style={{ position: 'relative', width: '100%', aspectRatio: '1.586', borderRadius: 22, overflow: 'hidden', background: 'linear-gradient(135deg,#1A1A1A 0%,#040405 52%,#006116 135%)', boxShadow: '0 40px 80px rgba(0,0,0,0.45), inset 0 0 0 1px rgba(255,255,255,0.08)', transition: 'transform .25s ease-out', color: '#FFFFFF' }}>
      <div data-shine="1" style={{ position: 'absolute', inset: '-40%', background: 'radial-gradient(circle at 30% 30%,rgba(255,255,255,0.22),rgba(255,255,255,0) 38%)', pointerEvents: 'none', transition: 'transform .25s ease-out' }} />
      <div style={{ position: 'relative', height: '100%', padding: 'clamp(16px,2.4vw,26px)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span style={{ display: 'flex', alignItems: 'center', gap: 8, fontFamily: JAKARTA, fontWeight: 800, fontSize: 'clamp(15px,1.6vw,20px)', letterSpacing: '-0.02em' }}>
            <span style={{ width: 10, height: 10, borderRadius: 3, background: '#00E834' }} />AgroBank
          </span>
        </div>
        <span style={{ width: 'clamp(34px,4vw,46px)', aspectRatio: '1.3', borderRadius: 7, background: 'linear-gradient(135deg,#E6E6E6 0%,#999999 100%)' }} />
        <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
          <span style={{ fontFamily: 'ui-monospace, Menlo, monospace', fontSize: 'clamp(13px,1.5vw,17px)', letterSpacing: '0.18em', color: '#E6E6E6' }}>•••• •••• •••• 2048</span>
          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 12, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#A3A8B7' }}>
            <span>Farms to Market</span>
            <span>{label}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ── AgroBank-only sections: Credit, Insure, Payments ───────── */
type Bx = {
  heroNote: string; toastT: string; toastD: string;
  creditTitle: string; creditText: string; legendA: string; legendB: string; months: string[];
  insureTitle: string; insureText: string; insureList: string[]; chipA: string; chipB: string;
  payEyebrow: string; payTitle: string; payText: string; payChips: string[]; cardLabel: string;
};

function BankExtras({ bx }: { bx: Bx }) {
  const months = bx.months.map((l, i) => {
    const v = INCOME[i];
    return { l, h: v + '%', c: v > 60 ? '#00E834' : '#B0F8C0', delay: i * 60 + 'ms', repay: v > 60, rh: Math.round(v * 0.35) + '%', delay2: i * 60 + 500 + 'ms' };
  });
  return (
    <>
      {/* AgroCredit */}
      <section style={{ padding: 'clamp(72px,10vw,144px) 24px', background: '#EEF0F4' }}>
        <div style={{ maxWidth: MAXW, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 420px), 1fr))', gap: '48px 80px', alignItems: 'center' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 22 }}>
            <Reveal as="span" order={0} style={eyebrow}>AgroCredit</Reveal>
            <Reveal as="span" order={1} style={{ fontFamily: JAKARTA, fontWeight: 800, fontSize: 'clamp(36px,4.8vw,68px)', lineHeight: 1, letterSpacing: '-0.05em' }}>{bx.creditTitle}</Reveal>
            <Reveal as="span" order={2} style={{ fontSize: 19, lineHeight: 1.55, color: '#464E62' }}>{bx.creditText}</Reveal>
          </div>
          <Reveal order={1} style={{ background: '#FFFFFF', borderRadius: 28, padding: 'clamp(20px,3vw,36px)', display: 'flex', flexDirection: 'column', gap: 24 }}>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px 24px', fontSize: 14, fontWeight: 600, color: '#353A4A' }}>
              <span style={{ display: 'flex', alignItems: 'center', gap: 8 }}><span style={{ width: 12, height: 12, borderRadius: 3, background: '#00E834' }} />{bx.legendA}</span>
              <span style={{ display: 'flex', alignItems: 'center', gap: 8 }}><span style={{ width: 12, height: 12, borderRadius: 3, background: '#040405' }} />{bx.legendB}</span>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(12, minmax(0, 1fr))', gap: 'clamp(4px,0.8vw,10px)', alignItems: 'end', height: 'clamp(200px,22vw,280px)' }}>
              {months.map((m, i) => (
                <div key={i} style={{ position: 'relative', height: '100%', display: 'flex', alignItems: 'flex-end' }}>
                  <span data-bar="1" style={{ display: 'block', width: '100%', height: m.h, background: m.c, borderRadius: '8px 8px 3px 3px', transform: 'scaleY(0)', transformOrigin: 'bottom', transition: `transform 1.1s cubic-bezier(.2,.8,.2,1) ${m.delay}` }} />
                  {m.repay ? <span data-bar="1" style={{ position: 'absolute', left: '22%', right: '22%', bottom: 0, height: m.rh, background: '#040405', borderRadius: '6px 6px 2px 2px', transform: 'scaleY(0)', transformOrigin: 'bottom', transition: `transform 1s cubic-bezier(.2,.8,.2,1) ${m.delay2}` }} /> : null}
                </div>
              ))}
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(12, minmax(0, 1fr))', gap: 'clamp(4px,0.8vw,10px)', marginTop: -12 }}>
              {months.map((m, i) => (
                <span key={i} style={{ fontSize: 12, fontWeight: 600, color: '#58617B', textAlign: 'center' }}>{m.l}</span>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* AgroInsure */}
      <section style={{ padding: 'clamp(72px,10vw,144px) 24px' }}>
        <div style={{ maxWidth: MAXW, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 420px), 1fr))', gap: '48px 80px', alignItems: 'center' }}>
          <Reveal order={1} style={{ position: 'relative', borderRadius: 32, overflow: 'hidden', aspectRatio: '4 / 3', background: '#232731' }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="https://faroya.farmstomarket.io/green-farmland.jpg" alt="" loading="lazy" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
            <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,48,10,0.28)' }} />
            <svg viewBox="0 0 400 300" preserveAspectRatio="none" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }} aria-hidden="true">
              <polygon data-parcel="1" points="40,60 170,40 190,140 60,160" fill="rgba(0,232,52,0.16)" stroke="#00E834" strokeWidth="2" />
              <polygon data-parcel="1" points="210,50 350,70 330,170 200,150" fill="rgba(0,232,52,0.16)" stroke="#00E834" strokeWidth="2" />
              <polygon data-parcel="1" points="70,190 230,175 250,265 90,275" fill="rgba(0,232,52,0.16)" stroke="#00E834" strokeWidth="2" />
            </svg>
            <div data-scan="1" style={{ position: 'absolute', left: 0, right: 0, top: 0, height: 2, background: '#00E834', boxShadow: '0 0 24px 6px rgba(0,232,52,0.55)' }} />
            <span style={{ position: 'absolute', left: 16, top: 16, display: 'flex', alignItems: 'center', gap: 8, background: '#FFFFFF', color: '#040405', fontWeight: 700, fontSize: 14, padding: '10px 14px', borderRadius: 10 }}>
              <span data-pulse="1" style={{ width: 8, height: 8, borderRadius: '50%', background: '#00A525' }} />{bx.chipA}
            </span>
            <span style={{ position: 'absolute', left: 16, bottom: 16, background: '#040405', color: '#FFFFFF', fontWeight: 700, fontSize: 14, padding: '10px 14px', borderRadius: 10 }}>{bx.chipB}</span>
          </Reveal>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 22 }}>
            <Reveal as="span" order={0} style={eyebrow}>AgroInsure</Reveal>
            <Reveal as="span" order={1} style={{ fontFamily: JAKARTA, fontWeight: 800, fontSize: 'clamp(36px,4.8vw,68px)', lineHeight: 1, letterSpacing: '-0.05em' }}>{bx.insureTitle}</Reveal>
            <Reveal as="span" order={2} style={{ fontSize: 19, lineHeight: 1.55, color: '#464E62' }}>{bx.insureText}</Reveal>
            <Reveal as="li" order={3} style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', borderTop: '1px solid #C1C5D0', margin: 0, padding: 0 }}>
              {bx.insureList.map((li) => (
                <span key={li} style={{ display: 'flex', gap: 14, alignItems: 'baseline', padding: '14px 0', borderBottom: '1px solid #C1C5D0', fontSize: 17, color: '#232731' }}>
                  <span style={{ flex: 'none', width: 12, height: 2, background: '#00A525', transform: 'translateY(-4px)' }} />{li}
                </span>
              ))}
            </Reveal>
          </div>
        </div>
      </section>

      {/* Payments */}
      <section style={{ padding: 'clamp(72px,10vw,144px) 24px', background: '#040405', color: '#FFFFFF', overflow: 'hidden' }}>
        <div style={{ maxWidth: MAXW, margin: '0 auto', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: 24 }}>
          <Reveal as="span" order={0} style={{ ...eyebrow, color: '#8AF4A2' }}>{bx.payEyebrow}</Reveal>
          <Reveal as="span" order={1} style={{ fontFamily: JAKARTA, fontWeight: 800, fontSize: 'clamp(38px,5.6vw,84px)', lineHeight: 0.98, letterSpacing: '-0.05em', maxWidth: 960 }}>{bx.payTitle}</Reveal>
          <Reveal as="span" order={2} style={{ fontSize: 19, lineHeight: 1.55, color: '#C1C5D0', maxWidth: 640 }}>{bx.payText}</Reveal>
          <div style={{ position: 'relative', width: '100%', height: 'clamp(320px,34vw,440px)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            {[0, 1, 2].map((i) => (
              <span key={i} data-ripple={i} style={{ position: 'absolute', width: 220, height: 220, borderRadius: '50%', border: '1.5px solid #00E834' }} />
            ))}
            <div data-float="3" style={{ position: 'relative', width: 'min(80%, 340px)', transform: 'rotate(-8deg)' }}>
              <BankCard label={bx.cardLabel} />
            </div>
          </div>
          <Reveal order={1} style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 10 }}>
            {bx.payChips.map((c) => (
              <span key={c} style={{ fontWeight: 700, fontSize: 15, padding: '12px 18px', borderRadius: 12, border: '1.5px solid #353A4A', color: '#FFFFFF' }}>{c}</span>
            ))}
          </Reveal>
        </div>
      </section>
    </>
  );
}
