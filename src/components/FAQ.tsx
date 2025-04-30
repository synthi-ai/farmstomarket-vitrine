'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const faqItems = [
  {
    id: 1,
    question: "Are there hidden fees for using Farms to Market?",
    answer: "No, there are no hidden fees. We are fully transparent with our pricing structure. Farmers pay a small percentage commission only when a sale is completed. All potential fees are clearly displayed before you finalize your listing."
  },
  {
    id: 2,
    question: "How does Farms to Market ensure fair pricing?",
    answer: "We monitor market rates and provide price guidance to sellers. Our platform also allows buyers to compare prices across multiple sellers, encouraging competitive and fair pricing. Additionally, we have a review system that helps maintain quality and price transparency."
  },
  {
    id: 3,
    question: "How do I verify a seller's certifications?",
    answer: "All seller certifications are verified by our team and displayed prominently on their profile. You can click on any certification badge to see verification details, issuing authority, and expiration dates. We regularly audit all certification claims to maintain trust."
  },
  {
    id: 4,
    question: "What happens if a buyer disappears after I deliver?",
    answer: "Your payment is secured through our escrow system. Funds are only released once delivery confirmation is received. If there's an issue with a buyer, our dispute resolution team will assist you, and you're protected by our seller guarantee program."
  },
  {
    id: 5,
    question: "What if the transporter damages my goods during delivery?",
    answer: "All shipments through our platform include basic insurance coverage. You can file a claim through your dashboard, and our logistics team will investigate. For high-value shipments, we recommend purchasing additional insurance coverage."
  },
  {
    id: 6,
    question: "How do I avoid delivery delays with transporters?",
    answer: "Our system monitors weather and traffic conditions to help plan optimal delivery times. We provide real-time tracking and proactive notifications about potential delays. You can also select from our network of premium transporters with proven on-time delivery records."
  },
  {
    id: 7,
    question: "How does splitting delivery costs work?",
    answer: "Our cost-splitting feature allows multiple buyers in the same area to share delivery costs. During checkout, buyers can opt into shared delivery groups. The system automatically calculates fair cost division based on order size, weight, and delivery distance."
  },
  {
    id: 8,
    question: "Can I get refund if the product doesn't meet quality standards?",
    answer: "Yes, we offer a quality guarantee. If products don't match the description or meet quality standards, take photos and report the issue within 24 hours of delivery. Our quality assurance team will review your claim and process eligible refunds within 3-5 business days."
  },
];

export default function FAQ() {
  const [expandedId, setExpandedId] = useState(null);
  
  const toggleExpand = (id:any) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <div className="w-full bg-blue-50 py-12 px-6 rounded-lg">
      <div className="max-w-6xl mx-auto">
        <motion.h2 
          className="text-3xl font-bold text-center mb-10"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Frequently Asked Questions
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
          {faqItems.map((item) => (
            <motion.div
              key={item.id}
              className="bg-white rounded-lg shadow-sm overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: item.id * 0.1 }}
            >
              <div 
                className="flex justify-between items-center p-4 cursor-pointer"
                onClick={() => toggleExpand(item.id)}
              >
                <h3 className="text-sm font-normal text-gray-800">{item.question}</h3>
                <motion.div
                  animate={{ rotate: expandedId === item.id ? 45 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="text-xl text-gray-400 font-light"
                >
                  +
                </motion.div>
              </div>
              
              <AnimatePresence>
                {expandedId === item.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-4 pb-4"
                  >
                    <p className="text-sm text-gray-600">{item.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
        
        <div className="bg-white rounded-lg p-6 shadow-sm">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h3 className="font-semibold text-lg">Have specific questions?</h3>
              <p className="text-gray-600 text-sm">Can't find the answer you are looking for? Talk to our friendly team.</p>
            </div>
            
            <motion.button
              className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full flex items-center transition-colors duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Submit a Question
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-4 w-4 ml-2" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </motion.button>
          </div>
        </div>
      </div>
    </div>
  );
}