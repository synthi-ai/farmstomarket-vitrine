'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const testimonials = [
  {
    id: 1,
    quote: "Une plateforme révolutionnaire",
    description: "J'ai optimisé le rendement de mes cultures de 45% grâce aux analyses en temps réel et aux recommandations personnalisées.",
    author: "Ngozi Mbeki",
    role: "Producteur de manioc",
    avatar: "/farmers/cassava1.jpeg"
  },
  {
    id: 2,
    quote: "Une technologie qui transforme",
    description: "Enfin une plateforme où les opérations de chaîne d'approvisionnement fonctionnent avec transparence et efficacité.",
    author: "Aminatou Bello",
    role: "Distributrice agricole",
    avatar: "/farmers/images1.jpeg"
  },
  {
    id: 3,
    quote: "Une solution complète",
    description: "Le temps de livraison de la ferme au marché a été réduit de 60% avec un suivi numérique complet.",
    author: "Kwame Asante",
    role: "Éleveur",
    avatar: "/farmers/farms2.jpeg"
  },
  {
    id: 4,
    quote: "Innovation exceptionnelle",
    description: "L'intégration marketplace a augmenté mes marges de 40% grâce aux algorithmes de tarification intelligente.",
    author: "Fatima Njoya",
    role: "Productrice d'huile de palme",
    avatar: "/farmers/cassava1.jpeg"
  },
  {
    id: 5,
    quote: "Plateforme d'avant-garde",
    description: "L'analyse de marché en temps réel et la modélisation prédictive ont transformé mes opérations agricoles.",
    author: "Amadou Tchoupo",
    role: "Propriétaire de plantation de café",
    avatar: "/farmers/images1.jpeg"
  }
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
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

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <span className="inline-block px-4 py-2 bg-emerald-100 text-emerald-700 text-sm font-medium rounded-full mb-4">
            Témoignages clients
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Ce que disent nos utilisateurs
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Découvrez les retours de plus de 5000+ agriculteurs et acheteurs
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              className="bg-white border border-gray-200 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 relative"
              variants={itemVariants}
              initial="hidden"
              animate="visible"
              style={{
                animationDelay: `${index * 0.1}s`
              }}
              whileHover={{
                y: -4,
                scale: 1.02,
                transition: { duration: 0.3 }
              }}
            >
              <div className="mb-6">
                <h3 className="font-semibold text-lg text-gray-900 mb-3">{testimonial.quote}</h3>
                <p className="text-gray-600 leading-relaxed">{testimonial.description}</p>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-full overflow-hidden bg-emerald-100">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.author}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">{testimonial.author}</p>
                  <p className="text-emerald-600 text-sm">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          className="flex justify-center mt-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`mx-2 h-2 rounded-full transition-all duration-300 ${
                activeIndex === index ? 'bg-emerald-600 w-8' : 'bg-gray-300 w-2 hover:bg-gray-400'
              }`}
              aria-label={`Aller au témoignage ${index + 1}`}
            />
          ))}
        </motion.div>

        <motion.div
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {[
            { value: '5,000+', label: 'Utilisateurs actifs' },
            { value: '95%', label: 'Taux de satisfaction' },
            { value: '15+', label: 'Pays couverts' },
            { value: '24/7', label: 'Support client' }
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="text-center p-6 rounded-xl bg-gray-50 border border-gray-200"
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