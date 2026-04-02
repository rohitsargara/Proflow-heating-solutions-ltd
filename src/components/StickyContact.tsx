import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";

export function StickyContact() {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
      <a
        href="https://wa.me/441210000000"
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 bg-[#25D366] hover:bg-[#20bd5a] text-white rounded-full flex items-center justify-center shadow-lg shadow-[#25D366]/30 transition-transform hover:scale-110"
        aria-label="Contact on WhatsApp"
      >
        <MessageCircle className="w-7 h-7" />
      </a>
      <a
        href="tel:01210000000"
        className="md:hidden w-14 h-14 bg-brand-blue hover:bg-blue-700 text-white rounded-full flex items-center justify-center shadow-lg shadow-brand-blue/30 transition-transform hover:scale-110"
        aria-label="Call Now"
      >
        <Phone className="w-6 h-6" />
      </a>
    </div>
  );
}
