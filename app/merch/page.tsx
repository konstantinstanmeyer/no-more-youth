'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const merch = [
    {
        id: '1',
        name: 'No More Youth Logo Tee',
        price: '$25',
        image: '/merch-tee.webp',
        link: 'https://nomoreyouthma.bandcamp.com/merch',
        soldOut: false,
    },
    {
        id: '2',
        name: 'No More Youth – SELF-TITLED LP CD',
        price: '$10',
        image: '/nmy-album.webp',
        link: 'https://nomoreyouthma.bandcamp.com/merch',
        soldOut: false,
    },
];

interface MerchItem {
    id: string;
    name: string;
    price: string;
    image: string;
    link: string;
    soldOut: boolean;
}

export default function Merch() {
    const [isLoaded, setIsLoaded] = useState(false);
    const [previewItem, setPreviewItem] = useState<MerchItem | null>(null);

    useEffect(() => setIsLoaded(true), []);

    useEffect(() => {
        const handleEsc = (e: KeyboardEvent) => {
        if (e.key === 'Escape') setPreviewItem(null);
        };
        window.addEventListener('keydown', handleEsc);
        return () => window.removeEventListener('keydown', handleEsc);
    }, []);

    useEffect(() => {
        if (previewItem) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => { document.body.style.overflow = ''; };
    }, [previewItem]);

    return (
        <main className="relative min-h-screen">
        <div 
                className="fixed inset-0 z-0 bg-cover bg-center opacity-30"
                style={{ backgroundImage: 'url(/promo-2.webp)' }}
            />
        <div className="relative z-10">
            <Navbar />
            <section className={`pt-20 pb-24 transition-opacity duration-700 ${isLoaded ? 'opacity-100' : 'opacity-0'} pb-64`}>
                <div className="max-w-5xl mx-auto px-4 md:px-8">
                    <h1 className="text-[var(--color-bone)] text-xl md:text-3xl chivo font-black tracking-[0.1em] md:tracking-[0.15em] mb-12 md:mb-16 text-center">
                        MERCH
                    </h1>

                    <div className="flex flex-wrap justify-center gap-4 md:gap-8">
                    {merch.map((item) => (
                        <div 
                            key={item.id} 
                            className="w-full max-w-[280px] md:max-w-[300px] mb-6"
                        >
                            <div 
                                className="relative aspect-square bg-[var(--color-smoke)] overflow-hidden pb-4 cursor-pointer group"
                                onClick={() => setPreviewItem(item)}
                            >
                                <Image
                                src={item.image}
                                alt={item.name}
                                fill
                                className="object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                                {item.soldOut && (
                                <div className="absolute inset-0 bg-[var(--color-void)]/70 flex items-center justify-center">
                                    <span className="text-[var(--color-bone)]/50 text-xs md:text-sm tracking-[0.2em] chivo">SOLD OUT</span>
                                </div>
                                )}
                                <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                                <div className="bg-[var(--color-void)]/80 p-2">
                                    <svg className="w-4 h-4 text-[var(--color-bone)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                                    </svg>
                                </div>
                                </div>
                            </div>

                            <div className="text-center">
                                <h2 className="text-[var(--color-bone)] text-sm md:text-base chivo font-bold mt-4 mb-1">
                                {item.name}
                                </h2>
                                <span className="text-[var(--color-bone)]/50 text-xs md:text-sm chivo">
                                {item.price}
                                </span>
                            </div>

                            <div className="mt-4 text-center">
                                <Link href={item.link} target="_blank">
                                <span className="inline-block px-6 py-2.5 border border-[var(--color-bone)]/40 text-[var(--color-bone)] text-xs tracking-[0.2em] chivo hover:bg-[var(--color-bone)] hover:text-[var(--color-void)] active:bg-[var(--color-bone)] active:text-[var(--color-void)] transition-all">
                                    SHOP
                                </span>
                                </Link>
                            </div>
                        </div>
                    ))}
                    </div>
                </div>
            </section>

            <Footer />
        </div>

        {previewItem && (
            <div 
            className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8"
            onClick={() => setPreviewItem(null)}
            >
            <div className="absolute inset-0 bg-[var(--color-void)]/95" />
            <div 
                className="relative w-full max-w-3xl"
                onClick={(e) => e.stopPropagation()}
            >
                <button 
                className="absolute -top-12 right-0 md:top-0 md:-right-12 text-[var(--color-bone)]/60 hover:text-[var(--color-bone)] transition-colors p-2"
                onClick={() => setPreviewItem(null)}
                >
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                </svg>
                </button>
                <div className="relative aspect-square md:aspect-[4/3] bg-[var(--color-smoke)]">
                <Image
                    src={previewItem.image}
                    alt={previewItem.name}
                    fill
                    className="object-contain"
                />
                </div>
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mt-4 md:mt-6">
                <div>
                    <h2 className="text-[var(--color-bone)] text-lg md:text-xl chivo font-bold">
                    {previewItem.name}
                    </h2>
                    <span className="text-[var(--color-bone)]/50 text-sm chivo">
                    {previewItem.price}
                    </span>
                </div>
                <Link href={previewItem.link} target="_blank">
                    <span className="inline-block px-8 py-3 bg-[var(--color-bone)] text-[var(--color-void)] text-xs tracking-[0.2em] chivo hover:bg-[var(--color-blood)] hover:text-white transition-all">
                    BUY NOW
                    </span>
                </Link>
                </div>
            </div>
            </div>
        )}
        </main>
    );
}