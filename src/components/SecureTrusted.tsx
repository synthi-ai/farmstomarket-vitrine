'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const SecureTrusted = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const containerVariants = {
    hidden: { 
      opacity: 0 
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.4,
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
    },
  } as const;

  const featureVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      rotateX: 45
    },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: { 
        duration: 1,
        ease: [0.23, 1, 0.32, 1]
      }
    },
  } as const;

  return (
    <div 
      className="relative w-full py-20 px-4 overflow-hidden"
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
            backgroundSize: '80px 80px'
          }}
        />
      </div>

      <motion.div
        ref={ref}
        className="max-w-6xl mx-auto px-4 text-center relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        {/* Badge de statut */}
        <motion.div 
          className="inline-flex items-center space-x-3 bg-gradient-to-r from-black via-gray-900 to-black border border-[#00E834] px-6 py-3 rounded-2xl shadow-lg backdrop-blur-sm mb-8"
          variants={itemVariants}
        >
          <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse shadow-lg">
            <div className="w-full h-full bg-green-500 rounded-full animate-ping opacity-75"></div>
          </div>
          <span className="text-green-500 font-black text-sm tracking-wider">ADVANCED SECURITY PROTOCOL</span>
        </motion.div>

        {/* Titre principal futuriste */}
        <motion.h2 
          className="text-4xl md:text-5xl lg:text-6xl font-black mb-4 leading-tight tracking-wide"
          variants={itemVariants}
          style={{ 
            color: 'transparent',
            backgroundImage: 'linear-gradient(45deg, #00E834, #FFFFFF, #00E834)',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            textShadow: '0 0 30px rgba(0, 232, 52, 0.5)'
          }}
        >
          SECURE &amp; TRUSTED
        </motion.h2>
        
        {/* Sous-titre */}
        <motion.p 
          className="text-xl text-gray-400 mb-16 font-bold tracking-wide" 
          variants={itemVariants}
        >
          SOLVE YOUR BIGGEST 
          <span className="text-green-500"> CHALLENGES</span>
        </motion.p>
        
        {/* Les 3 fonctionnalités futuristes */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-20">
          {/* Feature 1 */}
          <motion.div 
            className="flex flex-col items-center bg-gradient-to-br from-black/80 via-gray-900/60 to-black/80 border border-[#00E834]/30 rounded-2xl p-8 backdrop-blur-md relative overflow-hidden group"
            variants={featureVariants}
            whileHover={{
              scale: 1.05,
              borderColor: '#00E834',
              boxShadow: '0 20px 40px rgba(0, 232, 52, 0.2)',
              transition: { duration: 0.3 }
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 to-transparent group-hover:from-green-500/20 transition-all duration-500"></div>
            
            <motion.div 
              className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg border border-green-400 relative z-10"
              whileHover={{ rotate: 360, scale: 1.1 }}
              transition={{ duration: 0.8 }}
            >
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7 20L12 14.5L17 20" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M7 4L12 9.5L17 4" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </motion.div>
            <h3 className="font-black mb-4 text-xl text-white tracking-wide relative z-10">AI-POWERED PRICING</h3>
            <p className="text-base text-gray-400 leading-relaxed relative z-10">
              Get real-time market insights to set prices that actually reflect demand, not guesswork.
            </p>
            
            {/* Ligne de scan */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-green-500 to-transparent opacity-50"></div>
          </motion.div>
          
          {/* Feature 2 */}
          <motion.div 
            className="flex flex-col items-center bg-gradient-to-br from-black/80 via-gray-900/60 to-black/80 border border-[#00E834]/30 rounded-2xl p-8 backdrop-blur-md relative overflow-hidden group"
            variants={featureVariants}
            whileHover={{
              scale: 1.05,
              borderColor: '#00E834',
              boxShadow: '0 20px 40px rgba(0, 232, 52, 0.2)',
              transition: { duration: 0.3 }
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 to-transparent group-hover:from-green-500/20 transition-all duration-500"></div>
            
            <motion.div 
              className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg border border-green-400 relative z-10"
              whileHover={{ rotate: 360, scale: 1.1 }}
              transition={{ duration: 0.8 }}
            >
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 16L12 12" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 8H12.01" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </motion.div>
            <h3 className="font-black mb-4 text-xl text-white tracking-wide relative z-10">SECURE ESCROW PAYMENTS</h3>
            <p className="text-base text-gray-400 leading-relaxed relative z-10">
              Buyers pay 40% upfront, sellers receive funds only after delivery confirmation. No scams, no delays.
            </p>
            
            {/* Ligne de scan */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-green-500 to-transparent opacity-50"></div>
          </motion.div>
          
          {/* Feature 3 */}
          <motion.div 
            className="flex flex-col items-center bg-gradient-to-br from-black/80 via-gray-900/60 to-black/80 border border-[#00E834]/30 rounded-2xl p-8 backdrop-blur-md relative overflow-hidden group"
            variants={featureVariants}
            whileHover={{
              scale: 1.05,
              borderColor: '#00E834',
              boxShadow: '0 20px 40px rgba(0, 232, 52, 0.2)',
              transition: { duration: 0.3 }
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 to-transparent group-hover:from-green-500/20 transition-all duration-500"></div>
            
            <motion.div 
              className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg border border-green-400 relative z-10"
              whileHover={{ rotate: 360, scale: 1.1 }}
              transition={{ duration: 0.8 }}
            >
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18 8C19.6569 8 21 6.65685 21 5C21 3.34315 19.6569 2 18 2C16.3431 2 15 3.34315 15 5C15 6.65685 16.3431 8 18 8Z" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M6 15C7.65685 15 9 13.6569 9 12C9 10.3431 7.65685 9 6 9C4.34315 9 3 10.3431 3 12C3 13.6569 4.34315 15 6 15Z" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M18 22C19.6569 22 21 20.6569 21 19C21 17.3431 19.6569 16 18 16C16.3431 16 15 17.3431 15 19C15 20.6569 16.3431 22 18 22Z" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M8.59 13.51L15.42 17.49" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M15.41 6.51L8.59 10.49" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </motion.div>
            <h3 className="font-black mb-4 text-xl text-white tracking-wide relative z-10">TRANSPARENT DELIVERIES</h3>
            <p className="text-base text-gray-400 leading-relaxed relative z-10">
              Track shipments live, split delivery costs fairly, and hold transporters accountable.
            </p>
            
            {/* Ligne de scan */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-green-500 to-transparent opacity-50"></div>
          </motion.div>
        </div>
        
        {/* Texte du milieu avec design futuriste */}
        <motion.div 
          className="mb-12 max-w-4xl mx-auto bg-gradient-to-br from-black/60 via-gray-900/40 to-black/60 border border-[#00E834]/30 rounded-2xl p-8 backdrop-blur-sm relative overflow-hidden"
          variants={itemVariants}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-green-500/5 to-transparent"></div>
          <p className="text-center mb-4 text-lg text-white leading-relaxed relative z-10">
            We&apos;re not just an app - we&apos;re a movement. By cutting out exploitative middlemen, we ensure 
            producers earn <span className="font-black text-green-500">100% of their worth</span>, while avoiding post-harvest losses, and buyers get <span className="font-black text-green-500">quality goods 
            on time</span>. Join thousands already thriving in a marketplace built on fairness, tech, and trust.
          </p>
          
          {/* Lignes de scan */}
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-green-500 to-transparent opacity-50"></div>
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-green-500 to-transparent opacity-50"></div>
        </motion.div>
        
        {/* Bouton futuriste */}
        <motion.div
          variants={itemVariants}
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.95 }}
        >
          <a 
            href="#" 
            className="inline-flex items-center bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-500 text-white px-10 py-4 rounded-2xl font-black transition-all text-lg tracking-wide border border-green-400 shadow-lg hover:shadow-green-500/30"
          >
            JOIN OUR COMMUNITY
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

        {/* Statistiques futuristes */}
        <motion.div 
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
          variants={containerVariants}
        >
          {[
            { value: '99.8%', label: 'SECURITY RATE' },
            { value: '24/7', label: 'MONITORING' },
            { value: '100K+', label: 'TRANSACTIONS' },
            { value: '0%', label: 'FRAUD CASES' }
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
              <div className="text-2xl md:text-3xl font-black text-green-500 mb-1">
                {stat.value}
              </div>
              <div className="text-xs md:text-sm text-white font-bold tracking-wider">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Particules flottantes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-green-500 rounded-full opacity-30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`
            }}
            animate={{
              y: [0, -50, 0],
              x: [0, Math.sin(i) * 30, 0],
              opacity: [0.3, 0.7, 0.3],
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
      <div className="absolute top-1/4 left-10 w-32 h-px bg-gradient-to-r from-transparent via-green-500 to-transparent opacity-60"></div>
      <div className="absolute bottom-1/4 right-10 w-32 h-px bg-gradient-to-r from-transparent via-green-500 to-transparent opacity-60"></div>
      <div className="absolute top-1/2 left-5 w-px h-24 bg-gradient-to-b from-transparent via-green-500 to-transparent opacity-40"></div>
      <div className="absolute top-1/2 right-5 w-px h-24 bg-gradient-to-b from-transparent via-green-500 to-transparent opacity-40"></div>
    </div>
  );
};

export default SecureTrusted;