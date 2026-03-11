'use client';

import { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { useAnimateOnScroll } from '@/hooks/useAnimation';
import { fadeUpVariants, staggerChildrenVariants } from '@/animations/variants';
import SectionHeader from '@/components/ui/SectionHeader';
import StatGrid from '@/components/ui/StatGrid';

interface Step {
  title: string;
  description: string;
  icon: ReactNode;
  step: string;
}

interface Stat {
  value: string;
  label: string;
}

interface StepProcessProps {
  badge: string;
  title: string;
  subtitle: string;
  description: string;
  steps: Step[];
  ctaText: string;
  bgColor?: 'white' | 'gray';
  stats?: Stat[];
}

export default function StepProcess({
  badge,
  title,
  subtitle,
  description,
  steps,
  ctaText,
  bgColor = 'white',
  stats,
}: StepProcessProps) {
  const { ref, isVisible } = useAnimateOnScroll(0.2);

  return (
    <section className={`py-20 ${bgColor === 'gray' ? 'bg-gray-50' : 'bg-white'}`} ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader
          badge={badge}
          title={title}
          subtitle={subtitle}
          description={description}
          animated
          isVisible={isVisible}
          variants={fadeUpVariants}
        />

        <motion.div
          initial="hidden"
          animate={isVisible ? 'visible' : 'hidden'}
          variants={staggerChildrenVariants}
          className={`relative ${stats ? 'mb-16' : ''}`}
        >
          <div className="absolute top-12 left-1/2 transform -translate-x-1/2 w-full max-w-4xl hidden lg:block">
            <div className="h-0.5 bg-gradient-to-r from-transparent via-emerald-200 to-transparent"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                variants={fadeUpVariants}
                className="relative flex flex-col items-center text-center group"
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
              >
                <div className="absolute -top-3 -right-3 w-8 h-8 bg-emerald-600 text-white rounded-full flex items-center justify-center text-sm font-bold z-10">
                  {step.step}
                </div>

                <div className="w-full max-w-xs bg-white border border-gray-200 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group-hover:border-emerald-200">
                  <div className="w-16 h-16 bg-emerald-50 rounded-xl flex items-center justify-center mb-4 mx-auto border border-emerald-100 text-emerald-600 group-hover:bg-emerald-100 transition-colors">
                    {step.icon}
                  </div>

                  <h4 className="text-lg font-semibold text-gray-900 mb-3">
                    {step.title}
                  </h4>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="text-center mb-16"
          initial="hidden"
          animate={isVisible ? 'visible' : 'hidden'}
          variants={fadeUpVariants}
        >
          <motion.button
            className="bg-emerald-600 hover:bg-emerald-700 text-white font-medium px-8 py-4 rounded-xl transition-all duration-300 inline-flex items-center gap-2 shadow-lg hover:shadow-xl"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            {ctaText}
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14m-7-7l7 7-7 7" />
            </svg>
          </motion.button>
        </motion.div>

        {stats && (
          <StatGrid
            stats={stats}
            variant="gray"
            animated
            isVisible={isVisible}
            containerVariants={staggerChildrenVariants}
            itemVariants={fadeUpVariants}
          />
        )}
      </div>
    </section>
  );
}
