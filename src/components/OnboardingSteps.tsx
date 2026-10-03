'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { useLanguage } from '@/contexts/LanguageContext';
import { APPS } from '@/data/site';
import { buttonVariants } from '@/components/ui/button';
import { useAnimateOnScroll } from '@/hooks/useAnimation';
import type { TranslationKey } from '@/types/i18n';

const EASE = [0.25, 0.46, 0.45, 0.94] as const;

interface Step {
  titleKey: TranslationKey;
  descKey: TranslationKey;
  mockup: string;
}

const STEPS: Step[] = [
  { titleKey: 'producers.step1.title', descKey: 'producers.step1.description', mockup: '/Mockups/mockup 06.png' },
  { titleKey: 'producers.step2.title', descKey: 'producers.step2.description', mockup: '/Mockups/mockup 20.png' },
  { titleKey: 'producers.step3.title', descKey: 'producers.step3.description', mockup: '/Mockups/mockup 09.png' },
];

export default function OnboardingSteps() {
  const { t } = useLanguage();
  const { ref, isVisible } = useAnimateOnScroll(0.1);
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section
      id="onboarding"
      ref={ref}
      className="relative py-28 md:py-36 bg-gray-900 bg-geo-subtle overflow-hidden"
    >
      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          className="text-center mb-20"
          initial={{ y: 50, opacity: 0 }}
          animate={isVisible ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.9, ease: EASE }}
        >
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.1] mb-6">
            {t('howitworks.title')}
          </h2>
          <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            {t('howitworks.description')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Steps */}
          <motion.div
            className="space-y-4"
            initial={{ x: -40, opacity: 0 }}
            animate={isVisible ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 0.9, ease: EASE }}
          >
            {STEPS.map((step, i) => (
              <button
                key={step.titleKey}
                onClick={() => setActiveStep(i)}
                className={`w-full text-left p-6 rounded-2xl transition-all duration-500 ${
                  activeStep === i
                    ? 'glass-card border-emerald-500/40 bg-emerald-500/5'
                    : 'hover:bg-gray-800/30'
                }`}
              >
                <div className="flex gap-5 items-start">
                  {/* Step number */}
                  <div className={`flex-shrink-0 w-12 h-12 rounded-2xl flex items-center justify-center text-lg font-bold transition-colors duration-500 ${
                    activeStep === i
                      ? 'bg-emerald-600 text-white'
                      : 'bg-gray-800/60 text-gray-500 border border-gray-700/50'
                  }`}>
                    {i + 1}
                  </div>

                  <div>
                    <h3 className={`font-heading text-lg font-semibold mb-1 transition-colors duration-300 ${
                      activeStep === i ? 'text-white' : 'text-gray-400'
                    }`}>
                      {t(step.titleKey)}
                    </h3>
                    <p className={`text-sm leading-relaxed transition-colors duration-300 ${
                      activeStep === i ? 'text-gray-300' : 'text-gray-600'
                    }`}>
                      {t(step.descKey)}
                    </p>
                  </div>
                </div>
              </button>
            ))}

            {/* CTA */}
            <div className="pt-6">
              <a
                href={APPS.googlePlay.pro}
                target="_blank"
                rel="noopener noreferrer"
                className={buttonVariants({ variant: 'cta', size: 'cta-lg' })}
              >
                {t('hero.startFree')}
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </motion.div>

          {/* Right: Mockup for active step */}
          <motion.div
            className="relative flex justify-center"
            initial={{ x: 40, opacity: 0 }}
            animate={isVisible ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 0.9, delay: 0.2, ease: EASE }}
          >
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-[350px] h-[350px] bg-emerald-500/8 rounded-full blur-[80px]" />
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeStep}
                initial={{ opacity: 0, scale: 0.92, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.96, y: -15 }}
                transition={{ duration: 0.5, ease: EASE }}
                className="relative z-10"
              >
                <Image
                  src={STEPS[activeStep].mockup}
                  alt={t(STEPS[activeStep].titleKey)}
                  width={360}
                  height={720}
                  className="object-contain drop-shadow-2xl"
                  sizes="(max-width: 1024px) 80vw, 360px"
                />
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
