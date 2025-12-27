'use client';

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

// Composant iPhone épuré pour afficher les mockups
const IPhoneMockup: React.FC<{ src: string; alt: string }> = ({ src, alt }) => {
  return (
    <div className="relative w-72 h-[580px] bg-black rounded-[3rem] overflow-hidden shadow-xl border border-gray-200 transition-all duration-300 hover:shadow-2xl">
      {/* Dynamic Island */}
      <div className="absolute top-3 left-1/2 -translate-x-1/2 w-32 h-7 bg-black z-10 rounded-2xl" />

      {/* Écran */}
      <div className="relative w-full h-full p-2">
        <div className="w-full h-full bg-white rounded-[2.5rem] overflow-hidden">
          <Image
            src={src}
            alt={alt}
            fill
            priority
            className="object-contain"
            sizes="288px"
          />
        </div>
      </div>
    </div>
  );
};

export default function CuttingEdgeFeatures() {
  const [activeFeature, setActiveFeature] = useState(0);

  const features = [
    {
      title: "Analyses Intelligentes IA",
      description: "Obtenez des insights marché en temps réel et des prévisions de rendement pour fixer des prix qui reflètent vraiment la demande.",
      icon: (
        <div className="w-12 h-12 bg-emerald-50 rounded-xl flex items-center justify-center border border-emerald-200">
          <svg className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        </div>
      ),
      mockup: "/Mockups/mockup 04.png"
    },
    {
      title: "Paiements Sécurisés",
      description: "45% à la commande, 55% à la livraison. Fonds bloqués en garantie jusqu'à validation. Aucune arnaque, aucun retard.",
      icon: (
        <div className="w-12 h-12 bg-emerald-50 rounded-xl flex items-center justify-center border border-emerald-200">
          <svg className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
          </svg>
        </div>
      ),
      mockup: "/Mockups/mockup 05.png"
    },
    {
      title: "Livraisons Transparentes",
      description: "Suivi en temps réel, partage équitable des coûts de transport et mises à jour instantanées des transporteurs.",
      icon: (
        <div className="w-12 h-12 bg-emerald-50 rounded-xl flex items-center justify-center border border-emerald-200">
          <svg className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
        </div>
      ),
      mockup: "/Mockups/mockup 06.png"
    },
    {
      title: "Documents Légaux Intégrés",
      description: "Modèles FAF pré-construits et contrats certifiés conformes disponibles directement dans l'application.",
      icon: (
        <div className="w-12 h-12 bg-emerald-50 rounded-xl flex items-center justify-center border border-emerald-200">
          <svg className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
        </div>
      ),
      mockup: "/Mockups/mockup 07.png"
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % features.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [features.length]);

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-emerald-100 text-emerald-700 text-sm font-medium rounded-full mb-4">
            Fonctionnalités Avancées
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Technologie de Pointe
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Découvrez les fonctionnalités qui révolutionnent l&apos;agriculture moderne
          </p>
        </div>

        {/* Contenu Principal */}
        <div className="flex flex-col lg:flex-row items-center gap-16">

          {/* Section Features */}
          <div className="w-full lg:w-1/2 space-y-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className={`group flex items-start space-x-4 p-6 rounded-2xl cursor-pointer transition-all duration-300 border ${
                  activeFeature === index
                    ? 'bg-white border-emerald-200 shadow-lg'
                    : 'bg-white/50 border-gray-200 hover:border-gray-300 hover:bg-white'
                }`}
                onClick={() => setActiveFeature(index)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="flex-shrink-0">
                  <motion.div
                    animate={{
                      scale: activeFeature === index ? 1.05 : 1
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    {feature.icon}
                  </motion.div>
                </div>
                <div className="flex-1">
                  <h3 className={`font-semibold text-lg mb-2 transition-colors ${
                    activeFeature === index ? 'text-emerald-700' : 'text-gray-900 group-hover:text-gray-800'
                  }`}>
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed group-hover:text-gray-700 transition-colors">
                    {feature.description}
                  </p>
                </div>

                {/* Indicateur d'activité */}
                {activeFeature === index && (
                  <motion.div
                    className="w-1 h-12 bg-emerald-500 rounded-full"
                    initial={{ scaleY: 0 }}
                    animate={{ scaleY: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                )}
              </motion.div>
            ))}

            {/* Indicateurs en points */}
            <div className="flex justify-center lg:justify-start space-x-2 pt-6">
              {features.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveFeature(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    activeFeature === index
                      ? 'bg-emerald-600 w-8'
                      : 'bg-gray-300 w-2 hover:bg-gray-400'
                  }`}
                  aria-label={`Aller à la fonctionnalité ${index + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Section Device Mockup */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <div className="relative">
              {/* Téléphone avec mockup animé */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeFeature}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                >
                  <IPhoneMockup
                    src={features[activeFeature].mockup}
                    alt={features[activeFeature].title}
                  />
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* Section CTA */}
        <div className="text-center mt-20 p-8 bg-white rounded-2xl border border-gray-200 shadow-lg">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Prêt à découvrir l&apos;agriculture de demain ?
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Rejoignez les milliers d&apos;agriculteurs qui révolutionnent déjà leur activité
            grâce à notre plateforme intelligente.
          </p>
          <motion.button
            className="bg-emerald-600 hover:bg-emerald-700 text-white font-medium px-8 py-3 rounded-xl transition-colors"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Commencer gratuitement
          </motion.button>
        </div>
      </div>
    </section>
  );
}