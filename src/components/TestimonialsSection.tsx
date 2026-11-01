import React, { useState } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

export default function TestimonialsSection() {
  const reviews = [
    {
      id: '1',
      stars: 5,
      quote: '“¡Una verdadera joya! Hermosas habitaciones, un servicio insuperable y la ubicación más idílica para descansar.”',
      author: 'Sofía M.',
      location: 'Nueva York, EE. UU.',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
    },
    {
      id: '2',
      stars: 5,
      quote: '“La atención al detalle es excepcional. Nos sentimos consentidos con una experiencia personalizada de principio a fin.”',
      author: 'Mateo T.',
      location: 'Londres, Reino Unido',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
    },
    {
      id: '3',
      stars: 5,
      quote: '“Paz absoluta, diseño impecable y una gastronomía exquisita. ¡Definitivamente volveremos muy pronto!”',
      author: 'Valeria K.',
      location: 'Madrid, España',
      avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=200&q=80',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : reviews.length - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev < reviews.length - 1 ? prev + 1 : 0));
  };

  return (
    <section id="testimonios" className="relative py-24 px-4 sm:px-6 lg:px-8 bg-[#F7F5F0] text-[#1C221D] overflow-hidden border-t border-[#E8E1D3]/80">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Section Header */}
        <div className="text-center space-y-3">
          <div className="flex items-center justify-center gap-3">
            <span className="h-[1px] w-8 bg-[#D2CBB5]" />
            <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#6E7970]">
              OPINIONES DE HUÉSPEDES
            </span>
            <span className="h-[1px] w-8 bg-[#D2CBB5]" />
          </div>
          
          <h2 className="text-3xl sm:text-5xl font-serif-title font-normal text-[#1C221D] tracking-tight">
            La experiencia de quienes nos visitan
          </h2>
        </div>

        {/* Reviews Cards with Navigation Buttons */}
        <div className="relative">
          
          {/* Left Arrow Button */}
          <button
            onClick={handlePrev}
            className="hidden lg:flex absolute -left-5 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-[#233526] hover:bg-[#18261A] text-white items-center justify-center shadow-lg transition-transform hover:scale-105 cursor-pointer"
            aria-label="Anterior reseña"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Right Arrow Button */}
          <button
            onClick={handleNext}
            className="hidden lg:flex absolute -right-5 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-[#233526] hover:bg-[#18261A] text-white items-center justify-center shadow-lg transition-transform hover:scale-105 cursor-pointer"
            aria-label="Siguiente reseña"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* 3 Testimonials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {reviews.map((rev) => (
              <div
                key={rev.id}
                className="bg-[#FCFBF9] rounded-2xl p-8 shadow-sm hover:shadow-md border border-[#E8E1D3] flex flex-col justify-between space-y-6 transition-all duration-300"
              >
                {/* 5 Stars */}
                <div className="flex items-center gap-1 text-[#1C221D]">
                  {[...Array(rev.stars)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current text-[#1C221D]" />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-sm sm:text-base text-[#475149] font-normal leading-relaxed">
                  {rev.quote}
                </p>

                {/* Guest Author */}
                <div className="flex items-center gap-3 pt-2">
                  <img
                    src={rev.avatar}
                    alt={rev.author}
                    referrerPolicy="no-referrer"
                    className="w-10 h-10 rounded-full object-cover border border-[#D2CBB5]"
                  />
                  <div>
                    <h4 className="text-sm font-bold text-[#1C221D] font-heading">
                      {rev.author}
                    </h4>
                    <p className="text-xs text-[#6E7970] font-light">
                      {rev.location}
                    </p>
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
