/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

// Hook de scroll fluide futuriste
const useSmoothScroll = () => {
    const [velocity, setVelocity] = useState(0);
    const lastScrollY = useRef(0);
    const lastTime = useRef(Date.now());

    useEffect(() => {
        const updateVelocity = () => {
            const currentTime = Date.now();
            const currentScrollY = window.scrollY;
            const deltaTime = currentTime - lastTime.current;
            const deltaY = currentScrollY - lastScrollY.current;

            if (deltaTime > 0) {
                const newVelocity = deltaY / deltaTime;
                setVelocity(newVelocity);
            }

            lastScrollY.current = currentScrollY;
            lastTime.current = currentTime;
        };

        const handleScroll = () => {
            updateVelocity();
        };

        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return velocity;
};

// Device Frame Futuriste avec AgroBank App
interface AgroBankPhoneProps {
    className?: string;
    animationConfig?: any;
    appType: 'wallet' | 'trading' | 'payment';
}

const AgroBankPhone = ({
    className = "",
    animationConfig = {},
    appType
}: AgroBankPhoneProps) => {
    const phoneRef = useRef<HTMLDivElement>(null);
    const [currentStep, setCurrentStep] = useState(0);
    const { scrollYProgress } = useScroll();
    const velocity = useSmoothScroll();

    const skewY = useTransform(scrollYProgress, [0, 1], [0, velocity * -0.1]);
    const smoothSkewY = useSpring(skewY, { stiffness: 100, damping: 30 });

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentStep(prev => (prev + 1) % 4);
        }, 4000);

        return () => clearInterval(interval);
    }, []);

    const getAgroBankContent = () => {
        switch (appType) {
            case 'wallet':
                return (
                    <div className="h-full bg-gradient-to-br from-black via-gray-900 to-black p-6 pt-16">
                        <div className="space-y-6">
                            {/* Header Futuriste */}
                            <div className="text-center border-b border-[#00E834]/30 pb-4">
                                <h3 className="font-black text-[#00E834] text-xl mb-2 tracking-wider">AGROBANK WALLET</h3>
                                <div className="flex justify-center items-center space-x-3">
                                    <div className="w-3 h-3 bg-[#00E834] rounded-full animate-pulse shadow-lg">
                                        <div className="w-full h-full bg-[#00E834] rounded-full animate-ping opacity-75"></div>
                                    </div>
                                    <div className="text-xs text-white font-bold tracking-wider">SECURE PROTOCOL ACTIVE</div>
                                </div>
                            </div>

                            {/* Balance Card Futuriste */}
                            <motion.div
                                className="bg-gradient-to-br from-[#00E834]/20 via-black to-gray-900 rounded-2xl p-6 border border-[#00E834]/50 relative overflow-hidden"
                                animate={{ scale: currentStep === 0 ? 1.02 : 1 }}
                                transition={{ duration: 0.3 }}
                            >
                                <div className="absolute inset-0 bg-gradient-to-r from-[#00E834]/10 to-transparent"></div>
                                <div className="relative z-10">
                                    <div className="text-xs text-gray-400 mb-2 font-bold tracking-wider">FARM ACCOUNT BALANCE</div>
                                    <motion.div
                                        className="text-3xl font-black text-white mb-2"
                                        animate={{ scale: [1, 1.05, 1] }}
                                        transition={{ duration: 2, repeat: Infinity }}
                                    >
                                        ${currentStep === 0 ? '15,450' : currentStep === 1 ? '15,680' : currentStep === 2 ? '15,920' : '16,150'}.00
                                    </motion.div>
                                    <div className="text-xs text-[#00E834] font-bold">AGROBANK **** 4521</div>
                                </div>
                                <div className="absolute top-0 right-0 w-20 h-20 bg-[#00E834]/20 rounded-full blur-2xl"></div>
                            </motion.div>

                            {/* Actions Grid Futuriste */}
                            <div className="grid grid-cols-2 gap-4">
                                <motion.div
                                    className="bg-gradient-to-br from-gray-900 via-black to-gray-900 border border-[#00E834]/30 rounded-xl p-4 text-center hover:border-[#00E834] transition-all"
                                    animate={{ scale: currentStep === 1 ? 1.05 : 1 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <div className="w-10 h-10 bg-gradient-to-br from-[#00E834] to-green-600 rounded-xl mx-auto mb-3 flex items-center justify-center">
                                        <svg className="w-5 h-5 text-black" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
                                        </svg>
                                    </div>
                                    <div className="text-xs font-bold text-white tracking-wide">PAY SUPPLIER</div>
                                </motion.div>
                                
                                <motion.div
                                    className="bg-gradient-to-br from-gray-900 via-black to-gray-900 border border-[#00E834]/30 rounded-xl p-4 text-center hover:border-[#00E834] transition-all"
                                    animate={{ scale: currentStep === 2 ? 1.05 : 1 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <div className="w-10 h-10 bg-gradient-to-br from-white to-gray-200 rounded-xl mx-auto mb-3 flex items-center justify-center">
                                        <svg className="w-5 h-5 text-black" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                    <div className="text-xs font-bold text-white tracking-wide">RECEIVE PAYMENT</div>
                                </motion.div>
                            </div>

                            {/* Transactions List Futuriste */}
                            <div className="space-y-3">
                                <div className="text-xs text-gray-400 font-bold tracking-wider">RECENT FARM TRANSACTIONS</div>
                                <div className="space-y-2">
                                    {[
                                        { name: 'Seed Purchase - AgriStore', amount: '-$320.00', type: 'expense' },
                                        { name: 'Crop Sale - GreenMarket', amount: '+$1,850.00', type: 'income' },
                                        { name: 'Fertilizer - FarmSupply Co', amount: '-$450.00', type: 'expense' }
                                    ].map((transaction, index) => (
                                        <motion.div
                                            key={index}
                                            className="bg-gradient-to-r from-gray-900/50 to-black/50 border border-gray-800 rounded-xl p-3 flex items-center justify-between backdrop-blur-sm"
                                            animate={{
                                                borderColor: currentStep === index ? '#00E834' : '#374151',
                                                scale: currentStep === index ? 1.02 : 1,
                                            }}
                                            transition={{ duration: 0.3 }}
                                        >
                                            <div className="flex items-center space-x-3">
                                                <div className={`w-8 h-8 rounded-xl flex items-center justify-center ${transaction.type === 'income' 
                                                    ? 'bg-gradient-to-br from-[#00E834] to-green-600' 
                                                    : 'bg-gradient-to-br from-red-500 to-red-700'
                                                }`}>
                                                    {transaction.type === 'income' ? (
                                                        <svg className="w-4 h-4 text-black" fill="currentColor" viewBox="0 0 20 20">
                                                            <path fillRule="evenodd" d="M3.293 9.707a1 1 0 010-1.414l6-6a1 1 0 011.414 0l6 6a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L4.707 9.707a1 1 0 01-1.414 0z" clipRule="evenodd" />
                                                        </svg>
                                                    ) : (
                                                        <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                                                            <path fillRule="evenodd" d="M16.707 10.293a1 1 0 010 1.414l-6 6a1 1 0 01-1.414 0l-6-6a1 1 0 111.414-1.414L9 14.586V3a1 1 0 012 0v11.586l4.293-4.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                                        </svg>
                                                    )}
                                                </div>
                                                <div>
                                                    <div className="text-xs font-bold text-white">{transaction.name}</div>
                                                    <div className="text-xs text-gray-400">TODAY • PROCESSED</div>
                                                </div>
                                            </div>
                                            <div className={`text-xs font-black ${transaction.type === 'income' ? 'text-[#00E834]' : 'text-red-400'}`}>
                                                {transaction.amount}
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                );

            case 'trading':
                return (
                    <div className="h-full bg-gradient-to-br from-black via-gray-900 to-black p-6 pt-16">
                        <div className="space-y-6">
                            {/* Header */}
                            <div className="text-center border-b border-[#00E834]/30 pb-4">
                                <h3 className="font-black text-[#00E834] text-xl mb-2 tracking-wider">AGROBANK TRADING</h3>
                                <div className="flex justify-center items-center space-x-3">
                                    <div className="w-3 h-3 bg-[#00E834] rounded-full animate-pulse shadow-lg">
                                        <div className="w-full h-full bg-[#00E834] rounded-full animate-ping opacity-75"></div>
                                    </div>
                                    <div className="text-xs text-white font-bold tracking-wider">LIVE MARKET DATA</div>
                                </div>
                            </div>

                            {/* Portfolio Summary */}
                            <motion.div
                                className="bg-gradient-to-br from-[#00E834]/20 via-black to-gray-900 rounded-2xl p-6 border border-[#00E834]/50 relative overflow-hidden"
                                animate={{ scale: currentStep === 0 ? 1.02 : 1 }}
                                transition={{ duration: 0.3 }}
                            >
                                <div className="absolute inset-0 bg-gradient-to-r from-[#00E834]/10 to-transparent"></div>
                                <div className="relative z-10">
                                    <div className="text-xs text-gray-400 mb-2 font-bold tracking-wider">COMMODITY PORTFOLIO VALUE</div>
                                    <motion.div
                                        className="text-2xl font-black text-white mb-2"
                                        animate={{ scale: [1, 1.05, 1] }}
                                        transition={{ duration: 2, repeat: Infinity }}
                                    >
                                        ${currentStep === 0 ? '28,450' : currentStep === 1 ? '28,920' : currentStep === 2 ? '29,380' : '29,850'}
                                    </motion.div>
                                    <div className="flex items-center space-x-2">
                                        <div className="text-xs text-[#00E834] font-bold">+8.2% TODAY</div>
                                        <svg className="w-3 h-3 text-[#00E834]" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M3.293 9.707a1 1 0 010-1.414l6-6a1 1 0 011.414 0l6 6a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L4.707 9.707a1 1 0 01-1.414 0z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Market Grid */}
                            <div className="grid grid-cols-2 gap-3">
                                {[
                                    { commodity: 'WHEAT', price: '$8.50/bu', change: '+2.1%', up: true },
                                    { commodity: 'CORN', price: '$6.80/bu', change: '-0.8%', up: false },
                                    { commodity: 'RICE', price: '$14.20/cwt', change: '+1.5%', up: true },
                                    { commodity: 'SOYBEANS', price: '$15.90/bu', change: '+3.2%', up: true }
                                ].map((item, index) => (
                                    <motion.div
                                        key={index}
                                        className="bg-gradient-to-br from-gray-900 via-black to-gray-900 border border-gray-800 rounded-xl p-3"
                                        animate={{
                                            borderColor: currentStep === index ? '#00E834' : '#374151',
                                            scale: currentStep === index ? 1.05 : 1,
                                        }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <div className="text-xs font-bold text-white mb-1 tracking-wide">{item.commodity}</div>
                                        <div className="text-sm font-black text-[#00E834] mb-1">{item.price}</div>
                                        <div className={`text-xs flex items-center space-x-1 font-bold ${item.up ? 'text-[#00E834]' : 'text-red-400'}`}>
                                            <svg className={`w-3 h-3 ${item.up ? 'rotate-0' : 'rotate-180'}`} fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M3.293 9.707a1 1 0 010-1.414l6-6a1 1 0 011.414 0l6 6a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L4.707 9.707a1 1 0 01-1.414 0z" clipRule="evenodd" />
                                            </svg>
                                            <span>{item.change}</span>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>

                            {/* Chart Futuriste */}
                            <div className="bg-gradient-to-br from-gray-900 via-black to-gray-900 border border-[#00E834]/50 rounded-xl p-4">
                                <div className="flex items-center justify-between mb-3">
                                    <div className="text-xs text-gray-400 font-bold tracking-wider">WHEAT FUTURES CHART</div>
                                    <div className="text-xs text-[#00E834] font-bold">+2.1%</div>
                                </div>
                                <div className="flex items-end space-x-1 h-16">
                                    {[...Array(15)].map((_, i) => (
                                        <motion.div
                                            key={i}
                                            className="bg-gradient-to-t from-[#00E834] to-green-400 rounded-t flex-1"
                                            animate={{
                                                height: `${Math.sin(Date.now() * 0.001 + i) * 50 + 60}%`
                                            }}
                                            transition={{ duration: 1 }}
                                        />
                                    ))}
                                </div>
                                <div className="text-xs text-gray-500 mt-2 text-center font-bold tracking-wider">REAL-TIME MARKET DATA</div>
                            </div>
                        </div>
                    </div>
                );

            case 'payment':
                return (
                    <div className="h-full bg-gradient-to-br from-black via-gray-900 to-black p-6 pt-16">
                        <div className="space-y-6">
                            {/* Header */}
                            <div className="text-center border-b border-[#00E834]/30 pb-4">
                                <h3 className="font-black text-[#00E834] text-xl mb-2 tracking-wider">AGROBANK PAY</h3>
                                <div className="flex justify-center items-center space-x-3">
                                    <div className="w-3 h-3 bg-[#00E834] rounded-full animate-pulse shadow-lg">
                                        <div className="w-full h-full bg-[#00E834] rounded-full animate-ping opacity-75"></div>
                                    </div>
                                    <div className="text-xs text-white font-bold tracking-wider">SECURE PAYMENT PROTOCOL</div>
                                </div>
                            </div>

                            {/* Payment Amount */}
                            <motion.div
                                className="bg-gradient-to-br from-[#00E834]/20 via-black to-gray-900 rounded-2xl p-8 border border-[#00E834]/50 text-center relative overflow-hidden"
                                animate={{ scale: currentStep === 0 ? 1.02 : 1 }}
                                transition={{ duration: 0.3 }}
                            >
                                <div className="absolute inset-0 bg-gradient-to-r from-[#00E834]/10 to-transparent"></div>
                                <div className="relative z-10">
                                    <div className="text-xs text-gray-400 mb-3 font-bold tracking-wider">PAYMENT AMOUNT</div>
                                    <motion.div
                                        className="text-4xl font-black text-white mb-3"
                                        animate={{ scale: [1, 1.05, 1] }}
                                        transition={{ duration: 1.5, repeat: Infinity }}
                                    >
                                        ${currentStep === 0 ? '2,450' : currentStep === 1 ? '1,875' : currentStep === 2 ? '3,240' : '1,680'}.00
                                    </motion.div>
                                    <div className="text-xs text-gray-400 mb-1">TO GREENFIELD FARM SUPPLY</div>
                                    <div className="text-xs text-[#00E834] font-bold tracking-wider">INVOICE #AGR-2024-001</div>
                                </div>
                            </motion.div>

                            {/* Payment Methods */}
                            <div className="space-y-3">
                                <div className="text-xs text-gray-400 font-bold tracking-wider">PAYMENT METHOD</div>
                                {[
                                    { name: 'AGROBANK WALLET', last4: '4521', selected: true },
                                    { name: 'FARM ACCOUNT', last4: '7890', selected: false },
                                    { name: 'BUSINESS CARD', last4: '1234', selected: false }
                                ].map((method, index) => (
                                    <motion.div
                                        key={index}
                                        className="bg-gradient-to-r from-gray-900 to-black border border-gray-800 rounded-xl p-4"
                                        animate={{
                                            borderColor: currentStep === index + 1 || method.selected ? '#00E834' : '#374151',
                                            scale: currentStep === index + 1 ? 1.02 : 1,
                                        }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center space-x-4">
                                                <div className="w-3 h-3 bg-[#00E834] rounded-full"></div>
                                                <div>
                                                    <div className="text-xs font-bold text-white tracking-wide">{method.name}</div>
                                                    <div className="text-xs text-gray-400">**** {method.last4}</div>
                                                </div>
                                            </div>
                                            <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${method.selected ? 'border-[#00E834] bg-[#00E834]' : 'border-gray-600'}`}>
                                                {method.selected && (
                                                    <svg className="w-3 h-3 text-black" fill="currentColor" viewBox="0 0 20 20">
                                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                                    </svg>
                                                )}
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>

                            {/* Pay Button */}
                            <motion.div
                                className="bg-gradient-to-r from-[#00E834] to-green-600 text-black rounded-xl p-4 text-center font-black shadow-lg border border-green-400"
                                animate={{
                                    scale: currentStep === 3 ? 1.05 : 1,
                                }}
                                transition={{ duration: 0.3 }}
                            >
                                <div className="flex items-center justify-center space-x-3">
                                    {currentStep === 3 ? (
                                        <>
                                            <svg className="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24">
                                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                            </svg>
                                            <span className="tracking-wider">PROCESSING PAYMENT...</span>
                                        </>
                                    ) : (
                                        <>
                                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.293l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z" clipRule="evenodd" />
                                            </svg>
                                            <span className="tracking-wider">PAY WITH AGROBANK</span>
                                        </>
                                    )}
                                </div>
                            </motion.div>
                        </div>
                    </div>
                );

            default:
                return <div className="h-full bg-gradient-to-br from-black to-gray-900"></div>;
        }
    };

    return (
        <motion.div
            ref={phoneRef}
            className={`w-full h-full bg-gradient-to-br from-black to-gray-900 rounded-[48px] p-3 shadow-2xl border border-[#00E834]/30 ${className}`}
            style={{
                transformStyle: 'preserve-3d',
                skewY: smoothSkewY,
                boxShadow: `
                    0 30px 80px rgba(0, 232, 52, 0.3),
                    0 15px 40px rgba(0, 0, 0, 0.6),
                    inset 0 2px 4px rgba(0, 232, 52, 0.2)
                `
            }}
        >
            {/* iPhone 15 Frame Futuriste */}
            <div className="w-full h-full bg-black rounded-[40px] overflow-hidden relative border border-[#00E834]/40">
                {/* Dynamic Island Futuriste */}
                <div style={{
                    position: 'absolute',
                    top: '12px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: '130px',
                    height: '32px',
                    background: 'linear-gradient(135deg, #000000 0%, #1a1a1a 100%)',
                    borderRadius: '16px',
                    zIndex: 1000,
                    border: '1px solid rgba(0, 232, 52, 0.4)',
                    boxShadow: `
                        inset 0 2px 4px rgba(0, 232, 52, 0.3),
                        0 0 20px rgba(0, 232, 52, 0.2)
                    `
                }} />

                {/* Capteur */}
                <div style={{
                    position: 'absolute',
                    top: '20px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: '16px',
                    height: '16px',
                    background: 'radial-gradient(circle, #00E834 0%, #000000 70%)',
                    borderRadius: '50%',
                    zIndex: 1001,
                    boxShadow: '0 0 20px rgba(0, 232, 52, 1)'
                }} />

                {/* Screen Content */}
                <div className="relative w-full h-full">
                    {getAgroBankContent()}
                </div>
            </div>
        </motion.div>
    );
};

const AgroBankFintechComponent = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const y1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
    const y2 = useTransform(scrollYProgress, [0, 1], [0, -200]);
    const y3 = useTransform(scrollYProgress, [0, 1], [0, -150]);
    const y4 = useTransform(scrollYProgress, [0, 1], [0, -180]);

    const velocity = useSmoothScroll();
    const skewY = useTransform(scrollYProgress, [0, 1], [0, velocity * -0.05]);
    const smoothSkewY = useSpring(skewY, { stiffness: 100, damping: 30 });

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                duration: 1,
                staggerChildren: 0.2,
            },
        },
    } as const;

    const itemVariants = {
        hidden: {
            opacity: 0,
            y: 40,
            scale: 0.9
        },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                duration: 0.8,
                ease: [0.23, 1, 0.32, 1]
            }
        }
    } as const;

    return (
        <div 
            className="relative min-h-[400vh] overflow-hidden"
            style={{
                background: `
                    radial-gradient(ellipse at top, rgba(0, 232, 52, 0.05) 0%, transparent 50%),
                    radial-gradient(ellipse at bottom, rgba(0, 232, 52, 0.03) 0%, transparent 50%),
                    linear-gradient(135deg, #000000 0%, #111111 50%, #000000 100%)
                `
            }}
        >
            {/* Grille cyberpunk en arrière-plan */}
            <div className="absolute inset-0 opacity-5">
                <div 
                    className="w-full h-full"
                    style={{
                        backgroundImage: `
                            linear-gradient(rgba(0, 232, 52, 0.1) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(0, 232, 52, 0.1) 1px, transparent 1px)
                        `,
                        backgroundSize: '80px 80px'
                    }}
                />
            </div>

            {/* Hero Section Futuriste
            <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 pointer-events-none">
                <motion.div
                    className="text-center"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.5 }}
                >
                    <h1 className="text-6xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#00E834] via-white to-[#00E834] mb-4 tracking-wider">
                        AGROBANK
                    </h1>
                    <div className="text-2xl md:text-4xl font-bold text-white mb-2 tracking-widest">
                        AGRICULTURAL FINTECH
                    </div>
                    <div className="text-lg text-gray-400 tracking-wider">
                        NEXT-GENERATION FARMING FINANCE
                    </div>
                </motion.div>
            </div>  */}

            {/* Main Content */}
            <div
                ref={containerRef}
                className="relative w-full max-w-7xl mx-auto"
                style={{
                    paddingTop: '80vh',
                    minHeight: '200vh',
                    height: '100%'
                }}
            >
                {/* Mobile Demos Section Futuriste */}
                <motion.div
                    className="relative z-20 mt-40 px-6"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                >
                    <motion.div
                        className="text-center mb-16"
                        variants={itemVariants}
                    >
                        <div className="inline-flex items-center space-x-4 bg-gradient-to-r from-black via-gray-900 to-black border border-[#00E834] px-8 py-4 rounded-2xl shadow-lg backdrop-blur-sm mb-8">
                            <div className="w-4 h-4 bg-[#00E834] rounded-full animate-pulse shadow-lg">
                                <div className="w-full h-full bg-[#00E834] rounded-full animate-ping opacity-75"></div>
                            </div>
                            <span className="text-[#00E834] font-black text-lg tracking-wider">FINANCIAL TECHNOLOGY SUITE</span>
                        </div>
                        
                        <h2 className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight">
                            AGROBANK DIGITAL
                            <br />
                            <span className="text-[#00E834]">BANKING PLATFORM</span>
                        </h2>
                        <p className="text-gray-400 text-xl max-w-4xl mx-auto leading-relaxed">
                            Revolutionary agricultural finance technology with advanced 
                            <span className="text-[#00E834] font-bold"> digital banking infrastructure</span>, 
                            real-time commodity trading, and instant payment processing designed for modern farming operations.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
                        {/* Wallet Demo */}
                        <motion.div
                            className="flex flex-col items-center"
                            variants={itemVariants}
                        >
                            <div className="w-72 h-[600px] mb-8 relative">
                                <AgroBankPhone appType="wallet" />
                                <div className="absolute inset-0 bg-gradient-to-br from-[#00E834]/30 via-green-500/20 to-green-600/10 rounded-[4rem] blur-3xl opacity-40 scale-110 -z-10"></div>
                                <div className="absolute inset-0 bg-gradient-to-r from-[#00E834]/20 to-green-500/10 rounded-[4rem] blur-xl opacity-30 scale-125 -z-20"></div>
                            </div>
                            <h3 className="text-2xl font-black text-white mb-3 tracking-wide">AGROBANK WALLET</h3>
                            <p className="text-gray-400 text-center leading-relaxed max-w-sm">
                                Advanced digital wallet infrastructure designed for agricultural operations with 
                                <span className="text-[#00E834] font-bold"> military-grade security</span> and 
                                specialized farm transaction management.
                            </p>
                        </motion.div>

                        {/* Trading Demo */}
                        <motion.div
                            className="flex flex-col items-center"
                            variants={itemVariants}
                        >
                            <div className="w-72 h-[600px] mb-8 relative">
                                <AgroBankPhone appType="trading" />
                                <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-gray-300/10 to-gray-400/5 rounded-[4rem] blur-3xl opacity-25 scale-110 -z-10"></div>
                                <div className="absolute inset-0 bg-gradient-to-r from-white/15 to-gray-200/10 rounded-[4rem] blur-xl opacity-20 scale-125 -z-20"></div>
                            </div>
                            <h3 className="text-2xl font-black text-white mb-3 tracking-wide">COMMODITY TRADING</h3>
                            <p className="text-gray-400 text-center leading-relaxed max-w-sm">
                                Real-time agricultural commodity market access with 
                                <span className="text-[#00E834] font-bold"> advanced analytics</span>, 
                                futures trading capabilities, and comprehensive risk management tools for agribusiness professionals.
                            </p>
                        </motion.div>

                        {/* Payment Demo */}
                        <motion.div
                            className="flex flex-col items-center"
                            variants={itemVariants}
                        >
                            <div className="w-72 h-[600px] mb-8 relative">
                                <AgroBankPhone appType="payment" />
                                <div className="absolute inset-0 bg-gradient-to-br from-[#00E834]/25 via-green-400/15 to-green-600/10 rounded-[4rem] blur-3xl opacity-35 scale-110 -z-10"></div>
                                <div className="absolute inset-0 bg-gradient-to-r from-[#00E834]/15 to-green-300/10 rounded-[4rem] blur-xl opacity-25 scale-125 -z-20"></div>
                            </div>
                            <h3 className="text-2xl font-black text-white mb-3 tracking-wide">AGROBANK PAY</h3>
                            <p className="text-gray-400 text-center leading-relaxed max-w-sm">
                                Instant payment processing for suppliers, contractors, and farmhands with 
                                <span className="text-[#00E834] font-bold"> automated systems</span> 
                                for invoice processing and expense categorization.
                            </p>
                        </motion.div>
                    </div>
                </motion.div>

                {/* Features Section Futuriste */}
                <motion.div
                    className="relative z-20 mt-32 px-6 pb-32"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                >
                    <motion.h2
                        className="text-4xl md:text-5xl font-black text-white text-center mb-6 leading-tight"
                        variants={itemVariants}
                    >
                        ADVANCED AGRICULTURAL
                        <br />
                        <span className="text-[#00E834]">BANKING TECHNOLOGY</span>
                    </motion.h2>

                    <motion.p
                        className="text-gray-400 text-center mb-16 max-w-3xl mx-auto text-xl leading-relaxed"
                        variants={itemVariants}
                    >
                        Built by agricultural technology experts for farming professionals. AgroBank understands the complex financial requirements of modern agricultural operations.
                    </motion.p>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
                        {[
                            {
                                title: 'FARM-SECURE TRANSACTIONS',
                                description: 'Military-grade encryption protocols with agricultural compliance standards and comprehensive farm data protection systems',
                                iconPath: 'M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z'
                            },
                            {
                                title: 'COMMODITY ANALYTICS',
                                description: 'AI-powered market intelligence and crop price prediction algorithms for strategic decision making and profit optimization',
                                iconPath: 'M9 17a2 2 0 11-4 0 2 2 0 014 0zM21 17a2 2 0 11-4 0 2 2 0 014 0z'
                            },
                            {
                                title: 'AGRICULTURAL MOBILE BANKING',
                                description: 'Complete farm banking services optimized for rural connectivity and field operations with offline capabilities',
                                iconPath: 'M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z'
                            },
                            {
                                title: 'SMART FARM CONTRACTS',
                                description: 'Automated payment systems for seasonal workers, equipment leases, and crop delivery schedules with blockchain verification',
                                iconPath: 'M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z'
                            },
                            {
                                title: 'CROP INSURANCE INTEGRATION',
                                description: 'Seamless integration with agricultural insurance providers and automated claims processing with weather data verification',
                                iconPath: 'M12,1L3,5V11C3,16.55 6.84,21.74 12,23C17.16,21.74 21,16.55 21,11V5L12,1M12,7C13.4,7 14.8,8.6 14.8,10.5V11.5C15.4,11.5 16,12.4 16,13V16C16,17.4 15.4,18 14.8,18H9.2C8.6,18 8,17.4 8,16V13C8,12.4 8.6,11.5 9.2,11.5V10.5C9.2,8.6 10.6,7 12,7M12,8.2C11.2,8.2 10.5,8.7 10.5,10.5V11.5H13.5V10.5C13.5,8.7 12.8,8.2 12,8.2Z'
                            },
                            {
                                title: 'WEATHER-BASED ALERTS',
                                description: 'Financial alerts synchronized with weather patterns and their impact on agricultural operations and market conditions',
                                iconPath: 'M12.74,5.47C15.1,6.5 16.35,9.03 15.92,11.46C17.19,12.56 18,14.19 18,16V16.17C18.31,16.06 18.65,16 19,16A3,3 0 0,1 22,19A3,3 0 0,1 19,22H6A4,4 0 0,1 2,18A4,4 0 0,1 6,14H6.27C5,12.45 4.6,10.24 5.5,8.26C6.75,5.28 10.25,4.07 12.74,5.47M11.93,7.3C10.16,6.5 8.09,7.31 7.31,9.07C6.85,10.09 6.93,11.22 7.41,12.13C8.5,10.83 10.16,10 12,10C12.7,10 13.38,10.12 14,10.34C13.94,9.06 13.18,7.86 11.93,7.3Z'
                            },
                            {
                                title: 'EQUIPMENT FINANCING',
                                description: 'Specialized loans and leasing options for farm equipment and infrastructure with competitive rates and flexible terms',
                                iconPath: 'M2,17H22V19H2M1.15,12.95L4,11L6.85,12.95L5.92,15H2.08M9.85,12.95L12.7,11L15.55,12.95L14.62,15H10.78M17.85,12.95L20.7,11L23.55,12.95L22.62,15H18.78M2,8V10H22V8H14L12,6H10L8,8M2,11V13H4V11M6,11V13H8V11M10,11V13H12V11M14,11V13H16V11M18,11V13H20V11M22,11V13H24V11'
                            },
                            {
                                title: 'HARVEST PAYMENTS',
                                description: 'Seasonal payment scheduling aligned with harvest cycles and cash flow patterns with predictive financial modeling',
                                iconPath: 'M17,10.5V7A1,1 0 0,0 16,6H4A1,1 0 0,0 3,7V10.5C3,11.33 3.67,12 4.5,12C5.33,12 6,11.33 6,10.5V9H14V10.5C14,11.33 14.67,12 15.5,12C16.33,12 17,11.33 17,10.5M4,2H16A1,1 0 0,1 17,3V5H3V3A1,1 0 0,1 4,2M10,14L12,16H8L10,14M10,20L8,18H12L10,20M16,14L18,16H14L16,14M16,20L14,18H18L16,20Z'
                            }
                        ].map((feature, index) => (
                            <motion.div
                                key={index}
                                className="bg-gradient-to-br from-black/80 via-gray-900/50 to-black/80 border border-[#00E834]/30 rounded-2xl p-8 text-center hover:border-[#00E834] transition-all backdrop-blur-sm group"
                                variants={itemVariants}
                                whileHover={{
                                    scale: 1.05,
                                    y: -5,
                                    borderColor: '#00E834',
                                    background: 'linear-gradient(135deg, rgba(0, 232, 52, 0.1) 0%, rgba(0, 0, 0, 0.8) 50%, rgba(0, 0, 0, 0.9) 100%)'
                                }}
                                transition={{ duration: 0.3 }}
                            >
                                <div className="w-16 h-16 bg-gradient-to-br from-[#00E834] to-green-600 rounded-2xl mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform">
                                    <svg className="w-8 h-8 text-black" fill="currentColor" viewBox="0 0 24 24">
                                        <path d={feature.iconPath} />
                                    </svg>
                                </div>
                                <h4 className="font-black text-white mb-4 text-lg tracking-wide">{feature.title}</h4>
                                <p className="text-gray-400 text-sm leading-relaxed">{feature.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Statistics Section Futuriste */}
                <motion.div
                    className="relative z-20 mt-24 px-6"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                >
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
                        {[
                            { number: '50K+', label: 'FARMERS BANKING', delay: 0 },
                            { number: '$2.8B', label: 'TRANSACTIONS PROCESSED', delay: 0.1 },
                            { number: '95%', label: 'RURAL COVERAGE', delay: 0.2 },
                            { number: '24/7', label: 'SUPPORT AVAILABLE', delay: 0.3 }
                        ].map((stat, index) => (
                            <motion.div
                                key={index}
                                className="text-center"
                                variants={itemVariants}
                            >
                                <motion.div
                                    className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#00E834] via-white to-[#00E834] mb-3"
                                    initial={{ opacity: 0, scale: 0.5 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.8, delay: stat.delay }}
                                >
                                    {stat.number}
                                </motion.div>
                                <div className="text-gray-400 font-bold tracking-wider">{stat.label}</div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Call to Action Futuriste */}
                <motion.div
                    className="relative z-20 text-center pb-20 mt-32"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                >
                    <motion.div 
                        className="bg-gradient-to-br from-[#00E834]/10 via-black to-gray-900 rounded-3xl border border-[#00E834]/30 p-16 max-w-4xl mx-auto relative overflow-hidden"
                        variants={itemVariants}
                    >
                        <div className="absolute inset-0 bg-gradient-to-r from-[#00E834]/5 to-transparent rounded-3xl"></div>
                        
                        <div className="relative z-10">
                            <h3 className="text-3xl md:text-4xl font-black text-white mb-6 leading-tight">
                                READY TO REVOLUTIONIZE
                                <br />
                                <span className="text-[#00E834]">YOUR FARM&apos;S FINANCES?</span>
                            </h3>
                            <p className="text-gray-400 mb-10 max-w-3xl mx-auto text-lg leading-relaxed">
                                Join thousands of agricultural professionals who trust AgroBank for their farming financial operations. 
                                From seed capital to harvest revenue, we provide comprehensive 
                                <span className="text-[#00E834] font-bold"> financial technology solutions</span> for every step of your agricultural journey.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                                <motion.button
                                    className="bg-gradient-to-r from-[#00E834] to-green-600 hover:from-green-600 hover:to-[#00E834] text-black px-10 py-4 rounded-2xl font-black shadow-lg text-lg tracking-wide border border-green-400"
                                    whileHover={{ scale: 1.05, y: -2 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    OPEN AGROBANK ACCOUNT
                                </motion.button>

                                <motion.button
                                    className="bg-gradient-to-r from-white/10 to-gray-900/50 border-2 border-[#00E834] text-white px-10 py-4 rounded-2xl font-black hover:bg-gradient-to-r hover:from-[#00E834]/20 hover:to-gray-800/50 transition-all text-lg tracking-wide backdrop-blur-sm"
                                    whileHover={{ scale: 1.05, y: -2 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    SCHEDULE FARM CONSULTATION
                                </motion.button>
                            </div>

                            <p className="text-[#00E834] font-bold mt-8 tracking-wider">
                                FDIC INSURED • AGRICULTURAL SPECIALIST SUPPORT • ZERO HIDDEN FEES
                            </p>
                        </div>

                        {/* Lignes de scan */}
                        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#00E834] to-transparent opacity-50"></div>
                        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#00E834] to-transparent opacity-50"></div>
                    </motion.div>
                </motion.div>
            </div>

            {/* Particules flottantes */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {[...Array(20)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-2 h-2 bg-[#00E834] rounded-full opacity-30"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`
                        }}
                        animate={{
                            y: [0, -60, 0],
                            x: [0, Math.sin(i) * 40, 0],
                            opacity: [0.3, 0.8, 0.3],
                            scale: [1, 1.5, 1]
                        }}
                        transition={{
                            duration: 10 + i * 0.5,
                            repeat: Infinity,
                            delay: i * 0.4,
                            ease: "easeInOut"
                        }}
                    />
                ))}
            </div>

            {/* Badge AgroBank */}
            <motion.div
                className="fixed bottom-6 right-6 bg-gradient-to-r from-[#00E834] to-green-600 text-black rounded-2xl px-6 py-3 font-black opacity-90 z-30 border border-green-400 backdrop-blur-sm"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 0.9, y: 0 }}
                transition={{ duration: 0.8, delay: 2 }}
            >
                <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-black rounded-full animate-pulse"></div>
                    <span className="tracking-wider">AGROBANK CUSTOMER</span>
                </div>
            </motion.div>
        </div>
    );
};

export default AgroBankFintechComponent;