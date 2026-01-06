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
    <section className="relative h-[95vh] pt-32 overflow-hidden bg-[#0a0e27] flex flex-col justify-between lg:block">

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
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10 h-full flex flex-col lg:block">
        <div className="flex flex-col lg:flex-row h-full items-center lg:items-stretch gap-8 lg:gap-24 flex-grow">

          {/* Left Content */}
          <div className="w-full lg:w-[55%] space-y-8 lg:space-y-10 text-center lg:text-left pt-8 lg:pt-0 lg:self-center z-20 lg:pb-0">


            {/* Main Heading */}
            <div className="space-y-4 lg:space-y-6 relative">
              {/* Decorative Blur behind text */}
              <div className="absolute -inset-10 bg-indigo-500/20 blur-[80px] lg:blur-[100px] -z-10 rounded-full opacity-50"></div>

              <h1 className="font-black tracking-tight leading-[1.1] lg:leading-[1.05] text-white">
                <span className="block text-4xl sm:text-5xl lg:text-7xl xl:text-8xl opacity-0 animate-slide-in-left [animation-delay:400ms] drop-shadow-lg">
                  Building a
                </span>
                <span className="block text-4xl sm:text-5xl lg:text-7xl xl:text-8xl text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 opacity-0 animate-slide-in-left [animation-delay:600ms] pb-2">
                  Legacy of
                </span>
                <span className="block text-5xl sm:text-7xl lg:text-7xl xl:text-8xl opacity-0 animate-slide-in-left [animation-delay:800ms] font-display italic text-transparent bg-clip-text bg-gradient-to-br from-white via-slate-200 to-slate-400 mt-2 filter drop-shadow-[0_0_30px_rgba(255,255,255,0.1)]">
                  INNOVATION
                </span>
              </h1>

              <p className="text-base sm:text-xl text-slate-300 max-w-xl lg:max-w-2xl mx-auto lg:mx-0 leading-relaxed opacity-0 animate-fade-in [animation-delay:1000ms] font-light px-4 lg:px-0">
                Discover the journey of <span className="text-white font-semibold">Muhammad Monir Hossain</span>, a leader dedicated to transforming industries and empowering communities through sustainable business ventures.
              </p>
            </div>

            {/* CTA Buttons & Socials */}
            <div className="flex flex-col sm:flex-row items-center gap-6 lg:gap-8 justify-center lg:justify-start pt-2 lg:pt-4">
              <Link
                href="/about"
                className="group relative inline-flex items-center gap-2 text-lg text-white font-medium transition-all duration-300 hover:text-blue-400"
              >
                <span>Learn More</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
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
                    className="p-3 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 hover:border-white/20 text-slate-300 hover:text-white transition-all duration-300 group"
                  >
                    <Icon className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  </Link>
                ))}
              </div>
            </div>

          </div>

          {/* Right Visual */}
          <div className="w-full relative opacity-0 animate-scale-in [animation-delay:800ms] flex justify-center lg:justify-end items-end lg:items-center flex-grow lg:flex-grow-0 mt-8 lg:mt-0 lg:self-end">
            <div className="relative w-full max-w-6xl aspect-[3/4]">
              <Image
                src="/hero.png"
                alt="Hero"
                fill
                className="object-contain object-bottom"
                priority
              />
            </div>
            {/* Mobile bottom Gradient Fade */}
            <div className="absolute bottom-0 left-0 w-full h-1/4 bg-gradient-to-t from-[#0a0e27] to-transparent lg:hidden pointer-events-none"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
