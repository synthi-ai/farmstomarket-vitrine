'use client';

import { useEffect, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import Image from 'next/image';

export default function Partners() {
  const controls = useAnimation();
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.2 });

  useEffect(() => {
    if (isInView) {
      controls.start('visible');

    }
  }, [isInView, controls]);

  const partners = [
    {
      name: 'AgriTech Solutions',
      logo: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjQ4IiB2aWV3Qm94PSIwIDAgMTAwIDQ4IiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxyZWN0IHdpZHRoPSIxMDAiIGhlaWdodD0iNDgiIGZpbGw9IiNGRkZGRkYiLz48dGV4dCB4PSI1MCIgeT0iMjgiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxMiIgZm9udC13ZWlnaHQ9ImJvbGQiIGZpbGw9IiMwMDAwMDAiIHRleHQtYW5jaG9yPSJtaWRkbGUiPkFHUklURUNIPC90ZXh0Pjwvc3ZnPg=='
    },
    {
      name: 'FarmFlow Systems',
      logo: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjQ4IiB2aWV3Qm94PSIwIDAgMTAwIDQ4IiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxyZWN0IHdpZHRoPSIxMDAiIGhlaWdodD0iNDgiIGZpbGw9IiNGRkZGRkYiIHN0cm9rZT0iIzEwQjk4MSIgc3Ryb2tlLXdpZHRoPSIyIi8+PHRleHQgeD0iNTAiIHk9IjI4IiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTIiIGZvbnQtd2VpZ2h0PSJib2xkIiBmaWxsPSIjMDAwMDAwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5GQVJNRTE8L3RleHQ+PC9zdmc+'
    },
    {
      name: 'GreenTech Industries',
      logo: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjQ4IiB2aWV3Qm94PSIwIDAgMTAwIDQ4IiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxyZWN0IHdpZHRoPSIxMDAiIGhlaWdodD0iNDgiIGZpbGw9IiNGRkZGRkYiLz48dGV4dCB4PSI1MCIgeT0iMjgiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxMSIgZm9udC13ZWlnaHQ9ImJvbGQiIGZpbGw9IiMxMEI5ODEiIHRleHQtYW5jaG9yPSJtaWRkbGUiPkdSRUVOVEVDSDwvdGV4dD48L3N2Zz4='
    },
    {
      name: 'Smart Harvest',
      logo: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjQ4IiB2aWV3Qm94PSIwIDAgMTAwIDQ4IiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxyZWN0IHdpZHRoPSIxMDAiIGhlaWdodD0iNDgiIGZpbGw9IiNGRkZGRkYiLz48dGV4dCB4PSI1MCIgeT0iMjgiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxMCIgZm9udC13ZWlnaHQ9ImJvbGQiIGZpbGw9IiMwMDAwMDAiIHRleHQtYW5jaG9yPSJtaWRkbGUiPlNNQVJUIEhBUlZFU1Q8L3RleHQ+PC9zdmc+'
    },
    {
      name: 'CropVision Corp',
      logo: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjQ4IiB2aWV3Qm94PSIwIDAgMTAwIDQ4IiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxyZWN0IHdpZHRoPSIxMDAiIGhlaWdodD0iNDgiIGZpbGw9IiNGRkZGRkYiLz48cG9seWdvbiBwb2ludHM9IjUwLDEwIDYwLDMwIDQwLDMwIiBmaWxsPSIjMTBCOTgxIi8+PHRleHQgeD0iNTAiIHk9IjQyIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iOCIgZm9udC13ZWlnaHQ9ImJvbGQiIGZpbGw9IiMwMDAwMDAiIHRleHQtYW5jaG9yPSJtaWRkbGUiPkNST1BWSVNJT048L3RleHQ+PC9zdmc+'
    },
    {
      name: 'AgroInnovate',
      logo: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjQ4IiB2aWV3Qm94PSIwIDAgMTAwIDQ4IiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxyZWN0IHdpZHRoPSIxMDAiIGhlaWdodD0iNDgiIGZpbGw9IiNGRkZGRkYiLz48Y2lyY2xlIGN4PSI1MCIgY3k9IjI0IiByPSI4IiBmaWxsPSIjMTBCOTgxIi8+PHRleHQgeD0iNTAiIHk9IjQwIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iOCIgZm9udC13ZWlnaHQ9ImJvbGQiIGZpbGw9IiMwMDAwMDAiIHRleHQtYW5jaG9yPSJtaWRkbGUiPkFHUk9JTk5PVkFURTwvdGV4dD48L3N2Zz4='
    }
  ];

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
            Nos partenaires
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Des entreprises qui nous font confiance
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Nous collaborons avec les leaders de l&apos;agriculture et de la technologie
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={controls}
        >
          {partners.map((partner, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300 group"
              whileHover={{ y: -4 }}
            >
              <div className="flex items-center justify-center h-16">
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  width={120}
                  height={48}
                  className="h-12 w-auto object-contain opacity-70 group-hover:opacity-100 transition-opacity duration-300"
                />
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          animate={controls}
          variants={itemVariants}
        >
          <p className="text-gray-600 mb-6">
            Rejoignez plus de 100+ entreprises qui transforment l&apos;agriculture
          </p>
          <motion.button
            className="bg-emerald-600 hover:bg-emerald-700 text-white font-medium px-8 py-4 rounded-xl transition-all duration-300 inline-flex items-center gap-2 shadow-lg hover:shadow-xl"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Devenir partenaire
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14m-7-7l7 7-7 7" />
            </svg>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}