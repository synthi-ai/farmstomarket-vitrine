'use client';

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useLanguage } from '@/contexts/LanguageContext';
import { useAnimateOnScroll } from '@/hooks/useAnimation';
import { fadeUpVariants, staggerChildrenVariants } from '@/animations/variants';

export default function ReadyToTransform() {
  const { t } = useLanguage();
  const { ref, isVisible } = useAnimateOnScroll(0.2);
  const containerRef = useRef<HTMLDivElement>(null);
  const phone1Ref = useRef<HTMLDivElement>(null);
  const phone2Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;

      const { left, top, width, height } = containerRef.current.getBoundingClientRect();
      const x = (e.clientX - left) / width - 0.5;
      const y = (e.clientY - top) / height - 0.5;

      if (phone1Ref.current) {
        phone1Ref.current.style.transform = `translate3d(${x * 15}px, ${y * 15}px, 0)`;
      }
      if (phone2Ref.current) {
        phone2Ref.current.style.transform = `translate3d(${x * 10}px, ${y * 10}px, 0)`;
      }
    };

    const currentContainer = containerRef.current;
    if (currentContainer) {
      currentContainer.addEventListener('mousemove', handleMouseMove, { passive: true });
    }

    return () => {
      if (currentContainer) {
        currentContainer.removeEventListener('mousemove', handleMouseMove);
      }
    };
  }, []);

  const phoneVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  } as const;

  return (
    <div className="w-full bg-gray-950 relative overflow-hidden py-12 md:py-0 md:h-[685px] md:pt-[100px] md:px-10" ref={ref}>
      <motion.div
        ref={containerRef}
        className="relative w-full max-w-7xl mx-auto bg-gradient-to-r from-emerald-600 to-emerald-500 rounded-t-[2.5rem] md:rounded-t-[3rem] px-6 py-12 md:px-24 md:py-[100px] md:h-[585px] isolate shadow-2xl shadow-emerald-600/20"
        variants={staggerChildrenVariants}
        initial="hidden"
        animate={isVisible ? 'visible' : 'hidden'}
      >
        <div className="flex flex-col md:flex-row justify-between items-start w-full relative z-10 h-full">
          <motion.div
            className="flex flex-col justify-center items-start gap-4 max-w-xl"
            variants={fadeUpVariants}
          >
            <h2 className="font-bold text-white text-3xl lg:text-5xl leading-tight tracking-tight">
              {t('ready.title')}
            </h2>
            <p className="text-emerald-100 text-base lg:text-lg leading-relaxed">
              {t('ready.description')}
            </p>
          </motion.div>

          <motion.div
            className="flex flex-row items-center gap-5 mt-8 md:mt-0"
            variants={fadeUpVariants}
          >
            <motion.a
              href="#download-app-store"
              className="flex items-center justify-center bg-white rounded-full px-6 py-3.5 shadow-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
              </svg>
              <div className="text-left">
                <div className="text-xs text-black/60">{t('ready.appstore.label')}</div>
                <div className="font-semibold text-black">{t('ready.appstore.name')}</div>
              </div>
            </motion.a>

            <motion.a
              href="#download-google-play"
              className="flex items-center justify-center bg-white rounded-full px-6 py-3.5 shadow-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <svg className="w-6 h-6 mr-2" viewBox="0 0 24 24" fill="none">
                <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5Z" fill="#32BBFF" />
                <path d="M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12Z" fill="#32BBFF" />
                <path d="M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81Z" fill="#32BBFF" />
                <path d="M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" fill="#00F076" />
              </svg>
              <div className="text-left">
                <div className="text-xs text-black/60">{t('ready.googleplay.label')}</div>
                <div className="font-semibold text-black">{t('ready.googleplay.name')}</div>
              </div>
            </motion.a>
          </motion.div>

          {/* Phone Mockups - hidden on mobile */}
          <div className="absolute hidden lg:block w-[496px] h-[745px] right-10 -top-[140px] z-[2]">
            <motion.div
              ref={phone1Ref}
              className="absolute w-[232px] h-[464px] left-0 top-0"
              style={{ filter: 'drop-shadow(10px 15px 30px rgba(0, 0, 0, 0.3))' }}
              variants={phoneVariants}
            >
              <Image
                src="/Mockups/mockup 09.png"
                alt="Farms to Market App"
                width={232}
                height={464}
                className="object-contain rounded-[40px]"
                sizes="232px"
              />
            </motion.div>

            <motion.div
              ref={phone2Ref}
              className="absolute w-[232px] h-[464px] right-0 top-[281px]"
              style={{ filter: 'drop-shadow(10px 15px 30px rgba(0, 0, 0, 0.3))' }}
              variants={phoneVariants}
              transition={{ delay: 0.2 }}
            >
              <Image
                src="/Mockups/mockup 10.png"
                alt="Farms to Market Marketplace"
                width={232}
                height={464}
                className="object-contain rounded-[40px]"
                sizes="232px"
              />
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
