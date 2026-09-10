import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, ArrowUpRight, ShieldCheck } from 'lucide-react';

const InstagramIcon = (props) => (
  <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

const FacebookIcon = (props) => (
  <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
  </svg>
);

export default function Footer({ onOpenBooking }) {
  return (
    <footer className="bg-[#040404] text-neutral-400 border-t border-white/10 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/10">
          
          {/* Brand Info (2 cols) */}
          <div className="lg:col-span-2 space-y-5">
            <Link to="/" className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-full overflow-hidden border border-[#C8A96B] shrink-0 bg-black">
                <img
                  src="/Logo.jpg"
                  alt="NautiGoa Yachts Logo"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-sans tracking-tight text-white leading-none">
                  <span className="font-normal text-white">Nauti</span>
                  <span className="font-bold text-white tracking-normal">GOA</span>
                </span>
                <span className="text-[10px] tracking-[0.25em] text-neutral-400 font-sans uppercase font-medium mt-1">
                  Luxury Yachts
                </span>
              </div>
            </Link>

            <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed max-w-sm font-light">
              NautiGoa is premier luxury yacht rental brand operating in Goa, Mumbai, and Dubai. Offering bespoke private charters, sunset cruises, pre-wedding drone shoots, and elite party experiences.
            </p>

            <div className="pt-1 flex items-center gap-2 text-xs text-[#C8A96B] font-medium">
              <ShieldCheck className="w-4 h-4 text-[#C8A96B] shrink-0" />
              <span>Direct Verified Booking — 100% Authentic Fleet Guarantee</span>
            </div>

            <div className="flex items-center space-x-4 pt-2">
              <a
                href="https://www.instagram.com/nautigoa"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-neutral-900 border border-white/15 flex items-center justify-center text-neutral-300 hover:text-[#C8A96B] hover:border-[#C8A96B] transition-colors"
                aria-label="Instagram"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a
                href="https://www.facebook.com/NautiGoaYachts/"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-neutral-900 border border-white/15 flex items-center justify-center text-neutral-300 hover:text-[#C8A96B] hover:border-[#C8A96B] transition-colors"
                aria-label="Facebook"
              >
                <FacebookIcon className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-serif text-sm tracking-[0.15em] uppercase mb-4 font-bold border-b border-white/10 pb-2 inline-block">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-xs uppercase tracking-widest font-medium">
              <li>
                <Link to="/" className="hover:text-[#C8A96B] transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/yachts" className="hover:text-[#C8A96B] transition-colors">Luxury Fleet</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-[#C8A96B] transition-colors">About NautiGoa</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-[#C8A96B] transition-colors">Contact & Booking</Link>
              </li>
              <li>
                <button onClick={onOpenBooking} className="text-[#C8A96B] hover:underline cursor-pointer">
                  Request Custom Quote
                </button>
              </li>
            </ul>
          </div>

          {/* Destinations */}
          <div>
            <h4 className="text-white font-serif text-sm tracking-[0.15em] uppercase mb-4 font-bold border-b border-white/10 pb-2 inline-block">
              Destinations
            </h4>
            <ul className="space-y-2.5 text-xs uppercase tracking-widest">
              <li className="flex items-center gap-2 text-neutral-300">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C8A96B]"></span>
                <span>Goa (Panjim Base)</span>
              </li>
              <li className="flex items-center gap-2 text-neutral-300">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C8A96B]"></span>
                <span>Mumbai (Gateway)</span>
              </li>
              <li className="flex items-center gap-2 text-neutral-300">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C8A96B]"></span>
                <span>Dubai (Dubai Marina)</span>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-serif text-sm tracking-[0.15em] uppercase mb-4 font-bold border-b border-white/10 pb-2 inline-block">
              Contact Info
            </h4>
            <ul className="space-y-3 text-xs">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#C8A96B] shrink-0 mt-0.5" />
                <span>548, Next to Britona Church, Panjim, Goa, India</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#C8A96B] shrink-0" />
                <a href="tel:+918818899951" className="hover:text-white transition-colors">+91 88188 99951</a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#C8A96B] shrink-0" />
                <a href="mailto:booking@nautigoayachts.com" className="hover:text-white transition-colors">booking@nautigoayachts.com</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-neutral-400">
          <p>© {new Date().getFullYear()} NautiGoa Yachts. All Rights Reserved.</p>
          <div className="flex items-center space-x-6 text-neutral-400 uppercase tracking-widest text-[10px]">
            <span>Goa</span>
            <span>•</span>
            <span>Mumbai</span>
            <span>•</span>
            <span>Dubai</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
