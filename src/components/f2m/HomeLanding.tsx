'use client';

import React, { useEffect, useRef, useState, type CSSProperties } from 'react';
import { withLocale } from '@/i18n/routing';
import type { Language } from '@/types/i18n';
import {
  T,
  PLAY,
  MOD_IMG,
  ACTOR_SLUGS,
  ACTOR_IMG,
  GAL_IMG,
  LAYER_BG,
  LAYER_FG,
  HERO_IMG,
} from '@/content/home';
import { Reveal, Marquee, useWidth, useReducedMotion, clamp01, JAKARTA } from './primitives';

const MAXW = 1320;
const eyebrow: CSSProperties = {
  fontSize: 14,
  fontWeight: 700,
  letterSpacing: '0.14em',
  textTransform: 'uppercase',
  color: '#00801D',
};

export default function HomeLanding({ lang }: { lang: Language }) {
  const t = T[lang];
  const w = useWidth();
  const reduce = useReducedMotion();
  const desk = w >= 900;

  const [feat, setFeat] = useState(0);
  const [layer, setLayer] = useState(0);
  const [actor, setActor] = useState(0);
  const [faqCat, setFaqCat] = useState(-1);
  const [open, setOpen] = useState(0);

  const rootRef = useRef<HTMLDivElement | null>(null);
  const heroRef = useRef<HTMLDivElement | null>(null);
  const manifestoRef = useRef<HTMLParagraphElement | null>(null);
  const tlRef = useRef<HTMLDivElement | null>(null);
  const tlFillRef = useRef<HTMLSpanElement | null>(null);

  /* scroll-driven effects: hero parallax, manifesto words, timeline fill */
  useEffect(() => {
    if (reduce) {
      manifestoRef.current
        ?.querySelectorAll<HTMLElement>('[data-w]')
        .forEach((el) => (el.style.opacity = '1'));
      return;
    }
    let ticking = false;
    const run = () => {
      ticking = false;
      const vh = window.innerHeight;
      const sy = window.scrollY;

      const hero = heroRef.current;
      if (hero) {
        const p = clamp01(sy / (vh * 0.7));
        hero.style.width = 88 + 12 * p + '%';
        hero.style.borderRadius = 28 * (1 - p) + 'px';
      }

      const man = manifestoRef.current;
      if (man) {
        const r = man.getBoundingClientRect();
        const p = clamp01((vh * 0.85 - r.top) / (r.height + vh * 0.35));
        const ws = man.querySelectorAll<HTMLElement>('[data-w]');
        ws.forEach((el, i) => {
          el.style.opacity = (i + 1) / ws.length <= p + 0.001 ? '1' : '0.16';
        });
      }

      const tl = tlRef.current;
      if (tl) {
        const r = tl.getBoundingClientRect();
        const line = vh * 0.6;
        const p = clamp01((line - r.top) / r.height);
        if (tlFillRef.current) tlFillRef.current.style.height = `calc(${p * 100}% - 16px)`;
        tl.querySelectorAll<HTMLElement>('[data-step]').forEach((st) => {
          const on = st.getBoundingClientRect().top < line;
          const dot = st.querySelector<HTMLElement>('[data-dot]');
          if (dot) {
            dot.style.background = on ? '#00E834' : '#FFFFFF';
            dot.style.borderColor = on ? '#00A525' : '#C1C5D0';
          }
        });
      }
    };
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(run);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    run();
    return () => window.removeEventListener('scroll', onScroll);
  }, [reduce]);

  /* product sticky: which module is centered in the viewport */
  useEffect(() => {
    if (!desk) return;
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) setFeat(Number((e.target as HTMLElement).dataset.feat));
        }),
      { rootMargin: '-45% 0px -45% 0px' },
    );
    rootRef.current?.querySelectorAll('[data-feat]').forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [desk]);

  /* decorative WAAPI motion (floats, glow, chart draw, ken burns, tilt) */
  useEffect(() => {
    if (reduce) return;
    const root = rootRef.current;
    if (!root) return;
    const anims: Animation[] = [];
    const once = (sel: string, fn: (el: HTMLElement) => void) =>
      root.querySelectorAll<HTMLElement>(sel).forEach((el) => {
        if (el.dataset.m) return;
        el.dataset.m = '1';
        fn(el);
      });

    once('[data-kb]', (el) =>
      anims.push(
        el.animate([{ transform: 'scale(1.12)' }, { transform: 'scale(1)' }], {
          duration: 2400,
          easing: 'cubic-bezier(.2,.7,.2,1)',
          fill: 'both',
        }),
      ),
    );
    once('[data-float]', (el) => {
      const i = Number(el.dataset.float);
      anims.push(
        el.animate([{ translate: '0 0' }, { translate: `0 ${-8 - i * 2}px` }, { translate: '0 0' }], {
          duration: 4400 + i * 700,
          iterations: Infinity,
          easing: 'ease-in-out',
          delay: i * 300,
        }),
      );
    });
    once('[data-glow]', (el) =>
      anims.push(
        el.animate(
          [
            { transform: 'scale(.9)', opacity: 0.7 },
            { transform: 'scale(1.08)', opacity: 1 },
            { transform: 'scale(.9)', opacity: 0.7 },
          ],
          { duration: 7000, iterations: Infinity, easing: 'ease-in-out' },
        ),
      ),
    );
    once('[data-chartline]', (el) => {
      const path = el as unknown as SVGPathElement;
      const L = path.getTotalLength();
      path.style.strokeDasharray = String(L);
      path.style.strokeDashoffset = String(L);
      const io = new IntersectionObserver((es) =>
        es.forEach((e) => {
          if (!e.isIntersecting) return;
          io.disconnect();
          anims.push(
            path.animate([{ strokeDashoffset: L }, { strokeDashoffset: 0 }], {
              duration: 1800,
              easing: 'cubic-bezier(.2,.7,.2,1)',
              fill: 'forwards',
            }),
          );
        }),
      );
      io.observe(path);
    });
    once('[data-tiltzone]', (zone) => {
      const move = (e: MouseEvent) => {
        const r = zone.getBoundingClientRect();
        const x = (e.clientX - r.left) / r.width - 0.5;
        const y = (e.clientY - r.top) / r.height - 0.5;
        zone.querySelectorAll<HTMLElement>('[data-card]').forEach((c) => {
          c.style.transform = `rotate(-6deg) rotateY(${x * 18}deg) rotateX(${-y * 14}deg)`;
        });
        zone.querySelectorAll<HTMLElement>('[data-shine]').forEach((s) => {
          s.style.transform = `translate(${x * 40}%, ${y * 40}%)`;
        });
      };
      const leave = () => {
        zone.querySelectorAll<HTMLElement>('[data-card]').forEach((c) => {
          c.style.transform = 'rotate(-6deg)';
        });
        zone.querySelectorAll<HTMLElement>('[data-shine]').forEach((s) => {
          s.style.transform = '';
        });
      };
      zone.addEventListener('mousemove', move);
      zone.addEventListener('mouseleave', leave);
    });

    return () => anims.forEach((a) => a.cancel());
  }, [reduce, lang]);

  const manifesto = t.need.manifesto.split(' ');
  const chainStyle = [0, 1, 1, 1, 0];
  const faqCats = [t.faq.all, ...Array.from(new Set(t.faq.items.map((f) => f.c)))];
  const activeCat = faqCat < 0 ? null : faqCats[faqCat + 1];
  const faqList = t.faq.items.filter((f) => faqCat < 0 || f.c === activeCat);
  const partners = ['SYNTHI', 'MTN MoMo', 'Orange Money', 'FAO Cameroun', 'AfDB', 'GIZ', 'MINADER', 'WFP Africa'];
  const bento = t.bento.cards;

  return (
    <div ref={rootRef} style={{ display: 'flex', flexDirection: 'column', overflowX: 'clip' }}>
      {/* ───────── PROLOGUE / HERO ───────── */}
      <section id="top" style={{ padding: 'clamp(56px,9vw,128px) 24px 0' }}>
        <div
          style={{
            maxWidth: MAXW,
            margin: '0 auto',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
            gap: 'clamp(24px,3vw,36px)',
          }}
        >
          <Reveal as="span" order={0} style={eyebrow}>
            {t.hero.eyebrow}
          </Reveal>
          <h1
            style={{
              margin: 0,
              fontFamily: JAKARTA,
              fontWeight: 800,
              fontSize: 'clamp(46px,8.6vw,128px)',
              lineHeight: 0.94,
              letterSpacing: '-0.055em',
              maxWidth: 1200,
            }}
          >
            <Reveal as="span" order={1} style={{ display: 'block' }}>
              {t.hero.l1}
            </Reveal>
            <Reveal as="span" order={2} style={{ display: 'block', color: '#00A525' }}>
              {t.hero.l2}
            </Reveal>
          </h1>
          <Reveal
            as="span"
            order={3}
            style={{
              fontSize: 'clamp(19px,1.9vw,23px)',
              lineHeight: 1.5,
              color: '#464E62',
              maxWidth: 720,
            }}
          >
            {t.hero.lead}
          </Reveal>
          <Reveal order={4} style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 12 }}>
            <a href="#besoin" style={ctaDark}>
              {t.hero.a}
            </a>
            <a href="#rejoindre" style={ctaOutline}>
              {t.hero.b}
            </a>
          </Reveal>
        </div>
        <div style={{ margin: 'clamp(48px,6vw,88px) auto 0', display: 'flex', justifyContent: 'center' }}>
          <div
            ref={heroRef}
            style={{
              position: 'relative',
              width: '88%',
              borderRadius: 28,
              overflow: 'hidden',
              aspectRatio: '16 / 8',
              minHeight: 340,
              background: '#C1C5D0',
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              data-kb="1"
              src={HERO_IMG}
              alt={t.hero.alt}
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
            <div
              style={{
                position: 'absolute',
                left: 0,
                right: 0,
                bottom: 0,
                padding: 'clamp(20px,3vw,40px)',
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'space-between',
                alignItems: 'flex-end',
                gap: 12,
                background: 'linear-gradient(180deg,rgba(4,4,5,0) 0%,rgba(4,4,5,0.55) 100%)',
              }}
            >
              <span
                style={{
                  fontFamily: JAKARTA,
                  fontWeight: 700,
                  fontSize: 'clamp(18px,2vw,24px)',
                  color: '#FFFFFF',
                  maxWidth: 520,
                  letterSpacing: '-0.01em',
                }}
              >
                {t.hero.caption}
              </span>
              <span style={{ fontSize: 14, fontWeight: 600, color: '#FFFFFF' }}>{t.hero.scroll} ↓</span>
            </div>
          </div>
        </div>
      </section>

      {/* ───────── 01 LE BESOIN ───────── */}
      <section
        id="besoin"
        data-chapter="besoin"
        style={{ scrollMarginTop: 60, padding: 'clamp(88px,12vw,176px) 24px clamp(64px,8vw,112px)' }}
      >
        <div
          style={{
            maxWidth: MAXW,
            margin: '0 auto',
            display: 'flex',
            flexDirection: 'column',
            gap: 'clamp(64px,8vw,112px)',
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
            <span style={eyebrow}>01 — {t.need.eyebrow}</span>
            <p
              ref={manifestoRef}
              style={{
                margin: 0,
                fontFamily: JAKARTA,
                fontWeight: 800,
                fontSize: 'clamp(32px,4.8vw,68px)',
                lineHeight: 1.08,
                letterSpacing: '-0.04em',
                maxWidth: 1180,
              }}
            >
              {manifesto.map((word, i) => (
                <span key={i} data-w="1" style={{ opacity: 0.16, transition: 'opacity .25s linear' }}>
                  {word}{' '}
                </span>
              ))}
            </p>
          </div>

          <Reveal style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'space-between',
                alignItems: 'baseline',
                gap: 12,
              }}
            >
              <h3 style={{ margin: 0, fontFamily: JAKARTA, fontWeight: 700, fontSize: 'clamp(22px,2.2vw,28px)', letterSpacing: '-0.02em' }}>
                {t.need.chainTitle}
              </h3>
              <span style={{ fontSize: 15, color: '#58617B' }}>{t.need.chainNote}</span>
            </div>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 170px), 1fr))',
                gap: 12,
              }}
            >
              {t.need.chain.map((c, i) => {
                const faded = chainStyle[i] === 1;
                const bg = faded ? '#FFFFFF' : i === 0 ? '#E6FDEB' : '#EEF0F4';
                const fg = faded ? '#58617B' : '#040405';
                const border = faded ? '#A3A8B7' : i === 0 ? '#00A525' : '#C1C5D0';
                return (
                  <div
                    key={c.name}
                    style={{
                      borderRadius: 18,
                      padding: '22px 20px',
                      minHeight: 150,
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between',
                      gap: 16,
                      background: bg,
                      color: fg,
                      border: `1.5px dashed ${border}`,
                    }}
                  >
                    <span style={{ fontSize: 13, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', opacity: 0.8 }}>
                      {c.tag}
                    </span>
                    <strong style={{ fontFamily: JAKARTA, fontSize: 21, letterSpacing: '-0.02em' }}>{c.name}</strong>
                    <span style={{ fontSize: 14, lineHeight: 1.4 }}>{c.note}</span>
                  </div>
                );
              })}
            </div>
          </Reveal>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 230px), 1fr))',
              gap: '40px 32px',
            }}
          >
            {t.need.pains.map((p) => (
              <Reveal
                key={p.t}
                order={1}
                style={{ display: 'flex', flexDirection: 'column', gap: 10, paddingTop: 20, borderTop: '2px solid #040405' }}
              >
                <h4 style={{ margin: 0, fontFamily: JAKARTA, fontWeight: 700, fontSize: 21, letterSpacing: '-0.02em' }}>{p.t}</h4>
                <p style={{ margin: 0, fontSize: 16, lineHeight: 1.55, color: '#464E62' }}>{p.d}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ───────── 02 LA REPONSE ───────── */}
      <section
        id="reponse"
        data-chapter="reponse"
        style={{ scrollMarginTop: 60, background: '#040405', color: '#FFFFFF', padding: 'clamp(88px,12vw,176px) 24px' }}
      >
        <div style={{ maxWidth: MAXW, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 'clamp(56px,7vw,96px)' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 28, alignItems: 'center', textAlign: 'center' }}>
            <Reveal as="span" order={0} style={{ ...eyebrow, color: '#8AF4A2' }}>
              02 — {t.ans.eyebrow}
            </Reveal>
            <Reveal
              as="span"
              order={1}
              style={{
                fontFamily: JAKARTA,
                fontWeight: 800,
                fontSize: 'clamp(42px,7vw,104px)',
                lineHeight: 0.96,
                letterSpacing: '-0.055em',
                maxWidth: 1100,
              }}
            >
              {t.ans.title}
            </Reveal>
            <Reveal as="span" order={2} style={{ fontSize: 'clamp(19px,1.9vw,22px)', lineHeight: 1.55, color: '#C1C5D0', maxWidth: 720 }}>
              {t.ans.lead}
            </Reveal>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 260px), 1fr))', gap: 16, alignItems: 'stretch' }}>
            <Reveal order={1} style={{ borderRadius: 22, border: '1.5px solid #353A4A', padding: 28, display: 'flex', flexDirection: 'column', gap: 14 }}>
              <span style={sideTag}>{t.ans.side}</span>
              <strong style={{ fontFamily: JAKARTA, fontSize: 26, letterSpacing: '-0.025em' }}>{t.ans.producer}</strong>
              <span style={{ fontSize: 16, lineHeight: 1.5, color: '#A3A8B7' }}>{t.ans.producerD}</span>
            </Reveal>
            <Reveal order={2} style={{ borderRadius: 22, background: '#00E834', color: '#040405', padding: 28, display: 'flex', flexDirection: 'column', gap: 16 }}>
              <span style={{ ...sideTag, color: '#00300A' }}>{t.ans.core}</span>
              <strong style={{ fontFamily: JAKARTA, fontSize: 26, letterSpacing: '-0.025em' }}>Farms to Market</strong>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, minmax(0, 1fr))', gap: 8 }}>
                {t.ans.coreItems.map((c) => (
                  <span key={c} style={{ background: '#040405', color: '#FFFFFF', borderRadius: 10, padding: 12, fontSize: 15, fontWeight: 700 }}>
                    {c}
                  </span>
                ))}
              </div>
            </Reveal>
            <Reveal order={3} style={{ borderRadius: 22, border: '1.5px solid #353A4A', padding: 28, display: 'flex', flexDirection: 'column', gap: 14 }}>
              <span style={sideTag}>{t.ans.side2}</span>
              <strong style={{ fontFamily: JAKARTA, fontSize: 26, letterSpacing: '-0.025em' }}>{t.ans.buyer}</strong>
              <span style={{ fontSize: 16, lineHeight: 1.5, color: '#A3A8B7' }}>{t.ans.buyerD}</span>
            </Reveal>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 260px), 1fr))',
              gap: 40,
              borderTop: '1px solid #232731',
              paddingTop: 'clamp(40px,5vw,64px)',
            }}
          >
            {t.ans.principles.map((p) => (
              <Reveal key={p.t} order={1} style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                <strong style={{ fontFamily: JAKARTA, fontSize: 24, letterSpacing: '-0.02em', color: '#00E834' }}>{p.t}</strong>
                <span style={{ fontSize: 17, lineHeight: 1.55, color: '#C1C5D0' }}>{p.d}</span>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ───────── 03 LE PRODUIT ───────── */}
      <section id="produit" data-chapter="produit" style={{ scrollMarginTop: 60, padding: 'clamp(88px,12vw,176px) 24px 0' }}>
        <div style={{ maxWidth: MAXW, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 24 }}>
          <Reveal as="span" order={0} style={eyebrow}>
            03 — {t.prod.eyebrow}
          </Reveal>
          <Reveal as="span" order={1} style={{ fontFamily: JAKARTA, fontWeight: 800, fontSize: 'clamp(40px,6vw,88px)', lineHeight: 0.98, letterSpacing: '-0.05em', maxWidth: 1000 }}>
            {t.prod.title}
          </Reveal>
          <Reveal as="span" order={2} style={{ fontSize: 'clamp(19px,1.9vw,22px)', lineHeight: 1.55, color: '#464E62', maxWidth: 640 }}>
            {t.prod.lead}
          </Reveal>
        </div>

        {desk ? (
          <div
            style={{
              maxWidth: MAXW,
              margin: '0 auto',
              paddingBottom: 'clamp(64px,8vw,112px)',
              display: 'grid',
              gridTemplateColumns: 'minmax(0,1fr) minmax(0,1.2fr)',
              gap: 72,
            }}
          >
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              {t.prod.modules.map((m, i) => (
                <div
                  key={m.name}
                  data-feat={i}
                  style={{
                    minHeight: '78vh',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    gap: 16,
                    opacity: i === feat ? 1 : 0.25,
                    transition: 'opacity .5s ease',
                  }}
                >
                  <span style={{ display: 'flex', alignItems: 'center', gap: 12, ...eyebrow }}>
                    <span style={{ width: 28, height: 2, background: '#00A525' }} />
                    {m.name}
                  </span>
                  <h3 style={{ margin: 0, fontFamily: JAKARTA, fontWeight: 800, fontSize: 'clamp(30px,3.2vw,46px)', lineHeight: 1.04, letterSpacing: '-0.035em' }}>
                    {m.t}
                  </h3>
                  <p style={{ margin: 0, fontSize: 19, lineHeight: 1.55, color: '#464E62', maxWidth: 460 }}>{m.d}</p>
                  <ul style={{ margin: '6px 0 0', padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 10 }}>
                    {m.list.map((li) => (
                      <li key={li} style={{ display: 'flex', gap: 12, alignItems: 'baseline', fontSize: 16, color: '#232731' }}>
                        <span style={{ flex: 'none', width: 12, height: 2, background: '#040405', transform: 'translateY(-4px)' }} />
                        {li}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <div style={{ position: 'relative' }}>
              <div style={{ position: 'sticky', top: 88, height: 'calc(100vh - 128px)', maxHeight: 760, borderRadius: 32, background: '#E6FDEB', overflow: 'hidden' }}>
                {t.prod.modules.map((m, i) => (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    key={m.name}
                    src={MOD_IMG[i]}
                    alt={m.name}
                    style={{
                      position: 'absolute',
                      inset: 0,
                      width: '100%',
                      height: '100%',
                      objectFit: 'contain',
                      padding: 20,
                      opacity: i === feat ? 1 : 0,
                      transform:
                        i === feat
                          ? 'translateY(0) scale(1)'
                          : i < feat
                            ? 'translateY(-28px) scale(.96)'
                            : 'translateY(28px) scale(.96)',
                      transition: 'opacity .6s ease, transform .9s cubic-bezier(.2,.7,.2,1)',
                    }}
                  />
                ))}
                <div style={{ position: 'absolute', left: 24, bottom: 24, display: 'flex', gap: 6 }}>
                  {t.prod.modules.map((m, i) => (
                    <span
                      key={m.name}
                      style={{
                        height: 6,
                        borderRadius: 3,
                        width: i === feat ? 28 : 6,
                        background: i === feat ? '#040405' : '#A3A8B7',
                        transition: 'width .4s ease, background .4s ease',
                      }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div style={{ maxWidth: MAXW, margin: '0 auto', padding: '48px 0 72px', display: 'flex', flexDirection: 'column', gap: 64 }}>
            {t.prod.modules.map((m, i) => (
              <Reveal key={m.name} style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                <div style={{ borderRadius: 24, background: '#E6FDEB', aspectRatio: '4 / 3', overflow: 'hidden' }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={MOD_IMG[i]} alt={m.name} loading="lazy" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                </div>
                <span style={{ ...eyebrow, fontSize: 13, paddingTop: 8 }}>{m.name}</span>
                <h3 style={{ margin: 0, fontFamily: JAKARTA, fontWeight: 800, fontSize: 28, lineHeight: 1.1, letterSpacing: '-0.03em' }}>{m.t}</h3>
                <p style={{ margin: 0, fontSize: 17, lineHeight: 1.55, color: '#464E62' }}>{m.d}</p>
              </Reveal>
            ))}
          </div>
        )}
      </section>

      {/* ───────── 04 L'INFRASTRUCTURE ───────── */}
      <section
        id="infrastructure"
        data-chapter="infrastructure"
        style={{ scrollMarginTop: 60, background: '#EEF0F4', padding: 'clamp(88px,12vw,176px) 24px' }}
      >
        <div style={{ maxWidth: MAXW, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 'clamp(56px,7vw,96px)' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
            <Reveal as="span" order={0} style={eyebrow}>
              04 — {t.infra.eyebrow}
            </Reveal>
            <Reveal as="span" order={1} style={{ fontFamily: JAKARTA, fontWeight: 800, fontSize: 'clamp(40px,6vw,88px)', lineHeight: 0.98, letterSpacing: '-0.05em', maxWidth: 1000 }}>
              {t.infra.title}
            </Reveal>
            <Reveal as="span" order={2} style={{ fontSize: 'clamp(19px,1.9vw,22px)', lineHeight: 1.55, color: '#464E62', maxWidth: 680 }}>
              {t.infra.lead}
            </Reveal>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 440px), 1fr))', gap: '40px 72px', alignItems: 'center' }}>
            <Reveal order={1} style={{ position: 'relative', height: 'clamp(480px,44vw,540px)' }}>
              {t.infra.layers.map((l, i) => {
                const on = i === layer;
                const gap = w < 700 ? 52 : 62;
                return (
                  <div
                    key={l.name}
                    onMouseEnter={() => setLayer(i)}
                    onClick={() => setLayer(i)}
                    style={{
                      position: 'absolute',
                      left: '50%',
                      top: 20 + i * gap,
                      width: 'clamp(200px,20vw,260px)',
                      aspectRatio: '1',
                      borderRadius: 22,
                      cursor: 'pointer',
                      zIndex: 10 - i,
                      background: LAYER_BG[i],
                      color: LAYER_FG[i],
                      boxShadow: '0 30px 50px rgba(4,4,5,0.18)',
                      transform: `translateX(-50%) translateY(${on ? -26 : 0}px) rotateX(58deg) rotateZ(-45deg)`,
                      opacity: on ? 1 : 0.82,
                      transition: 'transform .6s cubic-bezier(.2,.8,.2,1), opacity .4s ease',
                      display: 'flex',
                      alignItems: 'flex-end',
                      justifyContent: 'flex-start',
                      padding: 20,
                    }}
                  >
                    <span style={{ fontFamily: JAKARTA, fontWeight: 800, fontSize: 17, letterSpacing: '-0.01em' }}>{l.name}</span>
                  </div>
                );
              })}
            </Reveal>
            <div style={{ display: 'flex', flexDirection: 'column', borderTop: '1px solid #C1C5D0' }}>
              {t.infra.layers.map((l, i) => {
                const on = i === layer;
                return (
                  <button
                    key={l.name}
                    onMouseEnter={() => setLayer(i)}
                    onClick={() => setLayer(i)}
                    style={{
                      all: 'unset',
                      cursor: 'pointer',
                      display: 'grid',
                      gridTemplateColumns: '40px minmax(0,1fr)',
                      gap: '4px 16px',
                      padding: '22px 0',
                      borderBottom: '1px solid #C1C5D0',
                    }}
                  >
                    <span style={{ fontFamily: JAKARTA, fontWeight: 800, fontSize: 15, color: on ? '#00A525' : '#A3A8B7', paddingTop: 4, transition: 'color .3s ease' }}>
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <span style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                      <strong style={{ fontFamily: JAKARTA, fontSize: 22, letterSpacing: '-0.02em', color: on ? '#040405' : '#58617B', transition: 'color .3s ease' }}>
                        {l.name}
                      </strong>
                      <span style={{ fontSize: 16, lineHeight: 1.5, color: '#464E62' }}>{l.d}</span>
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
            <Reveal as="span" order={0} style={{ fontFamily: JAKARTA, fontWeight: 800, fontSize: 'clamp(26px,3vw,38px)', letterSpacing: '-0.03em' }}>
              {t.infra.fieldTitle}
            </Reveal>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 250px), 1fr))', gap: 16 }}>
              {t.infra.field.map((f) => (
                <Reveal key={f.t} order={1} style={{ background: '#FFFFFF', borderRadius: 22, padding: 28, display: 'flex', flexDirection: 'column', gap: 10 }}>
                  <strong style={{ fontFamily: JAKARTA, fontSize: 20, letterSpacing: '-0.02em' }}>{f.t}</strong>
                  <span style={{ fontSize: 16, lineHeight: 1.55, color: '#464E62' }}>{f.d}</span>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ───────── 05 LE PARCOURS ───────── */}
      <section id="parcours" data-chapter="parcours" style={{ scrollMarginTop: 60, padding: 'clamp(88px,12vw,176px) 24px' }}>
        <div
          style={{
            maxWidth: MAXW,
            margin: '0 auto',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 420px), 1fr))',
            gap: '56px 88px',
            alignItems: 'start',
          }}
        >
          <div style={{ position: 'sticky', top: 110, display: 'flex', flexDirection: 'column', gap: 24 }}>
            <Reveal as="span" order={0} style={eyebrow}>
              05 — {t.journey.eyebrow}
            </Reveal>
            <Reveal as="span" order={1} style={{ fontFamily: JAKARTA, fontWeight: 800, fontSize: 'clamp(38px,5vw,72px)', lineHeight: 0.98, letterSpacing: '-0.05em' }}>
              {t.journey.title}
            </Reveal>
            <Reveal as="span" order={2} style={{ fontSize: 19, lineHeight: 1.55, color: '#464E62', maxWidth: 480 }}>
              {t.journey.lead}
            </Reveal>
            <Reveal order={3} style={{ borderRadius: 24, overflow: 'hidden', aspectRatio: '4 / 3', background: '#C1C5D0', maxWidth: 520 }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/farmers/cassava1.jpeg" alt="" loading="lazy" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </Reveal>
          </div>
          <div ref={tlRef} style={{ position: 'relative', display: 'flex', flexDirection: 'column', paddingLeft: 44 }}>
            <span style={{ position: 'absolute', left: 11, top: 8, bottom: 8, width: 2, background: '#EEF0F4' }} />
            <span ref={tlFillRef} style={{ position: 'absolute', left: 11, top: 8, width: 2, height: 0, background: '#00A525' }} />
            {t.journey.steps.map((s, i) => (
              <div key={i} data-step="1" style={{ position: 'relative', display: 'flex', flexDirection: 'column', gap: 8, padding: '0 0 48px' }}>
                <span
                  data-dot="1"
                  style={{
                    position: 'absolute',
                    left: -44,
                    top: 2,
                    width: 24,
                    height: 24,
                    borderRadius: '50%',
                    background: '#FFFFFF',
                    border: '2px solid #C1C5D0',
                    transition: 'background .3s ease, border-color .3s ease',
                  }}
                />
                <span style={{ ...eyebrow, fontSize: 13, letterSpacing: '0.1em' }}>{s.who}</span>
                <h3 style={{ margin: 0, fontFamily: JAKARTA, fontWeight: 800, fontSize: 'clamp(22px,2.2vw,28px)', letterSpacing: '-0.025em' }}>{s.t}</h3>
                <p style={{ margin: 0, fontSize: 17, lineHeight: 1.55, color: '#464E62', maxWidth: 520 }}>{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───────── 06 LES ACTEURS ───────── */}
      <section id="acteurs" data-chapter="acteurs" style={{ scrollMarginTop: 60, background: '#040405', color: '#FFFFFF', padding: 'clamp(88px,12vw,176px) 24px' }}>
        <div style={{ maxWidth: MAXW, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 48 }}>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'flex-end', gap: 28 }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 24, maxWidth: 760 }}>
              <Reveal as="span" order={0} style={{ ...eyebrow, color: '#8AF4A2' }}>
                06 — {t.actors.eyebrow}
              </Reveal>
              <Reveal as="span" order={1} style={{ fontFamily: JAKARTA, fontWeight: 800, fontSize: 'clamp(38px,5.4vw,80px)', lineHeight: 0.98, letterSpacing: '-0.05em' }}>
                {t.actors.title}
              </Reveal>
            </div>
            <Reveal order={2} style={{ display: 'flex', flexWrap: 'wrap', gap: 6, padding: 5, background: '#1A1A1A', borderRadius: 14 }}>
              {t.actors.tabs.map((a, i) => {
                const on = i === actor;
                return (
                  <button
                    key={a.label}
                    onClick={() => setActor(i)}
                    style={{
                      border: 0,
                      cursor: 'pointer',
                      fontWeight: 700,
                      fontSize: 15,
                      minHeight: 44,
                      padding: '0 16px',
                      borderRadius: 10,
                      background: on ? '#FFFFFF' : 'transparent',
                      color: on ? '#040405' : '#C1C5D0',
                      transition: 'background .3s ease, color .3s ease',
                    }}
                  >
                    {a.label}
                  </button>
                );
              })}
            </Reveal>
          </div>
          <div style={{ display: 'grid' }}>
            {t.actors.tabs.map((a, i) => {
              const on = i === actor;
              return (
                <div
                  key={a.label}
                  style={{
                    gridArea: '1 / 1',
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 420px), 1fr))',
                    gap: '40px 72px',
                    alignItems: 'center',
                    opacity: on ? 1 : 0,
                    transform: on ? 'none' : 'translateY(14px)',
                    pointerEvents: on ? 'auto' : 'none',
                    transition: 'opacity .5s ease, transform .5s ease',
                  }}
                >
                  <div style={{ borderRadius: 28, overflow: 'hidden', aspectRatio: '4 / 3', background: '#232731' }}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={ACTOR_IMG[i]} alt={a.label} loading="lazy" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
                    <span style={{ fontSize: 14, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#868CA0' }}>{a.who}</span>
                    <h3 style={{ margin: 0, fontFamily: JAKARTA, fontWeight: 800, fontSize: 'clamp(28px,3.2vw,44px)', lineHeight: 1.06, letterSpacing: '-0.035em' }}>{a.t}</h3>
                    <p style={{ margin: 0, fontSize: 18, lineHeight: 1.55, color: '#C1C5D0' }}>{a.d}</p>
                    <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', borderTop: '1px solid #232731' }}>
                      {a.list.map((li) => (
                        <li key={li} style={{ display: 'flex', gap: 14, alignItems: 'baseline', padding: '14px 0', borderBottom: '1px solid #232731', fontSize: 17, color: '#FFFFFF' }}>
                          <span style={{ flex: 'none', width: 12, height: 2, background: '#00E834', transform: 'translateY(-4px)' }} />
                          {li}
                        </li>
                      ))}
                    </ul>
                    <a
                      href={withLocale(lang, `/solutions/${ACTOR_SLUGS[i]}`)}
                      style={{ alignSelf: 'flex-start', display: 'flex', alignItems: 'center', minHeight: 50, padding: '0 20px', borderRadius: 12, background: '#FFFFFF', color: '#040405', fontWeight: 700, fontSize: 15 }}
                    >
                      {t.actors.more} →
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ───────── 07 L'ECOSYSTEME ───────── */}
      <section id="ecosysteme" data-chapter="ecosysteme" style={{ scrollMarginTop: 60, padding: 'clamp(88px,12vw,176px) 0 clamp(64px,8vw,112px)' }}>
        <div
          style={{
            maxWidth: MAXW,
            margin: '0 auto',
            padding: '0 24px',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 440px), 1fr))',
            gap: '32px 80px',
            alignItems: 'end',
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
            <Reveal as="span" order={0} style={eyebrow}>
              07 — {t.eco.eyebrow}
            </Reveal>
            <Reveal as="span" order={1} style={{ fontFamily: JAKARTA, fontWeight: 800, fontSize: 'clamp(38px,5.4vw,80px)', lineHeight: 0.98, letterSpacing: '-0.05em' }}>
              {t.eco.title}
            </Reveal>
          </div>
          <Reveal as="span" order={2} style={{ fontSize: 19, lineHeight: 1.6, color: '#464E62' }}>
            {t.eco.lead}
          </Reveal>
        </div>

        <div style={{ marginTop: 'clamp(48px,6vw,80px)', padding: '32px 0', borderTop: '1px solid #EEF0F4', borderBottom: '1px solid #EEF0F4', overflow: 'hidden' }}>
          <p style={{ maxWidth: MAXW, margin: '0 auto 20px', padding: '0 24px', fontSize: 14, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#58617B' }}>
            {t.eco.partners}
          </p>
          <div style={{ maskImage: 'linear-gradient(90deg,transparent,#000 8%,#000 92%,transparent)', WebkitMaskImage: 'linear-gradient(90deg,transparent,#000 8%,#000 92%,transparent)' }}>
            <Marquee style={{ alignItems: 'center', gap: 72, padding: '0 36px' }}>
              {partners.concat(partners).map((p, i) => (
                <span key={i} style={{ flex: 'none', fontFamily: JAKARTA, fontWeight: 800, fontSize: 28, letterSpacing: '-0.02em', color: '#868CA0', whiteSpace: 'nowrap' }}>
                  {p}
                </span>
              ))}
            </Marquee>
          </div>
        </div>

        <div
          className="f2m-noscrollbar"
          style={{
            marginTop: 'clamp(48px,6vw,80px)',
            display: 'flex',
            gap: 16,
            overflowX: 'auto',
            scrollSnapType: 'x mandatory',
            padding: '0 max(24px, calc((100vw - 1272px) / 2)) 12px',
          }}
        >
          {t.eco.gallery.map((c, i) => (
            <figure key={c} style={{ margin: 0, flex: 'none', width: 'clamp(240px,26vw,380px)', scrollSnapAlign: 'start', display: 'flex', flexDirection: 'column', gap: 12 }}>
              <div style={{ borderRadius: 22, overflow: 'hidden', aspectRatio: '3 / 4', background: '#C1C5D0' }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={GAL_IMG[i]} alt={c} loading="lazy" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <figcaption style={{ fontSize: 15, fontWeight: 600, color: '#232731' }}>{c}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* ───────── ECOSYSTEME PRODUIT (BENTO) ───────── */}
      <section id="applications" style={{ scrollMarginTop: 60, padding: '0 24px clamp(88px,10vw,144px)' }}>
        <div style={{ maxWidth: MAXW, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 40 }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 20, maxWidth: 860 }}>
            <Reveal as="span" order={0} style={eyebrow}>
              {t.bento.eyebrow}
            </Reveal>
            <Reveal as="span" order={1} style={{ fontFamily: JAKARTA, fontWeight: 800, fontSize: 'clamp(38px,5.4vw,80px)', lineHeight: 0.98, letterSpacing: '-0.05em' }}>
              {t.bento.title}
            </Reveal>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 520px), 1fr))', gap: 16 }}>
            {/* b0 — Marketplace */}
            <BentoCard href={withLocale(lang, '/solutions/producteurs')} bg="#E6FDEB" fg="#040405" muted="#353A4A" card={bento[0]}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img data-float="0" src="/assets/m-17.png" alt="Farm’sToMarket" loading="lazy" style={{ width: '100%', height: 'auto', marginBottom: '-4%' }} />
            </BentoCard>

            {/* b1 — Pro */}
            <BentoCard href={withLocale(lang, '/solutions/cooperatives')} bg="#040405" fg="#FFFFFF" muted="#C1C5D0" card={bento[1]}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img data-float="1" src="/assets/m-pro.png" alt="Farm’sToMarket Pro" loading="lazy" style={{ width: '100%', height: 'auto' }} />
            </BentoCard>

            {/* b2 — AgroBank (tilt card) */}
            <a
              data-tiltzone="1"
              href={withLocale(lang, '/solutions/agrobank')}
              className="f2m-hover-lift"
              style={{ position: 'relative', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', gap: 24, minHeight: 600, borderRadius: 32, overflow: 'hidden', background: '#00300A', color: '#FFFFFF' }}
            >
              <div data-glow="1" style={{ position: 'absolute', right: '-20%', bottom: '-30%', width: '90%', aspectRatio: '1', borderRadius: '50%', background: 'radial-gradient(circle,rgba(0,232,52,0.4) 0%,rgba(0,232,52,0) 62%)', pointerEvents: 'none' }} />
              <BentoHead card={bento[2]} tagColor="#B0F8C0" fg="#FFFFFF" muted="#B0F8C0" />
              <div style={{ position: 'relative', display: 'flex', justifyContent: 'center', padding: '0 32px 56px', perspective: 1200 }}>
                <div data-float="2" style={{ width: 'min(100%, 400px)' }}>
                  <AgroCard debit={t.bento.debit} />
                </div>
              </div>
            </a>

            {/* b3 — Faroya (chart) */}
            <a
              href={withLocale(lang, '/solutions/faroya')}
              className="f2m-hover-lift"
              style={{ position: 'relative', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', gap: 24, minHeight: 600, borderRadius: 32, overflow: 'hidden', background: '#040405', color: '#FFFFFF' }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="https://faroya.farmstomarket.io/aerial-farmland.jpg" alt="" loading="lazy" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', opacity: 0.3 }} />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg,rgba(4,4,5,0.92) 0%,rgba(4,4,5,0.55) 100%)' }} />
              <div style={{ position: 'relative' }}>
                <BentoHead card={bento[3]} tagColor="#C1C5D0" fg="#FFFFFF" muted="#C1C5D0" />
              </div>
              <FaroyaChart cocoa={t.bento.cocoa} illus={t.bento.illus} />
            </a>
          </div>
        </div>
      </section>

      {/* ───────── FAQ ───────── */}
      <section id="faq" style={{ scrollMarginTop: 60, background: '#EEF0F4', padding: 'clamp(72px,9vw,128px) 24px' }}>
        <div style={{ maxWidth: MAXW, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 360px), 1fr))', gap: '40px 80px', alignItems: 'start' }}>
          <Reveal style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            <span style={eyebrow}>FAQ</span>
            <h2 style={{ margin: 0, fontFamily: JAKARTA, fontWeight: 800, fontSize: 'clamp(36px,4.6vw,60px)', lineHeight: 1, letterSpacing: '-0.045em' }}>{t.faq.title}</h2>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, paddingTop: 6 }}>
              {faqCats.map((label, k) => {
                const i = k - 1;
                const on = i === faqCat;
                return (
                  <button
                    key={label}
                    onClick={() => {
                      setFaqCat(i);
                      setOpen(0);
                    }}
                    style={{ cursor: 'pointer', minHeight: 44, padding: '0 16px', borderRadius: 10, fontWeight: 700, fontSize: 15, border: `1.5px solid ${on ? '#040405' : '#C1C5D0'}`, background: on ? '#040405' : '#FFFFFF', color: on ? '#FFFFFF' : '#040405' }}
                  >
                    {label}
                  </button>
                );
              })}
            </div>
            <a href="mailto:support@farmstomarket.io" style={{ fontWeight: 700, color: '#006116', paddingTop: 8 }}>
              {t.faq.more} support@farmstomarket.io →
            </a>
          </Reveal>
          <div style={{ display: 'flex', flexDirection: 'column', borderTop: '1px solid #C1C5D0' }}>
            {faqList.map((f, i) => {
              const isOpen = open === i;
              return (
                <div key={f.q} style={{ borderBottom: '1px solid #C1C5D0' }}>
                  <button
                    onClick={() => setOpen(isOpen ? -1 : i)}
                    style={{ width: '100%', border: 0, background: 'transparent', cursor: 'pointer', display: 'flex', alignItems: 'flex-start', gap: 20, textAlign: 'left', padding: '22px 0', color: '#040405' }}
                  >
                    <span style={{ flex: 1, fontFamily: JAKARTA, fontWeight: 700, fontSize: 19, lineHeight: 1.35 }}>{f.q}</span>
                    <span style={{ flex: 'none', fontSize: 26, lineHeight: 1, fontWeight: 500, transform: isOpen ? 'rotate(45deg)' : 'none', transition: 'transform .35s ease' }}>+</span>
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

      {/* ───────── EPILOGUE ───────── */}
      <section id="rejoindre" style={{ scrollMarginTop: 60, padding: 'clamp(88px,12vw,176px) 24px' }}>
        <div style={{ maxWidth: MAXW, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 'clamp(48px,6vw,80px)' }}>
          <Reveal as="span" order={0} style={{ fontFamily: JAKARTA, fontWeight: 800, fontSize: 'clamp(46px,8.6vw,128px)', lineHeight: 0.94, letterSpacing: '-0.055em', textAlign: 'center' }}>
            {t.end.title}
          </Reveal>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 440px), 1fr))', gap: 16 }}>
            <Reveal order={1} style={{ borderRadius: 28, background: '#00E834', padding: 'clamp(28px,4vw,48px)', display: 'flex', flexDirection: 'column', gap: 16 }}>
              <span style={{ fontSize: 14, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#00300A' }}>{t.end.aTag}</span>
              <strong style={{ fontFamily: JAKARTA, fontSize: 'clamp(26px,2.8vw,36px)', lineHeight: 1.1, letterSpacing: '-0.03em' }}>{t.end.aTitle}</strong>
              <span style={{ fontSize: 17, lineHeight: 1.5, color: '#00300A' }}>{t.end.aText}</span>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, paddingTop: 12, marginTop: 'auto' }}>
                <a href={PLAY} target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', minHeight: 54, padding: '0 22px', borderRadius: 12, background: '#040405', color: '#FFFFFF', fontWeight: 700, fontSize: 16 }}>
                  Google Play
                </a>
                <a href="https://apps.apple.com" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', minHeight: 54, padding: '0 22px', borderRadius: 12, border: '1.5px solid #040405', color: '#040405', fontWeight: 700, fontSize: 16 }}>
                  App Store
                </a>
              </div>
            </Reveal>
            <Reveal order={2} style={{ borderRadius: 28, background: '#040405', color: '#FFFFFF', padding: 'clamp(28px,4vw,48px)', display: 'flex', flexDirection: 'column', gap: 16 }}>
              <span style={{ fontSize: 14, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#868CA0' }}>{t.end.bTag}</span>
              <strong style={{ fontFamily: JAKARTA, fontSize: 'clamp(26px,2.8vw,36px)', lineHeight: 1.1, letterSpacing: '-0.03em' }}>{t.end.bTitle}</strong>
              <span style={{ fontSize: 17, lineHeight: 1.5, color: '#C1C5D0' }}>{t.end.bText}</span>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, paddingTop: 12, marginTop: 'auto' }}>
                <a href="mailto:contact@farmstomarket.io" style={{ display: 'flex', alignItems: 'center', minHeight: 54, padding: '0 22px', borderRadius: 12, background: '#FFFFFF', color: '#040405', fontWeight: 700, fontSize: 16 }}>
                  contact@farmstomarket.io
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </div>
  );
}

/* ── shared inline style tokens ─────────────────────────────── */
const ctaDark: CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  minHeight: 56,
  padding: '0 26px',
  borderRadius: 14,
  background: '#040405',
  color: '#FFFFFF',
  fontWeight: 700,
  fontSize: 17,
};
const ctaOutline: CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  minHeight: 56,
  padding: '0 26px',
  borderRadius: 14,
  border: '1.5px solid #040405',
  color: '#040405',
  fontWeight: 700,
  fontSize: 17,
};
const sideTag: CSSProperties = {
  fontSize: 13,
  fontWeight: 700,
  letterSpacing: '0.1em',
  textTransform: 'uppercase',
  color: '#868CA0',
};

/* ── bento helpers ──────────────────────────────────────────── */
type BentoCardData = { tag: string; name: string; d: string; cta: string };

function BentoHead({ card, tagColor, fg, muted }: { card: BentoCardData; tagColor: string; fg: string; muted: string }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 12, padding: 'clamp(28px,3.4vw,44px) clamp(28px,3.4vw,44px) 0' }}>
      <span style={{ fontSize: 13, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: tagColor }}>{card.tag}</span>
      <strong style={{ fontFamily: JAKARTA, fontWeight: 800, fontSize: 'clamp(28px,3vw,40px)', letterSpacing: '-0.035em', lineHeight: 1.05, color: fg }}>{card.name}</strong>
      <span style={{ fontSize: 17, lineHeight: 1.5, color: muted, maxWidth: 440 }}>{card.d}</span>
      <span style={{ fontWeight: 700, fontSize: 15, color: fg, paddingTop: 4 }}>{card.cta} →</span>
    </div>
  );
}

function BentoCard({ href, bg, fg, muted, card, children }: { href: string; bg: string; fg: string; muted: string; card: BentoCardData; children: React.ReactNode }) {
  return (
    <a
      href={href}
      className="f2m-hover-lift"
      style={{ position: 'relative', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', gap: 24, minHeight: 600, borderRadius: 32, overflow: 'hidden', background: bg, color: fg }}
    >
      <BentoHead card={card} tagColor={muted} fg={fg} muted={muted} />
      {children}
    </a>
  );
}

function AgroCard({ debit }: { debit: string }) {
  return (
    <div
      data-card="1"
      style={{
        position: 'relative',
        width: '100%',
        aspectRatio: '1.586',
        borderRadius: 22,
        overflow: 'hidden',
        background: 'linear-gradient(135deg,#1A1A1A 0%,#040405 52%,#006116 135%)',
        boxShadow: '0 40px 80px rgba(0,0,0,0.45), inset 0 0 0 1px rgba(255,255,255,0.08)',
        transition: 'transform .25s ease-out',
        color: '#FFFFFF',
        transform: 'rotate(-6deg)',
      }}
    >
      <div data-shine="1" style={{ position: 'absolute', inset: '-40%', background: 'radial-gradient(circle at 30% 30%,rgba(255,255,255,0.22),rgba(255,255,255,0) 38%)', pointerEvents: 'none', transition: 'transform .25s ease-out' }} />
      <div style={{ position: 'relative', height: '100%', padding: 22, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
        <span style={{ display: 'flex', alignItems: 'center', gap: 8, fontFamily: JAKARTA, fontWeight: 800, fontSize: 18 }}>
          <span style={{ width: 10, height: 10, borderRadius: 3, background: '#00E834' }} />
          AgroBank
        </span>
        <span style={{ width: 42, aspectRatio: '1.3', borderRadius: 7, background: 'linear-gradient(135deg,#E6E6E6 0%,#999999 100%)' }} />
        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 12, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#A3A8B7' }}>
          <span>Farms to Market</span>
          <span>{debit}</span>
        </div>
      </div>
    </div>
  );
}

function FaroyaChart({ cocoa, illus }: { cocoa: string; illus: string }) {
  return (
    <div style={{ position: 'relative', margin: '0 clamp(20px,3vw,36px) clamp(20px,3vw,36px)', background: 'rgba(11,14,17,0.9)', border: '1px solid #232731', borderRadius: 20, padding: 18, display: 'flex', flexDirection: 'column', gap: 12 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <span style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <span style={{ fontFamily: JAKARTA, fontWeight: 800, fontSize: 13, background: '#00E834', color: '#040405', padding: '5px 7px', borderRadius: 6 }}>CAC</span>
          <strong style={{ fontFamily: JAKARTA, fontSize: 15 }}>{cocoa}</strong>
        </span>
        <span style={{ fontWeight: 700, fontSize: 14, color: '#00E834' }}>▲</span>
      </div>
      <svg viewBox="0 0 400 120" preserveAspectRatio="none" style={{ width: '100%', height: 120, display: 'block' }} aria-hidden="true">
        <defs>
          <linearGradient id="homeArea" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#00E834" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#00E834" stopOpacity="0" />
          </linearGradient>
        </defs>
        <path d="M0 100 L30 92 L60 96 L90 80 L120 84 L150 66 L180 72 L210 54 L240 60 L270 42 L300 48 L330 30 L360 36 L400 18 L400 120 L0 120 Z" fill="url(#homeArea)" />
        <path data-chartline="1" d="M0 100 L30 92 L60 96 L90 80 L120 84 L150 66 L180 72 L210 54 L240 60 L270 42 L300 48 L330 30 L360 36 L400 18" fill="none" stroke="#00E834" strokeWidth="2.5" strokeLinejoin="round" strokeLinecap="round" vectorEffect="non-scaling-stroke" />
      </svg>
      <span style={{ fontSize: 12, color: '#868CA0' }}>{illus}</span>
    </div>
  );
}
