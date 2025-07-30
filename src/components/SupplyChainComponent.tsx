/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import { useEffect, useRef, useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const SupplyChainComponent = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const slides = [
    {
      title: "FARM",
      description: "Our supply chain begins at the source - connecting directly with local farmers and agricultural producers. We ensure quality control from the very beginning of the process.",
      image: "/farmes/poivrons.jpeg",
      color: "linear-gradient(135deg, #000000 0%, #00E834 50%, #000000 100%)",
      features: [
        "Direct farmer partnerships",
        "Quality assurance protocols", 
        "Sustainable farming practices",
        "Real-time crop monitoring"
      ],
      iconPath: "M12 2L13.09 8.26L22 9L17 14L18.18 22L12 19L5.82 22L7 14L2 9L10.91 8.26L12 2Z"
    },
    {
      title: "PROCESS",
      description: "Advanced processing facilities ensure optimal handling, packaging, and preparation of agricultural products while maintaining nutritional value and freshness.",
      image: "/farmers/7.jpeg",
      color: "linear-gradient(135deg, #000000 0%, #FFFFFF 50%, #000000 100%)",
      features: [
        "State-of-the-art facilities",
        "Food safety certifications",
        "Cold chain management", 
        "Automated quality control"
      ],
      iconPath: "M12,15.5A3.5,3.5 0 0,1 8.5,12A3.5,3.5 0 0,1 12,8.5A3.5,3.5 0 0,1 15.5,12A3.5,3.5 0 0,1 12,15.5M19.43,12.97C19.47,12.65 19.5,12.33 19.5,12C19.5,11.67 19.47,11.34 19.43,11L21.54,9.37C21.73,9.22 21.78,8.95 21.66,8.73L19.66,5.27C19.54,5.05 19.27,4.96 19.05,5.05L16.56,6.05C16.04,5.66 15.5,5.32 14.87,5.07L14.5,2.42C14.46,2.18 14.25,2 14,2H10C9.75,2 9.54,2.18 9.5,2.42L9.13,5.07C8.5,5.32 7.96,5.66 7.44,6.05L4.95,5.05C4.73,4.96 4.46,5.05 4.34,5.27L2.34,8.73C2.22,8.95 2.27,9.22 2.46,9.37L4.57,11C4.53,11.34 4.5,11.67 4.5,12C4.5,12.33 4.53,12.65 4.57,12.97L2.46,14.63C2.27,14.78 2.22,15.05 2.34,15.27L4.34,18.73C4.46,18.95 4.73,19.03 4.95,18.95L7.44,17.94C7.96,18.34 8.5,18.68 9.13,18.93L9.5,21.58C9.54,21.82 9.75,22 10,22H14C14.25,22 14.46,21.82 14.5,21.58L14.87,18.93C15.5,18.68 16.04,18.34 16.56,17.94L19.05,18.95C19.27,19.03 19.54,18.95 19.66,18.73L21.66,15.27C21.78,15.05 21.73,14.78 21.54,14.63L19.43,12.97Z"
    },
    {
      title: "LOGISTICS",
      description: "Efficient distribution network with real-time tracking, temperature control, and optimized routing to ensure products reach markets in perfect condition.",
      image: "/farmers/6.jpeg",
      color: "linear-gradient(135deg, #000000 0%, #00E834 50%, #FFFFFF 100%)",
      features: [
        "GPS tracking system",
        "Temperature monitoring",
        "Route optimization",
        "Inventory management"
      ],
      iconPath: "M18,8C18.56,8 19,7.56 19,7C19,6.44 18.56,6 18,6C17.44,6 17,6.44 17,7C17,7.56 17.44,8 18,8M18,10C16.34,10 15,8.66 15,7C15,5.34 16.34,4 18,4C19.66,4 21,5.34 21,7C21,8.66 19.66,10 18,10M22,22H16C14.9,22 14,21.1 14,20V16L22,8V20C22,21.1 21.1,22 22,22M22,6.8L15.4,13.4C15.1,13.7 14.7,13.7 14.4,13.4L12.6,11.6C12.3,11.3 12.3,10.9 12.6,10.6L19.2,4H4C2.9,4 2,4.9 2,6V18C2,19.1 2.9,20 4,20H12V22H4C1.8,22 0,20.2 0,18V6C0,3.8 1.8,2 4,2H20.2L22,0V6.8Z"
    },
    {
      title: "MARKET",
      description: "Final destination where consumers access fresh, high-quality agricultural products through our comprehensive marketplace platform and retail network.",
      image: "/farmers/5.jpeg",
      color: "linear-gradient(135deg, #FFFFFF 0%, #00E834 50%, #000000 100%)",
      features: [
        "Multi-channel distribution",
        "Consumer analytics",
        "Pricing optimization",
        "Customer satisfaction tracking"
      ],
      iconPath: "M19,7H22V9H19V12H17V9H14V7H17V4H19V7M12,2C13.1,2 14,2.9 14,4C14,5.1 13.1,6 12,6C10.9,6 10,5.1 10,4C10,2.9 10.9,2 12,2M21,9H20L18,17H15L13.5,7H10.5L9,17H6L4,9H3V7H6.5L7.5,4H12.5L13.5,7H21V9Z"
    }
  ];

  const overlayImages = [
    "/farmers/8.jpeg",
    "/farmers/4.jpeg",
    "/farmers/3.jpeg",
    "/farmers/2.jpeg"
  ];

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Intersection Observer pour détecter si le composant est visible
  useEffect(() => {
    if (!isMounted) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      {
        threshold: 0.5,
        rootMargin: '-10% 0px -10% 0px'
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, [isMounted]);

  const wrap = useCallback((index: number) => {
    return ((index % slides.length) + slides.length) % slides.length;
  }, [slides.length]);

  const gotoSection = useCallback((index: number, direction: number) => {
    if (animating || !isInView) return;
    
    setAnimating(true);
    const wrappedIndex = wrap(index);
    
    setTimeout(() => {
      setCurrentIndex(wrappedIndex);
      setAnimating(false);
    }, 800);
  }, [animating, isInView, wrap]);

  useEffect(() => {
    if (!isMounted || !isInView) return;

    const handleWheel = (e: WheelEvent) => {
      if (!containerRef.current) return;
      
      const rect = containerRef.current.getBoundingClientRect();
      const isWithinContainer = e.clientY >= rect.top && e.clientY <= rect.bottom;
      
      if (!isWithinContainer || animating) return;
      
      e.preventDefault();
      e.stopPropagation();
      
      if (e.deltaY > 0) {
        gotoSection(currentIndex + 1, 1);
      } else {
        gotoSection(currentIndex - 1, -1);
      }
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (animating || !isInView) return;
      
      if (e.code === "ArrowUp" || e.code === "ArrowLeft") {
        e.preventDefault();
        gotoSection(currentIndex - 1, -1);
      }
      if (e.code === "ArrowDown" || e.code === "ArrowRight" || e.code === "Space" || e.code === "Enter") {
        e.preventDefault();
        gotoSection(currentIndex + 1, 1);
      }
    };

    let touchStartY = 0;
    let touchEndY = 0;

    const handleTouchStart = (e: TouchEvent) => {
      if (!containerRef.current) return;
      
      const rect = containerRef.current.getBoundingClientRect();
      const isWithinContainer = e.touches[0].clientY >= rect.top && e.touches[0].clientY <= rect.bottom;
      
      if (!isWithinContainer) return;
      
      touchStartY = e.touches[0].clientY;
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (!containerRef.current) return;
      
      const rect = containerRef.current.getBoundingClientRect();
      const isWithinContainer = e.touches[0].clientY >= rect.top && e.touches[0].clientY <= rect.bottom;
      
      if (!isWithinContainer) return;
      
      touchEndY = e.touches[0].clientY;
    };

    const handleTouchEnd = () => {
      const swipeDistance = touchStartY - touchEndY;
      if (Math.abs(swipeDistance) > 50) {
        if (swipeDistance > 0) {
          gotoSection(currentIndex + 1, 1);
        } else {
          gotoSection(currentIndex - 1, -1);
        }
      }
    };

    document.addEventListener('wheel', handleWheel, { passive: false });
    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('touchstart', handleTouchStart, { passive: true });
    document.addEventListener('touchmove', handleTouchMove, { passive: true });
    document.addEventListener('touchend', handleTouchEnd);

    return () => {
      document.removeEventListener('wheel', handleWheel);
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('touchstart', handleTouchStart);
      document.removeEventListener('touchmove', handleTouchMove);
      document.removeEventListener('touchend', handleTouchEnd);
    };
  }, [currentIndex, animating, gotoSection, isMounted, isInView]);

  if (!isMounted) return null;

  return (
    <section 
      ref={containerRef}
      className="relative h-screen overflow-hidden"
      style={{ 
        scrollSnapAlign: 'start',
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

      {/* Supply Chain Slides Futuristes */}
      <div className="absolute inset-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 100, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: -100, scale: 0.9 }}
            transition={{ duration: 1, ease: [0.23, 1, 0.32, 1] }}
            className="absolute inset-0"
          >
            <div 
              className="absolute inset-0 flex items-center justify-center"
              style={{ background: slides[currentIndex].color }}
            >
              <div className="relative max-w-7xl w-full mx-auto h-4/5 grid grid-cols-4 md:grid-cols-12 grid-rows-12 gap-4 px-6 md:px-12 lg:px-16">
                {/* Titre Futuriste */}
                <motion.div
                  className="col-span-4 md:col-start-1 md:col-end-13 row-start-2 row-end-3 relative"
                  initial={{ opacity: 0, y: -50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 0.2 }}
                >
                  <h2 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#00E834] via-white to-[#00E834] tracking-widest text-center">
                    {slides[currentIndex].title}
                  </h2>
                  <div className="absolute inset-0 text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black text-white/10 tracking-widest text-center transform translate-x-2 translate-y-2 -z-10">
                    {slides[currentIndex].title}
                  </div>
                </motion.div>
                
                {/* Image principale avec bordure futuriste */}
                <motion.div 
                  className="col-span-4 md:col-start-1 md:col-end-7 row-start-4 row-end-10 relative"
                  initial={{ opacity: 0, scale: 0.8, rotateY: 45 }}
                  animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                  transition={{ duration: 1, delay: 0.4 }}
                >
                  <div className="relative w-full h-full border-2 border-[#00E834] rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-black/50 to-gray-900/50 backdrop-blur-sm">
                    <img 
                      className="w-full h-full object-cover" 
                      src={slides[currentIndex].image}
                      alt={slides[currentIndex].title}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                    <div className="absolute top-0 left-0 right-0 h-px bg-[#00E834] shadow-lg shadow-[#00E834]/50"></div>
                    <div className="absolute bottom-0 left-0 right-0 h-px bg-[#00E834] shadow-lg shadow-[#00E834]/50"></div>
                  </div>
                  
                  {/* Icône SVG futuriste */}
                  <motion.div
                    className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-[#00E834] to-green-600 rounded-2xl flex items-center justify-center border border-green-400 shadow-lg"
                    initial={{ opacity: 0, scale: 0, rotate: -180 }}
                    animate={{ opacity: 1, scale: 1, rotate: 0 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                  >
                    <svg className="w-8 h-8 text-black" fill="currentColor" viewBox="0 0 24 24">
                      <path d={slides[currentIndex].iconPath} />
                    </svg>
                  </motion.div>
                </motion.div>

                {/* Description et Features Futuristes */}
                <motion.div 
                  className="col-span-4 md:col-start-8 md:col-end-13 row-start-4 row-end-10 flex flex-col justify-center space-y-6"
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1, delay: 0.6 }}
                >
                  <div className="bg-gradient-to-br from-black/80 via-gray-900/60 to-black/80 border border-[#00E834]/50 rounded-2xl p-8 backdrop-blur-md relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-[#00E834]/10 to-transparent"></div>
                    
                    <div className="relative z-10">
                      <p className="text-white text-base md:text-lg leading-relaxed mb-6">
                        {slides[currentIndex].description}
                      </p>
                      
                      <div className="space-y-4">
                        <h4 className="text-[#00E834] font-black text-lg tracking-wide mb-4">KEY FEATURES</h4>
                        <ul className="space-y-3">
                          {slides[currentIndex].features.map((feature, index) => (
                            <motion.li 
                              key={index}
                              className="text-white/90 text-sm md:text-base flex items-center space-x-4"
                              initial={{ opacity: 0, x: 20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                            >
                              <div className="w-2 h-2 bg-[#00E834] rounded-full shadow-lg shadow-[#00E834]/50 flex-shrink-0"></div>
                              <span className="font-medium">{feature}</span>
                            </motion.li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    
                    {/* Lignes de scan */}
                    <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#00E834] to-transparent opacity-50"></div>
                    <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#00E834] to-transparent opacity-50"></div>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Overlay avec compteur et images futuristes */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="max-w-7xl w-full mx-auto px-6 md:px-12 lg:px-16 h-4/5 grid grid-cols-4 md:grid-cols-12 grid-rows-12 gap-4 mt-16 md:mt-0">
          {/* Compteur Futuriste */}
          <motion.div
            className="col-start-4 md:col-start-11 md:col-end-13 row-start-3 row-end-4 flex flex-col items-end"
            key={currentIndex}
            initial={{ opacity: 0, y: 20, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="bg-gradient-to-br from-[#00E834] to-green-600 text-black rounded-xl px-4 py-2 border border-green-400 shadow-lg">
              <p className="text-2xl md:text-3xl lg:text-4xl font-black tracking-wider">
                0{currentIndex + 1}
              </p>
            </div>
          </motion.div>

          {/* Images Overlay Futuristes */}
          <div className="relative overflow-hidden col-span-4 md:col-start-4 md:col-end-12 row-start-5 row-end-11 rounded-2xl border border-white/30">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                className="absolute inset-0"
                initial={{ opacity: 0, scale: 1.2, rotateY: 90 }}
                animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                exit={{ opacity: 0, scale: 0.8, rotateY: -90 }}
                transition={{ duration: 1 }}
              >
                <img
                  className="w-full h-full object-cover"
                  src={overlayImages[currentIndex]}
                  alt={`Supply chain step ${currentIndex + 1}`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20"></div>
                <div className="absolute inset-0 border-2 border-white/20 rounded-2xl"></div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Indicateur de progression futuriste */}
      <div className="absolute right-6 md:right-12 top-1/2 transform -translate-y-1/2 flex flex-col space-y-4">
        {slides.map((_, index) => (
          <motion.div
            key={index}
            className={`relative w-4 h-4 cursor-pointer transition-all duration-500 ${
              index === currentIndex ? 'scale-125' : ''
            }`}
            onClick={() => gotoSection(index, index > currentIndex ? 1 : -1)}
            whileHover={{ scale: 1.3 }}
            whileTap={{ scale: 0.9 }}
          >
            <div className={`absolute inset-0 rounded-full border-2 ${
              index === currentIndex 
                ? 'border-[#00E834] bg-[#00E834]' 
                : 'border-white bg-transparent'
            }`}>
              {index === currentIndex && (
                <div className="absolute inset-0 bg-[#00E834] rounded-full animate-ping opacity-50"></div>
              )}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Header Futuriste */}
      <div className="absolute top-6 md:top-12 left-1/2 transform -translate-x-1/2 text-center px-6">
        <motion.div
          className="bg-gradient-to-r from-black via-gray-900 to-black border border-[#00E834] px-8 py-4 rounded-2xl shadow-lg backdrop-blur-sm"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="flex items-center justify-center space-x-4 mb-2">
            <div className="w-3 h-3 bg-[#00E834] rounded-full animate-pulse shadow-lg">
              <div className="w-full h-full bg-[#00E834] rounded-full animate-ping opacity-75"></div>
            </div>
            <span className="text-[#00E834] font-black text-lg tracking-wider">SUPPLY CHAIN PROTOCOL</span>
          </div>
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-black text-white tracking-wide">
            FARMSTOMARKET ECOSYSTEM
          </h1>
          <p className="text-white/80 text-sm md:text-base mt-2 tracking-wide">
            FROM FARM TO TABLE - COMPLETE AGRICULTURAL INFRASTRUCTURE
          </p>
        </motion.div>
      </div>

      {/* Footer Futuriste */}
      <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
          <motion.a 
            href="#"
            className="text-[#00E834] hover:text-green-400 transition-colors font-bold tracking-wide mb-2 sm:mb-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            EXPLORE SUPPLY CHAIN TECHNOLOGY
          </motion.a>
          <motion.div
            className="flex items-center space-x-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            <div className="w-2 h-2 bg-[#00E834] rounded-full animate-pulse"></div>
            <p className="text-white/70 font-bold tracking-wider">
              FARMSTOMARKET PLATFORM
            </p>
          </motion.div>
        </div>
      </div>

      {/* Particules flottantes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-[#00E834] rounded-full opacity-40"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`
            }}
            animate={{
              y: [0, -50, 0],
              x: [0, Math.sin(i) * 30, 0],
              opacity: [0.4, 0.8, 0.4],
              scale: [1, 1.3, 1]
            }}
            transition={{
              duration: 8 + i * 0.5,
              repeat: Infinity,
              delay: i * 0.4,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      {/* Lignes d'énergie */}
      <div className="absolute top-1/4 left-10 w-32 h-px bg-gradient-to-r from-transparent via-[#00E834] to-transparent opacity-60"></div>
      <div className="absolute bottom-1/4 right-10 w-32 h-px bg-gradient-to-r from-transparent via-[#00E834] to-transparent opacity-60"></div>
      <div className="absolute top-1/2 left-5 w-px h-24 bg-gradient-to-b from-transparent via-[#00E834] to-transparent opacity-40"></div>
      <div className="absolute top-1/2 right-5 w-px h-24 bg-gradient-to-b from-transparent via-[#00E834] to-transparent opacity-40"></div>
    </section>
  );
};

export default SupplyChainComponent;