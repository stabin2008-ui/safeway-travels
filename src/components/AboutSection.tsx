import { ShieldCheck, Clock, MapPin, HeartHandshake, CheckCircle } from "lucide-react";
import { COMPANY } from "../config/company";

export const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Visual Highlight Card */}
          <div className="lg:col-span-5">
            <div className="relative">
              {/* Card with subtle 3D depth */}
              <div className="bg-[#0B192C] text-white rounded-3xl p-8 sm:p-10 shadow-2xl relative z-10 border border-white/10 card-3d-subtle">
                <div className="w-16 h-16 rounded-2xl bg-orange-500/20 border border-orange-500/40 flex items-center justify-center text-orange-400 mb-6 font-['Outfit'] text-2xl font-black">
                  25
                </div>
                <h3 className="text-2xl font-bold font-['Outfit'] mb-3">
                  A Legacy of Trust in Bengaluru
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed mb-6">
                  Founded with a clear commitment to safe, reliable passenger transportation, SafeWay Travels has spent a quarter of a century navigating the roads of Bengaluru and South India.
                </p>

                <div className="space-y-3 border-t border-white/10 pt-6 text-xs text-slate-200">
                  <div className="flex items-center gap-2.5">
                    <CheckCircle className="w-4 h-4 text-orange-400 shrink-0" />
                    <span>Serving Bengaluru and all South Indian outstation routes</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <CheckCircle className="w-4 h-4 text-orange-400 shrink-0" />
                    <span>Chauffeurs with deep route knowledge & polite conduct</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <CheckCircle className="w-4 h-4 text-orange-400 shrink-0" />
                    <span>Well-maintained, clean, air-conditioned vehicle fleet</span>
                  </div>
                </div>
              </div>

              {/* Decorative accent element behind */}
              <div className="absolute -bottom-4 -right-4 w-full h-full rounded-3xl bg-gradient-to-br from-orange-400 to-amber-600 -z-0 opacity-20 blur-xl" />
            </div>
          </div>

          {/* Right Column: Narrative */}
          <div className="lg:col-span-7 space-y-6">
            <span className="inline-block text-xs font-bold tracking-widest text-orange-600 uppercase bg-orange-100 px-3.5 py-1 rounded-full">
              About SafeWay Travels
            </span>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B192C] font-['Outfit'] tracking-tight">
              25 Years of Driving Reliability & Honest Service
            </h2>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              SafeWay Travels was established with a singular focus: to offer passengers a tranquil, trustworthy travel experience in and around <strong className="text-slate-900 font-semibold">{COMPANY.locationServed}</strong>. Over 25 years of daily driving, we have built lasting relationships with families, business professionals, and frequent flyers who count on us for punctuality and peace of mind.
            </p>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              We know that every journey matters — whether it is an early-morning transfer to Kempegowda International Airport (BLR) where every minute counts, an important corporate meeting across the city, or a relaxed family holiday to Mysore, Coorg, or Ooty. Our drivers are seasoned professionals who prioritize passenger safety, courteous hospitality, and smooth driving above all else.
            </p>

            {/* Core Values Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-sm flex items-start gap-3">
                <div className="p-2 rounded-lg bg-orange-50 text-orange-600 border border-orange-100 shrink-0">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#0B192C]">Safety First</h4>
                  <p className="text-xs text-slate-500 mt-1">Disciplined highway speeds and thoroughly inspected mechanicals.</p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-sm flex items-start gap-3">
                <div className="p-2 rounded-lg bg-orange-50 text-orange-600 border border-orange-100 shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#0B192C]">Punctual Commitment</h4>
                  <p className="text-xs text-slate-500 mt-1">Scheduled pickups that arrive before time, avoiding any travel rush.</p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-sm flex items-start gap-3">
                <div className="p-2 rounded-lg bg-orange-50 text-orange-600 border border-orange-100 shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#0B192C]">Local Route Mastery</h4>
                  <p className="text-xs text-slate-500 mt-1">Navigating Bengaluru traffic seamlessly via the best corridors.</p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-sm flex items-start gap-3">
                <div className="p-2 rounded-lg bg-orange-50 text-orange-600 border border-orange-100 shrink-0">
                  <HeartHandshake className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#0B192C]">No Hidden Costs</h4>
                  <p className="text-xs text-slate-500 mt-1">Clear, upfront trip clarity. Rates available on direct request.</p>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
