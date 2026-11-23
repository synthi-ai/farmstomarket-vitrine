'use client';

import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { swapLocale, withLocale } from '@/i18n/routing';
import type { Language } from '@/types/i18n';
import { ScrollProgress, JAKARTA } from '@/components/f2m/primitives';
import { T, CHAPTERS } from '@/content/home';
import { SOLUTIONS, ORDER, type SolutionKey } from '@/content/solutions';

const LOGO = '/assets/logo.png';

/** Cropped logo lockup (the PNG has transparent padding baked in). */
function Logo({ href, label }: { href: string; label: string }) {
  return (
    <a
      href={href}
      aria-label={label}
      style={{ position: 'relative', display: 'block', flex: 'none', width: 118, height: 44, overflow: 'hidden' }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={LOGO}
        alt={label}
        style={{ position: 'absolute', top: -30, left: -30, height: 104, width: 'auto', maxWidth: 'none' }}
      />
    </a>
  );
}

export default function Navbar() {
  const { language } = useLanguage();
  const pathname = usePathname() ?? '/';
  const router = useRouter();
  const t = T[language];

  const home = withLocale(language, '/');
  const isHome = pathname === home || pathname === `/${language}`;
  const solutionsMatch = pathname.match(/\/solutions\/([^/]+)/);
  const isSolutions = !!solutionsMatch;
  const currentKey = (solutionsMatch?.[1] ?? 'producteurs') as SolutionKey;

  const next: Language = language === 'en' ? 'fr' : 'en';
  const toggleLang = () => {
    document.cookie = `ftm_lang=${next}; path=/; max-age=31536000; samesite=lax`;
    router.push(swapLocale(pathname, next));
  };

  return (
    <>
      <ScrollProgress />
      <header
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 50,
          background: 'rgba(255,255,255,0.86)',
          backdropFilter: 'saturate(1.6) blur(18px)',
          WebkitBackdropFilter: 'saturate(1.6) blur(18px)',
          borderBottom: '1px solid #EEF0F4',
        }}
      >
        <div
          style={{
            maxWidth: 1320,
            margin: '0 auto',
            padding: '8px 24px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: 20,
          }}
        >
          <Logo href={home} label="Farms to Market" />

          {isHome ? <ChapterNav labels={t.nav} lang={language} /> : null}
          {isSolutions ? <SolutionsHomeLink lang={language} label={SOLUTIONS[language].ui.home} /> : null}

          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <button
              onClick={toggleLang}
              aria-label="Language"
              style={{
                border: '1px solid #C1C5D0',
                background: '#FFFFFF',
                cursor: 'pointer',
                fontWeight: 700,
                fontSize: 13,
                width: 44,
                height: 40,
                borderRadius: 10,
                color: '#040405',
              }}
            >
              {t.langSwitch}
            </button>
            <a
              href={isSolutions ? '#cta' : '#rejoindre'}
              style={{
                background: '#040405',
                color: '#FFFFFF',
                fontWeight: 700,
                fontSize: 14,
                padding: '11px 16px',
                borderRadius: 10,
                whiteSpace: 'nowrap',
              }}
            >
              {isSolutions ? SOLUTIONS[language].ui.join : t.headerCta}
            </a>
            {isHome ? <MobileMenu labels={t.nav} /> : null}
          </div>
        </div>

        {isSolutions ? <SolutionsTabs lang={language} current={currentKey} /> : null}
      </header>
    </>
  );
}

/* ── Home: chapter nav with scroll-driven active highlight ───── */
function ChapterNav({ labels, lang }: { labels: readonly string[]; lang: Language }) {
  const [active, setActive] = useState('');
  const [wide, setWide] = useState(true);

  useEffect(() => {
    const onResize = () => setWide(window.innerWidth >= 1180);
    onResize();
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) setActive((e.target as HTMLElement).dataset.chapter ?? '');
        }),
      { rootMargin: '-40% 0px -55% 0px' },
    );
    document.querySelectorAll('[data-chapter]').forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [lang]);

  if (!wide) return null;
  return (
    <nav style={{ display: 'flex', alignItems: 'center', gap: 2 }}>
      {labels.map((label, i) => (
        <a
          key={label}
          href={`#${CHAPTERS[i]}`}
          style={{
            fontWeight: 600,
            fontSize: 14,
            padding: '10px 11px',
            borderRadius: 8,
            color: active === CHAPTERS[i] ? '#040405' : '#58617B',
            transition: 'color .3s ease',
          }}
        >
          {label}
        </a>
      ))}
    </nav>
  );
}

/* ── Home: mobile hamburger menu (<1180px) ──────────────────── */
function MobileMenu({ labels }: { labels: readonly string[] }) {
  const [open, setOpen] = useState(false);
  const [narrow, setNarrow] = useState(false);

  useEffect(() => {
    const onResize = () => setNarrow(window.innerWidth < 1180);
    onResize();
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  if (!narrow) return null;
  return (
    <>
      <button
        onClick={() => setOpen((o) => !o)}
        aria-label="Menu"
        aria-expanded={open}
        style={{
          border: 0,
          background: '#EEF0F4',
          cursor: 'pointer',
          width: 44,
          height: 40,
          borderRadius: 10,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 5,
        }}
      >
        <span style={{ width: 18, height: 2, background: '#040405' }} />
        <span style={{ width: 18, height: 2, background: '#040405' }} />
      </button>
      {open ? (
        <nav
          style={{
            position: 'absolute',
            left: 0,
            right: 0,
            top: '100%',
            borderTop: '1px solid #EEF0F4',
            background: '#FFFFFF',
            padding: '8px 24px 24px',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          {labels.map((label, i) => (
            <a
              key={label}
              href={`#${CHAPTERS[i]}`}
              onClick={() => setOpen(false)}
              style={{
                display: 'flex',
                gap: 14,
                alignItems: 'baseline',
                fontFamily: JAKARTA,
                fontWeight: 700,
                fontSize: 22,
                letterSpacing: '-0.02em',
                padding: '14px 0',
                borderBottom: '1px solid #EEF0F4',
                color: '#040405',
              }}
            >
              <span style={{ fontSize: 13, color: '#00801D' }}>
                {String(i + 1).padStart(2, '0')}
              </span>
              {label}
            </a>
          ))}
        </nav>
      ) : null}
    </>
  );
}

/* ── Solutions: "Home" link in the top bar ──────────────────── */
function SolutionsHomeLink({ lang, label }: { lang: Language; label: string }) {
  return (
    <a
      href={withLocale(lang, '/')}
      style={{ marginLeft: 'auto', fontWeight: 600, fontSize: 14, padding: '10px 11px', color: '#58617B' }}
    >
      {label}
    </a>
  );
}

/* ── Solutions: horizontal tab bar ──────────────────────────── */
function SolutionsTabs({ lang, current }: { lang: Language; current: SolutionKey }) {
  const pages = SOLUTIONS[lang].pages;
  return (
    <nav
      className="f2m-noscrollbar"
      style={{
        maxWidth: 1320,
        margin: '0 auto',
        padding: '0 24px',
        display: 'flex',
        gap: 4,
        overflowX: 'auto',
      }}
    >
      {ORDER.map((key) => {
        const on = key === current;
        return (
          <a
            key={key}
            href={withLocale(lang, `/solutions/${key}`)}
            style={{
              flex: 'none',
              minHeight: 44,
              padding: '0 12px',
              fontWeight: 700,
              fontSize: 14,
              color: on ? '#040405' : '#58617B',
              borderBottom: `2px solid ${on ? '#00E834' : 'transparent'}`,
              transition: 'color .3s ease, border-color .3s ease',
              display: 'flex',
              alignItems: 'center',
              gap: 8,
            }}
          >
            {pages[key].nav}
            {key === 'faroya' ? (
              <span
                style={{
                  fontSize: 11,
                  fontWeight: 700,
                  color: '#006116',
                  background: '#E6FDEB',
                  padding: '3px 6px',
                  borderRadius: 5,
                }}
              >
                β
              </span>
            ) : null}
          </a>
        );
      })}
    </nav>
  );
}
