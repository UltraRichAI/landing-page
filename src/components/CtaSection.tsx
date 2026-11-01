import React from 'react';
import { HOTEL_INFO } from '../data/hotelData';
import { Sparkles, Phone, ArrowRight, ShieldCheck, Star } from 'lucide-react';

interface CtaSectionProps {
  onOpenBooking: () => void;
}

export default function CtaSection({ onOpenBooking }: CtaSectionProps) {
  return (
    <section className="relative py-16 sm:py-28 px-4 sm:px-6 lg:px-8 bg-[#1A271C] text-white overflow-hidden">
      {/* Subtle Forest Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(#2E4031_1px,transparent_1px)] [background-size:24px_24px] opacity-20 pointer-events-none" />

      <div className="max-w-4xl mx-auto text-center space-y-6 sm:space-y-8 relative z-10">
        
        {/* Availability Badge */}
        <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-stone-200 text-[10px] sm:text-xs font-mono tracking-wider max-w-full">
          <span className="w-2 h-2 rounded-full bg-[#E5D7B7] animate-ping shrink-0" />
          <span className="truncate">EXCLUSIVIDAD BOUTIQUE • ATENCIÓN PERSONALIZADA</span>
        </div>

        {/* Heading */}
        <div className="space-y-2.5 sm:space-y-3">
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-serif-title font-normal tracking-tight leading-tight text-[#FAF8F5]">
            ¿Listo para vivir una estancia inolvidable?
          </h2>
          <p className="text-xs sm:text-base md:text-lg text-stone-300 font-light max-w-2xl mx-auto leading-relaxed">
            Reserva tu habitación o suite en Mili Hotel y disfruta del confort, la tranquilidad y los paisajes mágicos del Valle Sagrado.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 pt-1 sm:pt-2">
          <button
            onClick={onOpenBooking}
            className="w-full sm:w-auto px-7 sm:px-9 py-3.5 sm:py-4 rounded-xl bg-[#FAF8F5] text-[#1A271C] hover:bg-white text-xs sm:text-sm font-semibold tracking-wider uppercase transition-all shadow-xl hover:shadow-2xl flex items-center justify-center gap-2 cursor-pointer font-heading"
          >
            <span>CONSULTAR DISPONIBILIDAD</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <a
            href="https://wa.me/51929954728?text=Hola%20Mili%20Hotel,%20deseo%20consultar%20disponibilidad"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-6 sm:px-7 py-3.5 sm:py-4 rounded-xl border border-white/20 bg-white/5 hover:bg-white/10 text-white font-medium text-xs sm:text-sm transition-all flex items-center justify-center gap-2"
          >
            <Phone className="w-4 h-4 text-stone-300" />
            <span>WhatsApp (929 954 728)</span>
          </a>
        </div>

        {/* Reassurance pills */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6 pt-5 sm:pt-6 text-[11px] sm:text-xs text-stone-300 border-t border-white/10 max-w-xl mx-auto font-light">
          <span className="flex items-center gap-1.5">
            <ShieldCheck className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#E5D7B7]" />
            Cancelación flexible
          </span>
          <span className="flex items-center gap-1.5">
            <Star className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#E5D7B7]" />
            Atención boutique 100%
          </span>
          <span className="flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#E5D7B7]" />
            Desayuno gourmet incluido
          </span>
        </div>

      </div>
    </section>
  );
}
