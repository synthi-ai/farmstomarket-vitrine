import { useState, useEffect } from 'react';
import { Play, Menu, X } from 'lucide-react';

// Placeholder for farm background image
const farmBackground = {
  src: "http://20.80.106.250:9001/api/v1/download-shared-object/aHR0cDovLzEyNy4wLjAuMTo5MDAwL3ZpdHJpbmUvaG9tZTIucG5nP1gtQW16LUFsZ29yaXRobT1BV1M0LUhNQUMtU0hBMjU2JlgtQW16LUNyZWRlbnRpYWw9UU1YVko4OVNLMVo2R1BFM09JRUclMkYyMDI1MDcxNSUyRnVzLWVhc3QtMSUyRnMzJTJGYXdzNF9yZXF1ZXN0JlgtQW16LURhdGU9MjAyNTA3MTVUMDIxNTQzWiZYLUFtei1FeHBpcmVzPTQzMTk5JlgtQW16LVNlY3VyaXR5LVRva2VuPWV5SmhiR2NpT2lKSVV6VXhNaUlzSW5SNWNDSTZJa3BYVkNKOS5leUpoWTJObGMzTkxaWGtpT2lKUlRWaFdTamc1VTBzeFdqWkhVRVV6VDBsRlJ5SXNJbVY0Y0NJNk1UYzFNalUxTXpreE9Td2ljR0Z5Wlc1MElqb2liV2x1YVc4aWZRLnNpTmlDdlE5VXd4T05fWUdiOHI4NHhvYl9RbVZNQnpvT1dnUi1TZ3JtdkxRRlppOXhXOUtGRG1tamlqQTlOSjZhaEFPM3RzT25wUGJDRE5xa2liNmVnJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCZ2ZXJzaW9uSWQ9bnVsbCZYLUFtei1TaWduYXR1cmU9NDY4ZWFlZjRiODBjYTUzNmMyZTc4MDYxZWFlN2YzNGIwZjQ4YWQyMGY2N2E0Yjg0OWU0MDk0MGJiNmYzOTQzOA",
  //src: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2832&q=80"
};

export default function Hero() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  // Animation on mount
  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev === 2 ? 0 : prev + 1));
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  // Scroll listener to change header background
  useEffect(() => {
    const handleScroll = () => {
      // Change background when scrolled past a threshold (e.g., 50px)
      setScrolled(window.scrollY > 50);
    };

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);
    
    // Initial check
    handleScroll();
    
    // Clean up
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Définir les slides avec leurs propres images
  const slides = [
    {
      id: 0,
      image: farmBackground,
      title: "Sell Directly to Buyers & Get Paid Instantly",
      description: "Farms to Market connects farmers and buyers with AI-powered pricing, secure payments, and real-time delivery tracking."
    },
    {
      id: 1,
      image: farmBackground, 
      title: "Grow Your Farm Business",
      description: "Access new markets and increase your profitability with our innovative platform."
    },
    {
      id: 2,
      image: farmBackground,
      title: "Transparent & Secure Transactions",
      description: "Our platform ensures fair pricing and secure payments for both farmers and buyers."
    }
  ];

  const currentSlide = slides[activeSlide];

  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <>
      {/* Fixed Header with dynamic background on scroll */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled || mobileMenuOpen ? 'bg-black' : 'bg-transparent'}`}>
        <div className={`flex justify-between items-center px-4 sm:px-6 py-4 sm:py-6 max-w-7xl mx-auto transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'}`}>
          {/* Logo - centered on mobile, left on desktop */}
          <div className="text-white font-bold text-xl order-2 sm:order-1 mx-auto sm:mx-0">
            <span className="text-green-400">FARMS</span>
            <span className="text-xs align-text-top">to</span>
            <span>MARKET</span>
          </div>

          {/* Mobile menu button */}
          <button 
            className="order-1 sm:hidden text-white p-2"
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden sm:flex space-x-8 order-1">
            <a href="#about" className="text-white hover:text-green-400 transition-colors font-medium">About</a>
            <a href="#features" className="text-white hover:text-green-400 transition-colors font-medium">Features</a>
            <a href="#faqs" className="text-white hover:text-green-400 transition-colors font-medium">FAQs</a>
            <a href="#testimonials" className="text-white hover:text-green-400 transition-colors font-medium">Testimonials</a>
          </nav>

          {/* App Store Buttons - hidden on mobile, shown on desktop */}
          <div className="hidden sm:flex space-x-4 order-3">
            <a 
              href="#app-store" 
              className="flex items-center bg-black bg-opacity-30 border border-white/30 rounded-lg px-4 py-2 text-white hover:bg-opacity-50 transition-all"
            >
              <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
              </svg>
              App Store
            </a>
            <a 
              href="#google-play"
              className="flex items-center bg-black bg-opacity-30 border border-white/30 rounded-lg px-4 py-2 text-white hover:bg-opacity-50 transition-all"
            >
              <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
              </svg>
              Google Play
            </a>
          </div>

          {/* Mobile menu button on the right */}
          <div className="order-3 sm:hidden">
            {/* This is just a spacer to balance the layout */}
            <div className="w-10"></div>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        <div className={`sm:hidden transition-all duration-300 overflow-hidden ${mobileMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}`}>
          <nav className="flex flex-col px-6 pb-6 bg-black">
            <a href="#about" className="text-white hover:text-green-400 transition-colors font-medium py-3 border-b border-white/10">About</a>
            <a href="#features" className="text-white hover:text-green-400 transition-colors font-medium py-3 border-b border-white/10">Features</a>
            <a href="#faqs" className="text-white hover:text-green-400 transition-colors font-medium py-3 border-b border-white/10">FAQs</a>
            <a href="#testimonials" className="text-white hover:text-green-400 transition-colors font-medium py-3 border-b border-white/10">Testimonials</a>
            
            {/* Mobile App Store Buttons */}
            <div className="flex flex-col space-y-3 mt-6">
              <a 
                href="#app-store" 
                className="flex items-center justify-center bg-black bg-opacity-30 border border-white/30 rounded-lg px-4 py-3 text-white"
              >
                <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                </svg>
                App Store
              </a>
              <a 
                href="#google-play"
                className="flex items-center justify-center bg-black bg-opacity-30 border border-white/30 rounded-lg px-4 py-3 text-white"
              >
                <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                </svg>
                Google Play
              </a>
            </div>
          </nav>
        </div>
      </header>

      {/* Hero Section - Extended height to 800-1200px range */}
      <div className="relative w-full h-screen min-h-[800px] max-h-[1200px] pb-16 overflow-hidden bg-black pt-24">
        {/* Background image */}
        <div 
          className="absolute inset-0 bg-cover bg-center transition-opacity duration-1000"
          style={{ 
            backgroundImage: `url(${currentSlide.image.src})`,
            backgroundColor: 'rgba(0,0,0,0.5)',
            backgroundBlendMode: 'overlay'
          }}
        >
        </div>

        {/* Hero content */}
        <div className="relative z-10 flex flex-col justify-center items-center h-full px-4 sm:px-6 text-center pt-16 sm:pt-20">
          <div className={`max-w-5xl transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`} style={{ transitionDelay: '300ms' }}>
            <h1 className="text-white text-3xl sm:text-5xl md:text-7xl font-bold mb-4">
              {currentSlide.title.split(' & ')[0]}<br />
              <span className="inline-block mt-2">&amp; {currentSlide.title.split(' & ')[1]?.includes('Instantly') ? 
                <>Get Paid <span className="text-green-400">Instantly</span></> : 
                currentSlide.title.split(' & ')[1]}
              </span>
            </h1>
            
            <p className="text-white/90 text-base sm:text-lg md:text-xl max-w-3xl mx-auto mt-4 sm:mt-6">
              {currentSlide.description}
            </p>

            <div className="mt-8 sm:mt-10 flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-6">
              <button 
                className="w-full md:w-auto bg-green-400 hover:bg-green-500 text-black font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-full transition-all transform hover:scale-105"
              >
                Start Selling Today
              </button>
              <button 
                className="flex items-center text-white hover:text-green-400 transition-colors"
              >
                <div className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-black bg-opacity-50 border border-white/50 mr-3">
                  <Play className="w-4 h-4 sm:w-5 sm:h-5 ml-1" />
                </div>
                Watch Demo
              </button>
            </div>
          </div>
        </div>

        {/* Pagination dots */}
        <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
          {slides.map((slide) => (
            <button
              key={slide.id}
              onClick={() => setActiveSlide(slide.id)}
              className={`w-6 sm:w-8 h-2 rounded-full transition-all ${
                activeSlide === slide.id ? 'bg-green-400 w-10 sm:w-12' : 'bg-white/50 hover:bg-white/70'
              }`}
              aria-label={`Go to slide ${slide.id + 1}`}
            />
          ))}
        </div>
      </div>
    </>
  );
}