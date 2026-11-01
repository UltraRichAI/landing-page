import React from 'react';
import { ServiceExperience } from '../types';
import { X, Check, Clock, Calendar, ArrowRight, MapPin } from 'lucide-react';

interface ExperienceDetailModalProps {
  experience: ServiceExperience | null;
  onClose: () => void;
  onBook: (experience: ServiceExperience) => void;
}

export default function ExperienceDetailModal({ experience, onClose, onBook }: ExperienceDetailModalProps) {
  if (!experience) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/75 backdrop-blur-md overflow-y-auto">
      <div className="relative max-w-2xl w-full max-h-[92vh] overflow-y-auto my-auto bg-[#FCFBF9] text-[#1C221D] border border-[#E8E1D3] rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl">
        
        {/* Top Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 sm:top-4 sm:right-4 z-20 p-2 rounded-full bg-black/60 backdrop-blur-md text-white hover:bg-[#233526] cursor-pointer transition-colors"
          aria-label="Cerrar modal"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Hero Image */}
        <div className="relative aspect-[16/9] w-full overflow-hidden bg-[#E8E1D3]">
          <img
            src={experience.imageUrl}
            alt={experience.title}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
          
          <div className="absolute top-4 left-4">
            <span className="px-3 py-1 rounded-full bg-white/90 text-[#1C221D] text-[11px] font-semibold tracking-wider uppercase">
              {experience.category}
            </span>
          </div>

          <div className="absolute bottom-4 left-6 right-6 text-white text-left">
            <h3 className="text-2xl sm:text-3xl font-serif-title font-bold text-white">
              {experience.title}
            </h3>
            <p className="text-xs text-stone-200 font-light mt-1">
              {experience.subtitle}
            </p>
          </div>
        </div>

        {/* Modal Body Content */}
        <div className="p-6 sm:p-8 space-y-6 text-left">
          
          {/* Quick Info Bar */}
          <div className="flex flex-wrap items-center justify-between gap-4 p-4 rounded-2xl bg-[#F7F5F0] border border-[#E8E1D3]">
            <div className="flex items-center gap-2 text-xs text-[#475149]">
              <Clock className="w-4 h-4 text-[#233526]" />
              <span>Duración: <strong>{experience.duration}</strong></span>
            </div>
            <div className="flex items-center gap-2 text-xs text-[#475149]">
              <MapPin className="w-4 h-4 text-[#233526]" />
              <span>Ctra. Central Km. 42, Lima</span>
            </div>
            <div className="text-right">
              <span className="text-2xl font-serif-title font-bold text-[#1C221D]">S/ {experience.priceFrom}</span>
              <span className="text-xs text-[#233526] font-semibold ml-1">PEN</span>
            </div>
          </div>

          {/* Description */}
          <div className="space-y-1.5">
            <h4 className="text-xs font-bold font-serif-title text-[#1C221D] uppercase tracking-wider">
              Detalles de la Experiencia
            </h4>
            <p className="text-xs sm:text-sm text-[#475149] leading-relaxed font-light">
              {experience.fullDesc}
            </p>
          </div>

          {/* What is included */}
          <div className="space-y-2">
            <h4 className="text-xs font-bold font-serif-title text-[#1C221D] uppercase tracking-wider">
              Qué Incluye
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {experience.included.map((item, idx) => (
                <div key={idx} className="flex items-start gap-2 text-xs text-[#475149]">
                  <Check className="w-3.5 h-3.5 text-[#233526] shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Footer Action */}
          <div className="pt-4 border-t border-[#E8E1D3] flex items-center justify-end gap-3">
            <button
              onClick={onClose}
              className="px-5 py-2.5 rounded-xl border border-[#E8E1D3] text-xs font-medium text-[#475149] hover:bg-[#EFECE3] cursor-pointer"
            >
              Cerrar
            </button>

            <button
              onClick={() => {
                onClose();
                onBook(experience);
              }}
              className="px-6 py-2.5 rounded-xl bg-[#233526] hover:bg-[#18261A] text-xs font-semibold text-white flex items-center gap-2 cursor-pointer shadow-md tracking-wider uppercase"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Consultar Disponibilidad</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>

      </div>
    </div>
  );
}
