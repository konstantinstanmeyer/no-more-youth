'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import UpcomingShows from '@/components/UpcomingShows';
import Link from 'next/link';
import Footer from '@/components/Footer';

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <div className="video-container">
        <video autoPlay muted loop playsInline>
          <source src="/no-more-youth.mp4" type="video/mp4" />
        </video>
        <div className="video-overlay" />
      </div>
      <section
        className={`relative h-[95vh] md:h-[94vh] w-full transition-opacity duration-400 delay-200 ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <Navbar />
      </section>
      <section
        className={`relative z-20 w-full transition-opacity delay-400 duration-300 -mt-20 ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <div 
          className="relative w-full bg-cover! bg-center bg-no-repeat py-20 md:py-32"
          style={{ 
            backgroundImage: 'url(/bloodied1.webp)',
            backgroundSize: '100% 100%',
          }}
        >
          <div className="pt-16 pb-24 md:pt-20 md:pb-32">
            <UpcomingShows />
          </div>
        </div>
      </section>
      <section
        className={`relative z-10 w-full min-h-screen bg-cover bg-center bg-no-repeat flex flex-col items-center justify-center transition-opacity delay-400 duration-300 -mt-32 md:-mt-40 pb-64 ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        }`}
        style={{ backgroundImage: 'url(/dark.webp)' }}
      >
        <h2 className="mt-48 md:mt-56 mb-6 text-xl md:text-2xl chivo text-white font-black tracking-wider text-center px-4">
          NO MORE YOUTH ALBUM RELEASE
        </h2>
        <Image
          src="/nmy-album.webp"
          width={750}
          height={750}
          alt="No More Youth Album"
          className="mb-10 w-[90%] max-w-[750px] h-auto"
        />
        <Link href="https://nomoreyouthma.bandcamp.com/album/no-more-youth" target="_blank">
          <button className="text-white chivo border-2 p-2 hover:cursor-pointer hover:text-black hover:bg-white hover:border-white">BUY NOW</button>
        </Link>
      </section>
      <Footer />
    </main>
  );
}