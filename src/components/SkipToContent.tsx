'use client';

import { useLanguage } from '@/contexts/LanguageContext';

export default function SkipToContent() {
  const { t } = useLanguage();

  return (
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 z-50 rounded-lg bg-emerald-500 px-4 py-2 font-bold text-black"
    >
      {t('a11y.skipToContent')}
    </a>
  );
}
