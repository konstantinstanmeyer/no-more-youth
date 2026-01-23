'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import UpcomingShows from '@/components/UpcomingShows';
import bloodiedImage from "../public/bloodied.webp"

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    setIsLoaded(true);
    
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <main className="relative min-h-screen">
      <section
        className={`top-0 h-[80vh] w-screen transition-opacity duration-400 delay-200 ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <div className={`w-full relative h-36 flex flex-row items-center px-10! text-white${
          isLoaded ? 'opacity-100' : 'opacity-0'
        } `}>
          <div className="flex items-center gap-4 mr-auto! text-white mix-blend-difference tracking-wider scale-y-90">
            <Link className="chivo" href="/music">MUSIC</Link> 
            <span className="text-xs">♥</span>
            <Link className="chivo font-black text-white " href="/shows">SHOWS</Link>
            <span className="text-xs">♦</span>
            <Link className="chivo font-black text-white " href="/videos">VIDEOS</Link>
          </div>
          <div className="absolute left-1/2 -translate-x-1/2">
            <Image
              src="/no-more-youth-logo.png"
              className="h-[100px] w-[500px] flicker-crude mix-blend-difference!"
              width={500}
              height={100}
              alt="NO MORE YOUTH"
            />
          </div>
          <div className="flex items-center gap-4 ml-auto! text-white mix-blend-difference tracking-wider scale-y-90">
            <Link className="chivo font-black text-white " href="/merch">MERCH</Link>
            <span className="text-xs">♠</span>
            <Link className="chivo font-black text-white " target="_blank" href="/">BANDSINTOWN</Link>
            <span className="text-xs">♣</span>
            <Link className="chivo font-black text-white " href="/contact">CONTACT</Link>
          </div>
        </div>
      </section>

      <section className={`relative object-cover transition-opacity delay-400 duration-300 justify-center h-screen w-full bg-[url(/bloodied.webp)] bg-cover bg-no-repeat ${
        isLoaded ? 'opacity-100' : 'opacity-0'
      }`}>
          <UpcomingShows />
        {/* <Image className="absolute z-10" src="/bloodied.webp" height={1440} width={2560} alt="pic" /> */}
      </section>
      <div className="video-container">
        <video autoPlay muted loop playsInline>
          <source src="/no-more-youth.mp4" type="video/mp4" />
        </video>
        <div className="video-overlay" />
      </div>
    </main>
  );
}