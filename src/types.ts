export interface ServiceExperience {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  imageUrl: string;
  shortDesc: string;
  fullDesc: string;
  tags: string[];
  priceFrom: number;
  duration: string;
  included: string[];
  highlights: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  city: string;
  quote: string;
  avatar: string;
  rating: number;
  stayType: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'suites' | 'spa' | 'gastronomia' | 'paisajes';
  imageUrl: string;
  description: string;
}

export interface BookingState {
  checkIn: string;
  checkOut: string;
  guests: number;
  suiteId: string;
  rituals: string[];
  guestName: string;
  guestEmail: string;
  guestPhone: string;
  notes: string;
}
