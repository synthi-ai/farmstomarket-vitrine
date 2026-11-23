import { GoogleAnalytics } from '@next/third-parties/google';

/**
 * Google Analytics 4, loaded on every page for every visitor (per the Google
 * tag setup instructions). `@next/third-parties` injects the standard
 * `gtm.js?id=<GA_ID>` + dataLayer snippet and tracks client-side route changes.
 */
// GA4 measurement ID — hard-wired so analytics works out of the box.
// Public by design (shipped to the browser). A non-empty NEXT_PUBLIC_GA_ID
// overrides it; an empty/unset value falls back to this baked-in ID.
const GA_ID = process.env.NEXT_PUBLIC_GA_ID || 'G-6XTVB4X9BL';

export default function Analytics() {
  if (!GA_ID) return null;
  return <GoogleAnalytics gaId={GA_ID} />;
}
