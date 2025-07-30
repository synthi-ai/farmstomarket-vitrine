/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  TrendingUp, 
  TrendingDown, 
  Globe, 
  BarChart3,
  RefreshCw,
  Search,
  DollarSign,
  Wheat,
  Beef,
  Fish,
  Milk,
  Apple
} from 'lucide-react';

// Types pour les données de marché
interface MarketData {
  id: string;
  name: string;
  symbol: string;
  price: number;
  change: number;
  changePercent: number;
  volume: number;
  marketCap: number;
  category: 'cereals' | 'livestock' | 'fruits' | 'vegetables' | 'dairy' | 'seafood';
  icon: any;
  trend: number[];
}

interface DotStyle {
  left: string;
  top: string;
  animation: string;
  animationDelay: string;
}

export default function MarketInsight() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedTimeframe, setSelectedTimeframe] = useState('24h');
  const [searchQuery, setSearchQuery] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [dotStyles, setDotStyles] = useState<DotStyle[]>([]);
  const [lastUpdate, setLastUpdate] = useState(new Date());

  // Simulation des données de marché en temps réel
  const [marketData, setMarketData] = useState<MarketData[]>([
    {
      id: '1',
      name: 'Wheat',
      symbol: 'WHT',
      price: 7.45,
      change: 0.23,
      changePercent: 3.2,
      volume: 1250000,
      marketCap: 45000000,
      category: 'cereals',
      icon: Wheat,
      trend: [7.20, 7.25, 7.30, 7.35, 7.40, 7.45, 7.42, 7.45]
    },
    {
      id: '2',
      name: 'Corn',
      symbol: 'CRN',
      price: 6.78,
      change: -0.15,
      changePercent: -2.2,
      volume: 980000,
      marketCap: 38000000,
      category: 'cereals',
      icon: Wheat,
      trend: [6.95, 6.90, 6.85, 6.80, 6.78, 6.75, 6.78, 6.78]
    },
    {
      id: '3',
      name: 'Beef Cattle',
      symbol: 'BEEF',
      price: 142.50,
      change: 2.30,
      changePercent: 1.6,
      volume: 45000,
      marketCap: 125000000,
      category: 'livestock',
      icon: Beef,
      trend: [140.20, 141.00, 142.00, 142.50, 142.30, 142.50, 142.45, 142.50]
    },
    {
      id: '4',
      name: 'Milk',
      symbol: 'MLK',
      price: 18.90,
      change: 0.45,
      changePercent: 2.4,
      volume: 780000,
      marketCap: 22000000,
      category: 'dairy',
      icon: Milk,
      trend: [18.45, 18.50, 18.60, 18.70, 18.80, 18.85, 18.90, 18.90]
    },
    {
      id: '5',
      name: 'Salmon',
      symbol: 'SAL',
      price: 8.25,
      change: -0.35,
      changePercent: -4.1,
      volume: 230000,
      marketCap: 15000000,
      category: 'seafood',
      icon: Fish,
      trend: [8.60, 8.55, 8.45, 8.35, 8.30, 8.25, 8.28, 8.25]
    },
    {
      id: '6',
      name: 'Apples',
      symbol: 'APL',
      price: 1.85,
      change: 0.12,
      changePercent: 6.9,
      volume: 560000,
      marketCap: 8500000,
      category: 'fruits',
      icon: Apple,
      trend: [1.73, 1.75, 1.78, 1.80, 1.82, 1.84, 1.85, 1.85]
    }
  ]);

  const categories = [
    { id: 'all', name: 'ALL MARKETS', icon: Globe },
    { id: 'cereals', name: 'CEREALS', icon: Wheat },
    { id: 'livestock', name: 'LIVESTOCK', icon: Beef },
    { id: 'fruits', name: 'FRUITS', icon: Apple },
    { id: 'dairy', name: 'DAIRY', icon: Milk },
    { id: 'seafood', name: 'SEAFOOD', icon: Fish }
  ];

  const timeframes = [
    { id: '1h', name: '1H' },
    { id: '24h', name: '24H' },
    { id: '7d', name: '7D' },
    { id: '30d', name: '30D' },
    { id: '1y', name: '1Y' }
  ];

  // Simulation mise à jour en temps réel
  useEffect(() => {
    const interval = setInterval(() => {
      setMarketData(prev => prev.map(item => {
        const randomChange = (Math.random() - 0.5) * 0.1;
        const newPrice = Math.max(0.01, item.price + randomChange);
        const change = newPrice - item.price;
        const changePercent = (change / item.price) * 100;
        
        return {
          ...item,
          price: newPrice,
          change: change,
          changePercent: changePercent,
          trend: [...item.trend.slice(1), newPrice]
        };
      }));
      setLastUpdate(new Date());
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  // Particules flottantes
  useEffect(() => {
    const newDotStyles = Array.from({ length: 15 }).map((_, i) => ({
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      animation: `float ${10 + i * 0.5}s infinite ease-in-out`,
      animationDelay: `${i * 0.4}s`
    }));
    setDotStyles(newDotStyles);
  }, []);

  // Filtrage des données
  const filteredData = marketData.filter(item => {
    const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         item.symbol.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Calcul des statistiques globales
  const totalMarketCap = marketData.reduce((sum, item) => sum + item.marketCap, 0);
  const totalVolume = marketData.reduce((sum, item) => sum + item.volume, 0);
  const gainers = marketData.filter(item => item.change > 0).length;
  const losers = marketData.filter(item => item.change < 0).length;

  const refreshData = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setLastUpdate(new Date());
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Particules flottantes */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        {dotStyles.map((style, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-[#00E834] rounded-full opacity-20"
            style={style}
          />
        ))}
      </div>

      {/* Grille cyberpunk */}
      <div className="fixed inset-0 opacity-[0.02]">
        <div 
          className="w-full h-full"
          style={{
            backgroundImage: `
              linear-gradient(rgba(0, 232, 52, 0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0, 232, 52, 0.3) 1px, transparent 1px)
            `,
            backgroundSize: '80px 80px'
          }}
        />
      </div>

      <div className="relative z-10 pt-20 pb-8">
        {/* Header Section */}
        <div 
          className="px-4 py-12 relative"
          style={{
            background: `
              radial-gradient(ellipse at top, rgba(0, 232, 52, 0.08) 0%, transparent 50%),
              linear-gradient(135deg, #000000 0%, #111111 50%, #000000 100%)
            `
          }}
        >
          <div className="max-w-7xl mx-auto">
            {/* Status Badge */}
            <motion.div 
              className="flex justify-center mb-8"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              <div className="inline-flex items-center space-x-3 bg-gradient-to-r from-black via-gray-900 to-black border border-[#00E834] px-6 py-3 rounded-2xl shadow-lg backdrop-blur-sm">
                <div className="w-3 h-3 bg-[#00E834] rounded-full animate-pulse shadow-lg">
                  <div className="w-full h-full bg-[#00E834] rounded-full animate-ping opacity-75"></div>
                </div>
                <span className="text-[#00E834] font-black text-sm tracking-wider">LIVE MARKET DATA</span>
              </div>
            </motion.div>

            {/* Main Title */}
            <motion.div 
              className="text-center mb-12"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-6 leading-tight tracking-wide">
                <span 
                  style={{ 
                    color: 'transparent',
                    backgroundImage: 'linear-gradient(45deg, #00E834, #FFFFFF, #00E834)',
                    backgroundClip: 'text',
                    WebkitBackgroundClip: 'text',
                    textShadow: '0 0 30px rgba(0, 232, 52, 0.5)'
                  }}
                >
                  MARKET
                </span>
                <span className="block text-white mt-2">
                  <span className="text-[#00E834]">INSIGHT</span>
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed font-medium">
                Real-time agricultural commodity trading platform with <span className="text-[#00E834] font-black">AI-powered insights</span> and live market data
              </p>
            </motion.div>

            {/* Quick Stats */}
            <motion.div 
              className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
            >
              {[
                { 
                  label: 'TOTAL MARKET CAP', 
                  value: `$${(totalMarketCap / 1000000).toFixed(1)}M`,
                  icon: DollarSign,
                  color: 'from-[#00E834] to-green-600'
                },
                { 
                  label: 'TOTAL VOLUME', 
                  value: `${(totalVolume / 1000000).toFixed(1)}M`,
                  icon: BarChart3,
                  color: 'from-blue-500 to-cyan-500'
                },
                { 
                  label: 'GAINERS', 
                  value: gainers.toString(),
                  icon: TrendingUp,
                  color: 'from-green-500 to-emerald-500'
                },
                { 
                  label: 'LOSERS', 
                  value: losers.toString(),
                  icon: TrendingDown,
                  color: 'from-red-500 to-pink-500'
                }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  className="bg-gradient-to-br from-black/90 via-gray-900/70 to-black/90 border border-[#00E834]/30 rounded-2xl p-6 backdrop-blur-md relative overflow-hidden group hover:border-[#00E834] transition-all duration-500"
                  whileHover={{ y: -5, scale: 1.02 }}
                >
                  <div className={`w-12 h-12 bg-gradient-to-br ${stat.color} rounded-xl flex items-center justify-center mb-4`}>
                    <stat.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-2xl font-black text-white mb-1">
                    {stat.value}
                  </div>
                  <div className="text-xs text-gray-400 font-bold tracking-wider">
                    {stat.label}
                  </div>
                  <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#00E834]/30 to-transparent"></div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Controls Section */}
        <div className="px-4 mb-8">
          <div className="max-w-7xl mx-auto">
            <motion.div 
              className="flex flex-col lg:flex-row gap-6 items-center justify-between"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              {/* Search Bar */}
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search commodities..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-gradient-to-r from-black/80 to-gray-900/80 border border-[#00E834]/30 rounded-xl pl-12 pr-4 py-3 text-white placeholder-gray-400 focus:border-[#00E834] focus:outline-none font-medium backdrop-blur-sm"
                />
              </div>

              {/* Category Filters */}
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setActiveCategory(category.id)}
                    className={`flex items-center px-4 py-2 rounded-xl font-black text-sm tracking-wide transition-all duration-300 ${
                      activeCategory === category.id
                        ? 'bg-gradient-to-r from-[#00E834] to-green-600 text-black shadow-lg'
                        : 'bg-gray-900/50 text-white border border-[#00E834]/30 hover:bg-[#00E834]/10 hover:border-[#00E834]'
                    }`}
                  >
                    <category.icon className="w-4 h-4 mr-2" />
                    {category.name}
                  </button>
                ))}
              </div>

              {/* Timeframe & Controls */}
              <div className="flex items-center gap-4">
                <div className="flex rounded-xl bg-gray-900/50 border border-[#00E834]/30 overflow-hidden">
                  {timeframes.map((timeframe) => (
                    <button
                      key={timeframe.id}
                      onClick={() => setSelectedTimeframe(timeframe.id)}
                      className={`px-4 py-2 font-black text-sm transition-all ${
                        selectedTimeframe === timeframe.id
                          ? 'bg-[#00E834] text-black'
                          : 'text-white hover:bg-[#00E834]/20'
                      }`}
                    >
                      {timeframe.name}
                    </button>
                  ))}
                </div>

                <motion.button
                  onClick={refreshData}
                  disabled={isLoading}
                  className="p-3 bg-gradient-to-r from-[#00E834] to-green-600 rounded-xl text-black hover:from-green-600 hover:to-[#00E834] transition-all disabled:opacity-50"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <RefreshCw className={`w-5 h-5 ${isLoading ? 'animate-spin' : ''}`} />
                </motion.button>
              </div>
            </motion.div>

            {/* Last Update */}
            <motion.div 
              className="text-center mt-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <span className="text-gray-400 text-sm">
                Last updated: {lastUpdate.toLocaleTimeString()}
              </span>
            </motion.div>
          </div>
        </div>

        {/* Market Data Table */}
        <div className="px-4 mb-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              className="bg-gradient-to-br from-black/90 via-gray-900/70 to-black/90 border border-[#00E834]/30 rounded-2xl backdrop-blur-md overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.8 }}
            >
              {/* Table Header */}
              <div className="grid grid-cols-7 gap-4 p-6 border-b border-[#00E834]/30 bg-gradient-to-r from-[#00E834]/5 to-transparent">
                <div className="text-[#00E834] font-black text-sm tracking-wider">COMMODITY</div>
                <div className="text-[#00E834] font-black text-sm tracking-wider text-right">PRICE</div>
                <div className="text-[#00E834] font-black text-sm tracking-wider text-right">24H CHANGE</div>
                <div className="text-[#00E834] font-black text-sm tracking-wider text-right">VOLUME</div>
                <div className="text-[#00E834] font-black text-sm tracking-wider text-right">MARKET CAP</div>
                <div className="text-[#00E834] font-black text-sm tracking-wider text-center">TREND</div>
                <div className="text-[#00E834] font-black text-sm tracking-wider text-center">ACTION</div>
              </div>

              {/* Table Body */}
              <div className="max-h-96 overflow-y-auto">
                {filteredData.map((item, index) => (
                  <motion.div
                    key={item.id}
                    className="grid grid-cols-7 gap-4 p-6 border-b border-[#00E834]/10 hover:bg-[#00E834]/5 transition-all duration-300 group"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    {/* Commodity */}
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-gradient-to-br from-[#00E834] to-green-600 rounded-xl flex items-center justify-center mr-3">
                        <item.icon className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <div className="font-black text-white text-sm">{item.name}</div>
                        <div className="text-gray-400 text-xs font-bold">{item.symbol}</div>
                      </div>
                    </div>

                    {/* Price */}
                    <div className="text-right">
                      <div className="font-black text-white text-lg">${item.price.toFixed(2)}</div>
                    </div>

                    {/* 24H Change */}
                    <div className="text-right">
                      <div className={`font-black text-sm ${item.change >= 0 ? 'text-green-400' : 'text-red-400'}`}>
                        {item.change >= 0 ? '+' : ''}{item.change.toFixed(2)}
                      </div>
                      <div className={`text-xs font-bold ${item.changePercent >= 0 ? 'text-green-400' : 'text-red-400'}`}>
                        {item.changePercent >= 0 ? '+' : ''}{item.changePercent.toFixed(1)}%
                      </div>
                    </div>

                    {/* Volume */}
                    <div className="text-right">
                      <div className="font-black text-white text-sm">
                        {(item.volume / 1000).toFixed(0)}K
                      </div>
                    </div>

                    {/* Market Cap */}
                    <div className="text-right">
                      <div className="font-black text-white text-sm">
                        ${(item.marketCap / 1000000).toFixed(1)}M
                      </div>
                    </div>

                    {/* Trend Chart Mini */}
                    <div className="flex items-center justify-center">
                      <div className="w-20 h-8 relative">
                        <svg className="w-full h-full" viewBox="0 0 80 32">
                          <polyline
                            points={item.trend.map((price, i) => `${i * 10},${32 - (price - Math.min(...item.trend)) / (Math.max(...item.trend) - Math.min(...item.trend)) * 24}`).join(' ')}
                            fill="none"
                            stroke={item.change >= 0 ? "#10B981" : "#EF4444"}
                            strokeWidth="2"
                            className="opacity-80"
                          />
                        </svg>
                      </div>
                    </div>

                    {/* Action */}
                    <div className="flex justify-center">
                      <motion.button
                        className="px-4 py-1 bg-gradient-to-r from-[#00E834] to-green-600 text-black rounded-lg font-black text-xs hover:from-green-600 hover:to-[#00E834] transition-all"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        TRADE
                      </motion.button>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px) translateX(0px) scale(1);
            opacity: 0.2;
          }
          50% {
            transform: translateY(-30px) translateX(15px) scale(1.1);
            opacity: 0.4;
          }
        }
      `}</style>
    </div>
  );
}