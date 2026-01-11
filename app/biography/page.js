'use client';

import React from 'react';
import Image from 'next/image';
import { 
  Briefcase, 
  Globe, 
  Award, 
  BookOpen, 
  Users, 
  Heart, 
  Lightbulb, 
  Target, 
  Quote,
  TrendingUp,
  Building2,
  GraduationCap
} from 'lucide-react';

export const runtime = 'edge';

export default function BiographyPage() {
  return (
    <main className="min-h-screen bg-[#050511] text-slate-300 font-sans selection:bg-blue-500/30">
      
      {/* ------------------- HERO SECTION ------------------- */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-20">
        {/* Abstract Background */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 w-full h-full bg-[radial-gradient(circle_at_50%_0%,rgba(59,130,246,0.15),transparent_70%)]"></div>
          <div className="absolute bottom-0 right-0 w-[800px] h-[800px] bg-purple-900/10 rounded-full blur-[120px] mix-blend-screen opacity-50"></div>
          <div className="absolute top-1/4 left-[-200px] w-[600px] h-[600px] bg-indigo-900/10 rounded-full blur-[100px] mix-blend-screen opacity-50"></div>
          {/* Grid Texture */}
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay"></div>
        </div>

        <div className="container mx-auto px-4 z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Left: Text Content */}
          <div className="space-y-8 text-center lg:text-left order-2 lg:order-1 relative">
             <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-semibold tracking-wider uppercase backdrop-blur-md">
                < Award className="w-4 h-4" />
                <span>Visionary Entrepreneur</span>
             </div>
             
             <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.1] text-white tracking-tight">
                Muhammad <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400">
                  Monir Hossain
                </span>
             </h1>
             
             <p className="text-xl sm:text-2xl text-slate-400 font-light max-w-2xl mx-auto lg:mx-0">
                Founder & CEO of <span className="text-white font-medium">Betopia Group</span>. <br/>
                Leading 4,000+ professionals across the globe.
             </p>

             <div className="flex flex-wrap gap-4 justify-center lg:justify-start pt-4">
                <div className="px-6 py-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
                   <div className="text-3xl font-bold text-white mb-1">19+</div>
                   <div className="text-sm text-slate-400 uppercase tracking-wider">Ventures</div>
                </div>
                <div className="px-6 py-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
                   <div className="text-3xl font-bold text-white mb-1">47+</div>
                   <div className="text-sm text-slate-400 uppercase tracking-wider">Countries</div>
                </div>
                <div className="px-6 py-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
                   <div className="text-3xl font-bold text-white mb-1">4k+</div>
                   <div className="text-sm text-slate-400 uppercase tracking-wider">Employees</div>
                </div>
             </div>
          </div>

          {/* Right: Hero Image */}
          <div className="relative order-1 lg:order-2 flex justify-center lg:justify-end">
             <div className="relative w-full max-w-[500px] aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl shadow-blue-900/20 border border-white/10 group">
                <div className="absolute inset-0 bg-gradient-to-t from-[#050511] via-transparent to-transparent opacity-60 z-10"></div>
                <Image
                  src="https://i.postimg.cc/KvyL46bC/hero_Img.png"
                  alt="Muhammad Monir Hossain"
                  fill
                  className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  priority
                />
                
                {/* Floating quote card */}
                <div className="absolute bottom-8 left-8 right-8 z-20 hidden md:block">
                   <div className="bg-white/10 backdrop-blur-xl border border-white/10 p-6 rounded-xl">
                      <Quote className="w-8 h-8 text-blue-400 mb-2 opacity-50" />
                      <p className="text-white font-medium italic">
                        "To empower people and organizations to reach their highest potential."
                      </p>
                   </div>
                </div>
             </div>
             
             {/* Decorative circle behind */}
             <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] border border-white/5 rounded-full animate-spin-slow-reverse"></div>
             <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] border border-white/5 rounded-full border-dashed animate-spin-slow"></div>
          </div>
        </div>
      </section>

      {/* ------------------- PROFILE OVERVIEW ------------------- */}
      <section className="py-24 relative">
        <div className="container mx-auto px-4 max-w-6xl">
           <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
              <div className="md:col-span-4 sticky top-32">
                 <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                    <span className="w-12 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full"></span>
                    <span>Overview</span>
                 </h2>
                 <p className="text-lg text-slate-400 leading-relaxed mb-8">
                   A journey from resilience to global leadership. Redefining what is possible from Bangladesh to the world.
                 </p>
                 <div className="p-6 bg-gradient-to-br from-blue-900/20 to-transparent border border-blue-500/20 rounded-2xl">
                    <h4 className="text-blue-200 font-semibold mb-2">Current Focus</h4>
                    <p className="text-sm text-slate-400">Developing Betopia City & Expanding Global IT Services.</p>
                 </div>
              </div>

              <div className="md:col-span-8 space-y-8 text-lg text-slate-300 leading-relaxed">
                 <p>
                   <strong className="text-white text-xl">Muhammad Monir Hossain</strong> is a visionary entrepreneur and global business leader from Bangladesh. As the Founder & CEO of <strong className="text-white">Betopia Group</strong>, he leads a rapidly expanding conglomerate with diversified operations across IT, Software, Fintech, Energy, Real Estate, and Education.
                 </p>
                 <p>
                   Under his leadership, Betopia Group has grown into a powerhouse, employing more than 4,000 professionals. His leadership style is driven by a purpose-led vision: <em>empowering people and organizations to reach their highest potential.</em>
                 </p>
                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
                    {[
                      "Global Tech Leader",
                      "Industrial Innovator",
                      "Mentor & Speaker",
                      "Philanthropist"
                    ].map((tag, i) => (
                      <div key={i} className="flex items-center gap-3 p-4 rounded-xl bg-white/5 border border-white/5">
                         <div className="w-2 h-2 rounded-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.5)]"></div>
                         <span className="text-white font-medium">{tag}</span>
                      </div>
                    ))}
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* ------------------- JOURNEY TIMELINE ------------------- */}
      <section className="py-24 bg-[#080c1f] relative overflow-hidden">
         {/* Background pattern */}
         <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px]"></div>

         <div className="container mx-auto px-4 max-w-5xl relative z-10">
            <h2 className="text-4xl font-bold text-center text-white mb-16">Entrepreneurial Journey</h2>
            
            <div className="relative border-l-2 border-white/10 ml-4 md:ml-1/2 space-y-12">
               {/* 2013 */}
               <div className="relative pl-8 md:pl-0">
                  {/* Dot */}
                  <div className="absolute left-[-9px] top-0 w-5 h-5 rounded-full bg-blue-600 border-4 border-[#080c1f]"></div>
                  
                  <div className="md:grid md:grid-cols-2 md:gap-12 items-start">
                     <div className="hidden md:block text-right pr-8 pt-1">
                        <span className="text-5xl font-black text-white/5">2013</span>
                     </div>
                     <div className="md:pl-8">
                        <span className="md:hidden text-4xl font-black text-white/5 mb-2 block">2013</span>
                        <h3 className="text-2xl font-bold text-white mb-3">The Humble Beginning</h3>
                        <p className="text-slate-400 leading-relaxed">
                           Started as a freelancer on platforms like oDesk and Elance. Faced with account suspensions and financial uncertainty, he remained steadfast—embracing patience and perseverance as his core tools.
                        </p>
                     </div>
                  </div>
               </div>

               {/* 2014 */}
               <div className="relative pl-8 md:pl-0">
                  <div className="absolute left-[-9px] top-0 w-5 h-5 rounded-full bg-purple-600 border-4 border-[#080c1f]"></div>
                  
                  <div className="md:grid md:grid-cols-2 md:gap-12 items-start">
                     <div className="hidden md:block text-right pr-8 pt-1">
                        <h3 className="text-2xl font-bold text-white mb-3">Founding Bdcalling IT</h3>
                        <p className="text-slate-400 leading-relaxed">
                           Established Bdcalling IT Ltd., which has since delivered over <strong className="text-white">50,000+ projects</strong> across 47 countries. This foundational success marked the transition from freelancer to global enterprise leader.
                        </p>
                     </div>
                     <div className="md:pl-8">
                        <span className="md:hidden text-4xl font-black text-white/5 mb-2 block">2014</span>
                        <span className="hidden md:block text-5xl font-black text-white/5">2014</span>
                     </div>
                     {/* Mobile content fix */}
                     <div className="md:hidden">
                        <h3 className="text-2xl font-bold text-white mb-3">Founding Bdcalling IT</h3>
                         <p className="text-slate-400 leading-relaxed">
                           Established Bdcalling IT Ltd., which has since delivered over <strong className="text-white">50,000+ projects</strong> across 47 countries. This foundational success marked the transition from freelancer to global enterprise leader.
                        </p>
                     </div>
                  </div>
               </div>

               {/* Today */}
               <div className="relative pl-8 md:pl-0">
                   <div className="absolute left-[-9px] top-0 w-5 h-5 rounded-full bg-emerald-500 border-4 border-[#080c1f]"></div>
                   <div className="md:grid md:grid-cols-2 md:gap-12 items-start">
                     <div className="hidden md:block text-right pr-8 pt-1">
                        <span className="text-5xl font-black text-white/5">NOW</span>
                     </div>
                     <div className="md:pl-8">
                        <h3 className="text-2xl font-bold text-white mb-3">Betopia Group Global</h3>
                        <p className="text-slate-400 leading-relaxed">
                           Expanding operations in the US, UK, Canada, Japan, and more. Building a legacy of innovation with 19+ specialized ventures.
                        </p>
                         <div className="mt-4 inline-block px-4 py-2 bg-gradient-to-r from-emerald-900/30 to-emerald-800/20 text-emerald-400 text-sm font-medium rounded-lg border border-emerald-500/20">
                            “Today’s challenges become tomorrow’s foundations.”
                         </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* ------------------- BETOPIA GROUP ------------------- */}
      <section className="py-24 relative">
         <div className="container mx-auto px-4 max-w-6xl">
            <div className="text-center mb-16">
               <h2 className="text-4xl font-bold text-white mb-4">A Global Enterprise</h2>
               <p className="text-slate-400 max-w-2xl mx-auto">
                  Betopia Group comprises 19+ specialized ventures, operating with domain-specific expertise while contributing to a unified global vision.
               </p>
            </div>

            {/* Ventures Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4 mb-16">
               {[
                  "Bdcalling IT Ltd", "Softvence", "SM Technology", "JVAI", 
                  "Scaleup", "Sparktech", "Back Bencher Studio", "Data Insight Ltd"
               ].map((venture, i) => (
                  <div key={i} className="group p-4 bg-white/5 border border-white/5 hover:border-blue-500/30 rounded-xl text-center transition-all hover:-translate-y-1">
                     <Building2 className="w-6 h-6 text-blue-500 mx-auto mb-3 opacity-70 group-hover:opacity-100" />
                     <h3 className="text-white font-medium text-sm md:text-base">{venture}</h3>
                  </div>
               ))}
            </div>

            {/* Global Pillars */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 bg-gradient-to-br from-[#0f1429] to-[#080b1a] p-8 md:p-12 rounded-3xl border border-white/5">
                <div>
                   <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                      <Globe className="w-6 h-6 text-indigo-400" /> Global Services
                   </h3>
                   <ul className="space-y-4">
                      {[
                         "Cloud Modernization & Managed Services",
                         "Cybersecurity & Compliance Solutions",
                         "Data, AI & Analytics Engineering",
                         "B2B White-Label Technology Services"
                      ].map((item, i) => (
                         <li key={i} className="flex items-start gap-4 p-3 rounded-lg hover:bg-white/5 transition-colors">
                            <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full mt-2"></span>
                            <span className="text-slate-300">{item}</span>
                         </li>
                      ))}
                   </ul>
                </div>
                <div className="relative lg:border-l lg:border-white/10 lg:pl-12">
                   <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                      <TrendingUp className="w-6 h-6 text-emerald-400" /> Market Expansion
                   </h3>
                   <p className="text-slate-400 mb-6">
                      Actively expanding operations across major global markets including:
                   </p>
                   <div className="flex flex-wrap gap-2">
                      {["USA", "UK", "Canada", "Japan", "Philippines", "Brazil", "Eastern Europe"].map((country, i) => (
                         <span key={i} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-slate-300 text-sm">
                            {country}
                         </span>
                      ))}
                   </div>
                </div>
            </div>
         </div>
      </section>

      {/* ------------------- LEADERSHIP & PERSONAL ------------------- */}
      <section className="py-24 bg-[#080c1f]">
         <div className="container mx-auto px-4 max-w-6xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
               
               {/* Leadership Partnership */}
               <div className="space-y-8">
                  <h2 className="text-3xl font-bold text-white">Leadership Partnership</h2>
                  <div className="p-8 rounded-3xl bg-gradient-to-br from-purple-900/20 to-transparent border border-purple-500/20 relative overflow-hidden group">
                     <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 rounded-bl-full transition-transform group-hover:scale-110"></div>
                     <Heart className="w-8 h-8 text-pink-500 mb-6" />
                     <p className="text-lg text-slate-300 leading-relaxed mb-6">
                        Mr. Hossain is supported by his wife, <strong className="text-white">Engineer Sabina Akter</strong>, Chairperson of Betopia Group. Together, they represent a modern, family-driven leadership model.
                     </p>
                     <div className="pl-4 border-l-4 border-pink-500">
                        <p className="text-pink-200 italic font-medium">
                           "Success is never a solo journey, true strength lies in walking forward together."
                        </p>
                     </div>
                  </div>

                  <div className="space-y-6">
                     <h3 className="text-2xl font-bold text-white flex items-center gap-3">
                        <GraduationCap className="w-6 h-6 text-blue-400" /> Education
                     </h3>
                     <ul className="space-y-3">
                        {[
                           "Senior Executive Leadership Program (SELP) – Cornell University",
                           "CXO Strategy Conclave – IBA, University of Dhaka",
                           "B.Sc. in CSE – DUET",
                           "Diploma in Computer Technology – Dhaka Polytechnic Institute"
                        ].map((edu, i) => (
                           <li key={i} className="text-slate-400 text-sm md:text-base flex items-start gap-3">
                              <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 shrink-0"></span>
                              <span>{edu}</span>
                           </li>
                        ))}
                     </ul>
                  </div>
               </div>

               {/* Vision & Values */}
               <div className="space-y-8">
                  <h2 className="text-3xl font-bold text-white">Vision & Values</h2>
                  
                  {/* Values List */}
                  <div className="grid gap-4">
                     {[
                        { icon: Users, text: "Strongly family-oriented and values-driven" },
                        { icon: Heart, text: "Disciplined approach to health & well-being" },
                        { icon: Globe, text: "Passionate global traveler exploring cultures" },
                        { icon: Target, text: "Commitment to innovation & empowerment" }
                     ].map((item, i) => (
                        <div key={i} className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors">
                           <item.icon className="w-5 h-5 text-blue-400" />
                           <span className="text-slate-300">{item.text}</span>
                        </div>
                     ))}
                  </div>

                  {/* Smart City Vision */}
                  <div className="p-8 rounded-3xl bg-blue-900/10 border border-blue-500/20">
                     <h3 className="text-xl font-bold text-white mb-4">The Future: Betopia City</h3>
                     <p className="text-slate-400 mb-6">
                        A visionary project to build a future-ready smart city fostering innovation, entrepreneurship, and creating thousands of empowered professionals.
                     </p>
                     <div className="text-center">
                        <span className="inline-block text-white font-bold uppercase tracking-widest text-sm border-b-2 border-blue-500 pb-1">
                           "Nothing is impossible for those who dare to dream big."
                        </span>
                     </div>
                  </div>
               </div>

            </div>
         </div>
      </section>

      {/* ------------------- FOOTER / HISTORY ------------------- */}
      <section className="py-16 border-t border-white/5">
         <div className="container mx-auto px-4 max-w-4xl text-center">
            <div className="mb-8">
               <h4 className="text-sm font-bold text-slate-500 uppercase tracking-widest mb-2">Previous Experience</h4>
               <p className="text-slate-300">
                  Project Manager at <strong className="text-white">NSE Corporation</strong> (May 2008 - March 2013)
               </p>
            </div>
            <p className="text-lg text-slate-400 italic">
               "From humble beginnings to global impact – exemplifying how vision and partnership can transform local ambition into worldwide success."
            </p>
         </div>
      </section>

    </main>
  );
}
