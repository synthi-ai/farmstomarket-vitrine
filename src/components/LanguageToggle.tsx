'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';

export default function LanguageToggle() {
  const { language, setLanguage } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'fr' : 'en');
  };

  return (
    <motion.button
      onClick={toggleLanguage}
      className="flex items-center gap-2 px-3 py-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors duration-200"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      aria-label={`Switch to ${language === 'en' ? 'French' : 'English'}`}
    >
      <span className="text-sm font-medium text-gray-700">
        {language === 'en' ? 'FR' : 'EN'}
      </span>
      <div className="w-4 h-4 rounded-full overflow-hidden">
        {language === 'en' ? (
          <svg viewBox="0 0 24 24" className="w-4 h-4">
            <rect width="24" height="8" fill="#0052B4"/>
            <rect y="8" width="24" height="8" fill="#FFFFFF"/>
            <rect y="16" width="24" height="8" fill="#D80027"/>
          </svg>
        ) : (
          <svg viewBox="0 0 24 24" className="w-4 h-4">
            <rect width="8" height="24" fill="#012169"/>
            <rect x="8" width="8" height="24" fill="#FFFFFF"/>
            <rect x="16" width="8" height="24" fill="#C8102E"/>
          </svg>
        )}
      </div>
    </motion.button>
  );
}