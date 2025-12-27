'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import clsx from 'clsx';

// Image mockup directe sans cadre
const MockupImage: React.FC<{ src: string; alt: string }> = ({ src, alt }) => {
  return (
    <Image
      src={src}
      alt={alt}
      width={600}
      height={1000}
      priority
      className="object-contain"
      sizes="(max-width: 768px) 95vw, 600px"
    />
  );
};

export default function AppScreens() {
  const [index, setIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  const screens = [
    {
      title: "Dashboard Fermier",
      desc: "Gérez vos produits et suivez vos ventes en temps réel",
      image: "/Mockups/mockup 01.png",
    },
    {
      title: "Marketplace",
      desc: "Explorez et achetez des produits frais directement des fermes",
      image: "/Mockups/mockup 02.png",
    },
    {
      title: "Géolocalisation",
      desc: "Localisez précisément les fermes et leurs champs",
      image: "/Mockups/mockup 03.png",
    },
  ];

  // Auto-advance
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % screens.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [screens.length]);

  // Détection mobile
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  const next = () => setIndex((i) => (i + 1) % screens.length);
  const prev = () => setIndex((i) => (i - 1 + screens.length) % screens.length);

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-5 py-2 bg-emerald-100 text-emerald-700 text-sm font-semibold rounded-full mb-5">
            Aperçu de l’application
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Découvrez l’app en images
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Une interface intuitive pensée pour les agriculteurs et les acheteurs
          </p>
        </div>

        {/* Carousel */}
        <div className="relative">
          <div className="flex items-center justify-center gap-12">
            {/* Flèches desktop */}
            {!isMobile && (
              <>
                <button
                  onClick={prev}
                  className="p-4 rounded-full bg-white shadow-lg hover:shadow-xl transition-all"
                  aria-label="Précédent"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
              </>
            )}

            {/* Téléphone principal */}
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="relative z-10"
              >
                <MockupImage
                  src={screens[index].image}
                  alt={screens[index].title}
                />
              </motion.div>
            </AnimatePresence>

            {/* Flèches desktop */}
            {!isMobile && (
              <button
                onClick={next}
                className="p-4 rounded-full bg-white shadow-lg hover:shadow-xl transition-all"
                aria-label="Suivant"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            )}
          </div>

          {/* Texte + dots */}
          <div className="text-center mt-12 max-w-2xl mx-auto">
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -20, opacity: 0 }}
                transition={{ duration: 0.4 }}
              >
                <h3 className="text-3xl font-bold text-gray-900 mb-3">
                  {screens[index].title}
                </h3>
                <p className="text-lg text-gray-600">{screens[index].desc}</p>
              </motion.div>
            </AnimatePresence>

            {/* Dots */}
            <div className="flex justify-center gap-3 mt-10">
              {screens.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIndex(i)}
                  className={clsx(
                    "h-2 rounded-full transition-all duration-300",
                    i === index ? "bg-emerald-600 w-10" : "bg-gray-300 w-2"
                  )}
                  aria-label={`Aller à l'écran ${i + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Indicateur swipe mobile */}
          {isMobile && (
            <p className="text-center text-gray-500 mt-8 text-sm">
              ← Balayez pour découvrir →
            </p>
          )}
        </div>

        {/* CTA */}
        <div className="text-center mt-20">
          <button className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-4 px-10 rounded-2xl shadow-lg transition-all hover:scale-105">
            Télécharger l’application
          </button>
        </div>
      </div>
    </section>
  );
}