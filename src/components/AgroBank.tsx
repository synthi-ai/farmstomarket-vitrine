/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const MockupImage = ({ src, alt }: { src: string; alt: string }) => {
  return (
    <Image
      src={src}
      alt={alt}
      width={320}
      height={500}
      priority
      className="object-contain"
      sizes="(max-width: 768px) 90vw, 320px"
    />
  );
};

const AgroBank = () => {
    const mockups = [
        { image: "/Mockups/mockup 01.png", title: "Portefeuille AgroBank", description: "Gérez vos finances agricoles avec une sécurité bancaire professionnelle" },
        { image: "/Mockups/mockup 02.png", title: "Trading de matières premières", description: "Accédez aux marchés agricoles en temps réel avec des analytics avancées" },
        { image: "/Mockups/mockup 03.png", title: "Paiements AgroBank", description: "Processus de paiement instantané pour fournisseurs et équipes agricoles" }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                duration: 1,
                staggerChildren: 0.2,
            },
        },
    } as const;

    const itemVariants = {
        hidden: {
            opacity: 0,
            y: 40,
            scale: 0.9
        },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                duration: 0.8,
                ease: [0.23, 1, 0.32, 1]
            }
        }
    } as const;

    return (
        <section className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-6">

                <motion.div className="text-center mb-16" variants={itemVariants}>
                    <span className="inline-block px-4 py-2 bg-emerald-100 text-emerald-700 text-sm font-medium rounded-full mb-4">
                        Fintech agricole
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        AgroBank - Services financiers numériques
                    </h2>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                        Technologie financière révolutionnaire avec infrastructure bancaire numérique avancée, trading de matières premières en temps réel et traitement de paiement instantané conçus pour les opérations agricoles modernes.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
                    {mockups.map((mockup, index) => (
                        <motion.div
                            key={index}
                            className="flex flex-col items-center"
                            variants={itemVariants}
                        >
                            <div className="mb-6">
                                <MockupImage src={mockup.image} alt={mockup.title} />
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-3">{mockup.title}</h3>
                            <p className="text-gray-600 text-center leading-relaxed max-w-sm">
                                {mockup.description}
                            </p>
                        </motion.div>
                    ))}
                </div>

                <div className="text-center mb-16">
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                        Technologie bancaire agricole avancée
                    </h3>
                    <p className="text-gray-600 max-w-3xl mx-auto">
                        Développé par des experts en technologie agricole pour les professionnels de l'agriculture. AgroBank comprend les exigences financières complexes des opérations agricoles modernes.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
                    {[
                        {
                            title: 'Transactions sécurisées',
                            description: 'Protocoles de chiffrement de niveau bancaire avec normes de conformité agricole et protection complète des données.',
                            iconPath: 'M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z'
                        },
                        {
                            title: 'Analyses de matières premières',
                            description: 'Intelligence de marché alimentée par IA et algorithmes de prédiction des prix des cultures pour optimisation des profits.',
                            iconPath: 'M9 17a2 2 0 11-4 0 2 2 0 014 0zM21 17a2 2 0 11-4 0 2 2 0 014 0z'
                        },
                        {
                            title: 'Banque mobile agricole',
                            description: 'Services bancaires agricoles complets optimisés pour la connectivité rurale avec capacités hors ligne.',
                            iconPath: 'M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z'
                        },
                        {
                            title: 'Contrats intelligents',
                            description: 'Systèmes de paiement automatisés pour travailleurs saisonniers avec vérification blockchain.',
                            iconPath: 'M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z'
                        },
                        {
                            title: 'Assurance récolte',
                            description: 'Intégration transparente avec les fournisseurs d&apos;assurance agricole et traitement automatisé des réclamations.',
                            iconPath: 'M12,1L3,5V11C3,16.55 6.84,21.74 12,23C17.16,21.74 21,16.55 21,11V5L12,1M12,7C13.4,7 14.8,8.6 14.8,10.5V11.5C15.4,11.5 16,12.4 16,13V16C16,17.4 15.4,18 14.8,18H9.2C8.6,18 8,17.4 8,16V13C8,12.4 8.6,11.5 9.2,11.5V10.5C9.2,8.6 10.6,7 12,7M12,8.2C11.2,8.2 10.5,8.7 10.5,10.5V11.5H13.5V10.5C13.5,8.7 12.8,8.2 12,8.2Z'
                        },
                        {
                            title: 'Alertes météorologiques',
                            description: 'Alertes financières synchronisées avec les modèles météorologiques et leur impact sur les opérations agricoles.',
                            iconPath: 'M12.74,5.47C15.1,6.5 16.35,9.03 15.92,11.46C17.19,12.56 18,14.19 18,16V16.17C18.31,16.06 18.65,16 19,16A3,3 0 0,1 22,19A3,3 0 0,1 19,22H6A4,4 0 0,1 2,18A4,4 0 0,1 6,14H6.27C5,12.45 4.6,10.24 5.5,8.26C6.75,5.28 10.25,4.07 12.74,5.47M11.93,7.3C10.16,6.5 8.09,7.31 7.31,9.07C6.85,10.09 6.93,11.22 7.41,12.13C8.5,10.83 10.16,10 12,10C12.7,10 13.38,10.12 14,10.34C13.94,9.06 13.18,7.86 11.93,7.3Z'
                        },
                        {
                            title: 'Financement d&apos;équipement',
                            description: 'Prêts spécialisés et options de leasing pour équipement agricole avec taux compétitifs.',
                            iconPath: 'M2,17H22V19H2M1.15,12.95L4,11L6.85,12.95L5.92,15H2.08M9.85,12.95L12.7,11L15.55,12.95L14.62,15H10.78M17.85,12.95L20.7,11L23.55,12.95L22.62,15H18.78M2,8V10H22V8H14L12,6H10L8,8M2,11V13H4V11M6,11V13H8V11M10,11V13H12V11M14,11V13H16V11M18,11V13H20V11M22,11V13H24V11'
                        },
                        {
                            title: 'Paiements de récolte',
                            description: 'Planification de paiement saisonnière alignée sur les cycles de récolte avec modélisation financière prédictive.',
                            iconPath: 'M17,10.5V7A1,1 0 0,0 16,6H4A1,1 0 0,0 3,7V10.5C3,11.33 3.67,12 4.5,12C5.33,12 6,11.33 6,10.5V9H14V10.5C14,11.33 14.67,12 15.5,12C16.33,12 17,11.33 17,10.5M4,2H16A1,1 0 0,1 17,3V5H3V3A1,1 0 0,1 4,2M10,14L12,16H8L10,14M10,20L8,18H12L10,20M16,14L18,16H14L16,14M16,20L14,18H18L16,20Z'
                        }
                    ].map((feature, index) => (
                        <motion.div
                            key={index}
                            className="bg-white border border-gray-200 rounded-xl p-6 text-center shadow-sm hover:shadow-md transition-all"
                            variants={itemVariants}
                            whileHover={{ y: -2 }}
                        >
                            <div className="w-12 h-12 bg-emerald-100 rounded-xl mx-auto mb-4 flex items-center justify-center">
                                <svg className="w-6 h-6 text-emerald-600" fill="currentColor" viewBox="0 0 24 24">
                                    <path d={feature.iconPath} />
                                </svg>
                            </div>
                            <h4 className="font-semibold text-gray-900 mb-3 text-sm">{feature.title}</h4>
                            <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
                        </motion.div>
                    ))}
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
                    {[
                        { number: '50K+', label: 'Agriculteurs clients' },
                        { number: '2,8 Mds €', label: 'Transactions traitées' },
                        { number: '95%', label: 'Couverture rurale' },
                        { number: '24/7', label: 'Support disponible' }
                    ].map((stat, index) => (
                        <motion.div
                            key={index}
                            className="text-center p-6 bg-white rounded-xl shadow-sm border border-gray-200"
                            variants={itemVariants}
                            whileHover={{ y: -2 }}
                        >
                            <div className="text-2xl md:text-3xl font-bold text-emerald-600 mb-2">
                                {stat.number}
                            </div>
                            <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    className="bg-emerald-600 rounded-xl p-12 text-center text-white"
                    variants={itemVariants}
                >
                    <h3 className="text-2xl md:text-3xl font-bold mb-4">
                        Prêt à révolutionner les finances de votre exploitation ?
                    </h3>
                    <p className="text-emerald-50 mb-8 max-w-3xl mx-auto">
                        Rejoignez des milliers de professionnels agricoles qui font confiance à AgroBank pour leurs opérations financières agricoles. Du capital semencier aux revenus de récolte, nous fournissons des solutions technologiques financières complètes pour chaque étape de votre parcours agricole.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <motion.button
                            className="bg-white text-emerald-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Ouvrir un compte AgroBank
                        </motion.button>

                        <motion.button
                            className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-emerald-600 transition-colors"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Planifier une consultation
                        </motion.button>
                    </div>

                    <p className="text-emerald-100 text-sm mt-6">
                        Assuré FDIC • Support spécialisé agricole • Aucun frais caché
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

export default AgroBank;