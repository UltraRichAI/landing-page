import React from 'react';

interface HotelLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  showTagline?: boolean;
}

export default function HotelLogo({ className = '', size = 'md', showTagline = false }: HotelLogoProps) {
  const iconSizes = {
    sm: 'w-6 h-6',
    md: 'w-8 h-8',
    lg: 'w-10 h-10',
  };

  const textSizes = {
    sm: 'text-sm tracking-widest',
    md: 'text-lg tracking-[0.2em]',
    lg: 'text-2xl tracking-[0.25em]',
  };

  return (
    <div className={`flex items-center gap-3 group cursor-pointer ${className}`}>
      {/* Refined Boutique Botanical Leaf & Sun Emblem */}
      <div className={`relative ${iconSizes[size]} flex items-center justify-center shrink-0`}>
        <svg viewBox="0 0 32 32" className="w-full h-full text-white fill-none stroke-current" strokeWidth="1.75">
          {/* Botanical leaf and petals crest */}
          <path d="M16 3C16 3 10 10 10 18C10 23 13 27 16 29C19 27 22 23 22 18C22 10 16 3 16 3Z" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M16 10V26" strokeLinecap="round" />
          <path d="M16 16L12 13" strokeLinecap="round" />
          <path d="M16 19L20 16" strokeLinecap="round" />
          <path d="M6 14C6 14 8 18 11 20" strokeLinecap="round" />
          <path d="M26 14C26 14 24 18 21 20" strokeLinecap="round" />
        </svg>
      </div>

      <div className="flex flex-col text-left">
        <span className={`font-serif-title font-bold uppercase text-white ${textSizes[size]}`}>
          MILI HOTEL
        </span>
        <span className="text-[8px] sm:text-[9px] uppercase tracking-[0.3em] text-stone-300 font-light">
          HOTEL RESTAURANTE
        </span>
        {showTagline && (
          <span className="text-xs text-stone-400 mt-0.5 font-light italic">
            Valle Sagrado de los Incas
          </span>
        )}
      </div>
    </div>
  );
}
