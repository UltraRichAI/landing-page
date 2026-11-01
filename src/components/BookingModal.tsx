import React, { useState } from 'react';
import { HOTEL_INFO } from '../data/hotelData';
import { ServiceExperience } from '../types';
import { X, Calendar, Users, Check, MessageCircle } from 'lucide-react';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedService?: ServiceExperience | null;
  initialRoomId?: string;
}

const SUITE_RATES: Record<string, { name: string }> = {
  'habitacion-individual': { name: 'Habitación Individual' },
  'habitacion-matrimonial': { name: 'Habitación Matrimonial' },
  'habitacion-matrimonial-premium': { name: 'Habitación Matrimonial Premium' },
  'habitacion-doble': { name: 'Habitación Doble' },
};

export default function BookingModal({ isOpen, onClose, preselectedService, initialRoomId }: BookingModalProps) {
  if (!isOpen) return null;

  const today = new Date().toISOString().split('T')[0];
  const tomorrow = new Date(Date.now() + 86400000 * 2).toISOString().split('T')[0];

  const [checkIn, setCheckIn] = useState(today);
  const [checkOut, setCheckOut] = useState(tomorrow);
  const [suiteType, setSuiteType] = useState<string>(() => {
    if (initialRoomId && SUITE_RATES[initialRoomId]) return initialRoomId;
    if (preselectedService && SUITE_RATES[preselectedService.id]) return preselectedService.id;
    return 'habitacion-individual';
  });
  const [guests, setGuests] = useState(2);
  const [selectedRituals, setSelectedRituals] = useState<string[]>(
    preselectedService && preselectedService.category !== 'Hospedaje de Lujo'
      ? [preselectedService.id]
      : ['spa-termal-andino']
  );
  const [submitted, setSubmitted] = useState(false);

  const calculateNights = () => {
    const d1 = new Date(checkIn);
    const d2 = new Date(checkOut);
    const diff = Math.ceil((d2.getTime() - d1.getTime()) / (1000 * 60 * 60 * 24));
    return diff > 0 ? diff : 1;
  };

  const nights = calculateNights();
  const suiteRates = SUITE_RATES;
  const currentSuite = suiteRates[suiteType] || suiteRates['habitacion-individual'];

  const ritualsList = [
    { id: 'spa-termal-andino', name: 'Spa & Relajación (Circuito 90 min)' },
    { id: 'gastronomia-ancestral', name: 'Cena Degustación de Autor' },
    { id: 'ceremonia-pachamama', name: 'Experiencia Mística & Meditación' },
    { id: 'expedicion-lagunas', name: 'Paseo Guiado & Paisajes' },
  ];

  const toggleRitual = (id: string) => {
    setSelectedRituals((prev) =>
      prev.includes(id) ? prev.filter((r) => r !== id) : [...prev, id]
    );
  };

  const handleSendWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    const ritualsNames = selectedRituals
      .map((rId) => ritualsList.find((r) => rId === r.id)?.name)
      .filter(Boolean)
      .join(', ');

    const msg = `🏨 *CONSULTA DE DISPONIBILIDAD - MILI HOTEL*
----------------------------------------
📅 *Llegada:* ${checkIn}
📅 *Salida:* ${checkOut} (${nights} ${nights === 1 ? 'noche' : 'noches'})
👥 *Huéspedes:* ${guests} ${guests === 1 ? 'huésped' : 'huéspedes'}
🛏️ *Habitación:* ${currentSuite.name}
${ritualsNames ? `✨ *Experiencias seleccionadas:* ${ritualsNames}\n` : ''}📍 *Ubicación:* ${HOTEL_INFO.location}
----------------------------------------
Hola, deseo consultar la disponibilidad para estas fechas.`;

    const encoded = encodeURIComponent(msg);
    window.open(`https://wa.me/51929954728?text=${encoded}`, '_blank');
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/75 backdrop-blur-md overflow-y-auto">
      <div className="relative max-w-2xl w-full max-h-[92vh] overflow-y-auto my-auto bg-[#FCFBF9] text-[#1C221D] border border-[#E8E1D3] rounded-2xl sm:rounded-3xl p-4 sm:p-8 shadow-2xl">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 sm:top-6 sm:right-6 z-20 p-2 rounded-full bg-[#EFECE3] text-[#1C221D] hover:bg-[#233526] hover:text-white cursor-pointer transition-colors"
          aria-label="Cerrar modal"
        >
          <X className="w-4 h-4" />
        </button>

        {submitted ? (
          <div className="py-12 text-center space-y-6">
            <div className="w-16 h-16 rounded-full bg-[#25D366]/10 border border-[#25D366]/30 flex items-center justify-center mx-auto text-[#25D366]">
              <MessageCircle className="w-8 h-8 fill-[#25D366]/20" />
            </div>
            <div className="space-y-2">
              <h3 className="text-2xl font-bold font-serif-title text-[#1C221D]">
                ¡Consulta de Disponibilidad Abierta en WhatsApp!
              </h3>
              <p className="text-sm text-[#475149] max-w-md mx-auto">
                Tu consulta con las fechas y habitación ha sido enviada al <strong>+51 929 954 728</strong>. Te responderemos en minutos.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
              <button
                type="button"
                onClick={() => setSubmitted(false)}
                className="w-full sm:w-auto px-6 py-2.5 rounded-xl border border-[#D2CBB5] text-xs font-semibold text-[#1C221D] hover:bg-[#EFECE3] cursor-pointer"
              >
                Modificar Fechas
              </button>
              <button
                type="button"
                onClick={onClose}
                className="w-full sm:w-auto px-8 py-2.5 rounded-xl bg-[#233526] text-white text-xs font-semibold tracking-wider uppercase hover:bg-[#18261A] cursor-pointer"
              >
                Cerrar
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSendWhatsApp} className="space-y-6 text-left">
            
            {/* Header */}
            <div>
              <h3 className="text-2xl sm:text-3xl font-serif-title font-bold text-[#1C221D]">
                Consultar Disponibilidad
              </h3>
            </div>

            {/* Step 1: Dates & Guests */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="space-y-1">
                <label className="text-[11px] font-medium text-[#475149] flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5 text-[#233526]" />
                  <span>Llegada</span>
                </label>
                <input
                  type="date"
                  required
                  value={checkIn}
                  onChange={(e) => setCheckIn(e.target.value)}
                  className="w-full bg-[#FFFFFF] border border-[#E8E1D3] focus:border-[#233526] rounded-xl px-3 py-2 text-xs text-[#1C221D]"
                />
              </div>

              <div className="space-y-1">
                <label className="text-[11px] font-medium text-[#475149] flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5 text-[#233526]" />
                  <span>Salida</span>
                </label>
                <input
                  type="date"
                  required
                  value={checkOut}
                  onChange={(e) => setCheckOut(e.target.value)}
                  className="w-full bg-[#FFFFFF] border border-[#E8E1D3] focus:border-[#233526] rounded-xl px-3 py-2 text-xs text-[#1C221D]"
                />
              </div>

              <div className="space-y-1">
                <label className="text-[11px] font-medium text-[#475149] flex items-center gap-1">
                  <Users className="w-3.5 h-3.5 text-[#233526]" />
                  <span>Huéspedes</span>
                </label>
                <select
                  value={guests}
                  onChange={(e) => setGuests(Number(e.target.value))}
                  className="w-full bg-[#FFFFFF] border border-[#E8E1D3] focus:border-[#233526] rounded-xl px-3 py-2 text-xs text-[#1C221D] cursor-pointer"
                >
                  <option value={1}>1 Huésped</option>
                  <option value={2}>2 Huéspedes</option>
                  <option value={3}>3 Huéspedes</option>
                  <option value={4}>4 Huéspedes</option>
                </select>
              </div>
            </div>

            {/* Step 2: Room Selection */}
            <div className="space-y-1.5">
              <label className="text-xs font-bold font-serif-title text-[#1C221D] uppercase tracking-wider block">
                Habitación ({nights} {nights === 1 ? 'noche' : 'noches'}):
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                {Object.entries(suiteRates).map(([key, item]) => (
                  <div
                    key={key}
                    onClick={() => setSuiteType(key)}
                    className={`p-3.5 rounded-xl border cursor-pointer transition-all flex flex-col justify-center items-center text-center min-h-[64px] ${
                      suiteType === key
                        ? 'bg-[#233526] text-white border-[#233526] shadow-sm ring-1 ring-[#233526]'
                        : 'bg-[#FFFFFF] text-[#1C221D] border-[#E8E1D3] hover:border-[#D2CBB5]'
                    }`}
                  >
                    <span className="text-xs font-bold block leading-snug">
                      {item.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Step 3: Add-on Experiences (Optional) */}
            <div className="space-y-1.5">
              <label className="text-xs font-bold font-serif-title text-[#1C221D] uppercase tracking-wider block">
                Experiencias opcionales:
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {ritualsList.map((rit) => {
                  const isChecked = selectedRituals.includes(rit.id);
                  return (
                    <div
                      key={rit.id}
                      onClick={() => toggleRitual(rit.id)}
                      className={`p-2.5 rounded-xl border flex items-center justify-between cursor-pointer transition-all ${
                        isChecked
                          ? 'bg-[#EFECE3] border-[#233526] text-[#1C221D]'
                          : 'bg-[#FFFFFF] border-[#E8E1D3] text-[#6E7970] hover:border-[#D2CBB5]'
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <div className={`w-4 h-4 rounded border flex items-center justify-center ${
                          isChecked ? 'bg-[#233526] border-[#233526] text-white' : 'border-[#D2CBB5]'
                        }`}>
                          {isChecked && <Check className="w-3 h-3 stroke-[3]" />}
                        </div>
                        <span className="text-xs">{rit.name}</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Consultation Action Bar - DIRECT CONSULTATION BUTTON (NO NAME/EMAIL/PHONE INPUTS) */}
            <div className="p-4 sm:p-5 rounded-2xl bg-[#EFECE3] border border-[#E2DCCE] flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-left w-full sm:w-auto">
                <span className="text-[11px] text-[#6E7970] block uppercase tracking-wider font-semibold">Habitación Seleccionada:</span>
                <span className="text-base font-serif-title font-bold text-[#1C221D] block">
                  {currentSuite.name}
                </span>
                <span className="text-xs text-[#475149] block">
                  {nights} {nights === 1 ? 'noche' : 'noches'} • {guests} {guests === 1 ? 'huésped' : 'huéspedes'}
                </span>
              </div>

              <button
                type="submit"
                className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-[#233526] hover:bg-[#18261A] text-white text-xs sm:text-sm font-semibold tracking-wider uppercase flex items-center justify-center gap-2 cursor-pointer shadow-lg hover:shadow-xl transition-all"
              >
                <MessageCircle className="w-4 h-4 text-[#D4AF37]" />
                <span>CONSULTAR DISPONIBILIDAD</span>
              </button>
            </div>

          </form>
        )}

      </div>
    </div>
  );
}
