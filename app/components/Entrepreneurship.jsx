'use client';

import {
    Briefcase,
    GraduationCap,
    Users,
    Lightbulb,
    Quote,
    Globe
} from 'lucide-react';
import Image from 'next/image';

const timeline = [
    {
        year: '2008 – 2013',
        role: 'Project Manager',
        company: 'NSE Corporation',
        description: 'Gained foundational experience in project management and corporate operations.'
    },
    {
        year: '2013',
        role: 'Freelancer',
        company: 'oDesk / Elance',
        description: 'Started the entrepreneurial journey. Despite account suspensions and challenges, persevered with continuous learning.'
    },
    {
        year: '2014',
        role: 'Founder',
        company: 'Bdcalling IT Ltd.',
        description: 'Founded the first major venture, delivering 50,000+ projects across 47 countries.'
    },
    {
        year: 'Present',
        role: 'Founder & CEO',
        company: 'Betopia Group',
        description: 'Leading a global conglomerate of 19+ ventures and 4,000+ professionals worldwide.'
    }
];

const credentials = [
    'Senior Executive Leadership Program (SELP) – Cornell University',
    'CXO Strategy Conclave – IBA, University of Dhaka',
    'B.Sc. in CSE – DUET',
    'Diploma in Computer Technology – Dhaka Polytechnic Institute'
];

export default function Entrepreneurship() {
    return (
        <section className="relative py-24 bg-[#0B0F19] overflow-hidden text-slate-300">

            {/* Background Ambience */}
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-indigo-900/10 rounded-full blur-[120px] pointer-events-none"></div>

            <div className="container mx-auto px-6 lg:px-12 relative z-10">

                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-20 space-y-6">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-sky-500/30 bg-sky-500/10 text-sky-400">
                        <Lightbulb className="w-4 h-4" />
                        <span className="text-xs font-bold uppercase tracking-widest">Visionary Path</span>
                    </div>
                    <h2 className="text-4xl lg:text-5xl font-bold text-white leading-tight">
                        Entrepreneurial <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-400">Journey</span>
                    </h2>
                    <p className="text-lg leading-relaxed font-light">
                        “Today’s challenges become tomorrow’s foundations for success.”
                    </p>
                </div>

                {/* Layout Grid */}
                <div className="grid lg:grid-cols-12 gap-8 lg:gap-12">

                    {/* Left Column: Timeline (7 cols) */}
                    <div className="lg:col-span-7 space-y-12">
                        <div className=" relative border-l border-white/10 ml-4 space-y-12">
                            {timeline.map((item, index) => (
                                <div key={index} className="relative pl-12 group">
                                    {/* Dot */}
                                    <span className="absolute -left-[5px] top-2 w-2.5 h-2.5 rounded-full bg-slate-600 border border-[#0B0F19] group-hover:bg-sky-400 group-hover:scale-125 transition-all duration-300"></span>

                                    <div className="space-y-2">
                                        <span className="text-sm font-bold text-sky-400 tracking-wider uppercase bg-sky-400/10 px-2 py-1 rounded inline-block mb-1">{item.year}</span>
                                        <h3 className="text-xl font-bold text-white group-hover:text-sky-200 transition-colors">
                                            {item.role} <span className="text-slate-500 font-normal">at {item.company}</span>
                                        </h3>
                                        <p className="text-slate-400 leading-relaxed font-light">
                                            {item.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Leadership Partnership Card */}
                        <div className="mt-12 p-8 rounded-3xl bg-gradient-to-br from-[#161a2e] to-[#0e111f] border border-white/5 relative overflow-hidden group">
                            <div className="absolute top-0 right-0 p-32 bg-purple-500/5 rounded-full blur-3xl group-hover:bg-purple-500/10 transition-colors"></div>

                            <div className="relative z-10 flex flex-col sm:flex-row gap-8 items-start">
                                <div className="p-4 bg-white/5 rounded-2xl shrink-0">
                                    <Users className="w-8 h-8 text-purple-400" />
                                </div>
                                <div className="space-y-4">
                                    <h4 className="text-xl font-bold text-white">Leadership Partnership</h4>
                                    <p className="leading-relaxed text-sm">
                                        Supported by <strong className="text-white">Engineer Sabina Akter</strong> (Chairperson), forming a modern, family-driven leadership model.
                                    </p>
                                    <div className="p-4 rounded-xl bg-purple-900/20 border border-purple-500/20">
                                        <p className="text-purple-200 italic text-sm">
                                            "Success is never a solo journey, true strength lies in walking forward together."
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Education & Vision (5 cols) */}
                    <div className="lg:col-span-5 space-y-8">

                        {/* Education Card */}
                        <div className="p-8 rounded-[2rem] bg-[#111526] border border-white/5 hover:border-sky-500/20 transition-all duration-500 group">
                            <div className="flex items-center gap-3 mb-6">
                                <GraduationCap className="w-6 h-6 text-sky-400" />
                                <h3 className="text-xl font-bold text-white">Education & Development</h3>
                            </div>

                            <ul className="space-y-4">
                                {credentials.map((cred, i) => (
                                    <li key={i} className="flex gap-4 items-start pb-4 border-b border-white/5 last:border-0 last:pb-0">
                                        <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-slate-600 shrink-0 group-hover:bg-sky-400 transition-colors"></div>
                                        <span className="text-sm leading-relaxed">{cred}</span>
                                    </li>
                                ))}
                            </ul>

                            <div className="mt-6 pt-6 border-t border-white/5">
                                <p className="text-sky-400 text-sm font-medium italic">
                                    “Education never ends. Continuous learning creates continuous growth.”
                                </p>
                            </div>
                        </div>

                        {/* Vision Card */}
                        <div className="relative p-8 rounded-[2rem] bg-indigo-950/20 border border-indigo-500/20 overflow-hidden">
                            {/* Background Graphic */}
                            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(99,102,241,0.15),transparent_70%)]"></div>

                            <div className="relative z-10 space-y-6">
                                <div className="flex items-center gap-3">
                                    <Globe className="w-6 h-6 text-indigo-400" />
                                    <h3 className="text-xl font-bold text-white">Long-Term Vision</h3>
                                </div>

                                <div className="space-y-4">
                                    <div className="p-4 bg-[#0B0F19]/50 rounded-xl border border-white/5 backdrop-blur-sm">
                                        <h5 className="text-white font-semibold mb-1">Betopia City</h5>
                                        <p className="text-xs text-slate-400">A future-ready smart city fostering innovation and entrepreneurship.</p>
                                    </div>
                                    <div className="p-4 bg-[#0B0F19]/50 rounded-xl border border-white/5 backdrop-blur-sm">
                                        <h5 className="text-white font-semibold mb-1">Global Impact</h5>
                                        <p className="text-xs text-slate-400">Creating thousands of empowered professionals across industries.</p>
                                    </div>
                                </div>

                                <p className="text-center text-white font-bold text-lg pt-2">
                                    “Nothing is impossible for those who dare to dream big.”
                                </p>
                            </div>
                        </div>

                    </div>

                </div>

            </div>
        </section>
    );
}
