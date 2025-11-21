'use client';

import { useEffect, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';

export default function HowBuyersGet() {
  const controls = useAnimation();
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.2 });

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [isInView, controls]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
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
    },
  } as const;

  const steps = [
    {
      title: "Découvrez des fermes vérifiées",
      description: "Trouvez facilement ce dont vous avez besoin dans une large gamme de produits de qualité avec des filtres avancés.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
          <circle cx="12" cy="10" r="3" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} />
        </svg>
      ),
      step: "01"
    },
    {
      title: "Négociation transparente",
      description: "Échangez directement avec les producteurs, commandez vos produits - aucun frais caché.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2v10z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01" />
        </svg>
      ),
      step: "02"
    },
    {
      title: "Paiement sécurisé",
      description: "Fonds bloqués en garantie bancaire jusqu'à la livraison et partage équitable des coûts de transport.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <rect x="2" y="5" width="20" height="14" rx="2" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 14h.01M12 14h.01M8 14h.01" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2 10h20" />
        </svg>
      ),
      step: "03"
    },
    {
      title: "Inspectez et approuvez",
      description: "Fenêtre d'inspection de 24h. Demandez des remboursements pour les marchandises non conformes.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3H5a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-4" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 15L20 4h1v5" />
        </svg>
      ),
      step: "04"
    },
  ];

  return (
    <section className="py-20 bg-gray-50" ref={containerRef}>
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial="hidden"
          animate={controls}
          variants={itemVariants}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-emerald-100 text-emerald-700 text-sm font-medium rounded-full mb-4">
            Parcours Acheteur
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Comment les acheteurs obtiennent satisfaction
          </h2>
          <h3 className="text-2xl md:text-3xl font-bold text-emerald-600 mb-4">
            en 4 étapes simples
          </h3>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Un processus transparent et sécurisé pour tous vos achats agricoles
          </p>
        </motion.div>

        {/* Steps */}
        <motion.div
          initial="hidden"
          animate={controls}
          variants={containerVariants}
          className="relative"
        >
          {/* Ligne de connexion (Desktop uniquement) */}
          <div className="absolute top-12 left-1/2 transform -translate-x-1/2 w-full max-w-4xl hidden lg:block">
            <div className="h-0.5 bg-gradient-to-r from-transparent via-emerald-200 to-transparent"></div>
          </div>

          {/* Grid des étapes */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="relative flex flex-col items-center text-center group"
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
              >
                {/* Numéro de l'étape */}
                <div className="absolute -top-3 -right-3 w-8 h-8 bg-emerald-600 text-white rounded-full flex items-center justify-center text-sm font-bold z-10">
                  {step.step}
                </div>

                {/* Card principale */}
                <div className="w-full max-w-xs bg-white border border-gray-200 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group-hover:border-emerald-200">
                  {/* Icône */}
                  <div className="w-16 h-16 bg-emerald-50 rounded-xl flex items-center justify-center mb-4 mx-auto border border-emerald-100 text-emerald-600 group-hover:bg-emerald-100 transition-colors">
                    {step.icon}
                  </div>

                  {/* Contenu */}
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

          {/* Call to Action */}
          <motion.div
            className="mt-16 text-center"
            variants={itemVariants}
          >
            <motion.button
              className="bg-emerald-600 hover:bg-emerald-700 text-white font-medium px-8 py-4 rounded-xl transition-all duration-300 inline-flex items-center gap-2 shadow-lg hover:shadow-xl"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Commencer à acheter
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14m-7-7l7 7-7 7" />
              </svg>
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}