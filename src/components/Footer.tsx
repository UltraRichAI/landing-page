import React from 'react';
import HotelLogo from './HotelLogo';
import { HOTEL_INFO } from '../data/hotelData';
import { MapPin, Phone, Mail, Send } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="contacto" className="relative bg-[#142016] text-stone-300 text-xs font-light border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-12 space-y-16">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          
          {/* Column 1: Brand & Coordinates */}
          <div className="lg:col-span-2 space-y-5">
            <HotelLogo size="lg" />
            <p className="text-stone-300 text-sm leading-relaxed max-w-sm font-light">
              {HOTEL_INFO.fullTagline}. Habitaciones y suites exclusivas, gastronomía local y experiencias curadas en el corazón del Valle Sagrado.
            </p>
            
            <div className="space-y-1 font-mono text-[11px] text-stone-400 border-l-2 border-stone-400 pl-3">
              <p className="text-white font-medium">UBICACIÓN:</p>
              <p>{HOTEL_INFO.location}</p>
              <p>{HOTEL_INFO.coordinates}</p>
            </div>
          </div>

          {/* Column 2: Habitaciones */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-[0.2em] font-heading">
              HABITACIONES
            </h4>
            <ul className="space-y-2 text-stone-400">
              <li><a href="#suites" className="hover:text-white transition-colors">Habitación Deluxe</a></li>
              <li><a href="#suites" className="hover:text-white transition-colors">Habitación Jardín</a></li>
              <li><a href="#suites" className="hover:text-white transition-colors">Habitación Premium</a></li>
              <li><a href="#suites" className="hover:text-white transition-colors">Suite Master</a></li>
              <li><a href="#suites" className="hover:text-white transition-colors">Ofertas Especiales</a></li>
            </ul>
          </div>

          {/* Column 3: El Hotel */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-[0.2em] font-heading">
              EL HOTEL
            </h4>
            <ul className="space-y-2 text-stone-400">
              <li><a href="#amenities" className="hover:text-white transition-colors">Comodidades</a></li>
              <li><a href="#experiencias" className="hover:text-white transition-colors">Experiencias</a></li>
              <li><a href="#galeria" className="hover:text-white transition-colors">Galería</a></li>
              <li><a href="#testimonios" className="hover:text-white transition-colors">Opiniones</a></li>
              <li><a href="#filosofia" className="hover:text-white transition-colors">Sobre Nosotros</a></li>
            </ul>
          </div>

          {/* Column 4: Contact & Newsletter */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-[0.2em] font-heading">
              CONTACTO
            </h4>
            <div className="space-y-2.5 text-stone-300">
              <a
                href="https://wa.me/51929954728?text=Hola%20Mili%20Hotel,%20deseo%20consultar%20disponibilidad"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-white transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-stone-400 shrink-0" />
                <span>{HOTEL_INFO.phone}</span>
              </a>

              <a
                href={`mailto:${HOTEL_INFO.email}`}
                className="flex items-center gap-2 hover:text-white transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-stone-400 shrink-0" />
                <span>{HOTEL_INFO.email}</span>
              </a>

              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-stone-400 shrink-0" />
                <span>{HOTEL_INFO.location}</span>
              </div>
            </div>

            {/* Newsletter input */}
            <div className="pt-2">
              <p className="text-[11px] text-stone-400 mb-2">Suscríbete a nuestro boletín:</p>
              <div className="flex items-center rounded-xl bg-white/10 border border-white/15 p-1 focus-within:border-white">
                <input
                  type="email"
                  placeholder="Tu correo electrónico..."
                  className="bg-transparent text-xs text-white px-2.5 py-1.5 focus:outline-none w-full placeholder:text-stone-400"
                />
                <button
                  type="button"
                  className="p-2 rounded-lg bg-[#FAF8F5] text-[#1A271C] hover:bg-white cursor-pointer"
                  aria-label="Suscribirse"
                >
                  <Send className="w-3 h-3" />
                </button>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-stone-400 text-[11px]">
          <p>© {new Date().getFullYear()} MILI HOTEL. Todos los derechos reservados.</p>
          <div className="flex items-center gap-6">
            <span className="text-stone-300 font-mono">✦ EXPERIENCIA DE HOTEL BOUTIQUE ✦</span>
            <a href="#" className="hover:text-white transition-colors">Privacidad</a>
            <a href="#" className="hover:text-white transition-colors">Términos</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
