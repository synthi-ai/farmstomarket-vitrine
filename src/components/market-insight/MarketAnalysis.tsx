/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Brain, 
  TrendingUp, 
  Target, 
  Zap,
  Eye,
  AlertCircle,
  Globe,
  Thermometer,
  CloudRain,
  Sun,
  Wind,
  Droplets,
  Truck,
  Users,
  ArrowUp,
  ArrowDown,
  Minus
} from 'lucide-react';

interface MarketPrediction {
  commodity: string;
  symbol: string;
  currentPrice: number;
  predictedPrice: number;
  timeframe: '24h' | '7d' | '30d' | '3m';
  confidence: number;
  trend: 'bullish' | 'bearish' | 'neutral';
  factors: string[];
  aiScore: number;
}

interface MarketFactor {
  id: string;
  name: string;
  category: 'weather' | 'economic' | 'supply' | 'demand' | 'geopolitical';
  impact: 'positive' | 'negative' | 'neutral';
  strength: number; // 1-10
  description: string;
  icon: any;
}

interface AIInsight {
  id: string;
  type: 'opportunity' | 'risk' | 'trend' | 'anomaly';
  title: string;
  description: string;
  commodity: string;
  confidence: number;
  priority: 'low' | 'medium' | 'high' | 'critical';
  actionable: boolean;
  timestamp: string;
}

export default function MarketAnalysis() {
  const [selectedTimeframe, setSelectedTimeframe] = useState<'24h' | '7d' | '30d' | '3m'>('7d');
  const [activeTab, setActiveTab] = useState('predictions');
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  const [predictions] = useState<MarketPrediction[]>([
    {
      commodity: 'Wheat',
      symbol: 'WHT',
      currentPrice: 7.45,
      predictedPrice: 8.12,
      timeframe: '7d',
      confidence: 87,
      trend: 'bullish',
      factors: ['Drought in Australia', 'Increased global demand', 'USD weakening'],
      aiScore: 92
    },
    {
      commodity: 'Corn',
      symbol: 'CRN',
      currentPrice: 6.78,
      predictedPrice: 6.45,
      timeframe: '7d',
      confidence: 74,
      trend: 'bearish',
      factors: ['Good harvest forecast', 'Ethanol demand declining', 'Brazilian exports up'],
      aiScore: 78
    },
    {
      commodity: 'Beef Cattle',
      symbol: 'BEEF',
      currentPrice: 142.50,
      predictedPrice: 148.20,
      timeframe: '7d',
      confidence: 91,
      trend: 'bullish',
      factors: ['Feed costs rising', 'Export demand strong', 'Supply constraints'],
      aiScore: 95
    }
  ]);

  const [marketFactors] = useState<MarketFactor[]>([
    {
      id: '1',
      name: 'Drought Conditions',
      category: 'weather',
      impact: 'negative',
      strength: 8,
      description: 'Severe drought affecting major wheat producing regions',
      icon: Sun
    },
    {
      id: '2',
      name: 'Global Inflation',
      category: 'economic',
      impact: 'positive',
      strength: 7,
      description: 'Rising inflation increasing commodity values as hedges',
      icon: TrendingUp
    },
    {
      id: '3',
      name: 'Supply Chain Issues',
      category: 'supply',
      impact: 'negative',
      strength: 6,
      description: 'Logistics bottlenecks affecting grain exports',
      icon: Truck
    },
    {
      id: '4',
      name: 'Population Growth',
      category: 'demand',
      impact: 'positive',
      strength: 9,
      description: 'Growing global population driving food demand',
      icon: Users
    }
  ]);

  const [aiInsights] = useState<AIInsight[]>([
    {
      id: '1',
      type: 'opportunity',
      title: 'Wheat Price Surge Opportunity',
      description: 'AI models detect 73% probability of wheat prices exceeding $8.50 within 2 weeks due to weather patterns and export restrictions.',
      commodity: 'Wheat',
      confidence: 86,
      priority: 'high',
      actionable: true,
      timestamp: '2024-01-15T10:30:00Z'
    },
    {
      id: '2',
      type: 'risk',
      title: 'Corn Oversupply Risk',
      description: 'Satellite imagery indicates larger than expected corn yields, potentially leading to price corrections.',
      commodity: 'Corn',
      confidence: 79,
      priority: 'medium',
      actionable: true,
      timestamp: '2024-01-15T09:45:00Z'
    },
    {
      id: '3',
      type: 'anomaly',
      title: 'Unusual Trading Volume',
      description: 'Beef cattle futures showing 340% higher volume than normal - institutional buying detected.',
      commodity: 'Beef',
      confidence: 94,
      priority: 'critical',
      actionable: false,
      timestamp: '2024-01-15T11:15:00Z'
    }
  ]);

  const runAIAnalysis = async () => {
    setIsAnalyzing(true);
    // Simulate AI analysis
    await new Promise(resolve => setTimeout(resolve, 3000));
    setIsAnalyzing(false);
  };

  const getTrendIcon = (trend: string) => {
    switch (trend) {
      case 'bullish': return ArrowUp;
      case 'bearish': return ArrowDown;
      case 'neutral': return Minus;
      default: return Minus;
    }
  };

  const getTrendColor = (trend: string) => {
    switch (trend) {
      case 'bullish': return 'text-green-400';
      case 'bearish': return 'text-red-400';
      case 'neutral': return 'text-gray-400';
      default: return 'text-gray-400';
    }
  };

  const getFactorColor = (impact: string) => {
    switch (impact) {
      case 'positive': return 'from-green-500 to-emerald-500';
      case 'negative': return 'from-red-500 to-pink-500';
      case 'neutral': return 'from-gray-500 to-gray-600';
      default: return 'from-gray-500 to-gray-600';
    }
  };

  const getInsightColor = (type: string) => {
    switch (type) {
      case 'opportunity': return 'from-green-500 to-emerald-500';
      case 'risk': return 'from-red-500 to-pink-500';
      case 'trend': return 'from-[#00E834] to-green-600';
      case 'anomaly': return 'from-orange-500 to-red-500';
      default: return 'from-gray-500 to-gray-600';
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'critical': return 'bg-red-500/20 text-red-400 border-red-500/30';
      case 'high': return 'bg-orange-500/20 text-orange-400 border-orange-500/30';
      case 'medium': return 'bg-[#00E834]/20 text-[#00E834] border-[#00E834]/30';
      case 'low': return 'bg-blue-500/20 text-blue-400 border-blue-500/30';
      default: return 'bg-gray-500/20 text-gray-400 border-gray-500/30';
    }
  };

  const timeframes = [
    { id: '24h', name: '24H' },
    { id: '7d', name: '7D' },
    { id: '30d', name: '30D' },
    { id: '3m', name: '3M' }
  ];

  return (
    <div className="space-y-6">
      {/* Header Controls */}
      <motion.div
        className="flex flex-col lg:flex-row items-center justify-between gap-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="flex items-center space-x-4">
          <div className="w-12 h-12 bg-gradient-to-br from-[#00E834] to-green-600 rounded-xl flex items-center justify-center">
            <Brain className="w-6 h-6 text-white" />
          </div>
          <div>
            <h2 className="text-2xl font-black text-white tracking-wide">AI MARKET ANALYSIS</h2>
            <p className="text-gray-400">Advanced predictions & insights</p>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          {/* Tab Navigation */}
          <div className="flex rounded-xl bg-gray-900/50 border border-[#00E834]/30 overflow-hidden">
            {[
              { id: 'predictions', name: 'PREDICTIONS' },
              { id: 'factors', name: 'FACTORS' },
              { id: 'insights', name: 'AI INSIGHTS' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2 font-black text-sm transition-all ${
                  activeTab === tab.id
                    ? 'bg-[#00E834] text-black'
                    : 'text-white hover:bg-[#00E834]/20'
                }`}
              >
                {tab.name}
              </button>
            ))}
          </div>

          {/* Timeframe Selector */}
          <div className="flex rounded-xl bg-gray-900/50 border border-[#00E834]/30 overflow-hidden">
            {timeframes.map((tf) => (
              <button
                key={tf.id}
                onClick={() => setSelectedTimeframe(tf.id as any)}
                className={`px-3 py-2 font-black text-sm transition-all ${
                  selectedTimeframe === tf.id
                    ? 'bg-[#00E834] text-black'
                    : 'text-white hover:bg-[#00E834]/20'
                }`}
              >
                {tf.name}
              </button>
            ))}
          </div>

          {/* Run Analysis Button */}
          <motion.button
            onClick={runAIAnalysis}
            disabled={isAnalyzing}
            className="flex items-center px-6 py-3 bg-gradient-to-r from-[#00E834] to-green-600 text-black rounded-xl font-black hover:from-green-600 hover:to-[#00E834] transition-all disabled:opacity-50"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Zap className={`w-4 h-4 mr-2 ${isAnalyzing ? 'animate-spin' : ''}`} />
            {isAnalyzing ? 'ANALYZING...' : 'RUN ANALYSIS'}
          </motion.button>
        </div>
      </motion.div>

      {/* Content based on active tab */}
      {activeTab === 'predictions' && (
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-3 gap-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {predictions.map((prediction, index) => {
            const TrendIcon = getTrendIcon(prediction.trend);
            const changePercent = ((prediction.predictedPrice - prediction.currentPrice) / prediction.currentPrice) * 100;
            
            return (
              <motion.div
                key={prediction.symbol}
                className="bg-gradient-to-br from-black/90 via-gray-900/70 to-black/90 border border-[#00E834]/30 rounded-2xl p-6 backdrop-blur-md relative overflow-hidden group hover:border-[#00E834] transition-all duration-500"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
              >
                {/* Header */}
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h3 className="text-xl font-black text-white tracking-wide">{prediction.commodity}</h3>
                    <span className="text-gray-400 font-bold">({prediction.symbol})</span>
                  </div>
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${getTrendColor(prediction.trend)}`}>
                    <TrendIcon className="w-6 h-6" />
                  </div>
                </div>

                {/* Price Prediction */}
                <div className="mb-6">
                  <div className="flex items-baseline space-x-2 mb-2">
                    <span className="text-2xl font-black text-white">${prediction.currentPrice.toFixed(2)}</span>
                    <span className="text-gray-400">→</span>
                    <span className="text-2xl font-black text-[#00E834]">${prediction.predictedPrice.toFixed(2)}</span>
                  </div>
                  <div className={`text-lg font-black ${changePercent >= 0 ? 'text-green-400' : 'text-red-400'}`}>
                    {changePercent >= 0 ? '+' : ''}{changePercent.toFixed(1)}% in {prediction.timeframe}
                  </div>
                </div>

                {/* AI Confidence */}
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-white font-bold text-sm">AI Confidence</span>
                    <span className="text-[#00E834] font-black">{prediction.confidence}%</span>
                  </div>
                  <div className="w-full bg-gray-700/30 rounded-full h-2">
                    <motion.div
                      className="bg-gradient-to-r from-[#00E834] to-green-600 h-2 rounded-full"
                      initial={{ width: 0 }}
                      animate={{ width: `${prediction.confidence}%` }}
                      transition={{ duration: 1, delay: index * 0.2 }}
                    />
                  </div>
                </div>

                {/* Key Factors */}
                <div className="mb-4">
                  <h4 className="text-white font-black text-sm mb-3 tracking-wide">KEY FACTORS</h4>
                  <div className="space-y-2">
                    {prediction.factors.slice(0, 3).map((factor, factorIndex) => (
                      <div key={factorIndex} className="flex items-center">
                        <div className="w-2 h-2 bg-[#00E834] rounded-full mr-2"></div>
                        <span className="text-gray-300 text-sm">{factor}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* AI Score */}
                <div className="flex items-center justify-between">
                  <span className="text-gray-400 text-sm font-bold">AI Score</span>
                  <div className={`px-3 py-1 rounded-lg font-black text-sm ${
                    prediction.aiScore >= 90 ? 'bg-green-500/20 text-green-400' :
                    prediction.aiScore >= 75 ? 'bg-[#00E834]/20 text-[#00E834]' :
                    'bg-orange-500/20 text-orange-400'
                  }`}>
                    {prediction.aiScore}/100
                  </div>
                </div>

                {/* Scan lines */}
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#00E834]/50 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#00E834]/50 to-transparent"></div>

                {/* Floating particle */}
                <motion.div 
                  className="absolute top-4 right-4 w-2 h-2 bg-[#00E834] rounded-full opacity-0 group-hover:opacity-60"
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.3, 0.6, 0.3]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: index * 0.4
                  }}
                />
              </motion.div>
            );
          })}
        </motion.div>
      )}

      {activeTab === 'factors' && (
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/* Market Factors */}
          <div className="bg-gradient-to-br from-black/90 via-gray-900/70 to-black/90 border border-[#00E834]/30 rounded-2xl p-6 backdrop-blur-md relative overflow-hidden">
            <h3 className="text-xl font-black text-white tracking-wide mb-6">MARKET FACTORS</h3>
            
            <div className="space-y-4">
              {marketFactors.map((factor, index) => (
                <motion.div
                  key={factor.id}
                  className="p-4 rounded-xl bg-gray-900/30 border border-[#00E834]/20 hover:border-[#00E834]/40 transition-all duration-300"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="flex items-start space-x-4">
                    <div className={`w-12 h-12 bg-gradient-to-br ${getFactorColor(factor.impact)} rounded-xl flex items-center justify-center flex-shrink-0`}>
                      <factor.icon className="w-6 h-6 text-white" />
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-black text-white text-sm tracking-wide">{factor.name}</h4>
                        <span className={`px-2 py-1 rounded-lg text-xs font-bold ${
                          factor.category === 'weather' ? 'bg-blue-500/20 text-blue-400' :
                          factor.category === 'economic' ? 'bg-green-500/20 text-green-400' :
                          factor.category === 'supply' ? 'bg-orange-500/20 text-orange-400' :
                          factor.category === 'demand' ? 'bg-purple-500/20 text-purple-400' :
                          'bg-red-500/20 text-red-400'
                        }`}>
                          {factor.category.toUpperCase()}
                        </span>
                      </div>
                      
                      <p className="text-gray-300 text-sm mb-3 leading-relaxed">{factor.description}</p>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <span className="text-gray-400 text-xs font-bold">Impact Strength</span>
                          <div className="flex space-x-1">
                            {[...Array(10)].map((_, i) => (
                              <div
                                key={i}
                                className={`w-2 h-2 rounded-full ${
                                  i < factor.strength ? 'bg-[#00E834]' : 'bg-gray-600'
                                }`}
                              />
                            ))}
                          </div>
                        </div>
                        <span className={`font-black text-sm ${
                          factor.impact === 'positive' ? 'text-green-400' :
                          factor.impact === 'negative' ? 'text-red-400' :
                          'text-gray-400'
                        }`}>
                          {factor.impact.toUpperCase()}
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#00E834]/50 to-transparent"></div>
          </div>

          {/* Weather Impact Dashboard */}
          <div className="bg-gradient-to-br from-black/90 via-gray-900/70 to-black/90 border border-[#00E834]/30 rounded-2xl p-6 backdrop-blur-md relative overflow-hidden">
            <h3 className="text-xl font-black text-white tracking-wide mb-6">WEATHER IMPACT</h3>
            
            <div className="grid grid-cols-2 gap-4 mb-6">
              {[
                { label: 'Temperature', value: '+2.5°C', impact: 'negative', icon: Thermometer },
                { label: 'Rainfall', value: '-40%', impact: 'negative', icon: CloudRain },
                { label: 'Humidity', value: '65%', impact: 'neutral', icon: Droplets },
                { label: 'Wind Speed', value: '15 km/h', impact: 'positive', icon: Wind }
              ].map((weather, index) => (
                <motion.div
                  key={index}
                  className="p-3 rounded-xl bg-gray-900/30 border border-[#00E834]/20"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="flex items-center space-x-2 mb-2">
                    <weather.icon className="w-4 h-4 text-[#00E834]" />
                    <span className="text-white font-bold text-xs">{weather.label}</span>
                  </div>
                  <div className="text-lg font-black text-white">{weather.value}</div>
                  <div className={`text-xs font-bold ${
                    weather.impact === 'positive' ? 'text-green-400' :
                    weather.impact === 'negative' ? 'text-red-400' :
                    'text-gray-400'
                  }`}>
                    {weather.impact.toUpperCase()}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Regional Weather Map Placeholder */}
            <div className="h-40 bg-gradient-to-br from-gray-900/50 to-black/30 rounded-xl border border-[#00E834]/20 flex items-center justify-center">
              <div className="text-center">
                <Globe className="w-12 h-12 text-[#00E834] mx-auto mb-2" />
                <span className="text-gray-400 font-bold text-sm">Global Weather Map</span>
                <p className="text-gray-500 text-xs">Satellite data integration</p>
              </div>
            </div>
            
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#00E834]/50 to-transparent"></div>
          </div>
        </motion.div>
      )}

      {activeTab === 'insights' && (
        <motion.div
          className="space-y-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/* AI Insights Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
            {aiInsights.map((insight, index) => (
              <motion.div
                key={insight.id}
                className="bg-gradient-to-br from-black/90 via-gray-900/70 to-black/90 border border-[#00E834]/30 rounded-2xl p-6 backdrop-blur-md relative overflow-hidden group hover:border-[#00E834] transition-all duration-500"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-12 h-12 bg-gradient-to-br ${getInsightColor(insight.type)} rounded-xl flex items-center justify-center`}>
                    {insight.type === 'opportunity' && <Target className="w-6 h-6 text-white" />}
                    {insight.type === 'risk' && <AlertCircle className="w-6 h-6 text-white" />}
                    {insight.type === 'trend' && <TrendingUp className="w-6 h-6 text-white" />}
                    {insight.type === 'anomaly' && <Eye className="w-6 h-6 text-white" />}
                  </div>
                  
                  <div className="text-right">
                    <div className={`px-2 py-1 rounded-lg text-xs font-black border ${getPriorityColor(insight.priority)}`}>
                      {insight.priority.toUpperCase()}
                    </div>
                    <div className="text-gray-400 text-xs mt-1">
                      {new Date(insight.timestamp).toLocaleTimeString()}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="mb-4">
                  <h4 className="font-black text-white text-lg mb-2 tracking-wide">{insight.title}</h4>
                  <p className="text-gray-300 text-sm leading-relaxed">{insight.description}</p>
                </div>

                {/* Details */}
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 bg-[#00E834]/20 text-[#00E834] rounded-lg text-xs font-bold">
                    {insight.commodity}
                  </span>
                  <div className="text-right">
                    <div className="text-white font-black text-sm">Confidence: {insight.confidence}%</div>
                    <div className="w-16 bg-gray-700/30 rounded-full h-1 mt-1">
                      <div 
                        className="bg-[#00E834] h-1 rounded-full"
                        style={{ width: `${insight.confidence}%` }}
                      />
                    </div>
                  </div>
                </div>

                {/* Action Button */}
                {insight.actionable && (
                  <motion.button
                    className="w-full bg-gradient-to-r from-[#00E834] to-green-600 text-black py-2 rounded-xl font-black text-sm hover:from-green-600 hover:to-[#00E834] transition-all"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    TAKE ACTION
                  </motion.button>
                )}

                {/* Scan lines */}
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#00E834]/50 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#00E834]/50 to-transparent"></div>

                {/* Floating particle */}
                <motion.div 
                  className="absolute top-4 right-4 w-2 h-2 bg-[#00E834] rounded-full opacity-0 group-hover:opacity-60"
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
              </motion.div>
            ))}
          </div>

          {/* AI Analysis Summary */}
          <motion.div
            className="bg-gradient-to-br from-black/90 via-gray-900/70 to-black/90 border border-[#00E834]/30 rounded-2xl p-6 backdrop-blur-md relative overflow-hidden"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-[#00E834] to-green-600 rounded-xl flex items-center justify-center">
                <Brain className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-black text-white tracking-wide">AI MARKET SUMMARY</h3>
                <p className="text-gray-400">Generated by advanced machine learning models</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-black text-green-400 mb-2">BULLISH</div>
                <div className="text-gray-300 text-sm">Overall market sentiment</div>
                <div className="text-xs text-gray-400 mt-1">Based on 47 data points</div>
              </div>
              
              <div className="text-center">
                <div className="text-3xl font-black text-[#00E834] mb-2">87%</div>
                <div className="text-gray-300 text-sm">Model accuracy</div>
                <div className="text-xs text-gray-400 mt-1">Last 30 days performance</div>
              </div>
              
              <div className="text-center">
                <div className="text-3xl font-black text-orange-400 mb-2">HIGH</div>
                <div className="text-gray-300 text-sm">Volatility expected</div>
                <div className="text-xs text-gray-400 mt-1">Next 7 days forecast</div>
              </div>
            </div>

            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#00E834]/50 to-transparent"></div>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
}