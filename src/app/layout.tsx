import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import BackToTop from '@/components/BackToTop';
import CookieBanner from '@/components/CookieBanner';
import PWAInstallPrompt from '@/components/PWAInstallPrompt';
import './globals.css';
import localFont from 'next/font/local';
import { Urbanist, Plus_Jakarta_Sans } from 'next/font/google';
import React from 'react';
import type { Metadata, Viewport } from 'next';
import { LanguageProvider } from '@/contexts/LanguageContext';

const inter = localFont({
  src: './fonts/Inter.woff2',
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

export const metadata: Metadata = {
  metadataBase: new URL('https://farmstomarket.io'),
  title: {
    default: 'Farms to Market - Direct Agricultural Trade Platform in Cameroon',
    template: '%s | Farms to Market',
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
  authors: [{ name: 'Farms to Market Team', url: 'https://farmstomarket.io/about' }],
  creator: 'Farms to Market',
  publisher: 'Farms to Market',
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
  openGraph: {
    type: 'website',
    locale: 'en_US',
    alternateLocale: 'fr_CM',
    url: 'https://farmstomarket.io',
    siteName: 'Farms to Market',
    title: 'Farms to Market - Direct Agricultural Trade Platform',
    description:
      'Revolutionary platform connecting farmers directly with buyers. Fair pricing, secure payments, and transparent delivery for agricultural products in Cameroon.',
    images: [
      {
        url: '/images/home2.png',
        width: 1200,
        height: 630,
        alt: 'Farms to Market - Agricultural Trade Platform connecting farmers, buyers, and transporters',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Farms to Market - Direct Agricultural Trade Platform',
    description:
      'Connect farmers, buyers, and transporters. Fair prices, secure payments, transparent delivery in Cameroon.',
    images: ['/images/home2.png'],
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
  manifest: '/site.webmanifest',
  alternates: { canonical: 'https://farmstomarket.io' },
  category: 'agricultural marketplace',
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#00e834',
};

const jsonLdOrganization = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Farms to Market',
  url: 'https://farmstomarket.io',
  logo: 'https://farmstomarket.io/logo/farms2market.png',
  description:
    'Direct agricultural trade platform connecting farmers, buyers, and transporters in Cameroon',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Douala',
    addressRegion: 'Littoral',
    addressCountry: 'CM',
  },
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+237-620-207-980',
    email: 'contact@farmstomarket.io',
    contactType: 'customer service',
    availableLanguage: ['English', 'French'],
  },
  sameAs: [
    'https://facebook.com/farmstomarket',
    'https://twitter.com/farmstomarketcm',
    'https://instagram.com/farmstomarket',
    'https://linkedin.com/company/farmstomarket',
  ],
};

const jsonLdWebApp = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'Farms to Market',
  description: 'Direct agricultural trade platform connecting farmers, buyers, and transporters',
  url: 'https://farmstomarket.io',
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

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="Farms to Market" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="msapplication-TileColor" content="#00e834" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
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
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 z-50 rounded-lg bg-emerald-500 px-4 py-2 font-bold text-black"
        >
          Skip to main content
        </a>

        <LanguageProvider>
          <Navbar />
          <main id="main-content" className="min-h-screen">
            {children}
          </main>
          <Footer />
          <PWAInstallPrompt />
          <CookieBanner />
          <BackToTop />
        </LanguageProvider>
      </body>
    </html>
  );
}
