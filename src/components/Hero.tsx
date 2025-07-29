import { useState, useEffect } from 'react';
import { Play, Menu, X, ChevronDown, Globe, User, Settings } from 'lucide-react';

const farmBackground = {
  src: '/images/home2.png'
};

export default function Hero() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [languageMenuOpen, setLanguageMenuOpen] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  
  useEffect(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev === 2 ? 0 : prev + 1));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const slides = [
    {
      id: 0,
      image: farmBackground,
      title: "SELL DIRECTLY TO BUYERS & GET PAID INSTANTLY",
      description: "Farms to Market connects farmers and buyers with AI-powered pricing, secure payments, and real-time delivery tracking through advanced blockchain technology."
    },
    {
      id: 1,
      image: farmBackground, 
      title: "GROW YOUR FARM BUSINESS WITH ADVANCED ANALYTICS",
      description: "Access new markets and maximize profitability using our intelligent platform with predictive market insights and automated trading systems."
    },
    {
      id: 2,
      image: farmBackground,
      title: "TRANSPARENT & SECURE DIGITAL TRANSACTIONS",
      description: "Revolutionary platform ensures fair pricing and secure payments through military-grade encryption and smart contract technology."
    }
  ];

  const currentSlide = slides[activeSlide];

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const languages = [
    { code: 'en', name: 'English', flag: '🇺🇸' },
    { code: 'fr', name: 'Français', flag: '🇫🇷' },
    { code: 'es', name: 'Español', flag: '🇪🇸' }
  ];

  const navigationItems = [
    { 
      name: 'About', 
      href: '#about',
      hasDropdown: true,
      dropdownItems: [
        { name: 'Our Story', href: '#story' },
        { name: 'Mission & Vision', href: '#mission' },
        { name: 'Team', href: '#team' },
        { name: 'Careers', href: '#careers' }
      ]
    },
    { 
      name: 'Features', 
      href: '#features',
      hasDropdown: true,
      dropdownItems: [
        { name: 'AI Analytics', href: '#ai-analytics' },
        { name: 'Smart Contracts', href: '#smart-contracts' },
        { name: 'Real-time Tracking', href: '#tracking' },
        { name: 'Payment System', href: '#payments' }
      ]
    },
    { 
      name: 'Solutions', 
      href: '#solutions',
      hasDropdown: true,
      dropdownItems: [
        { name: 'For Farmers', href: '#farmers' },
        { name: 'For Buyers', href: '#buyers' },
        { name: 'For Distributors', href: '#distributors' },
        { name: 'Enterprise', href: '#enterprise' }
      ]
    },
    { name: 'Marketplace', href: '#marketplace' },
    { name: 'Support', href: '#support' },
    { name: 'Testimonials', href: '#testimonials' }
  ];

  return (
    <>
       <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled || mobileMenuOpen 
            ? 'bg-gradient-to-r from-black via-gray-900 to-black border-b border-[#00E834]/30 backdrop-blur-md' 
            : 'bg-transparent'
        }`}
        style={{
          background: scrolled || mobileMenuOpen 
            ? `
                radial-gradient(ellipse at top, rgba(0, 232, 52, 0.05) 0%, transparent 50%),
                linear-gradient(135deg, #000000 0%, #111111 50%, #000000 100%)
              `
            : 'transparent'
        }}
      >
        <div className={`flex justify-between items-center px-4 sm:px-6 py-4 sm:py-6 max-w-7xl mx-auto transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'}`}>
          
          {/* Logo Futuriste */}
          <div className="text-white font-black text-xl sm:text-2xl order-2 sm:order-1 mx-auto sm:mx-0 tracking-wider">
            <span className="text-[#00E834]">FARMS</span>
            <span className="text-xs align-text-top font-bold">.TO</span>
            <span>MARKET</span>
            <div className="w-full h-px bg-gradient-to-r from-transparent via-[#00E834] to-transparent mt-1"></div>
          </div>

          {/* Mobile menu button */}
          <button 
            className="order-1 sm:hidden text-white p-2 bg-black/50 rounded-lg border border-[#00E834]/30 hover:bg-[#00E834]/20 transition-all"
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

          {/* Desktop Navigation Futuriste */}
          <nav className="hidden lg:flex space-x-1 order-1">
            {navigationItems.map((item) => (
              <div key={item.name} className="relative group">
                <a 
                  href={item.href} 
                  className="flex items-center text-white hover:text-[#00E834] transition-colors font-bold px-4 py-2 rounded-lg hover:bg-[#00E834]/10 border border-transparent hover:border-[#00E834]/30 tracking-wide"
                >
                  {item.name}
                  {item.hasDropdown && <ChevronDown className="w-4 h-4 ml-1" />}
                </a>
                
                {/* Dropdown Menu */}
                {item.hasDropdown && (
                  <div className="absolute top-full left-0 mt-2 w-56 bg-gradient-to-br from-black via-gray-900 to-black border border-[#00E834]/30 rounded-xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 backdrop-blur-md">
                    <div className="p-2">
                      {item.dropdownItems?.map((dropdownItem) => (
                        <a
                          key={dropdownItem.name}
                          href={dropdownItem.href}
                          className="block px-4 py-3 text-white hover:text-[#00E834] hover:bg-[#00E834]/10 rounded-lg transition-all font-medium border border-transparent hover:border-[#00E834]/20"
                        >
                          {dropdownItem.name}
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Right Side Controls */}
          <div className="hidden sm:flex items-center space-x-4 order-3">
            {/* Language Selector */}
            <div className="relative">
              <button
                onClick={() => setLanguageMenuOpen(!languageMenuOpen)}
                className="flex items-center text-white hover:text-[#00E834] transition-colors font-bold px-3 py-2 rounded-lg hover:bg-[#00E834]/10 border border-[#00E834]/30"
              >
                <Globe className="w-4 h-4 mr-2" />
                EN
                <ChevronDown className="w-4 h-4 ml-1" />
              </button>
              
              {languageMenuOpen && (
                <div className="absolute top-full right-0 mt-2 w-48 bg-gradient-to-br from-black via-gray-900 to-black border border-[#00E834]/30 rounded-xl shadow-2xl backdrop-blur-md">
                  <div className="p-2">
                    {languages.map((lang) => (
                      <button
                        key={lang.code}
                        className="w-full flex items-center px-4 py-3 text-white hover:text-[#00E834] hover:bg-[#00E834]/10 rounded-lg transition-all font-medium text-left"
                        onClick={() => setLanguageMenuOpen(false)}
                      >
                        <span className="mr-3">{lang.flag}</span>
                        {lang.name}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* User Menu */}
            <div className="relative">
              <button
                onClick={() => setUserMenuOpen(!userMenuOpen)}
                className="flex items-center text-white hover:text-[#00E834] transition-colors font-bold px-3 py-2 rounded-lg hover:bg-[#00E834]/10 border border-[#00E834]/30"
              >
                <User className="w-4 h-4 mr-2" />
                Account
                <ChevronDown className="w-4 h-4 ml-1" />
              </button>
              
              {userMenuOpen && (
                <div className="absolute top-full right-0 mt-2 w-48 bg-gradient-to-br from-black via-gray-900 to-black border border-[#00E834]/30 rounded-xl shadow-2xl backdrop-blur-md">
                  <div className="p-2">
                    <a href="#login" className="block px-4 py-3 text-white hover:text-[#00E834] hover:bg-[#00E834]/10 rounded-lg transition-all font-medium">
                      Sign In
                    </a>
                    <a href="#register" className="block px-4 py-3 text-white hover:text-[#00E834] hover:bg-[#00E834]/10 rounded-lg transition-all font-medium">
                      Create Account
                    </a>
                    <div className="border-t border-[#00E834]/30 my-2"></div>
                    <a href="#dashboard" className="block px-4 py-3 text-white hover:text-[#00E834] hover:bg-[#00E834]/10 rounded-lg transition-all font-medium">
                      Dashboard
                    </a>
                    <a href="#settings" className="flex items-center px-4 py-3 text-white hover:text-[#00E834] hover:bg-[#00E834]/10 rounded-lg transition-all font-medium">
                      <Settings className="w-4 h-4 mr-2" />
                      Settings
                    </a>
                  </div>
                </div>
              )}
            </div>

            {/* App Store Buttons Futuristes */}
            <div className="flex space-x-3">
              <a 
                href="#app-store" 
                className="flex items-center bg-gradient-to-r from-black to-gray-900 border border-[#00E834]/30 rounded-xl px-4 py-2 text-white hover:bg-[#00E834]/10 transition-all backdrop-blur-sm"
              >
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                </svg>
                App Store
              </a>
              <a 
                href="#google-play"
                className="flex items-center bg-gradient-to-r from-black to-gray-900 border border-[#00E834]/30 rounded-xl px-4 py-2 text-white hover:bg-[#00E834]/10 transition-all backdrop-blur-sm"
              >
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                </svg>
                Google Play
              </a>
            </div>
          </div>

          {/* Mobile spacer */}
          <div className="order-3 sm:hidden">
            <div className="w-10"></div>
          </div>
        </div>

        {/* Mobile Menu Dropdown Futuriste */}
        <div className={`sm:hidden transition-all duration-500 overflow-hidden ${mobileMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}`}>
          <nav className="flex flex-col px-6 pb-6 bg-gradient-to-br from-black via-gray-900 to-black border-t border-[#00E834]/30">
            {navigationItems.map((item) => (
              <div key={item.name}>
                <a 
                  href={item.href} 
                  className="flex items-center justify-between text-white hover:text-[#00E834] transition-colors font-bold py-4 border-b border-[#00E834]/20"
                >
                  {item.name}
                  {item.hasDropdown && <ChevronDown className="w-4 h-4" />}
                </a>
                {item.hasDropdown && (
                  <div className="ml-4 pb-2">
                    {item.dropdownItems?.map((dropdownItem) => (
                      <a
                        key={dropdownItem.name}
                        href={dropdownItem.href}
                        className="block text-gray-400 hover:text-[#00E834] transition-colors py-2 text-sm"
                      >
                        {dropdownItem.name}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
            
            {/* Mobile Controls */}
            <div className="pt-6 space-y-4">
              {/* Language Selector Mobile */}
              <div className="flex items-center justify-between">
                <span className="text-white font-bold">Language</span>
                <select className="bg-black border border-[#00E834]/30 text-white rounded-lg px-3 py-2">
                  <option value="en">🇺🇸 English</option>
                  <option value="fr">🇫🇷 Français</option>
                  <option value="es">🇪🇸 Español</option>
                </select>
              </div>

              {/* User Actions Mobile */}
              <div className="flex flex-col space-y-3">
                <a href="#login" className="bg-gradient-to-r from-[#00E834] to-green-600 text-black font-black py-3 px-6 rounded-xl text-center">
                  SIGN IN
                </a>
                <a href="#register" className="border border-[#00E834] text-[#00E834] font-black py-3 px-6 rounded-xl text-center hover:bg-[#00E834]/10 transition-all">
                  CREATE ACCOUNT
                </a>
              </div>

              {/* Mobile App Store Buttons */}
              <div className="flex flex-col space-y-3 pt-4">
                <a 
                  href="#app-store" 
                  className="flex items-center justify-center bg-gradient-to-r from-black to-gray-900 border border-[#00E834]/30 rounded-xl px-4 py-3 text-white"
                >
                  <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                  </svg>
                  App Store
                </a>
                <a 
                  href="#google-play"
                  className="flex items-center justify-center bg-gradient-to-r from-black to-gray-900 border border-[#00E834]/30 rounded-xl px-4 py-3 text-white"
                >
                  <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                  </svg>
                  Google Play
                </a>
              </div>
            </div>
          </nav>
        </div>
      </header>

      <div 
        className="relative w-full h-screen min-h-[800px] max-h-[1200px] pb-16 overflow-hidden pt-24"
        style={{
          background: `
            radial-gradient(ellipse at top, rgba(0, 232, 52, 0.05) 0%, transparent 50%),
            radial-gradient(ellipse at bottom, rgba(0, 232, 52, 0.03) 0%, transparent 50%),
            linear-gradient(135deg, #000000 0%, #111111 50%, #000000 100%)
          `
        }}
      >
        <div className="absolute inset-0 opacity-5">
          <div 
            className="w-full h-full"
            style={{
              backgroundImage: `
                linear-gradient(rgba(0, 232, 52, 0.1) 1px, transparent 1px),
                linear-gradient(90deg, rgba(0, 232, 52, 0.1) 1px, transparent 1px)
              `,
              backgroundSize: '100px 100px'
            }}
          />
        </div>

        <div 
          className="absolute inset-0 bg-cover bg-center transition-opacity duration-1000"
          style={{ 
            backgroundImage: `url(${currentSlide.image.src})`,
            backgroundColor: 'rgba(0,0,0,0.7)',
            backgroundBlendMode: 'overlay'
          }}
        />

        <div className="relative z-10 flex flex-col justify-center items-center h-full px-4 sm:px-6 text-center pt-16 sm:pt-20">
          <div className={`max-w-6xl transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`} style={{ transitionDelay: '300ms' }}>
            
            <div className="bg-gradient-to-r from-black via-gray-900 to-black border border-[#00E834] px-4 py-2 rounded-xl shadow-lg backdrop-blur-sm mb-6 inline-block">
              <div className="flex items-center justify-center space-x-2">
                <div className="w-2 h-2 bg-[#00E834] rounded-full animate-pulse shadow-lg">
                  <div className="w-full h-full bg-[#00E834] rounded-full animate-ping opacity-75"></div>
                </div>
                <span className="text-[#00E834] font-black text-xs tracking-wider">REVOLUTIONARY FARMING PLATFORM</span>
              </div>
            </div>

            <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-4 leading-tight tracking-wide">
              <span 
                className="block"
                style={{ 
                  color: 'transparent',
                  backgroundImage: 'linear-gradient(45deg, #00E834, #FFFFFF, #00E834)',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  textShadow: '0 0 20px rgba(0, 232, 52, 0.5)'
                }}
              >
                {currentSlide.title.split(' & ')[0]}
              </span>
              <span className="block mt-1 text-white">
                &amp; {currentSlide.title.includes('INSTANTLY') ? 
                  <>GET PAID <span className="text-[#00E834]">INSTANTLY</span></> : 
                  currentSlide.title.split(' & ')[1]}
              </span>
            </h1>
            
            <p className="text-white/90 text-sm sm:text-base md:text-lg max-w-3xl mx-auto mt-4 sm:mt-6 leading-relaxed font-normal">
              {currentSlide.description}
            </p>

            <div className="mt-8 sm:mt-10 flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-6">
              <button 
                className="w-full md:w-auto bg-gradient-to-r from-[#00E834] to-green-600 hover:from-green-600 hover:to-[#00E834] text-black font-black py-3 sm:py-4 px-6 sm:px-10 rounded-xl transition-all transform hover:scale-105 hover:shadow-lg hover:shadow-[#00E834]/30 text-base tracking-wide"
              >
                START SELLING TODAY
              </button>
              <button 
                className="flex items-center text-white hover:text-[#00E834] transition-colors group"
              >
                <div className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-black/80 to-gray-900/80 border border-[#00E834]/50 mr-3 group-hover:bg-[#00E834]/20 transition-all backdrop-blur-sm">
                  <Play className="w-4 h-4 sm:w-5 h-5 ml-1" />
                </div>
                <span className="font-bold text-base tracking-wide">WATCH DEMO</span>
              </button>
            </div>
          </div>
        </div>

        <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
          {slides.map((slide) => (
            <button
              key={slide.id}
              onClick={() => setActiveSlide(slide.id)}
              className={`relative h-2.5 rounded-full transition-all duration-500 ${
                activeSlide === slide.id 
                  ? 'bg-[#00E834] w-10 sm:w-14 shadow-lg shadow-[#00E834]/50' 
                  : 'bg-white/30 w-7 sm:w-9 hover:bg-white/50'
              }`}
              aria-label={`Go to slide ${slide.id + 1}`}
            >
              {activeSlide === slide.id && (
                <div className="absolute inset-0 bg-[#00E834] rounded-full animate-ping opacity-50"></div>
              )}
            </button>
          ))}
        </div>

        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1.5 h-1.5 bg-[#00E834] rounded-full opacity-30"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animation: `float ${8 + i * 0.5}s infinite ease-in-out`,
                animationDelay: `${i * 0.4}s`
              }}
            />
          ))}
        </div>

        <div className="absolute top-1/4 left-8 w-24 h-px bg-gradient-to-r from-transparent via-[#00E834] to-transparent opacity-60"></div>
        <div className="absolute bottom-1/4 right-8 w-24 h-px bg-gradient-to-r from-transparent via-[#00E834] to-transparent opacity-60"></div>
        <div className="absolute top-1/2 left-4 w-px h-20 bg-gradient-to-b from-transparent via-[#00E834] to-transparent opacity-40"></div>
        <div className="absolute top-1/2 right-4 w-px h-20 bg-gradient-to-b from-transparent via-[#00E834] to-transparent opacity-40"></div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px) translateX(0px) scale(1);
            opacity: 0.3;
          }
          50% {
            transform: translateY(-40px) translateX(20px) scale(1.2);
            opacity: 0.7;
          }
        }
      `}</style>
    </>
  );
}