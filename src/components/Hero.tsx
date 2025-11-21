'use client';

import { useState, useEffect } from 'react';
import { Menu, X, Play, User } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

export default function Hero() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const slides = [
    {
      title: "Vendez directement aux acheteurs",
      highlight: "Paiement instantané",
      description: "Farms to Market connecte les agriculteurs et les acheteurs avec une plateforme sécurisée, transparente et propulsée par l’IA."
    },
    {
      title: "Développez votre exploitation",
      highlight: "Analyses intelligentes",
      description: "Accédez à de nouveaux marchés et maximisez votre rentabilité grâce à des données prédictives et une gestion automatisée."
    },
    {
      title: "Transactions sécurisées",
      highlight: "100 % traçables",
      description: "Prix justes, paiements immédiats et contrats intelligents pour une confiance totale entre producteurs et acheteurs."
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Header fixe */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-white/80 backdrop-blur-lg shadow-sm border-b border-gray-100'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
          {/* Logo */}
          <div className="text-2xl font-bold">
            <span className="text-emerald-600">FARMS</span>
            <span className="text-gray-900">.TO</span>
            <span className="text-gray-700">MARKET</span>
          </div>

          {/* Navigation Desktop */}
          <nav className="hidden lg:flex items-center space-x-10">
            {['À propos', 'Fonctionnalités', 'Solutions', 'Marketplace', 'Témoignages'].map((item) => (
              <a
                key={item}
                href="#"
                className="text-gray-700 hover:text-emerald-600 font-medium transition-colors"
              >
                {item}
              </a>
            ))}
          </nav>

          {/* Actions Desktop */}
          <div className="hidden lg:flex items-center space-x-6">
            <button className="text-gray-700 hover:text-emerald-600 font-medium flex items-center">
              <User className="w-4 h-4 mr-2" />
              Connexion
            </button>
            <button className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold px-6 py-3 rounded-xl transition-all hover:shadow-lg">
              S’inscrire gratuitement
            </button>
          </div>

          {/* Bouton Mobile */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden text-gray-800"
          >
            {mobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>
      </header>

      {/* Hero Principal */}
      <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
        {/* Image de fond */}
        <Image
          src="/images/home2.png"
          alt="Exploitation agricole moderne"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />

        {/* Contenu */}
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center text-white">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeSlide}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="space-y-8"
            >
              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-5 py-2 rounded-full border border-white/20">
                <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></span>
                <span className="text-sm font-medium">Plateforme agricole de nouvelle génération</span>
              </div>

              {/* Titre */}
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                {slides[activeSlide].title}
                <br />
                <span className="text-emerald-400">{slides[activeSlide].highlight}</span>
              </h1>

              {/* Description */}
              <p className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
                {slides[activeSlide].description}
              </p>

              {/* CTA */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-10">
                <button className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-4 px-10 rounded-2xl transition-all hover:scale-105 shadow-xl">
                  Commencer gratuitement
                </button>
                <button className="flex items-center gap-3 text-white hover:text-emerald-300 font-medium backdrop-blur-md px-8 py-4 rounded-2xl border border-white/20 hover:border-emerald-400/50 transition-all">
                  <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center backdrop-blur-md">
                    <Play className="w-6 h-6 ml-1" fill="white" />
                  </div>
                  Voir la démo
                </button>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Dots */}
          <div className="flex justify-center gap-3 mt-16">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveSlide(i)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === activeSlide
                    ? 'bg-emerald-400 w-12'
                    : 'bg-white/40 w-2 hover:bg-white/70'
                }
              `}
              />
            ))}
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
          <div className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-bounce" />
          </div>
        </div>
      </section>

      {/* Menu Mobile Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="fixed inset-0 bg-white z-50 lg:hidden"
          >
            <div className="flex flex-col h-full px-8 py-20">
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="absolute top-8 right-8"
              >
                <X className="w-8 h-8 text-gray-800" />
              </button>

              <nav className="flex flex-col space-y-8 text-2xl font-medium text-gray-900 mt-20">
                {['À propos', 'Fonctionnalités', 'Solutions', 'Marketplace', 'Témoignages'].map((item) => (
                  <a key={item} href="#" className="hover:text-emerald-600 transition-colors">
                    {item}
                  </a>
                ))}
              </nav>

              <div className="mt-auto space-y-4">
                <button className="w-full bg-emerald-600 text-white font-bold py-4 rounded-2xl">
                  S’inscrire
                </button>
                <button className="w-full border border-gray-300 text-gray-800 font-medium py-4 rounded-2xl">
                  Se connecter
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}