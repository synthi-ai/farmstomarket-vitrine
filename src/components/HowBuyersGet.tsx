'use client';

import { useEffect, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';

export default function BuyerSatisfactionSteps() {
  const controls = useAnimation();
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.2 });
  
  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [isInView, controls]);
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  } as const;
  
  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.8,
      rotateX: 45
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      rotateX: 0,
      transition: { 
        duration: 0.8, 
        ease: [0.23, 1, 0.32, 1]
      }
    },
  } as const;
  
  const titleVariants = {
    hidden: { 
      opacity: 0, 
      y: -30,
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
    },
  } as const;
  
  const lineVariants = {
    hidden: { 
      scaleX: 0,
      opacity: 0
    },
    visible: { 
      scaleX: 1,
      opacity: 1,
      transition: { 
        duration: 2, 
        ease: "easeInOut", 
        delay: 1.2
      }
    },
  } as const;
  
  const steps = [
    {
      title: "DISCOVER VERIFIED FARMS",
      description: "Find what you need in a wide range of quality goods easily with filters.",
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
          <circle cx="12" cy="10" r="3" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      step: "01",
      delay: 0
    },
    {
      title: "TRANSPARENT NEGOTIATION",
      description: "Chat directly with producers, order your products - no hidden fees.",
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2v10z" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M8 10h.01M12 10h.01M16 10h.01" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      step: "02",
      delay: 0.2
    },
    {
      title: "PAY SECURELY",
      description: "Funds held in agricultural bank until delivery and split delivery cost fairly.",
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="2" y="5" width="20" height="14" rx="2" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M16 14h.01M12 14h.01M8 14h.01" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M2 10h20" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      step: "03",
      delay: 0.4
    },
    {
      title: "INSPECT & APPROVE",
      description: "24-hour inspection window. Request refunds for substandard goods.",
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M9 3H5a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-4" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M9 15L20 4h1v5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      step: "04",
      delay: 0.6
    },
  ];

  return (
    <div 
      className="relative w-full px-4 py-20 overflow-hidden"
      style={{
        background: `
          radial-gradient(ellipse at top left, rgba(0, 232, 52, 0.08) 0%, transparent 40%),
          radial-gradient(ellipse at bottom right, rgba(0, 232, 52, 0.06) 0%, transparent 40%),
          radial-gradient(circle at center, rgba(0, 232, 52, 0.03) 0%, transparent 70%),
          #FFFFFF
        `
      }}
      ref={containerRef}
    >
      {/* Grille cyberpunk subtile sur fond blanc */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div 
          className="w-full h-full"
          style={{
            backgroundImage: `
              linear-gradient(rgba(0, 232, 52, 0.4) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0, 232, 52, 0.4) 1px, transparent 1px)
            `,
            backgroundSize: '80px 80px'
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Badge de statut BUYER JOURNEY */}
        <motion.div 
          className="flex justify-center mb-8"
          initial="hidden"
          animate={controls}
          variants={titleVariants}
        >
          <div className="inline-flex items-center space-x-3 bg-gradient-to-r from-white via-gray-50 to-white border-2 border-[#00E834] px-6 py-3 rounded-2xl shadow-lg backdrop-blur-sm">
            <div className="w-3 h-3 bg-[#00E834] rounded-full animate-pulse shadow-lg">
              <div className="w-full h-full bg-[#00E834] rounded-full animate-ping opacity-75"></div>
            </div>
            <span className="text-[#00E834] font-black text-sm tracking-wider">BUYER JOURNEY</span>
          </div>
        </motion.div>

        {/* Titre principal futuriste */}
        <motion.div
          initial="hidden"
          animate={controls}
          variants={titleVariants}
          className="text-center mb-20"
        >
          <motion.h2 
            className="text-4xl md:text-5xl lg:text-6xl font-black mb-4 leading-tight tracking-wide"
            style={{ 
              color: 'transparent',
              backgroundImage: 'linear-gradient(45deg, #00E834, #000000, #00E834)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              textShadow: '0 0 30px rgba(0, 232, 52, 0.3)'
            }}
          >
            HOW BUYERS GET SATISFIED
          </motion.h2>
          <motion.h3 
            className="text-2xl md:text-3xl font-black text-black tracking-wider"
          >
            IN <span className="text-[#00E834]">4 STEPS</span>
          </motion.h3>
        </motion.div>
        
        {/* Steps Container */}
        <motion.div 
          initial="hidden"
          animate={controls}
          variants={containerVariants}
          className="relative"
        >
          {/* Ligne de connexion futuriste - Desktop */}
          <div className="absolute top-24 left-1/2 transform -translate-x-1/2 w-full max-w-4xl hidden lg:block">
            <div className="relative h-2">
              {/* Ligne de fond */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gray-300 to-transparent rounded-full"></div>
              {/* Ligne animée */}
              <motion.div 
                variants={lineVariants}
                className="absolute inset-0 bg-gradient-to-r from-[#00E834] via-black to-[#00E834] rounded-full origin-left"
                style={{ transformOrigin: "left center" }}
              />
              {/* Effet de glow */}
              <motion.div 
                variants={lineVariants}
                className="absolute inset-0 bg-gradient-to-r from-[#00E834] via-black to-[#00E834] rounded-full blur-sm opacity-40 origin-left"
                style={{ transformOrigin: "left center" }}
              />
            </div>
          </div>

          {/* Steps Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="flex flex-col items-center relative group"
                whileHover={{ 
                  y: -10,
                  scale: 1.05,
                  transition: { duration: 0.3 } 
                }}
                style={{
                  animationDelay: `${step.delay}s`
                }}
              >
                {/* Card Container */}
                <div className="relative w-full max-w-sm">
                  {/* Step Number Badge */}
                  <motion.div 
                    className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-br from-[#00E834] to-green-600 rounded-full flex items-center justify-center border-2 border-white shadow-lg z-20"
                    whileHover={{ 
                      rotate: 360,
                      scale: 1.2
                    }}
                    transition={{ duration: 0.8 }}
                  >
                    <span className="text-white font-black text-sm">{step.step}</span>
                  </motion.div>

                  {/* Main Card */}
                  <div className="bg-gradient-to-br from-white via-gray-50 to-white border-2 border-[#00E834]/20 rounded-2xl p-8 backdrop-blur-md relative overflow-hidden group-hover:border-[#00E834] transition-all duration-500 shadow-lg">
                    {/* Effet de glow au hover */}
                    <div className="absolute inset-0 bg-gradient-to-r from-[#00E834]/5 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                    
                    {/* Icon Container */}
                    <motion.div 
                      className="w-20 h-20 bg-gradient-to-br from-[#00E834] to-green-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg border-2 border-white relative z-10 mx-auto"
                      whileHover={{ 
                        rotate: [0, -10, 10, 0],
                        scale: 1.1
                      }}
                      transition={{ duration: 0.6 }}
                    >
                      <div className="text-white">
                        {step.icon}
                      </div>
                      {/* Effet de glow sur l'icône */}
                      <div className="absolute inset-0 bg-[#00E834] rounded-2xl blur-md opacity-30 -z-10"></div>
                    </motion.div>

                    {/* Content */}
                    <div className="text-center relative z-10">
                      <h4 className="text-lg font-black mb-4 text-black tracking-wide">
                        {step.title}
                      </h4>
                      <p className="text-sm text-gray-700 leading-relaxed font-medium">
                        {step.description}
                      </p>
                    </div>

                    {/* Lignes de scan subtiles */}
                    <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#00E834]/30 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#00E834]/30 to-transparent"></div>
                    
                    {/* Effet de particules au hover */}
                    <motion.div 
                      className="absolute top-4 right-4 w-2 h-2 bg-[#00E834] rounded-full opacity-0 group-hover:opacity-60"
                      animate={{
                        scale: [1, 1.5, 1],
                        opacity: [0.3, 0.6, 0.3]
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: index * 0.5
                      }}
                    />

                    {/* Coins futuristes */}
                    <div className="absolute top-2 left-2 w-3 h-3 border-t-2 border-l-2 border-[#00E834]/20 group-hover:border-[#00E834] transition-all duration-300"></div>
                    <div className="absolute top-2 right-2 w-3 h-3 border-t-2 border-r-2 border-[#00E834]/20 group-hover:border-[#00E834] transition-all duration-300"></div>
                    <div className="absolute bottom-2 left-2 w-3 h-3 border-b-2 border-l-2 border-[#00E834]/20 group-hover:border-[#00E834] transition-all duration-300"></div>
                    <div className="absolute bottom-2 right-2 w-3 h-3 border-b-2 border-r-2 border-[#00E834]/20 group-hover:border-[#00E834] transition-all duration-300"></div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Call to Action futuriste */}
          <motion.div 
            className="mt-20 text-center"
            variants={itemVariants}
          >
            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <a 
                href="#" 
                className="inline-flex items-center bg-gradient-to-r from-[#00E834] to-green-600 hover:from-green-600 hover:to-[#00E834] text-white px-12 py-5 rounded-2xl font-black transition-all text-lg tracking-wide border-2 border-white shadow-lg hover:shadow-[#00E834]/30"
              >
                START BUYING TODAY
                <motion.svg 
                  className="ml-3" 
                  width="20" 
                  height="20" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  xmlns="http://www.w3.org/2000/svg"
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <path d="M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 5L19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </motion.svg>
              </a>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Particules flottantes plus subtiles pour fond blanc */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-[#00E834] rounded-full opacity-20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`
            }}
            animate={{
              y: [0, -80, 0],
              x: [0, Math.sin(i) * 40, 0],
              opacity: [0.2, 0.5, 0.2],
              scale: [1, 1.3, 1]
            }}
            transition={{
              duration: 12 + i * 0.5,
              repeat: Infinity,
              delay: i * 0.8,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      {/* Lignes d'énergie décoratives subtiles */}
      <div className="absolute top-1/4 left-8 w-24 h-px bg-gradient-to-r from-transparent via-[#00E834]/40 to-transparent"></div>
      <div className="absolute bottom-1/4 right-8 w-24 h-px bg-gradient-to-r from-transparent via-[#00E834]/40 to-transparent"></div>
      <div className="absolute top-1/2 left-4 w-px h-16 bg-gradient-to-b from-transparent via-[#00E834]/30 to-transparent"></div>
      <div className="absolute top-1/2 right-4 w-px h-16 bg-gradient-to-b from-transparent via-[#00E834]/30 to-transparent"></div>
    </div>
  );
}