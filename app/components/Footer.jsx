'use client';

import Link from "next/link";
import { ArrowRight, Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram, Youtube, Heart } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { name: 'Facebook', href: '#', icon: Facebook },
    { name: 'Twitter', href: '#', icon: Twitter },
    { name: 'LinkedIn', href: '#', icon: Linkedin },
    { name: 'Instagram', href: '#', icon: Instagram },
    { name: 'YouTube', href: '#', icon: Youtube },
  ];

  return (
    <footer className="relative bg-[#050810] text-slate-300 overflow-hidden border-t border-white/5">

      {/* Background Ambience */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-[150px] pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-amber-500/5 rounded-full blur-[150px] pointer-events-none"></div>

      {/* Watermark */}
      <div className="absolute top-20 right-10 text-[10rem] font-bold text-white/[0.02] pointer-events-none select-none font-display">
        HOSSAIN
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-0 pt-20 pb-12 relative z-10">

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">

          {/* Brand Column (4 cols) */}
          <div className="lg:col-span-4 space-y-8">
            <Link href="/" className="block">
              <h2 className="text-3xl font-bold tracking-tighter text-white">
                Muhammad<span className="text-amber-500">.</span>
              </h2>
              <p className="text-xs text-amber-500 font-medium tracking-[0.2em] uppercase mt-1">
                Visionary . Leader . Entrepreneur
              </p>
            </Link>

            <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
              Empowering people and organizations to reach their highest potential through innovation, leadership, and sustainable business practices.
            </p>

            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="w-10 h-10 rounded-full bg-white/5 border border-white/5 flex items-center justify-center text-slate-400 hover:bg-amber-500 hover:text-[#050810] hover:border-amber-500 transition-all duration-300"
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Links Column 1 (2 cols) */}
          <div className="lg:col-span-2 lg:col-start-6">
            <h3 className="text-white font-bold mb-6">Quick Links</h3>
            <ul className="space-y-4">
              {['About Me', 'My Ventures', 'Success Stories', 'Media', 'Contact'].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-sm text-slate-400 hover:text-amber-500 transition-colors flex items-center gap-2 group">
                    {/* Hover chevron could go here */}
                    <span className="w-0 group-hover:w-2 h-px bg-amber-500 transition-all duration-300"></span>
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Links Column 2 (2 cols) */}
          <div className="lg:col-span-2">
            <h3 className="text-white font-bold mb-6">Legal</h3>
            <ul className="space-y-4">
              {['Privacy Policy', 'Terms of Service', 'Cookie Policy', 'Disclaimer'].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-sm text-slate-400 hover:text-amber-500 transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter Column (4 cols) */}
          <div className="lg:col-span-4 lg:col-start-10 md:col-span-2">
            <h3 className="text-white font-bold mb-6">Stay Updated</h3>
            <p className="text-xs text-slate-500 mb-4">
              Join 10k+ subscribers for exclusive insights on leadership and business.
            </p>
            <form className="space-y-4">
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                <input
                  type="email"
                  placeholder="Email address"
                  className="w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-10 pr-4 text-sm text-white focus:outline-none focus:border-amber-500/50 transition-colors"
                />
              </div>
              <button className="w-full py-3 rounded-xl bg-amber-500 text-[#050810] text-sm font-bold hover:bg-white transition-colors">
                Subscribe Now
              </button>
            </form>
          </div>

        </div>

        {/* Contact Info Row (Optional, adding for utility) */}
        <div className="grid md:grid-cols-3 gap-6 py-8 border-t border-white/5">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-full bg-blue-500/10 text-blue-400">
              <MapPin className="w-4 h-4" />
            </div>
            <div>
              <p className="text-xs text-slate-500">Location</p>
              <p className="text-sm text-white font-medium">Dhaka, Bangladesh</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-full bg-emerald-500/10 text-emerald-400">
              <Phone className="w-4 h-4" />
            </div>
            <div>
              <p className="text-xs text-slate-500">Phone</p>
              <p className="text-sm text-white font-medium">+880 1234 567890</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-full bg-purple-500/10 text-purple-400">
              <Mail className="w-4 h-4" />
            </div>
            <div>
              <p className="text-xs text-slate-500">Email</p>
              <p className="text-sm text-white font-medium">contact@monirhossain.com</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-500">
            &copy; {currentYear} Betopia Group. All rights reserved.
          </p>
          <div className="flex items-center gap-1 text-xs text-slate-600">
            <span>Designed </span>
            <span>by <a className="hover:text-white hover:underline transition-colors duration-300" href="https://www.linkedin.com/in/nasiruddna4/">Nasir Uddin</a></span>
          </div>
        </div>

      </div>
    </footer>
  );
}
