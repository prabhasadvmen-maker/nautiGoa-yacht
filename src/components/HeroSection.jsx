import { Link } from 'react-router-dom';
import { ShieldCheck, Gem, Users, ArrowRight, ArrowDown } from 'lucide-react';

export default function HeroSection({ onOpenBooking }) {
  const handleScrollDown = () => {
    window.scrollTo({
      top: window.innerHeight * 0.88,
      behavior: 'smooth'
    });
  };

  return (
    <section className="relative w-full min-h-[100dvh] sm:min-h-[820px] flex flex-col justify-between overflow-hidden bg-black selection:bg-[#C8A96B] selection:text-black">
      
      {/* Background Video */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          poster="/Hero_section1.png"
          className="w-full h-full object-cover object-center"
        >
          <source src="/Herosection%20video.mp4" type="video/mp4" />
          <img
            src="/Hero_section1.png"
            alt="NautiGoa Luxury Yacht Experience"
            className="w-full h-full object-cover object-center"
          />
        </video>
        {/* Vignette gradient overlay for 100% sharp text legibility */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/20 to-black/80 pointer-events-none"></div>
      </div>

      {/* Main Hero Content - Matching Reference Layout */}
      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 w-full pt-32 sm:pt-40 lg:pt-44 pb-12 flex-1 flex flex-col justify-center">
        <div className="max-w-2xl text-left space-y-5 sm:space-y-6">
          
          {/* Top Location / Tagline */}
          <div className="flex items-center gap-3">
            <span className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.35em] text-[#C8A96B] drop-shadow-md">
              GOA • MUMBAI • DUBAI
            </span>
          </div>

          {/* Main Typography Header */}
          <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-[80px] font-bold tracking-normal leading-[1.06] drop-shadow-lg">
            <span className="block text-white uppercase drop-shadow-md">EXPERIENCE</span>
            <span className="block text-[#C8A96B] uppercase drop-shadow-md">
              LUXURY
            </span>
            <span className="block text-white uppercase drop-shadow-md">ON WATER</span>
          </h1>

          {/* Subtext description */}
          <p className="text-neutral-100 text-sm sm:text-base font-medium tracking-wide leading-relaxed max-w-lg drop-shadow-md">
            Premium Yacht Experiences for Unforgettable Moments
          </p>

          {/* Gold Accent Divider Bar */}
          <div className="w-12 h-[2px] bg-[#C8A96B] rounded-full"></div>

          {/* CTA Buttons */}
          <div className="pt-2 sm:pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 max-w-md">
            <Link
              to="/yachts"
              className="w-full sm:w-auto px-8 py-3.5 bg-[#C8A96B] text-black font-semibold text-xs sm:text-sm rounded-full hover:bg-[#D8B97B] transition-all duration-300 shadow-lg flex items-center justify-center gap-2 group cursor-pointer"
            >
              <span>Explore Yachts</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>

            <button
              onClick={() => onOpenBooking()}
              className="w-full sm:w-auto px-8 py-3.5 bg-black/40 border border-white/40 hover:border-[#C8A96B] text-white text-xs sm:text-sm font-medium rounded-full transition-all duration-300 hover:bg-black/60 cursor-pointer flex items-center justify-center"
            >
              Book Your Yacht
            </button>
          </div>

          {/* 3 Key Trust Badges / Pillars Row - Full width 3-column grid on mobile & desktop */}
          <div className="pt-6 sm:pt-10 border-t border-white/10 w-full max-w-3xl">
            <div className="grid grid-cols-3 gap-2 sm:gap-6">
              
              {/* Feature 1 */}
              <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-2 sm:gap-3.5 group">
                <div className="w-8.5 h-8.5 sm:w-10 sm:h-10 rounded-full bg-black/40 border border-[#C8A96B]/50 flex items-center justify-center text-[#C8A96B] shrink-0 group-hover:bg-[#C8A96B] group-hover:text-black transition-all duration-300 shadow-md">
                  <ShieldCheck className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-[10px] sm:text-sm text-white leading-tight">
                    Trusted & Safe
                  </h4>
                  <p className="text-[9px] sm:text-[11px] text-neutral-300 font-light mt-0.5">
                    100% Verified Safety
                  </p>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-2 sm:gap-3.5 group">
                <div className="w-8.5 h-8.5 sm:w-10 sm:h-10 rounded-full bg-black/40 border border-[#C8A96B]/50 flex items-center justify-center text-[#C8A96B] shrink-0 group-hover:bg-[#C8A96B] group-hover:text-black transition-all duration-300 shadow-md">
                  <Gem className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-[10px] sm:text-sm text-white leading-tight">
                    Luxury Fleet
                  </h4>
                  <p className="text-[9px] sm:text-[11px] text-neutral-300 font-light mt-0.5">
                    Premium Yachts
                  </p>
                </div>
              </div>

              {/* Feature 3 */}
              <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-2 sm:gap-3.5 group">
                <div className="w-8.5 h-8.5 sm:w-10 sm:h-10 rounded-full bg-black/40 border border-[#C8A96B]/50 flex items-center justify-center text-[#C8A96B] shrink-0 group-hover:bg-[#C8A96B] group-hover:text-black transition-all duration-300 shadow-md">
                  <Users className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-[10px] sm:text-sm text-white leading-tight">
                    Best Memories
                  </h4>
                  <p className="text-[9px] sm:text-[11px] text-neutral-300 font-light mt-0.5">
                    For Every Occasion
                  </p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* Bottom Bar: Scroll Down & Slide Indicators */}
      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 w-full pb-8 pt-4 flex items-center justify-between">
        
        {/* Bottom Left: Scroll Down Button */}
        <button
          onClick={handleScrollDown}
          className="flex items-center gap-2.5 text-[10px] sm:text-xs uppercase tracking-[0.25em] text-neutral-300 hover:text-[#C8A96B] transition-colors cursor-pointer group"
        >
          <div className="w-6 h-6 rounded-full border border-white/30 group-hover:border-[#C8A96B] flex items-center justify-center">
            <ArrowDown className="w-3.5 h-3.5 group-hover:translate-y-0.5 transition-transform" />
          </div>
          <span className="font-medium">SCROLL DOWN</span>
        </button>

        {/* Bottom Right: Slide indicator numbers matching design */}
        <div className="flex items-center gap-4 text-xs font-mono">
          <div className="flex items-center gap-4">
            <span className="text-white font-bold scale-110 py-1 relative">
              01
              <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#C8A96B] rounded-full shadow-[0_0_8px_#C8A96B]"></span>
            </span>
            <span className="w-8 sm:w-12 h-[1px] bg-[#C8A96B]"></span>
            <span className="text-neutral-500 font-normal">02</span>
            <span className="w-8 sm:w-12 h-[1px] bg-white/20"></span>
            <span className="text-neutral-500 font-normal">03</span>
          </div>
        </div>

      </div>

    </section>
  );
}
