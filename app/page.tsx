'use client';

import Image from 'next/image';
import Link from 'next/link';
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
    <main className="relative min-h-screen">
      <section
        className={` top-0 h-[87vh] w-screen transition-opacity duration-400 delay-200 ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <div className={`w-full relative h-36 flex flex-row items-center px-10! text-white${
          isLoaded ? 'opacity-100' : 'opacity-0'
        } `}>
          <div className="flex items-center gap-4 mr-auto! text-white tracking-wider scale-y-90">
            <Link className="chivo font-black " href="/">MUSIC</Link> 
            <span className="text-xs">♥</span>
            <Link className="chivo font-black text-white " href="/">SHOWS</Link>
            <span className="text-xs">♦</span>
            <Link className="chivo font-black text-white " href="/">VIDEOS</Link>
          </div>
          <div className="absolute left-1/2 -translate-x-1/2">
            <Image
              src="/no-more-youth-logo.png"
              className="h-[100px] w-[500px]"
              width={500}
              height={100}
              alt="NO MORE YOUTH"
            />
          </div>
          <div className="flex items-center gap-4 ml-auto! text-white tracking-wider scale-y-90">
            <Link className="chivo font-black text-white " href="/">MERCH</Link>
            <span className="text-xs">♠</span>
            <Link className="chivo font-black text-white " href="/">BANDSINTOWN</Link>
            <span className="text-xs">♣</span>
            <Link className="chivo font-black text-white " href="/">CONTACT</Link>
          </div>
        </div>
      </section>
      <section className={`relative object-cover transition-opacity delay-400 duration-300 w-full ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        }`}>
        <Image  className="absolute z-10" src="/bloodied.webp" height={1440} width={2560} alt="pic" />
        <div className="flex flex-col w-3/4">
          <div className="">

          </div>
        </div>
      </section>
      <div className="video-container">
        <video autoPlay muted loop playsInline>
          <source src="/no-more-youth.mp4" type="video/mp4" />
        </video>
        <div className="video-overlay" />
      </div>
      {/* <section className="relative min-h-screen flex flex-col items-center justify-center px-6">
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
      </section> */}
    </main>
  );
}