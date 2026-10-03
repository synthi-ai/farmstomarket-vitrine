import type { Language } from '@/types/i18n';

/**
 * Single source of truth for every brand-level constant of the vitrine.
 *
 * Anything that appears in more than one place (URLs, contact details, marketing
 * figures, brand colors) lives here so it can be corrected or audited in one edit.
 * Nothing in this file is translated: the label next to a figure lives in `src/i18n`.
 */

export const SITE = {
  /** Canonical origin. Must stay in sync with `metadataBase` and `sitemap.ts`. */
  url: 'https://farmstomarket.io',
  name: 'Farms to Market',
  shortName: 'F2M',
  tagline: 'From Farm to Shelf, Simplified.',
  foundedIn: 'Douala, Cameroon',
  themeColor: '#00e834',
  ogImage: {
    url: '/images/home2.png',
    width: 1200,
    height: 630,
  },
  logo: {
    /** Horizontal lockup, used in the navbar and the mobile menu. */
    wordmark: '/logo/logo.svg',
    /** Square/ratio mark, used in JSON-LD and ogImage alt text. */
    mark: '/logo/farms2market.png',
  },
} as const;

export const CONTACT = {
  email: 'contact@farmstomarket.io',
  phone: '+237-620-207-980',
  phoneDisplay: '+237 6 20 07 98 0',
  address: {
    street: undefined as string | undefined,
    locality: 'Douala',
    region: 'Littoral',
    country: 'CM',
    countryName: 'Cameroon',
  },
  availableLanguages: ['English', 'French'],
} as const;

export const SOCIALS = {
  facebook: 'https://facebook.com/farmstomarket',
  twitter: 'https://twitter.com/farmstomarketcm',
  instagram: 'https://instagram.com/farmstomarket',
  linkedin: 'https://linkedin.com/company/farmstomarket',
} as const;

export const APPS = {
  /**
   * `apple` still points at the App Store root because the per-app URL was never
   * recorded. Replace it with the canonical
   * `https://apps.apple.com/app/idXXXXXXXXXX` as soon as the listing is public —
   * it is the only remaining placeholder in the CTA chain.
   */
  apple: 'https://apps.apple.com',
  googlePlay: {
    buyer: 'https://play.google.com/store/apps/details?id=com.i4u.synthi_ai.farms2market_mobile',
    pro: 'https://play.google.com/store/apps/details?id=com.i4u.synthi_ai.farms2markets_agents',
  },
} as const;

/** Store listing screenshots. EN and FR variants ship in `public/F2M - Store App Listing/`. */
export const STORE_LISTING = {
  buyer: ['A1', 'A2', 'A3', 'A4', 'A5'] as const,
  producer: ['B1', 'B2', 'B3', 'B4', 'B5'] as const,
  gallery: ['A1', 'A2', 'A3', 'A4', 'A5', 'B1', 'B2', 'B3', 'B4', 'B5'] as const,
};

/** Builds a `/F2M - Store App Listing/<lang>/PNG/<id>.png` path. */
export function storeShot(id: string, lang: Language): string {
  return `/F2M - Store App Listing/${lang.toUpperCase()}/PNG/${id}.png`;
}

/**
 * Marketing figures. Every number rendered on the site comes from here so that
 * `50 000+`, `4.8`, `98%` etc. can be re-verified or re-worded in one place
 * (see `des-farmstomarket/vitrine detail.txt` §2b on unverifiable claims).
 */
export const STATS = {
  users: '50,000+',
  countries: '15+',
  appStoreRating: '4.8',
  satisfaction: '98%',
  onTimeDelivery: '98%',
  escrowCoverage: '100%',
  support: '24/7',
  /** Rendered with a thin-space thousands separator in French. */
  usersFr: '50 000+',
  /** Per-persona outcome figures quoted in the success stories. */
  producerRevenue: '+45%',
  buyerCost: '-25%',
  producerStat: '+200%',
  buyerStat: '25%',
  transporterReliability: '97%',
  /** Figures quoted by the solutions showcase on the home page. */
  buyersConnected: '50K+',
  transactionsProcessed: '72.9K+',
  commodityCategories: '40+',
  forecastAccuracy: '98.2%',
} as const;

export const NAV_LINKS = {
  producer: '/producer',
  customer: '/customer',
  transporter: '/transporter',
  agrobank: '/agrobank',
  apps: '/apps',
  about: '/about',
  privacy: '/privacy',
} as const;