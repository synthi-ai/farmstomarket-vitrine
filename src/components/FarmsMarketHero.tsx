'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const MockupImage = ({ src, alt, className }: { src: string; alt: string; className?: string }) => {
  return (
    <Image
      src={src}
      alt={alt}
      width={400}
      height={700}
      priority
      className={`object-contain ${className}`}
      sizes="(max-width: 768px) 95vw, 400px"
    />
  );
};

const FarmsMarketHero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2,
      },
    },
  } as const;

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 30
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  } as const;

  const imageVariants = {
    hidden: {
      opacity: 0,
      scale: 0.9
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  } as const;

  return (
    <section className="relative w-full bg-white overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 py-12 md:py-20">

        {/* Version Mobile */}
        <div className="block md:hidden">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-center space-y-12"
          >
            <motion.div variants={itemVariants} className="space-y-6">
              <div className="inline-flex items-center space-x-2 bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
                <div className="w-2 h-2 bg-emerald-600 rounded-full"></div>
                <span>Plateforme agricole innovante</span>
              </div>

              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                <span className="text-emerald-600">Farms</span>ToMarket
              </h1>

              <h2 className="text-2xl font-semibold text-gray-700">
                Connectez. Commercialisez.<br />
                <span className="text-emerald-600">Prospérez ensemble.</span>
              </h2>

              <p className="text-lg text-gray-600 max-w-lg mx-auto leading-relaxed">
                Révolutionnons l&apos;agriculture grâce à une plateforme moderne qui connecte directement les producteurs aux marchés.
              </p>
            </motion.div>

            <motion.div
              variants={imageVariants}
              className="flex justify-center"
            >
              <MockupImage
                src="/Mockups/mockup 01.png"
                alt="Application mobile FarmsToMarket"
                className="max-w-[400px] w-full mx-auto"
              />
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-6">
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <motion.button
                  className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors inline-flex items-center gap-2"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Commencer
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14m-7-7l7 7-7 7" />
                  </svg>
                </motion.button>

                <motion.button
                  className="border border-gray-300 text-gray-700 hover:bg-gray-50 px-8 py-3 rounded-lg font-semibold transition-colors"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  En savoir plus
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Version Desktop */}
        <div className="hidden md:flex items-center justify-between min-h-[80vh]">

          {/* Contenu principal */}
          <motion.div
            className="flex-1 max-w-2xl"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={itemVariants} className="space-y-8">
              <div className="inline-flex items-center space-x-2 bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full text-sm font-medium">
                <div className="w-2 h-2 bg-emerald-600 rounded-full"></div>
                <span>Plateforme agricole innovante</span>
              </div>

              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                <span className="text-emerald-600">Farms</span>ToMarket
              </h1>

              <h2 className="text-3xl font-semibold text-gray-700 leading-snug">
                Connectez. Commercialisez.<br />
                <span className="text-emerald-600">Prospérez ensemble.</span>
              </h2>

              <p className="text-xl text-gray-600 leading-relaxed max-w-xl">
                Révolutionnons l&apos;agriculture grâce à une plateforme moderne qui connecte directement les producteurs aux marchés, garantissant des prix équitables et une transparence totale.
              </p>

              <div className="flex gap-6">
                <motion.button
                  className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors inline-flex items-center gap-3"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Commencer maintenant
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14m-7-7l7 7-7 7" />
                  </svg>
                </motion.button>

                <motion.button
                  className="border border-gray-300 text-gray-700 hover:bg-gray-50 px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Découvrir
                </motion.button>
              </div>

              {/* Statistiques */}
              <div className="grid grid-cols-3 gap-8 pt-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-emerald-600">300+</div>
                  <div className="text-sm text-gray-600 font-medium">Agriculteurs</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-emerald-600">15K+</div>
                  <div className="text-sm text-gray-600 font-medium">Utilisateurs</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-emerald-600">50K+</div>
                  <div className="text-sm text-gray-600 font-medium">Transactions</div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Images mockups */}
          <motion.div
            className="flex-1 flex justify-center items-center relative"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <div className="relative max-w-lg w-full">

              {/* Mockup principal */}
              <motion.div
                variants={imageVariants}
                className="relative z-10"
              >
                <MockupImage
                  src="/Mockups/mockup 02.png"
                  alt="Interface principale FarmsToMarket"
                  className="w-full max-w-[450px] mx-auto"
                />
              </motion.div>

              {/* Mockup secondaire */}
              <motion.div
                variants={imageVariants}
                className="absolute -right-4 top-20 z-0"
                style={{ opacity: 0.7 }}
              >
                <MockupImage
                  src="/Mockups/mockup 03.png"
                  alt="Fonctionnalités FarmsToMarket"
                  className="w-full max-w-[350px]"
                />
              </motion.div>

              {/* Éléments décoratifs subtils */}
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-emerald-100 rounded-full opacity-20"></div>
              <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-emerald-50 rounded-full opacity-30"></div>
            </div>
          </motion.div>
        </div>

        {/* Indicateur de défilement */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden md:block"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="w-6 h-10 border-2 border-gray-300 rounded-full flex justify-center">
            <motion.div
              className="w-1 h-3 bg-gray-400 rounded-full mt-2"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FarmsMarketHero;