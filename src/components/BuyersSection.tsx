/* eslint-disable @typescript-eslint/no-unused-vars */
'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';

interface BuyerType {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  features: string[];
  stats: { value: string; label: string }[];
  iconPath: string;
  gradient: string;
}

const BuyersSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMounted, setIsMounted] = useState(false);

  const buyers: BuyerType[] = [
    {
      id: 1,
      title: "INDUSTRIAL PARTNERS",
      subtitle: "LARGE-SCALE MANUFACTURING",
      description: "Connect with major food processing companies, beverage manufacturers, and industrial buyers seeking consistent, high-quality agricultural inputs for their production lines.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1600",
      features: [
        "Bulk procurement solutions",
        "Contract farming programs",
        "Quality standardization",
        "Supply chain integration",
        "Long-term partnerships"
      ],
      stats: [
        { value: "500+", label: "INDUSTRIAL PARTNERS" },
        { value: "2M+", label: "TONS PROCESSED" }
      ],
      iconPath: "M12,15.5A3.5,3.5 0 0,1 8.5,12A3.5,3.5 0 0,1 12,8.5A3.5,3.5 0 0,1 15.5,12A3.5,3.5 0 0,1 12,15.5M19.43,12.97C19.47,12.65 19.5,12.33 19.5,12C19.5,11.67 19.47,11.34 19.43,11L21.54,9.37C21.73,9.22 21.78,8.95 21.66,8.73L19.66,5.27C19.54,5.05 19.27,4.96 19.05,5.05L16.56,6.05C16.04,5.66 15.5,5.32 14.87,5.07L14.5,2.42C14.46,2.18 14.25,2 14,2H10C9.75,2 9.54,2.18 9.5,2.42L9.13,5.07C8.5,5.32 7.96,5.66 7.44,6.05L4.95,5.05C4.73,4.96 4.46,5.05 4.34,5.27L2.34,8.73C2.22,8.95 2.27,9.22 2.46,9.37L4.57,11C4.53,11.34 4.5,11.67 4.5,12C4.5,12.33 4.53,12.65 4.57,12.97L2.46,14.63C2.27,14.78 2.22,15.05 2.34,15.27L4.34,18.73C4.46,18.95 4.73,19.03 4.95,18.95L7.44,17.94C7.96,18.34 8.5,18.68 9.13,18.93L9.5,21.58C9.54,21.82 9.75,22 10,22H14C14.25,22 14.46,21.82 14.5,21.58L14.87,18.93C15.5,18.68 16.04,18.34 16.56,17.94L19.05,18.95C19.27,19.03 19.54,18.95 19.66,18.73L21.66,15.27C21.78,15.05 21.73,14.78 21.54,14.63L19.43,12.97Z",
      gradient: "linear-gradient(135deg, #000000 0%, #00E834 50%, #000000 100%)"
    },
    {
      id: 2,
      title: "COMMERCIAL TRADERS",
      subtitle: "WHOLESALE & DISTRIBUTION",
      description: "Partner with commercial traders, wholesalers, and distribution networks that move agricultural products efficiently from farms to retail markets across regions.",
      image: "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1600",
      features: [
        "Real-time price discovery",
        "Flexible payment terms",
        "Logistics coordination",
        "Market intelligence",
        "Risk management tools"
      ],
      stats: [
        { value: "1,200+", label: "ACTIVE TRADERS" },
        { value: "$50M+", label: "MONTHLY VOLUME" }
      ],
      iconPath: "M16,6L18.29,8.29L13.41,13.17L9.41,9.17L2,16.59L3.41,18L9.41,12L13.41,16L19.71,9.71L22,12V6H16Z",
      gradient: "linear-gradient(135deg, #000000 0%, #FFFFFF 50%, #000000 100%)"
    },
    {
      id: 3,
      title: "RETAIL MARKETS",
      subtitle: "SUPERMARKETS & STORES",
      description: "Supply fresh produce directly to supermarket chains, grocery stores, and retail outlets that prioritize quality, freshness, and sustainable sourcing practices.",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1600",
      features: [
        "Fresh produce sourcing",
        "Seasonal availability",
        "Traceability systems",
        "Packaging solutions",
        "Delivery scheduling"
      ],
      stats: [
        { value: "800+", label: "RETAIL PARTNERS" },
        { value: "95%", label: "ON-TIME DELIVERY" }
      ],
      iconPath: "M19,7H22V9H19V12H17V9H14V7H17V4H19V7M12,2C13.1,2 14,2.9 14,4C14,5.1 13.1,6 12,6C10.9,6 10,5.1 10,4C10,2.9 10.9,2 12,2M21,9H20L18,17H15L13.5,7H10.5L9,17H6L4,9H3V7H6.5L7.5,4H12.5L13.5,7H21V9Z",
      gradient: "linear-gradient(135deg, #00E834 0%, #FFFFFF 50%, #000000 100%)"
    },
    {
      id: 4,
      title: "LOCAL MARKETS",
      subtitle: "COMMUNITY & FARMERS MARKETS",
      description: "Connect with local farmers markets, community-supported agriculture programs, and direct-to-consumer channels that value local sourcing and community relationships.",
      image: "https://images.unsplash.com/photo-1488459716781-31db52582fe9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1600",
      features: [
        "Local sourcing networks",
        "Community partnerships",
        "Seasonal planning",
        "Direct relationships",
        "Sustainable practices"
      ],
      stats: [
        { value: "300+", label: "LOCAL MARKETS" },
        { value: "85%", label: "CUSTOMER SATISFACTION" }
      ],
      iconPath: "M12,2A3,3 0 0,1 15,5V11A3,3 0 0,1 12,14A3,3 0 0,1 9,11V5A3,3 0 0,1 12,2M19,11C19,14.53 16.39,17.44 13,17.93V21H11V17.93C7.61,17.44 5,14.53 5,11H7A5,5 0 0,0 12,16A5,5 0 0,0 17,11H19Z",
      gradient: "linear-gradient(135deg, #FFFFFF 0%, #00E834 50%, #000000 100%)"
    },
    {
      id: 5,
      title: "EXPORT PARTNERS",
      subtitle: "INTERNATIONAL TRADE",
      description: "Facilitate international trade with export partners, global distributors, and overseas markets seeking premium agricultural products with proper certifications and documentation.",
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1600",
      features: [
        "Export documentation",
        "International standards",
        "Currency management",
        "Shipping coordination",
        "Market expansion"
      ],
      stats: [
        { value: "45+", label: "COUNTRIES" },
        { value: "$25M+", label: "EXPORT VALUE" }
      ],
      iconPath: "M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M11,14.5V9.5L15,12L11,14.5Z",
      gradient: "linear-gradient(135deg, #000000 0%, #00E834 50%, #FFFFFF 100%)"
    }
  ];

  const scroll = useScroll({
    target: isMounted ? containerRef : undefined,
    offset: ["start end", "end start"],
  });

  const backgroundY = useTransform(scroll.scrollYProgress, [0, 1], ['0%', '50%']);
  const textY = useTransform(scroll.scrollYProgress, [0, 1], ['0%', '-20%']);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const useTransformValue = (transform: MotionValue<string>, fallback: string = '0%') => {
    const [value, setValue] = useState(fallback);
    
    useEffect(() => {
      if (!isMounted) return;
      
      const unsubscribe = transform.on('change', (latest) => {
        setValue(latest);
      });
      
      return unsubscribe;
    }, [transform, isMounted]);
    
    return value;
  };

  const backgroundYValue = useTransformValue(backgroundY, '0%');
  const textYValue = useTransformValue(textY, '0%');

  if (!isMounted) {
    return (
      <section 
        className="relative min-h-screen"
        style={{
          background: `
            radial-gradient(ellipse at top, rgba(0, 232, 52, 0.05) 0%, transparent 50%),
            radial-gradient(ellipse at bottom, rgba(0, 232, 52, 0.03) 0%, transparent 50%),
            linear-gradient(135deg, #000000 0%, #111111 50%, #000000 100%)
          `
        }}
      >
        <div className="h-screen flex items-center justify-center">
          <div className="text-center px-4">
            <h1 className="text-4xl md:text-6xl font-black mb-4 text-[#00E834]">
              BUYERS NETWORK
            </h1>
            <p className="text-lg md:text-xl text-white">
              CONNECTING FARMERS WITH ADVANCED MARKET OPPORTUNITIES
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section 
      ref={containerRef}
      className="relative"
      style={{
        background: `
          radial-gradient(ellipse at top, rgba(0, 232, 52, 0.05) 0%, transparent 50%),
          radial-gradient(ellipse at bottom, rgba(0, 232, 52, 0.03) 0%, transparent 50%),
          linear-gradient(135deg, #000000 0%, #111111 50%, #000000 100%)
        `
      }}
    >
      {/* Grille cyberpunk en arrière-plan */}
      <div className="absolute inset-0 opacity-5">
        <div 
          className="w-full h-full"
          style={{
            backgroundImage: `
              linear-gradient(rgba(0, 232, 52, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0, 232, 52, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '100px 100px'
          }}
        />
      </div>

      {/* Header Section Futuriste */}
      <div className="relative h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1560472354-b33ff0c44a43?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            transform: `translateY(${backgroundYValue})`
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/30 z-1" />
        
        <motion.div 
          className="relative z-10 text-center px-6 max-w-6xl mx-auto"
          style={{ 
            transform: `translateY(${textYValue})`
          }}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.2 }}
        >
          <div className="bg-gradient-to-r from-black via-gray-900 to-black border border-[#00E834] px-8 py-4 rounded-2xl shadow-lg backdrop-blur-sm mb-8 inline-block">
            <div className="flex items-center justify-center space-x-4">
              <div className="w-4 h-4 bg-[#00E834] rounded-full animate-pulse shadow-lg">
                <div className="w-full h-full bg-[#00E834] rounded-full animate-ping opacity-75"></div>
              </div>
              <span className="text-[#00E834] font-black text-lg tracking-wider">GLOBAL BUYERS NETWORK</span>
            </div>
          </div>

          <motion.h1 
            className="text-5xl md:text-7xl lg:text-8xl font-black mb-8 leading-tight"
            style={{ 
              color: 'transparent',
              backgroundImage: 'linear-gradient(45deg, #00E834, #FFFFFF, #00E834)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              textShadow: '0 0 30px rgba(0, 232, 52, 0.5)'
            }}
          >
            BUYERS NETWORK
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl lg:text-3xl mb-12 text-white font-bold tracking-wide"
          >
            CONNECTING FARMERS WITH 
            <span className="text-[#00E834]"> ADVANCED MARKET OPPORTUNITIES</span>
          </motion.p>
          
          <motion.div 
            className="inline-block px-12 py-6 rounded-2xl cursor-pointer bg-gradient-to-r from-[#00E834] to-green-600 text-black border border-green-400 shadow-lg"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="font-black text-xl tracking-wide">
              JOIN MARKETPLACE NETWORK
            </span>
          </motion.div>
        </motion.div>

        {/* Particules flottantes */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-[#00E834] rounded-full opacity-40"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`
              }}
              animate={{
                y: [0, -60, 0],
                x: [0, Math.sin(i) * 40, 0],
                opacity: [0.4, 0.8, 0.4],
                scale: [1, 1.5, 1]
              }}
              transition={{
                duration: 10 + i * 0.5,
                repeat: Infinity,
                delay: i * 0.4,
                ease: "easeInOut"
              }}
            />
          ))}
        </div>
      </div>

      {/* Buyers Sections Futuristes */}
      {buyers.map((buyer, index) => {
        const sectionProgress = isMounted ? scroll.scrollYProgress.get() : 0;
        const sectionOffset = sectionProgress * 30;
        
        return (
          <div key={buyer.id} className="relative h-screen flex items-center justify-center overflow-hidden">
            {/* Background Image avec Parallax */}
            <div
              className="absolute inset-0 z-0"
              style={{
                backgroundImage: `url(${buyer.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                transform: `translateY(${sectionOffset}%)`
              }}
            />
            
            {/* Overlay Gradient Futuriste */}
            <div 
              className="absolute inset-0 z-1"
              style={{
                background: `${buyer.gradient}, rgba(0,0,0,0.7)`
              }}
            />

            {/* Content Futuriste */}
            <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-16 w-full">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                
                {/* Text Content Futuriste */}
                <motion.div 
                  className="text-center lg:text-left"
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1, delay: 0.2 }}
                  viewport={{ once: true, amount: 0.3 }}
                >
                  {/* Icône SVG futuriste */}
                  <motion.div
                    className="w-20 h-20 bg-gradient-to-br from-[#00E834] to-green-600 rounded-2xl flex items-center justify-center border border-green-400 shadow-lg mb-6 mx-auto lg:mx-0"
                    initial={{ opacity: 0, scale: 0, rotate: -180 }}
                    whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    viewport={{ once: true }}
                  >
                    <svg className="w-10 h-10 text-black" fill="currentColor" viewBox="0 0 24 24">
                      <path d={buyer.iconPath} />
                    </svg>
                  </motion.div>

                  <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-4 text-white tracking-wider">
                    {buyer.title}
                  </h2>
                  <h3 className="text-xl md:text-2xl mb-8 text-[#00E834] font-bold tracking-wide">
                    {buyer.subtitle}
                  </h3>
                  <p className="text-lg md:text-xl mb-10 text-white/90 leading-relaxed">
                    {buyer.description}
                  </p>

                  {/* Stats Futuristes */}
                  <div className="grid grid-cols-2 gap-6 mb-10">
                    {buyer.stats.map((stat, statIndex) => (
                      <motion.div
                        key={statIndex}
                        className="text-center p-6 rounded-2xl bg-gradient-to-br from-black/80 via-gray-900/60 to-black/80 border border-[#00E834]/50 backdrop-blur-md relative overflow-hidden"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 + statIndex * 0.1 }}
                        viewport={{ once: true }}
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-[#00E834]/10 to-transparent"></div>
                        <div className="relative z-10">
                          <div className="text-3xl md:text-4xl font-black text-[#00E834] mb-2">
                            {stat.value}
                          </div>
                          <div className="text-sm md:text-base text-white font-bold tracking-wider">
                            {stat.label}
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  {/* CTA Button Futuriste */}
                  <motion.button
                    className="inline-block px-10 py-4 rounded-2xl font-black text-lg transition-all duration-300 bg-gradient-to-r from-[#00E834] to-green-600 text-black border border-green-400 shadow-lg tracking-wide"
                    whileHover={{ 
                      scale: 1.05,
                      y: -2,
                      boxShadow: '0 15px 40px rgba(0,232,52,0.4)'
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    CONNECT WITH {buyer.title}
                  </motion.button>
                </motion.div>

                {/* Features List Futuriste */}
                <motion.div
                  className="space-y-6"
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1, delay: 0.4 }}
                  viewport={{ once: true, amount: 0.3 }}
                >
                  <h4 className="text-2xl font-black text-white mb-8 tracking-wide">KEY FEATURES:</h4>
                  <div className="space-y-4">
                    {buyer.features.map((feature, featureIndex) => (
                      <motion.div
                        key={featureIndex}
                        className="flex items-center space-x-6 p-6 rounded-xl bg-gradient-to-br from-black/80 via-gray-900/60 to-black/80 border border-[#00E834]/30 backdrop-blur-md relative overflow-hidden"
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.8 + featureIndex * 0.1 }}
                        viewport={{ once: true }}
                        whileHover={{ 
                          scale: 1.02,
                          borderColor: '#00E834'
                        }}
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-[#00E834]/10 to-transparent"></div>
                        <div className="w-4 h-4 rounded-full bg-[#00E834] flex-shrink-0 shadow-lg shadow-[#00E834]/50 relative z-10">
                          <div className="w-full h-full bg-[#00E834] rounded-full animate-ping opacity-50"></div>
                        </div>
                        <span className="text-white font-bold text-lg relative z-10">{feature}</span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        );
      })}

      {/* Final CTA Section Futuriste */}
      <div className="relative h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1441986300917-64674bd600d8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            transform: `translateY(${backgroundYValue})`
          }}
        />
        <div 
          className="absolute inset-0 z-1"
          style={{
            background: 'linear-gradient(135deg, rgba(0,0,0,0.9) 0%, rgba(0,232,52,0.3) 50%, rgba(0,0,0,0.9) 100%)'
          }}
        />
        
        <motion.div 
          className="relative z-10 text-center px-6 max-w-6xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="bg-gradient-to-br from-[#00E834]/10 via-black to-gray-900 rounded-3xl border border-[#00E834]/30 p-16 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-[#00E834]/5 to-transparent rounded-3xl"></div>
            
            <div className="relative z-10">
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-black mb-8 text-white tracking-wider">
                READY TO JOIN OUR
                <br />
                <span className="text-[#00E834]">NETWORK?</span>
              </h2>
              <p className="text-xl md:text-2xl mb-12 text-white/90 max-w-4xl mx-auto leading-relaxed">
                Connect with thousands of farmers and access premium agricultural products through our 
                <span className="text-[#00E834] font-bold"> comprehensive marketplace platform</span>.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
                <motion.button
                  className="px-12 py-5 rounded-2xl font-black text-xl transition-all duration-300 bg-gradient-to-r from-[#00E834] to-green-600 text-black border border-green-400 shadow-lg tracking-wide"
                  whileHover={{ 
                    scale: 1.05,
                    y: -2,
                    boxShadow: '0 20px 50px rgba(0,232,52,0.4)'
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  REGISTER AS BUYER
                </motion.button>
                
                <motion.button
                  className="px-12 py-5 rounded-2xl font-black text-xl border-2 border-white text-white hover:bg-white hover:text-black transition-all duration-300 tracking-wide backdrop-blur-sm"
                  whileHover={{ 
                    scale: 1.05,
                    y: -2
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  LEARN MORE
                </motion.button>
              </div>

              {/* Trust Indicators Futuristes */}
              <motion.div 
                className="grid grid-cols-2 md:grid-cols-4 gap-8"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.4 }}
                viewport={{ once: true }}
              >
                {[
                  { value: '2,800+', label: 'TOTAL BUYERS' },
                  { value: '$100M+', label: 'TRADE VOLUME' },
                  { value: '50+', label: 'COUNTRIES' },
                  { value: '99%', label: 'SATISFACTION' }
                ].map((stat, index) => (
                  <motion.div 
                    key={index} 
                    className="text-center p-4 rounded-xl bg-gradient-to-br from-black/60 to-gray-900/40 border border-[#00E834]/30 backdrop-blur-sm"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="text-3xl md:text-4xl font-black text-[#00E834] mb-2">
                      {stat.value}
                    </div>
                    <div className="text-sm md:text-base text-white font-bold tracking-wider">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            {/* Lignes de scan */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#00E834] to-transparent opacity-50"></div>
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#00E834] to-transparent opacity-50"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BuyersSection;