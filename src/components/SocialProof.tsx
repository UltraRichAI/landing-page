import React from 'react';
import { Bed, MapPin, Sparkles, ShieldCheck, ArrowRight } from 'lucide-react';
import { STATS } from '../data/hotelData';

interface SocialProofProps {
  onOpenBooking?: () => void;
}

export default function SocialProof({ onOpenBooking }: SocialProofProps) {
  const features = [
    {
      icon: Bed,
      title: 'CONFORT BOUTIQUE',
      subtitle: 'Habitaciones con estilo y toques personalizados',
    },
    {
      icon: MapPin,
      title: 'UBICACIÓN PRIVILEGIADA',
      subtitle: 'Cerca de lo que más importa en el valle',
    },
    {
      icon: Sparkles,
      title: 'EXPERIENCIAS LOCALES',
      subtitle: 'Estadías curadas y descubrimientos únicos',
    },
    {
      icon: ShieldCheck,
      title: 'SEGURIDAD Y PRIVACIDAD',
      subtitle: 'Tu tranquilidad y bienestar son nuestra prioridad',
    },
  ];

  return (
    <section className="relative py-16 px-4 sm:px-6 lg:px-8 bg-[#F7F5F0] border-b border-[#E8E1D3] text-[#1C221D]">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* 4 Feature Badges matching the bottom strip in the reference image */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 divide-y sm:divide-y-0 sm:divide-x divide-[#E2DCCE]">
          {features.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className={`flex flex-col items-center text-center space-y-2.5 pt-6 sm:pt-0 ${
                  idx > 0 ? 'sm:pl-6' : ''
                }`}
              >
                <div className="w-10 h-10 rounded-xl bg-[#EFECE3] flex items-center justify-center text-[#233526]">
                  <Icon className="w-5 h-5 stroke-[1.75]" />
                </div>
                <h4 className="text-xs font-bold tracking-[0.2em] text-[#1C221D] uppercase font-heading">
                  {item.title}
                </h4>
                <p className="text-xs text-[#6E7970] font-light max-w-[200px] leading-relaxed">
                  {item.subtitle}
                </p>
              </div>
            );
          })}
        </div>

        {/* Stats Row in Refined Boutique Style */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-6 border-t border-[#E8E1D3]/80">
          {STATS.map((stat, index) => (
            <div
              key={index}
              className="bg-[#FFFFFF] p-6 rounded-2xl border border-[#E8E1D3] text-center space-y-1 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="text-3xl sm:text-4xl font-serif-title font-bold text-[#233526]">
                {stat.value}
              </div>
              <div className="text-xs font-bold text-[#1C221D] tracking-wide uppercase">
                {stat.label}
              </div>
              <div className="text-[11px] text-[#6E7970] font-light">
                {stat.detail}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
