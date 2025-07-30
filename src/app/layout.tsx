import Footer from '@/components/Footer';
import './globals.css';
import { Inter } from 'next/font/google';
import React from 'react';
import type { Metadata, Viewport } from 'next';

const inter = Inter({ subsets: ['latin'] });

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
        color: '#00E834',
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
  maximumScale: 1,
  themeColor: '#00E834',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="Farms to Market" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="msapplication-TileColor" content="#00E834" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
        
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
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
                "addressLocality": ["Douala", "Yaoundé", "Bamenda", "Garoua"],
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
            })
          }}
        />
      </head>
      <body 
        className={`${inter.className} antialiased overflow-x-hidden`}
        style={{
          background: `
            radial-gradient(circle at 20% 50%, rgba(0, 232, 52, 0.08) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(0, 232, 52, 0.06) 0%, transparent 50%),
            radial-gradient(circle at 40% 80%, rgba(0, 232, 52, 0.04) 0%, transparent 50%),
            #FFFFFF
          `,
          backgroundAttachment: 'fixed'
        }}
      >
        <a 
          href="#main-content" 
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-gradient-to-r from-[#00E834] to-green-600 text-white px-4 py-2 rounded-lg z-50 font-semibold"
        >
          Skip to main content
        </a>

        <div id="pwa-install-prompt" className="hidden fixed bottom-4 left-4 right-4 z-50 bg-gradient-to-r from-[#00E834] to-green-600 text-white p-4 rounded-2xl shadow-lg backdrop-blur-xl border border-[#00E834]/30">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="text-2xl">🌾</div>
              <div>
                <h3 className="font-bold">Install Farms to Market App</h3>
                <p className="text-sm opacity-90">Get offline access and faster trading features</p>
              </div>
            </div>
            <div className="flex space-x-2">
              <button 
                id="pwa-install-btn" 
                className="bg-white text-[#00E834] px-4 py-2 rounded-lg font-semibold text-sm hover:bg-gray-100 transition-colors duration-300"
              >
                Install
              </button>
              <button 
                id="pwa-dismiss-btn" 
                className="text-white/70 hover:text-white px-2 transition-colors duration-300"
              >
                ✕
              </button>
            </div>
          </div>
        </div>

        <div id="route-loading" className="hidden fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center">
          <div className="bg-gradient-to-r from-[#00E834] to-green-600 rounded-full p-4 animate-pulse">
            <div className="w-8 h-8 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
          </div>
        </div>

        <div id="cookie-banner" className="fixed bottom-0 left-0 right-0 z-40 bg-gray-900/95 backdrop-blur-xl border-t border-gray-800 p-4 transform translate-y-full transition-transform duration-500">
          <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center space-x-3">
              <div className="text-2xl"> </div>
              <p className="text-white text-sm">
                We use cookies to enhance your trading experience and provide market insights. 
                <a href="/privacy" className="text-[#00E834] hover:underline ml-1">Learn more</a>
              </p>
            </div>
            <div className="flex space-x-3">
              <button 
                id="cookie-accept" 
                className="bg-gradient-to-r from-[#00E834] to-green-600 text-white px-6 py-2 rounded-lg font-semibold text-sm hover:from-green-600 hover:to-[#00E834] transition-all duration-300"
              >
                Accept All
              </button>
              <button 
                id="cookie-essential" 
                className="bg-transparent border border-gray-600 text-white px-6 py-2 rounded-lg font-semibold text-sm hover:border-[#00E834] transition-colors duration-300"
              >
                Essential Only
              </button>
            </div>
          </div>
        </div>

        <main id="main-content" className="min-h-screen">
          {children}
        </main>

        <Footer />

        <button 
          id="back-to-top"
          className="fixed bottom-8 right-8 w-14 h-14 bg-gradient-to-r from-[#00E834] to-green-600 hover:from-green-600 hover:to-[#00E834] text-white rounded-full shadow-lg hover:shadow-[#00E834]/30 transition-all duration-300 transform hover:scale-110 opacity-0 invisible z-30 flex items-center justify-center"
          aria-label="Back to top"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </button>

        <div className="fixed bottom-24 right-8 z-30">
          <button 
            id="quick-action-fab"
            className="w-16 h-16 bg-gradient-to-r from-[#00E834] to-green-600 hover:from-green-600 hover:to-[#00E834] text-white rounded-full shadow-lg hover:shadow-[#00E834]/30 transition-all duration-300 transform hover:scale-110 flex items-center justify-center group"
            aria-label="Quick actions"
          >
            <svg className="w-8 h-8 transition-transform group-hover:rotate-45" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </svg>
          </button>
          
          <div id="quick-action-menu" className="absolute bottom-20 right-0 space-y-3 opacity-0 invisible transition-all duration-300">
            <button className="w-12 h-12 bg-white text-[#00E834] rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group" title="List Product">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
            </button>
            <button className="w-12 h-12 bg-white text-[#00E834] rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group" title="Search Products">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
            <button className="w-12 h-12 bg-white text-[#00E834] rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group" title="Messages">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
            </button>
          </div>
        </div>

        <script
          dangerouslySetInnerHTML={{
            __html: `
              if ('serviceWorker' in navigator) {
                window.addEventListener('load', () => {
                  navigator.serviceWorker.register('/sw.js')
                    .then((registration) => {
                      console.log('SW registered: ', registration);
                    })
                    .catch((registrationError) => {
                      console.log('SW registration failed: ', registrationError);
                    });
                });
              }

              let deferredPrompt;
              window.addEventListener('beforeinstallprompt', (e) => {
                e.preventDefault();
                deferredPrompt = e;
                document.getElementById('pwa-install-prompt').classList.remove('hidden');
              });

              document.getElementById('pwa-install-btn')?.addEventListener('click', async () => {
                if (deferredPrompt) {
                  deferredPrompt.prompt();
                  const { outcome } = await deferredPrompt.userChoice;
                  console.log('User choice:', outcome);
                  deferredPrompt = null;
                  document.getElementById('pwa-install-prompt').classList.add('hidden');
                }
              });

              document.getElementById('pwa-dismiss-btn')?.addEventListener('click', () => {
                document.getElementById('pwa-install-prompt').classList.add('hidden');
              });

              const backToTopBtn = document.getElementById('back-to-top');
              window.addEventListener('scroll', () => {
                if (window.pageYOffset > 300) {
                  backToTopBtn.classList.remove('opacity-0', 'invisible');
                } else {
                  backToTopBtn.classList.add('opacity-0', 'invisible');
                }
              });

              backToTopBtn?.addEventListener('click', () => {
                window.scrollTo({ top: 0, behavior: 'smooth' });
              });

              const quickActionFab = document.getElementById('quick-action-fab');
              const quickActionMenu = document.getElementById('quick-action-menu');
              let fabMenuOpen = false;

              quickActionFab?.addEventListener('click', () => {
                if (fabMenuOpen) {
                  quickActionMenu.classList.add('opacity-0', 'invisible');
                  fabMenuOpen = false;
                } else {
                  quickActionMenu.classList.remove('opacity-0', 'invisible');
                  fabMenuOpen = true;
                }
              });

              document.addEventListener('click', (e) => {
                if (!quickActionFab?.contains(e.target) && !quickActionMenu?.contains(e.target)) {
                  quickActionMenu?.classList.add('opacity-0', 'invisible');
                  fabMenuOpen = false;
                }
              });

              const seasonAlert = document.getElementById('season-alert');
              const currentMonth = new Date().getMonth();
              if (currentMonth >= 5 && currentMonth <= 8 && !localStorage.getItem('seasonAlertDismissed')) {
                setTimeout(() => {
                  seasonAlert.classList.remove('-translate-y-full');
                }, 3000);
              }

              document.getElementById('season-alert-close')?.addEventListener('click', () => {
                seasonAlert.classList.add('-translate-y-full');
                localStorage.setItem('seasonAlertDismissed', 'true');
              });

              setTimeout(() => {
                if (Math.random() > 0.7) {
                  document.getElementById('price-alert').classList.remove('hidden');
                }
              }, 10000);

              document.getElementById('price-alert-close')?.addEventListener('click', () => {
                document.getElementById('price-alert').classList.add('hidden');
              });

              const cookieBanner = document.getElementById('cookie-banner');
              if (!localStorage.getItem('cookiesAccepted')) {
                setTimeout(() => {
                  cookieBanner.classList.remove('translate-y-full');
                }, 2000);
              }

              document.getElementById('cookie-accept')?.addEventListener('click', () => {
                localStorage.setItem('cookiesAccepted', 'all');
                cookieBanner.classList.add('translate-y-full');
              });

              document.getElementById('cookie-essential')?.addEventListener('click', () => {
                localStorage.setItem('cookiesAccepted', 'essential');
                cookieBanner.classList.add('translate-y-full');
              });

              const link = document.createElement('link');
              link.rel = 'preload';
              link.href = '/fonts/inter-var.woff2';
              link.as = 'font';
              link.type = 'font/woff2';
              link.crossOrigin = 'anonymous';
              document.head.appendChild(link);

              function connectMarketData() {
                console.log('Connecting to market data feed...');
              }

              setTimeout(connectMarketData, 5000);
            `,
          }}
        />
      </body>
    </html>
  );
}