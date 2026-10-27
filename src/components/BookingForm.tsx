import { useState, useEffect } from "react";
import type { ChangeEvent, FormEvent } from "react";
import {
  Car,
  User,
  Phone,
  Mail,
  MapPin,
  Calendar,
  Clock,
  Users,
  MessageSquare,
  AlertCircle,
  CheckCircle2,
  PhoneCall,
  ExternalLink,
  Info,
} from "lucide-react";
import { COMPANY } from "../config/company";
import { VEHICLES } from "../config/vehicles";
import type { Vehicle } from "../config/vehicles";
import { SERVICES } from "../config/services";
import { formatTimeTo12Hour } from "../utils/time";

interface BookingFormProps {
  selectedVehicle?: Vehicle | null;
  selectedService?: string | null;
}

interface FormData {
  customerName: string;
  phone: string;
  email: string;
  serviceType: string;
  pickupLocation: string;
  dropLocation: string;
  travelDate: string;
  travelTime: string;
  passengers: string;
  preferredModel: string;
  specialRequests: string;
}

interface FormErrors {
  customerName?: string;
  phone?: string;
  email?: string;
  serviceType?: string;
  pickupLocation?: string;
  dropLocation?: string;
  travelDate?: string;
  travelTime?: string;
  passengers?: string;
  preferredModel?: string;
}

export const BookingForm: React.FC<BookingFormProps> = ({
  selectedVehicle,
  selectedService,
}) => {
  // Get today's date in YYYY-MM-DD for min date attribute
  const todayStr = new Date().toISOString().split("T")[0];

  const [formData, setFormData] = useState<FormData>({
    customerName: "",
    phone: "",
    email: "",
    serviceType: "Airport Transfers",
    pickupLocation: "",
    dropLocation: "",
    travelDate: todayStr,
    travelTime: "10:00",
    passengers: "1-4",
    preferredModel: "Toyota Innova Crysta",
    specialRequests: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [submittedWhatsAppUrl, setSubmittedWhatsAppUrl] = useState<string | null>(null);
  const [showConfirmationNotice, setShowConfirmationNotice] = useState(false);

  // Sync when selectedVehicle changes from external clicks
  useEffect(() => {
    if (selectedVehicle) {
      setFormData((prev) => ({
        ...prev,
        preferredModel: selectedVehicle.name,
      }));
    }
  }, [selectedVehicle]);

  // Sync when selectedService changes
  useEffect(() => {
    if (selectedService) {
      setFormData((prev) => ({
        ...prev,
        serviceType: selectedService,
      }));
    }
  }, [selectedService]);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error for that field
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.customerName.trim()) {
      newErrors.customerName = "Please enter your full name.";
    }

    // Phone validation: Indian 10-digit mobile or international format
    const cleanPhone = formData.phone.replace(/[\s-+]/g, "");
    if (!formData.phone.trim()) {
      newErrors.phone = "Please enter your contact phone number.";
    } else if (cleanPhone.length < 10 || cleanPhone.length > 13) {
      newErrors.phone = "Please enter a valid 10-digit mobile number.";
    }

    // Optional email validation
    if (formData.email.trim()) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email.trim())) {
        newErrors.email = "Please enter a valid email address.";
      }
    }

    if (!formData.pickupLocation.trim()) {
      newErrors.pickupLocation = "Pickup location is required.";
    }

    // Drop location required for Airport, Outstation, and Round Trips
    if (
      formData.serviceType !== "Local City Rides" &&
      !formData.dropLocation.trim()
    ) {
      newErrors.dropLocation = "Destination or drop location is required.";
    }

    // Date validation: past date check
    if (!formData.travelDate) {
      newErrors.travelDate = "Please select your travel date.";
    } else {
      const selected = new Date(formData.travelDate + "T00:00:00");
      const today = new Date(todayStr + "T00:00:00");
      if (selected < today) {
        newErrors.travelDate = "Travel date cannot be in the past.";
      }
    }

    if (!formData.travelTime) {
      newErrors.travelTime = "Please specify pickup time.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (!validate()) {
      return;
    }

    // Construct clean WhatsApp formatted message
    const lines = [
      "🚖 *SafeWay Travels - Cab Booking Request*",
      "━━━━━━━━━━━━━━━━━━━━━━",
      `👤 *Customer Name:* ${formData.customerName.trim()}`,
      `📞 *Phone Number:* ${formData.phone.trim()}`,
      formData.email.trim() ? `✉️ *Email:* ${formData.email.trim()}` : null,
      `📍 *Service Type:* ${formData.serviceType}`,
      `🚗 *Preferred Vehicle:* ${formData.preferredModel}`,
      `👥 *Passengers:* ${formData.passengers}`,
      `🛫 *Pickup Location:* ${formData.pickupLocation.trim()}`,
      formData.dropLocation.trim()
        ? `🏁 *Drop Location:* ${formData.dropLocation.trim()}`
        : `🏁 *Drop Location:* As per itinerary (Local Ride)`,
      `📅 *Date:* ${formData.travelDate}`,
      `⏰ *Pickup Time:* ${formatTimeTo12Hour(formData.travelTime)}`,
      formData.specialRequests.trim()
        ? `📝 *Special Requests:* ${formData.specialRequests.trim()}`
        : null,
      "━━━━━━━━━━━━━━━━━━━━━━",
      "📌 *Origin:* Website Booking Request (Bengaluru)",
      "⚠️ *Note:* This booking request is subject to confirmation by SafeWay Travels.",
    ].filter(Boolean);

    const messageText = lines.join("\n");
    const encodedMessage = encodeURIComponent(messageText);
    const whatsappUrl = `https://wa.me/919980838845?text=${encodedMessage}`;

    setSubmittedWhatsAppUrl(whatsappUrl);
    setShowConfirmationNotice(true);

    // Open WhatsApp in new tab
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <section id="booking" className="py-20 bg-slate-900 text-white relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="inline-block text-xs font-bold tracking-widest text-orange-400 uppercase bg-orange-500/10 border border-orange-500/20 px-3.5 py-1 rounded-full mb-3">
            Instant Booking Request
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-['Outfit'] tracking-tight">
            Book Your SafeWay Cab
          </h2>
          <p className="mt-3 text-slate-300 text-sm max-w-xl mx-auto">
            Fill in your trip details below. Your request will open directly in WhatsApp with all details pre-filled. No online payment required!
          </p>
        </div>

        {/* Success / Status Dialog Banner */}
        {showConfirmationNotice && (
          <div className="mb-8 p-6 rounded-2xl bg-[#0B192C] border-2 border-orange-500/80 shadow-2xl animate-in fade-in zoom-in-95 duration-300">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-orange-500/20 border border-orange-500/40 flex items-center justify-center shrink-0 text-orange-400">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <div className="space-y-2">
                <h3 className="text-lg font-bold text-white font-['Outfit']">
                  WhatsApp Request Prepared & Opened!
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  We have prefilled your booking details in WhatsApp. <strong>Please tap "Send" in WhatsApp</strong> to deliver your request to our 24/7 team.
                </p>
                <div className="p-3 bg-amber-500/10 border border-amber-500/30 rounded-lg text-xs text-amber-200 flex items-start gap-2">
                  <Info className="w-4 h-4 shrink-0 mt-0.5" />
                  <span>
                    <strong>Important:</strong> Your booking is <strong>not confirmed</strong> until SafeWay Travels responds to verify driver and vehicle availability.
                  </span>
                </div>
                <div className="flex flex-wrap gap-3 pt-2">
                  {submittedWhatsAppUrl && (
                    <a
                      href={submittedWhatsAppUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#25D366] hover:bg-[#20b858] text-white text-xs font-bold transition-colors"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      <span>Re-open WhatsApp Chat</span>
                    </a>
                  )}
                  <a
                    href={COMPANY.phoneUrl}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 text-white text-xs font-semibold border border-white/20 transition-colors"
                  >
                    <PhoneCall className="w-3.5 h-3.5 text-orange-400" />
                    <span>Call Directly: {COMPANY.phoneDisplay}</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Main Form Container */}
        <div className="bg-[#0B192C]/90 backdrop-blur-xl border border-white/15 rounded-3xl p-6 sm:p-10 shadow-2xl shadow-black/60">
          <form onSubmit={handleSubmit} className="space-y-6" noValidate>
            
            {/* Row 1: Name and Phone */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-semibold text-slate-200 mb-2 flex items-center gap-1.5">
                  <User className="w-3.5 h-3.5 text-orange-400" />
                  <span>Customer Name *</span>
                </label>
                <input
                  type="text"
                  name="customerName"
                  value={formData.customerName}
                  onChange={handleChange}
                  placeholder="e.g. Ramesh Kumar"
                  className={`w-full px-4 py-3 rounded-xl bg-slate-800/90 border text-sm text-white placeholder-slate-400 transition-colors ${
                    errors.customerName
                      ? "border-red-500 bg-red-950/20"
                      : "border-slate-700 focus:border-orange-500"
                  }`}
                />
                {errors.customerName && (
                  <p className="mt-1 text-xs text-red-400 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" /> {errors.customerName}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-200 mb-2 flex items-center gap-1.5">
                  <Phone className="w-3.5 h-3.5 text-orange-400" />
                  <span>Contact Phone Number *</span>
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="e.g. 9980838845"
                  className={`w-full px-4 py-3 rounded-xl bg-slate-800/90 border text-sm text-white placeholder-slate-400 transition-colors ${
                    errors.phone
                      ? "border-red-500 bg-red-950/20"
                      : "border-slate-700 focus:border-orange-500"
                  }`}
                />
                {errors.phone && (
                  <p className="mt-1 text-xs text-red-400 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" /> {errors.phone}
                  </p>
                )}
              </div>
            </div>

            {/* Row 2: Email (Optional) & Service Type */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-semibold text-slate-200 mb-2 flex items-center gap-1.5">
                  <Mail className="w-3.5 h-3.5 text-orange-400" />
                  <span>Email Address (Optional)</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="e.g. name@example.com"
                  className={`w-full px-4 py-3 rounded-xl bg-slate-800/90 border text-sm text-white placeholder-slate-400 transition-colors ${
                    errors.email
                      ? "border-red-500 bg-red-950/20"
                      : "border-slate-700 focus:border-orange-500"
                  }`}
                />
                {errors.email && (
                  <p className="mt-1 text-xs text-red-400 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" /> {errors.email}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-200 mb-2 flex items-center gap-1.5">
                  <Car className="w-3.5 h-3.5 text-orange-400" />
                  <span>Service Type *</span>
                </label>
                <select
                  name="serviceType"
                  value={formData.serviceType}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl bg-slate-800/90 border border-slate-700 text-sm text-white focus:border-orange-500 transition-colors"
                >
                  {SERVICES.map((s) => (
                    <option key={s.id} value={s.name} className="bg-slate-900 text-white">
                      {s.name} ({s.badge})
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Row 3: Pickup & Drop Location */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-semibold text-slate-200 mb-2 flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-orange-400" />
                  <span>Pickup Location (Bengaluru) *</span>
                </label>
                <input
                  type="text"
                  name="pickupLocation"
                  value={formData.pickupLocation}
                  onChange={handleChange}
                  placeholder="e.g. Indiranagar / BLR Airport / Electronic City"
                  className={`w-full px-4 py-3 rounded-xl bg-slate-800/90 border text-sm text-white placeholder-slate-400 transition-colors ${
                    errors.pickupLocation
                      ? "border-red-500 bg-red-950/20"
                      : "border-slate-700 focus:border-orange-500"
                  }`}
                />
                {errors.pickupLocation && (
                  <p className="mt-1 text-xs text-red-400 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" /> {errors.pickupLocation}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-200 mb-2 flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-orange-400" />
                  <span>Destination / Drop Location {formData.serviceType === "Local City Rides" ? "(Optional)" : "*"}</span>
                </label>
                <input
                  type="text"
                  name="dropLocation"
                  value={formData.dropLocation}
                  onChange={handleChange}
                  placeholder={
                    formData.serviceType === "Airport Transfers"
                      ? "e.g. Kempegowda International Airport (BLR)"
                      : formData.serviceType === "Outstation Trips"
                      ? "e.g. Mysore / Coorg / Ooty / Wayanad"
                      : "e.g. Drop Address or As per itinerary"
                  }
                  className={`w-full px-4 py-3 rounded-xl bg-slate-800/90 border text-sm text-white placeholder-slate-400 transition-colors ${
                    errors.dropLocation
                      ? "border-red-500 bg-red-950/20"
                      : "border-slate-700 focus:border-orange-500"
                  }`}
                />
                {errors.dropLocation && (
                  <p className="mt-1 text-xs text-red-400 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" /> {errors.dropLocation}
                  </p>
                )}
              </div>
            </div>

            {/* Row 4: Travel Date & Time */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-semibold text-slate-200 mb-2 flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-orange-400" />
                  <span>Travel Date *</span>
                </label>
                <input
                  type="date"
                  name="travelDate"
                  min={todayStr}
                  value={formData.travelDate}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-xl bg-slate-800/90 border text-sm text-white transition-colors ${
                    errors.travelDate
                      ? "border-red-500 bg-red-950/20"
                      : "border-slate-700 focus:border-orange-500"
                  }`}
                />
                {errors.travelDate && (
                  <p className="mt-1 text-xs text-red-400 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" /> {errors.travelDate}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-200 mb-2 flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-orange-400" />
                  <span>Pickup Time *</span>
                </label>
                <input
                  type="time"
                  name="travelTime"
                  value={formData.travelTime}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-xl bg-slate-800/90 border text-sm text-white transition-colors ${
                    errors.travelTime
                      ? "border-red-500 bg-red-950/20"
                      : "border-slate-700 focus:border-orange-500"
                  }`}
                />
                {errors.travelTime && (
                  <p className="mt-1 text-xs text-red-400 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" /> {errors.travelTime}
                  </p>
                )}
              </div>
            </div>

            {/* Row 5: Passengers and Preferred Model */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-semibold text-slate-200 mb-2 flex items-center gap-1.5">
                  <Users className="w-3.5 h-3.5 text-orange-400" />
                  <span>Number of Passengers *</span>
                </label>
                <select
                  name="passengers"
                  value={formData.passengers}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl bg-slate-800/90 border border-slate-700 text-sm text-white focus:border-orange-500 transition-colors"
                >
                  <option value="1-2">1 to 2 Passengers</option>
                  <option value="3-4">3 to 4 Passengers</option>
                  <option value="5-7">5 to 7 Passengers</option>
                  <option value="8+ (Group)">8+ Passengers (Tempo Traveller)</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-200 mb-2 flex items-center gap-1.5">
                  <Car className="w-3.5 h-3.5 text-orange-400" />
                  <span>Preferred Vehicle Model *</span>
                </label>
                <select
                  name="preferredModel"
                  value={formData.preferredModel}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl bg-slate-800/90 border border-slate-700 text-sm text-white focus:border-orange-500 transition-colors"
                >
                  {VEHICLES.map((v) => (
                    <option key={v.id} value={v.name} className="bg-slate-900 text-white">
                      {v.name} ({v.category}) - {v.availability}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Row 6: Special Requests */}
            <div>
              <label className="block text-xs font-semibold text-slate-200 mb-2 flex items-center gap-1.5">
                <MessageSquare className="w-3.5 h-3.5 text-orange-400" />
                <span>Special Requests / Notes (Optional)</span>
              </label>
              <textarea
                name="specialRequests"
                rows={3}
                value={formData.specialRequests}
                onChange={handleChange}
                placeholder="e.g. Extra luggage carrier needed, child seat requirement, intermediate stops, flight number..."
                className="w-full px-4 py-3 rounded-xl bg-slate-800/90 border border-slate-700 text-sm text-white placeholder-slate-400 focus:border-orange-500 transition-colors resize-none"
              />
            </div>

            {/* Price Policy Notice */}
            <div className="p-4 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between text-xs text-slate-300">
              <span className="flex items-center gap-1.5">
                <Info className="w-4 h-4 text-orange-400 shrink-0" />
                <span>No online payment needed. Direct transparent payment upon trip completion.</span>
              </span>
              <span className="text-orange-400 font-medium shrink-0">
                {COMPANY.priceNotice}
              </span>
            </div>

            {/* Submit Action */}
            <div className="pt-2">
              <button
                type="submit"
                className="w-full py-4 px-6 rounded-xl text-base font-bold text-white bg-gradient-to-r from-orange-500 via-orange-600 to-amber-600 hover:from-orange-600 hover:to-amber-700 shadow-xl shadow-orange-500/25 hover:shadow-orange-500/40 transition-all cursor-pointer flex items-center justify-center gap-3"
              >
                <Car className="w-5 h-5" />
                <span>Submit Booking via WhatsApp</span>
              </button>
              <p className="text-center text-xs text-slate-400 mt-3">
                Clicking opens WhatsApp with your prefilled details. SafeWay Travels will verify availability and reply to confirm.
              </p>
            </div>

          </form>
        </div>

      </div>
    </section>
  );
};
