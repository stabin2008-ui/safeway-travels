export type VehicleCategory = "All" | "Sedan" | "SUV/MUV" | "Compact City Cab" | "Group Vehicle";

export interface Vehicle {
  id: string;
  name: string;
  category: "Sedan" | "SUV/MUV" | "Compact City Cab" | "Group Vehicle";
  subCategories: string[];
  tagline: string;
  exteriorImg: string;
  interiorImg: string;
  features: string[];
  availability: "Available Daily" | "On Request";
  priceNotice: string;
  description: string;
}

export const VEHICLES: Vehicle[] = [
  {
    id: "toyota-etios",
    name: "Toyota Etios",
    category: "Sedan",
    subCategories: ["Sedan", "Compact City Cab"],
    tagline: "Comfortable, economical, and trusted sedan for city rides and airport transfers.",
    exteriorImg: "/images/vehicles/etios-ext.jpg",
    interiorImg: "/images/vehicles/etios-int.jpg",
    features: [
      "Air Conditioning",
      "Spacious Rear Legroom",
      "Generous Luggage Boot",
      "Smooth & Quiet Ride",
      "Sanitized Before Every Trip"
    ],
    availability: "Available Daily",
    priceNotice: "Price details available on request",
    description: "The gold standard for reliable Indian cab travel. Renowned for its generous legroom, clean boot space, and smooth suspension across city streets and highways."
  },
  {
    id: "innova-crysta",
    name: "Toyota Innova Crysta",
    category: "SUV/MUV",
    subCategories: ["SUV/MUV"],
    tagline: "The premier long-distance MPV with plush seating and exceptional highway comfort.",
    exteriorImg: "/images/vehicles/innova-crysta-ext.jpg",
    interiorImg: "/images/vehicles/innova-crysta-int.jpg",
    features: [
      "Plush Captain / Bench Seating",
      "Dual-Zone Powerful Air Conditioning",
      "Exceptional High-Speed Stability",
      "Huge Luggage Capacity",
      "Sanitized Before Every Trip"
    ],
    availability: "Available Daily",
    priceNotice: "Price details available on request",
    description: "Preferred choice for executive airport transfers, family outstation getaways, and VIP journeys. Superior road presence, whisper-quiet cabin, and plush comfort."
  },
  {
    id: "maruti-ertiga",
    name: "Maruti Suzuki Ertiga",
    category: "SUV/MUV",
    subCategories: ["SUV/MUV", "Compact City Cab"],
    tagline: "Smart and versatile 3-row MUV perfect for small families and city commutes.",
    exteriorImg: "/images/vehicles/ertiga-ext.jpg",
    interiorImg: "/images/vehicles/ertiga-int.jpg",
    features: [
      "Versatile 3-Row Seating",
      "Independent Roof-Mounted AC Vents",
      "Smooth City Maneuverability",
      "Luggage Flexibility",
      "Sanitized Before Every Trip"
    ],
    availability: "Available Daily",
    priceNotice: "Price details available on request",
    description: "An ideal balance of compact exterior dimensions with 3-row spaciousness. Ideal for city tours, family airport transfers, and economical outstation getaways."
  },
  {
    id: "toyota-rumion",
    name: "Toyota Rumion",
    category: "SUV/MUV",
    subCategories: ["SUV/MUV"],
    tagline: "Modern, refined 7-seater MPV engineered for dependable family journeys.",
    exteriorImg: "/images/vehicles/rumion-ext.jpg",
    interiorImg: "/images/vehicles/rumion-int.jpg",
    features: [
      "Modern Toyota Reliability",
      "Dual Air Conditioning",
      "Comfortable Cushioning & Legroom",
      "Smooth Automatic / Manual Options",
      "Sanitized Before Every Trip"
    ],
    availability: "Available Daily",
    priceNotice: "Price details available on request",
    description: "The modern Toyota MPV combining sleek style, dependable mechanics, and family-first cabin comfort for local and outstation trips."
  },
  {
    id: "innova-hycross",
    name: "Toyota Innova Hycross",
    category: "SUV/MUV",
    subCategories: ["SUV/MUV"],
    tagline: "Next-generation luxury MPV offering Ottoman seating and whisper-quiet hybrid travel.",
    exteriorImg: "/images/vehicles/innova-hycross-ext.jpg",
    interiorImg: "/images/vehicles/innova-hycross-int.jpg",
    features: [
      "Ultra-Smooth Hybrid Drivetrain",
      "Luxury Captain Chairs with Recline",
      "Panoramic Sunroof & Ambient Light",
      "State-of-the-art Safety Features",
      "Sanitized Before Every Trip"
    ],
    availability: "Available Daily",
    priceNotice: "Price details available on request",
    description: "Experience modern luxury. The Innova Hycross provides business-class ride comfort, opulent interior appointments, and silent cruising across Karnataka's highways."
  },
  {
    id: "tempo-traveller",
    name: "Tempo Traveller",
    category: "Group Vehicle",
    subCategories: ["Group Vehicle"],
    tagline: "Spacious luxury passenger van for extended family tours, pilgrimage groups, and corporate teams.",
    exteriorImg: "/images/vehicles/tempo-ext.jpg",
    interiorImg: "/images/vehicles/tempo-int.jpg",
    features: [
      "Pushback Reclining Seats with Armrests",
      "High Ceiling with Standing Room",
      "Dedicated High-Capacity Air Conditioning",
      "Separate Luggage Compartment",
      "Sanitized Before Every Trip"
    ],
    availability: "On Request",
    priceNotice: "Price details available on request",
    description: "Specially configured luxury group travel van for large families, wedding guests, or corporate teams traveling together with complete luggage accommodation."
  }
];
