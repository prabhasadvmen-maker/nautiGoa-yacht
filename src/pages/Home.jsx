import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  ChevronDown, 
  Sparkles, 
  ShieldCheck, 
  Anchor, 
  Award, 
  Star, 
  ArrowRight,
  Phone
} from 'lucide-react';
import { YACHTS_DATA, DESTINATIONS_DATA, EXPERIENCES_DATA, TESTIMONIALS_DATA, REASON_FEATURES } from '../data/yachtsData';
import YachtCard from '../components/YachtCard';
import DestinationCard from '../components/DestinationCard';

export default function Home({ onOpenBooking }) {
  useEffect(() => {
    document.title = "NautiGoa | Luxury Yacht Rentals in Goa, Mumbai & Dubai";
  }, []);

  const featuredYachts = YACHTS_DATA.slice(0, 4);

  const galleryImages = [
    { url: "/images/hero_yacht.png", title: "Luxury Azimut Flybridge", loc: "Goa" },
    { url: "/images/catamaran.png", title: "Lagoon Dual-Hull Catamaran", loc: "Mandovi River" },
    { url: "/images/romantic_decor.png", title: "Romantic Candlelight Dinner", loc: "Panjim Sunset" },
    { url: "https://images.unsplash.com/photo-1567899378494-47b22a2ae96a?q=80&w=800&auto=format&fit=crop", title: "Princess 62 Superyacht", loc: "Dubai Marina" },
    { url: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?q=80&w=800&auto=format&fit=crop", title: "Sunseeker 76 Flybridge Deck", loc: "Mumbai Gateway" },
    { url: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80&w=800&auto=format&fit=crop", title: "Sunset Celebration Deck", loc: "Goa Waters" }
  ];

  return (
    <div className="min-h-screen bg-[#050505] text-neutral-100 selection:bg-[#C8A96B] selection:text-black overflow-x-hidden">
      
      {/* 1. HERO SECTION - BALANCED PROPORTIONS ON ALL SCREENS */}
      <section className="relative w-full min-h-0 sm:min-h-[720px] flex items-center overflow-hidden">
        
        {/* Full-screen Yacht Background */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/hero_yacht.png"
            alt="NautiGoa Luxury Yacht"
            className="w-full h-full object-cover object-center scale-105 transition-transform duration-1000"
          />
          {/* Dark elegant overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/85 to-black/40 sm:to-black/20"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-black/80"></div>
          {/* Left-side subtle gold glow */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_left,_rgba(200,169,107,0.15)_0%,_transparent_55%)] pointer-events-none"></div>
        </div>

        {/* Hero Content Wrapper - Clean Clearance below Header */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-20 sm:pt-28 lg:pt-32 pb-10 sm:pb-16">
          <div className="max-w-2xl text-left space-y-3 sm:space-y-5">
            
            {/* Location Tagline Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/80 border border-[#C8A96B]/50 backdrop-blur-md shadow-xl">
              <Sparkles className="w-3 h-3 text-[#C8A96B]" />
              <span className="text-[10px] sm:text-xs uppercase tracking-[0.2em] text-[#C8A96B] font-semibold">
                Goa • Mumbai • Dubai
              </span>
            </div>

            {/* Main Title Heading - Proportional & Clean */}
            <h1 className="font-serif text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-wide text-white uppercase leading-tight">
              EXPERIENCE LUXURY <br />
              <span className="gold-gradient-text drop-shadow-2xl">ON WATER</span>
            </h1>

            {/* Subheading Description */}
            <p className="text-neutral-300 text-xs sm:text-sm md:text-base font-light tracking-wide leading-relaxed max-w-xl">
              Premium Yacht Experiences in Goa, Mumbai & Dubai. Curated private charters, romantic candlelight cruises, and drone photography.
            </p>

            {/* Action CTAs */}
            <div className="pt-2 sm:pt-4 flex flex-col sm:flex-row items-stretch sm:items-center justify-start gap-2.5 sm:gap-4">
              <Link
                to="/yachts"
                className="w-full sm:w-auto px-8 py-3 sm:py-4 bg-[#C8A96B] text-black font-bold text-xs sm:text-sm uppercase tracking-[0.2em] rounded-xs hover:bg-[#D8B97B] transition-all duration-300 shadow-xl flex items-center justify-center gap-2 group cursor-pointer"
              >
                <span>Explore Yachts</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>

              <button
                onClick={() => onOpenBooking()}
                className="w-full sm:w-auto px-8 py-3 sm:py-4 bg-black/60 border border-white/30 hover:border-[#C8A96B] text-white text-xs sm:text-sm uppercase tracking-[0.2em] font-semibold rounded-xs backdrop-blur-md transition-all duration-300 hover:bg-white/10 cursor-pointer flex items-center justify-center"
              >
                Book Your Yacht
              </button>
            </div>

            {/* Verified Trust Badges */}
            <div className="pt-2 sm:pt-4 flex flex-wrap items-center justify-start gap-3 sm:gap-6 text-[10px] sm:text-xs text-neutral-400 font-medium">
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-[#C8A96B]" />
                <span>Direct Verified Charter</span>
              </div>
              <span className="hidden sm:inline">•</span>
              <div className="flex items-center gap-1.5">
                <Award className="w-3.5 h-3.5 text-[#C8A96B]" />
                <span>5-Star Hospitality</span>
              </div>
            </div>

          </div>
        </div>

        {/* Scroll Indicator - Desktop Only */}
        <div className="hidden sm:flex absolute bottom-6 left-12 z-10 flex-col items-start gap-1 text-neutral-400 animate-bounce">
          <span className="text-[10px] uppercase tracking-[0.25em]">Scroll Down</span>
          <ChevronDown className="w-3.5 h-3.5 text-[#C8A96B]" />
        </div>
      </section>

      {/* 2. INTRODUCTION SECTION */}
      <section className="py-16 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div className="space-y-5 sm:space-y-6">
            <div className="flex items-center gap-2 text-[#C8A96B] text-xs font-semibold uppercase tracking-[0.25em]">
              <Anchor className="w-4 h-4" />
              <span>Welcome To NautiGoa</span>
            </div>
            <h2 className="font-serif text-2xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
              Redefining Nautical Opulence & Unforgettable Sea Journeys
            </h2>
            <p className="text-neutral-300 text-xs sm:text-base leading-relaxed font-light">
              NautiGoa is premier luxury yacht rental brand operating across the coastal capitals of Goa, Mumbai, and Dubai. We craft bespoke marine escapes—whether it's an intimate sunset cruise on Mandovi River, a high-energy catamaran birthday celebration, or a mega-yacht gala along Dubai Marina.
            </p>
            <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed">
              Based out of Panjim (next to Britona Church), our handpicked fleet of motor superyachts, twin-hull catamarans, and speedboats are maintained to international safety standards with certified crew.
            </p>
            
            <div className="grid grid-cols-3 gap-2 sm:gap-4 pt-4 border-t border-white/10">
              <div>
                <span className="font-serif text-2xl sm:text-4xl font-bold text-[#C8A96B] block">500+</span>
                <span className="text-[9px] sm:text-xs uppercase tracking-wider text-neutral-400 font-medium">Charters Hosted</span>
              </div>
              <div>
                <span className="font-serif text-2xl sm:text-4xl font-bold text-[#C8A96B] block">3</span>
                <span className="text-[9px] sm:text-xs uppercase tracking-wider text-neutral-400 font-medium">Prime Hubs</span>
              </div>
              <div>
                <span className="font-serif text-2xl sm:text-4xl font-bold text-[#C8A96B] block">100%</span>
                <span className="text-[9px] sm:text-xs uppercase tracking-wider text-neutral-400 font-medium">Direct Verified</span>
              </div>
            </div>
          </div>

          <div className="relative aspect-[4/3] rounded-sm overflow-hidden border border-white/15 shadow-2xl group">
            <img
              src="/images/catamaran.png"
              alt="NautiGoa Catamaran Deck"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-70"></div>
            <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 p-4 sm:p-5 glass-panel border border-[#C8A96B]/30 rounded-xs">
              <p className="text-xs sm:text-sm text-white font-serif tracking-wider font-semibold">
                "Experience the magic of Goa from a whole new perspective."
              </p>
              <span className="text-[9px] sm:text-[10px] text-[#C8A96B] uppercase tracking-widest block mt-1">#NautiGoaYachts</span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. FEATURED YACHTS SECTION */}
      <section className="py-16 sm:py-24 bg-[#090909] border-y border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 sm:space-y-12">
          
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <span className="text-[#C8A96B] text-xs font-semibold uppercase tracking-[0.25em] block mb-1">
                Handpicked Vessels
              </span>
              <h2 className="font-serif text-2xl sm:text-4xl lg:text-5xl font-bold text-white">
                FEATURED LUXURY FLEET
              </h2>
            </div>
            <Link
              to="/yachts"
              className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#C8A96B] font-bold hover:underline"
            >
              <span>View Full Fleet ({YACHTS_DATA.length} Vessels)</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Yacht Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredYachts.map((yacht) => (
              <YachtCard
                key={yacht.id}
                yacht={yacht}
                onBook={(y) => onOpenBooking(y)}
              />
            ))}
          </div>

        </div>
      </section>

      {/* 4. DESTINATIONS SECTION */}
      <section className="py-16 sm:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 sm:space-y-14">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-[#C8A96B] text-xs font-semibold uppercase tracking-[0.25em]">
            Elite Locations
          </span>
          <h2 className="font-serif text-2xl sm:text-4xl lg:text-5xl font-bold text-white">
            DESTINATIONS WE SERVE
          </h2>
          <p className="text-neutral-400 text-xs sm:text-sm font-light">
            From golden beach waters in Goa to glittering coastal baylines in Mumbai and Dubai.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {DESTINATIONS_DATA.map((dest) => (
            <DestinationCard key={dest.id} destination={dest} />
          ))}
        </div>
      </section>

      {/* 5. LUXURY EXPERIENCES & SERVICES */}
      <section className="py-16 sm:py-24 bg-[#080808] border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 sm:space-y-12">
          
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-[#C8A96B] text-xs font-semibold uppercase tracking-[0.25em]">
              Bespoke Services
            </span>
            <h2 className="font-serif text-2xl sm:text-4xl lg:text-5xl font-bold text-white">
              PRIVATE YACHT EXPERIENCES
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {EXPERIENCES_DATA.map((exp) => (
              <div
                key={exp.id}
                className="group bg-[#121212] border border-white/10 rounded-sm overflow-hidden flex flex-col hover:border-[#C8A96B]/50 transition-all duration-300 shadow-xl"
              >
                <div className="relative aspect-[16/11] overflow-hidden bg-black">
                  <img
                    src={exp.image}
                    alt={exp.title}
                    className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent"></div>
                </div>
                <div className="p-5 sm:p-6 space-y-2 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-serif text-base sm:text-lg font-bold text-white group-hover:text-[#C8A96B] transition-colors">
                      {exp.title}
                    </h3>
                    <span className="text-[10px] sm:text-[11px] text-[#C8A96B] uppercase tracking-wider block mb-2 font-medium">
                      {exp.subtitle}
                    </span>
                    <p className="text-xs text-neutral-400 leading-relaxed font-light">
                      {exp.description}
                    </p>
                  </div>
                  <div className="pt-4">
                    <button
                      onClick={() => onOpenBooking()}
                      className="text-xs uppercase tracking-widest text-[#C8A96B] font-bold hover:underline flex items-center gap-1 cursor-pointer"
                    >
                      <span>Inquire Package</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 6. WHY CHOOSE NAUTIGOA */}
      <section className="py-16 sm:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass-panel border border-[#C8A96B]/30 rounded-sm p-6 sm:p-14 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 items-center">
            
            <div className="lg:col-span-1 space-y-4">
              <span className="text-[#C8A96B] text-xs font-semibold uppercase tracking-[0.25em]">
                The NautiGoa Standard
              </span>
              <h2 className="font-serif text-2xl sm:text-4xl font-bold text-white">
                WHY BOOK WITH NAUTIGOA?
              </h2>
              <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed font-light">
                We eliminate middleman markups, fake yacht listings, and hidden fees. Direct booking ensures verified vessels and top-tier hospitality.
              </p>
              <button
                onClick={() => onOpenBooking()}
                className="w-full sm:w-auto px-7 py-3.5 bg-[#C8A96B] text-black font-bold text-xs uppercase tracking-[0.2em] rounded-xs hover:bg-[#D8B97B] transition-colors cursor-pointer shadow-lg"
              >
                Book Directly With Us
              </button>
            </div>

            <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              {REASON_FEATURES.map((feat, idx) => (
                <div key={idx} className="p-5 sm:p-6 bg-black/70 border border-white/10 rounded-xs space-y-2 sm:space-y-3 hover:border-[#C8A96B]/40 transition-colors">
                  <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#C8A96B]/20 border border-[#C8A96B]/50 flex items-center justify-center text-[#C8A96B]">
                    <Sparkles className="w-4 h-4" />
                  </div>
                  <h4 className="font-serif text-sm sm:text-base font-bold text-white">{feat.title}</h4>
                  <p className="text-xs text-neutral-400 leading-relaxed font-light">{feat.desc}</p>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* 7. CUSTOMER TESTIMONIALS */}
      <section className="py-16 sm:py-24 bg-[#080808]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 sm:space-y-12">
          <div className="text-center space-y-2">
            <span className="text-[#C8A96B] text-xs font-semibold uppercase tracking-[0.25em]">
              Real Guest Experiences
            </span>
            <h2 className="font-serif text-2xl sm:text-4xl lg:text-5xl font-bold text-white">
              CLIENT TESTIMONIALS
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {TESTIMONIALS_DATA.map((test) => (
              <div
                key={test.id}
                className="p-6 sm:p-8 bg-[#121212] border border-white/10 rounded-sm space-y-4 relative flex flex-col justify-between hover:border-[#C8A96B]/40 transition-colors"
              >
                <div className="space-y-3">
                  <div className="flex items-center gap-1 text-[#C8A96B]">
                    {[...Array(test.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-current" />
                    ))}
                  </div>
                  <p className="text-neutral-300 text-xs sm:text-sm italic leading-relaxed font-light">
                    "{test.comment}"
                  </p>
                </div>
                <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                  <div>
                    <h4 className="font-serif text-xs sm:text-sm font-bold text-white">{test.name}</h4>
                    <span className="text-[9px] sm:text-[10px] text-neutral-400 uppercase tracking-wider">{test.location}</span>
                  </div>
                  <span className="text-[9px] sm:text-[10px] px-2 py-0.5 bg-black border border-[#C8A96B]/30 text-[#C8A96B] rounded font-mono">
                    {test.yacht}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. GALLERY GRID */}
      <section className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 sm:space-y-10">
        <div className="text-center space-y-2">
          <span className="text-[#C8A96B] text-xs font-semibold uppercase tracking-[0.25em]">
            Visual Moments
          </span>
          <h2 className="font-serif text-2xl sm:text-4xl lg:text-5xl font-bold text-white">
            NAUTIGOA GALLERY
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4">
          {galleryImages.map((img, idx) => (
            <div key={idx} className="group relative aspect-square overflow-hidden rounded-xs bg-black border border-white/10">
              <img
                src={img.url}
                alt={img.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-3 sm:p-4 flex flex-col justify-end">
                <span className="text-[10px] sm:text-[11px] text-[#C8A96B] uppercase font-bold tracking-widest">{img.loc}</span>
                <h4 className="text-xs sm:text-sm font-serif text-white font-bold">{img.title}</h4>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 9. FINAL CTA BANNER */}
      <section className="py-20 sm:py-28 bg-gradient-to-b from-[#0a0a0a] to-black border-t border-white/10 relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-6 relative z-10">
          <span className="text-[#C8A96B] text-xs font-semibold uppercase tracking-[0.3em]">
            Book Your Charter Today
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold text-white uppercase tracking-tight">
            YOUR LUXURY EXPERIENCE STARTS HERE
          </h2>
          <p className="text-neutral-300 text-xs sm:text-base max-w-xl mx-auto font-light leading-relaxed">
            Connect with our charter manager directly via WhatsApp or Phone to lock in your date for Goa, Mumbai, or Dubai.
          </p>
          <div className="pt-2 sm:pt-4 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
            <button
              onClick={() => onOpenBooking()}
              className="w-full sm:w-auto px-10 py-4 bg-[#C8A96B] text-black font-bold text-xs uppercase tracking-[0.2em] rounded-xs hover:bg-[#D8B97B] transition-all shadow-xl cursor-pointer"
            >
              Reserve Yacht Now
            </button>
            <a
              href="tel:+918818899951"
              className="w-full sm:w-auto px-8 py-4 bg-transparent border border-white/20 text-neutral-200 hover:text-white text-xs uppercase tracking-[0.2em] rounded-xs flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4 text-[#C8A96B]" />
              <span>Call +91 88188 99951</span>
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
