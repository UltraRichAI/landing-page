import React from 'react';
import { AMENITIES } from '../data/hotelData';
import { Waves, Wifi, Tv, Flame, Utensils, Car, Sparkles } from 'lucide-react';

export default function AmenitiesSection() {
  const iconMap: Record<string, React.ReactNode> = {
    Waves: <Waves className="w-5 h-5 text-[#233526]" />,
    Wifi: <Wifi className="w-5 h-5 text-[#233526]" />,
    Tv: <Tv className="w-5 h-5 text-[#233526]" />,
    Flame: <Flame className="w-5 h-5 text-[#233526]" />,
    Utensils: <Utensils className="w-5 h-5 text-[#233526]" />,
    Car: <Car className="w-5 h-5 text-[#233526]" />,
  };

  return (
    <section id="amenities" className="relative py-24 px-4 sm:px-6 lg:px-8 bg-[#FAF8F5] text-[#1C221D] border-t border-[#E8E1D3]/80">
      <div className="max-w-7xl mx-auto space-y-14">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <div className="flex items-center justify-center gap-3">
            <span className="h-[1px] w-8 bg-[#D2CBB5]" />
            <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#6E7970]">
              SERVICIOS Y COMODIDADES
            </span>
            <span className="h-[1px] w-8 bg-[#D2CBB5]" />
          </div>
          
          <h2 className="text-3xl sm:text-5xl font-serif-title font-normal text-[#1C221D] tracking-tight">
            Comodidades concebidas para el descanso
          </h2>
          <p className="text-sm sm:text-base text-[#475149] font-light leading-relaxed">
            Cada detalle ha sido cuidado para garantizar confort absoluto y armonía con el entorno andino.
          </p>
        </div>

        {/* 6 Amenities Grid in White Boutique Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {AMENITIES.map((amenity, index) => (
            <div
              key={index}
              className="p-7 rounded-2xl bg-[#FFFFFF] border border-[#E8E1D3] hover:border-[#233526]/30 shadow-sm hover:shadow-md transition-all duration-300 group flex items-start gap-4"
            >
              <div className="p-3 rounded-xl bg-[#EFECE3] group-hover:bg-[#233526] group-hover:text-white transition-colors shrink-0">
                {iconMap[amenity.icon] || <Sparkles className="w-5 h-5 text-[#233526] group-hover:text-white" />}
              </div>
              <div className="space-y-1.5 text-left">
                <h3 className="text-base font-serif-title font-bold text-[#1C221D] group-hover:text-[#233526] transition-colors">
                  {amenity.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#6E7970] leading-relaxed font-light">
                  {amenity.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
