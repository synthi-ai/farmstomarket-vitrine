'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Bell,
  BellRing,
  TrendingUp,
  TrendingDown,
  Target,
  Plus,
  Edit3,
  Trash2,
  Check,
  X
} from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

interface PriceAlert {
  id: string;
  commodity: string;
  symbol: string;
  alertType: 'above' | 'below' | 'change';
  targetPrice?: number;
  changePercent?: number;
  currentPrice: number;
  isActive: boolean;
  isTriggered: boolean;
  createdAt: string;
  triggeredAt?: string;
}

export default function PriceAlerts() {
  const { t, language } = useLanguage();
  const [alerts, setAlerts] = useState<PriceAlert[]>([
    {
      id: '1',
      commodity: 'Wheat',
      symbol: 'WHT',
      alertType: 'above',
      targetPrice: 8.00,
      currentPrice: 7.45,
      isActive: true,
      isTriggered: false,
      createdAt: '2024-01-15T10:00:00Z'
    },
    {
      id: '2',
      commodity: 'Corn',
      symbol: 'CRN',
      alertType: 'below',
      targetPrice: 6.50,
      currentPrice: 6.78,
      isActive: true,
      isTriggered: false,
      createdAt: '2024-01-15T09:30:00Z'
    },
    {
      id: '3',
      commodity: 'Beef Cattle',
      symbol: 'BEEF',
      alertType: 'change',
      changePercent: 5,
      currentPrice: 142.50,
      isActive: false,
      isTriggered: true,
      createdAt: '2024-01-14T15:00:00Z',
      triggeredAt: '2024-01-15T08:30:00Z'
    }
  ]);

  const [showCreateModal, setShowCreateModal] = useState(false);
  const [newAlert, setNewAlert] = useState({
    commodity: '',
    symbol: '',
    alertType: 'above' as 'above' | 'below' | 'change',
    targetPrice: '',
    changePercent: ''
  });

  const toggleAlert = (id: string) => {
    setAlerts(alerts.map(alert =>
      alert.id === id ? { ...alert, isActive: !alert.isActive } : alert
    ));
  };

  const deleteAlert = (id: string) => {
    setAlerts(alerts.filter(alert => alert.id !== id));
  };

  const createAlert = () => {
    const alert: PriceAlert = {
      id: Date.now().toString(),
      commodity: newAlert.commodity,
      symbol: newAlert.symbol,
      alertType: newAlert.alertType,
      targetPrice: newAlert.alertType !== 'change' ? parseFloat(newAlert.targetPrice) : undefined,
      changePercent: newAlert.alertType === 'change' ? parseFloat(newAlert.changePercent) : undefined,
      currentPrice: 0,
      isActive: true,
      isTriggered: false,
      createdAt: new Date().toISOString()
    };

    setAlerts([...alerts, alert]);
    setShowCreateModal(false);
    setNewAlert({ commodity: '', symbol: '', alertType: 'above', targetPrice: '', changePercent: '' });
  };

  const getAlertDescription = (alert: PriceAlert) => {
    if (alert.alertType === 'above') {
      return `${t('pricealerts.alert.above')}${alert.targetPrice?.toFixed(2)}`;
    } else if (alert.alertType === 'below') {
      return `${t('pricealerts.alert.below')}${alert.targetPrice?.toFixed(2)}`;
    } else {
      return `${t('pricealerts.alert.changePercent')} ${alert.changePercent}%`;
    }
  };

  const getAlertIcon = (alert: PriceAlert) => {
    if (alert.isTriggered) {
      return <BellRing className="w-5 h-5 text-orange-500" />;
    }
    if (alert.alertType === 'above') {
      return <TrendingUp className="w-5 h-5 text-emerald-600" />;
    } else if (alert.alertType === 'below') {
      return <TrendingDown className="w-5 h-5 text-red-500" />;
    } else {
      return <Target className="w-5 h-5 text-blue-500" />;
    }
  };

  const activeAlerts = alerts.filter(alert => alert.isActive && !alert.isTriggered).length;
  const triggeredAlerts = alerts.filter(alert => alert.isTriggered).length;

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
              <Bell className="w-4 h-4" />
              <span>{t('pricealerts.badge')}</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {t('pricealerts.title')}
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              {t('pricealerts.description')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
              <div className="text-2xl font-bold text-emerald-600">{activeAlerts}</div>
              <div className="text-sm text-gray-600">{t('pricealerts.stats.active')}</div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
              <div className="text-2xl font-bold text-orange-500">{triggeredAlerts}</div>
              <div className="text-sm text-gray-600">{t('pricealerts.stats.triggered')}</div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
              <div className="text-2xl font-bold text-gray-900">{alerts.length}</div>
              <div className="text-sm text-gray-600">{t('pricealerts.stats.total')}</div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-gray-200 mb-8">
            <div className="p-6 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-semibold text-gray-900">{t('pricealerts.myalerts')}</h2>
                <button
                  onClick={() => setShowCreateModal(true)}
                  className="flex items-center space-x-2 px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors"
                >
                  <Plus className="w-4 h-4" />
                  <span>{t('pricealerts.new')}</span>
                </button>
              </div>
            </div>

            <div className="p-6">
              {alerts.length === 0 ? (
                <div className="text-center py-12">
                  <Bell className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {t('pricealerts.empty.title')}
                  </h3>
                  <p className="text-gray-600 mb-6">
                    {t('pricealerts.empty.description')}
                  </p>
                  <button
                    onClick={() => setShowCreateModal(true)}
                    className="px-6 py-3 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors"
                  >
                    {t('pricealerts.empty.cta')}
                  </button>
                </div>
              ) : (
                <div className="space-y-4">
                  {alerts.map((alert, index) => (
                    <motion.div
                      key={alert.id}
                      className={`border rounded-lg p-4 transition-colors ${
                        alert.isTriggered
                          ? 'border-orange-200 bg-orange-50'
                          : alert.isActive
                          ? 'border-emerald-200 bg-emerald-50'
                          : 'border-gray-200 bg-gray-50'
                      }`}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                          {getAlertIcon(alert)}
                          <div>
                            <h4 className="font-semibold text-gray-900">
                              {alert.commodity} ({alert.symbol})
                            </h4>
                            <p className="text-sm text-gray-600">
                              {getAlertDescription(alert)}
                            </p>
                            {alert.isTriggered && alert.triggeredAt && (
                              <p className="text-xs text-orange-600 mt-1">
                                {t('pricealerts.triggered')} {new Date(alert.triggeredAt).toLocaleDateString(language === 'fr' ? 'fr-FR' : 'en-US')}
                              </p>
                            )}
                          </div>
                        </div>

                        <div className="flex items-center space-x-2">
                          <div className="text-right mr-4">
                            <div className="text-sm text-gray-500">{t('pricealerts.currentPrice')}</div>
                            <div className="font-semibold text-gray-900">
                              ${alert.currentPrice.toFixed(2)}
                            </div>
                          </div>

                          <button
                            onClick={() => toggleAlert(alert.id)}
                            className={`p-2 rounded-lg transition-colors ${
                              alert.isActive
                                ? 'bg-emerald-100 text-emerald-600 hover:bg-emerald-200'
                                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                            }`}
                            title={alert.isActive ? t('pricealerts.deactivate') : t('pricealerts.activate')}
                          >
                            {alert.isActive ? <Check className="w-4 h-4" /> : <X className="w-4 h-4" />}
                          </button>

                          <button
                            className="p-2 bg-gray-100 text-gray-600 rounded-lg hover:bg-gray-200 transition-colors"
                            title={t('pricealerts.edit')}
                          >
                            <Edit3 className="w-4 h-4" />
                          </button>

                          <button
                            onClick={() => deleteAlert(alert.id)}
                            className="p-2 bg-red-100 text-red-600 rounded-lg hover:bg-red-200 transition-colors"
                            title={t('pricealerts.delete')}
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {showCreateModal && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
              <motion.div
                className="bg-white rounded-xl p-6 w-full max-w-md"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Créer une nouvelle alerte
                </h3>

                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Matière première
                    </label>
                    <input
                      type="text"
                      value={newAlert.commodity}
                      onChange={(e) => setNewAlert({ ...newAlert, commodity: e.target.value })}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none"
                      placeholder="ex: Wheat"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Symbole
                    </label>
                    <input
                      type="text"
                      value={newAlert.symbol}
                      onChange={(e) => setNewAlert({ ...newAlert, symbol: e.target.value })}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none"
                      placeholder="ex: WHT"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Type d&apos;alerte
                    </label>
                    <select
                      value={newAlert.alertType}
                      onChange={(e) => setNewAlert({ ...newAlert, alertType: e.target.value as PriceAlert['alertType'] })}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none"
                    >
                      <option value="above">Prix au-dessus de</option>
                      <option value="below">Prix en-dessous de</option>
                      <option value="change">Changement de pourcentage</option>
                    </select>
                  </div>

                  {newAlert.alertType !== 'change' ? (
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Prix cible ($)
                      </label>
                      <input
                        type="number"
                        step="0.01"
                        value={newAlert.targetPrice}
                        onChange={(e) => setNewAlert({ ...newAlert, targetPrice: e.target.value })}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none"
                        placeholder="0.00"
                      />
                    </div>
                  ) : (
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Pourcentage de changement (%)
                      </label>
                      <input
                        type="number"
                        step="0.1"
                        value={newAlert.changePercent}
                        onChange={(e) => setNewAlert({ ...newAlert, changePercent: e.target.value })}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none"
                        placeholder="5.0"
                      />
                    </div>
                  )}
                </div>

                <div className="flex space-x-3 mt-6">
                  <button
                    onClick={createAlert}
                    className="flex-1 px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors"
                  >
                    Créer l&apos;alerte
                  </button>
                  <button
                    onClick={() => setShowCreateModal(false)}
                    className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    Annuler
                  </button>
                </div>
              </motion.div>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}