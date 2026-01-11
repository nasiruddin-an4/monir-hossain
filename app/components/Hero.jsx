'use client';

import Link from "next/link";
import { useState, useEffect } from "react";
import { ArrowRight, Play, TrendingUp, Globe, Award, Facebook, Linkedin, Youtube } from "lucide-react";
import Image from "next/image";

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
    <section className="relative min-h-[100dvh] pt-24 lg:pt-32 overflow-hidden bg-[#0a0e27] flex flex-col justify-center">

      {/* Dynamic Background Effects */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Main Gradient Field */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#1a1f3a] via-[#0a0e27] to-[#000000]"></div>

        <div
          className="absolute bottom-[-10%] left-[-10%] w-[300px] h-[300px] lg:w-[500px] lg:h-[500px] rounded-full bg-blue-600/10 blur-[80px] lg:blur-[120px] animate-pulse-slow mix-blend-screen"
          style={{
            transform: mounted ? `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * -0.02}px)` : 'none'
          }}
        ></div>
        <div
          className="absolute top-[-10%] right-[-10%] w-[400px] h-[400px] rounded-full bg-purple-600/10 blur-[100px] animate-pulse-slow mix-blend-screen delay-1000"
        />
      </div>

      <div className="container mx-auto px-4 md:px-6 lg:px-12 relative z-10 h-full flex flex-col lg:flex-row items-center lg:items-end justify-between gap-12 lg:gap-0">
        
        {/* Left Content */}
        <div className="w-full lg:w-1/2 space-y-8 text-center lg:text-left pt-10 lg:pt-0 lg:pb-32 z-20 order-2 lg:order-1">
          {/* Main Heading */}
          <div className="space-y-4 relative">
            {/* Decorative Blur behind text */}
            <div className="absolute -inset-10 bg-indigo-500/20 blur-[80px] lg:blur-[100px] -z-10 rounded-full opacity-50"></div>

            <div className="flex flex-col gap-1 sm:gap-2">
              <span className="block text-4xl sm:text-5xl lg:text-7xl xl:text-8xl font-black tracking-tight text-white opacity-0 animate-slide-in-left [animation-delay:400ms] drop-shadow-xl">
                Building a
              </span>
              <span className="block text-4xl sm:text-5xl lg:text-7xl xl:text-8xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 opacity-0 animate-slide-in-left [animation-delay:600ms] pb-2">
                Legacy of
              </span>
              <span className="block text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-display italic font-black text-transparent bg-clip-text bg-gradient-to-br from-white via-slate-200 to-slate-400 opacity-0 animate-slide-in-left [animation-delay:800ms] filter drop-shadow-[0_0_30px_rgba(255,255,255,0.15)] leading-tight">
                INNOVATION
              </span>
            </div>

            <p className="text-base sm:text-lg lg:text-xl text-slate-300 max-w-lg lg:max-w-xl mx-auto lg:mx-0 leading-relaxed opacity-0 animate-fade-in [animation-delay:1000ms] font-light pt-4">
              Discover the journey of <span className="text-white font-semibold">Muhammad Monir Hossain</span>, a leader dedicated to transforming industries and empowering communities through sustainable business ventures.
            </p>
          </div>

          {/* CTA Buttons & Socials */}
          <div className="flex flex-col sm:flex-row items-center gap-6 lg:gap-8 justify-center lg:justify-start pt-4 opacity-0 animate-fade-in [animation-delay:1200ms]">
            <Link
              href="/biography"
              className="group relative inline-flex items-center gap-2 text-lg text-white font-medium transition-all duration-300 hover:text-blue-400"
            >
              <span>Learn More</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
            </Link>

            {/* Social Icons */}
            <div className="flex items-center gap-4">
              {[
                { Icon: Facebook, href: '#' },
                { Icon: Linkedin, href: '#' },
                { Icon: Youtube, href: '#' }
              ].map(({ Icon, href }, index) => (
                <Link
                  key={index}
                  href={href}
                  className="p-3 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 hover:border-blue-400/30 text-slate-300 hover:text-white hover:shadow-[0_0_15px_rgba(59,130,246,0.5)] transition-all duration-300 group"
                  aria-label="Social Link"
                >
                  <Icon className="w-5 h-5 group-hover:scale-110 transition-transform" />
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Right Visual - Optimized Image Control */}
        <div className="w-full lg:w-1/2 relative lg:h-[90vh] flex items-end justify-center lg:justify-end order-1 lg:order-2 opacity-0 animate-scale-in [animation-delay:600ms]">
           <div className="relative w-[300px] xs:w-[350px] sm:w-[450px] md:w-[500px] lg:w-[650px] aspect-[4/5] lg:aspect-auto lg:h-full lg:absolute lg:right-[-50px] lg:bottom-0">
              <Image
                src="https://i.postimg.cc/KvyL46bC/hero_Img.png"
                alt="Muhammad Monir Hossain"
                fill
                className="object-contain object-bottom drop-shadow-[0_0_50px_rgba(0,0,0,0.5)]"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
                priority
              />
              {/* Gradient overlay at bottom to blend with section */}
              <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#0a0e27] via-[#0a0e27]/80 to-transparent lg:h-48"></div>
           </div>
        </div>

      </div>
    </section>
  );
}
