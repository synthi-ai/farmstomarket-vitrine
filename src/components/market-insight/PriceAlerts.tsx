/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Bell,
  TrendingUp,
  AlertTriangle,
  Plus,
  X,
  Trash2,
  Settings,
  Volume2,
  VolumeX,
  Smartphone,
  Mail,
  MessageSquare,
  Target,
  CheckCircle,
  XCircle,
  Activity
} from 'lucide-react';

interface PriceAlert {
  id: string;
  commodity: string;
  symbol: string;
  type: 'above' | 'below' | 'change_percent';
  targetPrice: number;
  currentPrice: number;
  isActive: boolean;
  createdAt: string;
  triggeredAt?: string;
  notificationMethods: ('push' | 'email' | 'sms')[];
}

interface Notification {
  id: string;
  type: 'alert_triggered' | 'price_spike' | 'volume_surge' | 'market_update';
  title: string;
  message: string;
  commodity: string;
  timestamp: string;
  isRead: boolean;
  priority: 'low' | 'medium' | 'high' | 'critical';
  icon: any;
}

export default function PriceAlerts() {
  const [alerts, setAlerts] = useState<PriceAlert[]>([
    {
      id: '1',
      commodity: 'Wheat',
      symbol: 'WHT',
      type: 'above',
      targetPrice: 8.00,
      currentPrice: 7.45,
      isActive: true,
      createdAt: '2024-01-15T10:30:00Z',
      notificationMethods: ['push', 'email']
    },
    {
      id: '2',
      commodity: 'Corn',
      symbol: 'CRN',
      type: 'below',
      targetPrice: 6.50,
      currentPrice: 6.78,
      isActive: true,
      createdAt: '2024-01-14T15:45:00Z',
      notificationMethods: ['push']
    },
    {
      id: '3',
      commodity: 'Beef Cattle',
      symbol: 'BEEF',
      type: 'change_percent',
      targetPrice: 5.0, // 5% change
      currentPrice: 142.50,
      isActive: false,
      createdAt: '2024-01-13T09:15:00Z',
      triggeredAt: '2024-01-15T14:20:00Z',
      notificationMethods: ['push', 'email', 'sms']
    }
  ]);

  const [notifications, setNotifications] = useState<Notification[]>([
    {
      id: '1',
      type: 'alert_triggered',
      title: 'Price Alert Triggered',
      message: 'Beef Cattle reached your target of 5% price increase',
      commodity: 'BEEF',
      timestamp: '2024-01-15T14:20:00Z',
      isRead: false,
      priority: 'high',
      icon: TrendingUp
    },
    {
      id: '2',
      type: 'price_spike',
      title: 'Sudden Price Movement',
      message: 'Milk prices surged 8% in the last hour',
      commodity: 'MLK',
      timestamp: '2024-01-15T13:45:00Z',
      isRead: false,
      priority: 'critical',
      icon: AlertTriangle
    },
    {
      id: '3',
      type: 'volume_surge',
      title: 'High Trading Volume',
      message: 'Wheat trading volume exceeded 200% of daily average',
      commodity: 'WHT',
      timestamp: '2024-01-15T12:30:00Z',
      isRead: true,
      priority: 'medium',
      icon: TrendingUp
    }
  ]);

  const [showCreateAlert, setShowCreateAlert] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [newAlert, setNewAlert] = useState<{
    commodity: string;
    symbol: string;
    type: PriceAlert['type']; // Corrected type
    targetPrice: number;
    notificationMethods: ('push' | 'email' | 'sms')[];
  }>({
    commodity: '',
    symbol: '',
    type: 'above',
    targetPrice: 0,
    notificationMethods: ['push']
  });

  // Simulation de nouvelles notifications
  useEffect(() => {
    const interval = setInterval(() => {
      if (Math.random() > 0.85) { // 15% chance chaque 10 secondes
        const newNotification: Notification = {
          id: Date.now().toString(),
          type: 'market_update',
          title: 'Market Update',
          message: `Price movement detected in ${['Wheat', 'Corn', 'Rice'][Math.floor(Math.random() * 3)]}`,
          commodity: 'WHT',
          timestamp: new Date().toISOString(),
          isRead: false,
          priority: 'low',
          icon: Activity
        };

        setNotifications(prev => [newNotification, ...prev.slice(0, 9)]);

        if (soundEnabled) {
          // Simuler son de notification
          console.log('🔔 Notification sound');
        }
      }
    }, 10000);

    return () => clearInterval(interval);
  }, [soundEnabled]);

  const createAlert = () => {
    if (!newAlert.commodity || !newAlert.targetPrice) return;

    const alert: PriceAlert = {
      id: Date.now().toString(),
      commodity: newAlert.commodity,
      symbol: newAlert.symbol || newAlert.commodity.substring(0, 3).toUpperCase(),
      type: newAlert.type,
      targetPrice: newAlert.targetPrice,
      currentPrice: Math.random() * 100, // Simulé
      isActive: true,
      createdAt: new Date().toISOString(),
      notificationMethods: newAlert.notificationMethods
    };

    setAlerts(prev => [alert, ...prev]);
    setShowCreateAlert(false);
    setNewAlert({
      commodity: '',
      symbol: '',
      type: 'above',
      targetPrice: 0,
      notificationMethods: ['push']
    });
  };

  const deleteAlert = (id: string) => {
    setAlerts(prev => prev.filter(alert => alert.id !== id));
  };

  const toggleAlert = (id: string) => {
    setAlerts(prev => prev.map(alert =>
      alert.id === id ? { ...alert, isActive: !alert.isActive } : alert
    ));
  };

  const markAsRead = (id: string) => {
    setNotifications(prev => prev.map(notif =>
      notif.id === id ? { ...notif, isRead: true } : notif
    ));
  };

  const unreadCount = notifications.filter(n => !n.isRead).length;

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'critical': return 'from-red-500 to-pink-500';
      case 'high': return 'from-orange-500 to-red-500';
      case 'medium': return 'from-[#00E834] to-green-600';
      case 'low': return 'from-blue-500 to-cyan-500';
      default: return 'from-gray-500 to-gray-600';
    }
  };

  const formatTime = (timestamp: string) => {
    const date = new Date(timestamp);
    const now = new Date();
    const diff = now.getTime() - date.getTime();

    if (diff < 60000) return 'Just now';
    if (diff < 3600000) return `${Math.floor(diff / 60000)}m ago`;
    if (diff < 86400000) return `${Math.floor(diff / 3600000)}h ago`;
    return `${Math.floor(diff / 86400000)}d ago`;
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {/* Price Alerts Panel */}
      <motion.div
        className="bg-gradient-to-br from-black/90 via-gray-900/70 to-black/90 border border-[#00E834]/30 rounded-2xl p-6 backdrop-blur-md relative overflow-hidden"
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-[#00E834] to-green-600 rounded-xl flex items-center justify-center">
              <Target className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 className="text-xl font-black text-white tracking-wide">PRICE ALERTS</h3>
              <p className="text-gray-400 text-sm">{alerts.filter(a => a.isActive).length} active alerts</p>
            </div>
          </div>

          <motion.button
            onClick={() => setShowCreateAlert(true)}
            className="p-2 bg-gradient-to-r from-[#00E834] to-green-600 rounded-xl text-black hover:from-green-600 hover:to-[#00E834] transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Plus className="w-5 h-5" />
          </motion.button>
        </div>

        {/* Alerts List */}
        <div className="space-y-3 max-h-96 overflow-y-auto">
          {alerts.map((alert, index) => (
            <motion.div
              key={alert.id}
              className={`p-4 rounded-xl border transition-all duration-300 ${
                alert.isActive
                  ? 'bg-gradient-to-r from-[#00E834]/10 to-transparent border-[#00E834]/30'
                  : 'bg-gray-900/30 border-gray-700/30'
              } ${alert.triggeredAt ? 'bg-gradient-to-r from-orange-500/20 to-transparent border-orange-500/40' : ''}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-2">
                    <span className="font-black text-white text-sm">{alert.commodity}</span>
                    <span className="text-gray-400 text-xs">({alert.symbol})</span>
                    {alert.triggeredAt && (
                      <span className="px-2 py-1 bg-orange-500/20 text-orange-400 rounded-lg text-xs font-bold">
                        TRIGGERED
                      </span>
                    )}
                  </div>

                  <div className="text-gray-300 text-sm mb-2">
                    {alert.type === 'above' && `Alert when price goes above $${alert.targetPrice}`}
                    {alert.type === 'below' && `Alert when price goes below $${alert.targetPrice}`}
                    {alert.type === 'change_percent' && `Alert when price changes by ${alert.targetPrice}%`}
                  </div>

                  <div className="flex items-center space-x-4 text-xs text-gray-400">
                    <span>Current: ${alert.currentPrice.toFixed(2)}</span>
                    <span>Created: {formatTime(alert.createdAt)}</span>
                  </div>

                  <div className="flex items-center space-x-1 mt-2">
                    {alert.notificationMethods.map(method => (
                      <div
                        key={method}
                        className="w-6 h-6 bg-[#00E834]/20 rounded-lg flex items-center justify-center"
                      >
                        {method === 'push' && <Smartphone className="w-3 h-3 text-[#00E834]" />}
                        {method === 'email' && <Mail className="w-3 h-3 text-[#00E834]" />}
                        {method === 'sms' && <MessageSquare className="w-3 h-3 text-[#00E834]" />}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col space-y-2 ml-4">
                  <motion.button
                    onClick={() => toggleAlert(alert.id)}
                    className={`p-2 rounded-lg transition-all ${
                      alert.isActive
                        ? 'bg-[#00E834]/20 text-[#00E834] hover:bg-[#00E834]/30'
                        : 'bg-gray-700/30 text-gray-400 hover:bg-gray-700/50'
                    }`}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    {alert.isActive ? <CheckCircle className="w-4 h-4" /> : <XCircle className="w-4 h-4" />}
                  </motion.button>

                  <motion.button
                    onClick={() => deleteAlert(alert.id)}
                    className="p-2 bg-red-500/20 text-red-400 rounded-lg hover:bg-red-500/30 transition-all"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Trash2 className="w-4 h-4" />
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Scan lines */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#00E834]/50 to-transparent"></div>
      </motion.div>

      {/* Notifications Panel */}
      <motion.div
        className="bg-gradient-to-br from-black/90 via-gray-900/70 to-black/90 border border-[#00E834]/30 rounded-2xl p-6 backdrop-blur-md relative overflow-hidden"
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-[#00E834] to-green-600 rounded-xl flex items-center justify-center relative">
              <Bell className="w-5 h-5 text-white" />
              {unreadCount > 0 && (
                <motion.div
                  className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full flex items-center justify-center"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <span className="text-white text-xs font-black">{unreadCount}</span>
                </motion.div>
              )}
            </div>
            <div>
              <h3 className="text-xl font-black text-white tracking-wide">NOTIFICATIONS</h3>
              <p className="text-gray-400 text-sm">{unreadCount} unread messages</p>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <motion.button
              onClick={() => setSoundEnabled(!soundEnabled)}
              className={`p-2 rounded-xl transition-all ${
                soundEnabled
                  ? 'bg-[#00E834]/20 text-[#00E834]'
                  : 'bg-gray-700/30 text-gray-400'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {soundEnabled ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
            </motion.button>

            <motion.button
              className="p-2 bg-gray-700/30 text-gray-400 rounded-xl hover:bg-gray-700/50 transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Settings className="w-4 h-4" />
            </motion.button>
          </div>
        </div>

        {/* Notifications List */}
        <div className="space-y-3 max-h-96 overflow-y-auto">
          <AnimatePresence>
            {notifications.map((notification, index) => (
              <motion.div
                key={notification.id}
                className={`p-4 rounded-xl border transition-all duration-300 cursor-pointer ${
                  notification.isRead
                    ? 'bg-gray-900/30 border-gray-700/30'
                    : 'bg-gradient-to-r from-[#00E834]/10 to-transparent border-[#00E834]/30'
                }`}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onClick={() => markAsRead(notification.id)}
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex items-start space-x-3">
                  {/* Priority Indicator & Icon */}
                  <div className={`w-10 h-10 bg-gradient-to-br ${getPriorityColor(notification.priority)} rounded-xl flex items-center justify-center flex-shrink-0`}>
                    <notification.icon className="w-5 h-5 text-white" />
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-1">
                      <h4 className={`font-black text-sm tracking-wide ${notification.isRead ? 'text-gray-400' : 'text-white'}`}>
                        {notification.title}
                      </h4>
                      <div className="flex items-center space-x-2">
                        {!notification.isRead && (
                          <div className="w-2 h-2 bg-[#00E834] rounded-full animate-pulse"></div>
                        )}
                        <span className="text-gray-500 text-xs font-medium">
                          {formatTime(notification.timestamp)}
                        </span>
                      </div>
                    </div>

                    <p className={`text-sm leading-relaxed ${notification.isRead ? 'text-gray-500' : 'text-gray-300'}`}>
                      {notification.message}
                    </p>

                    <div className="flex items-center justify-between mt-2">
                      <span className={`px-2 py-1 rounded-lg text-xs font-bold ${
                        notification.isRead ? 'bg-gray-700/30 text-gray-500' : 'bg-[#00E834]/20 text-[#00E834]'
                      }`}>
                        {notification.commodity}
                      </span>

                      <span className={`px-2 py-1 bg-gradient-to-r ${getPriorityColor(notification.priority)} text-white rounded-lg text-xs font-black`}>
                        {notification.priority.toUpperCase()}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Scan lines */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#00E834]/50 to-transparent"></div>
      </motion.div>

      {/* Create Alert Modal */}
      <AnimatePresence>
        {showCreateAlert && (
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
                <h3 className="text-xl font-black text-white tracking-wide">CREATE PRICE ALERT</h3>
                <button
                  onClick={() => setShowCreateAlert(false)}
                  className="p-2 bg-gray-700/30 text-gray-400 rounded-xl hover:bg-gray-700/50 transition-all"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              <div className="space-y-4">
                {/* Commodity Selection */}
                <div>
                  <label className="block text-[#00E834] font-black text-sm mb-2 tracking-wider">COMMODITY</label>
                  <select
                    value={newAlert.commodity}
                    onChange={(e) => setNewAlert(prev => ({
                      ...prev,
                      commodity: e.target.value,
                      symbol: e.target.value.substring(0, 3).toUpperCase()
                    }))}
                    className="w-full bg-gray-900/50 border border-[#00E834]/30 rounded-xl px-4 py-3 text-white focus:border-[#00E834] focus:outline-none"
                  >
                    <option value="">Select commodity...</option>
                    <option value="Wheat">Wheat</option>
                    <option value="Corn">Corn</option>
                    <option value="Rice">Rice</option>
                    <option value="Beef Cattle">Beef Cattle</option>
                    <option value="Milk">Milk</option>
                    <option value="Salmon">Salmon</option>
                  </select>
                </div>

                {/* Alert Type */}
                <div>
                  <label className="block text-[#00E834] font-black text-sm mb-2 tracking-wider">ALERT TYPE</label>
                  <div className="grid grid-cols-3 gap-2">
                    {[
                      { value: 'above', label: 'ABOVE' },
                      { value: 'below', label: 'BELOW' },
                      { value: 'change_percent', label: '% CHANGE' }
                    ].map((type) => (
                      <button
                        key={type.value}
                        onClick={() => setNewAlert(prev => ({ ...prev, type: type.value as PriceAlert['type'] }))} // Explicit cast
                        className={`py-2 px-3 rounded-xl font-black text-xs transition-all ${
                          newAlert.type === type.value
                            ? 'bg-[#00E834] text-black'
                            : 'bg-gray-900/50 text-white border border-[#00E834]/30 hover:bg-[#00E834]/10'
                        }`}
                      >
                        {type.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Target Price */}
                <div>
                  <label className="block text-[#00E834] font-black text-sm mb-2 tracking-wider">
                    {newAlert.type === 'change_percent' ? 'PERCENTAGE (%)' : 'TARGET PRICE ($)'}
                  </label>
                  <input
                    type="number"
                    step="0.01"
                    value={newAlert.targetPrice || ''}
                    onChange={(e) => setNewAlert(prev => ({ ...prev, targetPrice: parseFloat(e.target.value) || 0 }))}
                    className="w-full bg-gray-900/50 border border-[#00E834]/30 rounded-xl px-4 py-3 text-white focus:border-[#00E834] focus:outline-none"
                    placeholder={newAlert.type === 'change_percent' ? 'e.g., 5' : 'e.g., 10.50'}
                  />
                </div>

                {/* Notification Methods */}
                <div>
                  <label className="block text-[#00E834] font-black text-sm mb-2 tracking-wider">NOTIFICATIONS</label>
                  <div className="flex space-x-2">
                    {[
                      { value: 'push', label: 'PUSH', icon: Smartphone },
                      { value: 'email', label: 'EMAIL', icon: Mail },
                      { value: 'sms', label: 'SMS', icon: MessageSquare }
                    ].map((method) => (
                      <button
                        key={method.value}
                        onClick={() => {
                          const methods = newAlert.notificationMethods.includes(method.value as any)
                            ? newAlert.notificationMethods.filter(m => m !== method.value)
                            : [...newAlert.notificationMethods, method.value as any];
                          setNewAlert(prev => ({ ...prev, notificationMethods: methods }));
                        }}
                        className={`flex items-center py-2 px-3 rounded-xl font-black text-xs transition-all ${
                          newAlert.notificationMethods.includes(method.value as any)
                            ? 'bg-[#00E834] text-black'
                            : 'bg-gray-900/50 text-white border border-[#00E834]/30 hover:bg-[#00E834]/10'
                        }`}
                      >
                        <method.icon className="w-3 h-3 mr-1" />
                        {method.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="flex space-x-3 pt-4">
                  <motion.button
                    onClick={createAlert}
                    disabled={!newAlert.commodity || !newAlert.targetPrice}
                    className="flex-1 bg-gradient-to-r from-[#00E834] to-green-600 text-black py-3 rounded-xl font-black tracking-wide hover:from-green-600 hover:to-[#00E834] transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    CREATE ALERT
                  </motion.button>

                  <motion.button
                    onClick={() => setShowCreateAlert(false)}
                    className="px-6 bg-gray-900/50 text-white border border-[#00E834]/30 py-3 rounded-xl font-black hover:bg-gray-900/70 transition-all"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    CANCEL
                  </motion.button>
                </div>
              </div>

              {/* Scan lines */}
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#00E834]/50 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#00E834]/50 to-transparent"></div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}