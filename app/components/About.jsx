'use client';
import { Quote, Users, Globe, Briefcase, Award, ArrowUpRight, CheckCircle2 } from 'lucide-react';

export default function About() {
  return (
    <section className="relative py-24 bg-[#0a0e27] overflow-hidden">
      
      {/* Dynamic Background */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent"></div>
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-indigo-600/5 rounded-full blur-[120px] pointer-events-none mix-blend-screen"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-600/5 rounded-full blur-[100px] pointer-events-none mix-blend-screen"></div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 animate-fade-in">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-300">
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse"></span>
              <span className="text-xs font-bold uppercase tracking-widest">About Mr. Hossain’s</span>
            </div>
          </div>
          <div className="hidden md:block">
             <a href="/biography" className="group flex items-center gap-3 px-6 py-3 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all text-white font-semibold">
                <span>Read Full Biography</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform text-indigo-400" />
             </a>
          </div>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid lg:grid-cols-12 gap-6">
          
          {/* Main Profile Card - Spans 7 cols */}
          <div className="lg:col-span-7 bg-[#111633] border border-white/5 rounded-[2rem] p-8 lg:p-10 relative overflow-hidden group hover:border-indigo-500/30 transition-colors duration-500">
             {/* Gradient Overlay */}
             <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-bl from-indigo-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
             
             <div className="relative z-10 space-y-8">

                <div className="space-y-6 text-lg text-slate-300 leading-relaxed font-light">
                  <p>
                    <strong className="text-white font-semibold">Muhammad Monir Hossain</strong> is the Founder & CEO of <span className="text-indigo-300">Betopia Group</span>, a global conglomerate redefining industries across IT, FinTech, and Energy, Real Estate, Import – Export, Manufacturing, Supply Chain, and Education.
                  </p>
                  <p>
                    From humble beginnings as a freelancer in 2013 to leading a workforce of <strong className="text-white">4,000+ professionals</strong>, his journey is a testament to resilience and vision.
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-indigo-950/30 border border-indigo-500/20 relative">
                   <Quote className="absolute top-4 right-4 w-6 h-6 text-indigo-500/20 transform rotate-180" />
                   <p className="text-indigo-200 italic font-medium relative z-10">
                     "To empower people and organizations to reach their highest potential."
                   </p>
                </div>
             </div>
          </div>

          {/* Stats Column - Spans 5 cols */}
          <div className="lg:col-span-5 grid grid-rows-2 gap-6">
             
             {/* Journey Card */}
             <div className="bg-[#111633] border border-white/5 rounded-[2rem] p-8 relative overflow-hidden group hover:border-purple-500/30 transition-colors duration-500">
                <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-bl from-purple-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative z-10">
                   <div className="flex items-center gap-3 mb-4">
                      <Briefcase className="w-5 h-5 text-purple-400" />
                      <h4 className="text-lg font-bold text-white">Entrepreneurial Journey</h4>
                   </div>
                   <p className="text-slate-400 text-sm leading-relaxed mb-4">
                      Starting in 2014 with <strong className="text-white">Bdcalling IT Ltd.</strong>, he has successfully delivered over <strong className="text-white">50,000 projects</strong> across 47 countries.
                   </p>
                   <div className="flex items-center gap-2 text-xs font-bold text-purple-300 uppercase tracking-wider">
                      <CheckCircle2 className="w-4 h-4" />
                      <span>Resilience & Growth</span>
                   </div>
                </div>
             </div>

             {/* Stats Grid */}
             <div className="grid grid-cols-2 gap-4">
                {[
                  { label: "Global Team", value: "4000+", icon: Users, color: "text-blue-400" },
                  { label: "Countries", value: "47+", icon: Globe, color: "text-indigo-400" },
                  { label: "Projects", value: "50k+", icon: CheckCircle2, color: "text-emerald-400" },
                  { label: "Awards", value: "25+", icon: Award, color: "text-amber-400" },
                ].map((stat, i) => (
                  <div key={i} className="bg-[#111633] border border-white/5 rounded-3xl p-5 flex flex-col justify-center hover:bg-white/5 transition-colors group">
                     <stat.icon className={`w-5 h-5 ${stat.color} mb-2 group-hover:scale-110 transition-transform`} />
                     <p className="text-2xl font-bold text-white">{stat.value}</p>
                     <p className="text-[10px] uppercase font-bold text-slate-500 tracking-wider">{stat.label}</p>
                  </div>
                ))}
             </div>
          </div>

        </div>

        {/* Mobile Link (Visible only on small screens) */}
        <div className="md:hidden mt-8 text-center">
            <a href="/biography" className="inline-flex items-center gap-2 text-indigo-400 font-bold uppercase tracking-widest text-sm hover:text-white transition-colors">
              Read Full Biography
              <ArrowUpRight className="w-4 h-4" />
            </a>
        </div>

      </div>
    </section>
  );
}
