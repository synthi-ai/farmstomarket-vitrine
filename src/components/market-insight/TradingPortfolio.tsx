'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Wallet,
  TrendingUp,
  TrendingDown,
  PlusCircle,
  BarChart3,
  PieChart,
  Clock,
  Eye,
  EyeOff,
  ArrowUpRight,
  ArrowDownRight
} from 'lucide-react';

interface PortfolioHolding {
  id: string;
  commodity: string;
  symbol: string;
  quantity: number;
  avgPrice: number;
  currentPrice: number;
  totalValue: number;
  pnl: number;
  pnlPercent: number;
  lastUpdate: string;
}

interface Trade {
  id: string;
  type: 'buy' | 'sell';
  commodity: string;
  symbol: string;
  quantity: number;
  price: number;
  total: number;
  timestamp: string;
  status: 'completed' | 'pending' | 'cancelled';
}

export default function TradingPortfolio() {
  const [hideBalances, setHideBalances] = useState(false);
  const [activeView, setActiveView] = useState('holdings');

  const [portfolioData] = useState({
    totalValue: 125430.50,
    totalPnL: 8234.75,
    totalPnLPercent: 7.02,
    cashBalance: 25000.00
  });

  const [holdings] = useState<PortfolioHolding[]>([
    {
      id: '1',
      commodity: 'Wheat',
      symbol: 'WHT',
      quantity: 1000,
      avgPrice: 7.20,
      currentPrice: 7.45,
      totalValue: 7450,
      pnl: 250,
      pnlPercent: 3.47,
      lastUpdate: '2024-01-15T10:30:00Z'
    },
    {
      id: '2',
      commodity: 'Corn',
      symbol: 'CRN',
      quantity: 1500,
      avgPrice: 6.90,
      currentPrice: 6.78,
      totalValue: 10170,
      pnl: -180,
      pnlPercent: -1.74,
      lastUpdate: '2024-01-15T10:28:00Z'
    },
    {
      id: '3',
      commodity: 'Beef Cattle',
      symbol: 'BEEF',
      quantity: 50,
      avgPrice: 140.00,
      currentPrice: 142.50,
      totalValue: 7125,
      pnl: 125,
      pnlPercent: 1.79,
      lastUpdate: '2024-01-15T10:25:00Z'
    }
  ]);

  const [recentTrades] = useState<Trade[]>([
    {
      id: '1',
      type: 'buy',
      commodity: 'Wheat',
      symbol: 'WHT',
      quantity: 500,
      price: 7.45,
      total: 3725,
      timestamp: '2024-01-15T09:30:00Z',
      status: 'completed'
    },
    {
      id: '2',
      type: 'sell',
      commodity: 'Corn',
      symbol: 'CRN',
      quantity: 300,
      price: 6.78,
      total: 2034,
      timestamp: '2024-01-15T08:45:00Z',
      status: 'completed'
    },
    {
      id: '3',
      type: 'buy',
      commodity: 'Beef Cattle',
      symbol: 'BEEF',
      quantity: 25,
      price: 142.50,
      total: 3562.5,
      timestamp: '2024-01-15T08:15:00Z',
      status: 'pending'
    }
  ]);

  const formatValue = (value: number) => {
    return hideBalances ? '****' : `$${value.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
  };

  const formatPercent = (percent: number) => {
    return hideBalances ? '**%' : `${percent > 0 ? '+' : ''}${percent.toFixed(2)}%`;
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
              <Wallet className="w-4 h-4" />
              <span>Portefeuille de trading</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Mon portefeuille agricole
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Suivez votre portefeuille de matières premières agricoles, analysez vos performances et gérez vos positions en temps réel.
            </p>
          </div>

          {/* Portfolio Summary */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-sm font-medium text-gray-500">Valeur totale</h3>
                <button
                  onClick={() => setHideBalances(!hideBalances)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  {hideBalances ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
              <div className="text-2xl font-bold text-gray-900">
                {formatValue(portfolioData.totalValue)}
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
              <h3 className="text-sm font-medium text-gray-500 mb-4">Solde cash</h3>
              <div className="text-2xl font-bold text-gray-900">
                {formatValue(portfolioData.cashBalance)}
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
              <h3 className="text-sm font-medium text-gray-500 mb-4">P&L total</h3>
              <div className={`text-2xl font-bold ${portfolioData.totalPnL >= 0 ? 'text-emerald-600' : 'text-red-500'}`}>
                {formatValue(portfolioData.totalPnL)}
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
              <h3 className="text-sm font-medium text-gray-500 mb-4">Rendement</h3>
              <div className={`flex items-center space-x-1 text-2xl font-bold ${portfolioData.totalPnLPercent >= 0 ? 'text-emerald-600' : 'text-red-500'}`}>
                {portfolioData.totalPnLPercent >= 0 ? (
                  <ArrowUpRight className="w-6 h-6" />
                ) : (
                  <ArrowDownRight className="w-6 h-6" />
                )}
                <span>{formatPercent(portfolioData.totalPnLPercent)}</span>
              </div>
            </div>
          </div>

          {/* Navigation Tabs */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 mb-8">
            <div className="p-6 border-b border-gray-200">
              <div className="flex space-x-1">
                {[
                  { id: 'holdings', name: 'Positions', icon: PieChart },
                  { id: 'trades', name: 'Transactions', icon: Clock },
                  { id: 'analytics', name: 'Analyses', icon: BarChart3 }
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveView(tab.id)}
                    className={`flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                      activeView === tab.id
                        ? 'bg-emerald-600 text-white'
                        : 'text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    <tab.icon className="w-4 h-4" />
                    <span>{tab.name}</span>
                  </button>
                ))}
              </div>
            </div>

            <div className="p-6">
              {activeView === 'holdings' && (
                <div className="space-y-4">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-lg font-semibold text-gray-900">Mes positions</h3>
                    <button className="flex items-center space-x-2 px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors">
                      <PlusCircle className="w-4 h-4" />
                      <span>Nouvelle position</span>
                    </button>
                  </div>

                  {holdings.map((holding, index) => (
                    <motion.div
                      key={holding.id}
                      className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50 transition-colors"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                          <div>
                            <h4 className="font-semibold text-gray-900">{holding.commodity}</h4>
                            <p className="text-sm text-gray-500">{holding.symbol}</p>
                          </div>
                          <div className="text-sm text-gray-600">
                            {holding.quantity} unités @ ${holding.avgPrice.toFixed(2)}
                          </div>
                        </div>

                        <div className="text-right">
                          <div className="font-semibold text-gray-900">
                            {formatValue(holding.totalValue)}
                          </div>
                          <div className={`flex items-center space-x-1 text-sm ${
                            holding.pnl >= 0 ? 'text-emerald-600' : 'text-red-500'
                          }`}>
                            {holding.pnl >= 0 ? (
                              <TrendingUp className="w-4 h-4" />
                            ) : (
                              <TrendingDown className="w-4 h-4" />
                            )}
                            <span>{formatValue(holding.pnl)} ({formatPercent(holding.pnlPercent)})</span>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}

              {activeView === 'trades' && (
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-gray-900 mb-6">
                    Transactions récentes
                  </h3>
                  {recentTrades.map((trade, index) => (
                    <motion.div
                      key={trade.id}
                      className="border border-gray-200 rounded-lg p-4"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                          <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                            trade.type === 'buy' ? 'bg-emerald-100' : 'bg-red-100'
                          }`}>
                            {trade.type === 'buy' ? (
                              <TrendingUp className={`w-4 h-4 text-emerald-600`} />
                            ) : (
                              <TrendingDown className={`w-4 h-4 text-red-500`} />
                            )}
                          </div>
                          <div>
                            <h4 className="font-semibold text-gray-900">
                              {trade.type === 'buy' ? 'Achat' : 'Vente'} {trade.commodity}
                            </h4>
                            <p className="text-sm text-gray-500">
                              {trade.quantity} @ ${trade.price.toFixed(2)}
                            </p>
                          </div>
                        </div>

                        <div className="text-right">
                          <div className="font-semibold text-gray-900">
                            ${trade.total.toLocaleString()}
                          </div>
                          <div className={`text-xs px-2 py-1 rounded-full ${
                            trade.status === 'completed' ? 'bg-emerald-100 text-emerald-700' :
                            trade.status === 'pending' ? 'bg-yellow-100 text-yellow-700' :
                            'bg-red-100 text-red-700'
                          }`}>
                            {trade.status === 'completed' ? 'Complété' :
                             trade.status === 'pending' ? 'En attente' : 'Annulé'}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}

              {activeView === 'analytics' && (
                <div className="text-center py-12">
                  <BarChart3 className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Analyses de performance
                  </h3>
                  <p className="text-gray-600">
                    Les analyses détaillées de votre portefeuille seront bientôt disponibles.
                  </p>
                </div>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}