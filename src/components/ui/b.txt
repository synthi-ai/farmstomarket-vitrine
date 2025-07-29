'use client';

import { useEffect, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';

export default function TransporterProcess() {
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
      title: "REGISTER FLEET",
      description: "Join with verified vehicle documents and insurance coverage.",
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M7 17L17 7" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M7 7h10v10" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
          <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      step: "01",
      delay: 0
    },
    {
      title: "ACCEPT DELIVERY JOBS",
      description: "Browse available shipments, set competitive rates, and win contracts.",
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="1" y="3" width="15" height="13" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M16 8h4l-2-3h-2v3zM16 16h4v-5h-4v5z" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
          <circle cx="5.5" cy="18.5" r="2.5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
          <circle cx="18.5" cy="18.5" r="2.5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      step: "02",
      delay: 0.2
    },
    {
      title: "TRACK & DELIVER",
      description: "Real-time GPS tracking ensures transparent delivery with proof of completion.",
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
          <circle cx="12" cy="10" r="3" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M8 21l4-7 4 7" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      step: "03",
      delay: 0.4
    },
    {
      title: "GET PAID INSTANTLY",
      description: "Automatic payment upon successful delivery confirmation. No delays, no hassles.",
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M9.09 9a3 3 0 015.83 1c0 2-3 3-3 3" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M12 17h.01" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
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
          radial-gradient(ellipse at top, rgba(0, 232, 52, 0.05) 0%, transparent 50%),
          radial-gradient(ellipse at bottom, rgba(0, 232, 52, 0.03) 0%, transparent 50%),
          linear-gradient(135deg, #000000 0%, #111111 50%, #000000 100%)
        `
      }}
      ref={containerRef}
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
            backgroundSize: '80px 80px'
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Badge de statut TRANSPORT NETWORK */}
        <motion.div 
          className="flex justify-center mb-8"
          initial="hidden"
          animate={controls}
          variants={titleVariants}
        >
          <div className="inline-flex items-center space-x-3 bg-gradient-to-r from-black via-gray-900 to-black border border-[#00E834] px-6 py-3 rounded-2xl shadow-lg backdrop-blur-sm">
            <div className="w-3 h-3 bg-[#00E834] rounded-full animate-pulse shadow-lg">
              <div className="w-full h-full bg-[#00E834] rounded-full animate-ping opacity-75"></div>
            </div>
            <span className="text-[#00E834] font-black text-sm tracking-wider">TRANSPORT NETWORK</span>
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
              backgroundImage: 'linear-gradient(45deg, #00E834, #FFFFFF, #00E834)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              textShadow: '0 0 30px rgba(0, 232, 52, 0.5)'
            }}
          >
            HOW TRANSPORTERS
          </motion.h2>
          <motion.h3 
            className="text-2xl md:text-3xl font-black text-white tracking-wider"
          >
            <span className="text-[#00E834]">MAXIMIZE EARNINGS</span> IN 4 STEPS
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
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gray-800 to-transparent rounded-full"></div>
              {/* Ligne animée */}
              <motion.div 
                variants={lineVariants}
                className="absolute inset-0 bg-gradient-to-r from-[#00E834] via-white to-[#00E834] rounded-full origin-left"
                style={{ transformOrigin: "left center" }}
              />
              {/* Effet de glow */}
              <motion.div 
                variants={lineVariants}
                className="absolute inset-0 bg-gradient-to-r from-[#00E834] via-white to-[#00E834] rounded-full blur-sm opacity-60 origin-left"
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
                    <span className="text-black font-black text-sm">{step.step}</span>
                  </motion.div>

                  {/* Main Card */}
                  <div className="bg-gradient-to-br from-black/90 via-gray-900/70 to-black/90 border border-[#00E834]/30 rounded-2xl p-8 backdrop-blur-md relative overflow-hidden group-hover:border-[#00E834] transition-all duration-500">
                    {/* Effet de glow au hover */}
                    <div className="absolute inset-0 bg-gradient-to-r from-[#00E834]/10 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                    
                    {/* Icon Container */}
                    <motion.div 
                      className="w-20 h-20 bg-gradient-to-br from-[#00E834] to-green-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg border border-green-400 relative z-10 mx-auto"
                      whileHover={{ 
                        rotate: [0, -10, 10, 0],
                        scale: 1.1
                      }}
                      transition={{ duration: 0.6 }}
                    >
                      <div className="text-black">
                        {step.icon}
                      </div>
                      {/* Effet de glow sur l'icône */}
                      <div className="absolute inset-0 bg-[#00E834] rounded-2xl blur-md opacity-50 -z-10"></div>
                    </motion.div>

                    {/* Content */}
                    <div className="text-center relative z-10">
                      <h4 className="text-lg font-black mb-4 text-white tracking-wide">
                        {step.title}
                      </h4>
                      <p className="text-sm text-gray-400 leading-relaxed">
                        {step.description}
                      </p>
                    </div>

                    {/* Lignes de scan */}
                    <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#00E834] to-transparent opacity-50"></div>
                    <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#00E834] to-transparent opacity-50"></div>
                    
                    {/* Effet de particules au hover */}
                    <motion.div 
                      className="absolute top-4 right-4 w-2 h-2 bg-[#00E834] rounded-full opacity-0 group-hover:opacity-100"
                      animate={{
                        scale: [1, 1.5, 1],
                        opacity: [0.5, 1, 0.5]
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: index * 0.5
                      }}
                    />

                    {/* Effet de mouvement sur les cartes transport */}
                    <motion.div 
                      className="absolute bottom-4 left-4 w-3 h-1 bg-[#00E834] rounded-full opacity-0 group-hover:opacity-60"
                      animate={{
                        x: [0, 20, 0],
                        opacity: [0.3, 0.6, 0.3]
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        delay: index * 0.7
                      }}
                    />
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
                className="inline-flex items-center bg-gradient-to-r from-[#00E834] to-green-600 hover:from-green-600 hover:to-[#00E834] text-black px-12 py-5 rounded-2xl font-black transition-all text-lg tracking-wide border border-green-400 shadow-lg hover:shadow-[#00E834]/30"
              >
                JOIN TRANSPORT NETWORK
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

          {/* Statistiques de transport */}
          <motion.div 
            className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
            variants={containerVariants}
          >
            {[
              { value: '500+', label: 'ACTIVE DRIVERS' },
              { value: '99.5%', label: 'ON-TIME DELIVERY' },
              { value: '24H', label: 'PAYMENT CYCLE' },
              { value: '50+', label: 'CITIES COVERED' }
            ].map((stat, index) => (
              <motion.div 
                key={index} 
                className="text-center p-4 rounded-xl bg-gradient-to-br from-black/60 to-gray-900/40 border border-[#00E834]/30 backdrop-blur-sm"
                variants={itemVariants}
                whileHover={{ 
                  scale: 1.05, 
                  borderColor: '#00E834' 
                }}
              >
                <div className="text-2xl md:text-3xl font-black text-[#00E834] mb-1">
                  {stat.value}
                </div>
                <div className="text-xs md:text-sm text-white font-bold tracking-wider">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Particules de mouvement pour le transport */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-1 bg-[#00E834] rounded-full opacity-30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`
            }}
            animate={{
              x: [0, 100, 0],
              y: [0, -30, 0],
              opacity: [0.3, 0.7, 0.3],
              scale: [1, 1.2, 1]
            }}
            transition={{
              duration: 6 + i * 0.5,
              repeat: Infinity,
              delay: i * 0.8,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      {/* Lignes d'énergie représentant les routes */}
      <div className="absolute top-1/4 left-10 w-40 h-px bg-gradient-to-r from-transparent via-[#00E834] to-transparent opacity-60"></div>
      <div className="absolute bottom-1/4 right-10 w-40 h-px bg-gradient-to-r from-transparent via-[#00E834] to-transparent opacity-60"></div>
      <div className="absolute top-1/3 left-5 w-px h-32 bg-gradient-to-b from-transparent via-[#00E834] to-transparent opacity-40"></div>
      <div className="absolute bottom-1/3 right-5 w-px h-32 bg-gradient-to-b from-transparent via-[#00E834] to-transparent opacity-40"></div>
      
      {/* Lignes diagonales pour effet de vitesse */}
      <div className="absolute top-1/2 left-16 w-20 h-px bg-gradient-to-r from-transparent via-[#00E834] to-transparent opacity-40 transform rotate-12"></div>
      <div className="absolute top-1/2 right-16 w-20 h-px bg-gradient-to-r from-transparent via-[#00E834] to-transparent opacity-40 transform -rotate-12"></div>
    </div>
  );
}