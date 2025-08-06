/* eslint-disable @typescript-eslint/no-unused-vars */
'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

// iPhone 15 Device Frame Component Futuriste
interface DeviceFramesetProps {
  device: string;
  color: string;
  children: React.ReactNode;
}

const DeviceFrameset: React.FC<DeviceFramesetProps> = ({ device, color, children }) => {
  const getDeviceStyles = (): React.CSSProperties => {
    if (device === 'iPhone 15') {
      return {
        width: '280px',
        height: '560px',
        borderRadius: '48px',
        padding: '8px',
        background: color === 'black' ? '#000000' : '#FFFFFF',
        boxShadow: `
          0 30px 100px rgba(0, 232, 52, 0.4),
          0 15px 40px rgba(0, 0, 0, 0.6),
          inset 0 2px 4px rgba(0, 232, 52, 0.2)
        `,
        position: 'relative',
        border: '2px solid rgba(0, 232, 52, 0.3)'
      };
    }
    return {};
  };

  const getScreenStyles = (): React.CSSProperties => {
    return {
      width: '100%',
      height: '100%',
      borderRadius: '40px',
      overflow: 'hidden',
      background: '#000000',
      position: 'relative',
      border: '1px solid rgba(0, 232, 52, 0.4)'
    };
  };

  return (
    <div style={getDeviceStyles()}>
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
      
      <div style={getScreenStyles()}>
        {children}
      </div>
    </div>
  );
};

// Figma Prototype Viewer Component Futuriste
interface FigmaPrototypeViewerProps {
  figmaUrl: string;
  device?: string;
  color?: string;
  activeFeature?: number;
}

const FigmaPrototypeViewer: React.FC<FigmaPrototypeViewerProps> = ({ 
  figmaUrl,
  device = "iPhone 15",
  color = "black",
  activeFeature = 0
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  const handleIframeLoad = () => {
    setIsLoading(false);
  };

  const handleIframeError = () => {
    setError(true);
    setIsLoading(false);
  };

  return (
    <DeviceFrameset device={device} color={color}>
      <div className="relative w-full h-full">
        {/* État de chargement futuriste */}
        {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-black z-10 rounded-[40px]">
            <div className="flex flex-col items-center space-y-6">
              <div className="relative">
                <div className="w-20 h-20 border-2 border-gray-800 rounded-full"></div>
                <div className="absolute top-0 left-0 w-20 h-20 border-2 border-[#00E834] border-t-transparent rounded-full animate-spin"></div>
                <div className="absolute top-3 left-3 w-14 h-14 border border-[#00E834] border-opacity-50 rounded-full animate-ping"></div>
              </div>
              <div className="text-center">
                <p className="text-[#00E834] text-sm font-bold tracking-wider">LOADING NEURAL NET</p>
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
              <h3 className="text-lg font-bold text-white mb-3 tracking-wide">SYSTEM ERROR</h3>
              <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                Neural connection failed. Attempting reconnection...
              </p>
              <button 
                onClick={() => {
                  setError(false);
                  setIsLoading(true);
                }}
                className="px-8 py-3 bg-gradient-to-r from-[#00E834] to-green-600 text-black rounded-xl text-sm font-bold hover:from-green-600 hover:to-[#00E834] transition-all shadow-lg transform hover:scale-105"
              >
                REBOOT SYSTEM
              </button>
            </div>
          </div>
        )}

        {/* Figma Iframe */}
        <iframe
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
      </div>
    </DeviceFrameset>
  );
};

// Main Cutting Edge Features Component Futuriste
export default function CuttingEdgeFeatures() {
  const [activeFeature, setActiveFeature] = useState(0);

  const features = [
    {
      title: "AI-POWERED INSIGHTS",
      description: "Get real-time market insights and yield forecasts to set prices that actually reflect demand, not guesswork.",
      icon: (
        <div className="w-8 h-8 bg-gradient-to-br from-[#00E834] to-green-600 rounded-xl flex items-center justify-center shadow-lg border border-green-400">
          <svg className="w-5 h-5 text-black" fill="currentColor" viewBox="0 0 24 24">
            <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
          </svg>
        </div>
      ),
    },
    {
      title: "SECURE ESCROW PAYMENTS",
      description: "45% upfront, 55% on delivery - funds held safely until you approve. No scams, no delays.",
      icon: (
        <div className="w-8 h-8 bg-gradient-to-br from-[#00E834] to-green-600 rounded-xl flex items-center justify-center shadow-lg border border-green-400">
          <svg className="w-5 h-5 text-black" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z"/>
          </svg>
        </div>
      ),
    },
    {
      title: "TRANSPARENT DELIVERIES",
      description: "Track delivery live, split delivery costs fairly, and get updates from transporters in real-time.",
      icon: (
        <div className="w-8 h-8 bg-gradient-to-br from-[#00E834] to-green-600 rounded-xl flex items-center justify-center shadow-lg border border-green-400">
          <svg className="w-5 h-5 text-black" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
          </svg>
        </div>
      ),
    },
    {
      title: "IN-APP LEGAL DOCS",
      description: "Pre-built FAF templates and compliance-certified contracts.",
      icon: (
        <div className="w-8 h-8 bg-gradient-to-br from-[#00E834] to-green-600 rounded-xl flex items-center justify-center shadow-lg border border-green-400">
          <svg className="w-5 h-5 text-black" fill="currentColor" viewBox="0 0 24 24">
            <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z"/>
          </svg>
        </div>
      ),
    },
  ];
  
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % features.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [features.length]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2,
      },
    },
  } as const;

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 30,
      scale: 0.95
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

  const figmaPrototypeUrl = "https://www.figma.com/embed?embed_host=share&url=https://www.figma.com/proto/ryMIF0M5pmKd387senLzYX/Farms-to-Market-UX-UI-Design?node-id=1862-25144&starting-point-node-id=1575%3A25790";

  return (
    <div 
      className="w-full py-16 px-4"
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
            backgroundSize: '60px 60px'
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div 
          className="flex flex-col lg:flex-row items-center justify-between gap-16"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Section Features */}
          <motion.div 
            variants={itemVariants}
            className="w-full lg:w-1/2 space-y-10"
          >
            <motion.div 
              className="text-center lg:text-left"
              variants={itemVariants}
            >
              <div className="inline-flex items-center space-x-3 bg-gradient-to-r from-black via-gray-900 to-black border border-[#00E834] px-6 py-3 rounded-xl shadow-lg backdrop-blur-sm mb-6">
                <div className="w-3 h-3 bg-[#00E834] rounded-full animate-pulse shadow-lg">
                  <div className="w-full h-full bg-[#00E834] rounded-full animate-ping opacity-75"></div>
                </div>
                <span className="text-[#00E834] font-bold text-sm tracking-wider">NEXT-GEN TECHNOLOGY</span>
              </div>
              
              <h2 className="text-4xl lg:text-5xl font-black text-white mb-4 leading-tight">
                CUTTING-EDGE
                <br />
                <span className="text-[#00E834]">FEATURES</span>
              </h2>
              
              <p className="text-gray-400 text-lg leading-relaxed">
                Experience the future of agricultural technology with our 
                <span className="text-[#00E834] font-bold"> advanced platform</span>
              </p>
            </motion.div>
            
            <div className="space-y-6">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  className={`group flex items-start space-x-6 p-6 rounded-2xl cursor-pointer transition-all duration-500 border-2 ${
                    activeFeature === index 
                      ? 'bg-gradient-to-r from-[#00E834]/10 to-green-600/5 border-[#00E834] shadow-lg shadow-[#00E834]/20' 
                      : 'bg-black/50 border-gray-800 hover:border-gray-700 hover:bg-black/70'
                  }`}
                  onClick={() => setActiveFeature(index)}
                  variants={itemVariants}
                  animate={{ 
                    scale: activeFeature === index ? 1.02 : 1,
                    opacity: activeFeature === index ? 1 : 0.8
                  }}
                  transition={{ duration: 0.3 }}
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                >
                  <div className="flex-shrink-0 pt-1">
                    <motion.div
                      animate={{ 
                        rotate: activeFeature === index ? 360 : 0,
                        scale: activeFeature === index ? 1.1 : 1
                      }}
                      transition={{ duration: 0.5 }}
                    >
                      {feature.icon}
                    </motion.div>
                  </div>
                  <div className="flex-1">
                    <h3 className={`font-black text-xl mb-3 transition-colors tracking-wide ${
                      activeFeature === index ? 'text-[#00E834]' : 'text-white group-hover:text-gray-200'
                    }`}>
                      {feature.title}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors">
                      {feature.description}
                    </p>
                  </div>
                  
                  {/* Indicateur d'activité */}
                  {activeFeature === index && (
                    <motion.div
                      className="absolute right-4 top-1/2 transform -translate-y-1/2 w-1 h-12 bg-[#00E834] rounded-full shadow-lg"
                      initial={{ height: 0 }}
                      animate={{ height: 48 }}
                      transition={{ duration: 0.3 }}
                    />
                  )}
                </motion.div>
              ))}
            </div>

            {/* Indicateurs de features modernisés */}
            <div className="flex justify-center lg:justify-start space-x-4 mt-10">
              {features.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveFeature(index)}
                  className={`relative w-4 h-4 rounded-full transition-all duration-500 ${
                    activeFeature === index 
                      ? 'bg-[#00E834] scale-125 shadow-lg shadow-[#00E834]/50' 
                      : 'bg-gray-700 hover:bg-gray-600'
                  }`}
                  aria-label={`Go to feature ${index + 1}`}
                >
                  {activeFeature === index && (
                    <div className="absolute inset-0 bg-[#00E834] rounded-full animate-ping opacity-50"></div>
                  )}
                </button>
              ))}
            </div>
          </motion.div>
          
          {/* Section Device Mockup */}
          <motion.div 
            variants={itemVariants}
            className="w-full lg:w-1/2 flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Décorations d'arrière-plan futuristes */}
              <div className="absolute -inset-8 bg-gradient-to-br from-[#00E834]/20 to-green-600/10 rounded-[4rem] opacity-50 blur-3xl"></div>
              
              {/* Cercles lumineux flottants */}
              <motion.div 
                className="absolute -top-6 -right-6 w-12 h-12 bg-[#00E834] rounded-full opacity-60 shadow-lg"
                animate={{ y: [0, -15, 0], scale: [1, 1.1, 1] }}
                transition={{ duration: 3, repeat: Infinity }}
              />
              <motion.div 
                className="absolute -bottom-6 -left-6 w-8 h-8 bg-white rounded-full opacity-40 shadow-lg"
                animate={{ y: [0, 15, 0], scale: [1, 0.9, 1] }}
                transition={{ duration: 4, repeat: Infinity }}
              />
              
              {/* Lignes d'énergie */}
              <div className="absolute top-1/4 -left-4 w-20 h-px bg-gradient-to-r from-transparent via-[#00E834] to-transparent opacity-60"></div>
              <div className="absolute bottom-1/4 -right-4 w-20 h-px bg-gradient-to-r from-transparent via-white to-transparent opacity-40"></div>
              
              {/* Device Frame avec Figma Prototype */}
              <div className="relative z-10">
                <FigmaPrototypeViewer 
                  figmaUrl={figmaPrototypeUrl}
                  device="iPhone 15"
                  color="black"
                  activeFeature={activeFeature}
                />
              </div>

              {/* Particules flottantes */}
              {[...Array(4)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-2 h-2 bg-[#00E834] rounded-full opacity-60"
                  style={{
                    left: `${10 + i * 20}%`,
                    top: `${20 + (i % 2) * 60}%`,
                  }}
                  animate={{
                    y: [0, -20, 0],
                    opacity: [0.6, 1, 0.6],
                    scale: [1, 1.3, 1]
                  }}
                  transition={{
                    duration: 3 + i,
                    repeat: Infinity,
                    delay: i * 0.7,
                    ease: "easeInOut"
                  }}
                />
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Section CTA du bas */}
        <motion.div 
          className="text-center mt-20 p-12 bg-gradient-to-br from-[#00E834]/10 via-black to-gray-900 rounded-3xl border border-[#00E834]/30 shadow-2xl"
          variants={itemVariants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 1.2 }}
        >
          <div className="relative">
            {/* Effet de lueur */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#00E834]/5 to-transparent rounded-3xl"></div>
            
            <h3 className="text-3xl lg:text-4xl font-black text-white mb-6 leading-tight">
              READY TO ENTER THE
              <br />
              <span className="text-[#00E834]">FUTURE OF AGRICULTURE?</span>
            </h3>
            <p className="text-gray-400 text-lg mb-8 max-w-3xl mx-auto leading-relaxed">
              Join the neural network of farmers revolutionizing the agri-food industry through 
              <span className="text-[#00E834] font-bold"> powered technology</span> and 
              AI-driven insights.
            </p>
            <motion.button
              className="bg-gradient-to-r from-[#00E834] to-green-600 hover:from-green-600 hover:to-[#00E834] text-black font-black px-12 py-4 rounded-2xl transition-all duration-300 shadow-xl border border-green-400 text-lg tracking-wide"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              ACTIVATE  LINK
            </motion.button>
            
            {/* Lignes de scan */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#00E834] to-transparent opacity-50"></div>
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#00E834] to-transparent opacity-50"></div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}