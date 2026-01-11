'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, ArrowLeft, Trophy, Star, Medal, Crown } from 'lucide-react';

const awardsData = [
    {
        id: 1,
        year: '2023',
        title: 'Lifetime Achievement Award in Technology & Innovation',
        description: 'Honored for revolutionizing the IT landscape of Bangladesh and creating employment for thousands.',
        image: 'https://i.postimg.cc/GtRF0Vm3/a1.jpg',
        category: 'Innovation',
        organization: 'Global Tech Summit'
    },
    {
        id: 2,
        year: '2022',
        title: 'Entrepreneur of the Year',
        description: 'Recognized by the Ministry of Commerce for outstanding export performance in the service sector.',
        image: 'https://i.postimg.cc/QCDQLwdx/a2.jpg',
        category: 'Business',
        organization: 'National Export Trophy'
    },
    {
        id: 3,
        year: '2021',
        title: 'Excellence in Global Leadership',
        description: 'Awarded for exceptional leadership in expanding sustainable business practices across 47+ countries.',
        image: 'https://i.postimg.cc/KjbPXw8Y/a4.jpg',
        category: 'Leadership',
        organization: 'Asia Business Forum'
    }
];

export default function Awards() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);

    // Auto-play functionality
    useEffect(() => {
        let interval;
        if (isAutoPlaying) {
            interval = setInterval(() => {
                nextSlide();
            }, 5000);
        }
        return () => clearInterval(interval);
    }, [currentIndex, isAutoPlaying]);

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % awardsData.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev - 1 + awardsData.length) % awardsData.length);
    };

    return (
        <section className="relative py-24 bg-[#0a0e27] overflow-hidden">

            {/* Background Decor */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-amber-500/5 rounded-full blur-[120px] pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-[100px] pointer-events-none"></div>

            <div className="container mx-auto px-6 lg:px-12 relative z-10">

                {/* Header Section */}
                <div className="flex flex-col lg:flex-row justify-between items-start gap-12 mb-20">

                    <div className="lg:max-w-2xl space-y-6">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-amber-500/30 bg-amber-500/10 text-amber-300 mb-2">
                            <Trophy className="w-4 h-4" />
                            <span className="text-xs font-bold uppercase tracking-widest">Global Recognition</span>
                        </div>

                        <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                            Award & <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-400">Honor</span>
                        </h2>

                        <p className="text-lg text-slate-300 leading-relaxed font-light">
                            <strong className="text-white font-semibold">Mr. Monir Hossain</strong> is celebrated globally for his visionary leadership and commitment to excellence. His journey is marked by numerous accolades recognizing his contribution to technology, business, and society.
                        </p>

                        <Link
                            href="/awards"
                            className="group inline-flex items-center gap-2 text-amber-400 font-medium hover:text-amber-300 transition-colors"
                        >
                            <span className="border-b border-amber-400/30 group-hover:border-amber-400 transition-colors">View All Achievements</span>
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </div>

                    {/* Stats Section */}
                    <div className="grid grid-cols-3 gap-8 lg:gap-12 w-full lg:w-auto mt-4 lg:mt-0 p-8 rounded-3xl bg-white/5 border border-white/5 backdrop-blur-sm">
                        <div className="text-center space-y-1">
                            <div className="flex justify-center mb-2">
                                <Crown className="w-6 h-6 text-amber-400" />
                            </div>
                            <span className="block text-3xl font-bold text-white">25+</span>
                            <span className="block text-xs uppercase tracking-wide text-slate-400">National Awards</span>
                        </div>
                        <div className="text-center space-y-1 border-x border-white/5 px-4">
                            <div className="flex justify-center mb-2">
                                <Medal className="w-6 h-6 text-blue-400" />
                            </div>
                            <span className="block text-3xl font-bold text-white">15+</span>
                            <span className="block text-xs uppercase tracking-wide text-slate-400">Intl. Recognition</span>
                        </div>
                        <div className="text-center space-y-1">
                            <div className="flex justify-center mb-2">
                                <Star className="w-6 h-6 text-purple-400" />
                            </div>
                            <span className="block text-3xl font-bold text-white">40+</span>
                            <span className="block text-xs uppercase tracking-wide text-slate-400">Total Honors</span>
                        </div>
                    </div>
                </div>

                {/* Carousel Section */}
                <div
                    className="relative bg-[#0f142e] rounded-[2.5rem] overflow-hidden border border-white/5 shadow-2xl"
                    onMouseEnter={() => setIsAutoPlaying(false)}
                    onMouseLeave={() => setIsAutoPlaying(true)}
                >
                    {/* Main Slide Content */}
                    <div className="flex flex-col lg:flex-row">

                        {/* Image Side */}
                        <div className="relative w-full lg:w-[45%] aspect-video lg:aspect-auto min-h-[400px] lg:min-h-[500px] bg-slate-800 group">
                            {/* Image Placeholder or Actual Image */}
                            <div className="absolute inset-0 bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center text-slate-500 overflow-hidden">
                                <div className={`w-full h-full transition-opacity duration-700 ease-in-out`}>
                                    <Image
                                        src={awardsData[currentIndex].image}
                                        alt={awardsData[currentIndex].title}
                                        fill
                                        className="object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-500"
                                    />
                                    {/* Fallback pattern if image is missing/broken */}
                                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:20px_20px] opacity-20"></div>
                                </div>
                            </div>

                            {/* Overlay Content on Image */}
                            <div className="absolute top-8 left-8">
                                <div className="px-4 py-2 bg-black/40 backdrop-blur-md rounded-full border border-white/10 text-white text-sm font-medium flex items-center gap-2">
                                    <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse"></span>
                                    {awardsData[currentIndex].year}
                                </div>
                            </div>
                        </div>

                        {/* Text Side */}
                        <div className="w-full lg:w-[55%] p-10 lg:p-16 flex flex-col justify-center relative">
                            {/* Decorative Quote */}
                            <div className="absolute top-10 right-10 opacity-10">
                                <Trophy className="w-32 h-32 text-white" />
                            </div>

                            <div className="relative z-10 space-y-8 animate-fade-in key={currentIndex}">

                                <div className="space-y-2">
                                    <span className="text-amber-400 font-bold tracking-wider uppercase text-sm">
                                        {awardsData[currentIndex].category}
                                    </span>
                                    <h3 className="text-3xl lg:text-4xl font-bold text-white leading-tight">
                                        {awardsData[currentIndex].title}
                                    </h3>
                                </div>

                                <p className="text-lg text-slate-300 leading-relaxed border-l-4 border-amber-500/50 pl-6">
                                    {awardsData[currentIndex].description}
                                </p>

                                <div className="pt-4">
                                    <p className="text-sm text-slate-500 uppercase tracking-widest font-semibold mb-2">Awarded By</p>
                                    <p className="text-xl text-white font-serif italic">{awardsData[currentIndex].organization}</p>
                                </div>

                                {/* Controls */}
                                <div className="flex items-center gap-4 pt-8 border-t border-white/5">
                                    <button
                                        onClick={prevSlide}
                                        className="p-4 rounded-full border border-white/10 text-white hover:bg-white/10 hover:border-white/20 transition-all active:scale-95 group"
                                        aria-label="Previous Award"
                                    >
                                        <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                                    </button>

                                    {/* Indicators */}
                                    <div className="flex items-center gap-2 px-4">
                                        {awardsData.map((_, idx) => (
                                            <button
                                                key={idx}
                                                onClick={() => setCurrentIndex(idx)}
                                                className={`h-1.5 rounded-full transition-all duration-300 ${idx === currentIndex ? 'w-8 bg-amber-400' : 'w-2 bg-white/20 hover:bg-white/40'}`}
                                                aria-label={`Go to slide ${idx + 1}`}
                                            />
                                        ))}
                                    </div>

                                    <button
                                        onClick={nextSlide}
                                        className="p-4 rounded-full border border-white/10 text-white hover:bg-white/10 hover:border-white/20 transition-all active:scale-95 group"
                                        aria-label="Next Award"
                                    >
                                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                    </button>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </section>
    );
}
