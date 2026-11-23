'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import { withLocale } from '@/i18n/routing';
import { T } from '@/content/home';
import type { Language } from '@/types/i18n';

const SOCIALS: [string, string][] = [
  ['LinkedIn', 'https://www.linkedin.com/company/farm-stomarket'],
  ['Facebook', 'https://www.facebook.com/profile.php?id=61577887537275'],
  ['TikTok', 'https://www.tiktok.com/@farmstomarket.io'],
  ['Instagram', 'https://instagram.com/farmstomarket'],
  ['X', 'https://twitter.com/farmstomarketcm'],
];

/** Rewrites the design's `Solutions.dc.html?p=key` hrefs to locale routes. */
function resolveHref(href: string, lang: Language): string {
  const m = href.match(/^Solutions\.dc\.html\?p=(.+)$/);
  if (m) return withLocale(lang, `/solutions/${m[1]}`);
  return href;
}

export default function Footer() {
  const { language } = useLanguage();
  const t = T[language];

  return (
    <footer style={{ background: '#040405', color: '#A3A8B7' }}>
      <div
        style={{
          maxWidth: 1320,
          margin: '0 auto',
          padding: 'clamp(56px,7vw,88px) 24px clamp(40px,5vw,56px)',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 200px), 1fr))',
          gap: '40px 32px',
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
          <span style={{ position: 'relative', display: 'block', width: 196, height: 72, overflow: 'hidden' }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/assets/logo.png"
              alt="Farms to Market"
              style={{
                position: 'absolute',
                top: -50,
                left: -50,
                height: 172,
                width: 'auto',
                maxWidth: 'none',
                filter: 'brightness(0) invert(1)',
              }}
            />
          </span>
          <p style={{ margin: 0, fontSize: 16, lineHeight: 1.55, maxWidth: 280 }}>{t.footer.tagline}</p>
        </div>

        {t.footer.cols.map((col) => (
          <div key={col.title} style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            <span
              style={{
                fontSize: 13,
                fontWeight: 700,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: '#868CA0',
              }}
            >
              {col.title}
            </span>
            {col.links.map(([label, href]) => (
              <a
                key={label + href}
                href={resolveHref(href, language)}
                className="f2m-footlink"
                style={{ color: '#FFFFFF', fontSize: 16, fontWeight: 500 }}
              >
                {label}
              </a>
            ))}
          </div>
        ))}
      </div>

      <div style={{ borderTop: '1px solid #1A1A1A' }}>
        <div
          style={{
            maxWidth: 1320,
            margin: '0 auto',
            padding: '22px 24px',
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            gap: '12px 24px',
            fontSize: 14,
            color: '#868CA0',
          }}
        >
          <span>© 2026 Farm’sToMarket · farmstomarket.io · Douala</span>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px 20px' }}>
            {SOCIALS.map(([label, href]) => (
              <a key={label} href={href} target="_blank" rel="noopener noreferrer" style={{ color: '#C1C5D0' }}>
                {label}
              </a>
            ))}
          </div>
          <span>{t.footer.powered}</span>
        </div>
      </div>
    </footer>
  );
}
