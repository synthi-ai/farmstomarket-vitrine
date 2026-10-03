'use client';

import { motion } from 'framer-motion';
import { usePathname, useRouter } from 'next/navigation';
import { useLanguage } from '@/contexts/LanguageContext';
import { swapLocale } from '@/i18n/routing';
import type { Language } from '@/types/i18n';

interface LanguageToggleProps {
  variant?: 'light' | 'dark';
}

export default function LanguageToggle({ variant = 'light' }: LanguageToggleProps) {
  const { language } = useLanguage();
  const pathname = usePathname();
  const router = useRouter();

  const next: Language = language === 'en' ? 'fr' : 'en';

  const toggleLanguage = () => {
    // Remember the preference so the middleware can honour it on the next visit.
    document.cookie = `ftm_lang=${next}; path=/; max-age=31536000; samesite=lax`;
    router.push(swapLocale(pathname ?? '/', next));
  };

  const isDark = variant === 'dark';

  return (
    <motion.button
      onClick={toggleLanguage}
      className={`flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium transition-colors duration-200 ${
        isDark
          ? 'bg-white/15 text-white hover:bg-white/25'
          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
      }`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      aria-label={`Switch to ${language === 'en' ? 'French' : 'English'}`}
    >
      {language === 'en' ? 'FR' : 'EN'}
      <div className="h-4 w-4 overflow-hidden rounded-full">
        {language === 'en' ? (
          <svg viewBox="0 0 24 24" className="h-4 w-4">
            <rect width="24" height="8" fill="#0052B4"/>
            <rect y="8" width="24" height="8" fill="#FFFFFF"/>
            <rect y="16" width="24" height="8" fill="#D80027"/>
          </svg>
        ) : (
          <svg viewBox="0 0 24 24" className="h-4 w-4">
            <rect width="8" height="24" fill="#012169"/>
            <rect x="8" width="8" height="24" fill="#FFFFFF"/>
            <rect x="16" width="8" height="24" fill="#C8102E"/>
          </svg>
        )}
      </div>
    </motion.button>
  );
}
