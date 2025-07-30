/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Home, 
  TrendingUp, 
  BarChart3, 
  Bell, 
  Brain, 
  Wallet,
  Menu,
  X,
  ChevronDown,
  User,
  Settings,
  LogOut,
  Activity,
  Eye,
  Shield,
  Cpu,
  ChevronRight} from 'lucide-react';



interface DotStyle {
  left: string;
  top: string;
  animation: string;
  animationDelay: string;
}

// Navbar Ultra-Futuriste
export function MarketNavbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('market');
  const [dotStyles, setDotStyles] = useState<DotStyle[]>([]);
  const [marketStatus, setMarketStatus] = useState('ONLINE');
  const [tradingVolume, setTradingVolume] = useState(1247853);

  // Génération de particules cyberpunk
  useEffect(() => {
    const newDotStyles = Array.from({ length: 8 }).map((_, i) => ({
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      animation: `float ${6 + i * 0.3}s infinite ease-in-out`,
      animationDelay: `${i * 0.4}s`
    }));
    setDotStyles(newDotStyles);
  }, []);

  // Simulation données temps réel
  useEffect(() => {
    const interval = setInterval(() => {
      setTradingVolume(prev => prev + Math.floor(Math.random() * 1000));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const navItems = [
    { 
      id: 'home', 
      name: 'HOME', 
      href: '/', 
      icon: Home, 
      color: 'from-blue-500 to-cyan-500',
      description: 'Return to main platform'
    },
    { 
      id: 'market', 
      name: 'LIVE MARKET', 
      href: '#market', 
      icon: TrendingUp, 
      active: activeSection === 'market',
      color: 'from-[#00E834] to-green-600',
      description: 'Real-time commodity data'
    },
    { 
      id: 'charts', 
      name: 'NEURAL CHARTS', 
      href: '#charts', 
      icon: BarChart3,
      active: activeSection === 'charts',
      color: 'from-purple-500 to-pink-500',
      description: 'AI-powered visualizations'
    },
    { 
      id: 'alerts', 
      name: 'QUANTUM ALERTS', 
      href: '#alerts', 
      icon: Bell,
      active: activeSection === 'alerts',
      color: 'from-orange-500 to-red-500',
      description: 'Predictive notifications'
    },
    { 
      id: 'analysis', 
      name: 'AI NEXUS', 
      href: '#analysis', 
      icon: Brain,
      active: activeSection === 'analysis',
      color: 'from-cyan-500 to-blue-500',
      description: 'Machine learning insights'
    },
    { 
      id: 'portfolio', 
      name: 'CYBER VAULT', 
      href: '#portfolio', 
      icon: Wallet,
      active: activeSection === 'portfolio',
      color: 'from-emerald-500 to-teal-500',
      description: 'Secure trading portfolio'
    }
  ];

  const handleNavClick = (id: string) => {
    setActiveSection(id);
    setMobileMenuOpen(false);
  };

  return (
    <>
      {/* Particules cyberpunk */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-40">
        {dotStyles.map((style, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-[#00E834] rounded-full opacity-30"
            style={style}
          />
        ))}
      </div>

      <motion.header 
        className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl relative overflow-hidden"
        style={{
          background: `
            radial-gradient(ellipse at top, rgba(0, 232, 52, 0.15) 0%, transparent 70%),
            linear-gradient(135deg, rgba(0, 0, 0, 0.95) 0%, rgba(17, 17, 17, 0.95) 50%, rgba(0, 0, 0, 0.95) 100%)
          `
        }}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.2, ease: [0.23, 1, 0.32, 1] }}
      >
        {/* Grille cyberpunk */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div 
            className="w-full h-full"
            style={{
              backgroundImage: `
                linear-gradient(rgba(0, 232, 52, 0.4) 1px, transparent 1px),
                linear-gradient(90deg, rgba(0, 232, 52, 0.4) 1px, transparent 1px)
              `,
              backgroundSize: '40px 40px'
            }}
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 py-3 relative z-10">
          <div className="flex justify-between items-center">
            
            {/* Logo Ultra-Futuriste */}
            <motion.div 
              className="flex items-center space-x-4 group"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-br from-[#00E834] via-green-500 to-emerald-600 rounded-xl flex items-center justify-center shadow-lg border border-[#00E834]/50 relative overflow-hidden">
                  <TrendingUp className="w-7 h-7 text-white relative z-10" />
                  {/* Effet de glow */}
                  <div className="absolute inset-0 bg-[#00E834] blur-xl opacity-50 group-hover:opacity-70 transition-opacity"></div>
                  {/* Scan line */}
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                    animate={{ x: [-48, 48] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                  />
                </div>
                {/* Particules orbitales */}
                <motion.div 
                  className="absolute -top-1 -right-1 w-3 h-3 bg-[#00E834] rounded-full"
                  animate={{ 
                    rotate: 360,
                    scale: [1, 1.2, 1]
                  }}
                  transition={{ 
                    rotate: { duration: 8, repeat: Infinity, ease: "linear" },
                    scale: { duration: 2, repeat: Infinity }
                  }}
                />
              </div>
              
              <div>
                <div className="text-white font-black text-xl tracking-widest relative">
                  <span 
                    style={{ 
                      color: 'transparent',
                      backgroundImage: 'linear-gradient(45deg, #00E834, #FFFFFF, #00E834)',
                      backgroundClip: 'text',
                      WebkitBackgroundClip: 'text',
                      textShadow: '0 0 20px rgba(0, 232, 52, 0.5)'
                    }}
                  >
                    MARKET
                  </span>
                  <span className="text-white">NEXUS</span>
                  {/* Ligne de scan sous le logo */}
                  <div className="absolute -bottom-1 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#00E834] to-transparent"></div>
                </div>
                <div className="text-[#00E834] text-xs font-black tracking-[0.2em] uppercase">
                  AGRICULTURAL QUANTUM EXCHANGE
                </div>
              </div>
            </motion.div>

            {/* Navigation Desktop Ultra-Futuriste */}
            <nav className="hidden xl:flex space-x-1">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  className="relative group"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <motion.a
                    href={item.href}
                    onClick={() => handleNavClick(item.id)}
                    className={`relative flex flex-col items-center px-4 py-3 rounded-xl font-black text-xs tracking-wider transition-all duration-500 border backdrop-blur-sm ${
                      item.active 
                        ? `bg-gradient-to-r ${item.color} text-black shadow-lg border-white/30 shadow-[#00E834]/30`
                        : 'text-white hover:text-[#00E834] bg-black/20 border-[#00E834]/20 hover:border-[#00E834]/60 hover:bg-[#00E834]/10'
                    }`}
                    whileHover={{ 
                      scale: 1.05, 
                      y: -2,
                      boxShadow: item.active ? "0 20px 40px rgba(0, 232, 52, 0.3)" : "0 10px 25px rgba(0, 232, 52, 0.2)"
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {/* Icône avec effet holographique */}
                    <div className="relative mb-1">
                      <item.icon className="w-5 h-5 relative z-10" />
                      {item.active && (
                        <motion.div 
                          className="absolute inset-0 blur-md opacity-60"
                          animate={{ scale: [1, 1.2, 1] }}
                          transition={{ duration: 2, repeat: Infinity }}
                        >
                          <item.icon className="w-5 h-5 text-white" />
                        </motion.div>
                      )}
                    </div>
                    
                    <span className="text-[10px] leading-tight text-center">{item.name}</span>
                    
                    {/* Indicator actif */}
                    {item.active && (
                      <motion.div 
                        className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-8 h-1 bg-white rounded-full"
                        layoutId="activeIndicator"
                        transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
                      />
                    )}

                    {/* Scan lines */}
                    <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#00E834]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#00E834]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  </motion.a>

                  {/* Tooltip futuriste */}
                  <motion.div
                    className="absolute top-full mt-2 left-1/2 transform -translate-x-1/2 px-3 py-2 bg-gradient-to-r from-black to-gray-900 border border-[#00E834]/30 rounded-lg text-white text-xs font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all duration-300 backdrop-blur-md"
                    initial={{ scale: 0.8, y: -10 }}
                    whileHover={{ scale: 1, y: 0 }}
                  >
                    {item.description}
                    <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-[#00E834] rotate-45"></div>
                  </motion.div>
                </motion.div>
              ))}
            </nav>

            {/* Contrôles de droite */}
            <div className="flex items-center space-x-3">
              {/* Status du marché ultra-futuriste */}
              <motion.div 
                className="hidden lg:flex items-center space-x-3 px-4 py-2 bg-gradient-to-r from-black/80 via-gray-900/60 to-black/80 border border-[#00E834]/30 rounded-xl backdrop-blur-md relative overflow-hidden group"
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex items-center space-x-2">
                  <motion.div 
                    className="w-3 h-3 bg-[#00E834] rounded-full relative"
                    animate={{ 
                      scale: [1, 1.3, 1],
                      opacity: [0.8, 1, 0.8]
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <div className="absolute inset-0 bg-[#00E834] rounded-full animate-ping opacity-75"></div>
                  </motion.div>
                  <span className="text-[#00E834] font-black text-xs tracking-wider">{marketStatus}</span>
                </div>
                
                <div className="w-px h-4 bg-[#00E834]/30"></div>
                
                <div className="flex flex-col">
                  <span className="text-white font-black text-xs">VOL</span>
                  <span className="text-[#00E834] font-black text-xs">{(tradingVolume / 1000000).toFixed(2)}M</span>
                </div>

                <div className="absolute inset-0 bg-gradient-to-r from-[#00E834]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </motion.div>

              {/* Neural Scan Indicator */}
              <motion.div
                className="hidden md:flex items-center px-3 py-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 rounded-xl backdrop-blur-md"
                animate={{ 
                  boxShadow: [
                    "0 0 10px rgba(139, 92, 246, 0.3)",
                    "0 0 20px rgba(139, 92, 246, 0.5)",
                    "0 0 10px rgba(139, 92, 246, 0.3)"
                  ]
                }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <Cpu className="w-4 h-4 text-purple-400 mr-2" />
                <span className="text-purple-400 font-black text-xs tracking-wider">AI SCAN</span>
              </motion.div>

              {/* Menu utilisateur futuriste */}
              <div className="relative">
                <motion.button
                  onClick={() => setUserMenuOpen(!userMenuOpen)}
                  className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-black/80 to-gray-900/60 border border-[#00E834]/30 rounded-xl text-white hover:bg-[#00E834]/20 transition-all backdrop-blur-md relative overflow-hidden group"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className="w-8 h-8 bg-gradient-to-br from-[#00E834] to-green-600 rounded-lg flex items-center justify-center">
                    <User className="w-4 h-4 text-white" />
                  </div>
                  <div className="hidden md:block">
                    <div className="text-xs font-black tracking-wider">AGENT</div>
                    <div className="text-[10px] text-[#00E834] font-bold">AUTHENTICATED</div>
                  </div>
                  <ChevronDown className="w-3 h-3" />
                  
                  <div className="absolute inset-0 bg-gradient-to-r from-[#00E834]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </motion.button>
                
                <AnimatePresence>
                  {userMenuOpen && (
                    <motion.div
                      className="absolute top-full right-0 mt-2 w-64 bg-gradient-to-br from-black via-gray-900 to-black border border-[#00E834]/30 rounded-xl shadow-2xl backdrop-blur-xl overflow-hidden"
                      initial={{ opacity: 0, scale: 0.95, y: -10 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.95, y: -10 }}
                      transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
                    >
                      {/* Header du menu */}
                      <div className="p-4 border-b border-[#00E834]/30 bg-gradient-to-r from-[#00E834]/10 to-transparent">
                        <div className="flex items-center space-x-3">
                          <div className="w-12 h-12 bg-gradient-to-br from-[#00E834] to-green-600 rounded-xl flex items-center justify-center">
                            <User className="w-6 h-6 text-white" />
                          </div>
                          <div>
                            <div className="text-white font-black text-sm tracking-wide">QUANTUM AGENT</div>
                            <div className="text-[#00E834] text-xs font-bold">LEVEL 7 CLEARANCE</div>
                          </div>
                        </div>
                      </div>

                      <div className="p-2">
                        {[
                          { icon: Eye, label: 'Neural Profile', href: '#profile', color: 'text-blue-400' },
                          { icon: Shield, label: 'Security Matrix', href: '#security', color: 'text-green-400' },
                          { icon: Settings, label: 'System Config', href: '#settings', color: 'text-purple-400' },
                          { icon: Activity, label: 'Trade Analytics', href: '#analytics', color: 'text-orange-400' }
                        ].map((item, index) => (
                          <motion.a
                            key={index}
                            href={item.href}
                            className="flex items-center px-3 py-3 text-white hover:text-[#00E834] hover:bg-[#00E834]/10 rounded-lg transition-all font-medium relative group"
                            whileHover={{ x: 5 }}
                            transition={{ duration: 0.2 }}
                          >
                            <item.icon className={`w-4 h-4 mr-3 ${item.color}`} />
                            <span className="font-bold text-sm tracking-wide">{item.label}</span>
                            <ChevronRight className="w-3 h-3 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                          </motion.a>
                        ))}
                        
                        <div className="border-t border-[#00E834]/30 my-2"></div>
                        
                        <motion.a 
                          href="/" 
                          className="flex items-center px-3 py-3 text-white hover:text-[#00E834] hover:bg-[#00E834]/10 rounded-lg transition-all font-medium group"
                          whileHover={{ x: 5 }}
                        >
                          <Home className="w-4 h-4 mr-3 text-cyan-400" />
                          <span className="font-bold text-sm tracking-wide">RETURN TO BASE</span>
                          <ChevronRight className="w-3 h-3 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                        </motion.a>
                        
                        <motion.a 
                          href="#logout" 
                          className="flex items-center px-3 py-3 text-red-400 hover:bg-red-500/10 rounded-lg transition-all font-medium group"
                          whileHover={{ x: 5 }}
                        >
                          <LogOut className="w-4 h-4 mr-3" />
                          <span className="font-bold text-sm tracking-wide">DISCONNECT</span>
                          <ChevronRight className="w-3 h-3 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                        </motion.a>
                      </div>

                      {/* Scan lines */}
                      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#00E834]/50 to-transparent"></div>
                      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#00E834]/50 to-transparent"></div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Bouton menu mobile futuriste */}
              <motion.button 
                className="xl:hidden text-white p-3 bg-gradient-to-r from-black/80 to-gray-900/60 rounded-xl border border-[#00E834]/30 hover:bg-[#00E834]/20 transition-all backdrop-blur-md relative overflow-hidden group"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <AnimatePresence mode="wait">
                  {mobileMenuOpen ? (
                    <motion.div
                      key="close"
                      initial={{ rotate: 90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: -90, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <X className="w-5 h-5" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="menu"
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Menu className="w-5 h-5" />
                    </motion.div>
                  )}
                </AnimatePresence>
                
                <div className="absolute inset-0 bg-gradient-to-r from-[#00E834]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </motion.button>
            </div>
          </div>

          {/* Menu Mobile Ultra-Futuriste */}
          <AnimatePresence>
            {mobileMenuOpen && (
              <motion.div
                className="xl:hidden mt-4 p-4 bg-gradient-to-br from-black/95 via-gray-900/90 to-black/95 border border-[#00E834]/30 rounded-xl backdrop-blur-xl overflow-hidden relative"
                initial={{ opacity: 0, height: 0, y: -20 }}
                animate={{ opacity: 1, height: 'auto', y: 0 }}
                exit={{ opacity: 0, height: 0, y: -20 }}
                transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
              >
                <nav className="space-y-2">
                  {navItems.map((item, index) => (
                    <motion.a
                      key={item.id}
                      href={item.href}
                      onClick={() => handleNavClick(item.id)}
                      className={`flex items-center px-4 py-4 rounded-xl font-black text-sm tracking-wide transition-all relative group ${
                        item.active 
                          ? `bg-gradient-to-r ${item.color} text-black shadow-lg`
                          : 'text-white hover:text-[#00E834] hover:bg-[#00E834]/10 border border-[#00E834]/20 hover:border-[#00E834]/60'
                      }`}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                      whileHover={{ x: 5 }}
                    >
                      <div className="relative mr-4">
                        <item.icon className="w-5 h-5 relative z-10" />
                        {item.active && (
                          <div className="absolute inset-0 bg-white/30 blur-md rounded-full"></div>
                        )}
                      </div>
                      
                      <div className="flex-1">
                        <div className="font-black text-sm tracking-wider">{item.name}</div>
                        <div className="text-xs opacity-70 font-medium">{item.description}</div>
                      </div>
                      
                      <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                      
                      {/* Scan lines */}
                      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#00E834]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    </motion.a>
                  ))}
                </nav>

                {/* Scan lines du menu mobile */}
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#00E834]/50 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#00E834]/50 to-transparent"></div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Ligne de scan principale */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#00E834]/70 to-transparent"></div>
        
        {/* Effet de glow en bas */}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-64 h-px bg-[#00E834] blur-sm opacity-50"></div>
      </motion.header>

      {/* CSS pour les animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px) translateX(0px) scale(1);
            opacity: 0.3;
          }
          50% {
            transform: translateY(-20px) translateX(10px) scale(1.1);
            opacity: 0.6;
          }
        }
      `}</style>
    </>
  );
}
