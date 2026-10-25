import { Phone, MessageCircle, Mail, MapPin, Clock, ArrowUpRight } from "lucide-react";
import { COMPANY } from "../config/company";

export const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-xs font-bold tracking-widest text-orange-600 uppercase bg-orange-100 px-3.5 py-1 rounded-full mb-3">
            Get In Touch
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B192C] font-['Outfit'] tracking-tight">
            Contact SafeWay Travels
          </h2>
          <p className="mt-4 text-base text-slate-600">
            Have questions about route availability, airport timings, or outstation package quotes? We are accessible directly via phone, WhatsApp, and email.
          </p>
        </div>

        {/* Contact Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Phone Card */}
          <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm hover:shadow-xl transition-all card-3d-subtle flex flex-col justify-between group">
            <div>
              <div className="w-14 h-14 rounded-2xl bg-orange-50 border border-orange-100 flex items-center justify-center text-orange-600 mb-6 group-hover:bg-orange-500 group-hover:text-white transition-colors">
                <Phone className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-[#0B192C] font-['Outfit'] mb-2">
                Call Direct
              </h3>
              <p className="text-xs text-slate-500 mb-4">
                Instant telephone assistance for immediate bookings, airport cab dispatch, and emergency support.
              </p>
              <p className="text-lg font-extrabold text-[#0B192C] tracking-wide mb-6">
                {COMPANY.phoneDisplay}
              </p>
            </div>
            <a
              href={COMPANY.phoneUrl}
              className="w-full py-3 px-4 rounded-xl text-xs font-bold text-white bg-[#0B192C] hover:bg-orange-600 flex items-center justify-center gap-2 transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span>Call Now</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>

          {/* WhatsApp Card */}
          <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm hover:shadow-xl transition-all card-3d-subtle flex flex-col justify-between group">
            <div>
              <div className="w-14 h-14 rounded-2xl bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-600 mb-6 group-hover:bg-[#25D366] group-hover:text-white transition-colors">
                <MessageCircle className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-[#0B192C] font-['Outfit'] mb-2">
                WhatsApp Chat
              </h3>
              <p className="text-xs text-slate-500 mb-4">
                Send trip itineraries, request quotes, or share flight details directly on WhatsApp chat.
              </p>
              <p className="text-lg font-extrabold text-[#0B192C] tracking-wide mb-6">
                {COMPANY.whatsappDisplay}
              </p>
            </div>
            <a
              href={COMPANY.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 px-4 rounded-xl text-xs font-bold text-white bg-[#25D366] hover:bg-[#20b858] flex items-center justify-center gap-2 transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Chat on WhatsApp</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>

          {/* Email Card */}
          <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm hover:shadow-xl transition-all card-3d-subtle flex flex-col justify-between group">
            <div>
              <div className="w-14 h-14 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                <Mail className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-[#0B192C] font-['Outfit'] mb-2">
                Email Inquiry
              </h3>
              <p className="text-xs text-slate-500 mb-4">
                For corporate travel inquiries, custom multi-city itinerary planning, or receipt requests.
              </p>
              <p className="text-sm font-bold text-[#0B192C] break-all mb-6">
                {COMPANY.email}
              </p>
            </div>
            <a
              href={COMPANY.emailUrl}
              className="w-full py-3 px-4 rounded-xl text-xs font-bold text-[#0B192C] bg-slate-100 hover:bg-slate-200 flex items-center justify-center gap-2 transition-colors border border-slate-300"
            >
              <Mail className="w-4 h-4" />
              <span>Send Email</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>

        </div>

        {/* Location & Operating Hours Information */}
        <div className="mt-12 bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-orange-50 border border-orange-200 flex items-center justify-center text-orange-600 shrink-0">
              <MapPin className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-[#0B192C]">Primary Service Base</h4>
              <p className="text-xs text-slate-600">{COMPANY.locationServed}</p>
              <p className="text-[11px] text-slate-500 mt-0.5">Covering all Bengaluru zones, BLR Airport, and South India highways.</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-600 shrink-0">
              <Clock className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-[#0B192C]">Booking Hours</h4>
              <p className="text-xs text-slate-600">24 Hours / 7 Days a Week Support</p>
              <p className="text-[11px] text-slate-500 mt-0.5">Pre-scheduled airport and outstation pickups round the clock.</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
