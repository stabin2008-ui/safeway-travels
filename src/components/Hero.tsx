import { Phone, MessageCircle, ArrowRight, ShieldCheck, Clock, MapPin, Award } from "lucide-react";
import { COMPANY } from "../config/company";

interface HeroProps {
  onBookClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onBookClick }) => {
  return (
    <section className="relative pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden hero-gradient text-white">
      {/* Subtle Background Glows */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-blue-600/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Headlines & CTAs */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Trust Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-orange-400 text-xs sm:text-sm font-semibold shadow-inner">
              <Award className="w-4 h-4 text-orange-400" />
              <span>Celebrating 25 Years of Driving Excellence</span>
              <span className="w-1.5 h-1.5 rounded-full bg-orange-400 animate-pulse" />
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.12] text-white font-['Outfit']">
              Reliable Travel. <br className="hidden sm:inline" />
              Comfortable Journeys. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-amber-300 to-orange-500">
                Trusted for 25 Years.
              </span>
            </h1>

            {/* Subheading */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
              SafeWay Travels is your trusted travel partner in <strong className="text-white font-semibold">Bengaluru, Karnataka</strong>. From seamless Kempegowda Airport (BLR) transfers and local city business rides to memorable outstation family getaways across South India.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <button
                onClick={onBookClick}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl text-base font-bold text-white bg-gradient-to-r from-orange-500 via-orange-600 to-amber-600 hover:from-orange-600 hover:to-amber-700 shadow-xl shadow-orange-500/30 hover:shadow-2xl hover:shadow-orange-500/40 hover:-translate-y-0.5 transition-all cursor-pointer"
              >
                <span>Book a Cab Now</span>
                <ArrowRight className="w-5 h-5" />
              </button>

              <a
                href={COMPANY.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-7 py-4 rounded-xl text-base font-bold text-white bg-[#25D366]/20 hover:bg-[#25D366]/30 border border-[#25D366]/50 shadow-lg shadow-black/20 hover:-translate-y-0.5 transition-all"
              >
                <MessageCircle className="w-5 h-5 text-[#25D366]" />
                <span>Chat on WhatsApp</span>
              </a>

              <a
                href={COMPANY.phoneUrl}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-4 rounded-xl text-sm font-semibold text-slate-300 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 transition-all"
              >
                <Phone className="w-4 h-4 text-orange-400" />
                <span>Call {COMPANY.phoneDisplay}</span>
              </a>
            </div>

            {/* Key Service Badges */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-6 border-t border-white/10">
              <div className="flex items-center gap-2 text-left">
                <div className="p-2 rounded-lg bg-orange-500/10 text-orange-400 border border-orange-500/20">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs font-bold text-white">Bengaluru</p>
                  <p className="text-[11px] text-slate-400">All Zones Covered</p>
                </div>
              </div>

              <div className="flex items-center gap-2 text-left">
                <div className="p-2 rounded-lg bg-orange-500/10 text-orange-400 border border-orange-500/20">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs font-bold text-white">Punctual Pickups</p>
                  <p className="text-[11px] text-slate-400">Airport & City</p>
                </div>
              </div>

              <div className="flex items-center gap-2 text-left">
                <div className="p-2 rounded-lg bg-orange-500/10 text-orange-400 border border-orange-500/20">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs font-bold text-white">Verified Drivers</p>
                  <p className="text-[11px] text-slate-400">Courteous & Safe</p>
                </div>
              </div>

              <div className="flex items-center gap-2 text-left">
                <div className="p-2 rounded-lg bg-orange-500/10 text-orange-400 border border-orange-500/20">
                  <Award className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs font-bold text-white">25 Years</p>
                  <p className="text-[11px] text-slate-400">Comfort & Trust</p>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Fleet Visual Showcase Card */}
          <div className="lg:col-span-5">
            <div className="relative group">
              {/* Outer 3D Glow Card */}
              <div className="relative rounded-3xl overflow-hidden bg-gradient-to-b from-white/15 to-white/5 p-2 backdrop-blur-xl border border-white/20 shadow-2xl shadow-black/50">
                <div className="relative rounded-2xl overflow-hidden aspect-[16/10] bg-slate-900">
                  <img
                    src="/images/hero.jpg"
                    alt="SafeWay Travels Premium Fleet in Bengaluru"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                    loading="eager"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B192C] via-transparent to-black/20" />
                  
                  {/* Floating Badge on Image */}
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between bg-black/60 backdrop-blur-md px-4 py-2.5 rounded-xl border border-white/15">
                    <div>
                      <p className="text-xs font-bold text-white">Chauffeur-Driven Fleet</p>
                      <p className="text-[11px] text-slate-300">Sedans, MUVs, SUVs & Tempo Travellers</p>
                    </div>
                    <span className="text-[11px] font-semibold text-orange-400 bg-orange-500/20 px-2.5 py-1 rounded-md border border-orange-500/30">
                      Bengaluru Base
                    </span>
                  </div>
                </div>

                {/* Sub-card: Price Clarity Notice */}
                <div className="p-4 bg-[#0B192C]/90 rounded-b-2xl flex items-center justify-between text-xs text-slate-300">
                  <span className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 inline-block" />
                    Clean & Sanitized Vehicles
                  </span>
                  <span className="text-orange-400 font-medium">
                    {COMPANY.priceNotice}
                  </span>
                </div>
              </div>

              {/* Floating Quick Trust Badge */}
              <div className="hidden sm:flex absolute -bottom-5 -left-5 bg-[#0B192C] border border-orange-500/30 p-3.5 rounded-2xl shadow-xl shadow-black/40 items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-orange-500/20 flex items-center justify-center text-orange-400 font-bold">
                  25+
                </div>
                <div>
                  <p className="text-xs font-bold text-white">Years of Service</p>
                  <p className="text-[11px] text-slate-400">Serving Bengaluru since 1999</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
