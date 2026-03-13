import Footer from '@/components/Footer';
import BackToTop from '@/components/BackToTop';
import CookieBanner from '@/components/CookieBanner';
import PWAInstallPrompt from '@/components/PWAInstallPrompt';
import './globals.css';
import { Inter } from 'next/font/google';
import React from 'react';
import type { Metadata, Viewport } from 'next';
import { LanguageProvider } from '@/contexts/LanguageContext';

const inter = Inter({ subsets: ['latin'], display: 'swap' });

export const metadata: Metadata = {
  metadataBase: new URL('https://farmstomarket.com'),
  title: 'Farms to Market - Direct Agricultural Trade Platform in Cameroon',
  description: 'Connect farmers, buyers, and transporters in one secure platform. Sell directly, get fair prices, and ensure transparent delivery with AI-powered pricing and escrow payments.',
  keywords: 'agriculture, farming, direct trade, Cameroon, fair pricing, secure payments, transportation, agricultural products, farmers market, farm to table, agricultural marketplace',
  authors: [{ name: 'Farms to Market Team' }],
  creator: 'Farms to Market',
  publisher: 'Farms to Market',
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://farmstomarket.com',
    siteName: 'Farms to Market',
    title: 'Farms to Market - Direct Agricultural Trade Platform',
    description: 'Revolutionary platform connecting farmers directly with buyers. Fair pricing, secure payments, and transparent delivery for agricultural products in Cameroon.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Farms to Market - Agricultural Trade Platform',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Farms to Market - Agricultural Revolution',
    description: 'Direct trade platform for farmers. Fair prices, secure payments, transparent delivery.',
    images: ['/twitter-image.jpg'],
    creator: '@FarmsToMarketCM',
  },
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      {
        rel: 'mask-icon',
        url: '/safari-pinned-tab.svg',
        color: '#10b981',
      },
    ],
  },
  manifest: '/site.webmanifest',
  verification: {
    google: '<GOOGLE_SITE_VERIFICATION_CODE>',
    yandex: '<YANDEX_VERIFICATION_CODE>',
    yahoo: '<YAHOO_VERIFICATION_CODE>',
  },
  alternates: {
    canonical: 'https://farmstomarket.com',
    languages: {
      'en-US': 'https://farmstomarket.com/en',
      'fr-CM': 'https://farmstomarket.com/fr',
    },
  },
  category: 'agricultural marketplace',
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#10b981',
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "Farms to Market",
  "description": "Direct agricultural trade platform connecting farmers, buyers, and transporters",
  "url": "https://farmstomarket.com",
  "logo": "https://farmstomarket.com/logo.png",
  "applicationCategory": "BusinessApplication",
  "operatingSystem": "All",
  "address": {
    "@type": "PostalAddress",
    "addressCountry": "CM",
    "addressLocality": ["Douala", "Yaound\u00e9", "Bamenda", "Garoua"],
    "addressRegion": "Littoral"
  },
  "telephone": "+237-620-207-980",
  "email": "hello@farmstomarket.com",
  "offers": {
    "@type": "Offer",
    "description": "Agricultural marketplace services",
    "price": "0",
    "priceCurrency": "XAF",
    "availability": "https://schema.org/InStock"
  },
  "featureList": [
    "Direct farmer-to-buyer trading",
    "AI-powered fair pricing",
    "Secure escrow payments",
    "Real-time delivery tracking",
    "Quality assurance guarantee",
    "Mobile money integration"
  ],
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "15000"
  },
  "sameAs": [
    "https://facebook.com/farmstomarket",
    "https://twitter.com/farmstomarketcm",
    "https://instagram.com/farmstomarket",
    "https://linkedin.com/company/farmstomarket"
  ]
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="Farms to Market" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="msapplication-TileColor" content="#10b981" />
        <meta name="msapplication-config" content="/browserconfig.xml" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${inter.className} antialiased overflow-x-hidden bg-gray-950 text-white`}
      >
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-emerald-600 text-white px-4 py-2 rounded-lg z-50 font-semibold"
        >
          Skip to main content
        </a>

        <LanguageProvider>
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
