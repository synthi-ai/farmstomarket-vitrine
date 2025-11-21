'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useAnimation, useInView } from 'framer-motion';

const faqItems = [
  {
    id: 1,
    question: "Y a-t-il des frais cachés pour utiliser FarmsToMarket ?",
    answer: "Non, il n'y a aucun frais caché. Nous sommes entièrement transparents avec notre structure tarifaire. Les agriculteurs paient une petite commission uniquement lors de la réalisation d'une vente. Tous les frais potentiels sont clairement affichés avant de finaliser votre annonce.",
    category: "TARIFICATION"
  },
  {
    id: 2,
    question: "Comment FarmsToMarket assure-t-il des prix équitables ?",
    answer: "Nous surveillons les taux du marché et fournissons des conseils de prix aux vendeurs. Notre plateforme permet également aux acheteurs de comparer les prix entre plusieurs vendeurs, encourageant une tarification compétitive et équitable.",
    category: "TARIFICATION"
  },
  {
    id: 3,
    question: "Comment puis-je vérifier les certifications d'un vendeur ?",
    answer: "Toutes les certifications des vendeurs sont vérifiées par notre équipe et affichées en évidence sur leur profil. Vous pouvez cliquer sur n'importe quel badge de certification pour voir les détails de vérification, l'autorité émettrice et les dates d'expiration.",
    category: "SÉCURITÉ"
  },
  {
    id: 4,
    question: "Que se passe-t-il si un acheteur disparaît après livraison ?",
    answer: "Votre paiement est sécurisé grâce à notre système d'entiercement. Les fonds ne sont libérés qu'une fois la confirmation de livraison reçue. En cas de problème avec un acheteur, notre équipe de résolution de litiges vous assistera.",
    category: "SÉCURITÉ"
  },
  {
    id: 5,
    question: "Que faire si le transporteur endommage ma marchandise ?",
    answer: "Toutes les expéditions via notre plateforme incluent une couverture d'assurance de base. Vous pouvez déposer une réclamation via votre tableau de bord, et notre équipe logistique enquêtera. Pour les expéditions de grande valeur, nous recommandons une couverture d'assurance supplémentaire.",
    category: "LIVRAISON"
  },
  {
    id: 6,
    question: "Comment éviter les retards de livraison ?",
    answer: "Notre système surveille les conditions météorologiques et de circulation pour planifier des délais de livraison optimaux. Nous fournissons un suivi en temps réel et des notifications proactives sur les retards potentiels.",
    category: "LIVRAISON"
  },
  {
    id: 7,
    question: "Comment fonctionne le partage des coûts de livraison ?",
    answer: "Notre fonction de partage des coûts permet à plusieurs acheteurs de la même zone de partager les coûts de livraison. Lors du checkout, les acheteurs peuvent opter pour des groupes de livraison partagée.",
    category: "LIVRAISON"
  },
  {
    id: 8,
    question: "Puis-je obtenir un remboursement si le produit ne répond pas aux standards ?",
    answer: "Oui, nous offrons une garantie qualité. Si les produits ne correspondent pas à la description ou ne répondent pas aux standards de qualité, prenez des photos et signalez le problème dans les 24 heures suivant la livraison.",
    category: "QUALITÉ"
  }
];

export default function FAQ() {
  const [expandedId, setExpandedId] = useState<number | null>(null);
  const controls = useAnimation();
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.2 });

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [isInView, controls]);

  const toggleExpand = (id: number) => {
    setExpandedId(expandedId === id ? null : id);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'TARIFICATION': return 'text-emerald-600 bg-emerald-50';
      case 'SÉCURITÉ': return 'text-blue-600 bg-blue-50';
      case 'LIVRAISON': return 'text-purple-600 bg-purple-50';
      case 'QUALITÉ': return 'text-orange-600 bg-orange-50';
      default: return 'text-gray-600 bg-gray-50';
    }
  };

  return (
    <section className="py-20 bg-gray-50" ref={containerRef}>
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={controls}
          variants={itemVariants}
        >
          <span className="inline-block px-4 py-2 bg-emerald-100 text-emerald-700 text-sm font-medium rounded-full mb-4">
            Questions fréquentes
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Tout ce que vous devez savoir
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Trouvez rapidement les réponses à vos questions les plus courantes
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16"
          variants={containerVariants}
          initial="hidden"
          animate={controls}
        >
          {faqItems.map((item) => (
            <motion.div
              key={item.id}
              className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300"
              variants={itemVariants}
            >
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${getCategoryColor(item.category)}`}>
                    {item.category}
                  </span>
                </div>

                <div
                  className="flex justify-between items-start cursor-pointer"
                  onClick={() => toggleExpand(item.id)}
                >
                  <h3 className="text-lg font-semibold text-gray-900 pr-4 leading-tight">
                    {item.question}
                  </h3>
                  <motion.div
                    animate={{ rotate: expandedId === item.id ? 45 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="w-8 h-8 bg-emerald-600 rounded-full flex items-center justify-center text-white font-bold text-xl flex-shrink-0"
                  >
                    +
                  </motion.div>
                </div>

                <AnimatePresence>
                  {expandedId === item.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeOut" }}
                      className="mt-4"
                    >
                      <div className="w-full h-px bg-gray-200 mb-4"></div>
                      <p className="text-gray-600 leading-relaxed">
                        {item.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="bg-white border border-gray-200 rounded-xl p-8 shadow-sm"
          initial={{ opacity: 0, y: 20 }}
          animate={controls}
          variants={itemVariants}
        >
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <h3 className="font-bold text-2xl mb-2 text-gray-900">
                Vous ne trouvez pas votre réponse ?
              </h3>
              <p className="text-gray-600">
                Notre équipe de support est là pour vous aider 24/7
              </p>
            </div>

            <motion.button
              className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-xl font-medium transition-all duration-300 inline-flex items-center gap-2 shadow-lg hover:shadow-xl"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Contacter le support
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14m-7-7l7 7-7 7" />
              </svg>
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}