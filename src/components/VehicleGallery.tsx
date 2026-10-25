import { useState } from "react";
import { Sparkles, Eye, Info, CheckCircle2, ArrowRight } from "lucide-react";
import { VEHICLES } from "../config/vehicles";
import type { Vehicle, VehicleCategory } from "../config/vehicles";

interface VehicleGalleryProps {
  onSelectVehicle: (vehicle: Vehicle) => void;
}

export const VehicleGallery: React.FC<VehicleGalleryProps> = ({ onSelectVehicle }) => {
  const [activeCategory, setActiveCategory] = useState<VehicleCategory>("All");
  // Keep track of which view (exterior vs interior) is active per vehicle card
  const [viewModes, setViewModes] = useState<Record<string, "exterior" | "interior">>({});

  const categories: VehicleCategory[] = [
    "All",
    "Sedan",
    "SUV/MUV",
    "Compact City Cab",
    "Group Vehicle",
  ];

  const filteredVehicles = VEHICLES.filter((v) => {
    if (activeCategory === "All") return true;
    return v.category === activeCategory || v.subCategories.includes(activeCategory);
  });

  const toggleViewMode = (vehicleId: string, mode: "exterior" | "interior") => {
    setViewModes((prev) => ({
      ...prev,
      [vehicleId]: mode,
    }));
  };

  return (
    <section id="vehicles" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-flex items-center gap-1.5 text-xs font-bold tracking-widest text-orange-600 uppercase bg-orange-100 px-3.5 py-1 rounded-full mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            Verified Fleet
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B192C] font-['Outfit'] tracking-tight">
            Our Premium Chauffeured Vehicles
          </h2>
          <p className="mt-4 text-base text-slate-600">
            Explore our thoroughly sanitized, well-maintained fleet. Switch between exterior and interior views to inspect the comfort awaiting you.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                activeCategory === cat
                  ? "bg-[#0B192C] text-white shadow-md shadow-navy-950/20"
                  : "bg-slate-100 text-slate-600 hover:bg-slate-200"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Vehicle Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredVehicles.map((vehicle) => {
            const currentMode = viewModes[vehicle.id] || "exterior";
            const currentImg =
              currentMode === "exterior" ? vehicle.exteriorImg : vehicle.interiorImg;

            return (
              <div
                key={vehicle.id}
                className="bg-white rounded-2xl overflow-hidden border border-slate-200/90 shadow-sm hover:shadow-2xl transition-all duration-300 flex flex-col justify-between card-3d-subtle group"
              >
                <div>
                  {/* Image Viewport & Toggle */}
                  <div className="relative aspect-[16/10] bg-slate-900 overflow-hidden">
                    <img
                      src={currentImg}
                      alt={`${vehicle.name} ${currentMode} view`}
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                      onError={(e) => {
                        // Fallback placeholder if image fails
                        (e.target as HTMLImageElement).src =
                          "https://placehold.co/800x500/0B192C/FFFFFF?text=" +
                          encodeURIComponent(vehicle.name);
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 pointer-events-none" />

                    {/* Top Badges */}
                    <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-auto">
                      <span className="text-[11px] font-bold text-white bg-[#0B192C]/80 backdrop-blur-md px-2.5 py-1 rounded-md border border-white/20">
                        {vehicle.category}
                      </span>
                      <span
                        className={`text-[11px] font-bold px-2.5 py-1 rounded-md border backdrop-blur-md ${
                          vehicle.availability === "Available Daily"
                            ? "bg-emerald-500/90 text-white border-emerald-400"
                            : "bg-amber-500/90 text-white border-amber-400"
                        }`}
                      >
                        {vehicle.availability}
                      </span>
                    </div>

                    {/* Exterior / Interior View Switcher Controls */}
                    <div className="absolute bottom-3 left-3 bg-black/70 backdrop-blur-md p-1 rounded-lg flex items-center gap-1 border border-white/20 pointer-events-auto">
                      <button
                        onClick={() => toggleViewMode(vehicle.id, "exterior")}
                        className={`px-2.5 py-1 rounded-md text-[11px] font-medium transition-all ${
                          currentMode === "exterior"
                            ? "bg-orange-500 text-white shadow-sm font-semibold"
                            : "text-slate-300 hover:text-white"
                        }`}
                        title="View Exterior"
                      >
                        Exterior
                      </button>
                      <button
                        onClick={() => toggleViewMode(vehicle.id, "interior")}
                        className={`px-2.5 py-1 rounded-md text-[11px] font-medium transition-all ${
                          currentMode === "interior"
                            ? "bg-orange-500 text-white shadow-sm font-semibold"
                            : "text-slate-300 hover:text-white"
                        }`}
                        title="View Interior"
                      >
                        Interior
                      </button>
                    </div>

                    <div className="absolute bottom-3 right-3 text-[10px] text-white/80 bg-black/40 backdrop-blur-sm px-2 py-0.5 rounded">
                      <Eye className="w-3 h-3 inline mr-1" />
                      {currentMode === "exterior" ? "Exterior photo" : "Interior photo"}
                    </div>
                  </div>

                  {/* Vehicle Body Info */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-[#0B192C] font-['Outfit'] mb-1">
                      {vehicle.name}
                    </h3>
                    <p className="text-xs text-slate-500 mb-4 line-clamp-2">
                      {vehicle.tagline}
                    </p>

                    {/* Features List */}
                    <div className="space-y-1.5 mb-5">
                      {vehicle.features.map((feat, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-xs text-slate-700">
                          <CheckCircle2 className="w-3.5 h-3.5 text-orange-500 shrink-0" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>

                    <p className="text-[11px] text-slate-500 leading-relaxed border-t border-slate-100 pt-3 mb-2">
                      {vehicle.description}
                    </p>
                  </div>
                </div>

                {/* Card Bottom CTA */}
                <div className="p-6 pt-0">
                  <div className="mb-3 flex items-center justify-between text-xs py-2 px-3 rounded-lg bg-slate-50 border border-slate-200/60">
                    <span className="text-slate-500">Rate:</span>
                    <span className="font-semibold text-orange-600 flex items-center gap-1">
                      <Info className="w-3 h-3" />
                      {vehicle.priceNotice}
                    </span>
                  </div>

                  <button
                    onClick={() => onSelectVehicle(vehicle)}
                    className="w-full py-3 px-4 rounded-xl text-xs sm:text-sm font-bold text-white bg-[#0B192C] hover:bg-orange-600 transition-colors duration-200 flex items-center justify-center gap-2 shadow-md hover:shadow-lg cursor-pointer"
                  >
                    <span>Select {vehicle.name}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Note on Photography & Accuracy */}
        <div className="mt-12 text-center text-xs text-slate-500 max-w-2xl mx-auto">
          <p>
            * Model-appropriate photographs are shown for visual reference of each vehicle model and cabin layout. All rides are serviced by SafeWay Travels chauffeurs with vehicles in clean, sanitised condition.
          </p>
        </div>

      </div>
    </section>
  );
};
