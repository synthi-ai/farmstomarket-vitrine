import MarketAnalysis from '@/components/market-insight/MarketAnalysis'
import MarketCharts from '@/components/market-insight/MarketCharts'
import MarketInsight from '@/components/market-insight/MarketInsight'
import PriceAlerts from '@/components/market-insight/PriceAlerts'
import TradingPortfolio from '@/components/market-insight/TradingPortfolio'
import React from 'react'

function page() {
  return (
    <>
    <MarketInsight />
      
      {/* 2. Graphiques et analyses techniques */}
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
      
      {/* 3. Alertes de prix et notifications */}
      <PriceAlerts />
      
      {/* 4. Analyse IA et prédictions */}
      <MarketAnalysis />
      
      {/* 5. Portfolio et trading */}
      <TradingPortfolio />
    </>
  )
}

export default page