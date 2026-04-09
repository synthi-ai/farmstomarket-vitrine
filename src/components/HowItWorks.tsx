'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { useLanguage } from '@/contexts/LanguageContext';
import { useAnimateOnScroll } from '@/hooks/useAnimation';
import { fadeUpVariants } from '@/animations/variants';
import SectionHeader from '@/components/ui/SectionHeader';

type TabKey = 'producers' | 'buyers' | 'transporters';

interface Step {
  titleKey: string;
  descriptionKey: string;
}

interface TabData {
  labelKey: string;
  steps: Step[];
  mockupImage: string;
  stats: { value: string; labelKey: string }[];
}

const tabsData: Record<TabKey, TabData> = {
  producers: {
    labelKey: 'howitworks.tab.producers',
    steps: [
      { titleKey: 'producers.step1.title', descriptionKey: 'producers.step1.description' },
      { titleKey: 'producers.step2.title', descriptionKey: 'producers.step2.description' },
      { titleKey: 'producers.step3.title', descriptionKey: 'producers.step3.description' },
      { titleKey: 'producers.step4.title', descriptionKey: 'producers.step4.description' },
    ],
    mockupImage: '/Mockups/mockup 06.png',
    stats: [
      { value: '10,000+', labelKey: 'producers.badge' },
      { value: '3x', labelKey: 'producers.subtitle' },
    ],
  },
  buyers: {
    labelKey: 'howitworks.tab.buyers',
    steps: [
      { titleKey: 'buyersProcess.step1.title', descriptionKey: 'buyersProcess.step1.description' },
      { titleKey: 'buyersProcess.step2.title', descriptionKey: 'buyersProcess.step2.description' },
      { titleKey: 'buyersProcess.step3.title', descriptionKey: 'buyersProcess.step3.description' },
      { titleKey: 'buyersProcess.step4.title', descriptionKey: 'buyersProcess.step4.description' },
    ],
    mockupImage: '/Mockups/mockup 07.png',
    stats: [
      { value: '5,000+', labelKey: 'buyersProcess.badge' },
      { value: '100%', labelKey: 'buyersProcess.description' },
    ],
  },
  transporters: {
    labelKey: 'howitworks.tab.transporters',
    steps: [
      { titleKey: 'transporter.step1.title', descriptionKey: 'transporter.step1.description' },
      { titleKey: 'transporter.step2.title', descriptionKey: 'transporter.step2.description' },
      { titleKey: 'transporter.step3.title', descriptionKey: 'transporter.step3.description' },
      { titleKey: 'transporter.step4.title', descriptionKey: 'transporter.step4.description' },
    ],
    mockupImage: '/Mockups/mockup 14.png',
    stats: [
      { value: '2,500+', labelKey: 'transporter.stats.drivers' },
      { value: '98%', labelKey: 'transporter.stats.ontime' },
      { value: '24h', labelKey: 'transporter.stats.payment' },
      { value: '150+', labelKey: 'transporter.stats.cities' },
    ],
  },
};

const tabOrder: TabKey[] = ['producers', 'buyers', 'transporters'];

const contentVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' as const },
  },
  exit: {
    opacity: 0,
    y: -20,
    transition: { duration: 0.3, ease: 'easeIn' as const },
  },
};

export default function HowItWorks() {
  const [activeTab, setActiveTab] = useState<TabKey>('producers');
  const { t } = useLanguage();
  const { ref, isVisible } = useAnimateOnScroll(0.1);

  const currentTab = tabsData[activeTab];

  return (
    <section className="py-20 bg-gray-950" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <SectionHeader
          title={t('howitworks.title')}
          description={t('howitworks.description')}
          variant="dark"
          animated
          isVisible={isVisible}
          variants={fadeUpVariants}
        />

        {/* Tab Bar */}
        <motion.div
          className="flex justify-center mb-12"
          initial="hidden"
          animate={isVisible ? 'visible' : 'hidden'}
          variants={fadeUpVariants}
        >
          <div className="inline-flex rounded-xl overflow-hidden border border-gray-700">
            {tabOrder.map((tabKey) => (
              <button
                key={tabKey}
                onClick={() => setActiveTab(tabKey)}
                className={`px-6 py-3 text-sm font-medium transition-all duration-300 ${
                  activeTab === tabKey
                    ? 'bg-emerald-600 text-white'
                    : 'bg-gray-800 text-gray-400 hover:text-white hover:bg-gray-700'
                }`}
              >
                {t(tabsData[tabKey].labelKey)}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Tab Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            variants={contentVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          >
            {/* Left Side: Steps */}
            <div className="space-y-4">
              {currentTab.steps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex gap-4 p-5 bg-gray-800/50 border border-gray-700 rounded-xl hover:border-emerald-600/50 transition-all duration-300"
                >
                  {/* Step Number Badge */}
                  <div className="flex-shrink-0 w-10 h-10 bg-emerald-600 rounded-lg flex items-center justify-center">
                    <span className="text-white text-sm font-bold">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                  </div>

                  {/* Step Content */}
                  <div className="flex-1">
                    <h4 className="text-white font-semibold text-lg mb-1">
                      {t(step.titleKey)}
                    </h4>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {t(step.descriptionKey)}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Right Side: Large Zoomed Mockup */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex justify-center"
            >
              <div className="relative w-full max-w-lg">
                {/* Emerald glow behind */}
                <div className="absolute inset-0 bg-emerald-600/10 rounded-3xl blur-3xl scale-110" />
                <div className="relative z-10 overflow-hidden rounded-3xl">
                  <Image
                    src={currentTab.mockupImage}
                    alt={`${activeTab} mockup`}
                    width={600}
                    height={1200}
                    className="mx-auto drop-shadow-2xl scale-110"
                    priority
                    sizes="(max-width: 1024px) 90vw, 600px"
                  />
                </div>
              </div>
            </motion.div>
          </motion.div>
        </AnimatePresence>

        {/* Stats Section */}
        <motion.div
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
          initial="hidden"
          animate={isVisible ? 'visible' : 'hidden'}
          variants={fadeUpVariants}
        >
          <AnimatePresence mode="wait">
            {currentTab.stats.map((stat, index) => (
              <motion.div
                key={`${activeTab}-stat-${index}`}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="text-center p-4 bg-gray-800/50 border border-gray-700 rounded-xl"
              >
                <div className="text-2xl md:text-3xl font-bold text-emerald-400 mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-400">
                  {t(stat.labelKey)}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
