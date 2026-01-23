'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: '/music', label: 'MUSIC', external: false },
    { href: '/shows', label: 'SHOWS', external: false },
    { href: '/videos', label: 'VIDEOS', external: false },
  ];

  const navLinksRight = [
    { href: '/merch', label: 'MERCH', external: false },
    { href: '/', label: 'BANDSINTOWN', external: true },
    { href: '/contact', label: 'CONTACT', external: false },
  ];

  return (
    <nav className="w-full relative z-50">
      <div className="hidden xl:flex w-full relative h-36 flex-row items-center px-10 text-white">
        <div className="flex items-center gap-4 mr-auto text-white mix-blend-difference tracking-wider scale-y-90">
          {navLinks.map((link, i) => (
            <span key={link.href} className="flex items-center gap-4">
              <Link className="chivo font-black text-white hover:text-[var(--color-blood)] transition-colors" href={link.href}>
                {link.label}
              </Link>
              {i < navLinks.length - 1 && <span className="text-xs opacity-60">♦</span>}
            </span>
          ))}
        </div>
        <div className="absolute left-1/2 -translate-x-1/2">
          <Link href="/">
            <Image
              src="/no-more-youth-logo.png"
              className="h-[100px] w-[500px] flicker-crude mix-blend-difference"
              width={500}
              height={100}
              alt="NO MORE YOUTH"
            />
          </Link>
        </div>
        <div className="flex items-center gap-4 ml-auto text-white mix-blend-difference tracking-wider scale-y-90">
          {navLinksRight.map((link, i) => (
            <span key={link.href + link.label} className="flex items-center gap-4">
              <Link 
                className="chivo font-black text-white hover:text-[var(--color-blood)] transition-colors" 
                href={link.href}
                target={link.external ? '_blank' : undefined}
              >
                {link.label}
              </Link>
              {i < navLinksRight.length - 1 && <span className="text-xs opacity-60">♠</span>}
            </span>
          ))}
        </div>
      </div>
      <div className="xl:hidden w-full">
        <div className="flex items-center justify-between px-6 py-4">
          <Link href="/">
            <Image
              src="/no-more-youth-logo.png"
              className="h-[75px] w-[300px] object-contain"
              width={200}
              height={50}
              alt="NO MORE YOUTH"
            />
          </Link>
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="relative w-10 h-10 flex flex-col items-center justify-center gap-1.5 z-50"
                aria-label="Toggle menu"
            >
                <span 
                className={`block w-7 h-0.5 bg-[var(--color-bone)] transition-all duration-300 ${
                    isOpen ? 'rotate-45 translate-y-2' : ''
                }`}
                />
                <span 
                className={`block w-7 h-0.5 bg-[var(--color-bone)] transition-all duration-300 ${
                    isOpen ? 'opacity-0 scale-0' : ''
                }`}
                />
                <span 
                className={`block w-7 h-0.5 bg-[var(--color-bone)] transition-all duration-300 ${
                    isOpen ? '-rotate-45 -translate-y-2' : ''
                }`}
            />
            </button>
        </div>
        <div 
          className={`fixed inset-0 bg-[var(--color-void)] transition-all duration-500 ${
            isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
          }`}
          style={{ zIndex: 40 }}
        >
          <div className="flex flex-col items-center justify-center h-full gap-8 pt-20">
            {[...navLinks, ...navLinksRight].map((link, i) => (
              <Link
                key={link.href + link.label}
                href={link.href}
                target={link.external ? '_blank' : undefined}
                onClick={() => setIsOpen(false)}
                className={`
                  chivo font-black text-3xl tracking-[0.2em] text-(--color-bone)
                  hover:text-[var(--color-blood)] transition-all duration-300
                  transform transition-transform
                  ${isOpen ? 'opacity-100' : 'opacity-0'}
                `}
                style={{ 
                  transitionDelay: isOpen ? `${i * 50}ms` : '0ms',
                  textShadow: '0 0 30px rgba(139,0,0,0.3)',
                }}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}