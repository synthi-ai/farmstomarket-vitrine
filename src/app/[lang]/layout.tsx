import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import BackToTop from '@/components/BackToTop';
import CookieBanner from '@/components/CookieBanner';
import SkipToContent from '@/components/SkipToContent';
import Analytics from '@/components/Analytics';
import '../globals.css';
import { Urbanist, Plus_Jakarta_Sans } from 'next/font/google';
import React from 'react';
import type { Metadata, Viewport } from 'next';
import { notFound } from 'next/navigation';
import { LanguageProvider } from '@/contexts/LanguageContext';
import { CONTACT, SITE, SOCIALS } from '@/data/site';
import { LANGUAGES, type Language } from '@/types/i18n';
import { isLanguage } from '@/i18n/routing';

/** Localized SEO strings for the root layout / home page. */
const SEO_STRINGS = {
  en: {
    titleDefault: `${SITE.name} - Direct Agricultural Trade Platform in Cameroon`,
    description:
      'Connect farmers, buyers, and transporters in one secure platform. Sell directly, get fair prices, and ensure transparent delivery with AI-powered pricing and escrow payments.',
    ogTitle: `${SITE.name} - Direct Agricultural Trade Platform`,
    ogDescription:
      'Revolutionary platform connecting farmers directly with buyers. Fair pricing, secure payments, and transparent delivery for agricultural products in Cameroon.',
    twitterTitle: `${SITE.name} - Direct Agricultural Trade Platform`,
    twitterDescription:
      'Connect farmers, buyers, and transporters. Fair prices, secure payments, transparent delivery in Cameroon.',
    ogAlt:
      "Farm'sToMarket - Agricultural Trade Platform connecting farmers, buyers, and transporters",
  },
  fr: {
    titleDefault: `${SITE.name} - Plateforme de commerce agricole direct au Cameroun`,
    description:
      'Connectez agriculteurs, acheteurs et transporteurs sur une seule plateforme sécurisée. Vendez directement, obtenez des prix justes et garantissez des livraisons transparentes.',
    ogTitle: `${SITE.name} - Plateforme de commerce agricole direct`,
    ogDescription:
      'Plateforme révolutionnaire reliant directement agriculteurs et acheteurs. Prix équitables, paiements sécurisés et livraisons transparentes pour les produits agricoles au Cameroun.',
    twitterTitle: `${SITE.name} - Plateforme agricole directe`,
    twitterDescription:
      'Agriculteurs, acheteurs et transporteurs réunis. Prix justes, paiements sécurisés, livraisons transparentes au Cameroun.',
    ogAlt:
      "Farm'sToMarket - Plateforme de commerce agricole reliant agriculteurs, acheteurs et transporteurs",
  },
} as const;

const urbanist = Urbanist({
  subsets: ['latin'],
  variable: '--font-urbanist',
  weight: ['400', '500', '600', '700', '800'],
  display: 'swap',
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-plus-jakarta',
  weight: ['400', '500', '600', '700', '800'],
  display: 'swap',
});

/** Statically render both locales at build time. */
export function generateStaticParams() {
  return LANGUAGES.map((lang) => ({ lang }));
}

/** Only `/en` and `/fr` are valid — any other first segment 404s. */
export const dynamicParams = false;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const locale = lang === 'fr' ? 'fr_CM' : 'en_US';
  const alternateLocale = lang === 'fr' ? 'en_US' : 'fr_CM';
  const s = SEO_STRINGS[lang === 'fr' ? 'fr' : 'en'];

  return {
    metadataBase: new URL(SITE.url),
    title: {
      default: s.titleDefault,
      template: `%s | ${SITE.name}`,
    },
    description: s.description,
    keywords: [
      'agriculture', 'farming', 'direct trade', 'Cameroon', 'fair pricing',
      'secure payments', 'transportation', 'agricultural products', 'farmers market',
      'farm to table', 'agricultural marketplace', 'agritech', 'Africa',
      'escrow payments', 'mobile money', 'supply chain', 'food security',
      'plateforme agricole', 'marché agricole', 'Cameroun',
    ],
    authors: [{ name: `${SITE.name} Team`, url: `${SITE.url}/${lang}` }],
    creator: SITE.name,
    publisher: SITE.name,
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    alternates: {
      canonical: `${SITE.url}/${lang}`,
      languages: {
        en: `${SITE.url}/en`,
        fr: `${SITE.url}/fr`,
        'x-default': `${SITE.url}/en`,
      },
    },
    // Set GOOGLE_SITE_VERIFICATION in the environment to emit the Search Console
    // verification meta tag. Omitted entirely when the var is empty/unset.
    ...(process.env.GOOGLE_SITE_VERIFICATION
      ? { verification: { google: process.env.GOOGLE_SITE_VERIFICATION } }
      : {}),
    openGraph: {
      type: 'website',
      locale,
      alternateLocale,
      url: `${SITE.url}/${lang}`,
      siteName: SITE.name,
      title: s.ogTitle,
      description: s.ogDescription,
      images: [
        {
          url: SITE.ogImage.url,
          width: SITE.ogImage.width,
          height: SITE.ogImage.height,
          alt: s.ogAlt,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: s.twitterTitle,
      description: s.twitterDescription,
      images: [SITE.ogImage.url],
      creator: '@FarmsToMarketCM',
      site: '@FarmsToMarketCM',
    },
    icons: {
      icon: [
        { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
        { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      ],
      apple: [{ url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }],
    },
    category: 'agricultural marketplace',
  };
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: SITE.themeColor,
};

const jsonLdOrganization = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: SITE.name,
  url: SITE.url,
  logo: {
    '@type': 'ImageObject',
    url: `${SITE.url}${SITE.logo.mark}`,
  },
  description:
    'Direct agricultural trade platform connecting farmers, buyers, and transporters in Cameroon',
  address: {
    '@type': 'PostalAddress',
    addressLocality: CONTACT.address.locality,
    addressRegion: CONTACT.address.region,
    addressCountry: CONTACT.address.country,
  },
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: CONTACT.phone,
    email: CONTACT.email,
    contactType: 'customer service',
    availableLanguage: [...CONTACT.availableLanguages],
  },
  sameAs: [SOCIALS.facebook, SOCIALS.twitter, SOCIALS.instagram, SOCIALS.linkedin, SOCIALS.tiktok],
};

const jsonLdWebApp = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: SITE.name,
  description: 'Direct agricultural trade platform connecting farmers, buyers, and transporters',
  url: SITE.url,
  applicationCategory: 'BusinessApplication',
  operatingSystem: 'All',
  offers: {
    '@type': 'Offer',
    description: 'Agricultural marketplace services',
    price: '0',
    priceCurrency: 'XAF',
    availability: 'https://schema.org/InStock',
  },
  featureList: [
    'Direct farmer-to-buyer trading',
    'AI-powered fair pricing',
    'Secure escrow payments',
    'Real-time delivery tracking',
    'Quality assurance guarantee',
    'Mobile money integration',
  ],
};

function buildJsonLdWebSite(lang: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: SITE.name,
    url: `${SITE.url}/${lang}`,
    inLanguage: lang === 'fr' ? 'fr-CM' : 'en-US',
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${SITE.url}/${lang}?q={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
  };
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!isLanguage(lang)) notFound();
  const language: Language = lang;

  return (
    <html lang={language} className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdOrganization) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdWebApp) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(buildJsonLdWebSite(language)) }}
        />
      </head>
      <body className={`${urbanist.variable} ${plusJakartaSans.variable} antialiased overflow-x-hidden`} style={{ fontFamily: 'var(--font-urbanist)', background: '#FFFFFF', color: '#040405' }}>
        <LanguageProvider lang={language}>
          <SkipToContent />
          <Navbar />
          <main id="main-content" className="min-h-screen">
            {children}
          </main>
          <Footer />
          <CookieBanner />
          <BackToTop />
          <Analytics />
        </LanguageProvider>
      </body>
    </html>
  );
}
