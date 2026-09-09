import { MessageCircle } from 'lucide-react';

export default function WhatsAppButton() {
  const whatsappUrl = `https://wa.me/918818899951?text=${encodeURIComponent(
    "Hello NautiGoa Yachts! I would like to inquire about booking a luxury yacht charter."
  )}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with NautiGoa on WhatsApp"
      className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-40 group flex items-center justify-center"
    >
      {/* Floating tooltip on desktop */}
      <span className="hidden md:block absolute right-full mr-3 px-3 py-1.5 bg-neutral-900 border border-white/10 text-white text-xs rounded shadow-xl whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
        Book on WhatsApp (+91 88188 99951)
      </span>

      {/* Button */}
      <div className="relative w-12 h-12 sm:w-13 sm:h-13 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-2xl hover:scale-110 active:scale-95 transition-all duration-300">
        <MessageCircle className="w-6 h-6 sm:w-7 sm:h-7 fill-current text-white" />
        
        {/* Pulse ring animation */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-30"></span>
      </div>
    </a>
  );
}
