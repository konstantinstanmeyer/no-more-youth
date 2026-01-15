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

              <button className="brutal-button px-6 py-2 text-[#e8dcc4] text-sm tracking-[0.2em] ml-4">
                LISTEN
              </button>
            </div>
          </div>
        </div>
      </nav>
      <section className="relative min-h-screen flex flex-col items-center justify-center px-6">
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
      </section>
    </main>
  );
}