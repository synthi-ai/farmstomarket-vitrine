'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import StepProcess from './StepProcess';

export default function HowBuyersGet() {
  const { t } = useLanguage();

  const steps = [
    {
      title: t('buyersProcess.step1.title'),
      description: t('buyersProcess.step1.description'),
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
          <circle cx="12" cy="10" r="3" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} />
        </svg>
      ),
      step: '01',
    },
    {
      title: t('buyersProcess.step2.title'),
      description: t('buyersProcess.step2.description'),
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2v10z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01" />
        </svg>
      ),
      step: '02',
    },
    {
      title: t('buyersProcess.step3.title'),
      description: t('buyersProcess.step3.description'),
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <rect x="2" y="5" width="20" height="14" rx="2" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 14h.01M12 14h.01M8 14h.01" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2 10h20" />
        </svg>
      ),
      step: '03',
    },
    {
      title: t('buyersProcess.step4.title'),
      description: t('buyersProcess.step4.description'),
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3H5a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-4" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 15L20 4h1v5" />
        </svg>
      ),
      step: '04',
    },
  ];

  return (
    <StepProcess
      badge={t('buyersProcess.badge')}
      title={t('buyersProcess.title')}
      subtitle={t('buyersProcess.subtitle')}
      description={t('buyersProcess.description')}
      steps={steps}
      ctaText={t('buyersProcess.cta')}
      bgColor="gray"
    />
  );
}
