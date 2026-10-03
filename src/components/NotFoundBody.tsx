'use client';

import Link from '@/components/LocaleLink';
import { useLanguage } from '@/contexts/LanguageContext';

export default function NotFoundBody() {
  const { t } = useLanguage();

  return (
    <div className="flex min-h-[80vh] flex-col items-center justify-center px-4 text-center">
      <h1 className="font-heading text-6xl font-bold text-emerald-400">404</h1>
      <p className="mt-4 text-xl text-gray-300">{t('notFound.title')}</p>
      <p className="mt-2 text-gray-500">{t('notFound.description')}</p>
      <Link
        href="/"
        className="mt-8 rounded-xl bg-emerald-600 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-emerald-500"
      >
        {t('notFound.backHome')}
      </Link>
    </div>
  );
}