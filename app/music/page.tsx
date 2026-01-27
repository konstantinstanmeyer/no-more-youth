'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const releases = [
  {
    id: '1',
    title: 'NO MORE YOUTH',
    type: 'album',
    year: '2024',
    artwork: '/nmy-album.webp',
    description: 'Our debut full-length. Recorded at GodCity Studio with Kurt Ballou.',
    tracks: [
      { title: 'This Time Around', duration: '1:29' },
      { title: 'Live // Die (By the Sword)', duration: '2:36' },
      { title: 'Blanket Language', duration: '2:17' },
      { title: 'Hammerhead', duration: '2:19' },
      { title: 'Screaming Door', duration: '0:52' },
      { title: 'Final Flash', duration: '2:22' },
      { title: 'Impact Tremors', duration: '2:42' },
      { title: 'Night Falcon', duration: '2:01' },
      { title: 'Broken World', duration: '2:17' },
      { title: 'No More Youth', duration: '1:27' },
    ],
    links: {
      spotify: 'https://open.spotify.com/artist/7G2ogxJ8vNshWwonYuLwH6',
      appleMusic: 'https://music.apple.com/ca/artist/no-more-youth/1693960049',
    //   bandcamp: 'https://nomoreyouthma.bandcamp.com/album/no-more-youth',
      youtube: 'https://www.youtube.com/@NoMoreYouth',
    },
  },
//   {
//     id: '2',
//     title: 'Crown Splitter',
//     type: 'single',
//     year: '2024',
//     artwork: '/crown-splitter.webp',
//     tracks: [
//       { title: 'Crown Splitter', duration: '2:45' },
//     ],
//     links: {
//       spotify: 'https://open.spotify.com/artist/7G2ogxJ8vNshWwonYuLwH6',
//     //   bandcamp: 'https://nomoreyouthma.bandcamp.com',
//     },
//   },
];

export default function Music() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => setIsLoaded(true), []);

  return (
    <main className="relative min-h-screen">
        <div 
            className="fixed inset-0 z-0 bg-cover bg-center opacity-30"
            style={{ backgroundImage: 'url(/dark.webp)' }}
        />
        <div className="relative z-10 pb-40">
            <Navbar />
            <section className={`pt-24 pb-16 transition-opacity duration-700 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
                <div className="max-w-6xl mx-auto px-4 md:px-8">
                    {releases.map((release) => (
                    <div key={release.id} className="grid md:grid-cols-2 gap-8 md:gap-12 mb-16 md:mb-24">
                        <div className="relative aspect-square">
                        <Image src={release.artwork} alt={release.title} fill className="object-cover" />
                        </div>
                        <div className="flex flex-col justify-center">
                        <span className="text-[var(--color-bone)]/40 text-sm chivo tracking-wider mb-2">
                            {release.year} • {release.type.toUpperCase()}
                        </span>
                        <h2 className="text-3xl md:text-5xl font-black text-[var(--color-bone)] chivo tracking-wide mb-3">
                            {release.title}
                        </h2>
                        {release.description && (
                            <p className="text-[var(--color-bone)]/60 text-sm md:text-base mb-6">
                            {release.description}
                            </p>
                        )}
                        <div className="flex gap-4 mb-6">
                            {Object.entries(release.links).map(([platform, url]) => (
                            <Link key={platform} href={url} target="_blank" className="opacity-60 hover:opacity-100 transition-opacity">
                                <Image 
                                src={`/${platform === 'appleMusic' ? 'applemusic' : platform}.svg`} 
                                alt={platform} 
                                width={24} 
                                height={24} 
                                className="invert"
                                />
                            </Link>
                            ))}
                        </div>
                        <div className="border-t border-[var(--color-bone)]/20 pt-4">
                            <span className="text-[10px] tracking-[0.3em] text-[var(--color-bone)]/40 chivo block mb-3">
                                TRACKLIST
                            </span>
                            {release.tracks.map((track, i) => (
                            <div key={i} className="flex justify-between py-2 border-b border-[var(--color-bone)]/10">
                                <span className="text-[var(--color-bone)] text-sm chivo">
                                {String(i + 1).padStart(2, '0')} — {track.title}
                                </span>
                                <span className="text-[var(--color-bone)]/40 text-sm chivo">
                                {track.duration}
                                </span>
                            </div>
                            ))}
                        </div>
                        </div>
                    </div>
                    ))}
                </div>
            </section>
        </div>
        <Footer />
    </main>
  );
}