export interface CompanyInfo {
  name: string;
  tagline: string;
  locationServed: string;
  state: string;
  country: string;
  phone: string;
  phoneDisplay: string;
  whatsapp: string;
  whatsappDisplay: string;
  email: string;
  experienceYears: number;
  phoneUrl: string;
  whatsappUrl: string;
  emailUrl: string;
  priceNotice: string;
  generalWhatsappMessage: string;
}

export const GENERAL_WHATSAPP_MESSAGE =
  "Hi Safeway, I would like to get an instant quote for car/bus rental.";

export const COMPANY: CompanyInfo = {
  name: "SafeWay Travels",
  tagline: "25 Years of Comfort & Trust",
  locationServed: "Bengaluru, Karnataka, India",
  state: "Karnataka",
  country: "India",
  phone: "9980838845",
  phoneDisplay: "+91 99808 38845",
  whatsapp: "919980838845",
  whatsappDisplay: "+91 99808 38845",
  email: "ways63098@gmail.com",
  experienceYears: 25,
  phoneUrl: "tel:9980838845",
  generalWhatsappMessage: GENERAL_WHATSAPP_MESSAGE,
  whatsappUrl: `https://wa.me/919980838845?text=${encodeURIComponent(GENERAL_WHATSAPP_MESSAGE)}`,
  emailUrl: "mailto:ways63098@gmail.com",
  priceNotice: "Price details available on request",
};
