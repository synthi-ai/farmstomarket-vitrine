import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import BackToTop from '@/components/BackToTop';
import CookieBanner from '@/components/CookieBanner';
import SkipToContent from '@/components/SkipToContent';
import Analytics from '@/components/Analytics';
import '../globals.css';
import localFont from 'next/font/local';
import { Urbanist, Plus_Jakarta_Sans } from 'next/font/google';
import React from 'react';
import type { Metadata, Viewport } from 'next';
import { notFound } from 'next/navigation';
import { LanguageProvider } from '@/contexts/LanguageContext';
import { CONTACT, SITE, SOCIALS } from '@/data/site';
import { LANGUAGES, type Language } from '@/types/i18n';
import { isLanguage } from '@/i18n/routing';

const inter = localFont({
  src: '../fonts/Inter.woff2',
  display: 'swap',
});

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

const OG_ALT =
  'Farms to Market - Agricultural Trade Platform connecting farmers, buyers, and transporters';

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

  return {
    metadataBase: new URL(SITE.url),
    title: {
      default: `${SITE.name} - Direct Agricultural Trade Platform in Cameroon`,
      template: `%s | ${SITE.name}`,
    },
    description:
      'Connect farmers, buyers, and transporters in one secure platform. Sell directly, get fair prices, and ensure transparent delivery with AI-powered pricing and escrow payments.',
    keywords: [
      'agriculture', 'farming', 'direct trade', 'Cameroon', 'fair pricing',
      'secure payments', 'transportation', 'agricultural products', 'farmers market',
      'farm to table', 'agricultural marketplace', 'agritech', 'Africa',
      'escrow payments', 'mobile money', 'supply chain', 'food security',
      'plateforme agricole', 'marché agricole', 'Cameroun',
    ],
    authors: [{ name: `${SITE.name} Team`, url: `${SITE.url}/${lang}/about` }],
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
    openGraph: {
      type: 'website',
      locale,
      alternateLocale,
      url: `${SITE.url}/${lang}`,
      siteName: SITE.name,
      title: `${SITE.name} - Direct Agricultural Trade Platform`,
      description:
        'Revolutionary platform connecting farmers directly with buyers. Fair pricing, secure payments, and transparent delivery for agricultural products in Cameroon.',
      images: [
        {
          url: SITE.ogImage.url,
          width: SITE.ogImage.width,
          height: SITE.ogImage.height,
          alt: OG_ALT,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${SITE.name} - Direct Agricultural Trade Platform`,
      description:
        'Connect farmers, buyers, and transporters. Fair prices, secure payments, transparent delivery in Cameroon.',
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
  logo: `${SITE.url}${SITE.logo.mark}`,
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
  sameAs: [SOCIALS.facebook, SOCIALS.twitter, SOCIALS.instagram, SOCIALS.linkedin],
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
      </head>
      <body className={`${inter.className} ${urbanist.variable} ${plusJakartaSans.variable} antialiased overflow-x-hidden bg-gray-950 text-white`}>
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
