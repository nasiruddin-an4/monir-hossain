'use client';

import { ArrowRight, Globe, Layers, Zap, Building, Briefcase, ShieldCheck, Database, Cloud } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function Institution() {
    return (
        <section className="relative pt-24 pb-0 bg-[#0B0F19] overflow-hidden">

            {/* Background Ambience */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-amber-500/5 rounded-full blur-[120px] pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-[100px] pointer-events-none"></div>

            <div className="container mx-auto px-6 lg:px-12 relative z-10">
                <div className="flex flex-col lg:flex-row items-end gap-16 lg:gap-24">

                    {/* Left Content */}
                    <div className="w-full lg:w-1/2 space-y-12 relative z-10 pb-24">

                        {/* Header */}
                        <div className="space-y-4">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-amber-500/30 bg-amber-500/10 text-amber-400">
                                <Building className="w-4 h-4" />
                                <span className="text-xs font-bold uppercase tracking-widest">Global Ecosystem</span>
                            </div>
                            <h2 className="text-4xl lg:text-5xl font-bold text-white leading-tight">
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-400">Institution</span> & <br />
                                Global Enterprise
                            </h2>
                        </div>

                        {/* Stats Grid */}
                        <div className="grid grid-cols-3 gap-6 p-6 rounded-2xl bg-white/5 border border-white/5 backdrop-blur-sm">
                            <div className="text-center space-y-1">
                                <span className="block text-4xl font-bold text-amber-400">19+</span>
                                <span className="text-xs text-slate-400 uppercase tracking-wide">Ventures</span>
                            </div>
                            <div className="text-center space-y-1 border-x border-white/10">
                                <span className="block text-4xl font-bold text-amber-400">47+</span>
                                <span className="text-xs text-slate-400 uppercase tracking-wide">Countries</span>
                            </div>
                            <div className="text-center space-y-1">
                                <span className="block text-4xl font-bold text-amber-400">4</span>
                                <span className="text-xs text-slate-400 uppercase tracking-wide">Pillars</span>
                            </div>
                        </div>

                        {/* Detailed Content */}
                        <div className="space-y-2">

                            <div className="space-y-4">
                                <h3 className="text-xl font-semibold text-white flex items-center gap-2">
                                    <Globe className="w-5 h-5 text-blue-400" />
                                    Building a Global Enterprise
                                </h3>
                                <p className="text-slate-400 leading-relaxed font-light text-sm sm:text-base">
                                    Betopia Group has grown into a powerhouse of specialized ventures across technology, fintech, energy, and education. Each unit contributes to a unified global vision with domain-specific excellence.
                                </p>
                            </div>

                            {/* Ventures Tags
                            <div>
                                <h4 className="text-white text-sm font-semibold uppercase tracking-wider mb-4 border-l-2 border-amber-500 pl-3">Famous Ventures</h4>
                                <div className="flex flex-wrap gap-2">
                                    {['Bdcalling IT Ltd', 'Softvence', 'SM Technology', 'JVAI', 'Scaleup', 'Sparktech', 'Back Bencher Studio', 'Data Insight Ltd'].map((venture, i) => (
                                        <span key={i} className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs text-slate-300 hover:text-white hover:border-amber-500/50 hover:bg-amber-500/10 transition-colors cursor-default">
                                            {venture}
                                        </span>
                                    ))}
                                </div>
                            </div> */}

                            {/* Global Pillars List */}
                            {/* <div>
                                <h4 className="text-white text-sm font-semibold uppercase tracking-wider mb-4 border-l-2 border-blue-500 pl-3">Global Service Pillars</h4>
                                <div className="grid sm:grid-cols-2 gap-4">
                                    {[
                                        { icon: Cloud, label: 'Cloud Modernization' },
                                        { icon: ShieldCheck, label: 'Cybersecurity & Compliance' },
                                        { icon: Database, label: 'Data, AI & Analytics' },
                                        { icon: Briefcase, label: 'B2B White-Label Services' }
                                    ].map((pillar, idx) => (
                                        <div key={idx} className="flex items-center gap-3 p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-colors border border-transparent hover:border-white/5 group">
                                            <pillar.icon className="w-5 h-5 text-blue-400 group-hover:scale-110 transition-transform" />
                                            <span className="text-sm text-slate-300 group-hover:text-white transition-colors">{pillar.label}</span>
                                        </div>
                                    ))}
                                </div>
                            </div> */}

                        </div>

                        {/* CTA */}
                        <div className="">
                            <Link
                                href="#"
                                className="group inline-flex items-center gap-3 px-8 py-3 bg-amber-500 text-[#0a0e27] rounded-full font-bold hover:bg-white transition-all duration-300 shadow-[0_0_20px_rgba(252,163,17,0.3)] hover:shadow-[0_0_20px_rgba(255,255,255,0.3)]"
                            >
                                Explore Ecosystem <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </div>

                    </div>

                    {/* Right Visual */}
                    <div className="w-full lg:w-1/2 relative flex justify-center lg:justify-end -mt-24 md:-mt-0">

                        {/* Abstract shape Background */}
                        <div className="absolute top-[40%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] z-0">
                            {/* Layered blobs for a "painted" look */}
                            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="absolute top-0 left-0 w-full h-full text-amber-500/20 animate-pulse-slow">
                                <path fill="currentColor" d="M41.8,-53.4C53.5,-45.5,61.9,-33.2,65.8,-19.9C69.7,-6.6,69.1,7.8,62.8,19.3C56.5,30.8,44.5,39.4,32.3,46.7C20.1,54,7.8,60,-3.3,64.5C-14.4,69,-28.5,72,-39.8,65.4C-51.1,58.8,-59.6,42.6,-64,27.1C-68.4,11.6,-68.8,-3.2,-63.3,-16.1C-57.8,-29,-46.5,-40,-34.2,-47.7C-21.9,-55.4,-8.6,-59.8,2.7,-63.5C14,-67.2,28.1,-70.2,41.8,-53.4Z" transform="translate(100 100) scale(1.2)" />
                            </svg>
                            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="absolute top-4 left-4 w-full h-full text-amber-500 opacity-80">
                                <path fill="currentColor" d="M44.7,-76.4C58.9,-69.2,71.8,-59.1,81.6,-46.6C91.4,-34.1,98.1,-19.2,95.8,-5.3C93.5,8.6,82.2,21.5,70.6,31.7C59,41.9,47.1,49.5,35.2,55.4C23.3,61.3,11.4,65.6,-1.2,67.6C-13.8,69.7,-28.9,69.5,-41.2,63.1C-53.5,56.7,-63,44.1,-71.4,30.3C-79.8,16.5,-87.1,1.5,-85.1,-12.3C-83.1,-26.1,-71.8,-38.7,-59.6,-46.5C-47.4,-54.3,-34.4,-57.3,-21.5,-65.4C-8.6,-73.5,4.2,-86.7,17.2,-86.7C30.2,-86.7,44.7,-76.4,44.7,-76.4Z" transform="translate(100 100) scale(1.0)" />
                            </svg>
                        </div>

                        {/* Image Frame */}
                        <div className="relative z-10 w-full max-w-sm lg:max-w-lg aspect-[3/4]">
                            <Image
                                src="https://i.postimg.cc/R0bKFqC8/about_Img.png"
                                alt="Mr. Monir Hossain"
                                fill
                                className="object-cover object-top drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)] mask-image-b-fade"
                            />

                            {/* Floating Elements on Image */}
                            <div className="absolute bottom-10 -right-4 p-4 bg-[#1a1f3c] rounded-2xl border border-white/10 shadow-xl flex items-center gap-3 animate-float">
                                <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center">
                                    <Globe className="w-5 h-5 text-white" />
                                </div>
                                <div>
                                    <span className="block text-white font-bold text-sm">Global Reach</span>
                                    <span className="block text-xs text-slate-400">Expanding Horizons</span>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
