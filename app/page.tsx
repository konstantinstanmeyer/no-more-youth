'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import UpcomingShows from '@/components/UpcomingShows';
import Link from 'next/link';

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
          <button className="text-white chivo border-2 p-2 hover:cursor-pointer">BUY NOW</button>
        </Link>
      </section>
      <footer 
        className="h-40 md:h-54 w-full absolute bottom-0 z-50 bg-cover"
        style={{ backgroundImage: 'url(/footer-bg.webp)'}}
      >
        <div className="w-full h-full flex flex-col md:flex-row justify-end md:justify-center md:items-end items-center">
          <div className="flex-row md:mb-10 w-[240px] justify-between md:justify-normal md:w-auto hidden md:flex">
            <Link className="mx-3" href="">
              <Image className='invert' height={25} width={25} src="/bandsintown.svg" alt="social"/>
            </Link>
            <Link className="mx-3" href="">
              <Image className='invert' height={25} width={25} src="/instagram.svg" alt="social"/>
            </Link>
            <Link className="mx-3" href="">
              <Image className='invert' height={25} width={25} src="/facebook.svg" alt="social"/>
            </Link>
          </div>
          <Image
            src="/no-more-youth-logo.png"
            className="h-[75px] w-[250px] object-contain md:mb-4"
            width={200}
            height={50}
            alt="NO MORE YOUTH"
          />
          <div className="flex flex-row mb-6 md:mb-10 w-[240px] justify-between md:justify-normal md:w-auto">
            <Link className="mx-3" href="">
              <Image className="invert" height={25} width={25} src="/applemusic.svg" alt="social2"/>
            </Link>
            <Link className="mx-3" href="">
              <Image className="invert" height={25} width={25} src="/spotify.svg" alt="social2"/>
            </Link>
            <Link className="mx-3" href="">
              <Image className="invert" height={25} width={25} src="/youtube.svg" alt="social2"/>
            </Link>
            <Link className="mx-3 md:hidden" href="">
              <Image className='invert' height={25} width={25} src="/bandsintown.svg" alt="social"/>
            </Link>
            <Link className="mx-3 md:hidden" href="">
              <Image className='invert' height={25} width={25} src="/instagram.svg" alt="social"/>
            </Link>
            <Link className="mx-3 md:hidden" href="">
              <Image className='invert' height={25} width={25} src="/facebook.svg" alt="social"/>
            </Link>
          </div>
        </div>
      </footer>
    </main>
  );
}