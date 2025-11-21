'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  BarChart3,
  PieChart,
  TrendingUp,
  Activity,
  Maximize2,
  Minimize2,
  Download,
  Share
} from 'lucide-react';

interface ChartData {
  timestamp: string;
  price: number;
  volume: number;
  high: number;
  low: number;
  open: number;
  close: number;
}

interface MarketChartsProps {
  selectedCommodity?: {
    name: string;
    symbol: string;
    price: number;
    change: number;
    changePercent: number;
  };
  timeframe?: string;
}

export default function MarketCharts({
  selectedCommodity = {
    name: 'Wheat',
    symbol: 'WHT',
    price: 7.45,
    change: 0.23,
    changePercent: 3.2
  },
  timeframe = '24h'
}: MarketChartsProps) {
  const [chartType, setChartType] = useState('line');
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [chartData, setChartData] = useState<ChartData[]>([]);

  const [indicators, setIndicators] = useState({
    sma: false,
    ema: false,
    rsi: false,
    macd: false,
    bollinger: false
  });

  useEffect(() => {
    const generateChartData = () => {
      const data: ChartData[] = [];
      const now = new Date();
      const basePrice = selectedCommodity.price;

      for (let i = 0; i < 30; i++) {
        const timestamp = new Date(now.getTime() - (29 - i) * 24 * 60 * 60 * 1000);
        const randomVariation = (Math.random() - 0.5) * 0.5;
        const price = basePrice + randomVariation;

        data.push({
          timestamp: timestamp.toISOString(),
          price: price,
          volume: Math.floor(Math.random() * 100000) + 50000,
          high: price + Math.random() * 0.2,
          low: price - Math.random() * 0.2,
          open: price - (Math.random() - 0.5) * 0.1,
          close: price + (Math.random() - 0.5) * 0.1
        });
      }

      setChartData(data);
    };

    generateChartData();
  }, [selectedCommodity]);

  const chartTypes = [
    { id: 'line', name: 'Ligne', icon: Activity },
    { id: 'candlestick', name: 'Chandelier', icon: BarChart3 },
    { id: 'volume', name: 'Volume', icon: PieChart }
  ];

  const timeframes = [
    { value: '1h', label: '1H' },
    { value: '24h', label: '24H' },
    { value: '7d', label: '7J' },
    { value: '30d', label: '30J' },
    { value: '1y', label: '1A' }
  ];

  const indicatorsList = [
    { key: 'sma', name: 'SMA (20)', description: 'Moyenne mobile simple' },
    { key: 'ema', name: 'EMA (12)', description: 'Moyenne mobile exponentielle' },
    { key: 'rsi', name: 'RSI (14)', description: 'Index de force relative' },
    { key: 'macd', name: 'MACD', description: 'Convergence/Divergence' },
    { key: 'bollinger', name: 'Bollinger', description: 'Bandes de Bollinger' }
  ];

  const toggleIndicator = (key: string) => {
    setIndicators(prev => ({
      ...prev,
      [key]: !prev[key as keyof typeof prev]
    }));
  };

  const maxPrice = Math.max(...chartData.map(d => d.high));
  const minPrice = Math.min(...chartData.map(d => d.low));
  const priceRange = maxPrice - minPrice;

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
              <BarChart3 className="w-4 h-4" />
              <span>Graphiques de marché</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Analyse technique
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Analysez les mouvements de prix avec des graphiques avancés et des indicateurs techniques professionnels pour vos matières premières agricoles.
            </p>
          </div>

          {/* Market Summary */}
          <div className="bg-white rounded-xl p-6 mb-8 shadow-sm border border-gray-200">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div>
                  <h2 className="text-xl font-bold text-gray-900">
                    {selectedCommodity.name} ({selectedCommodity.symbol})
                  </h2>
                  <div className="flex items-center space-x-4 mt-2">
                    <span className="text-2xl font-bold text-gray-900">
                      ${selectedCommodity.price.toFixed(2)}
                    </span>
                    <span className={`flex items-center text-sm font-semibold ${
                      selectedCommodity.change >= 0 ? 'text-emerald-600' : 'text-red-500'
                    }`}>
                      <TrendingUp className="w-4 h-4 mr-1" />
                      {selectedCommodity.change >= 0 ? '+' : ''}
                      {selectedCommodity.change.toFixed(2)} ({selectedCommodity.changePercent.toFixed(2)}%)
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex items-center space-x-2">
                <button
                  onClick={() => setIsFullscreen(!isFullscreen)}
                  className="p-2 text-gray-600 hover:text-gray-900 transition-colors"
                  title="Plein écran"
                >
                  {isFullscreen ? <Minimize2 className="w-5 h-5" /> : <Maximize2 className="w-5 h-5" />}
                </button>
                <button
                  className="p-2 text-gray-600 hover:text-gray-900 transition-colors"
                  title="Télécharger"
                >
                  <Download className="w-5 h-5" />
                </button>
                <button
                  className="p-2 text-gray-600 hover:text-gray-900 transition-colors"
                  title="Partager"
                >
                  <Share className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Chart Controls */}
            <div className="space-y-6">
              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Type de graphique</h3>
                <div className="space-y-2">
                  {chartTypes.map((type) => (
                    <button
                      key={type.id}
                      onClick={() => setChartType(type.id)}
                      className={`w-full flex items-center space-x-3 p-3 rounded-lg text-sm font-medium transition-colors ${
                        chartType === type.id
                          ? 'bg-emerald-100 text-emerald-700 border border-emerald-200'
                          : 'text-gray-700 hover:bg-gray-100'
                      }`}
                    >
                      <type.icon className="w-4 h-4" />
                      <span>{type.name}</span>
                    </button>
                  ))}
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Période</h3>
                <div className="grid grid-cols-2 gap-2">
                  {timeframes.map((tf) => (
                    <button
                      key={tf.value}
                      className={`p-2 rounded-lg text-sm font-medium transition-colors ${
                        timeframe === tf.value
                          ? 'bg-emerald-600 text-white'
                          : 'text-gray-700 hover:bg-gray-100 border border-gray-200'
                      }`}
                    >
                      {tf.label}
                    </button>
                  ))}
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Indicateurs techniques</h3>
                <div className="space-y-3">
                  {indicatorsList.map((indicator) => (
                    <div key={indicator.key} className="flex items-center justify-between">
                      <div>
                        <div className="text-sm font-medium text-gray-900">{indicator.name}</div>
                        <div className="text-xs text-gray-500">{indicator.description}</div>
                      </div>
                      <button
                        onClick={() => toggleIndicator(indicator.key)}
                        className={`w-10 h-6 rounded-full transition-colors ${
                          indicators[indicator.key as keyof typeof indicators]
                            ? 'bg-emerald-600'
                            : 'bg-gray-300'
                        }`}
                      >
                        <div
                          className={`w-4 h-4 bg-white rounded-full shadow transform transition-transform ${
                            indicators[indicator.key as keyof typeof indicators]
                              ? 'translate-x-5'
                              : 'translate-x-1'
                          }`}
                        />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Main Chart */}
            <div className="lg:col-span-3">
              <div className={`bg-white rounded-xl shadow-sm border border-gray-200 ${
                isFullscreen ? 'fixed inset-4 z-50' : ''
              }`}>
                <div className="p-6">
                  <div className="h-96 relative">
                    <svg viewBox="0 0 800 400" className="w-full h-full">
                      {/* Grid lines */}
                      <defs>
                        <pattern id="grid" width="40" height="20" patternUnits="userSpaceOnUse">
                          <path d="M 40 0 L 0 0 0 20" fill="none" stroke="#e5e7eb" strokeWidth="1" />
                        </pattern>
                      </defs>
                      <rect width="100%" height="100%" fill="url(#grid)" />

                      {/* Price line chart */}
                      {chartType === 'line' && (
                        <polyline
                          fill="none"
                          stroke="#10b981"
                          strokeWidth="2"
                          points={chartData.map((point, index) => {
                            const x = (index / (chartData.length - 1)) * 800;
                            const y = 400 - ((point.price - minPrice) / priceRange) * 400;
                            return `${x},${y}`;
                          }).join(' ')}
                        />
                      )}

                      {/* Volume bars */}
                      {chartType === 'volume' && (
                        <g>
                          {chartData.map((point, index) => {
                            const x = (index / chartData.length) * 800;
                            const height = (point.volume / Math.max(...chartData.map(d => d.volume))) * 200;
                            return (
                              <rect
                                key={index}
                                x={x}
                                y={400 - height}
                                width={800 / chartData.length - 2}
                                height={height}
                                fill="#10b981"
                                opacity="0.7"
                              />
                            );
                          })}
                        </g>
                      )}

                      {/* Candlesticks */}
                      {chartType === 'candlestick' && (
                        <g>
                          {chartData.map((point, index) => {
                            const x = (index / chartData.length) * 800 + (800 / chartData.length / 2);
                            const openY = 400 - ((point.open - minPrice) / priceRange) * 400;
                            const closeY = 400 - ((point.close - minPrice) / priceRange) * 400;
                            const highY = 400 - ((point.high - minPrice) / priceRange) * 400;
                            const lowY = 400 - ((point.low - minPrice) / priceRange) * 400;
                            const isUp = point.close > point.open;

                            return (
                              <g key={index}>
                                {/* High-Low line */}
                                <line
                                  x1={x}
                                  y1={highY}
                                  x2={x}
                                  y2={lowY}
                                  stroke={isUp ? '#10b981' : '#ef4444'}
                                  strokeWidth="1"
                                />
                                {/* Open-Close rectangle */}
                                <rect
                                  x={x - 8}
                                  y={Math.min(openY, closeY)}
                                  width="16"
                                  height={Math.abs(openY - closeY)}
                                  fill={isUp ? '#10b981' : '#ef4444'}
                                />
                              </g>
                            );
                          })}
                        </g>
                      )}

                      {/* Y-axis labels */}
                      {[minPrice, (minPrice + maxPrice) / 2, maxPrice].map((price, index) => (
                        <text
                          key={index}
                          x="10"
                          y={400 - (index * 200) + 5}
                          fontSize="12"
                          fill="#6b7280"
                        >
                          ${price.toFixed(2)}
                        </text>
                      ))}
                    </svg>
                  </div>

                  {/* Chart Footer */}
                  <div className="mt-6 flex items-center justify-between text-sm text-gray-500">
                    <div>
                      Volume moyen: {(chartData.reduce((sum, d) => sum + d.volume, 0) / chartData.length).toLocaleString()}
                    </div>
                    <div>
                      Volatilité: {((maxPrice - minPrice) / minPrice * 100).toFixed(2)}%
                    </div>
                    <div>
                      Points de données: {chartData.length}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}