import { useState, useEffect } from "react";
import { Phone, MessageCircle, Menu, X, Car, ShieldCheck } from "lucide-react";
import { COMPANY } from "../config/company";

interface HeaderProps {
  onBookClick: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onBookClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Services", href: "#services" },
    { name: "Vehicles", href: "#vehicles" },
    { name: "About Us", href: "#about" },
    { name: "Safety & Reliability", href: "#safety" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "glass-nav py-3 shadow-xl"
          : "bg-[#0B192C]/95 backdrop-blur-md py-4 border-b border-white/10"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo & Tagline */}
          <a href="#" className="flex items-center gap-3 group focus:outline-none">
            <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-orange-500 to-amber-600 flex items-center justify-center text-white shadow-lg shadow-orange-500/25 group-hover:scale-105 transition-transform">
              <Car className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xl sm:text-2xl font-bold tracking-tight text-white font-['Outfit']">
                  Safe<span className="text-orange-500">Way</span>
                </span>
                <span className="hidden sm:inline-flex items-center gap-1 text-[11px] font-semibold tracking-wider uppercase px-2 py-0.5 rounded-full bg-orange-500/15 text-orange-400 border border-orange-500/30">
                  <ShieldCheck className="w-3 h-3" /> 25 Yrs Trust
                </span>
              </div>
              <p className="text-xs text-slate-300 font-medium tracking-wide">
                {COMPANY.tagline}
              </p>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-slate-200 hover:text-orange-400 transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-orange-500 hover:after:w-full after:transition-all"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={COMPANY.phoneUrl}
              className="inline-flex items-center gap-2 text-xs font-semibold text-slate-200 hover:text-white px-3.5 py-2 rounded-lg bg-white/10 hover:bg-white/15 transition-all border border-white/10"
              title="Call SafeWay Travels"
            >
              <Phone className="w-3.5 h-3.5 text-orange-400" />
              <span>{COMPANY.phoneDisplay}</span>
            </a>

            <button
              onClick={onBookClick}
              className="inline-flex items-center gap-2 text-sm font-bold text-white px-5 py-2.5 rounded-xl bg-gradient-to-r from-orange-500 to-amber-600 hover:from-orange-600 hover:to-amber-700 shadow-md shadow-orange-500/30 hover:shadow-lg hover:shadow-orange-500/40 hover:-translate-y-0.5 transition-all cursor-pointer"
            >
              <Car className="w-4 h-4" />
              <span>Book a Cab</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={onBookClick}
              className="text-xs font-bold text-white px-3 py-2 rounded-lg bg-orange-500 hover:bg-orange-600 shadow-sm"
            >
              Book Cab
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-200 hover:text-white hover:bg-white/10 transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="sm:hidden bg-[#07101C]/98 border-b border-white/10 px-4 pt-4 pb-6 space-y-3">
          <div className="grid grid-cols-2 gap-2 pb-2 border-b border-white/10">
            <a
              href={COMPANY.phoneUrl}
              className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-lg bg-white/10 text-white text-xs font-semibold"
            >
              <Phone className="w-3.5 h-3.5 text-orange-400" />
              <span>Call Us</span>
            </a>
            <a
              href={COMPANY.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-lg bg-emerald-600/30 border border-emerald-500/40 text-emerald-300 text-xs font-semibold"
            >
              <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
              <span>WhatsApp</span>
            </a>
          </div>

          <div className="space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2.5 rounded-lg text-base font-medium text-slate-200 hover:text-orange-400 hover:bg-white/5 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onBookClick();
            }}
            className="w-full mt-2 py-3 rounded-xl bg-gradient-to-r from-orange-500 to-amber-600 text-white font-bold text-sm shadow-lg shadow-orange-500/25 flex items-center justify-center gap-2"
          >
            <Car className="w-4 h-4" />
            <span>Book a Cab Now</span>
          </button>
        </div>
      )}
    </header>
  );
};
