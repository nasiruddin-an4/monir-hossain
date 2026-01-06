'use client';

import { ArrowRight, Calendar, ExternalLink, Newspaper } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const newsItems = [
    {
        id: 1,
        title: "Betopia Group Expands Operations to Eastern Europe",
        category: "Global Expansion",
        date: "March 12, 2024",
        excerpt: "Marking a significant milestone in our global growth strategy, Betopia Group opens its new regional headquarters in Poland to serve the European market.",
        image: "/hero.png", // Placeholder
        link: "#"
    },
    {
        id: 2,
        title: "Mr. Monir Hossain Receives 'Tech Entrepreneur of the Year' Award",
        category: "Awards & Recognition",
        date: "February 28, 2024",
        excerpt: "Recognized for his outstanding contribution to the IT export sector and digital transformation of Bangladesh's economy.",
        image: "/hero.png", // Placeholder
        link: "#"
    },
    {
        id: 3,
        title: "Launch of Monir Foundation's Digital Literacy Program",
        category: "CSR Initiative",
        date: "January 15, 2024",
        excerpt: "A nationwide initiative aiming to provide free computer education to 10,000 students in rural areas over the next two years.",
        image: "/hero.png", // Placeholder
        link: "#"
    }
];

export default function News() {
    return (
        <section className="relative py-24 bg-[#0a0e27] overflow-hidden">

            {/* Background Effects */}
            <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent"></div>
            <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[120px] pointer-events-none"></div>

            <div className="container mx-auto px-6 lg:px-12 relative z-10">

                {/* Header */}
                <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-16">
                    <div className="max-w-2xl space-y-4">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400">
                            <Newspaper className="w-4 h-4" />
                            <span className="text-xs font-bold uppercase tracking-widest">Latest Updates</span>
                        </div>
                        <h2 className="text-4xl lg:text-5xl font-bold text-white leading-tight">
                            News & <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-400">Insights</span>
                        </h2>
                    </div>

                    <Link href="#" className="group flex items-center gap-2 text-slate-400 hover:text-white transition-colors border-b border-transparent hover:border-white pb-0.5">
                        <span>View All News</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>

                {/* News Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {newsItems.map((item) => (
                        <div key={item.id} className="group bg-[#111633] border border-white/5 rounded-3xl overflow-hidden hover:border-blue-500/30 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/5 hover:-translate-y-2 flex flex-col">

                            {/* Image Container */}
                            <div className="relative aspect-[16/10] overflow-hidden">
                                <Image
                                    src={item.image}
                                    alt={item.title}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#111633] to-transparent opacity-60"></div>
                                <div className="absolute top-4 left-4">
                                    <span className="px-3 py-1 bg-blue-600 text-white text-xs font-bold uppercase tracking-wider rounded-lg shadow-lg">
                                        {item.category}
                                    </span>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-8 flex flex-col flex-1">
                                <div className="flex items-center gap-2 text-slate-400 text-xs font-medium mb-4">
                                    <Calendar className="w-4 h-4 text-blue-400" />
                                    <span>{item.date}</span>
                                </div>

                                <h3 className="text-xl font-bold text-white mb-4 line-clamp-2 group-hover:text-blue-300 transition-colors">
                                    <Link href={item.link}>{item.title}</Link>
                                </h3>

                                <p className="text-slate-400 text-sm leading-relaxed mb-3 line-clamp-1">
                                    {item.excerpt}
                                </p>

                                <div className="mt-auto pt-2 border-t border-white/5 flex items-center justify-between">
                                    <Link href={item.link} className="inline-flex items-center gap-2 text-sm font-bold text-white hover:text-blue-400 transition-colors">
                                        Read Story <ArrowRight className="w-4 h-4" />
                                    </Link>
                                    <button className="p-2 rounded-full hover:bg-white/5 text-slate-400 hover:text-white transition-colors">
                                        <ExternalLink className="w-4 h-4" />
                                    </button>
                                </div>
                            </div>

                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
