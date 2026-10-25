import { useState } from "react";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { ServicesSection } from "./components/ServicesSection";
import { VehicleGallery } from "./components/VehicleGallery";
import { BookingForm } from "./components/BookingForm";
import { AboutSection } from "./components/AboutSection";
import { SafetySection } from "./components/SafetySection";
import { ContactSection } from "./components/ContactSection";
import { Footer } from "./components/Footer";
import { MobileBottomBar } from "./components/MobileBottomBar";
import type { Vehicle } from "./config/vehicles";

export function App() {
  const [selectedVehicle, setSelectedVehicle] = useState<Vehicle | null>(null);
  const [selectedService, setSelectedService] = useState<string | null>(null);

  const scrollToBooking = () => {
    const bookingElement = document.getElementById("booking");
    if (bookingElement) {
      bookingElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleSelectService = (serviceName: string) => {
    setSelectedService(serviceName);
    scrollToBooking();
  };

  const handleSelectVehicle = (vehicle: Vehicle) => {
    setSelectedVehicle(vehicle);
    scrollToBooking();
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-orange-500 selection:text-white pb-20 md:pb-0">
      {/* Header */}
      <Header onBookClick={scrollToBooking} />

      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <Hero onBookClick={scrollToBooking} />

        {/* Services Section */}
        <ServicesSection onSelectService={handleSelectService} />

        {/* Vehicle Gallery */}
        <VehicleGallery onSelectVehicle={handleSelectVehicle} />

        {/* Booking Form (Must Work) */}
        <BookingForm
          selectedVehicle={selectedVehicle}
          selectedService={selectedService}
        />

        {/* About SafeWay Travels */}
        <AboutSection />

        {/* Safety & Reliability */}
        <SafetySection />

        {/* Contact Details */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer onBookClick={scrollToBooking} />

      {/* Fixed Mobile Bottom Action Bar */}
      <MobileBottomBar onBookClick={scrollToBooking} />
    </div>
  );
}

export default App;
