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

export default function MarketInsight() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedTimeframe, setSelectedTimeframe] = useState('24h');
  const [searchQuery, setSearchQuery] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [lastUpdate, setLastUpdate] = useState(new Date());

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
    { id: 'all', name: 'Tous marchés', icon: Globe },
    { id: 'cereals', name: 'Céréales', icon: Wheat },
    { id: 'livestock', name: 'Bétail', icon: Beef },
    { id: 'fruits', name: 'Fruits', icon: Apple },
    { id: 'dairy', name: 'Produits laitiers', icon: Milk },
    { id: 'seafood', name: 'Fruits de mer', icon: Fish }
  ];

  const timeframes = [
    { id: '1h', name: '1H' },
    { id: '24h', name: '24H' },
    { id: '7d', name: '7J' },
    { id: '30d', name: '30J' },
    { id: '1y', name: '1A' }
  ];

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

  const filteredData = marketData.filter(item => {
    const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         item.symbol.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 20
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div className="text-center mb-12" variants={itemVariants}>
            <div className="inline-flex items-center space-x-2 bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
              <div className="w-2 h-2 bg-emerald-600 rounded-full animate-pulse"></div>
              <span>Données en temps réel</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Analyse de marché agricole
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Plateforme de trading de matières premières agricoles en temps réel avec insights alimentés par IA et données de marché en direct.
            </p>
          </motion.div>

          <motion.div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12" variants={itemVariants}>
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
              <div className="text-2xl font-bold text-gray-900">
                {(totalMarketCap / 1000000).toFixed(1)}M€
              </div>
              <div className="text-sm text-gray-600">Capitalisation totale</div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
              <div className="text-2xl font-bold text-gray-900">
                {(totalVolume / 1000000).toFixed(1)}M
              </div>
              <div className="text-sm text-gray-600">Volume 24H</div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
              <div className="text-2xl font-bold text-emerald-600">{gainers}</div>
              <div className="text-sm text-gray-600">En hausse</div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
              <div className="text-2xl font-bold text-red-500">{losers}</div>
              <div className="text-sm text-gray-600">En baisse</div>
            </div>
          </motion.div>

          <motion.div className="bg-white rounded-xl shadow-sm border border-gray-200 mb-8" variants={itemVariants}>
            <div className="p-6 border-b border-gray-200">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div className="flex items-center space-x-4">
                  <h2 className="text-xl font-semibold text-gray-900">Marchés agricoles</h2>
                  <div className="text-sm text-gray-500">
                    Dernière mise à jour: {lastUpdate.toLocaleTimeString()}
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                    <input
                      type="text"
                      placeholder="Rechercher..."
                      className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                    />
                  </div>

                  <button
                    onClick={refreshData}
                    className={`px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors flex items-center space-x-2 ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
                    disabled={isLoading}
                  >
                    <RefreshCw className={`w-4 h-4 ${isLoading ? 'animate-spin' : ''}`} />
                    <span>Actualiser</span>
                  </button>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mt-4">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setActiveCategory(category.id)}
                    className={`flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                      activeCategory === category.id
                        ? 'bg-emerald-600 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    <category.icon className="w-4 h-4" />
                    <span>{category.name}</span>
                  </button>
                ))}
              </div>

              <div className="flex space-x-1 mt-4">
                {timeframes.map((timeframe) => (
                  <button
                    key={timeframe.id}
                    onClick={() => setSelectedTimeframe(timeframe.id)}
                    className={`px-3 py-1 rounded text-sm font-medium transition-colors ${
                      selectedTimeframe === timeframe.id
                        ? 'bg-emerald-600 text-white'
                        : 'text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    {timeframe.name}
                  </button>
                ))}
              </div>
            </div>

            <div className="p-6">
              <div className="grid gap-4">
                {filteredData.map((item) => {
                  const IconComponent = item.icon;
                  return (
                    <motion.div
                      key={item.id}
                      className="flex items-center justify-between p-4 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors"
                      whileHover={{ scale: 1.01 }}
                    >
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center">
                          <IconComponent className="w-6 h-6 text-emerald-600" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-900">{item.name}</h3>
                          <p className="text-sm text-gray-500">{item.symbol}</p>
                        </div>
                      </div>

                      <div className="text-right">
                        <div className="font-semibold text-gray-900">${item.price.toFixed(2)}</div>
                        <div className={`flex items-center space-x-1 text-sm ${
                          item.change >= 0 ? 'text-emerald-600' : 'text-red-500'
                        }`}>
                          {item.change >= 0 ? (
                            <TrendingUp className="w-4 h-4" />
                          ) : (
                            <TrendingDown className="w-4 h-4" />
                          )}
                          <span>{item.changePercent.toFixed(1)}%</span>
                        </div>
                      </div>

                      <div className="text-right text-sm text-gray-500">
                        <div>Vol: {(item.volume / 1000).toFixed(0)}K</div>
                        <div>Cap: ${(item.marketCap / 1000000).toFixed(1)}M</div>
                      </div>

                      <div className="w-20 h-10">
                        <svg viewBox="0 0 80 40" className="w-full h-full">
                          <polyline
                            fill="none"
                            stroke={item.change >= 0 ? "#10b981" : "#ef4444"}
                            strokeWidth="2"
                            points={item.trend.map((price, index) => {
                              const x = (index / (item.trend.length - 1)) * 80;
                              const minPrice = Math.min(...item.trend);
                              const maxPrice = Math.max(...item.trend);
                              const y = 40 - ((price - minPrice) / (maxPrice - minPrice)) * 40;
                              return `${x},${y}`;
                            }).join(' ')}
                          />
                        </svg>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}