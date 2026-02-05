'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

interface Show {
    id: string;
    date: string;
    dayOfWeek: string;
    month: string;
    year: string;
    venue: string;
    city: string;
    state: string;
    time: string;
    ticketLink: string;
    soldOut?: boolean;
}

interface BRollImage {
    src: string;
    alt: string;
    position?: 'left' | 'right' | 'full' | 'offset-left' | 'offset-right';
}

const showsData: Show[] = [
    // {
    //     id: '1',
    //     date: '04',
    //     dayOfWeek: 'WED',
    //     month: 'FEB',
    //     year: '2025',
    //     venue: "O'Brien's Pub",
    //     city: 'Fitchberg',
    //     state: 'MA',
    //     time: '19:00',
    //     ticketLink: '#',
    // },
    {
        id: '2',
        date: '07',
        dayOfWeek: 'SAT',
        month: 'FEB',
        year: '2025',
        venue: 'Bad Brgr',
        city: 'Manchester',
        state: 'NH',
        time: '20:00',
        ticketLink: '#',
    },
];

const bRollImages: { afterIndex: number; image: BRollImage }[] = [
    {
        afterIndex: 2,
        image: {
        src: '/broll-1.webp',
        alt: 'Live performance',
        position: 'offset-right',
        },
    },
    {
        afterIndex: 5,
        image: {
        src: '/broll-2.webp',
        alt: 'Crowd shot',
        position: 'left',
        },
    },
    {
        afterIndex: 7,
        image: {
        src: '/broll-3.webp',
        alt: 'Backstage',
        position: 'full',
        },
    },
];

const MobileShowCard = ({ show }: { show: Show }) => (
    <div className="border-b border-[var(--color-bone)]/20 py-5 px-1 active:bg-[var(--color-bone)]/5">
        <div className="flex items-start justify-between gap-3">
        <div className="flex-shrink-0 w-16 text-center border-r border-[var(--color-bone)]/10 pr-3">
            <span className="block text-[var(--color-blood)] text-[10px] tracking-widest chivo font-bold">
            {show.dayOfWeek}
            </span>
            <span className="block text-3xl font-black text-[var(--color-bone)] leading-tight">
            {show.date}
            </span>
            <span className="block text-[var(--color-bone)]/50 text-[10px] tracking-wider chivo">
            {show.month}
            </span>
        </div>
        <div className="flex-1 min-w-0 pt-1">
            <h3 className="text-[var(--color-bone)] text-base chivo font-bold leading-tight truncate">
            {show.venue}
            </h3>
            <p className="text-[var(--color-bone)]/50 text-xs chivo mt-1">
            {show.city}, {show.state}
            </p>
            <p className="text-[var(--color-bone)]/40 text-[10px] chivo mt-0.5">
            Doors @ {show.time}
            </p>
        </div>

        {/* <div className="flex-shrink-0 pt-1">
            {show.soldOut ? (
            <span className="text-[var(--color-bone)]/30 text-[10px] chivo tracking-wider block pt-2">
                SOLD OUT
            </span>
            ) : (
            <Link href={show.ticketLink} target="_blank">
                <button className="px-4 py-2.5 text-[10px] text-[var(--color-bone)] border border-[var(--color-bone)]/40 chivo tracking-widest active:bg-[var(--color-bone)] active:text-[var(--color-void)] transition-colors">
                TIX
                </button>
            </Link>
            )}
        </div> */}
        </div>
    </div>
);

const DesktopShowRow = ({ show }: { show: Show }) => (
    <div className="group grid grid-cols-12 border-b border-[var(--color-bone)]/20 hover:bg-[var(--color-bone)]/5 transition-colors duration-200">
        <div className="col-span-2 py-5 px-4 border-r border-[var(--color-bone)]/10">
            <span className="text-[var(--color-bone)] text-base chivo font-bold tracking-wide">
                {show.dayOfWeek}, {show.date} {show.month}
            </span>
        </div>
        <div className="col-span-4 py-5 px-6">
            <span className="text-[var(--color-bone)] text-base chivo">
                {show.venue}
            </span>
        </div>
        <div className="col-span-2 py-5 px-4 text-center">
            <span className="text-[var(--color-bone)]/60 text-sm chivo">
                {show.time}
            </span>
        </div>
        <div className="col-span-2 py-5 px-4">
            <span className="text-[var(--color-bone)]/60 text-sm chivo">
                {show.city}, {show.state}
            </span>
        </div>
        {/* <div className="col-span-2 py-4 px-4 flex justify-end items-center">
        {show.soldOut ? (
            <span className="text-[var(--color-bone)]/30 text-sm chivo tracking-wider">
            SOLD OUT
            </span>
        ) : (
            <Link href={show.ticketLink} target="_blank">
            <button className="px-5 py-2 text-sm text-[var(--color-bone)] border border-[var(--color-bone)]/40 chivo tracking-wider hover:bg-[var(--color-bone)] hover:text-[var(--color-void)] transition-all duration-200 hover:cursor-pointer">
                TICKETS
            </button>
            </Link>
        )}
        </div> */}
    </div>
);

const BRollInsert = ({ image }: { image: BRollImage }) => {
    const positionClasses = {
        left: 'w-[75%] md:w-[35%] ml-0',
        right: 'w-[75%] md:w-[35%] ml-auto',
        full: 'w-full',
        'offset-left': 'w-[85%] md:w-[45%] ml-[5%] md:ml-[10%]',
        'offset-right': 'w-[85%] md:w-[45%] ml-[10%] md:ml-[45%]',
    };

    return (
        <div className={`relative my-6 md:my-12 ${positionClasses[image.position || 'right']}`}>
        <div className="relative aspect-[4/3] md:aspect-[3/2] overflow-hidden">
            <Image
            src={image.src}
            alt={image.alt}
            fill
            className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
            />
            <div className="absolute inset-0 bg-[var(--color-blood)]/0 hover:bg-[var(--color-blood)]/10 transition-colors duration-500 mix-blend-multiply" />
        </div>
        </div>
    );
};

const DesktopTableHeader = () => (
    <div className="hidden md:grid grid-cols-12 border-b-2 border-[var(--color-bone)]/40">
        <div className="col-span-2 py-3 px-4">
            <span className="text-[var(--color-bone)]/60 text-xs chivo tracking-[0.2em] font-bold">
                DATE
            </span>
        </div>
        <div className="col-span-4 py-3 px-6">
            <span className="text-[var(--color-bone)]/60 text-xs chivo tracking-[0.2em] font-bold">
                VENUE
            </span>
        </div>
        <div className="col-span-2 py-3 px-4 text-center">
            <span className="text-[var(--color-bone)]/60 text-xs chivo tracking-[0.2em] font-bold">
                TIME
            </span>
        </div>
        <div className="col-span-2 py-3 px-4">
            <span className="text-[var(--color-bone)]/60 text-xs chivo tracking-[0.2em] font-bold">
                LOCATION
            </span>
        </div>
        <div className="col-span-2 py-3 px-4" />
    </div>
);

const MobileHeader = () => (
    <div className="md:hidden border-b border-[var(--color-bone)]/30 pb-2 mb-2">
        <span className="text-[var(--color-bone)]/40 text-[10px] chivo tracking-[0.3em]">
        {showsData.length} SHOWS
        </span>
    </div>
);

export default function Shows() {
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        setIsLoaded(true);
    }, []);

    const buildShowsWithBRoll = (isMobile: boolean) => {
        const elements: React.ReactNode[] = [];
        
        showsData.forEach((show, index) => {
        if (isMobile) {
            elements.push(<MobileShowCard key={show.id} show={show} />);
        } else {
            elements.push(<DesktopShowRow key={show.id} show={show} />);
        }
        
        const bRoll = bRollImages.find((b) => b.afterIndex === index);
        if (bRoll) {
            elements.push(
            <BRollInsert key={`broll-${index}`} image={bRoll.image} />
            );
        }
        });
        
        return elements;
    };

    return (
        <main className="relative min-h-screen">
        <div 
            className="fixed inset-0 z-0 opacity-30"
            style={{
            backgroundImage: 'url(/promo-3.webp)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            }}
        />

        <div className="relative z-10 pb-40">
            <Navbar />
            <section 
            className={`pt-24 md:pt-36 pb-16 md:pb-24 transition-all duration-700 ${
                isLoaded ? 'opacity-100' : 'opacity-0'
            }`}
            >
            <div className="max-w-6xl mx-auto px-3 md:px-8">
                <h1 className="text-[var(--color-bone)] text-xl md:text-3xl chivo font-black tracking-[0.1em] md:tracking-[0.15em] mb-8 md:mb-16 text-center">
                UPCOMING SHOWS
                </h1>

                <div className="md:hidden w-full">
                <MobileHeader />
                {buildShowsWithBRoll(true)}
                </div>

                <div className="hidden md:block w-full">
                <DesktopTableHeader />
                {buildShowsWithBRoll(false)}
                </div>
            </div>
            </section>
        </div>
        <Footer />
        </main>
    );
}