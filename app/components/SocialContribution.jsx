'use client';

import { useState } from 'react';
import { ArrowRight, ArrowLeft, Heart, Users, GraduationCap, Leaf } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const stats = [
    { value: '3+', label: 'Social Ventures', icon: Heart },
    { value: '2k+', label: 'Lives Impacted', icon: Users },
    { value: '500+', label: 'Scholarships', icon: GraduationCap },
];

const sliderData = [
    {
        year: '2023',
        title: 'Monir Foundation',
        category: 'Non-Profit',
        description: 'Established to provide healthcare support, education, and financial aid to the underprivileged communities across Bangladesh, creating a safety net for those in need.',
        image: 'https://i.postimg.cc/v8pRnvSY/news2.webp'
    },
    {
        year: '2022',
        title: 'Project "Tech for All"',
        category: 'Education',
        description: 'Launching comprehensive free IT training programs to equip rural youth with high-demand digital skills, bridging the urban-rural digital divide.',
        image: 'https://i.postimg.cc/nV68m1wc/news4.webp'
    },
    {
        year: '2024',
        title: 'Startup Mentorship',
        category: 'Entrepreneurship',
        description: 'Investing in and mentoring over 50+ early-stage startups to foster innovation and entrepreneurship in the tech sector, creating new job opportunities.',
        image: 'https://i.postimg.cc/WpQRZ7fs/news1.webp'
    }
];

export default function SocialContribution() {
    const [currentSlide, setCurrentSlide] = useState(0);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % sliderData.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + sliderData.length) % sliderData.length);
    };

    return (
        <section className="relative py-24 bg-[#0B0F19] overflow-hidden">

            {/* Ambient Background */}
            <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-amber-500/5 rounded-full blur-[120px] pointer-events-none"></div>
            <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-[120px] pointer-events-none"></div>

            <div className="container mx-auto px-6 lg:px-12 relative z-10">

                {/* Header Section */}
                <div className="flex flex-col lg:flex-row justify-between items-end gap-12 mb-20">
                    <div className="max-w-2xl space-y-6">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-amber-500/30 bg-amber-500/10 text-amber-400">
                            <Heart className="w-4 h-4" />
                            <span className="text-xs font-bold uppercase tracking-widest">Philanthropy</span>
                        </div>
                        <h2 className="text-4xl lg:text-5xl font-bold text-white leading-tight">
                            Empowering <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-400">Society</span> <br />
                            Building Futures
                        </h2>
                        <p className="text-slate-400 text-lg leading-relaxed font-light">
                            Beyond business, Mr. Monir Hossain is dedicated to creating sustainable social impact through education, healthcare, and employment initiatives.
                        </p>
                    </div>

                    {/* Stats Row */}
                    <div className="flex gap-8 lg:gap-12 pb-2">
                        {stats.map((stat, index) => (
                            <div key={index} className="space-y-1">
                                <div className="flex items-center gap-2 text-amber-500 mb-1">
                                    <stat.icon className="w-5 h-5 opacity-80" />
                                    <span className="text-3xl font-bold">{stat.value}</span>
                                </div>
                                <span className="block text-xs uppercase tracking-wider text-slate-500 font-semibold">{stat.label}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Glassmorphism Slider Card */}
                <div className="relative bg-white/5 border border-white/10 rounded-[2.5rem] p-3 overflow-hidden backdrop-blur-sm shadow-2xl">
                    <div className="flex flex-col lg:flex-row gap-8 lg:gap-0">

                        {/* Image Side */}
                        <div className="relative w-full lg:w-1/2 aspect-video lg:aspect-auto min-h-[350px] lg:min-h-[500px] rounded-[2rem] overflow-hidden group">
                            <Image
                                src={sliderData[currentSlide].image}
                                alt={sliderData[currentSlide].title}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            {/* Overlay Gradient */}
                            <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F19]/80 via-transparent to-transparent"></div>

                            {/* Badge */}
                            <div className="absolute bottom-8 left-8 px-4 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-white text-sm font-medium">
                                {sliderData[currentSlide].category}
                            </div>
                        </div>

                        {/* Content Side */}
                        <div className="w-full lg:w-1/2 p-6 lg:p-12 flex flex-col justify-center relative">

                            {/* Decorative Year */}
                            <span className="absolute top-8 right-8 text-8xl font-bold text-white/[0.03] select-none">
                                {sliderData[currentSlide].year}
                            </span>

                            <div className="space-y-8 relative z-10">
                                <div className="space-y-4">
                                    <div className="flex items-center gap-3">
                                        <span className="h-px w-10 bg-amber-500"></span>
                                        <span className="text-amber-500 font-bold uppercase tracking-widest text-sm">Make an Impact</span>
                                    </div>
                                    <h3 className="text-3xl lg:text-4xl font-bold text-white">
                                        {sliderData[currentSlide].title}
                                    </h3>
                                    <p className="text-slate-400 leading-relaxed text-lg">
                                        {sliderData[currentSlide].description}
                                    </p>
                                </div>

                                <div className="flex items-center gap-6 pt-6 border-t border-white/5">
                                    <Link href="#" className="inline-flex items-center gap-2 text-white font-medium hover:text-amber-400 transition-colors group">
                                        Learn More <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                    </Link>

                                    <div className="flex-1"></div>

                                    {/* Custom Navigation */}
                                    <div className="flex gap-3">
                                        <button
                                            onClick={prevSlide}
                                            className="p-4 rounded-full border border-white/10 text-slate-400 hover:bg-white hover:text-[#0B0F19] transition-all duration-300"
                                            aria-label="Previous Slide"
                                        >
                                            <ArrowLeft className="w-5 h-5" />
                                        </button>
                                        <button
                                            onClick={nextSlide}
                                            className="p-4 rounded-full border border-white/10 text-slate-400 hover:bg-white hover:text-[#0B0F19] transition-all duration-300"
                                            aria-label="Next Slide"
                                        >
                                            <ArrowRight className="w-5 h-5" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </section>
    );
}
