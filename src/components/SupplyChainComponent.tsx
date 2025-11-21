'use client';

import { useEffect, useRef, useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

const SupplyChainComponent = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const slides = [
    {
      title: "Ferme",
      description: "Notre chaîne d'approvisionnement commence à la source - connexion directe avec les agriculteurs locaux et producteurs. Nous assurons un contrôle qualité dès le début du processus.",
      image: "/Mockups/mockup 01.png",
      features: [
        "Partenariats fermiers directs",
        "Protocoles d'assurance qualité",
        "Pratiques agricoles durables",
        "Surveillance en temps réel des cultures"
      ],
      iconPath: "M12 2L13.09 8.26L22 9L17 14L18.18 22L12 19L5.82 22L7 14L2 9L10.91 8.26L12 2Z"
    },
    {
      title: "Transformation",
      description: "Des installations de traitement avancées assurent une manipulation, un emballage et une préparation optimaux des produits agricoles tout en maintenant leur valeur nutritionnelle et leur fraîcheur.",
      image: "/Mockups/mockup 02.png",
      features: [
        "Installations à la pointe",
        "Certifications sécurité alimentaire",
        "Gestion chaîne du froid",
        "Contrôle qualité automatisé"
      ],
      iconPath: "M12,15.5A3.5,3.5 0 0,1 8.5,12A3.5,3.5 0 0,1 12,8.5A3.5,3.5 0 0,1 15.5,12A3.5,3.5 0 0,1 12,15.5M19.43,12.97C19.47,12.65 19.5,12.33 19.5,12C19.5,11.67 19.47,11.34 19.43,11L21.54,9.37C21.73,9.22 21.78,8.95 21.66,8.73L19.66,5.27C19.54,5.05 19.27,4.96 19.05,5.05L16.56,6.05C16.04,5.66 15.5,5.32 14.87,5.07L14.5,2.42C14.46,2.18 14.25,2 14,2H10C9.75,2 9.54,2.18 9.5,2.42L9.13,5.07C8.5,5.32 7.96,5.66 7.44,6.05L4.95,5.05C4.73,4.96 4.46,5.05 4.34,5.27L2.34,8.73C2.22,8.95 2.27,9.22 2.46,9.37L4.57,11C4.53,11.34 4.5,11.67 4.5,12C4.5,12.33 4.53,12.65 4.57,12.97L2.46,14.63C2.27,14.78 2.22,15.05 2.34,15.27L4.34,18.73C4.46,18.95 4.73,19.03 4.95,18.95L7.44,17.94C7.96,18.34 8.5,18.68 9.13,18.93L9.5,21.58C9.54,21.82 9.75,22 10,22H14C14.25,22 14.46,21.82 14.5,21.58L14.87,18.93C15.5,18.68 16.04,18.34 16.56,17.94L19.05,18.95C19.27,19.03 19.54,18.95 19.66,18.73L21.66,15.27C21.78,15.05 21.73,14.78 21.54,14.63L19.43,12.97Z"
    },
    {
      title: "Logistique",
      description: "Réseau de distribution efficace avec suivi en temps réel, contrôle de température et optimisation des itinéraires pour s'assurer que les produits arrivent en parfait état.",
      image: "/Mockups/mockup 03.png",
      features: [
        "Système de suivi GPS",
        "Surveillance température",
        "Optimisation des itinéraires",
        "Gestion des stocks"
      ],
      iconPath: "M18,8C18.56,8 19,7.56 19,7C19,6.44 18.56,6 18,6C17.44,6 17,6.44 17,7C17,7.56 17.44,8 18,8M18,10C16.34,10 15,8.66 15,7C15,5.34 16.34,4 18,4C19.66,4 21,5.34 21,7C21,8.66 19.66,10 18,10M22,22H16C14.9,22 14,21.1 14,20V16L22,8V20C22,21.1 21.1,22 22,22M22,6.8L15.4,13.4C15.1,13.7 14.7,13.7 14.4,13.4L12.6,11.6C12.3,11.3 12.3,10.9 12.6,10.6L19.2,4H4C2.9,4 2,4.9 2,6V18C2,19.1 2.9,20 4,20H12V22H4C1.8,22 0,20.2 0,18V6C0,3.8 1.8,2 4,2H20.2L22,0V6.8Z"
    },
    {
      title: "Marché",
      description: "Destination finale où les consommateurs accèdent à des produits agricoles frais et de haute qualité via notre plateforme marketplace complète et notre réseau de distribution.",
      image: "/Mockups/mockup 04.png",
      features: [
        "Distribution multi-canal",
        "Analyses consommateur",
        "Optimisation des prix",
        "Suivi satisfaction client"
      ],
      iconPath: "M19,7H22V9H19V12H17V9H14V7H17V4H19V7M12,2C13.1,2 14,2.9 14,4C14,5.1 13.1,6 12,6C10.9,6 10,5.1 10,4C10,2.9 10.9,2 12,2M21,9H20L18,17H15L13.5,7H10.5L9,17H6L4,9H3V7H6.5L7.5,4H12.5L13.5,7H21V9Z"
    }
  ];

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Intersection Observer pour détecter si le composant est visible
  useEffect(() => {
    if (!isMounted) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      {
        threshold: 0.5,
        rootMargin: '-10% 0px -10% 0px'
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, [isMounted]);

  const wrap = useCallback((index: number) => {
    return ((index % slides.length) + slides.length) % slides.length;
  }, [slides.length]);

  const gotoSection = useCallback((index: number) => {
    if (animating || !isInView) return;

    setAnimating(true);
    const wrappedIndex = wrap(index);

    setTimeout(() => {
      setCurrentIndex(wrappedIndex);
      setAnimating(false);
    }, 600);
  }, [animating, isInView, wrap]);

  if (!isMounted) return null;

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen py-20 bg-white overflow-hidden"
    >
      {/* Header */}
      <div className="text-center mb-16 px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block px-4 py-2 bg-emerald-100 text-emerald-700 text-sm font-medium rounded-full mb-4">
            Chaîne d'approvisionnement
          </span>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Écosystème FarmsToMarket
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            De la ferme à la table - Infrastructure agricole complète
          </p>
        </motion.div>
      </div>

      {/* Supply Chain Slides */}
      <div className="max-w-7xl mx-auto px-6">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
          >
            {/* Image avec mockup */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="relative w-full max-w-md mx-auto">
                {/* Icône */}
                <motion.div
                  className="absolute -top-4 -right-4 w-16 h-16 bg-emerald-100 rounded-xl flex items-center justify-center border border-emerald-200 z-10"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.4 }}
                >
                  <svg className="w-8 h-8 text-emerald-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d={slides[currentIndex].iconPath} />
                  </svg>
                </motion.div>

                {/* Image mockup */}
                <Image
                  src={slides[currentIndex].image}
                  alt={slides[currentIndex].title}
                  width={320}
                  height={500}
                  className="object-contain"
                  sizes="320px"
                />
              </div>
            </motion.div>

            {/* Contenu textuel */}
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  {slides[currentIndex].title}
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed mb-8">
                  {slides[currentIndex].description}
                </p>
              </div>

              <div>
                <h4 className="text-xl font-semibold text-gray-900 mb-4">Caractéristiques clés</h4>
                <div className="space-y-3">
                  {slides[currentIndex].features.map((feature, index) => (
                    <motion.div
                      key={index}
                      className="flex items-center space-x-3"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                    >
                      <div className="w-2 h-2 rounded-full bg-emerald-500 flex-shrink-0"></div>
                      <span className="text-gray-700">{feature}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation */}
      <div className="flex justify-center mt-16 space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => gotoSection(index)}
            className={`h-2 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? 'bg-emerald-600 w-8'
                : 'bg-gray-300 w-2 hover:bg-gray-400'
            }`}
            aria-label={`Aller à l'étape ${index + 1}`}
          />
        ))}
      </div>

      {/* Compteur */}
      <div className="absolute top-32 right-6 md:right-12">
        <motion.div
          key={currentIndex}
          className="bg-emerald-600 text-white rounded-xl px-4 py-2"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
        >
          <p className="text-xl font-bold">
            0{currentIndex + 1}
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default SupplyChainComponent;