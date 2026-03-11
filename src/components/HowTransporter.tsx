'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import StepProcess from './StepProcess';

export default function HowTransporter() {
  const { t } = useLanguage();

  const steps = [
    {
      title: t('transporter.step1.title'),
      description: t('transporter.step1.description'),
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h10v10" />
          <circle cx="12" cy="12" r="3" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} />
        </svg>
      ),
      step: '01',
    },
    {
      title: t('transporter.step2.title'),
      description: t('transporter.step2.description'),
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <rect x="1" y="3" width="15" height="13" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 8h4l-2-3h-2v3zM16 16h4v-5h-4v5z" />
          <circle cx="5.5" cy="18.5" r="2.5" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} />
          <circle cx="18.5" cy="18.5" r="2.5" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} />
        </svg>
      ),
      step: '02',
    },
    {
      title: t('transporter.step3.title'),
      description: t('transporter.step3.description'),
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
          <circle cx="12" cy="10" r="3" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 21l4-7 4 7" />
        </svg>
      ),
      step: '03',
    },
    {
      title: t('transporter.step4.title'),
      description: t('transporter.step4.description'),
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="10" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.09 9a3 3 0 015.83 1c0 2-3 3-3 3" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 17h.01" />
        </svg>
      ),
      step: '04',
    },
  ];

  const stats = [
    { value: '500+', label: t('transporter.stats.drivers') },
    { value: '99,5%', label: t('transporter.stats.ontime') },
    { value: '24H', label: t('transporter.stats.payment') },
    { value: '50+', label: t('transporter.stats.cities') },
  ];

  return (
    <StepProcess
      badge={t('transporter.badge')}
      title={t('transporter.title')}
      subtitle={t('transporter.subtitle')}
      description={t('transporter.description')}
      steps={steps}
      ctaText={t('transporter.cta')}
      stats={stats}
    />
  );
}
