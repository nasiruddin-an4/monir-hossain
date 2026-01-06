import React from 'react';
import { Play, Newspaper, ExternalLink, Calendar, ArrowRight } from 'lucide-react';

const mediaAppearances = [
  {
    id: 1,
    type: 'video',
    title: "Discussing the Future of Tech in Bangladesh",
    source: "Channel I",
    date: "Jan 12, 2025",
    imageGradient: "from-blue-600 to-indigo-900",
    link: "#"
  },
  {
    id: 2,
    type: 'article',
    title: "Entrepreneurship Journey: From Start to Success",
    source: "The Daily Star",
    date: "Dec 05, 2024",
    imageGradient: "from-emerald-600 to-teal-900",
    link: "#"
  },
  {
    id: 3,
    type: 'video',
    title: "Special Interview on Business Growth",
    source: "Jamuna TV",
    date: "Nov 20, 2024",
    imageGradient: "from-purple-600 to-fuchsia-900",
    link: "#"
  }
];

export default function MediaAppearance() {
  return (
    <section className="py-24 bg-neutral-950 text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[20%] -left-32 w-96 h-96 bg-indigo-600/10 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[20%] -right-32 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px]"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="mb-16 flex flex-col md:flex-row justify-between items-end gap-6 text-center md:text-left">
          <div className="max-w-3xl">
             <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/80 text-xs font-medium mb-6 backdrop-blur-sm">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                </span>
                <span>Press & Media</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight tracking-tight">
              Media <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">Appearance</span>
            </h2>
            <p className="text-neutral-400 text-lg max-w-2xl leading-relaxed mx-auto md:mx-0">
              Sharing insights on technology, entrepreneurship, and economic growth across leading media platforms.
            </p>
          </div>
          
          <a href="/media" className="hidden md:flex items-center gap-2 text-sm font-semibold text-white/70 hover:text-white transition-colors group">
            <span>View Archive</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mediaAppearances.map((item) => (
                <a 
                  key={item.id} 
                  href={item.link}
                  className="group relative flex flex-col bg-white/[0.02] hover:bg-white/[0.04] border border-white/5 hover:border-white/10 rounded-2xl overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-900/10"
                >
                    {/* Image/Video Placeholder Section - Top */}
                    <div className="w-full aspect-video relative overflow-hidden bg-neutral-900">
                        {/* Gradient Background */}
                        <div className={`absolute inset-0 bg-gradient-to-br ${item.imageGradient} opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700`}></div>
                        
                        {/* Noise Texture */}
                        <div className="absolute inset-0 opacity-20 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay"></div>

                        {/* Center Icon */}
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20 text-white group-hover:scale-110 group-hover:bg-white/20 transition-all duration-300">
                                {item.type === 'video' ? <Play className="w-6 h-6 fill-current ml-1" /> : <Newspaper className="w-6 h-6" />}
                            </div>
                        </div>

                         {/* Source Badge on Image */}
                         <div className="absolute top-4 left-4">
                             <div className="px-3 py-1 rounded-full bg-black/40 backdrop-blur-md border border-white/10 text-xs font-semibold text-white/90">
                                {item.source}
                             </div>
                         </div>
                    </div>

                    {/* Content Section - Bottom */}
                    <div className="flex-1 p-6 flex flex-col relative border-t border-white/5">
                        
                        {/* Date */}
                        <div className="flex items-center gap-2 text-xs font-medium text-neutral-500 mb-3 uppercase tracking-wider">
                            <Calendar className="w-3 h-3" />
                            <span>{item.date}</span>
                        </div>
                        
                        {/* Title */}
                        <h3 className="text-xl font-bold text-white mb-4 group-hover:text-blue-100 transition-colors leading-snug line-clamp-2">
                            {item.title}
                        </h3>

                        {/* Spacer to push 'Read more' to bottom */}
                        <div className="mt-auto pt-4 flex items-center justify-between border-t border-white/5 group-hover:border-white/10 transition-colors">
                            <span className="text-sm font-medium text-blue-400 group-hover:text-blue-300 transition-colors">
                                {item.type === 'video' ? 'Watch Video' : 'Read Article'}
                            </span>
                            <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-blue-500 group-hover:text-white transition-all duration-300">
                                <ExternalLink className="w-4 h-4" />
                            </div>
                        </div>
                    </div>
                </a>
            ))}
        </div>
        
        <div className="mt-12 text-center md:hidden">
             <a href="/media" className="inline-flex items-center gap-2 text-sm font-semibold text-white/70 hover:text-white transition-colors">
                <span>View Archive</span>
                <ArrowRight className="w-4 h-4" />
            </a>
        </div>
      </div>
    </section>
  );
}
