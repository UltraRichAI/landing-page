import React, { useState } from 'react';
import { ServiceExperience } from '../types';
import { SERVICES_EXPERIENCES } from '../data/hotelData';
import { Sparkles, ArrowRight, Clock, Check, Info, RotateCw } from 'lucide-react';

interface ServicesFlipCardsProps {
  onSelectExperience: (service: ServiceExperience) => void;
  onBookExperience: (service: ServiceExperience) => void;
}

export default function ServicesFlipCards({ onSelectExperience, onBookExperience }: ServicesFlipCardsProps) {
  const [flippedCards, setFlippedCards] = useState<Record<string, boolean>>({});

  const toggleFlip = (id: string) => {
    setFlippedCards((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <section id="experiencias" className="relative py-24 px-4 sm:px-6 lg:px-8 bg-[#F7F5F0] text-[#1C221D] overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-14 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="flex items-center justify-center gap-3">
            <span className="h-[1px] w-8 bg-[#D2CBB5]" />
            <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#6E7970]">
              EXPERIENCIAS EXCLUSIVAS
            </span>
            <span className="h-[1px] w-8 bg-[#D2CBB5]" />
          </div>

          <h2 className="text-3xl sm:text-5xl font-serif-title font-normal text-[#1C221D] tracking-tight">
            Los 6 Santuarios de Mili Hotel
          </h2>

          <p className="text-sm sm:text-base text-[#475149] font-light leading-relaxed">
            Toca o pasa el cursor sobre cada tarjeta interactiva para descubrir los detalles, rituales e inclusiones de cada santuario.
          </p>
        </div>

        {/* Flip Cards Grid (6 items) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES_EXPERIENCES.map((service) => {
            const isFlipped = !!flippedCards[service.id];

            return (
              <div
                key={service.id}
                id={`card-${service.id}`}
                onClick={() => toggleFlip(service.id)}
                className={`service-card-flip ${isFlipped ? 'is-flipped' : ''}`}
              >
                <div className="service-card-inner">
                  
                  {/* FRONT OF THE CARD */}
                  <div className="service-card-front bg-[#FFFFFF] flex flex-col justify-between shadow-md hover:shadow-xl transition-shadow rounded-2xl overflow-hidden border border-[#E8E1D3]">
                    <div className="relative w-full h-full">
                      <img
                        src={service.imageUrl}
                        alt={service.title}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover service-image transition-transform duration-700 hover:scale-105"
                      />

                      {/* Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

                      {/* Top Pill on Front */}
                      <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
                        <span className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-[11px] font-mono text-stone-200 font-medium">
                          {service.category}
                        </span>
                        <span className="w-8 h-8 rounded-full bg-black/50 backdrop-blur-md border border-white/20 flex items-center justify-center text-white text-xs hover:bg-[#233526]">
                          <RotateCw className="w-3.5 h-3.5" />
                        </span>
                      </div>

                      {/* Bottom Title & Teaser on Front */}
                      <div className="absolute bottom-0 left-0 right-0 p-6 z-10 space-y-2 text-white">
                        <div className="flex items-center gap-1.5 text-xs text-stone-300 font-mono">
                          <Clock className="w-3.5 h-3.5" />
                          <span>{service.duration}</span>
                        </div>
                        
                        <h3 className="text-xl sm:text-2xl font-serif-title font-bold text-white tracking-wide">
                          {service.title}
                        </h3>
                        
                        <p className="text-xs text-stone-300 line-clamp-2 font-light">
                          {service.shortDesc}
                        </p>

                        <div className="pt-2 flex items-center justify-between text-xs border-t border-white/20">
                          <span className="text-stone-100 font-semibold">Desde S/ {service.priceFrom}</span>
                          <span className="text-stone-300 flex items-center gap-1 text-[11px]">
                            Girar para ver detalles ⟳
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* BACK OF THE CARD (Revealed on 3D Flip) */}
                  <div className="service-card-back p-6 flex flex-col justify-between bg-[#1A271C] text-white rounded-2xl border border-white/15">
                    <div className="space-y-4">
                      
                      {/* Top Back Header */}
                      <div className="flex items-center justify-between border-b border-white/10 pb-3">
                        <span className="text-xs font-mono text-stone-300 uppercase tracking-wider font-semibold">
                          {service.category}
                        </span>
                        <span className="text-sm font-bold text-white">
                          S/ {service.priceFrom} <span className="text-[10px] text-stone-400 font-normal">/ {service.duration}</span>
                        </span>
                      </div>

                      <h3 className="text-xl font-serif-title font-bold text-white">
                        {service.title}
                      </h3>

                      <p className="text-xs sm:text-sm text-stone-300 leading-relaxed font-light">
                        {service.fullDesc}
                      </p>

                      {/* Feature Tags */}
                      <div className="flex flex-wrap gap-1.5 pt-1">
                        {service.tags.map((tag, tIdx) => (
                          <span
                            key={tIdx}
                            className="px-2.5 py-1 rounded-lg bg-white/10 border border-white/15 text-stone-200 text-[11px] font-medium"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* Inclusions checklist */}
                      <div className="space-y-1.5 pt-2">
                        {service.included.slice(0, 3).map((inc, iIdx) => (
                          <div key={iIdx} className="flex items-center gap-2 text-[11px] text-stone-300">
                            <Check className="w-3.5 h-3.5 text-[#D4AF37] shrink-0" />
                            <span className="truncate">{inc}</span>
                          </div>
                        ))}
                      </div>

                    </div>

                    {/* Back Actions */}
                    <div className="pt-4 border-t border-white/10 flex items-center gap-2">
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          onSelectExperience(service);
                        }}
                        className="flex-1 py-2.5 px-3 rounded-lg border border-white/20 hover:border-white bg-white/10 hover:bg-white/20 text-xs font-semibold text-white transition-all text-center cursor-pointer"
                      >
                        Ver Ficha
                      </button>

                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          onBookExperience(service);
                        }}
                        className="flex-1 py-2.5 px-3 rounded-lg bg-[#233526] hover:bg-[#18261A] text-xs font-bold text-white flex items-center justify-center gap-1.5 border border-white/20 cursor-pointer shadow-md"
                      >
                        <span>Consultar</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>

                  </div>

                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
