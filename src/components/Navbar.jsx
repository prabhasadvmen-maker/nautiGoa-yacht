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
          ? 'bg-black/90 backdrop-blur-xl py-3 shadow-2xl border-b border-white/10 text-white'
          : 'bg-transparent py-4 sm:py-5 text-white'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Logo */}
          <Link to="/" className="flex items-center gap-3 group shrink-0">
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full overflow-hidden border border-[#C8A96B]/60 shadow-lg group-hover:border-[#C8A96B] transition-colors shrink-0 bg-black">
              <img
                src="/Logo.jpg"
                alt="NautiGoa Yachts Logo"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-xl sm:text-2xl font-sans tracking-tight text-white leading-none drop-shadow-md">
                <span className="font-light text-white">Nauti</span>
                <span className="font-black text-[#C8A96B]">GOA</span>
              </span>
              <span className="text-[9px] sm:text-[10px] tracking-[0.25em] text-white/90 font-sans uppercase font-bold mt-1 drop-shadow-sm">
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
                className={`text-xs uppercase tracking-[0.2em] transition-colors duration-200 font-bold py-1 relative drop-shadow-md ${
                  isActive(link.path)
                    ? 'text-[#C8A96B]'
                    : 'text-white hover:text-[#C8A96B]'
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
              className="flex items-center gap-2 text-xs uppercase tracking-wider text-white hover:text-[#C8A96B] transition-colors px-2 py-1 font-semibold drop-shadow-md"
            >
              <Phone className="w-3.5 h-3.5 text-[#C8A96B]" />
              <span>+91 88188 99951</span>
            </a>

            <button
              onClick={() => onOpenBooking()}
              className="px-6 py-2.5 bg-[#C8A96B] text-black font-bold text-xs uppercase tracking-[0.15em] rounded-full hover:bg-[#D8B97B] transition-all duration-200 shadow-xl hover:shadow-[#C8A96B]/40 active:scale-95 flex items-center gap-2 cursor-pointer"
            >
              <Anchor className="w-3.5 h-3.5" />
              <span>Book Now</span>
            </button>
          </div>

          {/* Mobile Navigation Button */}
          <div className="flex md:hidden items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-white hover:text-[#C8A96B] focus:outline-none rounded-xs min-h-[40px] min-w-[40px] flex items-center justify-center"
              aria-label="Toggle Navigation Menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6 text-[#C8A96B]" />
              ) : (
                <Menu className="w-6 h-6 text-white stroke-[2.5]" />
              )}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden glass-panel border-t border-white/15 mt-2 py-6 px-6 shadow-2xl animate-fadeIn max-h-[85vh] overflow-y-auto">
          <div className="flex flex-col space-y-4">
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

            <div className="pt-4 flex flex-col gap-3">
              <a
                href="tel:+918818899951"
                className="flex items-center justify-center gap-2 text-xs uppercase tracking-wider text-neutral-200 border border-white/15 py-3 rounded-full bg-black/60 font-medium"
              >
                <Phone className="w-3.5 h-3.5 text-[#C8A96B]" />
                <span>Call +91 88188 99951</span>
              </a>

              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full py-3.5 bg-[#C8A96B] text-black font-bold text-xs uppercase tracking-[0.2em] rounded-full text-center shadow-lg active:scale-95 cursor-pointer"
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
