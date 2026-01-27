'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const featuredVideo = {
  id: '1',
  title: 'Blanket Language',
  thumbnail: '/video-thumb-1.webp',
  youtubeId: 'AlkdKerPscE?si=u4_7qemaxXy5A7OU',
  year: '2026',
};

export default function Videos() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <main className="relative min-h-screen">
        <div 
            className="fixed h-screen w-screen z-0 opacity-40"
            style={{
                backgroundImage: 'url(/promo-1.webp)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        />
        <div className="fixed inset-0 z-0" />
            <div className="relative z-10 pb-32">
                <Navbar />
                <section 
                className={`pt-20 pb-16 md:pb-24 transition-all duration-700 ${
                    isLoaded ? 'opacity-100' : 'opacity-0'
                }`}
                >
                <div className="max-w-5xl mx-auto px-4 md:px-8">
                    {/* <h1 className="text-[var(--color-bone)] text-xl md:text-3xl chivo font-black tracking-[0.1em] md:tracking-[0.15em] mb-10 md:mb-16 text-center">
                    VIDEOS
                    </h1> */}
                    <div className="relative aspect-video overflow-hidden bg-[var(--color-smoke)]">
                        <iframe
                        src={`https://www.youtube.com/embed/${featuredVideo.youtubeId}?autoplay=1&rel=0`}
                        title={featuredVideo.title}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="absolute inset-0 w-full h-full"
                        />
                    </div>
                    <div className="pt-5 md:pt-6 text-center">
                    <h2 className="text-[var(--color-bone)] text-lg md:text-2xl chivo font-bold">
                        {featuredVideo.title}
                    </h2>
                    <span className="text-[var(--color-bone)]/40 text-xs md:text-sm chivo mt-1 block">
                        {featuredVideo.year}
                    </span>
                    </div>
                    <div className="mt-12 md:mt-16 text-center">
                    <p className="text-[var(--color-bone)]/30 text-xs tracking-[0.2em] chivo">
                        MORE VIDEOS TO COME
                    </p>
                    </div>
                    <div className="mt-10 md:mt-12 text-center">
                    <Link 
                        href="https://youtube.com/@NoMoreYouth" 
                        target="_blank"
                        className="inline-flex items-center gap-3 px-6 py-3 border border-[var(--color-bone)]/30 text-[var(--color-bone)]/70 hover:text-[var(--color-bone)] hover:border-[var(--color-bone)] active:bg-[var(--color-bone)]/10 transition-all group"
                    >
                        <svg 
                        className="w-5 h-5 group-hover:text-[var(--color-blood)] transition-colors" 
                        viewBox="0 0 24 24" 
                        fill="currentColor"
                        >
                        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                        </svg>
                        <span className="text-xs tracking-[0.2em] chivo">SUBSCRIBE ON YOUTUBE</span>
                    </Link>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    </main>
  );
}