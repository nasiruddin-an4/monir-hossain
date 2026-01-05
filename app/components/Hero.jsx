'use client';

import Link from "next/link";
import { useState, useEffect } from "react";
import { ArrowRight, Play, TrendingUp, Globe, Award } from "lucide-react";

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  if (!mounted) return null;

  return (
    <section className="relative min-h-[calc(100vh-80px)] flex items-center py-16 lg:py-24 overflow-hidden bg-[#0a0e27]">
      
      {/* Dynamic Background Effects */}
      <div className="absolute inset-0 z-0">
        {/* Main Gradient Field */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#1a1f3a] via-[#0a0e27] to-[#000000]"></div>
        
        {/* Animated Orbs */}
        <div 
          className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] rounded-full bg-indigo-600/20 blur-[100px] animate-pulse-slow mix-blend-screen"
          style={{
            transform: `translate(${mousePosition.x * -0.02}px, ${mousePosition.y * 0.02}px)`
          }}
        ></div>
        <div 
          className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-blue-600/10 blur-[120px] animate-pulse-slow mix-blend-screen"
          style={{
            transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * -0.02}px)`
          }}
        ></div>
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
          
          {/* Left Content */}
          <div className="w-full lg:w-[55%] space-y-10 text-center lg:text-left">
            
            {/* Badge */}
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-blue-500/30 bg-blue-500/10 backdrop-blur-md animate-fade-in opacity-0 [animation-delay:200ms] mx-auto lg:mx-0 group hover:border-blue-500/50 transition-colors cursor-default">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-blue-500"></span>
              </span>
              <span className="text-xs font-bold text-blue-300 uppercase tracking-[0.2em] group-hover:text-blue-200 transition-colors">Visionary Entrepreneur</span>
            </div>

            {/* Main Heading */}
            <div className="space-y-6 relative">
              {/* Decorative Blur behind text */}
              <div className="absolute -inset-10 bg-indigo-500/20 blur-[100px] -z-10 rounded-full opacity-50"></div>
              
              <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black tracking-tight leading-[1.05] text-white">
                <span className="block opacity-0 animate-slide-in-left [animation-delay:400ms] drop-shadow-lg">
                  Building a
                </span>
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 opacity-0 animate-slide-in-left [animation-delay:600ms] pb-2">
                   Legacy of
                </span>
                <span className="block opacity-0 animate-slide-in-left [animation-delay:800ms] text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-display italic text-transparent bg-clip-text bg-gradient-to-br from-white via-slate-200 to-slate-400 mt-2 filter drop-shadow-[0_0_30px_rgba(255,255,255,0.1)]">
                  INNOVATION
                </span>
              </h1>
              
              <p className="text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed opacity-0 animate-fade-in [animation-delay:1000ms] font-light">
                Discover the journey of <span className="text-white font-semibold">Muhammad Monir Hossain</span>, a leader dedicated to transforming industries and empowering communities through sustainable business ventures.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-5 justify-center lg:justify-start pt-6 opacity-0 animate-fade-in [animation-delay:1200ms]">
              <Link
                href="/biography"
                className="group relative w-full sm:w-auto px-10 py-4 overflow-hidden rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold shadow-lg shadow-blue-900/40 hover:shadow-blue-600/40 hover:-translate-y-1 transition-all duration-300"
              >
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                <span className="relative flex items-center justify-center gap-3">
                  <span>Read Biography</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
              
              <Link
                href="/my-video"
                className="group w-full sm:w-auto px-10 py-4 bg-white/5 border border-white/10 backdrop-blur-md text-white font-bold rounded-full transition-all duration-300 hover:bg-white/10 hover:border-white/20 flex items-center justify-center gap-3 hover:-translate-y-1"
              >
                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Play className="w-3 h-3 fill-white text-white" />
                </div>
                <span>Watch Journey</span>
              </Link>
            </div>

          </div>

          {/* Right Visual */}
          <div className="w-full lg:w-[45%] relative opacity-0 animate-scale-in [animation-delay:800ms] flex justify-center lg:justify-end">
            <div className="relative aspect-[4/5] w-full max-w-sm lg:max-w-md">
              
              {/* Organic Background Shape */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-blue-600/30 via-purple-600/30 to-indigo-600/30 rounded-full blur-3xl opacity-60 animate-pulse-slow"></div>
              
              {/* Main Card */}
              <div className="absolute inset-0 bg-[#0f1535] rounded-[1.5rem] border border-white/10 shadow-2xl overflow-hidden group hover:border-indigo-500/50 transition-colors duration-500">
                {/* Image */}
                <div className="w-full h-full bg-[url('/monir-hossain/hero.jpg')] bg-cover bg-center group-hover:scale-105 transition-transform duration-700"></div>
                
                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0e27] via-transparent to-transparent opacity-80"></div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
