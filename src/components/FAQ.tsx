/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const faqItems = [
  {
    id: 1,
    question: "Are there hidden fees for using Farms to Market?",
    answer: "No, there are no hidden fees. We are fully transparent with our pricing structure. Farmers pay a small percentage commission only when a sale is completed. All potential fees are clearly displayed before you finalize your listing.",
    category: "PRICING"
  },
  {
    id: 2,
    question: "How does Farms to Market ensure fair pricing?",
    answer: "We monitor market rates and provide price guidance to sellers. Our platform also allows buyers to compare prices across multiple sellers, encouraging competitive and fair pricing. Additionally, we have a review system that helps maintain quality and price transparency.",
    category: "PRICING"
  },
  {
    id: 3,
    question: "How do I verify a seller's certifications?",
    answer: "All seller certifications are verified by our team and displayed prominently on their profile. You can click on any certification badge to see verification details, issuing authority, and expiration dates. We regularly audit all certification claims to maintain trust.",
    category: "SECURITY"
  },
  {
    id: 4,
    question: "What happens if a buyer disappears after I deliver?",
    answer: "Your payment is secured through our escrow system. Funds are only released once delivery confirmation is received. If there's an issue with a buyer, our dispute resolution team will assist you, and you're protected by our seller guarantee program.",
    category: "SECURITY"
  },
  {
    id: 5,
    question: "What if the transporter damages my goods during delivery?",
    answer: "All shipments through our platform include basic insurance coverage. You can file a claim through your dashboard, and our logistics team will investigate. For high-value shipments, we recommend purchasing additional insurance coverage.",
    category: "DELIVERY"
  },
  {
    id: 6,
    question: "How do I avoid delivery delays with transporters?",
    answer: "Our system monitors weather and traffic conditions to help plan optimal delivery times. We provide real-time tracking and proactive notifications about potential delays. You can also select from our network of premium transporters with proven on-time delivery records.",
    category: "DELIVERY"
  },
  {
    id: 7,
    question: "How does splitting delivery costs work?",
    answer: "Our cost-splitting feature allows multiple buyers in the same area to share delivery costs. During checkout, buyers can opt into shared delivery groups. The system automatically calculates fair cost division based on order size, weight, and delivery distance.",
    category: "DELIVERY"
  },
  {
    id: 8,
    question: "Can I get refund if the product doesn't meet quality standards?",
    answer: "Yes, we offer a quality guarantee. If products don't match the description or meet quality standards, take photos and report the issue within 24 hours of delivery. Our quality assurance team will review your claim and process eligible refunds within 3-5 business days.",
    category: "QUALITY"
  },
];

export default function FAQ() {
  const [expandedId, setExpandedId] = useState<number | null>(null);
  
  const toggleExpand = (id: number) => {
    setExpandedId(expandedId === id ? null : id);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.15,
      },
    },
  } as const;

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 30,
      scale: 0.95,
      rotateX: 15
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      rotateX: 0,
      transition: { 
        duration: 0.6, 
        ease: [0.23, 1, 0.32, 1]
      }
    }
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
    }
  } as const;

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'PRICING': return 'text-blue-600 bg-blue-50';
      case 'SECURITY': return 'text-red-600 bg-red-50';
      case 'DELIVERY': return 'text-purple-600 bg-purple-50';
      case 'QUALITY': return 'text-orange-600 bg-orange-50';
      default: return 'text-gray-600 bg-gray-50';
    }
  };

  return (
    <div 
      className="w-full px-6 py-20 relative overflow-hidden"
      style={{
        background: `
          radial-gradient(ellipse at top center, rgba(0, 232, 52, 0.06) 0%, transparent 50%),
          radial-gradient(ellipse at bottom left, rgba(0, 232, 52, 0.04) 0%, transparent 40%),
          radial-gradient(circle at right, rgba(0, 232, 52, 0.03) 0%, transparent 60%),
          #FFFFFF
        `
      }}
    >
      {/* Grille cyberpunk subtile */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div 
          className="w-full h-full"
          style={{
            backgroundImage: `
              linear-gradient(rgba(0, 232, 52, 0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0, 232, 52, 0.3) 1px, transparent 1px)
            `,
            backgroundSize: '100px 100px'
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Badge de statut FAQ */}
        <motion.div 
          className="flex justify-center mb-8"
          variants={titleVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="inline-flex items-center space-x-3 bg-gradient-to-r from-white via-gray-50 to-white border-2 border-[#00E834] px-6 py-3 rounded-2xl shadow-lg backdrop-blur-sm">
            <div className="w-3 h-3 bg-[#00E834] rounded-full animate-pulse shadow-lg">
              <div className="w-full h-full bg-[#00E834] rounded-full animate-ping opacity-75"></div>
            </div>
            <span className="text-[#00E834] font-black text-sm tracking-wider">KNOWLEDGE BASE</span>
          </div>
        </motion.div>

        {/* Titre principal futuriste */}
        <motion.div
          className="text-center mb-16"
          variants={titleVariants}
          initial="hidden"
          animate="visible"
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
            FREQUENTLY ASKED
          </motion.h2>
          <motion.h3 
            className="text-2xl md:text-3xl font-black text-black tracking-wider"
          >
            <span className="text-[#00E834]">QUESTIONS</span>
          </motion.h3>
        </motion.div>
        
        {/* FAQ Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {faqItems.map((item, index) => (
            <motion.div
              key={item.id}
              className="group relative"
              variants={itemVariants}
              whileHover={{ 
                y: -5,
                scale: 1.02,
                transition: { duration: 0.3 }
              }}
            >
              {/* Card Container */}
              <div className="bg-gradient-to-br from-white via-gray-50 to-white border-2 border-[#00E834]/20 rounded-2xl overflow-hidden backdrop-blur-md relative shadow-lg group-hover:border-[#00E834] transition-all duration-500">
                {/* Category Badge */}
                <div className="absolute top-4 right-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-black tracking-wider ${getCategoryColor(item.category)}`}>
                    {item.category}
                  </span>
                </div>

                {/* Question Header */}
                <div 
                  className="flex justify-between items-start p-6 cursor-pointer group-hover:bg-[#00E834]/5 transition-all duration-300"
                  onClick={() => toggleExpand(item.id)}
                >
                  <h3 className="text-lg font-black text-black pr-4 leading-tight tracking-wide">
                    {item.question}
                  </h3>
                  <motion.div
                    animate={{ rotate: expandedId === item.id ? 45 : 0 }}
                    transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
                    className="w-8 h-8 bg-[#00E834] rounded-full flex items-center justify-center text-white font-black text-xl flex-shrink-0 shadow-lg"
                    whileHover={{ scale: 1.1 }}
                  >
                    +
                  </motion.div>
                </div>
                
                {/* Answer Content */}
                <AnimatePresence>
                  {expandedId === item.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0, y: -10 }}
                      animate={{ height: "auto", opacity: 1, y: 0 }}
                      exit={{ height: 0, opacity: 0, y: -10 }}
                      transition={{ 
                        duration: 0.5,
                        ease: [0.23, 1, 0.32, 1]
                      }}
                      className="px-6 pb-6"
                    >
                      <div className="w-full h-px bg-gradient-to-r from-transparent via-[#00E834]/30 to-transparent mb-4"></div>
                      <p className="text-sm text-gray-700 leading-relaxed font-medium">
                        {item.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Effet de glow au hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#00E834]/5 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 pointer-events-none"></div>
                
                {/* Coins futuristes */}
                <div className="absolute top-2 left-2 w-3 h-3 border-t-2 border-l-2 border-[#00E834]/20 group-hover:border-[#00E834] transition-all duration-300"></div>
                <div className="absolute bottom-2 right-2 w-3 h-3 border-b-2 border-r-2 border-[#00E834]/20 group-hover:border-[#00E834] transition-all duration-300"></div>
                
                {/* Particule animée */}
                <motion.div 
                  className="absolute top-3 right-3 w-1 h-1 bg-[#00E834] rounded-full opacity-0 group-hover:opacity-60"
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.3, 0.6, 0.3]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: index * 0.3
                  }}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        {/* CTA Section */}
        <motion.div 
          className="relative"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <div className="bg-gradient-to-br from-white via-gray-50 to-white border-2 border-[#00E834]/20 rounded-2xl p-8 shadow-lg backdrop-blur-md relative overflow-hidden">
            {/* Effet de glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#00E834]/5 to-transparent"></div>
            
            <div className="flex flex-col md:flex-row justify-between items-center relative z-10">
              <div className="mb-6 md:mb-0">
                <h3 className="font-black text-2xl mb-2 text-black tracking-wide">
                  HAVE SPECIFIC QUESTIONS?
                </h3>
                <p className="text-gray-700 text-base font-medium">
                  Can&apos;t find the answer you are looking for? Talk to our <span className="text-[#00E834] font-black">AI-powered</span> support team.
                </p>
              </div>
              
              <motion.button
                className="bg-gradient-to-r from-[#00E834] to-green-600 hover:from-green-600 hover:to-[#00E834] text-white px-8 py-4 rounded-2xl flex items-center font-black text-lg tracking-wide border-2 border-white shadow-lg transition-all duration-300"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                SUBMIT A QUESTION
                <motion.svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-5 w-5 ml-3" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </motion.svg>
              </motion.button>
            </div>

            {/* Lignes de scan */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#00E834]/30 to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#00E834]/30 to-transparent"></div>
          </div>
        </motion.div>

        {/* Statistiques FAQ */}
        <motion.div 
          className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.5 }}
        >
          {[
            { value: '98%', label: 'ISSUES RESOLVED' },
            { value: '<2H', label: 'RESPONSE TIME' },
            { value: '24/7', label: 'AI SUPPORT' },
            { value: '500+', label: 'HELP ARTICLES' }
          ].map((stat, index) => (
            <motion.div 
              key={index} 
              className="text-center p-4 rounded-xl bg-gradient-to-br from-white via-gray-50 to-white border-2 border-[#00E834]/20 backdrop-blur-sm shadow-md"
              whileHover={{ 
                scale: 1.05, 
                borderColor: '#00E834',
                transition: { duration: 0.3 }
              }}
            >
              <div className="text-2xl md:text-3xl font-black text-[#00E834] mb-1">
                {stat.value}
              </div>
              <div className="text-xs md:text-sm text-black font-bold tracking-wider">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Particules flottantes subtiles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-[#00E834] rounded-full opacity-15"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`
            }}
            animate={{
              y: [0, -50, 0],
              x: [0, Math.sin(i) * 20, 0],
              opacity: [0.15, 0.4, 0.15],
              scale: [1, 1.2, 1]
            }}
            transition={{
              duration: 8 + i * 0.5,
              repeat: Infinity,
              delay: i * 1,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      {/* Lignes d'énergie décoratives subtiles */}
      <div className="absolute top-1/4 left-8 w-32 h-px bg-gradient-to-r from-transparent via-[#00E834]/30 to-transparent"></div>
      <div className="absolute bottom-1/4 right-8 w-32 h-px bg-gradient-to-r from-transparent via-[#00E834]/30 to-transparent"></div>
      <div className="absolute top-1/2 left-4 w-px h-20 bg-gradient-to-b from-transparent via-[#00E834]/25 to-transparent"></div>
      <div className="absolute top-1/2 right-4 w-px h-20 bg-gradient-to-b from-transparent via-[#00E834]/25 to-transparent"></div>
    </div>
  );
}