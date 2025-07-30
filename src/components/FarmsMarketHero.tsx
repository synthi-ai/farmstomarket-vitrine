/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

// Hook d'animation 3D optimisé
const useGSAP3D = (ref: React.RefObject<HTMLElement | null>, options: any) => {
  useEffect(() => {
    if (!ref.current) return;

    const element = ref.current;
    let animationId: number;

    const animate = () => {
      const time = Date.now() * 0.001;
      
      const rotateX = Math.sin(time * 0.4) * 2;
      const rotateY = Math.cos(time * 0.3) * 4;
      const translateY = Math.sin(time * 0.6) * 6;
      const scale = 1 + Math.sin(time * 0.5) * 0.015;

      element.style.transform = `
        perspective(1200px) 
        rotateX(${rotateX}deg) 
        rotateY(${rotateY}deg) 
        translateY(${translateY}px) 
        scale(${scale})
        rotateZ(-6deg)
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

// Composant Device Frame modernisé
interface DeviceFramesetProps {
  device: string;
  color: string;
  children: React.ReactNode;
  className?: string;
  tilt?: boolean;
}

const DeviceFrameset: React.FC<DeviceFramesetProps> = ({ 
  device, 
  color, 
  children, 
  className = "",
  tilt = false 
}) => {
  const deviceRef = useRef<HTMLDivElement>(null);

  useGSAP3D(deviceRef, { enabled: tilt });

  const getDeviceStyles = (): React.CSSProperties => {
    if (device === 'iPhone 15') {
      return {
        width: '100%',
        height: '100%',
        borderRadius: '48px',
        padding: '6px',
        background: color === 'black' ? '#000000' : '#FFFFFF',
        boxShadow: `
          0 25px 80px rgba(34, 197, 94, 0.3),
          0 10px 30px rgba(0, 0, 0, 0.4),
          inset 0 1px 2px rgba(255, 255, 255, 0.1)
        `,
        position: 'relative',
        transformStyle: 'preserve-3d',
        transform: tilt ? 'rotateZ(-6deg)' : 'none',
        border: '1px solid rgba(34, 197, 94, 0.2)'
      };
    }
    return {};
  };

  const getScreenStyles = (): React.CSSProperties => {
    return {
      width: '100%',
      height: '100%',
      borderRadius: '42px',
      overflow: 'hidden',
      background: '#000000',
      position: 'relative',
      transformStyle: 'preserve-3d',
      border: '2px solid rgba(34, 197, 94, 0.3)'
    };
  };

  return (
    <div ref={deviceRef} className={className} style={getDeviceStyles()}>
      {/* Dynamic Island futuriste */}
      <div style={{
        position: 'absolute',
        top: '8px',
        left: '50%',
        transform: 'translateX(-50%)',
        width: '128px',
        height: '32px',
        background: 'linear-gradient(135deg, #000000 0%, #1a1a1a 100%)',
        borderRadius: '16px',
        zIndex: 1000,
        boxShadow: `
          inset 0 2px 4px rgba(34, 197, 94, 0.2),
          0 0 20px rgba(34, 197, 94, 0.1)
        `,
        border: '1px solid rgba(34, 197, 94, 0.3)'
      }} />
      
      {/* Capteur principal avec glow effect */}
      <div style={{
        position: 'absolute',
        top: '16px',
        left: '50%',
        transform: 'translateX(-50%)',
        width: '14px',
        height: '14px',
        background: 'radial-gradient(circle, #22c55e 0%, #000000 70%)',
        borderRadius: '50%',
        zIndex: 1001,
        boxShadow: '0 0 15px rgba(34, 197, 94, 0.8)'
      }} />
      
      <div style={getScreenStyles()}>
        {children}
      </div>
    </div>
  );
};

// Composant Figma Prototype Viewer futuriste
interface FigmaPrototypeViewerProps {
  figmaUrl: string;
  device?: string;
  color?: string;
  autoNavigate?: boolean;
  tilt?: boolean;
}

const FigmaPrototypeViewer: React.FC<FigmaPrototypeViewerProps> = ({ 
  figmaUrl,
  device = "iPhone 15",
  color = "black",
  autoNavigate = true,
  tilt = false
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [tapPositions, setTapPositions] = useState<Array<{x: number, y: number, id: number}>>([]);

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
    <DeviceFrameset device={device} color={color} tilt={tilt}>
      <div className="relative w-full h-full">
        {/* État de chargement futuriste */}
        {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-black z-10 rounded-[42px]">
            <div className="flex flex-col items-center space-y-6">
              <div className="relative">
                <div className="w-16 h-16 border-2 border-gray-800 rounded-full"></div>
                <div className="absolute top-0 left-0 w-16 h-16 border-2 border-green-500 border-t-transparent rounded-full animate-spin"></div>
                <div className="absolute top-2 left-2 w-12 h-12 border border-green-500 border-opacity-50 rounded-full animate-ping"></div>
              </div>
              <div className="text-center">
                <p className="text-green-500 text-sm font-bold tracking-wider">INITIALIZING</p>
                <div className="flex space-x-1 mt-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* État d'erreur futuriste */}
        {error && (
          <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-black via-red-950 to-black z-10 rounded-[42px]">
            <div className="text-center px-6">
              <div className="text-6xl mb-4 animate-pulse">⚠️</div>
              <h3 className="text-lg font-bold text-white mb-2 tracking-wide">CONNECTION FAILED</h3>
              <p className="text-gray-400 text-xs mb-6 leading-relaxed">
                System link interrupted. Rebooting...
              </p>
              <button 
                onClick={() => {
                  setError(false);
                  setIsLoading(true);
                }}
                className="px-6 py-3 bg-gradient-to-r from-green-500 to-green-600 text-black rounded-xl text-sm font-bold hover:from-green-600 hover:to-green-500 transition-all shadow-lg transform hover:scale-105"
              >
                RETRY CONNECTION
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
            <div className="w-6 h-6 bg-green-500 rounded-full shadow-lg">
              <div className="w-full h-full bg-green-500 rounded-full animate-ping opacity-75"></div>
            </div>
          </motion.div>
        ))}

        {/* Iframe Figma */}
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
            borderRadius: '42px'
          }}
          allowFullScreen
          title="Figma Prototype"
        />

        {/* Indicateur d'auto-navigation */}
        {autoNavigate && !isLoading && !error && (
          <motion.div
            className="absolute bottom-4 right-4 bg-gradient-to-r from-green-500 to-green-600 text-black text-xs px-3 py-2 rounded-lg z-30 shadow-lg font-bold"
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
            AI DEMO
          </motion.div>
        )}
      </div>
    </DeviceFrameset>
  );
};

const FarmsMarketHero = () => {
  const phoneLeftRef = useRef<HTMLDivElement>(null);
  const phoneRightRef = useRef<HTMLDivElement>(null);
  const [showPrototype, setShowPrototype] = useState(false);

  // Animation flottante pour téléphone gauche
  useEffect(() => {
    const phoneElement = phoneLeftRef.current;
    if (phoneElement) {
      let time = 0;
      
      const floatAnimation = () => {
        if (!phoneElement) return;
        
        time += 0.016;
        
        const floatY = Math.sin(time * 0.8) * 10;
        const rotateZ = Math.sin(time * 0.3) * 2;
        const scale = 1 + Math.sin(time * 0.6) * 0.02;
        
        phoneElement.style.transform = `
          translateY(${floatY}px) 
          rotateZ(${rotateZ - 6}deg) 
          scale(${scale})
          perspective(1200px)
          rotateX(3deg)
          rotateY(-8deg)
        `;
        
        requestAnimationFrame(floatAnimation);
      };
      
      const animationId = requestAnimationFrame(floatAnimation);
      
      return () => {
        cancelAnimationFrame(animationId);
      };
    }
  }, []);

  // Animation flottante pour téléphone droit
  useEffect(() => {
    const phoneElement = phoneRightRef.current;
    if (phoneElement) {
      let time = Math.PI;
      
      const floatAnimation = () => {
        if (!phoneElement) return;
        
        time += 0.014;
        
        const floatY = Math.sin(time * 0.7) * 8;
        const rotateZ = Math.sin(time * 0.25) * 3;
        const scale = 1 + Math.sin(time * 0.5) * 0.018;
        
        phoneElement.style.transform = `
          translateY(${floatY}px) 
          rotateZ(${rotateZ + 6}deg) 
          scale(${scale})
          perspective(1200px)
          rotateX(-2deg)
          rotateY(10deg)
        `;
        
        requestAnimationFrame(floatAnimation);
      };
      
      const animationId = requestAnimationFrame(floatAnimation);
      
      return () => {
        cancelAnimationFrame(animationId);
      };
    }
  }, []);

  // Auto-affichage du prototype
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPrototype(true);
    }, 3500);

    return () => clearTimeout(timer);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 1,
        staggerChildren: 0.3,
        delayChildren: 0.2
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
        duration: 1, 
        ease: [0.23, 1, 0.32, 1]
      }
    }
  } as const;

  const phoneVariants = {
    hidden: { 
      opacity: 0, 
      y: 120,
      rotateZ: -20,
      scale: 0.7
    },
    visible: {
      opacity: 1,
      y: 0,
      rotateZ: -6,
      scale: 1,
      transition: { 
        duration: 1.4, 
        ease: [0.23, 1, 0.32, 1],
        delay: 0.4
      }
    }
  } as const;

  const phoneRightVariants = {
    hidden: { 
      opacity: 0, 
      y: 120,
      rotateZ: 20,
      scale: 0.7
    },
    visible: {
      opacity: 1,
      y: 0,
      rotateZ: 6,
      scale: 1,
      transition: { 
        duration: 1.4, 
        ease: [0.23, 1, 0.32, 1],
        delay: 0.6
      }
    }
  } as const;

  const figmaPrototypeUrl = "https://www.figma.com/proto/ryMIF0M5pmKd387senLzYX/Farms-to-Market-UX-UI-Design?node-id=1862-25144&starting-point-node-id=1575%3A25790";

  return (
    <section className="relative w-full bg-white overflow-hidden">
      {/* Background futuriste */}
      <div 
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse at top, rgba(34, 197, 94, 0.05) 0%, transparent 50%),
            radial-gradient(ellipse at bottom, rgba(34, 197, 94, 0.03) 0%, transparent 50%),
            linear-gradient(135deg, #ffffff 0%, #f8f9fa 50%, #ffffff 100%)
          `
        }}
      />

      {/* Éléments de fond flottants futuristes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 left-10 w-40 h-40 rounded-full opacity-5 blur-3xl"
          style={{
            background: 'radial-gradient(circle, #22c55e 0%, transparent 70%)'
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, 15, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{ duration: 12, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-56 h-56 rounded-full opacity-4 blur-3xl"
          style={{
            background: 'radial-gradient(circle, #22c55e 0%, transparent 70%)'
          }}
          animate={{
            y: [0, 25, 0],
            x: [0, -20, 0],
            scale: [1, 1.3, 1]
          }}
          transition={{ duration: 15, repeat: Infinity, delay: 3 }}
        />
      </div>

      {/* Grille futuriste en arrière-plan */}
      <div className="absolute inset-0 opacity-3">
        <div 
          className="w-full h-full"
          style={{
            backgroundImage: `
              linear-gradient(rgba(34, 197, 94, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(34, 197, 94, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 py-8 md:py-16">
        {/* Version Mobile */}
        <div className="block md:hidden">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-center space-y-12 relative z-10"
          >
            {/* Header Mobile Futuriste */}
            <motion.div variants={itemVariants} className="space-y-8">
              <div className="inline-flex items-center space-x-4 bg-white/90 border border-green-500 px-8 py-4 rounded-2xl shadow-lg backdrop-blur-sm">
                <div className="w-4 h-4 bg-green-500 rounded-full animate-pulse shadow-lg">
                  <div className="w-full h-full bg-green-500 rounded-full animate-ping opacity-75"></div>
                </div>
                <span className="text-green-500 font-bold text-sm tracking-wider">SYSTEM ONLINE - v2.0</span>
              </div>
              
              <h1 className="text-5xl font-black leading-tight">
                <span className="text-green-500 drop-shadow-lg">FARMS</span>
                <span className="text-black">.MARKET</span>
              </h1>
              
              <h2 className="text-3xl font-bold text-black">
                Trade Smarter,<br />
                <span className="text-green-500">Grow Together</span>
              </h2>
              
              <div className="w-32 h-1 bg-gradient-to-r from-green-500 to-green-400 mx-auto rounded-full shadow-lg">
                <div className="w-full h-full bg-green-500 rounded-full animate-pulse"></div>
              </div>
            </motion.div>

            {/* Téléphone Mobile */}
            <motion.div 
              ref={phoneLeftRef}
              variants={phoneVariants}
              className="flex justify-center relative"
            >
              <div className="w-64 h-[512px] relative">
                <div className="absolute inset-0 bg-gradient-to-br from-green-500 to-green-600 rounded-[4rem] blur-3xl opacity-20 scale-110"></div>
                
                {showPrototype ? (
                  <FigmaPrototypeViewer 
                    figmaUrl={figmaPrototypeUrl}
                    device="iPhone 15"
                    color="black"
                    autoNavigate={true}
                    tilt={true}
                  />
                ) : (
                  <div className="relative w-full h-full bg-gradient-to-br from-black to-gray-900 rounded-[4rem] p-3 shadow-2xl transform -rotate-6 border border-green-500">
                    <div className="w-full h-full bg-black rounded-[3.5rem] overflow-hidden relative border-2 border-gray-800">
                      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-36 h-8 bg-black rounded-b-3xl z-10 border border-green-500"></div>
                      <div className="p-10 pt-16 h-full bg-gradient-to-br from-black via-gray-900 to-black flex items-center justify-center">
                        <div className="text-center space-y-6">
                          <motion.div 
                            className="w-24 h-24 bg-gradient-to-br from-green-500 to-green-600 rounded-3xl mx-auto flex items-center justify-center shadow-xl border border-green-500"
                            animate={{ 
                              rotate: [0, 360],
                              scale: [1, 1.1, 1]
                            }}
                            transition={{ 
                              rotate: { duration: 4, repeat: Infinity, ease: "linear" },
                              scale: { duration: 2, repeat: Infinity, ease: "easeInOut" }
                            }}
                          >
                            <div className="w-10 h-10 bg-black rounded-xl shadow-inner"></div>
                          </motion.div>
                          <div className="space-y-3">
                            <div className="h-4 bg-green-500 rounded-full w-40 mx-auto animate-pulse shadow-lg"></div>
                            <div className="h-3 bg-green-600 rounded-full w-24 mx-auto animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </motion.div>

            {/* Description Mobile */}
            <motion.div variants={itemVariants} className="space-y-10">
              <p className="text-gray-600 text-xl leading-relaxed max-w-lg mx-auto font-medium">
                Revolutionizing agri-food supply chains through 
                <span className="text-green-500 font-bold"> AI-powered insights</span> and 
                seamless connectivity.
              </p>

              {/* Boutons Mobile Futuristes */}
              <div className="space-y-5">
                <motion.a 
                  href="#" 
                  className="flex items-center justify-center bg-gradient-to-r from-white to-gray-100 text-black px-10 py-5 rounded-2xl hover:from-gray-100 hover:to-white transition-all w-full max-w-sm mx-auto shadow-xl border border-green-500 font-bold"
                  whileHover={{ scale: 1.02, y: -3 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <svg className="w-8 h-8 mr-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83z"/>
                  </svg>
                  <div className="text-left">
                    <div className="text-xs text-gray-500 font-medium">Download on the</div>
                    <div className="font-black text-lg">App Store</div>
                  </div>
                </motion.a>
                {/*}
                <motion.a 
                  href="#" 
                  className="flex items-center justify-center bg-gradient-to-r from-green-500 to-green-600 text-white px-10 py-5 rounded-2xl hover:from-green-600 hover:to-green-500 transition-all w-full max-w-sm mx-auto shadow-xl font-bold"
                  whileHover={{ scale: 1.02, y: -3 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <svg className="w-8 h-8 mr-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                  </svg>
                  <div className="text-left">
                    <div className="text-xs text-white font-medium opacity-70">Get it on</div>
                    <div className="font-black text-lg">Google Play</div>
                  </div>
                </motion.a> */}
              </div>

              {/* Contrôle démo */}
              <div className="pt-8">
                <motion.button
                  onClick={() => setShowPrototype(!showPrototype)}
                  className="text-green-500 text-lg font-bold hover:text-green-400 transition-colors flex items-center space-x-3 mx-auto bg-white border border-green-500 px-6 py-3 rounded-xl shadow-lg"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span>{showPrototype ? '🔄 Reset Demo' : '▶️ Live Demo'}</span>
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Version Desktop avec Deux Téléphones */}
        <div className="hidden md:flex items-center justify-center min-h-screen relative z-10">
          {/* Boîte de contenu centrale futuriste */}
          <motion.div 
            className="w-2/5 bg-gradient-to-br from-green-500 via-green-600 to-green-500 rounded-3xl p-16 text-center relative z-10 shadow-2xl border border-white"
            initial={{ opacity: 0, y: 60, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.3 }}
          >
            {/* Overlay lumineux */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent rounded-3xl"></div>
            
            <div className="relative z-10">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.5 }}
             >
               <h2 className="text-4xl font-black mb-3">
                 <span className="text-black drop-shadow-lg">FARMS.</span>
                 <span className="text-white drop-shadow-md">MARKET</span>
               </h2>
             </motion.div>
             
             <motion.div
               initial={{ opacity: 0, y: 30 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 1, delay: 0.7 }}
             >
               <h1 className="text-5xl lg:text-6xl font-black text-black mb-8 leading-tight drop-shadow-md">
                 Trade Smarter,<br />
                 <span className="text-white">Grow Together</span>
               </h1>
             </motion.div>
             
             <motion.div
               initial={{ opacity: 0, y: 30 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 1, delay: 0.9 }}
             >
               <p className="text-xl text-black mb-12 leading-relaxed max-w-lg mx-auto font-bold">
                 Revolutionizing agri-food supply chains through 
                 <span className="text-white"> AI-powered insights</span> and 
                 seamless connectivity.
               </p>
             </motion.div>
             
             <motion.div 
               className="flex space-x-8 justify-center mb-10"
               initial={{ opacity: 0, y: 30 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 1, delay: 1.1 }}
             >
               <motion.a 
                 href="#" 
                 className="flex items-center bg-black text-white px-8 py-4 rounded-2xl hover:bg-gray-800 transition-all shadow-xl border border-white font-bold"
                 whileHover={{ scale: 1.05, y: -3 }}
                 whileTap={{ scale: 0.95 }}
               >
                 <svg className="w-7 h-7 mr-4" fill="currentColor" viewBox="0 0 24 24">
                   <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83z"/>
                 </svg>
                 App Store
               </motion.a>
               
               <motion.a 
                 href="#" 
                 className="flex items-center bg-white text-black border-2 border-black px-8 py-4 rounded-2xl hover:bg-gray-100 transition-all shadow-xl font-bold"
                 whileHover={{ scale: 1.05, y: -3 }}
                 whileTap={{ scale: 0.95 }}
               >
                 <svg className="w-7 h-7 mr-4" fill="currentColor" viewBox="0 0 24 24">
                   <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                 </svg>
                 Google Play
               </motion.a>
             </motion.div>

             {/* Contrôle démo Desktop */}
             <motion.div
               className="flex justify-center"
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               transition={{ duration: 1, delay: 1.3 }}
             >
               <motion.button
                 onClick={() => setShowPrototype(!showPrototype)}
                 className="text-black text-lg font-bold hover:text-white transition-colors flex items-center space-x-4 bg-white/20 backdrop-blur-sm border border-black px-6 py-3 rounded-2xl"
                 whileHover={{ scale: 1.05 }}
                 whileTap={{ scale: 0.95 }}
               >
                 <span>{showPrototype ? '🔄 Reset Demo' : '▶️ Live Demo'}</span>
               </motion.button>
             </motion.div>
           </div>
         </motion.div>

         {/* Téléphone Gauche Desktop */}
         <motion.div 
           ref={phoneLeftRef}
           className="absolute left-8 lg:left-20 z-20 w-64"
           variants={phoneVariants}
           initial="hidden"
           animate="visible"
         >
           <div className="absolute inset-0 bg-gradient-to-br from-green-500 via-green-500 to-green-600 rounded-[5rem] blur-3xl opacity-20 scale-125 transform -rotate-12"></div>
           
           <div className="w-64 h-[512px] mx-auto relative">
             {showPrototype ? (
               <FigmaPrototypeViewer 
                 figmaUrl={figmaPrototypeUrl}
                 device="iPhone 15"
                 color="black"
                 autoNavigate={true}
                 tilt={true}
               />
             ) : (
               <div className="relative w-full h-full bg-gradient-to-br from-black to-gray-900 rounded-[4rem] p-3 shadow-2xl transform -rotate-6 border border-green-500">
                 <div className="w-full h-full bg-black rounded-[3.5rem] overflow-hidden relative border-2 border-gray-800">
                   <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-36 h-8 bg-black rounded-b-3xl z-10 shadow-inner border border-green-500"></div>
                   
                   <div className="p-8 pt-12 h-full bg-gradient-to-br from-black via-gray-900 to-black flex items-center justify-center">
                     <div className="text-center space-y-6">
                       <motion.div 
                         className="w-20 h-20 bg-gradient-to-br from-green-500 via-green-600 to-green-700 rounded-3xl mx-auto flex items-center justify-center shadow-2xl border border-green-500"
                         animate={{ 
                           rotate: [0, 360],
                           scale: [1, 1.1, 1]
                         }}
                         transition={{ 
                           rotate: { duration: 5, repeat: Infinity, ease: "linear" },
                           scale: { duration: 2.5, repeat: Infinity, ease: "easeInOut" }
                         }}
                       >
                         <motion.div 
                           className="w-8 h-8 bg-black rounded-xl shadow-lg"
                           animate={{ scale: [1, 0.9, 1] }}
                           transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                         />
                       </motion.div>
                       
                       <h3 className="font-bold text-green-500 text-sm tracking-wide">FARM DASHBOARD</h3>
                       
                       <div className="space-y-3">
                         <motion.div 
                           className="h-3 bg-gradient-to-r from-green-500 to-green-400 rounded-full w-36 mx-auto shadow-lg"
                           animate={{ opacity: [0.6, 1, 0.6] }}
                           transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                         />
                         <motion.div 
                           className="h-3 bg-gradient-to-r from-green-400 to-green-600 rounded-full w-24 mx-auto shadow-lg"
                           animate={{ opacity: [0.6, 1, 0.6] }}
                           transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 0.7 }}
                         />
                       </div>
                       
                       <div className="grid grid-cols-2 gap-3 mt-6">
                         <div className="h-10 bg-green-500 rounded-lg text-xs flex items-center justify-center border border-green-400">
                           <span className="text-black font-bold">SALES</span>
                         </div>
                         <div className="h-10 bg-green-600 rounded-lg text-xs flex items-center justify-center border border-green-500">
                           <span className="text-black font-bold">ORDERS</span>
                         </div>
                       </div>
                     </div>
                   </div>
                 </div>
               </div>
             )}
           </div>
         </motion.div>

         {/* Téléphone Droit Desktop */}
         <motion.div 
           ref={phoneRightRef}
           className="absolute right-8 lg:right-20 z-20 w-64"
           variants={phoneRightVariants}
           initial="hidden"
           animate="visible"
         >
           <div className="absolute inset-0 bg-gradient-to-br from-white via-gray-300 to-gray-400 rounded-[5rem] blur-3xl opacity-15 scale-125 transform rotate-12"></div>
           
           <div className="w-64 h-[512px] mx-auto relative">
             {showPrototype ? (
               <div className="relative w-full h-full bg-gradient-to-br from-black to-gray-900 rounded-[4rem] p-3 shadow-2xl transform rotate-6 border border-white">
                 <div className="w-full h-full bg-black rounded-[3.5rem] overflow-hidden relative border-2 border-gray-700">
                   <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-36 h-8 bg-black rounded-b-3xl z-10 border border-white"></div>
                   <div className="p-8 pt-12 h-full bg-gradient-to-br from-white via-gray-100 to-gray-200 flex items-center justify-center">
                     <div className="text-center space-y-6">
                       <div className="text-3xl">🛒</div>
                       <h3 className="font-bold text-black text-sm tracking-wide">MARKET VIEW</h3>
                       <div className="text-xs text-gray-600 font-medium">Browse Products</div>
                     </div>
                   </div>
                 </div>
               </div>
             ) : (
               <div className="relative w-full h-full bg-gradient-to-br from-white to-gray-200 rounded-[4rem] p-3 shadow-2xl transform rotate-6 border border-gray-300">
                 <div className="w-full h-full bg-white rounded-[3.5rem] overflow-hidden relative border-2 border-gray-200">
                   <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-36 h-8 bg-black rounded-b-3xl z-10 shadow-inner"></div>
                   
                   <div className="p-8 pt-12 h-full bg-gradient-to-br from-white via-gray-50 to-gray-100 flex items-center justify-center">
                     <div className="text-center space-y-6">
                       <motion.div 
                         className="w-20 h-20 bg-gradient-to-br from-gray-800 via-black to-gray-900 rounded-3xl mx-auto flex items-center justify-center shadow-2xl border border-gray-600"
                         animate={{ 
                           rotate: [0, -360],
                           scale: [1, 1.1, 1]
                         }}
                         transition={{ 
                           rotate: { duration: 6, repeat: Infinity, ease: "linear" },
                           scale: { duration: 3, repeat: Infinity, ease: "easeInOut" }
                         }}
                       >
                         <motion.div 
                           className="text-3xl"
                           animate={{ scale: [1, 1.2, 1] }}
                           transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
                         >
                           🛒
                         </motion.div>
                       </motion.div>
                       
                       <h3 className="font-bold text-black text-sm tracking-wide">MARKET VIEW</h3>
                       
                       <div className="space-y-3">
                         <motion.div 
                           className="h-3 bg-gradient-to-r from-gray-300 to-gray-500 rounded-full w-36 mx-auto shadow-lg"
                           animate={{ opacity: [0.6, 1, 0.6] }}
                           transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut" }}
                         />
                         <motion.div 
                           className="h-3 bg-gradient-to-r from-gray-500 to-gray-700 rounded-full w-24 mx-auto shadow-lg"
                           animate={{ opacity: [0.6, 1, 0.6] }}
                           transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
                         />
                       </div>
                       
                       <div className="space-y-3 mt-6">
                         <div className="h-8 bg-gray-200 rounded-lg text-xs flex items-center justify-center border border-gray-300">
                           <span className="text-black font-bold">🥕 FRESH PRODUCE</span>
                         </div>
                         <div className="h-8 bg-gray-300 rounded-lg text-xs flex items-center justify-center border border-gray-400">
                           <span className="text-black font-bold">🌾 GRAINS</span>
                         </div>
                       </div>
                     </div>
                   </div>
                 </div>
               </div>
             )}
           </div>
         </motion.div>
       </div>
     </div>

     {/* Overlay de statistiques */}
     <motion.div
       className="absolute bottom-24 left-24 bg-black/90 backdrop-blur-md rounded-2xl p-6 shadow-xl hidden lg:block border border-green-500"
       initial={{ opacity: 0, y: 60 }}
       animate={{ opacity: 1, y: 0 }}
       transition={{ duration: 1, delay: 2.5 }}
     >
       <div className="text-center space-y-2">
         <div className="text-2xl font-black text-green-500">300+</div>
         <div className="text-xs text-white font-bold tracking-wider">FARMERS</div>
       </div>
     </motion.div>

     <motion.div
       className="absolute bottom-24 right-24 bg-white/90 backdrop-blur-md rounded-2xl p-6 shadow-xl hidden lg:block border border-gray-300"
       initial={{ opacity: 0, y: 60 }}
       animate={{ opacity: 1, y: 0 }}
       transition={{ duration: 1, delay: 2.7 }}
     >
       <div className="text-center space-y-2">
         <div className="text-2xl font-black text-black">15K+</div>
         <div className="text-xs text-black font-bold tracking-wider">USERS</div>
       </div>
     </motion.div>

     {/* Indicateur de défilement */}
     <motion.div
       className="absolute bottom-10 left-1/2 transform -translate-x-1/2 hidden md:block"
       animate={{ y: [0, 15, 0] }}
       transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
     >
       <div className="w-8 h-12 border-2 border-green-500 rounded-full flex justify-center shadow-lg">
         <motion.div
           className="w-2 h-3 bg-green-500 rounded-full mt-3 shadow-lg"
           animate={{ y: [0, 15, 0] }}
           transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
         />
       </div>
     </motion.div>

     {/* Particules flottantes */}
     {[...Array(6)].map((_, i) => (
       <motion.div
         key={i}
         className="absolute w-2 h-2 bg-green-500 rounded-full opacity-40"
         style={{
           left: `${20 + i * 15}%`,
           top: `${30 + (i % 3) * 20}%`,
         }}
         animate={{
           y: [0, -20, 0],
           opacity: [0.4, 0.8, 0.4],
           scale: [1, 1.2, 1]
         }}
         transition={{
           duration: 4 + i,
           repeat: Infinity,
           delay: i * 0.5,
           ease: "easeInOut"
         }}
       />
     ))}
   </section>
 );
};

export default FarmsMarketHero;