'use client';

import { useState, useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: 'accepted' | 'dismissed' }>;
}

export default function PWAInstallPrompt() {
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null);
  const [visible, setVisible] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    const handler = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e as BeforeInstallPromptEvent);
      setVisible(true);
    };
    window.addEventListener('beforeinstallprompt', handler);
    return () => window.removeEventListener('beforeinstallprompt', handler);
  }, []);

  const install = async () => {
    if (deferredPrompt) {
      deferredPrompt.prompt();
      await deferredPrompt.userChoice;
      setDeferredPrompt(null);
      setVisible(false);
    }
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 z-50 bg-emerald-600 text-white p-4 rounded-2xl shadow-lg backdrop-blur-xl border border-emerald-500/30">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="text-2xl">🌾</div>
          <div>
            <h3 className="font-bold">{t('pwa.installTitle')}</h3>
            <p className="text-sm opacity-90">{t('pwa.installDescription')}</p>
          </div>
        </div>
        <div className="flex space-x-2">
          <button
            onClick={install}
            className="bg-white text-emerald-600 px-4 py-2 rounded-lg font-semibold text-sm hover:bg-gray-100 transition-colors duration-300"
          >
            {t('pwa.install')}
          </button>
          <button
            onClick={() => setVisible(false)}
            className="text-white/70 hover:text-white px-2 transition-colors duration-300"
          >
            ✕
          </button>
        </div>
      </div>
    </div>
  );
}
