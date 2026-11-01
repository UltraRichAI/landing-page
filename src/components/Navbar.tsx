import React, { useState, useEffect } from 'react';
import HotelLogo from './HotelLogo';
import { Menu, X, Phone, Calendar } from 'lucide-react';
import { HOTEL_INFO } from '../data/hotelData';

interface NavbarProps {
  onOpenBooking: () => void;
}

export default function Navbar({ onOpenBooking }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'HABITACIONES', href: '#suites' },
    { name: 'COMODIDADES', href: '#amenities' },
    { name: 'EXPERIENCIAS', href: '#experiencias' },
    { name: 'GALERÍA', href: '#galeria' },
    { name: 'RESEÑAS', href: '#testimonios' },
    { name: 'NOSOTROS', href: '#filosofia' },
    { name: 'CONTACTO', href: '#contacto' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#142016]/90 backdrop-blur-xl border-b border-white/10 py-3 shadow-lg shadow-black/20'
          : 'bg-gradient-to-b from-black/70 via-black/30 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#" className="flex items-center">
          <HotelLogo size={isScrolled ? 'sm' : 'md'} />
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex items-center gap-7 text-xs font-semibold tracking-[0.18em] uppercase text-stone-200">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="hover:text-white transition-colors relative py-1 text-[11px] after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1.5px] after:bg-stone-200 after:transition-all hover:after:w-full"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Action Button: CONSULTAR DISPONIBILIDAD */}
        <div className="hidden sm:flex items-center gap-4">
          <button
            onClick={onOpenBooking}
            className="px-6 py-2.5 rounded-lg bg-[#233526] hover:bg-[#18261A] text-white font-semibold text-xs tracking-widest uppercase transition-all duration-200 shadow-md hover:shadow-lg border border-white/15 cursor-pointer"
          >
            CONSULTAR DISPONIBILIDAD
          </button>
        </div>

        {/* Mobile menu trigger */}
        <div className="lg:hidden flex items-center gap-2">
          <button
            onClick={onOpenBooking}
            className="px-3.5 py-1.5 rounded-lg bg-[#233526] text-white text-[11px] font-semibold tracking-wider uppercase"
          >
            CONSULTAR
          </button>
          
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg text-white bg-black/40 border border-white/20 focus:outline-none"
            aria-label="Abrir menú"
          >
            {mobileMenuOpen ? <X className="w-5 h-5 text-white" /> : <Menu className="w-5 h-5 text-white" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-full bg-[#142016]/95 backdrop-blur-2xl border-b border-white/15 p-6 shadow-2xl transition-all">
          <div className="flex flex-col space-y-4">
            <div className="pb-3 border-b border-white/10">
              <span className="text-[11px] font-mono uppercase text-stone-300 tracking-widest">
                {HOTEL_INFO.location}
              </span>
            </div>
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-sm font-semibold text-stone-200 hover:text-white tracking-widest uppercase py-1 flex items-center justify-between"
              >
                <span>{link.name}</span>
                <span className="text-xs text-stone-400">→</span>
              </a>
            ))}
            <div className="pt-4 border-t border-white/10 flex flex-col gap-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full py-3 rounded-lg bg-[#233526] hover:bg-[#18261A] text-white text-xs font-semibold tracking-widest uppercase transition-all"
              >
                CONSULTAR DISPONIBILIDAD
              </button>
              <a
                href={`https://wa.me/51929954728?text=Hola%20Mili%20Hotel,%20deseo%20consultar%20disponibilidad`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 text-center text-xs font-medium text-stone-300 border border-white/20 rounded-lg bg-black/30 flex items-center justify-center gap-2"
              >
                <Phone className="w-3.5 h-3.5 text-stone-300" />
                <span>WhatsApp (+51 929 954 728)</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
