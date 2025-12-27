'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Brain,
  TrendingUp,
  Target,
  Eye,
  AlertCircle,
  Globe,
  Sun,
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
  strength: number;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
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
      factors: ['Sécheresse en Australie', 'Demande mondiale croissante', 'Affaiblissement USD'],
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
      factors: ['Prévisions de bonnes récoltes', 'Demande éthanol en baisse', 'Exportations brésiliennes en hausse'],
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
      factors: ['Coûts alimentaires en hausse', 'Forte demande export', 'Contraintes offre'],
      aiScore: 95
    }
  ]);

  const [marketFactors] = useState<MarketFactor[]>([
    {
      id: '1',
      name: 'Conditions météorologiques',
      category: 'weather',
      impact: 'negative',
      strength: 8,
      description: 'Sécheresse prolongée affectant les rendements',
      icon: Sun
    },
    {
      id: '2',
      name: 'Demande mondiale',
      category: 'demand',
      impact: 'positive',
      strength: 7,
      description: 'Croissance des importations asiatiques',
      icon: Globe
    },
    {
      id: '3',
      name: 'Politique commerciale',
      category: 'geopolitical',
      impact: 'neutral',
      strength: 5,
      description: 'Négociations commerciales en cours',
      icon: Users
    },
    {
      id: '4',
      name: 'Coûts de transport',
      category: 'supply',
      impact: 'negative',
      strength: 6,
      description: 'Augmentation des prix du carburant',
      icon: Truck
    }
  ]);

  const [aiInsights] = useState<AIInsight[]>([
    {
      id: '1',
      type: 'opportunity',
      title: 'Opportunité d\'arbitrage blé',
      description: 'Écart de prix significatif entre les marchés européen et américain du blé',
      commodity: 'Wheat',
      confidence: 89,
      priority: 'high',
      actionable: true,
      timestamp: '2024-01-15T10:30:00Z'
    },
    {
      id: '2',
      type: 'risk',
      title: 'Volatilité maïs prévue',
      description: 'Rapport USDA attendu pourrait causer une forte volatilité',
      commodity: 'Corn',
      confidence: 76,
      priority: 'medium',
      actionable: true,
      timestamp: '2024-01-15T09:15:00Z'
    },
    {
      id: '3',
      type: 'trend',
      title: 'Tendance haussière bétail',
      description: 'Pattern technique suggère une continuation de la hausse',
      commodity: 'Beef',
      confidence: 82,
      priority: 'high',
      actionable: false,
      timestamp: '2024-01-15T08:45:00Z'
    }
  ]);

  const timeframes = [
    { value: '24h', label: '24H' },
    { value: '7d', label: '7J' },
    { value: '30d', label: '30J' },
    { value: '3m', label: '3M' }
  ];

  const tabs = [
    { id: 'predictions', name: 'Prédictions IA', icon: Brain },
    { id: 'factors', name: 'Facteurs de marché', icon: Target },
    { id: 'insights', name: 'Insights IA', icon: Eye }
  ];

  const runAnalysis = () => {
    setIsAnalyzing(true);
    setTimeout(() => {
      setIsAnalyzing(false);
    }, 2000);
  };

  const getTrendIcon = (trend: string) => {
    switch (trend) {
      case 'bullish': return <ArrowUp className="w-4 h-4 text-emerald-600" />;
      case 'bearish': return <ArrowDown className="w-4 h-4 text-red-500" />;
      default: return <Minus className="w-4 h-4 text-gray-500" />;
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'critical': return 'bg-red-100 text-red-800 border-red-200';
      case 'high': return 'bg-orange-100 text-orange-800 border-orange-200';
      case 'medium': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-2 bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
              <Brain className="w-4 h-4" />
              <span>Intelligence artificielle</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Analyse de marché IA
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Analyses prédictives avancées et insights alimentés par l&apos;intelligence artificielle pour optimiser vos décisions de trading agricole.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-gray-200 mb-8">
            <div className="p-6 border-b border-gray-200">
              <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4">
                <div className="flex space-x-1">
                  {tabs.map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                        activeTab === tab.id
                          ? 'bg-emerald-600 text-white'
                          : 'text-gray-700 hover:bg-gray-100'
                      }`}
                    >
                      <tab.icon className="w-4 h-4" />
                      <span>{tab.name}</span>
                    </button>
                  ))}
                </div>

                <div className="flex items-center space-x-4">
                  <div className="flex space-x-1">
                    {timeframes.map((timeframe) => (
                      <button
                        key={timeframe.value}
                        onClick={() => setSelectedTimeframe(timeframe.value as MarketPrediction['timeframe'])}
                        className={`px-3 py-1 rounded text-sm font-medium transition-colors ${
                          selectedTimeframe === timeframe.value
                            ? 'bg-emerald-600 text-white'
                            : 'text-gray-700 hover:bg-gray-100'
                        }`}
                      >
                        {timeframe.label}
                      </button>
                    ))}
                  </div>

                  <button
                    onClick={runAnalysis}
                    className={`px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors ${
                      isAnalyzing ? 'opacity-50 cursor-not-allowed' : ''
                    }`}
                    disabled={isAnalyzing}
                  >
                    {isAnalyzing ? 'Analyse...' : 'Analyser'}
                  </button>
                </div>
              </div>
            </div>

            <div className="p-6">
              {activeTab === 'predictions' && (
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-gray-900 mb-6">
                    Prédictions de prix - {selectedTimeframe}
                  </h3>
                  {predictions.map((prediction, index) => (
                    <motion.div
                      key={prediction.symbol}
                      className="border border-gray-200 rounded-lg p-6"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center space-x-3">
                          <h4 className="text-lg font-semibold text-gray-900">
                            {prediction.commodity}
                          </h4>
                          <span className="text-sm text-gray-500">({prediction.symbol})</span>
                          {getTrendIcon(prediction.trend)}
                        </div>
                        <div className="text-right">
                          <div className="text-sm text-gray-500">Score IA</div>
                          <div className="text-lg font-bold text-emerald-600">
                            {prediction.aiScore}%
                          </div>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                        <div>
                          <div className="text-sm text-gray-500">Prix actuel</div>
                          <div className="text-xl font-semibold text-gray-900">
                            ${prediction.currentPrice.toFixed(2)}
                          </div>
                        </div>
                        <div>
                          <div className="text-sm text-gray-500">Prix prédit</div>
                          <div className="text-xl font-semibold text-emerald-600">
                            ${prediction.predictedPrice.toFixed(2)}
                          </div>
                        </div>
                        <div>
                          <div className="text-sm text-gray-500">Confiance</div>
                          <div className="flex items-center space-x-2">
                            <div className="text-xl font-semibold text-gray-900">
                              {prediction.confidence}%
                            </div>
                            <div className="w-16 bg-gray-200 rounded-full h-2">
                              <div
                                className="bg-emerald-600 h-2 rounded-full"
                                style={{ width: `${prediction.confidence}%` }}
                              ></div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div>
                        <div className="text-sm text-gray-500 mb-2">Facteurs clés</div>
                        <div className="flex flex-wrap gap-2">
                          {prediction.factors.map((factor, i) => (
                            <span
                              key={i}
                              className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full"
                            >
                              {factor}
                            </span>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}

              {activeTab === 'factors' && (
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-gray-900 mb-6">
                    Facteurs influençant le marché
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {marketFactors.map((factor, index) => {
                      const IconComponent = factor.icon;
                      return (
                        <motion.div
                          key={factor.id}
                          className="border border-gray-200 rounded-lg p-4"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                          <div className="flex items-start space-x-3">
                            <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                              factor.impact === 'positive' ? 'bg-emerald-100' :
                              factor.impact === 'negative' ? 'bg-red-100' : 'bg-gray-100'
                            }`}>
                              <IconComponent className={`w-5 h-5 ${
                                factor.impact === 'positive' ? 'text-emerald-600' :
                                factor.impact === 'negative' ? 'text-red-500' : 'text-gray-500'
                              }`} />
                            </div>
                            <div className="flex-1">
                              <div className="flex items-center justify-between mb-2">
                                <h4 className="font-semibold text-gray-900">{factor.name}</h4>
                                <div className="flex items-center space-x-2">
                                  <span className="text-sm text-gray-500">Impact</span>
                                  <div className="flex space-x-1">
                                    {Array.from({ length: 10 }).map((_, i) => (
                                      <div
                                        key={i}
                                        className={`w-1 h-3 rounded-full ${
                                          i < factor.strength
                                            ? factor.impact === 'positive'
                                              ? 'bg-emerald-600'
                                              : factor.impact === 'negative'
                                              ? 'bg-red-500'
                                              : 'bg-gray-400'
                                            : 'bg-gray-200'
                                        }`}
                                      />
                                    ))}
                                  </div>
                                </div>
                              </div>
                              <p className="text-sm text-gray-600">{factor.description}</p>
                            </div>
                          </div>
                        </motion.div>
                      );
                    })}
                  </div>
                </div>
              )}

              {activeTab === 'insights' && (
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-gray-900 mb-6">
                    Insights IA en temps réel
                  </h3>
                  {aiInsights.map((insight, index) => (
                    <motion.div
                      key={insight.id}
                      className="border border-gray-200 rounded-lg p-4"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex items-start space-x-3">
                          <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                            insight.type === 'opportunity' ? 'bg-emerald-100' :
                            insight.type === 'risk' ? 'bg-red-100' :
                            insight.type === 'trend' ? 'bg-blue-100' : 'bg-yellow-100'
                          }`}>
                            {insight.type === 'opportunity' && <TrendingUp className="w-4 h-4 text-emerald-600" />}
                            {insight.type === 'risk' && <AlertCircle className="w-4 h-4 text-red-500" />}
                            {insight.type === 'trend' && <Target className="w-4 h-4 text-blue-500" />}
                            {insight.type === 'anomaly' && <Eye className="w-4 h-4 text-yellow-500" />}
                          </div>
                          <div className="flex-1">
                            <h4 className="font-semibold text-gray-900">{insight.title}</h4>
                            <p className="text-sm text-gray-600 mt-1">{insight.description}</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium border ${
                            getPriorityColor(insight.priority)
                          }`}>
                            {insight.priority}
                          </span>
                        </div>
                      </div>

                      <div className="flex items-center justify-between text-sm">
                        <div className="flex items-center space-x-4">
                          <span className="text-gray-500">Matière première: {insight.commodity}</span>
                          <span className="text-gray-500">Confiance: {insight.confidence}%</span>
                        </div>
                        <div className="text-gray-500">
                          {new Date(insight.timestamp).toLocaleDateString('fr-FR')}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}