export interface ServiceItem {
  id: string;
  name: string;
  badge: string;
  shortDesc: string;
  fullDesc: string;
  features: string[];
  idealFor: string;
}

export const SERVICES: ServiceItem[] = [
  {
    id: "local",
    name: "Local City Rides",
    badge: "Bengaluru City",
    shortDesc: "Flexible point-to-point and hourly rental packages for hassle-free city travel.",
    fullDesc: "Navigate Bengaluru's bustling tech corridors, business meetings, and shopping districts with ease. Choose flexible packages or point-to-point city transfers with experienced local chauffeurs who know every shortcut.",
    features: [
      "Hourly packages & point-to-point transfers",
      "Experienced chauffeurs familiar with Bengaluru routes",
      "Clean, air-conditioned comfortable cabins",
      "Transparent pricing with no sudden surges"
    ],
    idealFor: "Office commutes, shopping trips, city meetings, family visits"
  },
  {
    id: "airport",
    name: "Airport Transfers",
    badge: "BLR Kempegowda Airport",
    shortDesc: "Timely, stress-free pickups and drops to Kempegowda International Airport (BLR).",
    fullDesc: "Ensure on-time airport arrivals and smooth late-night pickups. We track traffic corridors and schedule pickups to guarantee you never miss a flight or wait around after landing.",
    features: [
      "Punctual scheduled pickups & doorstep drop-offs",
      "Ample luggage room for family baggage",
      "Flight-schedule friendly (24x7 transfers)",
      "Assistance with luggage loading and unloading"
    ],
    idealFor: "Domestic & international flights, corporate flyers, holiday departures"
  },
  {
    id: "outstation",
    name: "Outstation Trips",
    badge: "Intercity & Highways",
    shortDesc: "Comfortable one-way and multiday highway journeys across Karnataka and South India.",
    fullDesc: "Embark on smooth highway drives with seasoned outstation drivers. Whether traveling to Mysore, Coorg, Ooty, Chikmagalur, Wayanad, or Tirupati, enjoy a safe, relaxed journey.",
    features: [
      "Expert highway drivers with safety-first focus",
      "Well-maintained vehicles tested for long-distance travel",
      "Flexible stopovers for meals and rest",
      "One-way and multi-day travel options available"
    ],
    idealFor: "Weekend getaways, hill stations, family vacations, business travel"
  },
  {
    id: "roundtrip",
    name: "Round-Trip Packages",
    badge: "Tour & Vacation",
    shortDesc: "Curated round-trip packages with dedicated cab and chauffeur for your entire itinerary.",
    fullDesc: "Keep the same trusted cab and dedicated chauffeur throughout your journey. Perfect for family sightseeing, pilgrimage circuits, and corporate retreats with total schedule freedom.",
    features: [
      "Dedicated cab and driver for your complete tour",
      "Customizable itineraries and flexible halts",
      "No rush — travel at your family's personal pace",
      "Transparent trip accounting with zero hidden extras"
    ],
    idealFor: "Pilgrimage circuits, heritage tours, leisure retreats, family road trips"
  }
];
