'use client';

/**
 * Shared client primitives for the Farm’sToMarket landing, ported from the
 * design's vanilla `support.js` runtime (IntersectionObserver reveals, scroll
 * progress bar, infinite marquee, responsive width + reduced-motion checks).
 */

import React, {
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type ReactNode,
} from 'react';

/* ── reduced motion ─────────────────────────────────────────── */
export function useReducedMotion(): boolean {
  const [reduce, setReduce] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    const update = () => setReduce(mq.matches);
    update();
    mq.addEventListener('change', update);
    return () => mq.removeEventListener('change', update);
  }, []);
  return reduce;
}

/* ── window width (SSR-safe; starts at a desktop default) ───── */
export function useWidth(initial = 1400): number {
  const [w, setW] = useState(initial);
  useEffect(() => {
    const onResize = () => setW(window.innerWidth);
    onResize();
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);
  return w;
}

/* ── reveal on scroll ──────────────────────────────────────────
   Mirrors [data-reveal]: fade + translateY(32px) → none, staggered
   by `order * 90ms`, triggered once when 12% enters the viewport. */
export function Reveal({
  children,
  order = 0,
  as: Tag = 'div',
  className,
  style,
  id,
}: {
  children: ReactNode;
  order?: number;
  as?: 'div' | 'span' | 'section' | 'li';
  className?: string;
  style?: CSSProperties;
  id?: string;
}) {
  const ref = useRef<HTMLElement | null>(null);
  const reduce = useReducedMotion();
  const [shown, setShown] = useState(false);

  useEffect(() => {
    if (reduce) return;
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setShown(true);
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -6% 0px' },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [reduce]);

  const delay = order * 90;
  const motionStyle: CSSProperties = reduce
    ? {}
    : {
        opacity: shown ? 1 : 0,
        transform: shown ? 'none' : 'translateY(32px)',
        transition: `opacity .9s cubic-bezier(.2,.7,.2,1) ${delay}ms, transform 1s cubic-bezier(.2,.7,.2,1) ${delay}ms`,
      };

  return (
    // @ts-expect-error — dynamic tag with a forwarded ref
    <Tag id={id} ref={ref} className={className} style={{ ...style, ...motionStyle }}>
      {children}
    </Tag>
  );
}

/* ── scroll progress bar ───────────────────────────────────── */
export function ScrollProgress() {
  const ref = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    let ticking = false;
    const update = () => {
      ticking = false;
      const vh = window.innerHeight;
      const doc = document.documentElement.scrollHeight - vh;
      const p = doc > 0 ? (window.scrollY / doc) * 100 : 0;
      if (ref.current) ref.current.style.width = p + '%';
    };
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(update);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    update();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return (
    <div
      ref={ref}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        height: 3,
        width: 0,
        background: '#00E834',
        zIndex: 60,
      }}
    />
  );
}

/* ── infinite marquee (content must be duplicated by the caller) ─ */
export function Marquee({
  children,
  durationMs = 50000,
  style,
}: {
  children: ReactNode;
  durationMs?: number;
  style?: CSSProperties;
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const reduce = useReducedMotion();
  useEffect(() => {
    if (reduce) return;
    const el = ref.current;
    if (!el) return;
    const anim = el.animate(
      [{ transform: 'translateX(0)' }, { transform: 'translateX(-50%)' }],
      { duration: durationMs, iterations: Infinity },
    );
    return () => anim.cancel();
  }, [reduce, durationMs]);
  return (
    <div ref={ref} style={{ display: 'flex', width: 'max-content', ...style }}>
      {children}
    </div>
  );
}

/* ── small helpers ─────────────────────────────────────────── */
export const JAKARTA = "'Plus Jakarta Sans', sans-serif";
export const clamp01 = (v: number) => Math.max(0, Math.min(1, v));
