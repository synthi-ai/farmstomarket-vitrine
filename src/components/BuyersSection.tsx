'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useLanguage } from '@/contexts/LanguageContext';

interface BuyerType {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  features: string[];
  stats: { value: string; label: string }[];
  iconPath: string;
}

const BuyersSection = () => {
  const [isMounted, setIsMounted] = useState(false);
  const { t } = useLanguage();

  const buyers: BuyerType[] = [
    {
      id: 1,
      title: t('buyers.industrial.title'),
      subtitle: t('buyers.industrial.subtitle'),
      description: t('buyers.industrial.description'),
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1600",
      features: [
        t('buyers.industrial.features.0'),
        t('buyers.industrial.features.1'),
        t('buyers.industrial.features.2'),
        t('buyers.industrial.features.3'),
        t('buyers.industrial.features.4')
      ],
      stats: [
        { value: "500+", label: t('buyers.industrial.stats.0') },
        { value: "2M+", label: t('buyers.industrial.stats.1') }
      ],
      iconPath: "M12,15.5A3.5,3.5 0 0,1 8.5,12A3.5,3.5 0 0,1 12,8.5A3.5,3.5 0 0,1 15.5,12A3.5,3.5 0 0,1 12,15.5M19.43,12.97C19.47,12.65 19.5,12.33 19.5,12C19.5,11.67 19.47,11.34 19.43,11L21.54,9.37C21.73,9.22 21.78,8.95 21.66,8.73L19.66,5.27C19.54,5.05 19.27,4.96 19.05,5.05L16.56,6.05C16.04,5.66 15.5,5.32 14.87,5.07L14.5,2.42C14.46,2.18 14.25,2 14,2H10C9.75,2 9.54,2.18 9.5,2.42L9.13,5.07C8.5,5.32 7.96,5.66 7.44,6.05L4.95,5.05C4.73,4.96 4.46,5.05 4.34,5.27L2.34,8.73C2.22,8.95 2.27,9.22 2.46,9.37L4.57,11C4.53,11.34 4.5,11.67 4.5,12C4.5,12.33 4.53,12.65 4.57,12.97L2.46,14.63C2.27,14.78 2.22,15.05 2.34,15.27L4.34,18.73C4.46,18.95 4.73,19.03 4.95,18.95L7.44,17.94C7.96,18.34 8.5,18.68 9.13,18.93L9.5,21.58C9.54,21.82 9.75,22 10,22H14C14.25,22 14.46,21.82 14.5,21.58L14.87,18.93C15.5,18.68 16.04,18.34 16.56,17.94L19.05,18.95C19.27,19.03 19.54,18.95 19.66,18.73L21.66,15.27C21.78,15.05 21.73,14.78 21.54,14.63L19.43,12.97Z"
    },
    {
      id: 2,
      title: t('buyers.traders.title'),
      subtitle: t('buyers.traders.subtitle'),
      description: t('buyers.traders.description'),
      image: "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1600",
      features: [
        t('buyers.traders.features.0'),
        t('buyers.traders.features.1'),
        t('buyers.traders.features.2'),
        t('buyers.traders.features.3'),
        t('buyers.traders.features.4')
      ],
      stats: [
        { value: "1,200+", label: t('buyers.traders.stats.0') },
        { value: "50M€+", label: t('buyers.traders.stats.1') }
      ],
      iconPath: "M16,6L18.29,8.29L13.41,13.17L9.41,9.17L2,16.59L3.41,18L9.41,12L13.41,16L19.71,9.71L22,12V6H16Z"
    },
    {
      id: 3,
      title: t('buyers.retail.title'),
      subtitle: t('buyers.retail.subtitle'),
      description: t('buyers.retail.description'),
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1600",
      features: [
        t('buyers.retail.features.0'),
        t('buyers.retail.features.1'),
        t('buyers.retail.features.2'),
        t('buyers.retail.features.3'),
        t('buyers.retail.features.4')
      ],
      stats: [
        { value: "800+", label: t('buyers.retail.stats.0') },
        { value: "95%", label: t('buyers.retail.stats.1') }
      ],
      iconPath: "M19,7H22V9H19V12H17V9H14V7H17V4H19V7M12,2C13.1,2 14,2.9 14,4C14,5.1 13.1,6 12,6C10.9,6 10,5.1 10,4C10,2.9 10.9,2 12,2M21,9H20L18,17H15L13.5,7H10.5L9,17H6L4,9H3V7H6.5L7.5,4H12.5L13.5,7H21V9Z"
    },
    {
      id: 4,
      title: t('buyers.local.title'),
      subtitle: t('buyers.local.subtitle'),
      description: t('buyers.local.description'),
      image: "https://images.unsplash.com/photo-1488459716781-31db52582fe9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1600",
      features: [
        t('buyers.local.features.0'),
        t('buyers.local.features.1'),
        t('buyers.local.features.2'),
        t('buyers.local.features.3'),
        t('buyers.local.features.4')
      ],
      stats: [
        { value: "300+", label: t('buyers.local.stats.0') },
        { value: "85%", label: t('buyers.local.stats.1') }
      ],
      iconPath: "M12,2A3,3 0 0,1 15,5V11A3,3 0 0,1 12,14A3,3 0 0,1 9,11V5A3,3 0 0,1 12,2M19,11C19,14.53 16.39,17.44 13,17.93V21H11V17.93C7.61,17.44 5,14.53 5,11H7A5,5 0 0,0 12,16A5,5 0 0,0 17,11H19Z"
    },
    {
      id: 5,
      title: t('buyers.export.title'),
      subtitle: t('buyers.export.subtitle'),
      description: t('buyers.export.description'),
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1600",
      features: [
        t('buyers.export.features.0'),
        t('buyers.export.features.1'),
        t('buyers.export.features.2'),
        t('buyers.export.features.3'),
        t('buyers.export.features.4')
      ],
      stats: [
        { value: "45+", label: t('buyers.export.stats.0') },
        { value: "25M€+", label: t('buyers.export.stats.1') }
      ],
      iconPath: "M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M11,14.5V9.5L15,12L11,14.5Z"
    }
  ];

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return (
      <section className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-gray-900">
            Réseau d&apos;Acheteurs
          </h1>
          <p className="text-lg md:text-xl text-gray-600">
            Connecter les agriculteurs aux opportunités de marché
          </p>
        </div>
      </section>
    );
  }

  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920"
          alt={t('buyers.title')}
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/60" />

        <div className="relative z-10 text-center px-6 max-w-6xl mx-auto text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-6"
          >
            <span className="inline-block px-4 py-2 bg-emerald-100/20 backdrop-blur-sm text-emerald-300 text-sm font-medium rounded-full border border-emerald-300/30">
              {t('buyers.badge')}
            </span>
          </motion.div>

          <motion.h1
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {t('buyers.title')}
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl mb-8 text-gray-200 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {t('buyers.subtitle')}
          </motion.p>

          <motion.button
            className="bg-emerald-600 hover:bg-emerald-700 text-white font-medium px-8 py-4 rounded-xl transition-colors shadow-lg"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            {t('buyers.joinNetwork')}
          </motion.button>
        </div>
      </section>

      {/* Buyers Sections */}
      {buyers.map((buyer, index) => (
        <section key={buyer.id} className="py-20">
          <div className="max-w-7xl mx-auto px-6">
            <div className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${
              index % 2 === 1 ? 'lg:grid-cols-2' : ''
            }`}>

              {/* Content */}
              <motion.div
                className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true, amount: 0.3 }}
              >
                {/* Icon */}
                <div className="w-16 h-16 bg-emerald-100 rounded-xl flex items-center justify-center mb-6 border border-emerald-200">
                  <svg className="w-8 h-8 text-emerald-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d={buyer.iconPath} />
                  </svg>
                </div>

                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
                  {buyer.title}
                </h2>
                <h3 className="text-xl mb-6 text-emerald-600 font-medium">
                  {buyer.subtitle}
                </h3>
                <p className="text-lg mb-8 text-gray-600 leading-relaxed">
                  {buyer.description}
                </p>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-6 mb-8">
                  {buyer.stats.map((stat, statIndex) => (
                    <motion.div
                      key={statIndex}
                      className="text-center p-4 bg-white rounded-xl border border-gray-200 shadow-sm"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.2 + statIndex * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <div className="text-2xl md:text-3xl font-bold text-emerald-600 mb-1">
                        {stat.value}
                      </div>
                      <div className="text-sm text-gray-600 font-medium">
                        {stat.label}
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* CTA Button */}
                <motion.button
                  className="bg-emerald-600 hover:bg-emerald-700 text-white font-medium px-6 py-3 rounded-xl transition-colors"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {t('buyers.connectWith')} {buyer.title.toLowerCase()}
                </motion.button>
              </motion.div>

              {/* Features List */}
              <motion.div
                className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}
                initial={{ opacity: 0, x: index % 2 === 0 ? 30 : -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true, amount: 0.3 }}
              >
                <h4 className="text-xl font-semibold text-gray-900 mb-6">{t('buyers.keyFeatures')}</h4>
                <div className="space-y-4">
                  {buyer.features.map((feature, featureIndex) => (
                    <motion.div
                      key={featureIndex}
                      className="flex items-center space-x-4 p-4 bg-white rounded-xl border border-gray-200 shadow-sm"
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.4 + featureIndex * 0.1 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.01 }}
                    >
                      <div className="w-2 h-2 rounded-full bg-emerald-500 flex-shrink-0"></div>
                      <span className="text-gray-700 font-medium">{feature}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      ))}

      {/* Final CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <motion.div
            className="bg-gray-50 rounded-2xl p-12 border border-gray-200"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
              {t('buyers.readyToJoin')}
            </h2>
            <p className="text-xl mb-8 text-gray-600 max-w-3xl mx-auto">
              {t('buyers.readyDescription')}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <motion.button
                className="bg-emerald-600 hover:bg-emerald-700 text-white font-medium px-8 py-4 rounded-xl transition-colors"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {t('buyers.signupBuyer')}
              </motion.button>

              <motion.button
                className="border border-gray-300 text-gray-700 hover:border-gray-400 font-medium px-8 py-4 rounded-xl transition-colors"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {t('buyers.learnMore')}
              </motion.button>
            </div>

            {/* Trust Indicators */}
            <motion.div
              className="grid grid-cols-2 md:grid-cols-4 gap-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              {[
                { value: '2,800+', label: t('buyers.totalBuyers') },
                { value: '100M€+', label: t('buyers.volumeExchanged') },
                { value: '50+', label: t('buyers.countries') },
                { value: '99%', label: t('buyers.satisfaction') }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  className="text-center"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="text-2xl md:text-3xl font-bold text-emerald-600 mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-600 font-medium">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default BuyersSection;