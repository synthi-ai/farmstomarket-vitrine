/**
 * Single source of truth for every brand-level constant of the vitrine.
 *
 * Anything that appears in more than one place (URLs, contact details, brand
 * colors) lives here so it can be corrected or audited in one edit.
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
  facebook: 'https://www.facebook.com/profile.php?id=61577887537275',
  twitter: 'https://twitter.com/farmstomarketcm',
  instagram: 'https://instagram.com/farmstomarket',
  linkedin: 'https://www.linkedin.com/company/farm-stomarket',
  tiktok: 'https://www.tiktok.com/@farmstomarket.io',
} as const;