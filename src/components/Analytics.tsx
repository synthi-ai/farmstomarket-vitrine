'use client';

import { useEffect, useState } from 'react';
import { GoogleAnalytics } from '@next/third-parties/google';

/**
 * Consent-gated Google Analytics 4.
 *
 * GA only loads when BOTH conditions hold:
 *  1. `NEXT_PUBLIC_GA_ID` is set (otherwise this renders nothing — safe by default).
 *  2. The visitor accepted "all" cookies in the CookieBanner.
 *
 * The banner dispatches a `ftm:consent` event on choice, and writes the
 * `storage` key, so consent is picked up live (same tab + other tabs) without
 * a reload. `@next/third-parties` tracks client-side route changes on its own.
 */
// GA4 measurement ID. Public by design (shipped to the browser). Overridable
// via NEXT_PUBLIC_GA_ID; set it to an empty string to disable analytics.
const GA_ID = process.env.NEXT_PUBLIC_GA_ID ?? 'G-6XTVB4X9BL';
const CONSENT_KEY = 'cookiesAccepted';

export default function Analytics() {
  const [consented, setConsented] = useState(false);

  useEffect(() => {
    if (!GA_ID) return;
    const read = () => {
      try {
        setConsented(localStorage.getItem(CONSENT_KEY) === 'all');
      } catch {
        setConsented(false);
      }
    };
    read();
    window.addEventListener('ftm:consent', read);
    window.addEventListener('storage', read);
    return () => {
      window.removeEventListener('ftm:consent', read);
      window.removeEventListener('storage', read);
    };
  }, []);

  if (!GA_ID || !consented) return null;
  return <GoogleAnalytics gaId={GA_ID} />;
}
