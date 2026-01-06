'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ChevronDown } from 'lucide-react';

const navbarData = {
  brand: {
    name: 'MUHAMMAD MONIR HOSSAIN',
    href: '/'
  },
  mainNav: [
    { label: 'Home', href: '/' },
  ],
  dropdowns: [
    {
      label: 'About',
      items: [
        { name: 'Biography', href: '/biography' },
        { name: 'Profile', href: '/profile' },
        { name: 'Vision', href: '/vision' },
        { name: 'Entrepreneurial Journey', href: '/how-i-became-an-entrepreneur' },
        { name: 'Social Commitment', href: '/social-commitment' },
        { name: 'Award & Honor', href: '/award-and-honor' }
      ]
    },
    {
      label: 'Achievements',
      items: [
        { name: 'Business Activity', href: '/business-activity' },
        { name: 'Betopia Group', href: '/betopia-group' },
        { name: 'International Activities', href: '/international-activities' },
        { name: 'Chronology', href: '/chronology' },
        { name: 'Entrepreneurial Initiatives', href: '/entrepreneurial-initiatives' }
      ]
    },
    {
      label: 'Institutions',
      items: [
        { name: 'Media Gallery', href: '/media' },
        { name: 'My Video', href: '/my-video' },
        { name: 'Podcast', href: '/podcast' },
        { name: 'Publications', href: '/publications' },
        { name: 'Blog', href: '/blog' }
      ]
    },
  ],
  cta: {
    label: 'Get in touch',
    href: '/contact'
  }
};

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  const toggleDropdown = (label) => {
    setOpenDropdown(openDropdown === label ? null : label);
  };

  const isActive = (href) => {
    if (href === '/') return pathname === '/';
    return pathname?.startsWith(href);
  };

  // Helper for nav link styles
  const navLinkStyles = `text-[11px] uppercase tracking-[0.2em] font-bold transition-all duration-300 relative flex items-center gap-1`;
  const getLinkClasses = (href) => `
    ${navLinkStyles} 
    ${isActive(href) ? 'text-white' : 'text-slate-300 hover:text-white'} 
    hover:scale-105
  `;

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-500 border-b ${scrolled
        ? 'bg-[#0a0e27]/80 backdrop-blur-xl border-indigo-500/20 py-4 shadow-lg shadow-indigo-900/20'
        : 'bg-transparent border-transparent py-5 lg:py-7'
        }`}
    >
      {/* Main Navbar Content */}
      <div className="max-w-[1600px] mx-auto px-6 lg:px-12 flex justify-between items-center relative z-50">

        {/* Brand */}
        <Link
          href={navbarData.brand.href}
          className="flex items-center group relative z-50"
        >
          <span className="text-xl lg:text-2xl font-display font-black tracking-[0.1em] text-white group-hover:text-indigo-400 transition-colors duration-300">
            {navbarData.brand.name}
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden xl:flex items-center gap-10">
          {/* Main Links */}
          {navbarData.mainNav.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className={`text-xs uppercase tracking-[0.1em] font-bold transition-all duration-300 relative flex items-center gap-1 ${isActive(link.href) ? 'text-white' : 'text-slate-300 hover:text-white'} hover:scale-105 group/link`}
            >
              {link.label}
              <span className={`absolute -bottom-2 left-0 h-0.5 bg-indigo-500 transition-all duration-300 ${isActive(link.href) ? 'w-full' : 'w-0 group-hover/link:w-full'}`}></span>
            </Link>
          ))}

          {/* Dropdown Menus */}
          {navbarData.dropdowns.map((dropdown) => (
            <div key={dropdown.label} className="relative group/dropdown py-4">
              <button
                className={`text-xs uppercase tracking-[0.1em] font-bold transition-all duration-300 relative flex items-center gap-1 ${openDropdown === dropdown.label ? 'text-white' : 'text-slate-300 hover:text-white'}`}
              >
                {dropdown.label}
                <ChevronDown size={14} className="group-hover/dropdown:rotate-180 transition-transform duration-300" />
                <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-indigo-500 group-hover/dropdown:w-full transition-all duration-300"></span>
              </button>

              {/* Dropdown Content */}
              <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 opacity-0 invisible group-hover/dropdown:opacity-100 group-hover/dropdown:visible transition-all duration-300 transform translate-y-4 group-hover/dropdown:translate-y-0 min-w-[260px]">
                <div className="bg-[#0f1535]/90 backdrop-blur-2xl border border-indigo-500/20 rounded-2xl p-2 shadow-2xl shadow-indigo-900/50 overflow-hidden ring-1 ring-white/10">
                  <div className="flex flex-col gap-1">
                    {dropdown.items.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className={`
                          block px-5 py-3.5 text-[11px] font-bold uppercase tracking-widest rounded-xl transition-all duration-200
                          ${isActive(item.href)
                            ? 'bg-indigo-600/20 text-indigo-300'
                            : 'text-slate-300 hover:text-white hover:bg-white/5 hover:translate-x-1'
                          }
                        `}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* CTA Button */}
          <Link
            href={navbarData.cta.href}
            className="
              relative overflow-hidden group
              bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600
              text-white px-8 py-3.5 rounded-full 
              text-xs font-bold uppercase tracking-[0.2em] 
              shadow-lg shadow-indigo-500/30
              transition-all duration-300
              hover:shadow-indigo-500/50 hover:scale-105 hover:-translate-y-0.5
            "
          >
            <span className="relative z-10">{navbarData.cta.label}</span>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="xl:hidden relative z-50 p-2 text-white hover:text-indigo-400 transition-colors"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-[#0a0e27]/95 backdrop-blur-2xl z-40 transition-all duration-500 xl:hidden ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
          }`}
      >
        <div className="flex flex-col h-full pt-28 pb-10 px-8 overflow-y-auto">
          <div className="flex flex-col space-y-6">
            {/* Mobile Home Link */}
            <Link
              href={navbarData.brand.href}
              onClick={() => setIsOpen(false)}
              className="text-2xl font-display font-bold text-white hover:text-indigo-400 transition-colors"
            >
              Home
            </Link>

            <div className="h-px bg-white/10 w-full" />

            {/* Mobile Dropdowns */}
            {navbarData.dropdowns.map((dropdown) => (
              <div key={dropdown.label} className="flex flex-col">
                <button
                  onClick={() => toggleDropdown(dropdown.label)}
                  className="flex items-center justify-between text-lg font-medium text-slate-200 py-2 group"
                >
                  <span className="uppercase tracking-widest text-sm font-bold text-indigo-300 group-hover:text-white transition-colors">{dropdown.label}</span>
                  <ChevronDown
                    size={20}
                    className={`text-indigo-400 transition-transform duration-300 ${openDropdown === dropdown.label ? 'rotate-180' : ''}`}
                  />
                </button>

                <div
                  className={`grid transition-all duration-300 ease-in-out ${openDropdown === dropdown.label ? 'grid-rows-[1fr] opacity-100 mt-2' : 'grid-rows-[0fr] opacity-0'
                    }`}
                >
                  <div className="overflow-hidden flex flex-col gap-2 pl-4 border-l border-indigo-500/30 ml-1">
                    {dropdown.items.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        onClick={() => setIsOpen(false)}
                        className={`text-sm py-2 px-3 rounded-lg transition-all ${isActive(item.href) ? 'text-white bg-white/5' : 'text-slate-400 hover:text-white hover:bg-white/5'
                          }`}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ))}

            <div className="h-px bg-white/10 w-full mt-4" />

            {/* Mobile CTA */}
            <Link
              href={navbarData.cta.href}
              onClick={() => setIsOpen(false)}
              className="w-full bg-gradient-to-r from-indigo-600 to-blue-600 text-white py-4 rounded-xl text-center text-sm font-bold uppercase tracking-widest shadow-lg shadow-indigo-900/50 active:scale-95 transition-all mt-4"
            >
              {navbarData.cta.label}
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
