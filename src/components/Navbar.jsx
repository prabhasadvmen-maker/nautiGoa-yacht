import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Anchor } from 'lucide-react';

export default function Navbar({ onOpenBooking }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile drawer on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Yachts Fleet', path: '/yachts' },
    { name: 'About Us', path: '/about' },
    { name: 'Contact & Booking', path: '/contact' },
  ];

  const isActive = (path) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'glass-nav py-2.5 sm:py-3 shadow-2xl border-b border-white/10'
          : 'bg-gradient-to-b from-black/95 via-black/70 to-transparent py-3 sm:py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Logo - Proportional on 320px screens */}
          <Link to="/" className="flex items-center gap-2.5 sm:gap-3 group shrink-0">
            <div className="relative w-8 h-8 sm:w-11 sm:h-11 rounded-full overflow-hidden border border-[#C8A96B]/60 shadow-lg group-hover:border-[#C8A96B] transition-colors shrink-0 bg-black">
              <img
                src="/Logo.jpg"
                alt="NautiGoa Yachts Logo"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-base sm:text-xl font-serif tracking-widest text-white font-bold leading-none uppercase">
                Nauti<span className="text-[#C8A96B]">Goa</span>
              </span>
              <span className="text-[8px] sm:text-[10px] tracking-[0.25em] text-neutral-400 font-sans uppercase font-semibold mt-0.5 sm:mt-1">
                Luxury Yachts
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-xs uppercase tracking-[0.2em] transition-all duration-200 font-medium py-1 relative ${
                  isActive(link.path)
                    ? 'text-[#C8A96B] font-bold'
                    : 'text-neutral-300 hover:text-white'
                }`}
              >
                {link.name}
                {isActive(link.path) && (
                  <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#C8A96B] rounded-full shadow-[0_0_8px_#C8A96B]"></span>
                )}
              </Link>
            ))}
          </nav>

          {/* Desktop Phone & Book CTAs */}
          <div className="hidden md:flex items-center gap-5">
            <a
              href="tel:+918818899951"
              className="flex items-center gap-2 text-xs uppercase tracking-wider text-neutral-300 hover:text-[#C8A96B] transition-colors px-2 py-1"
            >
              <Phone className="w-3.5 h-3.5 text-[#C8A96B]" />
              <span>+91 88188 99951</span>
            </a>

            <button
              onClick={() => onOpenBooking()}
              className="px-6 py-2.5 bg-[#C8A96B] text-black font-bold text-xs uppercase tracking-[0.15em] rounded-xs hover:bg-[#D8B97B] transition-all duration-200 shadow-lg hover:shadow-[#C8A96B]/20 active:scale-95 flex items-center gap-2 cursor-pointer"
            >
              <Anchor className="w-3.5 h-3.5" />
              <span>Book Now</span>
            </button>
          </div>

          {/* Mobile Header Actions (Compact & Touch-friendly) */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={() => onOpenBooking()}
              className="px-3 py-1.5 bg-[#C8A96B] text-black font-bold text-[11px] uppercase tracking-wider rounded-xs active:scale-95 shadow-md flex items-center gap-1"
            >
              <Anchor className="w-3 h-3" />
              <span>Book</span>
            </button>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-neutral-200 hover:text-white focus:outline-none rounded-xs border border-white/15 bg-neutral-950 min-h-[38px] min-w-[38px] flex items-center justify-center"
              aria-label="Toggle Navigation Menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-5 h-5 text-[#C8A96B]" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu - Full viewport protection */}
      {isMobileMenuOpen && (
        <div className="md:hidden glass-panel border-t border-white/15 mt-2 py-5 px-5 shadow-2xl animate-fadeIn max-h-[85vh] overflow-y-auto">
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-xs uppercase tracking-[0.2em] font-semibold py-3 border-b border-white/5 transition-all flex items-center justify-between ${
                  isActive(link.path)
                    ? 'text-[#C8A96B] font-bold pl-2 border-[#C8A96B]/40'
                    : 'text-neutral-300 hover:text-white'
                }`}
              >
                <span>{link.name}</span>
                {isActive(link.path) && <span className="w-1.5 h-1.5 rounded-full bg-[#C8A96B]"></span>}
              </Link>
            ))}

            <div className="pt-3 flex flex-col gap-3">
              <a
                href="tel:+918818899951"
                className="flex items-center justify-center gap-2 text-xs uppercase tracking-wider text-neutral-200 border border-white/15 py-3 rounded-xs bg-black/60 font-medium"
              >
                <Phone className="w-3.5 h-3.5 text-[#C8A96B]" />
                <span>Call +91 88188 99951</span>
              </a>

              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full py-3.5 bg-[#C8A96B] text-black font-bold text-xs uppercase tracking-[0.2em] rounded-xs text-center shadow-lg active:scale-95"
              >
                Book Your Yacht Experience
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
