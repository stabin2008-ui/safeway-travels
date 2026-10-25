import { Plane, Navigation, Compass, Repeat, CheckCircle2, ArrowRight } from "lucide-react";
import { SERVICES } from "../config/services";
import type { ServiceItem } from "../config/services";

interface ServicesSectionProps {
  onSelectService: (serviceName: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService }) => {
  const getServiceIcon = (id: string) => {
    switch (id) {
      case "local":
        return <Navigation className="w-6 h-6 text-orange-500" />;
      case "airport":
        return <Plane className="w-6 h-6 text-orange-500" />;
      case "outstation":
        return <Compass className="w-6 h-6 text-orange-500" />;
      case "roundtrip":
        return <Repeat className="w-6 h-6 text-orange-500" />;
      default:
        return <Navigation className="w-6 h-6 text-orange-500" />;
    }
  };

  return (
    <section id="services" className="py-20 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-xs font-bold tracking-widest text-orange-600 uppercase bg-orange-100 px-3.5 py-1 rounded-full mb-3">
            Our Travel Services
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B192C] font-['Outfit'] tracking-tight">
            Tailored Cab Services for Every Journey
          </h2>
          <p className="mt-4 text-base text-slate-600">
            Backed by 25 years of local driving expertise, SafeWay Travels delivers punctual, hygienic, and comfortable chauffeured journeys across Bengaluru and South India.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {SERVICES.map((service: ServiceItem) => (
            <div
              key={service.id}
              className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-200/80 hover:border-orange-200 flex flex-col justify-between group card-3d-subtle"
            >
              <div>
                {/* Header Icon + Badge */}
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-xl bg-orange-50 flex items-center justify-center border border-orange-100 group-hover:bg-orange-500 group-hover:text-white transition-colors">
                    {getServiceIcon(service.id)}
                  </div>
                  <span className="text-[11px] font-semibold text-slate-500 bg-slate-100 px-2.5 py-1 rounded-md">
                    {service.badge}
                  </span>
                </div>

                {/* Service Title & Description */}
                <h3 className="text-xl font-bold text-[#0B192C] font-['Outfit'] mb-2 group-hover:text-orange-600 transition-colors">
                  {service.name}
                </h3>
                <p className="text-xs text-slate-600 mb-5 leading-relaxed">
                  {service.shortDesc}
                </p>

                {/* Features List */}
                <ul className="space-y-2.5 mb-6 text-xs text-slate-700">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-orange-500 shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Card Footer: Action */}
              <div className="pt-4 border-t border-slate-100">
                <p className="text-[11px] text-slate-500 italic mb-3">
                  <strong className="text-slate-700 not-italic">Ideal for:</strong> {service.idealFor}
                </p>
                <button
                  onClick={() => onSelectService(service.name)}
                  className="w-full py-2.5 px-4 rounded-xl text-xs font-bold text-[#0B192C] bg-orange-50 hover:bg-orange-500 hover:text-white border border-orange-200 hover:border-orange-500 flex items-center justify-center gap-1.5 transition-all cursor-pointer group/btn"
                >
                  <span>Book {service.name}</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Note Banner */}
        <div className="mt-12 p-4 rounded-xl bg-blue-50/60 border border-blue-100 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-600 gap-3">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 shrink-0" />
            <span>Need a custom package or multiday itinerary? Call us directly at <strong className="text-slate-800">9980838845</strong>.</span>
          </div>
          <span className="font-semibold text-orange-600 shrink-0">
            Price details available on request
          </span>
        </div>

      </div>
    </section>
  );
};
