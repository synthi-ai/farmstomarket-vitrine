'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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
  X,
  ArrowUpRight,
  ArrowDownRight} from 'lucide-react';

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

interface OrderBookEntry {
  price: number;
  quantity: number;
  total: number;
}

export default function TradingPortfolio() {
  const [activeTab, setActiveTab] = useState('portfolio');
  const [balanceVisible, setBalanceVisible] = useState(true);
  const [selectedCommodity, setSelectedCommodity] = useState('WHT');
  const [orderType, setOrderType] = useState<'market' | 'limit'>('market');
  const [tradeAction, setTradeAction] = useState<'buy' | 'sell'>('buy');
  const [orderAmount, setOrderAmount] = useState('');
  const [limitPrice, setLimitPrice] = useState('');
  const [showOrderForm, setShowOrderForm] = useState(false);

  const [portfolio] = useState<PortfolioHolding[]>([
    {
      id: '1',
      commodity: 'Wheat',
      symbol: 'WHT',
      quantity: 1500,
      avgPrice: 7.20,
      currentPrice: 7.45,
      totalValue: 11175,
      pnl: 375,
      pnlPercent: 3.47,
      lastUpdate: '2024-01-15T14:30:00Z'
    },
    {
      id: '2',
      commodity: 'Corn',
      symbol: 'CRN',
      quantity: 2000,
      avgPrice: 6.90,
      currentPrice: 6.78,
      totalValue: 13560,
      pnl: -240,
      pnlPercent: -1.74,
      lastUpdate: '2024-01-15T14:30:00Z'
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
      lastUpdate: '2024-01-15T14:30:00Z'
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
      timestamp: '2024-01-15T14:25:00Z',
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
      timestamp: '2024-01-15T13:45:00Z',
      status: 'completed'
    },
    {
      id: '3',
      type: 'buy',
      commodity: 'Milk',
      symbol: 'MLK',
      quantity: 1000,
      price: 18.90,
      total: 18900,
      timestamp: '2024-01-15T12:30:00Z',
      status: 'pending'
    }
  ]);

  // Simulation de données order book
  const [buyOrders] = useState<OrderBookEntry[]>([
    { price: 7.44, quantity: 1200, total: 8928 },
    { price: 7.43, quantity: 800, total: 5944 },
    { price: 7.42, quantity: 1500, total: 11130 },
    { price: 7.41, quantity: 2000, total: 14820 },
    { price: 7.40, quantity: 500, total: 3700 }
  ]);

  const [sellOrders] = useState<OrderBookEntry[]>([
    { price: 7.45, quantity: 900, total: 6705 },
    { price: 7.46, quantity: 1100, total: 8206 },
    { price: 7.47, quantity: 700, total: 5229 },
    { price: 7.48, quantity: 1800, total: 13464 },
    { price: 7.49, quantity: 600, total: 4494 }
  ]);

  // Calculs du portfolio
  const totalValue = portfolio.reduce((sum, holding) => sum + holding.totalValue, 0);
  const totalPnL = portfolio.reduce((sum, holding) => sum + holding.pnl, 0);
  const totalPnLPercent = (totalPnL / (totalValue - totalPnL)) * 100;
  const availableBalance = 50000; // Solde fictif

  const placeOrder = () => {
    if (!orderAmount || (orderType === 'limit' && !limitPrice)) return;

    // Simulation de placement d'ordre
    console.log('Order placed:', {
      type: tradeAction,
      commodity: selectedCommodity,
      amount: orderAmount,
      orderType,
      price: limitPrice
    });

    setShowOrderForm(false);
    setOrderAmount('');
    setLimitPrice('');
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  const formatTime = (timestamp: string) => {
    return new Date(timestamp).toLocaleTimeString();
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <motion.div
        className="flex flex-col lg:flex-row items-center justify-between gap-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="flex items-center space-x-4">
          <div className="w-12 h-12 bg-gradient-to-br from-[#00E834] to-green-600 rounded-xl flex items-center justify-center">
            <Wallet className="w-6 h-6 text-white" />
          </div>
          <div>
            <h2 className="text-2xl font-black text-white tracking-wide">TRADING PORTFOLIO</h2>
            <p className="text-gray-400">Manage your agricultural investments</p>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          {/* Tab Navigation */}
          <div className="flex rounded-xl bg-gray-900/50 border border-[#00E834]/30 overflow-hidden">
            {[
              { id: 'portfolio', name: 'PORTFOLIO' },
              { id: 'trading', name: 'TRADING' },
              { id: 'orders', name: 'ORDERS' },
              { id: 'history', name: 'HISTORY' }
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

          {/* Quick Trade Button */}
          <motion.button
            onClick={() => setShowOrderForm(true)}
            className="flex items-center px-6 py-3 bg-gradient-to-r from-[#00E834] to-green-600 text-black rounded-xl font-black hover:from-green-600 hover:to-[#00E834] transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <PlusCircle className="w-4 h-4 mr-2" />
            QUICK TRADE
          </motion.button>
        </div>
      </motion.div>

      {/* Balance Overview */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-4 gap-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        {[
          {
            label: 'Portfolio Value',
            value: balanceVisible ? formatCurrency(totalValue) : '••••••',
            change: totalPnL,
            changePercent: totalPnLPercent,
            icon: BarChart3
          },
          {
            label: 'Available Balance',
            value: balanceVisible ? formatCurrency(availableBalance) : '••••••',
            change: 0,
            changePercent: 0,
            icon: Wallet
          },
          {
            label: 'Total P&L',
            value: balanceVisible ? formatCurrency(totalPnL) : '••••••',
            change: totalPnL,
            changePercent: totalPnLPercent,
            icon: totalPnL >= 0 ? TrendingUp : TrendingDown
          },
          {
            label: 'Holdings',
            value: portfolio.length.toString(),
            change: 0,
            changePercent: 0,
            icon: PieChart
          }
        ].map((stat, index) => (
          <motion.div
            key={index}
            className="bg-gradient-to-br from-black/90 via-gray-900/70 to-black/90 border border-[#00E834]/30 rounded-2xl p-6 backdrop-blur-md relative overflow-hidden"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className="flex items-center justify-between mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-[#00E834] to-green-600 rounded-xl flex items-center justify-center">
                <stat.icon className="w-5 h-5 text-white" />
              </div>
              {index === 0 && (
                <button
                  onClick={() => setBalanceVisible(!balanceVisible)}
                  className="p-2 text-gray-400 hover:text-white transition-colors"
                >
                  {balanceVisible ? <Eye className="w-4 h-4" /> : <EyeOff className="w-4 h-4" />}
                </button>
              )}
            </div>

            <div className="text-2xl font-black text-white mb-1">{stat.value}</div>
            <div className="text-gray-400 text-sm font-bold mb-2">{stat.label}</div>

            {stat.change !== 0 && (
              <div className={`flex items-center text-sm font-bold ${
                stat.change >= 0 ? 'text-green-400' : 'text-red-400'
              }`}>
                {stat.change >= 0 ? <ArrowUpRight className="w-4 h-4 mr-1" /> : <ArrowDownRight className="w-4 h-4 mr-1" />}
                {stat.change >= 0 ? '+' : ''}{formatCurrency(stat.change)} ({stat.changePercent.toFixed(2)}%)
              </div>
            )}
          </motion.div>
        ))}
      </motion.div>

      {/* Main Content */}
      {activeTab === 'portfolio' && (
        <motion.div
          className="bg-gradient-to-br from-black/90 via-gray-900/70 to-black/90 border border-[#00E834]/30 rounded-2xl backdrop-blur-md overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="p-6 border-b border-[#00E834]/30">
            <h3 className="text-xl font-black text-white tracking-wide">YOUR HOLDINGS</h3>
          </div>

          <div className="p-6">
            <div className="grid grid-cols-8 gap-4 mb-4 text-[#00E834] font-black text-sm tracking-wider">
              <div>COMMODITY</div>
              <div className="text-right">QTY</div>
              <div className="text-right">AVG. PRICE</div>
              <div className="text-right">CURRENT PRICE</div>
              <div className="text-right">VALUE</div>
              <div className="text-right">P&L</div>
              <div className="text-right">P&L %</div>
              <div className="text-right">ACTIONS</div>
            </div>

            <div className="space-y-3">
              {portfolio.map((holding, index) => (
                <motion.div
                  key={holding.id}
                  className="grid grid-cols-8 gap-4 p-4 rounded-xl bg-gray-900/30 border border-[#00E834]/10 hover:border-[#00E834]/30 transition-all duration-300"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="font-black text-white text-sm">
                    {holding.commodity} ({holding.symbol})
                  </div>
                  <div className="text-right font-black text-white text-sm">
                    {holding.quantity.toLocaleString()}
                  </div>
                  <div className="text-right text-gray-400 text-sm">
                    ${holding.avgPrice.toFixed(2)}
                  </div>
                  <div className="text-right text-white font-bold text-sm">
                    ${holding.currentPrice.toFixed(2)}
                  </div>
                  <div className="text-right text-white font-bold text-sm">
                    {formatCurrency(holding.totalValue)}
                  </div>
                  <div className={`text-right font-bold text-sm ${
                    holding.pnl >= 0 ? 'text-green-400' : 'text-red-400'
                  }`}>
                    {holding.pnl >= 0 ? '+' : ''}{formatCurrency(holding.pnl)}
                  </div>
                  <div className={`text-right font-bold text-sm ${
                    holding.pnlPercent >= 0 ? 'text-green-400' : 'text-red-400'
                  }`}>
                    {holding.pnlPercent >= 0 ? '+' : ''}{holding.pnlPercent.toFixed(2)}%
                  </div>
                  <div className="flex justify-end space-x-2">
                    <motion.button
                      className="px-3 py-1 bg-green-500/20 text-green-400 rounded-lg font-black text-xs hover:bg-green-500/30 transition-all"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      BUY
                    </motion.button>
                    <motion.button
                      className="px-3 py-1 bg-red-500/20 text-red-400 rounded-lg font-black text-xs hover:bg-red-500/30 transition-all"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      SELL
                    </motion.button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      )}

      {activeTab === 'trading' && (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Order Book */}
          <motion.div
            className="lg:col-span-2 bg-gradient-to-br from-black/90 via-gray-900/70 to-black/90 border border-[#00E834]/30 rounded-2xl p-6 backdrop-blur-md relative overflow-hidden"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h3 className="text-xl font-black text-white tracking-wide mb-6">ORDER BOOK - {selectedCommodity}</h3>

            <div className="grid grid-cols-2 gap-6">
              {/* Sell Orders */}
              <div>
                <h4 className="text-red-400 font-black text-sm mb-4 tracking-wider">SELL ORDERS</h4>
                <div className="space-y-2">
                  {sellOrders.map((order, index) => (
                    <motion.div
                      key={index}
                      className="grid grid-cols-3 gap-2 p-2 rounded-lg bg-red-500/10 border border-red-500/20 hover:bg-red-500/20 transition-all cursor-pointer"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                    >
                      <div className="text-red-400 font-bold text-sm">${order.price.toFixed(2)}</div>
                      <div className="text-white font-medium text-sm text-center">{order.quantity}</div>
                      <div className="text-gray-400 font-medium text-sm text-right">{formatCurrency(order.total)}</div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Buy Orders */}
              <div>
                <h4 className="text-green-400 font-black text-sm mb-4 tracking-wider">BUY ORDERS</h4>
                <div className="space-y-2">
                  {buyOrders.map((order, index) => (
                    <motion.div
                      key={index}
                      className="grid grid-cols-3 gap-2 p-2 rounded-lg bg-green-500/10 border border-green-500/20 hover:bg-green-500/20 transition-all cursor-pointer"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                    >
                      <div className="text-green-400 font-bold text-sm">${order.price.toFixed(2)}</div>
                      <div className="text-white font-medium text-sm text-center">{order.quantity}</div>
                      <div className="text-gray-400 font-medium text-sm text-right">{formatCurrency(order.total)}</div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#00E834]/50 to-transparent"></div>
          </motion.div>

          {/* Quick Trade Panel */}
          <motion.div
            className="bg-gradient-to-br from-black/90 via-gray-900/70 to-black/90 border border-[#00E834]/30 rounded-2xl p-6 backdrop-blur-md relative overflow-hidden"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <h3 className="text-xl font-black text-white tracking-wide mb-6">QUICK TRADE</h3>

            {/* Trade Action Selector */}
            <div className="grid grid-cols-2 gap-2 mb-4">
              <button
                onClick={() => setTradeAction('buy')}
                className={`py-3 rounded-xl font-black text-sm transition-all ${
                  tradeAction === 'buy'
                    ? 'bg-green-500 text-white'
                    : 'bg-green-500/20 text-green-400 border border-green-500/30'
                }`}
              >
                BUY
              </button>
              <button
                onClick={() => setTradeAction('sell')}
                className={`py-3 rounded-xl font-black text-sm transition-all ${
                  tradeAction === 'sell'
                    ? 'bg-red-500 text-white'
                    : 'bg-red-500/20 text-red-400 border border-red-500/30'
                }`}
              >
                SELL
              </button>
            </div>

            {/* Commodity Selector */}
            <div className="mb-4">
              <label className="block text-[#00E834] font-black text-sm mb-2 tracking-wider">COMMODITY</label>
              <select
                value={selectedCommodity}
                onChange={(e) => setSelectedCommodity(e.target.value)}
                className="w-full bg-gray-900/50 border border-[#00E834]/30 rounded-xl px-4 py-3 text-white focus:border-[#00E834] focus:outline-none"
              >
                <option value="WHT">Wheat (WHT)</option>
                <option value="CRN">Corn (CRN)</option>
                <option value="BEEF">Beef Cattle (BEEF)</option>
                <option value="MLK">Milk (MLK)</option>
              </select>
            </div>

            {/* Order Type */}
            <div className="mb-4">
              <label className="block text-[#00E834] font-black text-sm mb-2 tracking-wider">ORDER TYPE</label>
              <div className="grid grid-cols-2 gap-2">
                <button
                  onClick={() => setOrderType('market')}
                  className={`py-2 rounded-xl font-black text-sm transition-all ${
                    orderType === 'market'
                      ? 'bg-[#00E834] text-black'
                      : 'bg-gray-900/50 text-white border border-[#00E834]/30'
                  }`}
                >
                  MARKET
                </button>
                <button
                  onClick={() => setOrderType('limit')}
                  className={`py-2 rounded-xl font-black text-sm transition-all ${
                    orderType === 'limit'
                      ? 'bg-[#00E834] text-black'
                      : 'bg-gray-900/50 text-white border border-[#00E834]/30'
                  }`}
                >
                  LIMIT
                </button>
              </div>
            </div>

            {/* Amount */}
            <div className="mb-4">
              <label className="block text-[#00E834] font-black text-sm mb-2 tracking-wider">QUANTITY</label>
              <input
                type="number"
                value={orderAmount}
                onChange={(e) => setOrderAmount(e.target.value)}
                placeholder="Enter quantity..."
                className="w-full bg-gray-900/50 border border-[#00E834]/30 rounded-xl px-4 py-3 text-white focus:border-[#00E834] focus:outline-none"
              />
            </div>

            {/* Limit Price */}
            {orderType === 'limit' && (
              <div className="mb-4">
                <label className="block text-[#00E834] font-black text-sm mb-2 tracking-wider">LIMIT PRICE</label>
                <input
                  type="number"
                  step="0.01"
                  value={limitPrice}
                  onChange={(e) => setLimitPrice(e.target.value)}
                  placeholder="Enter limit price..."
                  className="w-full bg-gray-900/50 border border-[#00E834]/30 rounded-xl px-4 py-3 text-white focus:border-[#00E834] focus:outline-none"
                />
              </div>
            )}

            {/* Trade Summary */}
            {orderAmount && (
              <div className="mb-4 p-3 bg-gray-900/30 rounded-xl border border-[#00E834]/20">
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-gray-400">Estimated Total:</span>
                  <span className="text-white font-bold">
                    {formatCurrency(parseFloat(orderAmount) * (orderType === 'limit' ? parseFloat(limitPrice || '0') : 7.45))}
                  </span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">Available Balance:</span>
                  <span className="text-[#00E834] font-bold">{formatCurrency(availableBalance)}</span>
                </div>
              </div>
            )}

            {/* Place Order Button */}
            <motion.button
              onClick={placeOrder}
              disabled={!orderAmount || (orderType === 'limit' && !limitPrice)}
              className={`w-full py-3 rounded-xl font-black text-sm tracking-wide transition-all disabled:opacity-50 disabled:cursor-not-allowed ${
                tradeAction === 'buy'
                  ? 'bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-500 text-white'
                  : 'bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-500 text-white'
              }`}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {tradeAction === 'buy' ? 'PLACE BUY ORDER' : 'PLACE SELL ORDER'}
            </motion.button>

            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#00E834]/50 to-transparent"></div>
          </motion.div>
        </div>
      )}

      {activeTab === 'orders' && (
        <motion.div
          className="bg-gradient-to-br from-black/90 via-gray-900/70 to-black/90 border border-[#00E834]/30 rounded-2xl backdrop-blur-md overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="p-6 border-b border-[#00E834]/30">
            <h3 className="text-xl font-black text-white tracking-wide">OPEN ORDERS</h3>
          </div>

          <div className="p-6">
            <div className="text-center py-12">
              <Clock className="w-16 h-16 text-[#00E834] mx-auto mb-4" />
              <h4 className="text-xl font-black text-white mb-2">No Open Orders</h4>
              <p className="text-gray-400">Your open orders will appear here</p>
            </div>
          </div>
        </motion.div>
      )}

      {activeTab === 'history' && (
        <motion.div
          className="bg-gradient-to-br from-black/90 via-gray-900/70 to-black/90 border border-[#00E834]/30 rounded-2xl backdrop-blur-md overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="p-6 border-b border-[#00E834]/30">
            <h3 className="text-xl font-black text-white tracking-wide">TRADE HISTORY</h3>
          </div>

          <div className="p-6">
            <div className="grid grid-cols-7 gap-4 mb-4 text-[#00E834] font-black text-sm tracking-wider">
              <div>TYPE</div>
              <div>COMMODITY</div>
              <div className="text-right">QUANTITY</div>
              <div className="text-right">PRICE</div>
              <div className="text-right">TOTAL</div>
              <div className="text-center">STATUS</div>
              <div className="text-right">TIME</div>
            </div>

            <div className="space-y-3">
              {recentTrades.map((trade, index) => (
                <motion.div
                  key={trade.id}
                  className="grid grid-cols-7 gap-4 p-4 rounded-xl bg-gray-900/30 border border-[#00E834]/10 hover:border-[#00E834]/30 transition-all duration-300"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className={`font-black text-sm ${trade.type === 'buy' ? 'text-green-400' : 'text-red-400'}`}>
                    {trade.type.toUpperCase()}
                  </div>

                  <div className="font-black text-white text-sm">
                    {trade.commodity} ({trade.symbol})
                  </div>

                  <div className="text-right font-black text-white text-sm">
                    {trade.quantity.toLocaleString()}
                  </div>

                  <div className="text-right font-black text-white text-sm">
                    ${trade.price.toFixed(2)}
                  </div>

                  <div className="text-right font-black text-white text-sm">
                    {formatCurrency(trade.total)}
                  </div>

                  <div className="text-center">
                    <span className={`px-2 py-1 rounded-lg text-xs font-bold ${
                      trade.status === 'completed' ? 'bg-green-500/20 text-green-400' :
                      trade.status === 'pending' ? 'bg-orange-500/20 text-orange-400' :
                      'bg-red-500/20 text-red-400'
                    }`}>
                      {trade.status.toUpperCase()}
                    </span>
                  </div>

                  <div className="text-right text-gray-400 text-sm">
                    {formatTime(trade.timestamp)}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      )}

      {/* Quick Trade Modal */}
      <AnimatePresence>
        {showOrderForm && (
          <motion.div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-gradient-to-br from-black/95 via-gray-900/90 to-black/95 border border-[#00E834]/30 rounded-2xl p-6 max-w-md w-full backdrop-blur-md"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
            >
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-black text-white tracking-wide">PLACE ORDER</h3>
                <button
                  onClick={() => setShowOrderForm(false)}
                  className="p-2 bg-gray-700/30 text-gray-400 rounded-xl hover:bg-gray-700/50 transition-all"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              <div className="space-y-4">
                {/* Trade Action Selector */}
                <div className="grid grid-cols-2 gap-2">
                  <button
                    onClick={() => setTradeAction('buy')}
                    className={`py-3 rounded-xl font-black text-sm transition-all ${
                      tradeAction === 'buy'
                        ? 'bg-green-500 text-white'
                        : 'bg-green-500/20 text-green-400 border border-green-500/30'
                    }`}
                  >
                    BUY
                  </button>
                  <button
                    onClick={() => setTradeAction('sell')}
                    className={`py-3 rounded-xl font-black text-sm transition-all ${
                      tradeAction === 'sell'
                        ? 'bg-red-500 text-white'
                        : 'bg-red-500/20 text-red-400 border border-red-500/30'
                    }`}
                  >
                    SELL
                  </button>
                </div>

                {/* Commodity Selector */}
                <div className="mb-4">
                  <label className="block text-[#00E834] font-black text-sm mb-2 tracking-wider">COMMODITY</label>
                  <select
                    value={selectedCommodity}
                    onChange={(e) => setSelectedCommodity(e.target.value)}
                    className="w-full bg-gray-900/50 border border-[#00E834]/30 rounded-xl px-4 py-3 text-white focus:border-[#00E834] focus:outline-none"
                  >
                    <option value="WHT">Wheat (WHT)</option>
                    <option value="CRN">Corn (CRN)</option>
                    <option value="BEEF">Beef Cattle (BEEF)</option>
                    <option value="MLK">Milk (MLK)</option>
                  </select>
                </div>

                {/* Order Type */}
                <div className="mb-4">
                  <label className="block text-[#00E834] font-black text-sm mb-2 tracking-wider">ORDER TYPE</label>
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      onClick={() => setOrderType('market')}
                      className={`py-2 rounded-xl font-black text-sm transition-all ${
                        orderType === 'market'
                          ? 'bg-[#00E834] text-black'
                          : 'bg-gray-900/50 text-white border border-[#00E834]/30'
                      }`}
                    >
                      MARKET
                    </button>
                    <button
                      onClick={() => setOrderType('limit')}
                      className={`py-2 rounded-xl font-black text-sm transition-all ${
                        orderType === 'limit'
                          ? 'bg-[#00E834] text-black'
                          : 'bg-gray-900/50 text-white border border-[#00E834]/30'
                      }`}
                    >
                      LIMIT
                    </button>
                  </div>
                </div>

                {/* Amount */}
                <div className="mb-4">
                  <label className="block text-[#00E834] font-black text-sm mb-2 tracking-wider">QUANTITY</label>
                  <input
                    type="number"
                    value={orderAmount}
                    onChange={(e) => setOrderAmount(e.target.value)}
                    placeholder="Enter quantity..."
                    className="w-full bg-gray-900/50 border border-[#00E834]/30 rounded-xl px-4 py-3 text-white focus:border-[#00E834] focus:outline-none"
                  />
                </div>

                {/* Limit Price */}
                {orderType === 'limit' && (
                  <div className="mb-4">
                    <label className="block text-[#00E834] font-black text-sm mb-2 tracking-wider">LIMIT PRICE</label>
                    <input
                      type="number"
                      step="0.01"
                      value={limitPrice}
                      onChange={(e) => setLimitPrice(e.target.value)}
                      placeholder="Enter limit price..."
                      className="w-full bg-gray-900/50 border border-[#00E834]/30 rounded-xl px-4 py-3 text-white focus:border-[#00E834] focus:outline-none"
                    />
                  </div>
                )}

                {/* Trade Summary */}
                {orderAmount && (
                  <div className="mb-4 p-3 bg-gray-900/30 rounded-xl border border-[#00E834]/20">
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-gray-400">Estimated Total:</span>
                      <span className="text-white font-bold">
                        {formatCurrency(parseFloat(orderAmount) * (orderType === 'limit' ? parseFloat(limitPrice || '0') : 7.45))}
                      </span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">Available Balance:</span>
                      <span className="text-[#00E834] font-bold">{formatCurrency(availableBalance)}</span>
                    </div>
                  </div>
                )}

                <motion.button
                  onClick={placeOrder}
                  disabled={!orderAmount || (orderType === 'limit' && !limitPrice)}
                  className={`w-full py-3 rounded-xl font-black text-sm tracking-wide transition-all disabled:opacity-50 disabled:cursor-not-allowed ${
                    tradeAction === 'buy'
                      ? 'bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-500 text-white'
                      : 'bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-500 text-white'
                  }`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {tradeAction === 'buy' ? 'PLACE BUY ORDER' : 'PLACE SELL ORDER'}
                </motion.button>
              </div>

              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#00E834]/50 to-transparent"></div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}