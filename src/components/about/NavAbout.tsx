"use client";

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
  Shield
} from 'lucide-react';

export function MarketNavbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('market');

  const navigationLinks = [
    {
      id: 'market',
      name: 'Marché',
      icon: Home,
      href: '/market',
      description: 'Données de marché en temps réel'
    },
    {
      id: 'analysis',
      name: 'Analyses',
      icon: Brain,
      href: '/analysis',
      description: 'Insights alimentés par IA'
    },
    {
      id: 'portfolio',
      name: 'Portefeuille',
      icon: Wallet,
      href: '/portfolio',
      description: 'Gestion de positions'
    },
    {
      id: 'charts',
      name: 'Graphiques',
      icon: BarChart3,
      href: '/charts',
      description: 'Analyse technique avancée'
    },
    {
      id: 'alerts',
      name: 'Alertes',
      icon: Bell,
      href: '/alerts',
      description: 'Notifications de marché'
    }
  ];

  const userMenuItems = [
    { icon: User, label: 'Profil', action: () => {} },
    { icon: Settings, label: 'Paramètres', action: () => {} },
    { icon: Shield, label: 'Sécurité', action: () => {} },
    { icon: LogOut, label: 'Déconnexion', action: () => {} }
  ];

  return (
    <motion.nav
      className="bg-white border-b border-gray-200 shadow-sm sticky top-0 z-50"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-4">
            <motion.div
              className="flex items-center space-x-2"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <div className="w-8 h-8 bg-emerald-600 rounded-lg flex items-center justify-center">
                <Activity className="w-5 h-5 text-white" />
              </div>
              <div className="hidden sm:block">
                <h1 className="text-xl font-bold text-gray-900">
                  <span className="text-emerald-600">Farms</span>ToMarket
                </h1>
                <div className="text-xs text-gray-500">Agricultural Trading Platform</div>
              </div>
            </motion.div>
          </div>

          {/* Navigation Desktop */}
          <div className="hidden lg:flex items-center space-x-1">
            {navigationLinks.map((link) => (
              <motion.button
                key={link.id}
                onClick={() => setActiveSection(link.id)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  activeSection === link.id
                    ? 'bg-emerald-100 text-emerald-700 border border-emerald-200'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <link.icon className="w-4 h-4" />
                <span>{link.name}</span>
              </motion.button>
            ))}
          </div>

          {/* User Menu & Mobile Menu */}
          <div className="flex items-center space-x-4">
            {/* Market Status Indicator */}
            <div className="hidden md:flex items-center space-x-2 px-3 py-1 bg-emerald-100 rounded-full">
              <div className="w-2 h-2 bg-emerald-600 rounded-full animate-pulse"></div>
              <span className="text-xs font-medium text-emerald-700">Marché ouvert</span>
            </div>

            {/* User Profile Menu */}
            <div className="relative">
              <button
                onClick={() => setUserMenuOpen(!userMenuOpen)}
                className="flex items-center space-x-2 p-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <div className="w-8 h-8 bg-emerald-600 rounded-full flex items-center justify-center">
                  <User className="w-4 h-4 text-white" />
                </div>
                <ChevronDown className="w-4 h-4" />
              </button>

              <AnimatePresence>
                {userMenuOpen && (
                  <motion.div
                    className="absolute right-0 mt-2 w-48 bg-white rounded-xl shadow-lg border border-gray-200 py-2"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                  >
                    {userMenuItems.map((item, index) => (
                      <button
                        key={index}
                        onClick={item.action}
                        className="w-full flex items-center space-x-3 px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
                      >
                        <item.icon className="w-4 h-4" />
                        <span>{item.label}</span>
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              className="lg:hidden border-t border-gray-200 py-4"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="space-y-2">
                {navigationLinks.map((link) => (
                  <motion.button
                    key={link.id}
                    onClick={() => {
                      setActiveSection(link.id);
                      setMobileMenuOpen(false);
                    }}
                    className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                      activeSection === link.id
                        ? 'bg-emerald-100 text-emerald-700'
                        : 'text-gray-700 hover:bg-gray-50'
                    }`}
                    whileHover={{ x: 4 }}
                    transition={{ duration: 0.2 }}
                  >
                    <link.icon className="w-5 h-5" />
                    <div className="text-left">
                      <div>{link.name}</div>
                      <div className="text-xs text-gray-500">{link.description}</div>
                    </div>
                  </motion.button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}