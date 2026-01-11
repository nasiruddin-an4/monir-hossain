'use client';

import React, { useState, useEffect } from 'react';
import { Download, ZoomIn, X, Loader2, ChevronLeft, ChevronRight, ImageIcon } from 'lucide-react';

const galleryImages = [
  "https://i.postimg.cc/HLMP4GJj/ABP-7059-copy.jpg",
  "https://i.postimg.cc/GpDSJ0B7/ABP-7060-copy.jpg",
  "https://i.postimg.cc/cJ35MqKw/ABP-7063-copy.jpg",
  "https://i.postimg.cc/V6cZK7M4/ABP-7069-copy.jpg",
  "https://i.postimg.cc/3NtLJY6Q/ABP-7075-copy.jpg",
  "https://i.postimg.cc/8cZyPN3S/ABP-7079-copy.jpg",
  "https://i.postimg.cc/59gKmS0d/ABP-7084-copy.jpg",
  "https://i.postimg.cc/Wp8Y7w3s/ABP-7087-copy.jpg",
  "https://i.postimg.cc/Qxn62N1z/ABP-7090-copy.jpg",
  "https://i.postimg.cc/vHSPJ8fJ/ABP-7094-copy.jpg",
  "https://i.postimg.cc/t4Zrp0zG/ABP-7100-copy.jpg",
  "https://i.postimg.cc/bwD6pXRh/ABP-7104-copy.jpg",
  "https://i.postimg.cc/nLq09v56/ABP-7109-copy.jpg",
  "https://i.postimg.cc/hGVpQ9ws/ABP-7113-copy.jpg",
  "https://i.postimg.cc/k5WfRxZH/ABP-7115-copy.jpg",
  "https://i.postimg.cc/V614qJPm/ABP-7119-copy.jpg",
  "https://i.postimg.cc/2ySwtg5G/ABP-7119-copy2.jpg",
  "https://i.postimg.cc/QCYbZS9s/ABP-7122-copy.jpg",
  "https://i.postimg.cc/MHpDLgTS/ABP-7128-copy.jpg",
  "https://i.postimg.cc/d3VBfg1v/ABP-7131-copy.jpg",
  "https://i.postimg.cc/vZVvCrQg/ABP-7136-copy.jpg",
  "https://i.postimg.cc/25NxY16H/ABP-7140-copy.jpg",
  "https://i.postimg.cc/mr3ygT1R/ABP-7142-copy.jpg",
  "https://i.postimg.cc/yxxmj9Q1/ABP-7143-copy.jpg",
  "https://i.postimg.cc/NGC7MJFt/ABP-7148-copy.jpg",
  "https://i.postimg.cc/DfpdZj0G/ABP-7151-copy.jpg",
  "https://i.postimg.cc/J49N3sbw/ABP-7155-copy.jpg",
  "https://i.postimg.cc/52Lwsf3f/ABP-7158-copy.jpg",
  "https://i.postimg.cc/bvP1M4Cb/ABP-7160-copy.jpg",
  "https://i.postimg.cc/k5CWZL1p/ABP-7162-copy.jpg",
  "https://i.postimg.cc/x8XmMQ8J/ABP-7164-copy.jpg",
  "https://i.postimg.cc/LsSj7GCc/ABP-7164-copy-2.jpg",
  "https://i.postimg.cc/qqW3GF6y/ABP-7174-copy.jpg",
  "https://i.postimg.cc/1XbqKdVD/ABP-7187-copy.jpg",
  "https://i.postimg.cc/02JmN9ht/ABP-7194-copy.jpg",
  "https://i.postimg.cc/QCvTqzKp/ABP-7194-copy-2.jpg",
  "https://i.postimg.cc/bvq2LkrQ/ABP-7202-copy.jpg",
  "https://i.postimg.cc/25CBThyx/ABP-7205-copy.jpg",
  "https://i.postimg.cc/0N9JZDjt/ABP-7218-copy.jpg",
  "https://i.postimg.cc/FHyLjDry/ABP-7218-copy-2.jpg",
  "https://i.postimg.cc/HLT73Xjg/ABP-7222-copy.jpg",
  "https://i.postimg.cc/YS8LP0m7/ABP-7224-copy.jpg",
  "https://i.postimg.cc/CKJn25f8/ABP-7227-copy.jpg",
  "https://i.postimg.cc/0NZK4jJ6/ABP-7233-copy.jpg",
  "https://i.postimg.cc/tTTnGbhr/ABP-7243-copy.jpg",
  "https://i.postimg.cc/FRBd96Zx/ABP-7246-copy.jpg",
  "https://i.postimg.cc/j5Fws1c0/ABP-7256-copy.jpg",
  "https://i.postimg.cc/cHbgszhq/ABP-7259-copy.jpg",
  "https://i.postimg.cc/wvGy6r29/ABP-7266-copy.jpg"
];

function Lightbox({ image, onClose, onNext, onPrev, onDownload, downloading }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') onNext();
      if (e.key === 'ArrowLeft') onPrev();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose, onNext, onPrev]);

  return (
    <div className="fixed inset-0 z-[10000] flex items-center justify-center bg-black/95 backdrop-blur-xl animate-in fade-in duration-200">
      {/* Controls */}
      <button 
        onClick={onClose}
        className="absolute top-6 right-6 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all transform hover:rotate-90 z-50"
      >
        <X className="w-6 h-6" />
      </button>

      <button 
        onClick={(e) => { e.stopPropagation(); onPrev(); }}
        className="absolute left-4 lg:left-8 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all hover:-translate-x-1 z-50 group"
      >
        <ChevronLeft className="w-8 h-8 group-hover:scale-110 transition-transform" />
      </button>

      <button 
        onClick={(e) => { e.stopPropagation(); onNext(); }}
        className="absolute right-4 lg:right-8 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all hover:translate-x-1 z-50 group"
      >
        <ChevronRight className="w-8 h-8 group-hover:scale-110 transition-transform" />
      </button>

      {/* Main Image */}
      <div className="relative w-full h-full p-4 md:p-12 flex items-center justify-center">
        <img
          src={image}
          alt="Gallery Lightbox"
          className="max-w-full max-h-full object-contain shadow-2xl rounded-sm select-none"
        />
        
        {/* Helper Actions */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-4 bg-black/50 backdrop-blur-md px-6 py-3 rounded-full border border-white/10">
           <button
            onClick={(e) => { e.stopPropagation(); onDownload(); }}
            disabled={downloading}
            className="flex items-center gap-2 text-sm font-medium text-white hover:text-blue-400 transition-colors"
          >
            {downloading ? (
              <Loader2 className="w-4 h-4 animate-spin" />
            ) : (
              <Download className="w-4 h-4" />
            )}
            Download Original
          </button>
        </div>
      </div>
    </div>
  );
}

export default function GalleryPage() {
  const [lightboxIndex, setLightboxIndex] = useState(null);
  const [downloading, setDownloading] = useState(null);

  const handleDownload = async (url, e) => {
    if (e) e.stopPropagation();
    try {
      setDownloading(url); // Using URL as ID for checking loading state
      const response = await fetch(url);
      const blob = await response.blob();
      const blobUrl = window.URL.createObjectURL(blob);
      
      const link = document.createElement('a');
      link.href = blobUrl;
      const fileName = url.split('/').pop() || 'gallery-image.jpg';
      link.download = fileName;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(blobUrl);
    } catch (error) {
        console.error('Download failed', error);
        window.open(url, '_blank');
    } finally {
      setDownloading(null);
    }
  };

  const nextImage = () => {
    setLightboxIndex((prev) => (prev === null || prev === galleryImages.length - 1 ? 0 : prev + 1));
  };

  const prevImage = () => {
    setLightboxIndex((prev) => (prev === null || prev === 0 ? galleryImages.length - 1 : prev - 1));
  };

  return (
    <div className="min-h-screen bg-[#050511] text-white">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        {/* Hero Background with Parallax/Gradient */}
        <div className="absolute inset-0 bg-blue-950/20">
             <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(79,70,229,0.15),transparent_70%)] animate-pulse-slow"></div>
             <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/dark-matter.png')] opacity-10 mix-blend-overlay"></div>
             {/* Grid */}
             <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>
             <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#050511] to-transparent"></div>
        </div>

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-6 backdrop-blur-sm">
             <ImageIcon className="w-4 h-4 text-blue-400" />
             <span className="text-sm font-medium tracking-widest uppercase text-blue-200">Formal Gallery</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent drop-shadow-lg">
            Moments in Focus
          </h1>
          <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
            A curated collection of professional highlights, formal engagements, and significant milestones in the journey of excellence.
          </p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="container mx-auto px-4 pb-32">
        <div className="columns-1 md:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6">
          {galleryImages.map((src, index) => (
            <div
              key={index}
              className="relative group break-inside-avoid rounded-2xl overflow-hidden bg-white/5 border border-white/5 shadow-lg shadow-black/20 hover:shadow-blue-900/10 transition-all duration-500 hover:-translate-y-1 cursor-zoom-in"
              onClick={() => setLightboxIndex(index)}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
              
              <img
                src={src}
                alt={`Formal Moment ${index + 1}`}
                loading="lazy"
                className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-110 brightness-90 group-hover:brightness-100"
              />

              {/* Hover Overlay */}
              <div className="absolute inset-0 z-20 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 bg-black/40 backdrop-blur-[2px]">
                <div className="flex items-center gap-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <button
                        className="p-3 rounded-full bg-white/10 hover:bg-white text-white hover:text-black transition-all border border-white/20"
                        title="View Fullscreen"
                    >
                        <ZoomIn className="w-5 h-5" />
                    </button>
                    <button
                        onClick={(e) => handleDownload(src, e)}
                        disabled={downloading === src}
                        className="p-3 rounded-full bg-blue-600 hover:bg-blue-500 text-white transition-all shadow-lg hover:shadow-blue-500/50"
                        title="Download Image"
                    >
                        {downloading === src ? (
                            <Loader2 className="w-5 h-5 animate-spin" />
                        ) : (
                             <Download className="w-5 h-5" />
                        )}
                    </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Lightbox Overlay */}
      {lightboxIndex !== null && (
        <Lightbox
          image={galleryImages[lightboxIndex]}
          onClose={() => setLightboxIndex(null)}
          onNext={nextImage}
          onPrev={prevImage}
          onDownload={() => handleDownload(galleryImages[lightboxIndex])}
          downloading={downloading === galleryImages[lightboxIndex]}
        />
      )}
    </div>
  );
}
