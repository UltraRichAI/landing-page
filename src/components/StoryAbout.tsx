import React from 'react';
import { HOTEL_INFO } from '../data/hotelData';
import { Leaf, Sun, Mountain, Sparkles } from 'lucide-react';

export default function StoryAbout() {
  return (
    <section id="filosofia" className="relative py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-[#F7F5F0] text-[#1C221D] overflow-hidden border-t border-[#E8E1D3]/80">
      <div className="max-w-7xl mx-auto space-y-12 sm:space-y-16 relative z-10">
        
        {/* Top Header */}
        <div className="text-center max-w-2xl mx-auto space-y-2.5 sm:space-y-3">
          <div className="flex items-center justify-center gap-3">
            <span className="h-[1px] w-6 sm:w-8 bg-[#D2CBB5]" />
            <span className="text-[11px] sm:text-xs uppercase tracking-[0.25em] font-semibold text-[#6E7970]">
              FILOSOFÍA Y TRADICIÓN
            </span>
            <span className="h-[1px] w-6 sm:w-8 bg-[#D2CBB5]" />
          </div>
          
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-serif-title font-normal text-[#1C221D] tracking-tight">
            El Alma de Mili Hotel
          </h2>
          <p className="text-xs sm:text-base text-[#475149] font-light leading-relaxed">
            <em>Mili Hotel</em> evoca el santuario de cobijo y serenidad: un refugio donde el alma reconecta con el descanso y la belleza natural.
          </p>
        </div>

        {/* 2-Column Story Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Image with rounded boutique frame */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center relative">
            <div className="relative w-full aspect-[4/3] sm:aspect-[4/5] rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl border border-[#E8E1D3] bg-[#E8E1D3]">
              <img
                src="/assets/aistudio/Enhancing_image_for_hotel_website_464fd952_2K_64f52769.jpg"
                alt="Mili Hotel Instalaciones"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              
              {/* Floating Badge */}
              <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 bg-[#FCFBF9]/95 backdrop-blur-md border border-[#E8E1D3] p-3 sm:p-4 rounded-xl sm:rounded-2xl shadow-lg flex items-center justify-between">
                <div>
                  <span className="text-xs font-bold font-serif-title text-[#1C221D] block">{HOTEL_INFO.name}</span>
                  <span className="text-[10px] sm:text-[11px] text-[#6E7970]">{HOTEL_INFO.location}</span>
                </div>
                <span className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#233526] text-white flex items-center justify-center text-xs">
                  ✦
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Story Paragraphs & 3 Pillars */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            <div className="space-y-4 text-[#475149] text-base leading-relaxed font-light">
              <p>
                Nacimos con el propósito de crear un <strong className="text-[#1C221D] font-medium">santuario de descanso consciente</strong>. En una meseta sagrada protegida por las montañas del Valle de Urubamba, cuidamos cada espacio para preservar el silencio inmaculado y la intimidad de nuestros huéspedes.
              </p>

              <p>
                Cada roca, madero y fibra de Mili Hotel honra el principio andino del <em>Ayni</em> (reciprocidad). Nuestra arquitectura bioclimática utiliza energía solar, agua pura de manantial y materiales locales seleccionados con respeto absoluto al paisaje.
              </p>

              <p>
                Aquí el tiempo fluye a otro ritmo: el susurro del viento entre los árboles, el resplandor cálido de la chimenea y las noches estrelladas más diáfanas del hemisferio sur.
              </p>
            </div>

            {/* 3 Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-[#E8E1D3]">
              
              <div className="p-5 rounded-2xl bg-[#FCFBF9] border border-[#E8E1D3] shadow-sm">
                <Leaf className="w-5 h-5 text-[#233526] mb-2" />
                <h4 className="text-sm font-bold text-[#1C221D] font-serif-title mb-1">Eco-Consciencia</h4>
                <p className="text-xs text-[#6E7970] font-light">Cero plásticos de un solo uso y armonía ambiental.</p>
              </div>

              <div className="p-5 rounded-2xl bg-[#FCFBF9] border border-[#E8E1D3] shadow-sm">
                <Sun className="w-5 h-5 text-[#233526] mb-2" />
                <h4 className="text-sm font-bold text-[#1C221D] font-serif-title mb-1">Cultura Viva</h4>
                <p className="text-xs text-[#6E7970] font-light">Saberes ancestrales compartidos con calidez humana.</p>
              </div>

              <div className="p-5 rounded-2xl bg-[#FCFBF9] border border-[#E8E1D3] shadow-sm">
                <Mountain className="w-5 h-5 text-[#233526] mb-2" />
                <h4 className="text-sm font-bold text-[#1C221D] font-serif-title mb-1">Silencio Sagrado</h4>
                <p className="text-xs text-[#6E7970] font-light">Privacidad y descanso reparador en cada estancia.</p>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
