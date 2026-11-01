import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Check } from 'lucide-react';

interface SuitesSectionProps {
  onOpenBooking: (roomId?: string) => void;
}

export default function SuitesSection({ onOpenBooking }: SuitesSectionProps) {
  const rooms = [
    {
      id: 'habitacion-individual',
      title: 'Habitación Individual',
      subtitle: 'Confort acogedor y tranquilidad para estancias individuales.',
      image: '/assets/aistudio/Enhancing_hotel_image_quality_0d3f5efd_2K_ac0a43c2.jpg',
    },
    {
      id: 'habitacion-matrimonial',
      title: 'Habitación Matrimonial',
      subtitle: 'Ambiente cálido con cama matrimonial, perfecto para parejas.',
      image: '/assets/aistudio/Enhancing_image_for_hotel_website_e2cf389a_2K_db9c9505.jpg',
    },
    {
      id: 'habitacion-matrimonial-premium',
      title: 'Habitación Matrimonial Premium',
      subtitle: 'Mayor amplitud, detalles exclusivos y máxima comodidad.',
      image: '/assets/aistudio/Enhancing_hotel_website_image_qu__3f30c6b6_2K_83f193e7.jpg',
    },
    {
      id: 'habitacion-doble',
      title: 'Habitación Doble',
      subtitle: 'Dos camas espaciosas, ideal para amigos o familias.',
      image: '/assets/aistudio/Enhance_hotel_website_image_quality_3fde160c_2K_e1aaf7a5.jpg',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : rooms.length - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev < rooms.length - 1 ? prev + 1 : 0));
  };

  return (
    <section id="suites" className="relative py-24 px-4 sm:px-6 lg:px-8 bg-[#FAF8F5] text-[#1C221D] overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Section Header */}
        <div className="text-center space-y-3">
          <div className="flex items-center justify-center gap-3">
            <span className="h-[1px] w-8 bg-[#D2CBB5]" />
            <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#6E7970]">
              NUESTRAS HABITACIONES
            </span>
            <span className="h-[1px] w-8 bg-[#D2CBB5]" />
          </div>
          
          <h2 className="text-3xl sm:text-5xl font-serif-title font-normal text-[#1C221D] tracking-tight">
            Diseñadas para el descanso. Creadas para ti.
          </h2>
        </div>

        {/* Rooms Grid / Carousel Container with Navigation Arrows */}
        <div className="relative">
          
          {/* Left Arrow Button */}
          <button
            onClick={handlePrev}
            className="hidden lg:flex absolute -left-5 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-[#233526] hover:bg-[#18261A] text-white items-center justify-center shadow-lg transition-transform hover:scale-105 cursor-pointer"
            aria-label="Anterior habitación"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Right Arrow Button */}
          <button
            onClick={handleNext}
            className="hidden lg:flex absolute -right-5 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-[#233526] hover:bg-[#18261A] text-white items-center justify-center shadow-lg transition-transform hover:scale-105 cursor-pointer"
            aria-label="Siguiente habitación"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* 4 Room Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {rooms.map((room) => (
              <div
                key={room.id}
                onClick={() => onOpenBooking(room.id)}
                className="group cursor-pointer flex flex-col space-y-4"
              >
                {/* Image Container with rounded corners */}
                <div className="relative aspect-square w-full rounded-2xl overflow-hidden bg-[#E8E1D3] shadow-md group-hover:shadow-xl transition-all duration-300">
                  <img
                    src={room.image}
                    alt={room.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors" />
                </div>

                {/* Card Text Content */}
                <div className="space-y-1.5 text-left">
                  <h3 className="font-serif-title text-xl font-bold text-[#1C221D] group-hover:text-[#233526] transition-colors">
                    {room.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#6E7970] font-light leading-relaxed">
                    {room.subtitle}
                  </p>
                  <div className="pt-2 flex items-center justify-between">
                    <span className="text-xs font-semibold text-[#233526] uppercase underline decoration-[#D4AF37] underline-offset-4 group-hover:text-[#18261A]">
                      Consultar Disponibilidad →
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
