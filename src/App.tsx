import React, { useState } from 'react';
import ParticleSystem from './components/ParticleSystem';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import SuitesSection from './components/SuitesSection';
import TestimonialsSection from './components/TestimonialsSection';
import SocialProof from './components/SocialProof';
import ServicesFlipCards from './components/ServicesFlipCards';
import AmenitiesSection from './components/AmenitiesSection';
import ShowcaseGallery from './components/ShowcaseGallery';
import StoryAbout from './components/StoryAbout';
import CtaSection from './components/CtaSection';
import Footer from './components/Footer';
import BookingModal from './components/BookingModal';
import ExperienceDetailModal from './components/ExperienceDetailModal';
import { ServiceExperience } from './types';
import { ArrowRight, MessageSquare } from 'lucide-react';

export default function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedExperience, setSelectedExperience] = useState<ServiceExperience | null>(null);
  const [bookingPreselected, setBookingPreselected] = useState<ServiceExperience | null>(null);
  const [selectedRoomId, setSelectedRoomId] = useState<string | undefined>(undefined);

  const handleOpenBooking = (preselected?: ServiceExperience, roomId?: string) => {
    setBookingPreselected(preselected || null);
    setSelectedRoomId(roomId);
    setIsBookingOpen(true);
  };

  const handleExploreServices = () => {
    const el = document.getElementById('suites');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#1C221D] selection:bg-[#233526]/20 selection:text-[#18261A] relative overflow-x-hidden">
      {/* Subtle Warm Ambiance Particles */}
      <ParticleSystem />

      {/* Boutique Navigation Bar */}
      <Navbar onOpenBooking={() => handleOpenBooking()} />

      {/* Main Content Flow matching reference design */}
      <main className="relative z-10">
        {/* 1. Hero Section with Luxury Suite Background & Floating Booking Search Bar */}
        <HeroSection
          onOpenBooking={() => handleOpenBooking()}
          onExploreServices={handleExploreServices}
        />

        {/* 2. OUR ROOMS - Designed for rest. Curated for you. (4 room cards) */}
        <SuitesSection onOpenBooking={(roomId) => handleOpenBooking(undefined, roomId)} />

        {/* 3. GUEST REVIEWS - Loved by our guests (3 ivory testimonial cards) */}
        <TestimonialsSection />

        {/* 4. 4 Feature Badges Bar (Boutique Comfort, Prime Locations, Local Experiences, Safe & Secure) + Stats */}
        <SocialProof onOpenBooking={() => handleOpenBooking()} />

        {/* 5. 6 Interactive 3D Flip Cards (Santuarios & Experiences) */}
        <ServicesFlipCards
          onSelectExperience={(exp) => setSelectedExperience(exp)}
          onBookExperience={(exp) => handleOpenBooking(exp)}
        />

        {/* 6. World-Class Boutique Amenities */}
        <AmenitiesSection />

        {/* 7. Gallery of Spaces */}
        <ShowcaseGallery onOpenBooking={(roomId) => handleOpenBooking(undefined, roomId)} />

        {/* 8. Story / El Alma Wawa-Wasi Heritage */}
        <StoryAbout />

        {/* 9. Final Call to Action */}
        <CtaSection onOpenBooking={() => handleOpenBooking()} />
      </main>

      {/* 10. Boutique Footer */}
      <Footer />

      {/* Floating Action Pill (Bottom Right - Mobile Only) */}
      <div className="fixed bottom-6 right-6 z-40 flex items-center gap-3 md:hidden">
        <button
          onClick={() => handleOpenBooking()}
          className="px-5 py-3 rounded-full bg-[#233526] hover:bg-[#18261A] text-white text-xs font-semibold tracking-wider uppercase shadow-xl hover:shadow-2xl flex items-center gap-2 transition-all transform hover:scale-105 border border-white/20 cursor-pointer"
        >
          <span>Consultar Disponibilidad</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>

      {/* Interactive Modals */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        preselectedService={bookingPreselected}
        initialRoomId={selectedRoomId}
      />

      <ExperienceDetailModal
        experience={selectedExperience}
        onClose={() => setSelectedExperience(null)}
        onBook={(exp) => handleOpenBooking(exp)}
      />
    </div>
  );
}
