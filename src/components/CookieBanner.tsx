'use client';

import { useState, useEffect } from 'react';
import Link from '@/components/LocaleLink';
import { useLanguage } from '@/contexts/LanguageContext';

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    if (!localStorage.getItem('cookiesAccepted')) {
      const timer = setTimeout(() => setVisible(true), 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  const accept = (type: 'all' | 'essential') => {
    localStorage.setItem('cookiesAccepted', type);
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-gray-900/95 backdrop-blur-xl border-t border-gray-800 p-4">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center space-x-3">
          <p className="text-white text-sm">
            {t('cookies.message')}
            <Link href="/privacy" className="text-emerald-400 hover:underline ml-1">{t('cookies.learnMore')}</Link>
          </p>
        </div>
        <div className="flex space-x-3">
          <button
            onClick={() => accept('all')}
            className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-2 rounded-lg font-semibold text-sm transition-all duration-300"
          >
            {t('cookies.acceptAll')}
          </button>
          <button
            onClick={() => accept('essential')}
            className="bg-transparent border border-gray-600 text-white px-6 py-2 rounded-lg font-semibold text-sm hover:border-emerald-400 transition-colors duration-300"
          >
            {t('cookies.essentialOnly')}
          </button>
        </div>
      </div>
    </div>
  );
}
