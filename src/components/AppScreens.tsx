/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Animation 3D futuriste
const useGSAP3D = (ref: React.RefObject<HTMLElement | null>, options: any) => {
  useEffect(() => {
    if (!ref.current || !options.enabled) return;

    const element = ref.current;
    let animationId: number;

    const animate = () => {
      const time = Date.now() * 0.001;
      
      const rotateX = Math.sin(time * (options.speedX || 0.5)) * (options.rangeX || 5);
      const rotateY = Math.cos(time * (options.speedY || 0.3)) * (options.rangeY || 8);
      const rotateZ = Math.sin(time * (options.speedZ || 0.2)) * (options.rangeZ || 3);
      const translateY = Math.sin(time * (options.floatSpeed || 0.8)) * (options.floatRange || 10);
      const scale = 1 + Math.sin(time * (options.scaleSpeed || 0.6)) * (options.scaleRange || 0.02);

      element.style.transform = `
        perspective(1200px) 
        rotateX(${rotateX}deg) 
        rotateY(${rotateY}deg) 
        rotateZ(${rotateZ}deg)
        translateY(${translateY}px) 
        scale(${scale})
      `;

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, [ref, options]);
};

// iPhone 15 Device Frame Futuriste avec Figma Prototype
interface DemoPhoneProps {
  figmaUrl: string;
  className?: string;
  animationConfig?: any;
  autoNavigate?: boolean;
}

const DemoPhone: React.FC<DemoPhoneProps> = ({ 
  figmaUrl,
  className = "",
  animationConfig = {},
  autoNavigate = true
}) => {
  const phoneRef = useRef<HTMLDivElement>(null);
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  const [tapPositions, setTapPositions] = useState<Array<{x: number, y: number, id: number}>>([]);

  // Appliquer les animations 3D
  useGSAP3D(phoneRef, { 
    enabled: true,
    speedX: 0.3,
    speedY: 0.2,
    speedZ: 0.4,
    rangeX: 3,
    rangeY: 6,
    rangeZ: 2,
    floatSpeed: 0.6,
    floatRange: 8,
    scaleSpeed: 0.4,
    scaleRange: 0.015,
    ...animationConfig 
  });

  const handleIframeLoad = () => {
    setIsLoading(false);
    
    if (autoNavigate && iframeRef.current) {
      setTimeout(() => {
        simulatePrototypeInteractions();
      }, 2000);
    }
  };

  const handleIframeError = () => {
    setError(true);
    setIsLoading(false);
  };

  const simulatePrototypeInteractions = () => {
    const iframe = iframeRef.current;
    if (!iframe) return;

    const createTapEffect = (x: number, y: number) => {
      const id = Date.now() + Math.random();
      setTapPositions(prev => [...prev, { x, y, id }]);
      
      setTimeout(() => {
        setTapPositions(prev => prev.filter(tap => tap.id !== id));
      }, 1200);
    };

    const simulateClicks = () => {
      const positions = [
        { x: 50, y: 70 },
        { x: 30, y: 40 },
        { x: 70, y: 60 },
        { x: 50, y: 30 },
      ];

      positions.forEach((pos, index) => {
        setTimeout(() => {
          createTapEffect(pos.x, pos.y);
        }, index * 2500);
      });
    };

    simulateClicks();
    setInterval(simulateClicks, 10000);
  };

  return (
    <div 
      ref={phoneRef}
      className={`w-full h-full bg-gradient-to-br from-black to-gray-900 rounded-[48px] p-2 shadow-2xl border border-[#00E834]/30 ${className}`}
      style={{ 
        transformStyle: 'preserve-3d',
        boxShadow: `
          0 30px 80px rgba(0, 232, 52, 0.3),
          0 15px 40px rgba(0, 0, 0, 0.6),
          inset 0 2px 4px rgba(0, 232, 52, 0.2)
        `
      }}
    >
      {/* iPhone 15 Frame Futuriste */}
      <div className="w-full h-full bg-black rounded-[40px] overflow-hidden relative border border-[#00E834]/40">
        
        {/* Dynamic Island Futuriste */}
        <div style={{
          position: 'absolute',
          top: '12px',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '130px',
          height: '32px',
          background: 'linear-gradient(135deg, #000000 0%, #1a1a1a 100%)',
          borderRadius: '16px',
          zIndex: 1000,
          border: '1px solid rgba(0, 232, 52, 0.4)',
          boxShadow: `
            inset 0 2px 4px rgba(0, 232, 52, 0.3),
            0 0 20px rgba(0, 232, 52, 0.2)
          `
        }} />
        
        {/* Capteur avec effet lumineux */}
        <div style={{
          position: 'absolute',
          top: '20px',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '16px',
          height: '16px',
          background: 'radial-gradient(circle, #00E834 0%, #000000 70%)',
          borderRadius: '50%',
          zIndex: 1001,
          boxShadow: '0 0 20px rgba(0, 232, 52, 1)'
        }} />

        {/* Conteneur du contenu d'écran */}
        <div className="relative w-full h-full">
          {/* État de chargement futuriste */}
          {isLoading && (
            <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-black z-10 rounded-[40px]">
              <div className="flex flex-col items-center space-y-6">
                <div className="relative">
                  <div className="w-16 h-16 border-2 border-gray-800 rounded-full"></div>
                  <div className="absolute top-0 left-0 w-16 h-16 border-2 border-[#00E834] border-t-transparent rounded-full animate-spin"></div>
                  <div className="absolute top-2 left-2 w-12 h-12 border border-[#00E834] border-opacity-50 rounded-full animate-ping"></div>
                </div>
                <div className="text-center">
                  <p className="text-[#00E834] text-sm font-bold tracking-wider">LOADING INTERFACE</p>
                  <div className="flex space-x-1 mt-3">
                    <div className="w-2 h-2 bg-[#00E834] rounded-full animate-pulse"></div>
                    <div className="w-2 h-2 bg-[#00E834] rounded-full animate-pulse" style={{ animationDelay: '0.3s' }}></div>
                    <div className="w-2 h-2 bg-[#00E834] rounded-full animate-pulse" style={{ animationDelay: '0.6s' }}></div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* État d'erreur futuriste */}
          {error && (
            <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-black via-red-950 to-black z-10 rounded-[40px]">
              <div className="text-center px-8">
                <div className="text-6xl mb-4 animate-pulse">⚠️</div>
                <h3 className="text-lg font-bold text-white mb-3 tracking-wide">CONNECTION ERROR</h3>
                <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                  System link interrupted. Attempting reconnection...
                </p>
                <button 
                  onClick={() => {
                    setError(false);
                    setIsLoading(true);
                  }}
                  className="px-8 py-3 bg-gradient-to-r from-[#00E834] to-green-600 text-black rounded-xl text-sm font-bold hover:from-green-600 hover:to-[#00E834] transition-all shadow-lg transform hover:scale-105"
                >
                  RECONNECT SYSTEM
                </button>
              </div>
            </div>
          )}

          {/* Effets de tap futuristes */}
          {tapPositions.map(tap => (
            <motion.div
              key={tap.id}
              className="absolute pointer-events-none z-30"
              style={{
                left: `${tap.x}%`,
                top: `${tap.y}%`,
                transform: 'translate(-50%, -50%)'
              }}
              initial={{ scale: 0, opacity: 1 }}
              animate={{ scale: 4, opacity: 0 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
            >
              <div className="w-6 h-6 bg-[#00E834] rounded-full shadow-lg">
                <div className="w-full h-full bg-[#00E834] rounded-full animate-ping opacity-75"></div>
              </div>
            </motion.div>
          ))}

          {/* Figma Iframe */}
          <iframe
            ref={iframeRef}
            src={figmaUrl}
            onLoad={handleIframeLoad}
            onError={handleIframeError}
            className="w-full h-full border-0"
            style={{
              width: '100%',
              height: '100%',
              border: 'none',
              borderRadius: '40px'
            }}
            allowFullScreen
            title="Figma Prototype"
          />

          {/* Indicateur d'auto-interaction futuriste */}
          {autoNavigate && !isLoading && !error && (
            <motion.div
              className="absolute bottom-4 right-4 bg-gradient-to-r from-[#00E834] to-green-600 text-black text-xs px-3 py-2 rounded-lg z-30 shadow-lg font-bold"
              initial={{ opacity: 0, scale: 0.8, y: 10 }}
              animate={{ 
                opacity: [0, 1, 1, 0],
                scale: [0.8, 1, 1, 0.8],
                y: [10, 0, 0, 10]
              }}
              transition={{ 
                duration: 4, 
                repeat: Infinity, 
                repeatDelay: 6,
                times: [0, 0.2, 0.8, 1]
              }}
            >
              🤖 AUTO DEMO
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
};

export default function AppScreens() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const carouselRef = useRef<HTMLDivElement | null>(null);
  
  // URL du prototype Figma
  const figmaPrototypeUrl = "https://www.figma.com/proto/ryMIF0M5pmKd387senLzYX/Farms-to-Market-UX-UI-Design?node-id=1862-25144&starting-point-node-id=1575%3A25790";

  // Configurations de démonstrations d'app
  const demos = [
    {
      id: 1,
      title: 'FARM DASHBOARD',
      description: 'Real-time sales tracking and inventory management',
      figmaUrl: figmaPrototypeUrl,
      autoNavigate: true
    },
    {
      id: 2,
      title: 'MARKETPLACE',
      description: 'Browse and discover fresh produce from local farms',
      figmaUrl: figmaPrototypeUrl,
      autoNavigate: true
    },
    {
      id: 3,
      title: 'LIVE DELIVERY TRACKING',
      description: 'Track your orders in real-time from farm to door',
      figmaUrl: figmaPrototypeUrl,
      autoNavigate: false
    }
  ];

  // Vérifier les écrans mobiles
  useEffect(() => {
    const checkForMobile = () => {
      setIsMobile(window.innerWidth < 640);
    };

    checkForMobile();
    window.addEventListener('resize', checkForMobile);
    return () => window.removeEventListener('resize', checkForMobile);
  }, []);

  const resetTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  // Gérer l'auto-play et les resets de timer
  useEffect(() => {
    resetTimeout();
    
    if (isAutoPlaying) {
      timeoutRef.current = setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % demos.length);
      }, 6000);
    }
    
    return () => resetTimeout();
  }, [currentIndex, isAutoPlaying, demos.length]);

  // Ajouter la fonctionnalité de swipe tactile
  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    let touchStartX = 0;
    let touchEndX = 0;
    
    const handleTouchStart = (e: TouchEvent) => {
      touchStartX = e.touches[0].clientX;
    };
    
    const handleTouchMove = (e: TouchEvent) => {
      touchEndX = e.touches[0].clientX;
    };
    
    const handleTouchEnd = () => {
      const swipeDistance = touchEndX - touchStartX;
      if (Math.abs(swipeDistance) > 50) {
        if (swipeDistance > 0) {
          goToPrevious();
        } else {
          goToNext();
        }
      }
    };
    
    carousel.addEventListener('touchstart', handleTouchStart);
    carousel.addEventListener('touchmove', handleTouchMove);
    carousel.addEventListener('touchend', handleTouchEnd);
    
    return () => {
      carousel.removeEventListener('touchstart', handleTouchStart);
      carousel.removeEventListener('touchmove', handleTouchMove);
      carousel.removeEventListener('touchend', handleTouchEnd);
    };
  }, []);

  const goToPrevious = () => {
    setIsAutoPlaying(false);
    const newIndex = currentIndex === 0 ? demos.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
    setTimeout(() => setIsAutoPlaying(true), 8000);
  };

  const goToNext = () => {
    setIsAutoPlaying(false);
    const newIndex = (currentIndex + 1) % demos.length;
    setCurrentIndex(newIndex);
    setTimeout(() => setIsAutoPlaying(true), 8000);
  };

  const goToSlide = (index: number) => {
    setIsAutoPlaying(false);
    setCurrentIndex(index);
    setTimeout(() => setIsAutoPlaying(true), 8000);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 1,
        staggerChildren: 0.3,
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
    <motion.div 
      className="w-full rounded-3xl py-12 sm:py-16 px-4 sm:px-6 max-w-7xl mx-auto relative"
      style={{
        background: `
          radial-gradient(ellipse at top, rgba(0, 232, 52, 0.05) 0%, transparent 50%),
          radial-gradient(ellipse at bottom, rgba(0, 232, 52, 0.03) 0%, transparent 50%),
          linear-gradient(135deg, #000000 0%, #111111 50%, #000000 100%)
        `
      }}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Grille cyberpunk en arrière-plan */}
      <div className="absolute inset-0 opacity-5 rounded-3xl overflow-hidden">
        <div 
          className="w-full h-full"
          style={{
            backgroundImage: `
              linear-gradient(rgba(0, 232, 52, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0, 232, 52, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px'
          }}
        />
      </div>

      <motion.div 
        className="text-center mb-8 relative z-10"
        variants={itemVariants}
      >
        <div className="inline-flex items-center space-x-3 bg-gradient-to-r from-black via-gray-900 to-black border border-[#00E834] px-6 py-3 rounded-xl shadow-lg backdrop-blur-sm mb-6">
          <div className="w-3 h-3 bg-[#00E834] rounded-full animate-pulse shadow-lg">
            <div className="w-full h-full bg-[#00E834] rounded-full animate-ping opacity-75"></div>
          </div>
          <span className="text-[#00E834] font-bold text-sm tracking-wider">LIVE INTERACTIVE DEMO</span>
        </div>
        
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4 leading-tight">
          EXPERIENCE OUR
          <br />
          <span className="text-[#00E834]">APP IN ACTION</span>
        </h2>
        
        <p className="text-gray-400 text-lg mb-8 sm:mb-12 max-w-3xl mx-auto leading-relaxed">
          Interact with real-time demonstrations powered by 
          <span className="text-[#00E834] font-bold"> advanced interface technology</span>
        </p>
      </motion.div>
      
      <div className="relative" ref={carouselRef}>
        {/* Conteneur Carousel */}
        <div className="flex justify-center items-center">
          {/* Navigation flèche gauche */}
          <motion.button
            onClick={goToPrevious}
            className="absolute left-0 z-20 transform -translate-y-1/2 top-1/2 bg-gradient-to-r from-black to-gray-900 border border-[#00E834] rounded-full p-3 shadow-lg hover:shadow-xl transition-all hover:scale-110"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Previous demo"
            variants={itemVariants}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6">
              <path d="M15 18l-6-6 6-6" stroke="#00E834" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </motion.button>
          
          {/* Conteneur de téléphones */}
          <motion.div 
            className="flex justify-center items-center relative w-full overflow-hidden px-20"
            variants={itemVariants}
          >
            <div className="flex gap-12 justify-center items-center">
              {/* Téléphone principal au centre */}
              <motion.div
                className="w-72 h-[576px] relative z-10"
                key={currentIndex}
                initial={{ scale: 0.8, opacity: 0, rotateY: 90 }}
                animate={{ scale: 1, opacity: 1, rotateY: 0 }}
                exit={{ scale: 0.8, opacity: 0, rotateY: -90 }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
              >
                <DemoPhone 
                  figmaUrl={demos[currentIndex].figmaUrl}
                  autoNavigate={demos[currentIndex].autoNavigate}
                  animationConfig={{
                    speedX: 0.3,
                    speedY: 0.4,
                    rangeX: 4,
                    rangeY: 8,
                    floatRange: 12
                  }}
                />
                
                {/* Effet de lueur futuriste */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#00E834]/30 via-green-500/20 to-green-600/10 rounded-[3rem] blur-3xl opacity-50 scale-110 -z-10 animate-pulse"></div>
                
                {/* Anneau de lueur supplémentaire */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#00E834]/20 to-green-500/10 rounded-[3rem] blur-xl opacity-30 scale-125 -z-20"></div>
              </motion.div>

              {/* Téléphones latéraux (Desktop uniquement) */}
              {!isMobile && (
                <>
                  {/* Téléphone gauche */}
                  <motion.div
                    className="w-52 h-[416px] relative z-5 opacity-60"
                    initial={{ x: -50, opacity: 0 }}
                    animate={{ x: 0, opacity: 0.6 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                  >
                    <DemoPhone 
                      figmaUrl={demos[(currentIndex - 1 + demos.length) % demos.length].figmaUrl}
                      autoNavigate={false}
                      className="transform scale-75 -rotate-12"
                      animationConfig={{
                        speedX: 0.2,
                        speedY: 0.3,
                        rangeX: 2,
                        rangeY: 4,
                        floatRange: 6
                      }}
                    />
                  </motion.div>

                  {/* Téléphone droit */}
                  <motion.div
                    className="w-52 h-[416px] relative z-5 opacity-60"
                    initial={{ x: 50, opacity: 0 }}
                    animate={{ x: 0, opacity: 0.6 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                  >
                    <DemoPhone 
                      figmaUrl={demos[(currentIndex + 1) % demos.length].figmaUrl}
                      autoNavigate={false}
                      className="transform scale-75 rotate-12"
                      animationConfig={{
                        speedX: 0.25,
                        speedY: 0.35,
                        rangeX: 3,
                        rangeY: 5,
                        floatRange: 8
                      }}
                    />
                  </motion.div>
                </>
              )}
            </div>
          </motion.div>
          
          {/* Navigation flèche droite */}
          <motion.button
            onClick={goToNext}
            className="absolute right-0 z-20 transform -translate-y-1/2 top-1/2 bg-gradient-to-r from-black to-gray-900 border border-[#00E834] rounded-full p-3 shadow-lg hover:shadow-xl transition-all hover:scale-110"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Next demo"
            variants={itemVariants}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6">
              <path d="M9 18l6-6-6-6" stroke="#00E834" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </motion.button>
        </div>
        
        {/* Info démonstration */}
        <motion.div 
          className="text-center mt-10"
          variants={itemVariants}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.5 }}
              className="space-y-3"
            >
              <h3 className="text-2xl font-black text-white tracking-wide">
                {demos[currentIndex].title}
              </h3>
              <p className="text-gray-400 max-w-lg mx-auto leading-relaxed">
                {demos[currentIndex].description}
              </p>
            </motion.div>
          </AnimatePresence>
        </motion.div>
        
        {/* Points de pagination */}
        <motion.div 
          className="flex justify-center mt-8 space-x-3"
          variants={itemVariants}
        >
          {demos.map((_, idx) => (
            <motion.button
              key={idx}
              onClick={() => goToSlide(idx)}
              className={`relative w-4 h-4 rounded-full transition-all duration-500 ${
                idx === currentIndex 
                  ? "bg-[#00E834] scale-125 shadow-lg shadow-[#00E834]/50" 
                  : "bg-gray-700 hover:bg-gray-600"
              }`}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              aria-label={`Go to demo ${idx + 1}`}
            >
              {idx === currentIndex && (
                <div className="absolute inset-0 bg-[#00E834] rounded-full animate-ping opacity-50"></div>
              )}
            </motion.button>
          ))}
        </motion.div>

        {/* Indicateur de swipe mobile */}
        {isMobile && (
          <motion.div 
            className="text-center mt-6 text-sm text-gray-500"
            initial={{ opacity: 1 }}
            animate={{ opacity: [1, 0.5, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            variants={itemVariants}
          >
            <div className="flex items-center justify-center space-x-2">
              <div className="text-[#00E834]">👆</div>
              <span>Swipe to navigate demos</span>
            </div>
          </motion.div>
        )}

        {/* Points forts des fonctionnalités */}
        <motion.div 
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
        >
          {[
            {
              title: 'REAL FIGMA PROTOTYPE',
              description: 'Interactive prototype loaded directly from Figma with live navigation and authentic user experience'
            },
            {
              title: 'AUTO INTERACTIONS',
              description: 'Simulated user taps and gestures showcase app functionality with realistic interaction patterns'
            },
            {
              title: 'FUTURISTIC DESIGN',
              description: 'Authentic iPhone 15 frame with Dynamic Island, realistic shadows and cutting-edge visual effects'
            }
          ].map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-gradient-to-br from-black/80 via-gray-900/50 to-black/80 border border-[#00E834]/30 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all backdrop-blur-sm"
              whileHover={{ y: -5, scale: 1.02 }}
            >
              <div className="text-center">
                <h4 className="font-black text-white mb-3 tracking-wide text-lg">{feature.title}</h4>
                <p className="text-gray-400 text-sm leading-relaxed">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to action */}
        <motion.div 
          className="text-center mt-16"
          variants={itemVariants}
        >
          <motion.button
            className="bg-gradient-to-r from-[#00E834] to-green-600 hover:from-green-600 hover:to-[#00E834] text-black px-12 py-4 rounded-2xl font-black shadow-lg hover:shadow-xl transition-all text-lg tracking-wide border border-green-400"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            DOWNLOAD APP & START TRADING
          </motion.button>
        </motion.div>

        {/* Animation de particules flottantes */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-[#00E834] rounded-full opacity-40"
              style={{
                left: `${10 + i * 8}%`,
                top: `${15 + (i % 4) * 25}%`
              }}
              animate={{
                y: [0, -50, 0],
                x: [0, Math.sin(i) * 30, 0],
                opacity: [0.4, 0.8, 0.4],
                scale: [1, 1.5, 1]
              }}
              transition={{
                duration: 6 + i * 0.5,
                repeat: Infinity,
                delay: i * 0.4,
                ease: "easeInOut"
              }}
            />
          ))}
        </div>

        {/* Animation de gradient d'arrière-plan dynamique */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-br opacity-20 rounded-3xl -z-10"
          animate={{
            background: [
              'linear-gradient(135deg, rgba(0, 232, 52, 0.1) 0%, rgba(0, 0, 0, 0.8) 50%, rgba(0, 232, 52, 0.05) 100%)',
              'linear-gradient(135deg, rgba(0, 0, 0, 0.8) 0%, rgba(0, 232, 52, 0.05) 50%, rgba(0, 232, 52, 0.1) 100%)',
              'linear-gradient(135deg, rgba(0, 232, 52, 0.05) 0%, rgba(0, 232, 52, 0.1) 50%, rgba(0, 0, 0, 0.8) 100%)'
            ]
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        {/* Lignes d'énergie flottantes */}
        <div className="absolute top-1/4 left-10 w-32 h-px bg-gradient-to-r from-transparent via-[#00E834] to-transparent opacity-60"></div>
        <div className="absolute bottom-1/4 right-10 w-32 h-px bg-gradient-to-r from-transparent via-[#00E834] to-transparent opacity-60"></div>
        <div className="absolute top-1/2 left-5 w-px h-24 bg-gradient-to-b from-transparent via-[#00E834] to-transparent opacity-40"></div>
        <div className="absolute top-1/2 right-5 w-px h-24 bg-gradient-to-b from-transparent via-[#00E834] to-transparent opacity-40"></div>

        {/* Overlay de détails iPhone 15 */}
        <motion.div
          className="absolute bottom-6 left-6 bg-black/90 backdrop-blur-md rounded-xl px-4 py-3 text-white text-xs font-bold opacity-80 border border-[#00E834]/30"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 0.8, y: 0 }}
          transition={{ duration: 0.8, delay: 1.5 }}
        >
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-[#00E834] rounded-full animate-pulse"></div>
            <span className="tracking-wider">LIVE DEMO ACTIVE</span>
          </div>
        </motion.div>

        {/* Cercles lumineux d'ambiance */}
        <motion.div
          className="absolute top-10 right-20 w-16 h-16 bg-[#00E834] rounded-full opacity-20 blur-2xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        <motion.div
          className="absolute bottom-20 left-16 w-12 h-12 bg-white rounded-full opacity-15 blur-xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.15, 0.3, 0.15]
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />

        {/* Lignes de scan futuristes */}
        <motion.div
          className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#00E834] to-transparent opacity-30"
          animate={{
            opacity: [0.3, 0.7, 0.3]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        <motion.div
          className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#00E834] to-transparent opacity-30"
          animate={{
            opacity: [0.3, 0.7, 0.3]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1.5
          }}
        />
      </div>
    </motion.div>
  );
}