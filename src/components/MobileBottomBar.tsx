import { Phone, MessageCircle, Car } from "lucide-react";
import { COMPANY } from "../config/company";

interface MobileBottomBarProps {
  onBookClick: () => void;
}

export const MobileBottomBar = ({ onBookClick }: MobileBottomBarProps) => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-[#07101C]/95 backdrop-blur-lg border-t border-white/15 px-3 py-2.5 shadow-2xl safe-area-pb">
      <div className="grid grid-cols-3 gap-2 max-w-md mx-auto">
        
        {/* Call Now */}
        <a
          href={COMPANY.phoneUrl}
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-white/10 active:bg-white/20 text-white text-[11px] font-semibold border border-white/10 transition-colors"
          aria-label="Call SafeWay Travels"
        >
          <Phone className="w-4 h-4 text-orange-400 mb-0.5" />
          <span>Call Now</span>
        </a>

        {/* WhatsApp */}
        <a
          href={COMPANY.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-[#25D366]/20 active:bg-[#25D366]/30 text-[#25D366] text-[11px] font-semibold border border-[#25D366]/40 transition-colors"
          aria-label="Chat on WhatsApp"
        >
          <MessageCircle className="w-4 h-4 mb-0.5" />
          <span>WhatsApp</span>
        </a>

        {/* Book a Cab */}
        <button
          onClick={onBookClick}
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-gradient-to-r from-orange-500 to-amber-600 active:from-orange-600 active:to-amber-700 text-white text-[11px] font-bold shadow-md shadow-orange-500/30 transition-all cursor-pointer"
          aria-label="Book a Cab"
        >
          <Car className="w-4 h-4 mb-0.5" />
          <span>Book Cab</span>
        </button>

      </div>
    </div>
  );
};
