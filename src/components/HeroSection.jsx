import { ArrowUpRight, ArrowDown } from 'lucide-react';

export default function HeroSection({ onOpenBooking }) {
  const handleScrollDown = () => {
    window.scrollTo({
      top: window.innerHeight * 0.88,
      behavior: 'smooth'
    });
  };

  return (
    <section className="relative w-full min-h-[75dvh] sm:min-h-[580px] lg:min-h-[640px] flex flex-col justify-between overflow-hidden bg-black selection:bg-[#C8A96B] selection:text-black">
      
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
        {/* Subtle Vignette Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-transparent pointer-events-none"></div>
        {/* Smooth White Gradient Fade at Bottom matching reference image 2 */}
        <div className="absolute bottom-0 left-0 right-0 h-28 sm:h-36 bg-gradient-to-b from-transparent via-white/70 to-white pointer-events-none z-[2]"></div>
      </div>

      {/* Main Hero Centered Content - Matching Reference Design */}
      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 w-full pt-20 sm:pt-28 lg:pt-32 xl:pt-36 pb-6 flex-1 flex flex-col justify-center items-center text-center">
        <div className="max-w-3xl space-y-6 sm:space-y-8">
          
          {/* Main Typography Header: "Experience the Adriatic in Style" style */}
          <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-[76px] text-white font-normal tracking-tight leading-[1.1] drop-shadow-xl">
            Experience the <span className="font-serif italic font-normal text-white">Sea</span> in Style
          </h1>

          {/* Subtitle text matching reference */}
          <p className="text-neutral-100 text-sm sm:text-base md:text-lg font-light tracking-wide leading-relaxed max-w-2xl mx-auto drop-shadow-md">
            Discover the perfect combination of speed, luxury and breathtaking coastal views aboard NautiGoa’s premium yacht experience in Goa, Mumbai & Dubai.
          </p>

          {/* Pill Action Buttons Row */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto">
            <button
              onClick={() => onOpenBooking()}
              className="w-full sm:w-auto px-8 py-3.5 bg-[#0e1726]/90 hover:bg-black text-white font-medium text-xs sm:text-sm rounded-full transition-all duration-300 shadow-xl border border-white/20 flex items-center justify-center gap-2 cursor-pointer active:scale-95"
            >
              <span>Book Your Experience</span>
              <ArrowUpRight className="w-4 h-4 text-white stroke-[2.5]" />
            </button>

            <button
              onClick={() => onOpenBooking()}
              className="w-full sm:w-auto px-8 py-3.5 bg-white/10 hover:bg-white/20 border border-white/60 text-white font-medium text-xs sm:text-sm rounded-full transition-all duration-300 backdrop-blur-md cursor-pointer flex items-center justify-center gap-2 active:scale-95"
            >
              <span>Check Availability</span>
              <ArrowUpRight className="w-4 h-4 text-white stroke-[2.5]" />
            </button>
          </div>

        </div>
      </div>

      {/* Bottom Bar: Scroll Down & Slide Indicators */}
      <div className="relative z-20 max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 w-full pb-8 pt-4 flex items-center justify-between">
        
        {/* Bottom Left: Scroll Down Button */}
        <button
          onClick={handleScrollDown}
          className="flex items-center gap-2.5 text-[10px] sm:text-xs uppercase tracking-[0.25em] text-neutral-800 hover:text-black transition-colors cursor-pointer group font-medium"
        >
          <div className="w-6 h-6 rounded-full border border-neutral-800/40 group-hover:border-black flex items-center justify-center">
            <ArrowDown className="w-3.5 h-3.5 group-hover:translate-y-0.5 transition-transform text-neutral-800" />
          </div>
          <span className="font-semibold">SCROLL DOWN</span>
        </button>

        {/* Bottom Right: Slide indicator numbers */}
        <div className="flex items-center gap-4 text-xs font-mono">
          <div className="flex items-center gap-4">
            <span className="text-black font-bold scale-110 py-1 relative">
              01
              <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-black rounded-full"></span>
            </span>
            <span className="w-8 sm:w-12 h-[1px] bg-black/40"></span>
            <span className="text-neutral-500 font-normal">02</span>
            <span className="w-8 sm:w-12 h-[1px] bg-black/20"></span>
            <span className="text-neutral-500 font-normal">03</span>
          </div>
        </div>

      </div>

    </section>
  );
}
