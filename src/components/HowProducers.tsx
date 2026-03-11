'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import StepProcess from './StepProcess';

export default function HowProducers() {
  const { t } = useLanguage();

  const steps = [
    {
      title: t('producers.step1.title'),
      description: t('producers.step1.description'),
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
          <circle cx="12" cy="7" r="4" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} />
        </svg>
      ),
      step: '01',
    },
    {
      title: t('producers.step2.title'),
      description: t('producers.step2.description'),
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2" />
          <rect x="9" y="3" width="6" height="4" rx="1" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 14h6M9 18h4" />
        </svg>
      ),
      step: '02',
    },
    {
      title: t('producers.step3.title'),
      description: t('producers.step3.description'),
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2v10z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01" />
        </svg>
      ),
      step: '03',
    },
    {
      title: t('producers.step4.title'),
      description: t('producers.step4.description'),
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="10" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6l4 2" />
        </svg>
      ),
      step: '04',
    },
  ];

  return (
    <StepProcess
      badge={t('producers.badge')}
      title={t('producers.title')}
      subtitle={t('producers.subtitle')}
      description={t('producers.description')}
      steps={steps}
      ctaText={t('producers.cta')}
    />
  );
}
