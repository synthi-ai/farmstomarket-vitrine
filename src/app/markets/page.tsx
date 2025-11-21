import { MarketNavbar } from '@/components/about/NavAbout'
import MarketAnalysis from '@/components/market-insight/MarketAnalysis'
import MarketCharts from '@/components/market-insight/MarketCharts'
import MarketInsight from '@/components/market-insight/MarketInsight'
import PriceAlerts from '@/components/market-insight/PriceAlerts'
import TradingPortfolio from '@/components/market-insight/TradingPortfolio'
import React from 'react'



function page() {
  return (
    <>
      {/* Navbar Ultra-Futuriste */}
      <MarketNavbar />
      
      {/* Contenu principal avec padding pour la navbar fixe */}
      <div className="pt-24">
        {/* 1. Vue d'ensemble du marché */}
        <section id="market">
          <MarketInsight />
        </section>
        
        {/* 2. Graphiques et analyses techniques */}
        <section id="charts">
          <MarketCharts 
            selectedCommodity={{
              name: "Wheat",
              symbol: "WHT", 
              price: 7.45,
              change: 0.23,
              changePercent: 3.2
            }}
            timeframe="24h"
          />
        </section>
        
        {/* 3. Alertes de prix et notifications */}
        <section id="alerts">
          <PriceAlerts />
        </section>
        
        {/* 4. Analyse IA et prédictions */}
        <section id="analysis">
          <MarketAnalysis />
        </section>
        
        {/* 5. Portfolio et trading */}
        <section id="portfolio">
          <TradingPortfolio />
        </section>
      </div>
    </>
  );
}

export default page ;
