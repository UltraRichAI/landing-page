import { ServiceExperience, Testimonial, GalleryItem } from '../types';

export const HOTEL_INFO = {
  name: "MILI HOTEL",
  tagline: "Refugio místico y confort exclusivo en el corazón de la naturaleza",
  fullTagline: "Refugio místico y confort exclusivo en el corazón de los Andes sagrados",
  altitude: "850 msnm",
  location: "Ctra. Central Km. 42, Lima 15536",
  coordinates: "11.9286° S, 76.6784° W",
  phone: "+51 929 954 728",
  whatsapp: "51929954728",
  email: "reservas@milihotel.com",
  instagram: "@milihotel.pe",
  founded: "2021",
};

export const SERVICES_EXPERIENCES: ServiceExperience[] = [
  {
    id: "domos-panoramicos",
    title: "Domos Panorámicos de Altura",
    subtitle: "Arquitectura Geodésica & Cielo Estrellado",
    category: "Hospedaje de Lujo",
    imageUrl: "https://images.unsplash.com/photo-1587061949409-02df41d5e562?auto=format&fit=crop&w=1200&q=80",
    shortDesc: "Domo geodésico privado con cúpula transparente de 180°, cama King con textiles de baby alpaca y calefacción geotérmica.",
    fullDesc: "Despierta con la silueta imponente de las montañas sagradas y duerme bajo la Vía Láctea más limpia del planeta. Equipados con terraza privada, jacuzzi exterior de piedra andina, chimenea de bioetanol y telescopio astronómico.",
    tags: ["Vista 360°", "Cúpula Estelar", "Jacuzzi Privado", "Baby Alpaca"],
    priceFrom: 250,
    duration: "Por noche",
    included: [
      "Desayuno buffet andino orgánico",
      "Telescopio profesional en domo",
      "Jacuzzi privado climatizado",
      "Concierge místico personal 24/7"
    ],
    highlights: [
      "Cúpula de cristal templado acústico",
      "Calefacción por losa radiante solar",
      "Selección de infusiones nativas y bar premium"
    ]
  },
  {
    id: "spa-termal-andino",
    title: "Spa Termal & Aguas Sagradas",
    subtitle: "Hidroterapia de Altura & Masajes con Piedras Volcánicas",
    category: "Bienestar & Relajación",
    imageUrl: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80",
    shortDesc: "Circuito de pozas termales minerales al aire libre, saunas de eucalipto silvestre y rituales con aceites de muña y molle.",
    fullDesc: "Nuestras aguas emergen puras desde fuentes geotérmicas subterráneas a 38°C. Experimenta el masaje ancestral 'Kallpa' con cuarzos andinos y envolturas corporales en barro volcánico y arcilla roja de la cordillera.",
    tags: ["Aguas Termales", "Piedras Sagradas", "Sauna Herbal", "Aromaterapia"],
    priceFrom: 120,
    duration: "Sesión 90 - 120 min",
    included: [
      "Acceso ilimitado a 3 pozas termales de diferentes temperaturas",
      "Ritual de sauna seco y húmedo con eucalipto y muña",
      "Infusiones relajantes de hierbas silvestres",
      "Bata de lino orgánico y pantuflas térmicas"
    ],
    highlights: [
      "Aguas ricas en azufre, magnesio y cuarzo",
      "Terapeutas locales formados en saberes ancestrales",
      "Vista directa al nevado Verónica"
    ]
  },
  {
    id: "gastronomia-ancestral",
    title: "Gastronomía Ancestral de Altura",
    subtitle: "Cocina de Autor con Fuego Vivo & Huerto Orgánico",
    category: "Alta Gastronomía",
    imageUrl: "/assets/aistudio/Improve_hotel_website_image_quality_9f5729f5_2K_6b0bc88d.jpg",
    shortDesc: "Menú degustación de 7 tiempos diseñado por chefs cusqueños. Ingredientes recolectados a diario en nuestro huerto biodinámico.",
    fullDesc: "Una odisea culinaria que rinde tributo a la biodiversidad andina. Trucha de laguna de altura, papas nativas milenarias, quinua negra crujiente, quesos artesanales y maridaje exclusivo con vinos de altura y macerados de hierbas.",
    tags: ["7 Tiempos", "Huerto Orgánico", "Fuego Vivo", "Vinos de Altura"],
    priceFrom: 90,
    duration: "Cena 2.5 horas",
    included: [
      "Menú degustación de 7 tiempos",
      "Maridaje selecto o coctelería botánica sin alcohol",
      "Visita previa al huerto sensorial",
      "Postre andino bajo las estrellas junto a la fogata"
    ],
    highlights: [
      "100% ingredientes de origen andino sostenible",
      "Opciones veganas y sin gluten de alta cocina",
      "Cava subterránea en roca natural"
    ]
  },
  {
    id: "ceremonia-pachamama",
    title: "Ritual Místico del Pago a la Tierra",
    subtitle: "Conexión Espiritual con Sabios Andinos",
    category: "Mística & Espiritualidad",
    imageUrl: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1200&q=80",
    shortDesc: "Ceremonia ancestral de gratitud a la Madre Tierra (Pachamama) y a los Apus tutelares guiada por un sabio Paqo andino.",
    fullDesc: "Participa en un ritual sagrado milenario con hojas de coca (Kintu), flores nativas, incienso de copal y semillas sagradas. Una experiencia transformadora de sanación, intención y conexión con la energía de la montaña.",
    tags: ["Sabio Paqo", "Hojas de Coca", "Fuego Sagrado", "Sanación"],
    priceFrom: 80,
    duration: "Ceremonia 2 horas",
    included: [
      "Ceremonia privada con Maestro Paqo tradicional",
      "Lectura personalizada de hojas de coca",
      "Ofrenda tradicional elaborada a mano",
      "Música ceremonial con instrumentos de viento andinos"
    ],
    highlights: [
      "Espacio ceremonial circular consagrado",
      "Traducción bilingüe (Quechua / Español / Inglés)",
      "Ambiente de absoluta reverencia y serenidad"
    ]
  },
  {
    id: "expedicion-lagunas",
    title: "Expediciones a Cumbres & Lagunas",
    subtitle: "Trekking Privado & Picnic Gourmet en Altura",
    category: "Aventura Exclusiva",
    imageUrl: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=80",
    shortDesc: "Caminatas personalizadas a lagunas glaciares turquesas y vestigios arqueológicos poco explorados con guías de montaña expertos.",
    fullDesc: "Recorre senderos milenarios rodeados de bosques de queñuales y cascadas cristalinas. Al llegar a la cumbre, te espera un picnic gourmet con vista panorámica a la cordillera y servicio de té caliente aromatizado.",
    tags: ["Laguna Glaciar", "Guía Experto", "Picnic Gourmet", "Senderos Secretos"],
    priceFrom: 130,
    duration: "Excursión 5 - 7 horas",
    included: [
      "Transporte privado 4x4 todoterreno",
      "Guía de alta montaña certificado y kit de oxígeno",
      "Almuerzo campestre gourmet con cristalería fina",
      "Bastones de trekking de fibra de carbono"
    ],
    highlights: [
      "Rutas privadas alejadas del turismo masivo",
      "Avistamiento de fauna andina (cóndores, vicuñas, vizcachas)",
      "Fotografía profesional de recuerdo"
    ]
  },
  {
    id: "observatorio-estelar",
    title: "Observatorio & Noche Cósmica",
    subtitle: "Cosmovisión Andina & Fogata de Historias",
    category: "Astronomía & Noche",
    imageUrl: "https://images.unsplash.com/photo-1506703719100-a0f3a48c0f86?auto=format&fit=crop&w=1200&q=80",
    shortDesc: "Sesión nocturna de astronomía andina en nuestro mirador elevado con telescopio motorizado y degustación de destilados.",
    fullDesc: "Descubre la 'Yacana' (la llama celestial) y las constelaciones oscuras que guiaban a los incas para sus siembras. Alrededor del fogón central, degusta infusiones calientes, chocolates artesanales cusqueños y destilados de caña de altura.",
    tags: ["Cosmovisión Inca", "Telescopio 4K", "Fogata Sagrada", "Cata de Pisco"],
    priceFrom: 70,
    duration: "Sesión 90 min",
    included: [
      "Uso de telescopio computarizado de alta gama",
      "Relato de mitología y constelaciones quechuas",
      "Cata de 3 piscos artesanales macerados con hierbas de altura",
      "Chocolates cusqueños 75% cacao y mantas térmicas"
    ],
    highlights: [
      "Cielo certificado Starlight con nula contaminación lumínica",
      "Fotografía astrológica de recuerdo",
      "Fogón hundido de piedra con cojines de lana"
    ]
  }
];

export const STATS = [
  { value: "99.8%", label: "Calificación de Huéspedes", detail: "Basado en más de 650 reseñas verificadas" },
  { value: "Km. 42", label: "Ubicación Privilegiada", detail: "Ctra. Central Km. 42, Lima 15536" },
  { value: "100%", label: "Confort & Naturaleza", detail: "Arquitectura y descanso con estilo boutique" },
  { value: "8+", label: "Habitaciones Exclusivas", detail: "Máxima privacidad y atención personalizada" }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "1",
    name: "Dra. Valentina Arboleda",
    role: "Arquitecta Bioclimática",
    city: "Madrid, España",
    quote: "Dormir en la suite panorámica mirando la noche estrellada mientras el calor del refugio te cobija es una experiencia que te renueva por completo. Mili Hotel es la definición perfecta del verdadero confort y descanso.",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
    rating: 5,
    stayType: "Estadía de 4 noches en Suite Master"
  },
  {
    id: "2",
    name: "Jean-Pierre & Mathilde Leroy",
    role: "Viajeros & Críticos Gastronómicos",
    city: "Lyon, Francia",
    quote: "La cena degustación junto a la fogata y las aguas termales después del paseo nos dejaron fascinados. El respeto por el entorno y la atención al detalle superan a cualquier hotel convencional.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
    rating: 5,
    stayType: "Experiencia Gourmet & Spa Andino"
  },
  {
    id: "3",
    name: "Mateo Silva-Santisteban",
    role: "Emprendedor Tech & Fotógrafo",
    city: "Lima, Perú",
    quote: "El ritual de bienestar y meditación me reconectó por completo. La paz que se respira aquí, el silencio del valle y la calidez humana del equipo de Mili Hotel son inigualables.",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80",
    rating: 5,
    stayType: "Retiro Místico & Fotografía Estelar"
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "habitacion-individual",
    title: "Habitación Individual",
    category: "suites",
    imageUrl: "/assets/aistudio/Enhancing_hotel_image_quality_0d3f5efd_2K_ac0a43c2.jpg",
    description: "Confort acogedor, privacidad y tranquilidad para estancias individuales con todo lo necesario para descansar."
  },
  {
    id: "habitacion-matrimonial",
    title: "Habitación Matrimonial",
    category: "suites",
    imageUrl: "/assets/aistudio/Enhancing_image_for_hotel_website_e2cf389a_2K_db9c9505.jpg",
    description: "Ambiente cálido y acogedor con cama matrimonial, perfecto para parejas en busca de descanso y desconexión."
  },
  {
    id: "habitacion-matrimonial-premium",
    title: "Habitación Matrimonial Premium",
    category: "suites",
    imageUrl: "/assets/aistudio/Enhancing_hotel_website_image_qu__3f30c6b6_2K_83f193e7.jpg",
    description: "Mayor amplitud, luz natural y acabados exclusivos para una experiencia de máximo confort y relax."
  },
  {
    id: "habitacion-doble",
    title: "Habitación Doble",
    category: "suites",
    imageUrl: "/assets/aistudio/Enhance_hotel_website_image_quality_3fde160c_2K_e1aaf7a5.jpg",
    description: "Dos camas espaciosas, ideal para amigos, compañeros de viaje o familias que visitan el hotel."
  },
  {
    id: "exteriores-piscina-central",
    title: "Piscina Central & Edificio Principal",
    category: "spa",
    imageUrl: "/assets/aistudio/Enhancing_image_for_hotel_website_1a6e0892_2K_dcdc5ba0.jpg",
    description: "Amplia piscina exterior con acabados antideslizantes, rodeada por las instalaciones del hospedaje y un clima soleado ideal."
  },
  {
    id: "exteriores-terraza-mirador",
    title: "Terraza Mirador & Mesas al Aire Libre",
    category: "spa",
    imageUrl: "/assets/aistudio/Put_the_original_tables_back._eb7cda40_2K_fb81b8e8.jpg",
    description: "Espaciosa terraza con piso pulido, mesas de madera y baranda panorámica con vista directa a la piscina y las montañas."
  },
  {
    id: "exteriores-piscina-panoramica",
    title: "Piscina Recreativa & Entorno Andino",
    category: "spa",
    imageUrl: "/assets/aistudio/Enhancing_hotel_image_quality_4123f301_2K_5a3d4411.jpg",
    description: "Aguas cristalinas bajo el sol del valle, el lugar predilecto para desconectar, refrescarse y relajarse rodeado de imponentes montañas."
  },
  {
    id: "exteriores-solarium",
    title: "Área de Solarium & Descanso",
    category: "spa",
    imageUrl: "/assets/aistudio/Enhancing_image_for_hotel_website_464fd952_2K_64f52769.jpg",
    description: "Espacio al aire libre diseñado para disfrutar de los días soleados con total comodidad y tranquilidad."
  },
  {
    id: "gastronomia-platos",
    title: "Platos Típicos & Menú Casero",
    category: "gastronomia",
    imageUrl: "/assets/aistudio/Improve_hotel_website_image_quality_9f5729f5_2K_6b0bc88d.jpg",
    description: "Deliciosos platos preparados con sazón tradicional, acompañados de pan fresco, infusiones calientes y salsas caseras."
  },
  {
    id: "gastronomia-terraza",
    title: "Terraza & Restaurant Mily",
    category: "gastronomia",
    imageUrl: "/assets/aistudio/Enhancing_image_quality_for_hote__52f2965f_2K_36399f9e.jpg",
    description: "Disfruta de tus comidas al aire libre en nuestra agradable terraza campestre con vista a las montañas y jardines floridos."
  },
  {
    id: "gastronomia-salon",
    title: "Salón Comedor & Cafetería",
    category: "gastronomia",
    imageUrl: "/assets/aistudio/Enhancing_image_for_hotel_website_fedd0501_2K_151ecb4e.jpg",
    description: "Ambiente cálido y acogedor para compartir desayunos, almuerzos y cenas en familia con una esmerada atención."
  },
  {
    id: "entorno-fachada",
    title: "Fachada & Entrada Principal",
    category: "paisajes",
    imageUrl: "/assets/aistudio/Enhancing_hotel_image_quality_a4595d78_2K_70dc1d8a.jpg",
    description: "Ingreso principal con portón ornamental, áreas verdes y letrero con todos nuestros servicios: Piscina, Cochera, TV Cable y WiFi."
  },
  {
    id: "entorno-balcon-valle",
    title: "Balcón Panorámico hacia el Valle",
    category: "paisajes",
    imageUrl: "/assets/aistudio/2_87da29a9.jpeg",
    description: "Impresionante vista desde el balcón superior hacia la carretera central, el valle y las montañas que abrazan el hospedaje."
  },
  {
    id: "entorno-panoramica-cordillera",
    title: "Perspectiva Panorámica de las Montañas",
    category: "paisajes",
    imageUrl: "/assets/aistudio/5_60e12734.jpeg",
    description: "La majestuosidad de la cordillera andina y el cielo despejado que acompañan cada amanecer y atardecer."
  },
  {
    id: "entorno-mirador-habitaciones",
    title: "Mirador Privado desde las Habitaciones",
    category: "paisajes",
    imageUrl: "/assets/aistudio/1_761b2e1d.jpeg",
    description: "Terraza exterior con suelo cerámico y baranda de acero, perfecta para respirar aire puro y contemplar el paisaje."
  },
  {
    id: "entorno-jardines-alturas",
    title: "Jardines Interiores & Entorno Natural",
    category: "paisajes",
    imageUrl: "/assets/aistudio/11_4ac3457e.jpeg",
    description: "Perspectiva elevada de las áreas verdes interiores, techos tradicionales y los imponentes cerros circundantes."
  }
];

export const AMENITIES = [
  {
    icon: "Waves",
    title: "Piscina",
    desc: "Disfruta de nuestra piscina durante tu estadía. Sumérgete en aguas cristalinas y disfruta de un momento refrescante y relajante bajo el sol, el lugar ideal para desconectar de la rutina y renovar tus energías."
  },
  {
    icon: "Wifi",
    title: "WiFi Gratis",
    desc: "Mantente conectado durante toda tu visita. Disfruta de internet inalámbrico de alta velocidad sin costo adicional en todas nuestras instalaciones para compartir tus momentos o trabajar con total comodidad."
  },
  {
    icon: "Tv",
    title: "Entretenimiento",
    desc: "Disfruta de televisión y entretenimiento. Relájate en tu habitación con pantallas de alta definición y una variada selección de canales pensados para tu confort y descanso después de un día lleno de experiencias."
  },
  {
    icon: "Flame",
    title: "Zona de Parrilla",
    desc: "Comparte momentos especiales con amigos y seres queridos en nuestra amplia área de parrillas al aire libre. El rincón perfecto para celebrar, preparar deliciosos asados y vivir veladas llenas de alegría."
  },
  {
    icon: "Utensils",
    title: "Restaurante",
    desc: "Creamos experiencias culinarias inolvidables para ti. Deléitate con platos auténticos, ingredientes frescos de primera calidad y una atención cálida que conquistará tu paladar en cada momento del día."
  },
  {
    icon: "Car",
    title: "Cochera",
    desc: "Contamos con cochera para que puedas estacionar tu vehículo de forma cómoda y segura durante tu estadía. Disfruta con total tranquilidad sabiendo que tu movilidad está resguardada dentro del establecimiento."
  }
];
