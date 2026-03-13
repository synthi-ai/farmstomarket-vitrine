'use client';

import { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';

const EASE = [0.25, 0.46, 0.45, 0.94] as const;

export default function VideoShowcase() {
  const { t } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Video — Desktop */}
      <div className="absolute inset-0 hidden md:block">
        <video
          autoPlay
          loop
          muted
          playsInline
          poster="/images/home2.png"
          className="w-full h-full object-cover"
        >
          <source
            src="https://cdn.prod.website-files.com/63c52559b778cc3f23684b69/655382c93a7499c677d6e2ad_RENDER-site-HEVC-HEVC-transcode.mp4"
            type="video/mp4"
          />
          <source
            src="https://cdn.prod.website-files.com/63c52559b778cc3f23684b69/655382c93a7499c677d6e2ad_RENDER-site-HEVC-HEVC-transcode.webm"
            type="video/webm"
          />
        </video>
      </div>

      {/* Background Video — Mobile */}
      <div className="absolute inset-0 md:hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          poster="/images/home2.png"
          className="w-full h-full object-cover"
        >
          <source
            src="https://cdn.prod.website-files.com/63c52559b778cc3f23684b69/655386615d413a08b225a6c0_mobile render-HEVC-transcode.mp4"
            type="video/mp4"
          />
          <source
            src="https://cdn.prod.website-files.com/63c52559b778cc3f23684b69/655386615d413a08b225a6c0_mobile render-HEVC-transcode.webm"
            type="video/webm"
          />
        </video>
      </div>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* ─── Content ─── */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-32">
        {/* Headline — opencv.ai slide-up entrance */}
        <div className="overflow-hidden mb-6">
          <motion.h2
            className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-[1.1]"
            initial={{ y: '100%', opacity: 0 }}
            animate={isVisible ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 1, ease: EASE }}
          >
            {t('showcase.title')}{' '}
            <span className="text-emerald-400">{t('showcase.highlight')}</span>
          </motion.h2>
        </div>

        {/* Description */}
        <motion.p
          className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-14 leading-relaxed"
          initial={{ y: 40, opacity: 0 }}
          animate={isVisible ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 1, delay: 0.2, ease: EASE }}
        >
          {t('showcase.description')}
        </motion.p>

        {/* Single stat */}
        <motion.div
          className="text-center"
          initial={{ y: 40, opacity: 0 }}
          animate={isVisible ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 1, delay: 0.4, ease: EASE }}
        >
          <div className="text-5xl md:text-6xl font-bold text-emerald-400 tracking-tight">
            50K+
          </div>
          <div className="text-gray-300/60 text-sm mt-2 uppercase tracking-wider">
            {t('showcase.stat.users')}
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-white/60 rounded-full" />
        </div>
      </motion.div>
    </section>
  );
}
