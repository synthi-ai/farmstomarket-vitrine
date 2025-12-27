'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useLanguage } from '@/contexts/LanguageContext';

const MockupImage = ({ src, alt }: { src: string; alt: string }) => {
  return (
    <Image
      src={src}
      alt={alt}
      width={600}
      height={1000}
      priority
      className="object-contain"
      sizes="(max-width: 768px) 95vw, 600px"
    />
  );
};

const AgroBank = () => {
    const { t } = useLanguage();

    const mockups = [
        { image: "/Mockups/mockup 01.png", title: t('agrobank.wallet.title'), description: t('agrobank.wallet.description') },
        { image: "/Mockups/mockup 02.png", title: t('agrobank.trading.title'), description: t('agrobank.trading.description') },
        { image: "/Mockups/mockup 03.png", title: t('agrobank.payments.title'), description: t('agrobank.payments.description') }
    ];


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
                        {t('agrobank.badge')}
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        {t('agrobank.title')}
                    </h2>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                        {t('agrobank.description')}
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
                        {t('agrobank.advanced.title')}
                    </h3>
                    <p className="text-gray-600 max-w-3xl mx-auto">
                        {t('agrobank.advanced.description')}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
                    {[
                        {
                            title: t('agrobank.features.secure.title'),
                            description: t('agrobank.features.secure.description'),
                            iconPath: 'M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z'
                        },
                        {
                            title: t('agrobank.features.analytics.title'),
                            description: t('agrobank.features.analytics.description'),
                            iconPath: 'M9 17a2 2 0 11-4 0 2 2 0 014 0zM21 17a2 2 0 11-4 0 2 2 0 014 0z'
                        },
                        {
                            title: t('agrobank.features.mobile.title'),
                            description: t('agrobank.features.mobile.description'),
                            iconPath: 'M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z'
                        },
                        {
                            title: t('agrobank.features.contracts.title'),
                            description: t('agrobank.features.contracts.description'),
                            iconPath: 'M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z'
                        },
                        {
                            title: t('agrobank.features.insurance.title'),
                            description: t('agrobank.features.insurance.description'),
                            iconPath: 'M12,1L3,5V11C3,16.55 6.84,21.74 12,23C17.16,21.74 21,16.55 21,11V5L12,1M12,7C13.4,7 14.8,8.6 14.8,10.5V11.5C15.4,11.5 16,12.4 16,13V16C16,17.4 15.4,18 14.8,18H9.2C8.6,18 8,17.4 8,16V13C8,12.4 8.6,11.5 9.2,11.5V10.5C9.2,8.6 10.6,7 12,7M12,8.2C11.2,8.2 10.5,8.7 10.5,10.5V11.5H13.5V10.5C13.5,8.7 12.8,8.2 12,8.2Z'
                        },
                        {
                            title: t('agrobank.features.weather.title'),
                            description: t('agrobank.features.weather.description'),
                            iconPath: 'M12.74,5.47C15.1,6.5 16.35,9.03 15.92,11.46C17.19,12.56 18,14.19 18,16V16.17C18.31,16.06 18.65,16 19,16A3,3 0 0,1 22,19A3,3 0 0,1 19,22H6A4,4 0 0,1 2,18A4,4 0 0,1 6,14H6.27C5,12.45 4.6,10.24 5.5,8.26C6.75,5.28 10.25,4.07 12.74,5.47M11.93,7.3C10.16,6.5 8.09,7.31 7.31,9.07C6.85,10.09 6.93,11.22 7.41,12.13C8.5,10.83 10.16,10 12,10C12.7,10 13.38,10.12 14,10.34C13.94,9.06 13.18,7.86 11.93,7.3Z'
                        },
                        {
                            title: t('agrobank.features.equipment.title'),
                            description: t('agrobank.features.equipment.description'),
                            iconPath: 'M2,17H22V19H2M1.15,12.95L4,11L6.85,12.95L5.92,15H2.08M9.85,12.95L12.7,11L15.55,12.95L14.62,15H10.78M17.85,12.95L20.7,11L23.55,12.95L22.62,15H18.78M2,8V10H22V8H14L12,6H10L8,8M2,11V13H4V11M6,11V13H8V11M10,11V13H12V11M14,11V13H16V11M18,11V13H20V11M22,11V13H24V11'
                        },
                        {
                            title: t('agrobank.features.harvest.title'),
                            description: t('agrobank.features.harvest.description'),
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
                        { number: '50K+', label: t('agrobank.stats.farmers') },
                        { number: '€2.8B', label: t('agrobank.stats.transactions') },
                        { number: '95%', label: t('agrobank.stats.coverage') },
                        { number: '24/7', label: t('agrobank.stats.support') }
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
                        {t('agrobank.cta.title')}
                    </h3>
                    <p className="text-emerald-50 mb-8 max-w-3xl mx-auto">
                        {t('agrobank.cta.description')}
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <motion.button
                            className="bg-white text-emerald-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            {t('agrobank.cta.open')}
                        </motion.button>

                        <motion.button
                            className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-emerald-600 transition-colors"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            {t('agrobank.cta.consult')}
                        </motion.button>
                    </div>

                    <p className="text-emerald-100 text-sm mt-6">
                        {t('agrobank.cta.footer')}
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

export default AgroBank;