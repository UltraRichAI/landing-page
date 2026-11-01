import React, { useState } from 'react';
import { GALLERY_ITEMS } from '../data/hotelData';
import { GalleryItem } from '../types';
import { Maximize2, X } from 'lucide-react';

interface ShowcaseGalleryProps {
  onOpenBooking?: (roomId?: string) => void;
}

export default function ShowcaseGallery({ onOpenBooking }: ShowcaseGalleryProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('todos');
  const [activeItem, setActiveItem] = useState<GalleryItem | null>(null);

  const categories = [
    { id: 'todos', label: 'Todos los Espacios' },
    { id: 'suites', label: 'Habitaciones' },
    { id: 'spa', label: 'Espacios Exteriores' },
    { id: 'gastronomia', label: 'Gastronomía' },
    { id: 'paisajes', label: 'Entorno' },
  ];

  const filteredItems = selectedCategory === 'todos'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter(item => item.category === selectedCategory);

  const getCategoryLabel = (category: string) => {
    switch (category) {
      case 'suites':
        return 'Habitación';
      case 'spa':
        return 'Espacios Exteriores';
      case 'gastronomia':
        return 'Gastronomía';
      case 'paisajes':
        return 'Entorno';
      default:
        return category;
    }
  };

  return (
    <section id="galeria" className="relative py-24 px-4 sm:px-6 lg:px-8 bg-[#FAF8F5] text-[#1C221D] border-t border-[#E8E1D3]/80">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#E8E1D3] pb-8">
          <div className="space-y-3 max-w-2xl">
            <div className="flex items-center gap-2">
              <span className="h-[1px] w-6 bg-[#D2CBB5]" />
              <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#6E7970]">
                GALERÍA DEL HOTEL
              </span>
            </div>
            
            <h2 className="text-3xl sm:text-5xl font-serif-title font-normal text-[#1C221D] tracking-tight">
              Un Vistazo a Mili Hotel
            </h2>
            <p className="text-sm sm:text-base text-[#475149] font-light leading-relaxed">
              Explora nuestras habitaciones y la atmósfera única de nuestro hotel boutique.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all whitespace-nowrap cursor-pointer ${
                  selectedCategory === cat.id
                    ? 'bg-[#233526] text-white shadow-md'
                    : 'bg-[#FCFBF9] border border-[#E8E1D3] text-[#6E7970] hover:text-[#1C221D] hover:border-[#233526]/30'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setActiveItem(item)}
              className="group relative rounded-2xl overflow-hidden aspect-[4/3] bg-[#E8E1D3] border border-[#E8E1D3] hover:border-[#233526]/40 cursor-pointer shadow-sm hover:shadow-xl transition-all duration-500"
            >
              <img
                src={item.imageUrl}
                alt={item.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent opacity-75 group-hover:opacity-95 transition-opacity" />

              {/* Hover Badge Icon */}
              <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/50 backdrop-blur-md border border-white/20 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <Maximize2 className="w-4 h-4" />
              </div>

              {/* Title & Info */}
              <div className="absolute bottom-0 left-0 right-0 p-4 space-y-1 text-white">
                <span className="text-[10px] font-mono uppercase tracking-widest text-amber-200/90 font-semibold block">
                  {getCategoryLabel(item.category)}
                </span>
                <h3 className="text-base font-serif-title font-bold text-white line-clamp-1">
                  {item.title}
                </h3>
                <p className="text-xs text-stone-300 line-clamp-2 font-light opacity-90">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      {activeItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
          <div className="relative max-w-4xl w-full bg-[#FCFBF9] p-6 rounded-2xl border border-[#E8E1D3] shadow-2xl text-[#1C221D]">
            <button
              onClick={() => setActiveItem(null)}
              className="absolute top-4 right-4 p-2 rounded-full bg-[#EFECE3] hover:bg-[#233526] hover:text-white text-[#1C221D] transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="rounded-xl overflow-hidden aspect-[16/10] mb-5 bg-[#E8E1D3]">
              <img
                src={activeItem.imageUrl}
                alt={activeItem.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 text-left">
              <div className="space-y-1.5 max-w-2xl">
                <span className="text-xs font-mono uppercase text-[#6E7970] font-semibold">
                  {getCategoryLabel(activeItem.category)}
                </span>
                <h3 className="text-2xl font-serif-title font-bold text-[#1C221D]">
                  {activeItem.title}
                </h3>
                <p className="text-sm text-[#475149] font-light leading-relaxed">
                  {activeItem.description}
                </p>
              </div>

              {onOpenBooking && (
                <button
                  onClick={() => {
                    const roomId = activeItem.category === 'suites' ? activeItem.id : undefined;
                    setActiveItem(null);
                    onOpenBooking(roomId);
                  }}
                  className="px-5 py-2.5 rounded-xl bg-[#233526] hover:bg-[#18261A] text-white text-xs font-semibold tracking-wider uppercase shadow-md transition-all whitespace-nowrap cursor-pointer shrink-0"
                >
                  Consultar Disponibilidad
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
