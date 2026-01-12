'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    setIsLoaded(true);
    
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'TOUR DATES', href: '#tour' },
    { name: 'MERCH', href: '#merch' },
    { name: 'MUSIC', href: '#music' },
    { name: 'CONTACT', href: '#contact' },
  ];

  const socialLinks = [
    { name: 'Instagram', icon: 'IG' },
    { name: 'X', icon: 'X' },
    { name: 'Facebook', icon: 'FB' },
    { name: 'YouTube', icon: 'YT' },
    { name: 'Spotify', icon: 'SP' },
  ];

  return (
    <main className="relative min-h-screen overflow-hidden">
      {/* Video Background Container */}
      <div className="video-container">
        <video autoPlay muted loop playsInline>
          <source src="/no-more-youth.mp4" type="video/mp4" />
        </video>
        <div className="video-overlay" />
      </div>

      <nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrollY > 50 ? 'bg-[#0a0a0a]/90 backdrop-brutal border-b border-[#8b0000]/20' : ''
        }`}
      >
        <div className="mx-auto px-6 py-5">
          <div className="flex items-center justify-between">
            <div 
              className={`flex gap-8 transition-all duration-700 delay-100 ${
                isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
              }`}
            >
              {navLinks.slice(0, 2).map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="nav-link text-[#e8dcc4] text-sm tracking-[0.2em] hover:text-[#8b0000]"
                >
                  {link.name}
                </a>
              ))}
            </div>
            <div 
              className={`flex items-center gap-8 transition-all duration-700 delay-200 ${
                isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
              }`}
            >
              {navLinks.slice(2).map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="nav-link text-[#e8dcc4] text-sm tracking-[0.2em] hover:text-[#8b0000] hidden sm:block"
                >
                  {link.name}
                </a>
              ))}
              
              {/* Social Icons */}
              <div className="hidden md:flex items-center gap-4 ml-4 pl-4 border-l border-[#2d2d2d]">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href="#"
                    className="social-icon text-[#e8dcc4]/60 text-xs font-bold tracking-wider hover:text-[#8b0000] transition-all"
                    title={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>

              {/* CTA Button */}
              <button className="brutal-button px-6 py-2 text-[#e8dcc4] text-sm tracking-[0.2em] ml-4">
                LISTEN
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col items-center justify-center px-6">
        {/* Main Logo */}
        <div 
          className={`text-center transition-all duration-100 delay-500 ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <Image 
            src="/no-more-youth-logo.png" 
            className="flicker-crude flicker-crude-alt z-100"
            width={1000}
            height={200}
            alt={"NO MORE YOUTH"}
          />
        </div>

        {/* Corner decorations */}
        <div className="absolute top-24 left-6 w-16 h-16 border-l border-t border-[#8b0000]/20" />
        <div className="absolute top-24 right-6 w-16 h-16 border-r border-t border-[#8b0000]/20" />
        <div className="absolute bottom-24 left-6 w-16 h-16 border-l border-b border-[#8b0000]/20" />
        <div className="absolute bottom-24 right-6 w-16 h-16 border-r border-b border-[#8b0000]/20" />
      </section>

      {/* Secondary Section Preview */}
      <section className="relative py-32 px-6 bg-gradient-brutal">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Featured Cards */}
            {[
              { title: 'LATEST RELEASE', subtitle: 'DESCENT INTO MADNESS', year: '2026' },
              { title: 'NEXT SHOW', subtitle: 'CHICAGO, IL', year: 'FEB 15' },
              { title: 'WATCH NOW', subtitle: 'OFFICIAL MUSIC VIDEO', year: 'NEW' },
            ].map((card) => (
              <div 
                key={card.title}
                className="group relative p-8 border border-[#2d2d2d] hover:border-[#8b0000]/50 transition-all duration-500 cursor-pointer overflow-hidden"
              >
                {/* Card background glow on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#8b0000]/0 to-[#8b0000]/0 group-hover:from-[#8b0000]/10 group-hover:to-transparent transition-all duration-500" />
                
                <span className="relative text-[#8b0000] text-xs tracking-[0.3em] block mb-4">
                  {card.title}
                </span>
                <h3 className="relative text-[#e8dcc4] text-2xl tracking-[0.1em] font-light mb-2" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
                  {card.subtitle}
                </h3>
                <span className="relative text-[#e8dcc4]/40 text-sm tracking-[0.2em]">
                  {card.year}
                </span>

                {/* Hover arrow */}
                <div className="absolute bottom-8 right-8 opacity-0 group-hover:opacity-100 transform translate-x-4 group-hover:translate-x-0 transition-all duration-300">
                  <span className="text-[#8b0000] text-2xl">→</span>
                </div>

                {/* Card corner accent */}
                <div className="absolute top-0 right-0 w-8 h-8 border-r border-t border-[#8b0000]/0 group-hover:border-[#8b0000]/50 transition-all duration-300" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer accent */}
      <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-[#8b0000]/30 to-transparent" />
    </main>
  );
}