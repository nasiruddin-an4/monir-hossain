'use client';

import Image from 'next/image';

const logos = [
    { name: 'Bdcalling IT Ltd', src: '/logo/backbencher.webp' },
    { name: 'Softvence', src: '/logo/bdcalling.png' },
    { name: 'SM Technology', src: '/logo/download.png' },
    { name: 'JVAI', src: '/logo/softvance' },
    { name: 'Bdcalling IT Ltd', src: '/logo/backbencher.webp' },
    { name: 'Softvence', src: '/logo/bdcalling.png' },
    { name: 'SM Technology', src: '/logo/download.png' },
    { name: 'JVAI', src: '/logo/softvance' },
];

export default function LogoMarquee() {
    return (
        <section className="py-12 bg-white overflow-hidden border-t border-slate-100">
            <div className="container mx-auto px-6 relative z-10">
                <div className="relative flex overflow-x-hidden group">

                    {/* Gradient Masks - Matched to White Background */}
                    <div className="absolute top-0 left-0 z-10 w-32 h-full bg-gradient-to-r from-white via-white/80 to-transparent"></div>
                    <div className="absolute top-0 right-0 z-10 w-32 h-full bg-gradient-to-l from-white via-white/80 to-transparent"></div>

                    {/* Marquee Track */}
                    <div className="flex animate-scroll hover:[animation-play-state:paused] items-center">

                        {/* First Set */}
                        <div className="flex gap-16 items-center px-8 shrink-0">
                            {logos.map((logo, index) => (
                                <div key={`logo-1-${index}`} className="relative h-12 w-32 lg:w-40 flex items-center justify-center transition-all duration-300 cursor-pointer">
                                    <Image
                                        src={logo.src}
                                        alt={logo.name}
                                        fill
                                        className="object-contain"
                                    />
                                </div>
                            ))}
                        </div>

                        {/* Second Set */}
                        <div className="flex gap-16 items-center px-8 shrink-0">
                            {logos.map((logo, index) => (
                                <div key={`logo-2-${index}`} className="relative h-12 w-32 lg:w-40 flex items-center justify-center transition-all duration-300 cursor-pointer">
                                    <Image
                                        src={logo.src}
                                        alt={logo.name}
                                        fill
                                        className="object-contain"
                                    />
                                </div>
                            ))}
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}
