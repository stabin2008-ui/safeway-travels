import {
  ShieldCheck,
  Sparkles,
  PhoneCall,
  FileCheck2,
  AlertTriangle,
  UserCheck,
} from "lucide-react";
import { COMPANY } from "../config/company";

export const SafetySection = () => {
  const safetyPillars = [
    {
      icon: <Sparkles className="w-6 h-6 text-orange-500" />,
      title: "Hygienic & Sanitized Vehicles",
      desc: "Each vehicle is vacuumed, dusted, and sanitized before passenger pickup. Spotless seat upholstery and fresh cabin air conditioning make every ride pleasant.",
    },
    {
      icon: <UserCheck className="w-6 h-6 text-orange-500" />,
      title: "Experienced & Verified Chauffeurs",
      desc: "Our drivers hold clean commercial licenses with deep driving tenure. Familiar with regional highway norms, defensive driving, and polite customer hospitality.",
    },
    {
      icon: <FileCheck2 className="w-6 h-6 text-orange-500" />,
      title: "Transparent Trip Billing",
      desc: "No hidden charges or unexpected surprise surges. Tolls, state permits, and parking are clearly accounted for so you always know what you pay.",
    },
    {
      icon: <PhoneCall className="w-6 h-6 text-orange-500" />,
      title: "Direct 24/7 Telephone Support",
      desc: `Need an urgent cab or late-night pickup status? Speak directly to our operations team at ${COMPANY.phoneDisplay} or WhatsApp anytime.`,
    },
  ];

  return (
    <section id="safety" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center gap-1.5 text-xs font-bold tracking-widest text-orange-600 uppercase bg-orange-100 px-3.5 py-1 rounded-full mb-3">
            <ShieldCheck className="w-3.5 h-3.5" />
            Passenger Well-being
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B192C] font-['Outfit'] tracking-tight">
            Safety, Reliability & Transparent Care
          </h2>
          <p className="mt-4 text-base text-slate-600">
            For 25 years, our customers have placed their trust in our service because we never compromise on safety, vehicle maintenance, or clear communication.
          </p>
        </div>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {safetyPillars.map((pillar, idx) => (
            <div
              key={idx}
              className="p-8 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-orange-300 hover:shadow-lg transition-all flex flex-col sm:flex-row items-start gap-5 card-3d-subtle"
            >
              <div className="w-12 h-12 rounded-xl bg-orange-100/80 border border-orange-200 flex items-center justify-center shrink-0">
                {pillar.icon}
              </div>
              <div>
                <h3 className="text-lg font-bold text-[#0B192C] font-['Outfit'] mb-2">
                  {pillar.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {pillar.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Realistic Trust Disclaimer Banner */}
        <div className="mt-12 p-6 rounded-2xl bg-amber-50/70 border border-amber-200/80 flex items-start gap-4">
          <div className="p-2 rounded-lg bg-amber-100 text-amber-700 shrink-0 mt-0.5">
            <AlertTriangle className="w-5 h-5" />
          </div>
          <div className="text-xs text-amber-900 leading-relaxed">
            <h4 className="font-bold text-amber-950 mb-1">Our Genuine Commitment</h4>
            <p>
              SafeWay Travels operates with honesty and transparency. We do not claim arbitrary internet awards or unverified certificates. Instead, our reputation rests on 25 continuous years of dependable on-road driving, well-maintained cars, and straightforward direct assistance across Bengaluru.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
