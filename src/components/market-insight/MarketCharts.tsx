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
    selectedCommodity: {
        name: string;
        symbol: string;
        price: number;
        change: number;
        changePercent: number;
    };
    timeframe: string;
}

interface IndicatorsState {
    sma: boolean;
    ema: boolean;
    rsi: boolean;
    macd: boolean;
    bollinger: boolean;
}

export default function MarketCharts({ selectedCommodity, timeframe }: MarketChartsProps) {
    const [chartType, setChartType] = useState('line');
    const [isFullscreen, setIsFullscreen] = useState(false);
    const [chartData, setChartData] = useState<ChartData[]>([]);

    const [indicators, setIndicators] = useState<IndicatorsState>({
        sma: true,
        ema: false,
        rsi: true,
        macd: false,
        bollinger: false
    });

    // Génération de données simulées
    useEffect(() => {
        const generateData = () => {
            const data: ChartData[] = [];
            const now = new Date();
            const intervals = timeframe === '1h' ? 60 : timeframe === '24h' ? 24 : timeframe === '7d' ? 7 * 24 : 30 * 24;

            let basePrice = selectedCommodity.price;

            for (let i = intervals; i >= 0; i--) {
                const timestamp = new Date(now.getTime() - i * (timeframe === '1h' ? 60000 : 3600000));
                const variation = (Math.random() - 0.5) * 0.1;
                const open = basePrice;
                const close = basePrice + variation;
                const high = Math.max(open, close) + Math.random() * 0.05;
                const low = Math.min(open, close) - Math.random() * 0.05;
                const volume = Math.random() * 1000000 + 500000;

                data.push({
                    timestamp: timestamp.toISOString(),
                    price: close,
                    volume,
                    high,
                    low,
                    open,
                    close
                });

                basePrice = close;
            }

            return data;
        };

        setChartData(generateData());
    }, [selectedCommodity, timeframe]);

    // Mise à jour en temps réel
    useEffect(() => {
        const interval = setInterval(() => {
            setChartData(prev => {
                const newData = [...prev];
                const lastPoint = newData[newData.length - 1];
                const now = new Date();

                // Ajouter un nouveau point
                const variation = (Math.random() - 0.5) * 0.1;
                const newPoint: ChartData = {
                    timestamp: now.toISOString(),
                    price: lastPoint.price + variation,
                    volume: Math.random() * 1000000 + 500000,
                    high: lastPoint.price + variation + Math.random() * 0.05,
                    low: lastPoint.price + variation - Math.random() * 0.05,
                    open: lastPoint.price,
                    close: lastPoint.price + variation
                };

                // Garder seulement les derniers points selon le timeframe
                const maxPoints = timeframe === '1h' ? 60 : timeframe === '24h' ? 24 : 168;
                if (newData.length >= maxPoints) {
                    newData.shift();
                }

                newData.push(newPoint);
                return newData;
            });
        }, timeframe === '1h' ? 1000 : 5000);

        return () => clearInterval(interval);
    }, [timeframe]);

    const chartTypes = [
        { id: 'line', name: 'LINE', icon: TrendingUp },
        { id: 'candlestick', name: 'CANDLES', icon: BarChart3 },
        { id: 'area', name: 'AREA', icon: Activity },
        { id: 'volume', name: 'VOLUME', icon: PieChart }
    ];

    const renderLineChart = () => {
        if (chartData.length === 0) return null;

        const minPrice = Math.min(...chartData.map(d => d.low));
        const maxPrice = Math.max(...chartData.map(d => d.high));
        const priceRange = maxPrice - minPrice;
        const width = 800;
        const height = 300;

        const points = chartData.map((point, index) => {
            const x = (index / (chartData.length - 1)) * width;
            const y = height - ((point.price - minPrice) / priceRange) * height;
            return `${x},${y}`;
        }).join(' ');

        const areaPoints = `0,${height} ${points} ${width},${height}`;

        return (
            <div className="relative w-full h-80 bg-gradient-to-br from-black/50 to-gray-900/30 rounded-xl border border-[#00E834]/20 overflow-hidden">
                {/* Grid Lines */}
                <svg className="absolute inset-0 w-full h-full opacity-20">
                    {/* Horizontal grid lines */}
                    {[0, 1, 2, 3, 4, 5].map(i => (
                        <line
                            key={`h-${i}`}
                            x1="0"
                            y1={i * (height / 5)}
                            x2={width}
                            y2={i * (height / 5)}
                            stroke="#00E834"
                            strokeWidth="1"
                            opacity="0.3"
                        />
                    ))}
                    {/* Vertical grid lines */}
                    {[0, 1, 2, 3, 4, 5, 6, 7, 8].map(i => (
                        <line
                            key={`v-${i}`}
                            x1={i * (width / 8)}
                            y1="0"
                            x2={i * (width / 8)}
                            y2={height}
                            stroke="#00E834"
                            strokeWidth="1"
                            opacity="0.3"
                        />
                    ))}
                </svg>

                {/* Main Chart */}
                <svg className="absolute inset-0 w-full h-full" viewBox={`0 0 ${width} ${height}`}>
                    {/* Area fill */}
                    {chartType === 'area' && (
                        <polygon
                            points={areaPoints}
                            fill="url(#areaGradient)"
                            opacity="0.3"
                        />
                    )}

                    {/* Main line */}
                    <polyline
                        points={points}
                        fill="none"
                        stroke="#00E834"
                        strokeWidth="3"
                        className="drop-shadow-lg"
                    />

                    {/* Glow effect */}
                    <polyline
                        points={points}
                        fill="none"
                        stroke="#00E834"
                        strokeWidth="6"
                        opacity="0.3"
                        className="blur-sm"
                    />

                    {/* Data points */}
                    {chartData.map((point, index) => {
                        const x = (index / (chartData.length - 1)) * width;
                        const y = height - ((point.price - minPrice) / priceRange) * height;
                        return (
                            <circle
                                key={index}
                                cx={x}
                                cy={y}
                                r="4"
                                fill="#00E834"
                                className="opacity-0 hover:opacity-100 transition-opacity cursor-pointer"
                            />
                        );
                    })}

                    {/* Gradient definition */}
                    <defs>
                        <linearGradient id="areaGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                            <stop offset="0%" stopColor="#00E834" stopOpacity="0.8" />
                            <stop offset="100%" stopColor="#00E834" stopOpacity="0" />
                        </linearGradient>
                    </defs>
                </svg>

                {/* Price labels */}
                <div className="absolute left-2 top-2 text-[#00E834] font-black text-xs">
                    ${maxPrice.toFixed(2)}
                </div>
                <div className="absolute left-2 bottom-2 text-[#00E834] font-black text-xs">
                    ${minPrice.toFixed(2)}
                </div>

                {/* Real-time indicator */}
                <div className="absolute top-4 right-4">
                    <motion.div
                        className="w-3 h-3 bg-[#00E834] rounded-full"
                        animate={{
                            scale: [1, 1.3, 1],
                            opacity: [0.5, 1, 0.5]
                        }}
                        transition={{
                            duration: 2,
                            repeat: Infinity
                        }}
                    />
                </div>
            </div>
        );
    };

    const renderCandlestickChart = () => {
        if (chartData.length === 0) return null;

        const minPrice = Math.min(...chartData.map(d => d.low));
        const maxPrice = Math.max(...chartData.map(d => d.high));
        const priceRange = maxPrice - minPrice;
        const width = 800;
        const height = 300;
        const candleWidth = width / chartData.length * 0.8;

        return (
            <div className="relative w-full h-80 bg-gradient-to-br from-black/50 to-gray-900/30 rounded-xl border border-[#00E834]/20 overflow-hidden">
                <svg className="absolute inset-0 w-full h-full" viewBox={`0 0 ${width} ${height}`}>
                    {chartData.map((candle, index) => {
                        const x = (index / chartData.length) * width + candleWidth / 2;
                        const openY = height - ((candle.open - minPrice) / priceRange) * height;
                        const closeY = height - ((candle.close - minPrice) / priceRange) * height;
                        const highY = height - ((candle.high - minPrice) / priceRange) * height;
                        const lowY = height - ((candle.low - minPrice) / priceRange) * height;

                        const isGreen = candle.close > candle.open;
                        const bodyTop = Math.min(openY, closeY);
                        const bodyHeight = Math.abs(closeY - openY);

                        return (
                            <g key={index}>
                                {/* Wick */}
                                <line
                                    x1={x}
                                    y1={highY}
                                    x2={x}
                                    y2={lowY}
                                    stroke={isGreen ? "#00E834" : "#EF4444"}
                                    strokeWidth="2"
                                />

                                {/* Body */}
                                <rect
                                    x={x - candleWidth / 2}
                                    y={bodyTop}
                                    width={candleWidth}
                                    height={Math.max(bodyHeight, 2)}
                                    fill={isGreen ? "#00E834" : "#EF4444"}
                                    opacity="0.8"
                                    rx="2"
                                />

                                {/* Glow effect */}
                                <rect
                                    x={x - candleWidth / 2}
                                    y={bodyTop}
                                    width={candleWidth}
                                    height={Math.max(bodyHeight, 2)}
                                    fill={isGreen ? "#00E834" : "#EF4444"}
                                    opacity="0.3"
                                    rx="2"
                                    className="blur-sm"
                                />
                            </g>
                        );
                    })}
                </svg>
            </div>
        );
    };

    const renderVolumeChart = () => {
        if (chartData.length === 0) return null;

        const maxVolume = Math.max(...chartData.map(d => d.volume));
        const width = 800;
        const height = 100;
        const barWidth = width / chartData.length * 0.8;

        return (
            <div className="relative w-full h-24 bg-gradient-to-br from-black/30 to-gray-900/20 rounded-xl border border-[#00E834]/10 overflow-hidden mt-4">
                <svg className="absolute inset-0 w-full h-full" viewBox={`0 0 ${width} ${height}`}>
                    {chartData.map((bar, index) => {
                        const x = (index / chartData.length) * width;
                        const barHeight = (bar.volume / maxVolume) * height;
                        const isGreen = bar.close > bar.open;

                        return (
                            <rect
                                key={index}
                                x={x}
                                y={height - barHeight}
                                width={barWidth}
                                height={barHeight}
                                fill={isGreen ? "#00E834" : "#EF4444"}
                                opacity="0.6"
                                rx="1"
                            />
                        );
                    })}
                </svg>

                <div className="absolute bottom-1 right-2 text-gray-400 text-xs font-bold">
                    Volume: {(chartData[chartData.length - 1]?.volume / 1000).toFixed(0)}K
                </div>
            </div>
        );
    };

    return (
        <motion.div
            className={`bg-gradient-to-br from-black/90 via-gray-900/70 to-black/90 border border-[#00E834]/30 rounded-2xl backdrop-blur-md relative overflow-hidden ${isFullscreen ? 'fixed inset-4 z-50' : 'p-6'
                }`}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
        >
            {/* Header */}
            <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-4">
                    <div>
                        <h3 className="text-2xl font-black text-white tracking-wide">
                            {selectedCommodity.name} ({selectedCommodity.symbol})
                        </h3>
                        <div className="flex items-center space-x-3">
                            <span className="text-3xl font-black text-white">
                                ${selectedCommodity.price.toFixed(2)}
                            </span>
                            <span className={`font-black text-lg ${selectedCommodity.change >= 0 ? 'text-green-400' : 'text-red-400'
                                }`}>
                                {selectedCommodity.change >= 0 ? '+' : ''}{selectedCommodity.change.toFixed(2)}
                                ({selectedCommodity.changePercent >= 0 ? '+' : ''}{selectedCommodity.changePercent.toFixed(1)}%)
                            </span>
                        </div>
                    </div>
                </div>

                <div className="flex items-center space-x-3">
                    {/* Chart Type Selector */}
                    <div className="flex rounded-xl bg-gray-900/50 border border-[#00E834]/30 overflow-hidden">
                        {chartTypes.map((type) => (
                            <button
                                key={type.id}
                                onClick={() => setChartType(type.id)}
                                className={`flex items-center px-3 py-2 font-black text-xs transition-all ${chartType === type.id
                                        ? 'bg-[#00E834] text-black'
                                        : 'text-white hover:bg-[#00E834]/20'
                                    }`}
                            >
                                <type.icon className="w-4 h-4 mr-1" />
                                {type.name}
                            </button>
                        ))}
                    </div>

                    {/* Controls */}
                    <div className="flex space-x-2">
                        <motion.button
                            onClick={() => setIsFullscreen(!isFullscreen)}
                            className="p-2 bg-gray-900/50 border border-[#00E834]/30 rounded-lg text-white hover:bg-[#00E834]/20 transition-all"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            {isFullscreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
                        </motion.button>

                        <motion.button
                            className="p-2 bg-gray-900/50 border border-[#00E834]/30 rounded-lg text-white hover:bg-[#00E834]/20 transition-all"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <Download className="w-4 h-4" />
                        </motion.button>

                        <motion.button
                            className="p-2 bg-gray-900/50 border border-[#00E834]/30 rounded-lg text-white hover:bg-[#00E834]/20 transition-all"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <Share className="w-4 h-4" />
                        </motion.button>
                    </div>
                </div>
            </div>

            {/* Chart Area */}
            <div className="mb-6">
                {chartType === 'line' || chartType === 'area' ? renderLineChart() :
                    chartType === 'candlestick' ? renderCandlestickChart() :
                        renderLineChart()}
            </div>

            {/* Volume Chart */}
            {renderVolumeChart()}

            {/* Technical Indicators */}
            <div className="mt-6 pt-6 border-t border-[#00E834]/20">
                <h4 className="text-lg font-black text-white mb-4 tracking-wide">TECHNICAL INDICATORS</h4>
                <div className="flex flex-wrap gap-3">
                    {Object.entries(indicators).map(([key, value]) => (
                        <button
                            key={key}
                            onClick={() => setIndicators(prev => ({
                                ...prev,
                                [key as keyof IndicatorsState]: !prev[key as keyof IndicatorsState] // <--- Change here
                            }))}
                            className={`px-4 py-2 rounded-lg font-black text-xs tracking-wider transition-all ${value
                                    ? 'bg-[#00E834] text-black'
                                    : 'bg-gray-900/50 text-white border border-[#00E834]/30 hover:bg-[#00E834]/20'
                                }`}
                        >
                            {key.toUpperCase()}
                        </button>
                    ))}
                </div>
            </div>

            {/* Scan lines */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#00E834]/50 to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#00E834]/50 to-transparent"></div>

            {/* Real-time pulse */}
            <motion.div
                className="absolute top-4 right-4 w-2 h-2 bg-[#00E834] rounded-full"
                animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.5, 1, 0.5]
                }}
                transition={{
                    duration: 2,
                    repeat: Infinity
                }}
            />
        </motion.div>
    );
}