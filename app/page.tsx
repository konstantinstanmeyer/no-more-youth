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