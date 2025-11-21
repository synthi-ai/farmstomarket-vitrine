'use client';

import { useEffect, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';

export default function HowTransporter() {
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
      title: "Enregistrez votre flotte",
      description: "Rejoignez-nous avec des documents de véhicules vérifiés et une couverture d'assurance complète.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h10v10" />
          <circle cx="12" cy="12" r="3" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} />
        </svg>
      ),
      step: "01"
    },
    {
      title: "Acceptez des livraisons",
      description: "Parcourez les expéditions disponibles, fixez des tarifs compétitifs et remportez des contrats.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <rect x="1" y="3" width="15" height="13" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 8h4l-2-3h-2v3zM16 16h4v-5h-4v5z" />
          <circle cx="5.5" cy="18.5" r="2.5" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} />
          <circle cx="18.5" cy="18.5" r="2.5" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} />
        </svg>
      ),
      step: "02"
    },
    {
      title: "Suivez et livrez",
      description: "Le suivi GPS en temps réel assure une livraison transparente avec preuve de finalisation.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
          <circle cx="12" cy="10" r="3" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 21l4-7 4 7" />
        </svg>
      ),
      step: "03"
    },
    {
      title: "Payé instantanément",
      description: "Paiement automatique à la confirmation de livraison réussie. Aucun retard, aucun souci.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="10" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.09 9a3 3 0 015.83 1c0 2-3 3-3 3" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 17h.01" />
        </svg>
      ),
      step: "04"
    },
  ];

  const stats = [
    { value: '500+', label: 'Chauffeurs actifs' },
    { value: '99,5%', label: 'Livraison ponctuelle' },
    { value: '24H', label: 'Cycle de paiement' },
    { value: '50+', label: 'Villes couvertes' }
  ];

  return (
    <section className="py-20 bg-white" ref={containerRef}>
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial="hidden"
          animate={controls}
          variants={itemVariants}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-emerald-100 text-emerald-700 text-sm font-medium rounded-full mb-4">
            Réseau Transport
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Comment les transporteurs
          </h2>
          <h3 className="text-2xl md:text-3xl font-bold text-emerald-600 mb-4">
            maximisent leurs gains en 4 étapes
          </h3>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Rejoignez notre réseau de transport et optimisez vos revenus
          </p>
        </motion.div>

        {/* Steps */}
        <motion.div
          initial="hidden"
          animate={controls}
          variants={containerVariants}
          className="relative mb-16"
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
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          animate={controls}
          variants={itemVariants}
        >
          <motion.button
            className="bg-emerald-600 hover:bg-emerald-700 text-white font-medium px-8 py-4 rounded-xl transition-all duration-300 inline-flex items-center gap-2 shadow-lg hover:shadow-xl"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Rejoindre le réseau transport
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14m-7-7l7 7-7 7" />
            </svg>
          </motion.button>
        </motion.div>

        {/* Statistics */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6"
          initial="hidden"
          animate={controls}
          variants={containerVariants}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="text-center p-6 bg-gray-50 rounded-xl border border-gray-200"
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
            >
              <div className="text-2xl md:text-3xl font-bold text-emerald-600 mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-gray-600 font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}