'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const testimonials = [
  {
    id: 1,
    quote: "REVOLUTIONARY PLATFORM",
    description: "I optimized my crop yield by 85% in just 3 weeks using advanced data analytics - exceptional results",
    author: "Ngozi Mbeki",
    role: "Cassava Producer",
    avatar: "/farmers/cassava1.jpeg"
  },
  {
    id: 2,
    quote: "GAME-CHANGING TECHNOLOGY",
    description: "Finally discovered a platform where supply chain operations function with precision timing and complete transparency",
    author: "Aminatou Bello",
    role: "Agricultural Distributor",
    avatar: "/farmers/images1.jpeg"
  },
  {
    id: 3,
    quote: "NEXT-LEVEL SOLUTION",
    description: "Farm-to-market delivery time reduced by 75% with complete digital tracking and automated processing systems",
    author: "Kwame Asante",
    role: "Livestock Farmer",
    avatar: "/farmers/farms2.jpeg"
  },
  {
    id: 4,
    quote: "CUTTING-EDGE INNOVATION",
    description: "Advanced marketplace integration increased my profit margins by 90% through intelligent pricing algorithms",
    author: "Fatima Njoya",
    role: "Palm Oil Producer", 
    avatar: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=150&h=150&fit=crop&crop=face&auto=format&q=80"
  },
  {
    id: 5,
    quote: "BREAKTHROUGH PLATFORM",
    description: "Real-time market analysis and predictive modeling transformed my agricultural business operations completely",
    author: "Amadou Tchoupo",
    role: "Coffee Plantation Owner",
    avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop&crop=face&auto=format&q=80"
  }
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    
    return () => clearInterval(interval);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 1,
        staggerChildren: 0.2,
      },
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
        duration: 0.8, 
        ease: [0.23, 1, 0.32, 1]
      }
    }
  } as const;

  const subtitleVariants = {
    hidden: { 
      opacity: 0,
      y: 20
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: { 
        duration: 0.8, 
        delay: 0.3,
        ease: [0.23, 1, 0.32, 1]
      }
    }
  } as const;

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      scale: 0.8,
      y: 40
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { 
        duration: 0.8, 
        ease: [0.23, 1, 0.32, 1]
      }
    }
  } as const;

  return (
    <div 
      className="w-full py-20 px-6 overflow-hidden rounded-3xl relative"
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

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div 
          className="text-center mb-16"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="bg-gradient-to-r from-black via-gray-900 to-black border border-[#00E834] px-8 py-4 rounded-2xl shadow-lg backdrop-blur-sm mb-8 inline-block">
            <div className="flex items-center justify-center space-x-4">
              <div className="w-4 h-4 bg-[#00E834] rounded-full animate-pulse shadow-lg">
                <div className="w-full h-full bg-[#00E834] rounded-full animate-ping opacity-75"></div>
              </div>
              <span className="text-[#00E834] font-black text-lg tracking-wider">USER TESTIMONIALS</span>
            </div>
          </div>

          <motion.h2 
            className="text-5xl md:text-6xl lg:text-7xl font-black mb-6 leading-tight"
            variants={titleVariants}
            style={{ 
              color: 'transparent',
              backgroundImage: 'linear-gradient(45deg, #00E834, #FFFFFF, #00E834)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              textShadow: '0 0 30px rgba(0, 232, 52, 0.5)'
            }}
          >
            OUR MEMBERS
            <br />
            <span className="text-white">SPEAK</span>
          </motion.h2>
          <motion.p 
            className="text-xl md:text-2xl text-gray-400 font-bold tracking-wide"
            variants={subtitleVariants}
          >
            TRUSTED BY 
            <span className="text-[#00E834]"> 10,000+ AGRICULTURAL PROFESSIONALS</span>
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              className="bg-gradient-to-br from-black/80 via-gray-900/60 to-black/80 border border-[#00E834]/30 p-8 rounded-2xl backdrop-blur-md relative overflow-hidden"
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              style={{ 
                animationDelay: `${index * 0.1}s` 
              }}
              whileHover={{
                y: -8,
                scale: 1.02,
                borderColor: '#00E834',
                boxShadow: '0 20px 40px rgba(0, 232, 52, 0.2)',
                transition: { duration: 0.3 }
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#00E834]/10 to-transparent"></div>
              
              <motion.div
                className="relative z-10"
                animate={{
                  y: activeIndex === index ? -4 : 0,
                  scale: activeIndex === index ? 1.02 : 1
                }}
                transition={{ duration: 0.5 }}
              >
                <div className="flex items-center mb-6">
                  <div className="w-3 h-3 bg-[#00E834] rounded-full mr-3 shadow-lg shadow-[#00E834]/50">
                    <div className="w-full h-full bg-[#00E834] rounded-full animate-ping opacity-50"></div>
                  </div>
                  <h3 className="font-black text-lg text-[#00E834] tracking-wider">{testimonial.quote}</h3>
                </div>
                <p className="text-white/90 text-base leading-relaxed mb-8 font-medium">{testimonial.description}</p>
              </motion.div>
              
              <div className="flex items-center space-x-4 relative z-10">
                <motion.div 
                  className="w-16 h-16 rounded-2xl overflow-hidden bg-gradient-to-br from-[#00E834] to-green-600 p-1 shadow-lg"
                  animate={{
                    scale: activeIndex === index ? 1.1 : 1,
                    boxShadow: activeIndex === index ? '0 0 0 3px rgba(0, 232, 52, 0.4)' : '0 0 0 0px rgba(0, 232, 52, 0)'
                  }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="w-full h-full rounded-xl overflow-hidden bg-black">
                    <img
                      src={testimonial.avatar} 
                      alt={testimonial.author} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </motion.div>
                <div>
                  <p className="font-black text-white text-lg tracking-wide">{testimonial.author}</p>
                  <p className="text-[#00E834] text-sm font-bold tracking-wider">{testimonial.role}</p>
                </div>
              </div>

              {/* Effet lumineux pour la carte active */}
              {activeIndex === index && (
                <motion.div
                  className="absolute top-0 left-0 right-0 h-px bg-[#00E834] shadow-lg shadow-[#00E834]/50"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.5 }}
                />
              )}

              {/* Lignes de scan */}
              <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#00E834] to-transparent opacity-50"></div>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          className="flex justify-center mt-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          {testimonials.map((_, index) => (
            <motion.button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`mx-2 w-4 h-4 rounded-full transition-all duration-500 relative ${
                activeIndex === index ? 'bg-[#00E834] scale-125' : 'bg-gray-700'
              }`}
              whileHover={{ scale: 1.3 }}
              whileTap={{ scale: 0.9 }}
              aria-label={`Go to testimonial ${index + 1}`}
            >
              {activeIndex === index && (
                <div className="absolute inset-0 bg-[#00E834] rounded-full animate-ping opacity-50"></div>
              )}
            </motion.button>
          ))}
        </motion.div>

        {/* Statistics Section */}
        <motion.div 
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.2 }}
        >
          {[
            { value: '10,000+', label: 'ACTIVE USERS' },
            { value: '98%', label: 'SATISFACTION RATE' },
            { value: '45+', label: 'COUNTRIES' },
            { value: '24/7', label: 'SUPPORT' }
          ].map((stat, index) => (
            <motion.div 
              key={index} 
              className="text-center p-6 rounded-2xl bg-gradient-to-br from-black/60 to-gray-900/40 border border-[#00E834]/30 backdrop-blur-sm relative overflow-hidden"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 1.4 + index * 0.1 }}
              whileHover={{ 
                scale: 1.05, 
                borderColor: '#00E834' 
              }}
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
        </motion.div>

        {/* Call to Action */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.6 }}
        >
          <motion.button
            className="bg-gradient-to-r from-[#00E834] to-green-600 hover:from-green-600 hover:to-[#00E834] text-black px-12 py-4 rounded-2xl font-black text-lg tracking-wide border border-green-400 shadow-lg"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            JOIN OUR COMMUNITY
          </motion.button>
        </motion.div>
      </div>

      {/* Particules flottantes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-[#00E834] rounded-full opacity-30"
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
      <div className="absolute top-1/4 left-10 w-32 h-px bg-gradient-to-r from-transparent via-[#00E834] to-transparent opacity-60"></div>
      <div className="absolute bottom-1/4 right-10 w-32 h-px bg-gradient-to-r from-transparent via-[#00E834] to-transparent opacity-60"></div>
      <div className="absolute top-1/2 left-5 w-px h-24 bg-gradient-to-b from-transparent via-[#00E834] to-transparent opacity-40"></div>
      <div className="absolute top-1/2 right-5 w-px h-24 bg-gradient-to-b from-transparent via-[#00E834] to-transparent opacity-40"></div>
    </div>
  );
}