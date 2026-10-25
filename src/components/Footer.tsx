import { Car, ShieldCheck, Phone, MessageCircle, Mail, MapPin } from "lucide-react";
import { COMPANY } from "../config/company";

interface FooterProps {
  onBookClick: () => void;
}

export const Footer = ({ onBookClick }: FooterProps) => {
  return (
    <footer className="bg-[#07101C] text-slate-300 pt-16 pb-28 md:pb-16 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/10">
          
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-orange-500 to-amber-600 flex items-center justify-center text-white shadow-md shadow-orange-500/25">
                <Car className="w-5 h-5" />
              </div>
              <span className="text-xl font-bold text-white font-['Outfit']">
                Safe<span className="text-orange-500">Way</span> Travels
              </span>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              Providing reliable, comfortable, and trusted cab travel across Bengaluru and South India for 25 years. Chauffeur-driven sedans, MUVs, and group passenger vans.
            </p>

            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-orange-400 text-xs font-semibold">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>25 Years of Comfort & Trust</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white font-['Outfit'] tracking-wide uppercase">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#services" className="hover:text-orange-400 transition-colors">
                  Our Services
                </a>
              </li>
              <li>
                <a href="#vehicles" className="hover:text-orange-400 transition-colors">
                  Vehicle Fleet
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-orange-400 transition-colors">
                  About SafeWay
                </a>
              </li>
              <li>
                <a href="#safety" className="hover:text-orange-400 transition-colors">
                  Safety & Reliability
                </a>
              </li>
              <li>
                <button
                  onClick={onBookClick}
                  className="hover:text-orange-400 transition-colors cursor-pointer text-left"
                >
                  Book a Cab
                </button>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white font-['Outfit'] tracking-wide uppercase">
              Cab Services
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#services" className="hover:text-orange-400 transition-colors">
                  Local City Rides
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-orange-400 transition-colors">
                  BLR Airport Transfers
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-orange-400 transition-colors">
                  Outstation Trips
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-orange-400 transition-colors">
                  Round-Trip Packages
                </a>
              </li>
              <li>
                <a href="#vehicles" className="hover:text-orange-400 transition-colors">
                  Tempo Traveller Rental
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white font-['Outfit'] tracking-wide uppercase">
              Direct Contact
            </h4>
            <div className="space-y-2.5 text-xs">
              <a
                href={COMPANY.phoneUrl}
                className="flex items-center gap-2 hover:text-orange-400 transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-orange-400 shrink-0" />
                <span>{COMPANY.phoneDisplay}</span>
              </a>
              <a
                href={COMPANY.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-orange-400 transition-colors"
              >
                <MessageCircle className="w-3.5 h-3.5 text-[#25D366] shrink-0" />
                <span>WhatsApp: {COMPANY.whatsappDisplay}</span>
              </a>
              <a
                href={COMPANY.emailUrl}
                className="flex items-center gap-2 hover:text-orange-400 transition-colors break-all"
              >
                <Mail className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                <span>{COMPANY.email}</span>
              </a>
              <div className="flex items-start gap-2 text-slate-400">
                <MapPin className="w-3.5 h-3.5 text-orange-400 shrink-0 mt-0.5" />
                <span>{COMPANY.locationServed}</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar & Disclaimer */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>
            &copy; {new Date().getFullYear()} {COMPANY.name}. All rights reserved.
          </p>
          <p className="text-center sm:text-right">
            Price details available on request. Bookings are subject to vehicle and chauffeur availability.
          </p>
        </div>
      </div>
    </footer>
  );
};
