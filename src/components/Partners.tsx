'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';





const Partners = () => {
  const [inView, setInView] = useState(false);
  const [scanlinePosition, setScanlinePosition] = useState(0);
  const [glitchActive, setGlitchActive] = useState(false);

  // Intersection Observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.2 }
    );

    const element = document.getElementById('partners-section');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  // Scanning line animation
  useEffect(() => {
    const interval = setInterval(() => {
      setScanlinePosition(prev => (prev + 1) % 100);
    }, 80);
    return () => clearInterval(interval);
  }, []);

  // Glitch effect
  useEffect(() => {
    const glitchInterval = setInterval(() => {
      setGlitchActive(true);
      setTimeout(() => setGlitchActive(false), 150);
    }, 5000);
    return () => clearInterval(glitchInterval);
  }, []);

  const partners = [
    { 
      name: 'TechCorp', 
      code: 'TC-001',
      status: 'ACTIVE',
      logo: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjQ4IiB2aWV3Qm94PSIwIDAgMTAwIDQ4IiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxyZWN0IHdpZHRoPSIxMDAiIGhlaWdodD0iNDgiIGZpbGw9IiNGRkZGRkYiLz48dGV4dCB4PSI1MCIgeT0iMjgiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNCIgZm9udC13ZWlnaHQ9ImJvbGQiIGZpbGw9IiMwMDAwMDAiIHRleHQtYW5jaG9yPSJtaWRkbGUiPlRFQ0hDT1JQPC90ZXh0Pjwvc3ZnPg=='
    },
    { 
      name: 'DataFlow Systems', 
      code: 'DFS-002',
      status: 'ACTIVE',
      logo: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjQ4IiB2aWV3Qm94PSIwIDAgMTAwIDQ4IiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxyZWN0IHdpZHRoPSIxMDAiIGhlaWdodD0iNDgiIGZpbGw9IiNGRkZGRkYiIHN0cm9rZT0iIzIyQzU1RSIgc3Ryb2tlLXdpZHRoPSIyIi8+PHRleHQgeD0iNTAiIHk9IjI4IiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTIiIGZvbnQtd2VpZ2h0PSJib2xkIiBmaWxsPSIjMDAwMDAwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5EQVRBRE9XPC90ZXh0Pjwvc3ZnPg=='
    },
    { 
      name: 'AgriTech Solutions', 
      code: 'ATS-003',
      status: 'ACTIVE',
      logo: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjQ4IiB2aWV3Qm94PSIwIDAgMTAwIDQ4IiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxkZWZzPjxsaW5lYXJHcmFkaWVudCBpZD0iZ3JhZCIgeDE9IjAlIiB5MT0iMCUiIHgyPSIxMDAlIiB5Mj0iMTAwJSI+PHN0b3Agb2Zmc2V0PSIwJSIgc3R5bGU9InN0b3AtY29sb3I6I0ZGRkZGRjtzdG9wLW9wYWNpdHk6MSIgLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiNGMEYwRjA7c3RvcC1vcGFjaXR5OjEiIC8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCIgaGVpZ2h0PSI0OCIgZmlsbD0idXJsKCNncmFkKSIvPjx0ZXh0IHg9IjUwIiB5PSIyOCIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjEwIiBmb250LXdlaWdodD0iYm9sZCIgZmlsbD0iIzAwMDAwMCIgdGV4dC1hbmNob3I9Im1pZGRsZSI+QUdSSVRFQ0g8L3RleHQ+PC9zdmc+'
    },
    { 
      name: 'CyberLink Industries', 
      code: 'CLI-004',
      status: 'ACTIVE',
      logo: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjQ4IiB2aWV3Qm94PSIwIDAgMTAwIDQ4IiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxyZWN0IHdpZHRoPSIxMDAiIGhlaWdodD0iNDgiIGZpbGw9IiNGOUY5RjkiIHN0cm9rZT0iIzIyQzU1RSIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2UtZGFzaGFycmF5PSI1LDUiLz48dGV4dCB4PSI1MCIgeT0iMjgiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxMSIgZm9udC13ZWlnaHQ9ImJvbGQiIGZpbGw9IiMwMDAwMDAiIHRleHQtYW5jaG9yPSJtaWRkbGUiPkNZQkVSTElOSzwvdGV4dD48L3N2Zz4='
    },
    { 
      name: 'FutureVision Corp', 
      code: 'FVC-005',
      status: 'ACTIVE',
      logo: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjQ4IiB2aWV3Qm94PSIwIDAgMTAwIDQ4IiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxyZWN0IHdpZHRoPSIxMDAiIGhlaWdodD0iNDgiIGZpbGw9IiNGRkZGRkYiLz48cG9seWdvbiBwb2ludHM9IjUwLDEwIDYwLDMwIDQwLDMwIiBmaWxsPSIjMjJDNTVFIi8+PHRleHQgeD0iNTAiIHk9IjQyIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iOCIgZm9udC13ZWlnaHQ9ImJvbGQiIGZpbGw9IiMwMDAwMDAiIHRleHQtYW5jaG9yPSJtaWRkbGUiPkZVVFVSRVZJU0lPTjwvdGV4dD48L3N2Zz4='
    },
    { 
      name: 'SYNTHI AI', 
      code: 'SY-006',
      status: 'ACTIVE',
      logo: '/farmers/LogoSYNTHI.png'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      rotateX: 45,
      scale: 0.8
    },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      scale: 1,
      transition: { 
        duration: 0.8, 
        ease: "easeOut" 
      }
    }
  } as const;

  return (
    <section 
      id="partners-section" 
      className="py-20 bg-white text-black relative overflow-hidden"
      style={{
        background: `
          linear-gradient(135deg, #ffffff 0%, #f8f9fa 25%, #f1f3f4 50%, #f8f9fa 75%, #ffffff 100%),
          radial-gradient(circle at 20% 80%, rgba(34, 197, 94, 0.03) 0%, transparent 50%),
          radial-gradient(circle at 80% 20%, rgba(34, 197, 94, 0.02) 0%, transparent 50%)
        `
      }}
    >
      {/* Digital Rain Effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 15 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-green-500 text-xs font-mono opacity-10"
            style={{
              left: `${Math.random() * 100}%`,
              fontSize: '8px'
            }}
            animate={{
              y: [-20, typeof window !== 'undefined' ? window.innerHeight + 20 : 800],
              opacity: [0, 0.2, 0]
            }}
            transition={{
              duration: 6 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 4,
              ease: "linear"
            }}
          >
            {Math.random() > 0.5 ? '1' : '0'}
          </motion.div>
        ))}
      </div>

      {/* Scanning Line */}
      <motion.div 
        className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-green-500 to-transparent opacity-20"
        style={{ top: `${scanlinePosition}%` }}
        animate={{
          opacity: [0.1, 0.3, 0.1]
        }}
        transition={{
          duration: 3,
          repeat: Infinity
        }}
      />

      {/* Grid Background */}
      <div className="absolute inset-0 opacity-3">
        <div 
          className="w-full h-full"
          style={{
            backgroundImage: `
              linear-gradient(rgba(34, 197, 94, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(34, 197, 94, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px'
          }}
        />
      </div>

      {/* Corner Brackets */}
      <div className="absolute top-0 left-0 w-20 h-20 border-l-2 border-t-2 border-green-500 opacity-20"></div>
      <div className="absolute top-0 right-0 w-20 h-20 border-r-2 border-t-2 border-green-500 opacity-20"></div>
      <div className="absolute bottom-0 left-0 w-20 h-20 border-l-2 border-b-2 border-green-500 opacity-20"></div>
      <div className="absolute bottom-0 right-0 w-20 h-20 border-r-2 border-b-2 border-green-500 opacity-20"></div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <motion.div 
            className="inline-flex items-center space-x-3 bg-white/90 border border-green-500 px-8 py-4 rounded-2xl backdrop-blur-md mb-8 shadow-lg"
            whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(34, 197, 94, 0.2)' }}
          >
            <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse">
              <div className="w-full h-full bg-green-500 rounded-full animate-ping opacity-75"></div>
            </div>
            <span className="text-green-500 font-black text-sm tracking-[0.2em]">STRATEGIC ALLIANCES</span>
          </motion.div>

          <motion.h2 
            className={`text-4xl md:text-6xl font-black tracking-wider mb-4 ${
              glitchActive ? 'animate-pulse' : ''
            }`}
            style={{
              textShadow: glitchActive 
                ? '2px 0 #ff0000, -2px 0 #00ffff' 
                : '0 0 20px rgba(34, 197, 94, 0.3)'
            }}
          >
            <span 
              style={{ 
                color: 'transparent',
                backgroundImage: 'linear-gradient(45deg, #000000, #22c55e, #000000)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
              }}
            >
              TRUSTED
            </span>
            <span className="text-green-500 mx-4">⬥</span>
            <span className="text-black">PARTNERS</span>
          </motion.h2>

          <p className="text-gray-600 text-lg max-w-3xl mx-auto font-medium">
            <span className="text-green-500"></span> Leading organizations powering the future of agriculture through advanced technology partnerships.
          </p>
        </motion.div>

        {/* Partners Grid */}
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-12"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {partners.map((partner, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative"
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <div className="bg-white/95 border border-gray-200 rounded-2xl p-6 backdrop-blur-md relative overflow-hidden group-hover:border-green-500 group-hover:shadow-lg transition-all duration-500 h-32">
                {/* Status Indicator */}
                <div className="absolute top-3 right-3 flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-green-500 text-xs font-mono">{partner.status}</span>
                </div>

                {/* Partner Code */}
                <div className="absolute top-3 left-3">
                  <span className="text-green-500/60 text-xs font-mono">{partner.code}</span>
                </div>

                {/* Logo Container */}
                <div className="flex items-center justify-center h-full pt-4">
                  <div className="relative">
                    <img
                      src={partner.logo}
                      alt={partner.name}
                      className="h-12 w-auto object-contain opacity-70 group-hover:opacity-100 transition-all duration-300"
                    />
                    
                    {/* Glow effect on hover */}
                    <div className="absolute inset-0 bg-green-500/10 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"></div>
                  </div>
                </div>

                {/* Partner Name */}
                <div className="absolute bottom-3 left-3 right-3">
                  <p className="text-gray-700 text-xs font-medium truncate group-hover:text-green-500 transition-colors duration-300">
                    {partner.name}
                  </p>
                </div>

                {/* Scan lines */}
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-green-500/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-green-500/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Corner accents */}
                <div className="absolute top-0 left-0 w-4 h-4 border-l border-t border-green-500/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute top-0 right-0 w-4 h-4 border-r border-t border-green-500/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute bottom-0 left-0 w-4 h-4 border-l border-b border-green-500/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute bottom-0 right-0 w-4 h-4 border-r border-b border-green-500/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Bottom glow */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-green-500 to-transparent opacity-30"></div>
    </section>
  );
};

export default Partners;