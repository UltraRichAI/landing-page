import React, { useState } from 'react';
import { HOTEL_INFO } from '../data/hotelData';
import { Calendar, ChevronDown, MapPin, CheckCircle2 } from 'lucide-react';

interface HeroSectionProps {
  onOpenBooking: () => void;
  onExploreServices: () => void;
}

export default function HeroSection({ onOpenBooking, onExploreServices }: HeroSectionProps) {
  const [checkInDate, setCheckInDate] = useState('2025-05-24');
  const [checkOutDate, setCheckOutDate] = useState('2025-05-25');
  const [guests, setGuests] = useState('2 Huéspedes');

  const handleHeroConsultar = () => {
    const msg = `🏨 *CONSULTA DE DISPONIBILIDAD - MILI HOTEL*
----------------------------------------
📅 *Llegada:* ${checkInDate}
📅 *Salida:* ${checkOutDate}
👥 *Huéspedes:* ${guests}
📍 *Ubicación:* ${HOTEL_INFO.location}
----------------------------------------
Hola, deseo consultar disponibilidad y tarifas en soles para estas fechas.`;
    window.open(`https://wa.me/51929954728?text=${encodeURIComponent(msg)}`, '_blank');
  };

  return (
    <section className="relative min-h-[100dvh] flex flex-col justify-between pt-28 sm:pt-32 pb-8 sm:pb-12 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Hero Background: Habitación Principal de Mili Hotel */}
      <div className="absolute inset-0 z-0">
        <img
          src="/assets/aistudio/Website_hero_section_design_fe1d18f6_2K_17fc37a6.jpg"
          alt="Habitación Principal de Mili Hotel"
          className="w-full h-full object-cover object-[center_55%] scale-[1.02] transform transition-transform duration-1000 ease-out"
        />
        {/* Cinematic gradient overlays matching warmth and ensuring crisp text legibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/45 to-black/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#142016]/85 via-transparent to-black/50" />
      </div>

      {/* Main Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto w-full flex-1 flex flex-col justify-center my-auto">
        <div className="max-w-3xl text-left space-y-4 sm:space-y-5 pt-2 sm:pt-4">
          
          {/* Location Badge - placed above the main title */}
          <div>
            <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-black/60 backdrop-blur-sm border border-white/20 text-white text-[11px] sm:text-xs md:text-sm font-medium tracking-wide shadow-md max-w-full">
              <MapPin className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#E6C665] shrink-0" />
              <span className="truncate">{HOTEL_INFO.location}</span>
            </div>
          </div>

          {/* Main Title matching "Una estancia, diferente." */}
          <div className="space-y-2 sm:space-y-3">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl xl:text-8xl text-white font-serif-title font-bold tracking-tight leading-[1.08] drop-shadow-xl">
              Una estancia, <br />
              <span className="font-cormorant italic font-medium tracking-wide text-stone-100">
                diferente.
              </span>
            </h1>
            
            <p className="text-xs sm:text-sm md:text-base uppercase tracking-wider text-white/95 font-medium pt-0.5 sm:pt-1 drop-shadow-md">
              CONFORT BOUTIQUE · MOMENTOS INOLVIDABLES
            </p>
          </div>

        </div>
      </div>

      {/* Floating Booking / Search Bar */}
      <div className="relative z-20 max-w-5xl mx-auto w-full mt-6 sm:mt-8">
        <div className="bg-[#FAF7F2] rounded-2xl sm:rounded-3xl p-4 sm:p-6 shadow-2xl border border-[#E8E1D3] text-[#1C221D]">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-3 sm:gap-4 items-center">
            
            {/* LLEGADA */}
            <div className="lg:col-span-3 p-3 rounded-xl hover:bg-[#F2ECE1] transition-colors border border-transparent hover:border-[#DDD5C5] bg-[#F7F3EC]/50 sm:bg-transparent">
              <span className="block text-[11px] sm:text-xs uppercase tracking-wider font-semibold text-gray-600 mb-1">
                LLEGADA
              </span>
              <div className="flex items-center justify-between">
                <input
                  type="date"
                  value={checkInDate}
                  onChange={(e) => setCheckInDate(e.target.value)}
                  className="bg-transparent text-sm sm:text-base md:text-lg font-bold text-gray-900 focus:outline-none cursor-pointer w-full"
                />
                <Calendar className="w-4 h-4 text-gray-700 shrink-0 pointer-events-none" />
              </div>
            </div>

            {/* SALIDA */}
            <div className="lg:col-span-3 p-3 rounded-xl hover:bg-[#F2ECE1] transition-colors border border-transparent hover:border-[#DDD5C5] bg-[#F7F3EC]/50 sm:bg-transparent">
              <span className="block text-[11px] sm:text-xs uppercase tracking-wider font-semibold text-gray-600 mb-1">
                SALIDA
              </span>
              <div className="flex items-center justify-between">
                <input
                  type="date"
                  value={checkOutDate}
                  onChange={(e) => setCheckOutDate(e.target.value)}
                  className="bg-transparent text-sm sm:text-base md:text-lg font-bold text-gray-900 focus:outline-none cursor-pointer w-full"
                />
                <Calendar className="w-4 h-4 text-gray-700 shrink-0 pointer-events-none" />
              </div>
            </div>

            {/* HUÉSPEDES */}
            <div className="lg:col-span-3 p-3 rounded-xl hover:bg-[#F2ECE1] transition-colors border border-transparent hover:border-[#DDD5C5] bg-[#F7F3EC]/50 sm:bg-transparent">
              <span className="block text-[11px] sm:text-xs uppercase tracking-wider font-semibold text-gray-600 mb-1">
                HUÉSPEDES
              </span>
              <div className="relative">
                <select
                  value={guests}
                  onChange={(e) => setGuests(e.target.value)}
                  className="w-full bg-transparent text-sm sm:text-base md:text-lg font-bold text-gray-900 focus:outline-none cursor-pointer appearance-none pr-6"
                >
                  <option value="1 Huésped">1 Huésped</option>
                  <option value="2 Huéspedes">2 Huéspedes</option>
                  <option value="3 Huéspedes">3 Huéspedes</option>
                  <option value="4+ Huéspedes">4+ Huéspedes</option>
                </select>
                <ChevronDown className="w-4 h-4 text-gray-700 absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none" />
              </div>
            </div>

            {/* ACTION BUTTON */}
            <div className="lg:col-span-3 flex flex-col gap-1.5 pt-1 sm:pt-0">
              <button
                onClick={handleHeroConsultar}
                className="w-full py-3 sm:py-3.5 px-4 sm:px-6 rounded-xl bg-[#233526] hover:bg-[#18261A] text-white font-semibold text-xs sm:text-sm tracking-wider uppercase transition-all duration-200 shadow-lg hover:shadow-xl cursor-pointer flex items-center justify-center gap-2"
              >
                <span>CONSULTAR DISPONIBILIDAD</span>
              </button>
              <button
                type="button"
                onClick={onOpenBooking}
                className="text-[11px] text-gray-600 hover:text-gray-900 underline text-center cursor-pointer transition-colors font-medium tracking-wide uppercase py-1"
              >
                Personalizar Consulta
              </button>
            </div>

          </div>

          {/* Guarantee Badges inside booking card */}
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2.5 sm:gap-6 pt-3 mt-2 border-t border-[#E8E1D3]/80 text-[11px] sm:text-xs md:text-sm text-gray-700 font-medium text-center sm:text-left">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#233526] shrink-0" />
              Mejor Tarifa Garantizada
            </span>
            <span className="text-[#C5BFA9] hidden sm:inline">|</span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#233526] shrink-0" />
              Sin Cargos Ocultos
            </span>
            <span className="text-[#C5BFA9] hidden sm:inline">|</span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#233526] shrink-0" />
              Confirmación Inmediata con Concierge
            </span>
          </div>

        </div>
      </div>

    </section>
  );
}
