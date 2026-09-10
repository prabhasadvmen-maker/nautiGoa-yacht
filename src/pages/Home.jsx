import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { 
  Sparkles, 
  ShieldCheck, 
  Anchor, 
  Award, 
  Star, 
  ArrowRight,
  Phone,
  Waves,
  Gem,
  Users,
  Play,
  RotateCcw
} from 'lucide-react';
import { YACHTS_DATA, DESTINATIONS_DATA, EXPERIENCES_DATA, TESTIMONIALS_DATA, REASON_FEATURES } from '../data/yachtsData';
import HeroSection from '../components/HeroSection';
import YachtCard from '../components/YachtCard';
import DestinationCard from '../components/DestinationCard';

export default function Home({ onOpenBooking }) {
  const [isPlayingInline, setIsPlayingInline] = useState(false);
  const inlineVideoRef = useRef(null);

  useEffect(() => {
    document.title = "NautiGoa | Luxury Yacht Rentals in Goa, Mumbai & Dubai";
  }, []);

  const handlePlayInline = () => {
    if (inlineVideoRef.current) {
      inlineVideoRef.current.muted = false;
      inlineVideoRef.current.controls = true;
      inlineVideoRef.current.play();
      setIsPlayingInline(true);
    }
  };

  const featuredYachts = YACHTS_DATA.slice(0, 4);

  const galleryImages = [
    { url: "/Hero_section1.png", title: "Luxury Azimut Flybridge", loc: "Goa" },
    { url: "/images/catamaran.png", title: "Lagoon Dual-Hull Catamaran", loc: "Mandovi River" },
    { url: "/images/romantic_decor.png", title: "Romantic Candlelight Dinner", loc: "Panjim Sunset" },
    { url: "https://images.unsplash.com/photo-1567899378494-47b22a2ae96a?q=80&w=800&auto=format&fit=crop", title: "Princess 62 Superyacht", loc: "Dubai Marina" },
    { url: "https://images.unsplash.com/photo-1569263979104-865ab7cd8d13?q=80&w=800&auto=format&fit=crop", title: "Sunseeker 76 Flybridge Deck", loc: "Mumbai Gateway" },
    { url: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80&w=800&auto=format&fit=crop", title: "Sunset Celebration Deck", loc: "Goa Waters" }
  ];

  return (
    <div className="min-h-screen bg-[#FAF9F6] text-[#151515] selection:bg-[#C8A96B] selection:text-white overflow-x-hidden">
      
      {/* 1. HERO SECTION */}
      <HeroSection onOpenBooking={onOpenBooking} />

      {/* 2. IT'S A LIFESTYLE SECTION */}
      <section className="bg-white text-neutral-900 rounded-t-3xl sm:rounded-t-[40px] px-5 sm:px-8 lg:px-12 py-16 sm:py-24 relative z-20 -mt-6 sm:-mt-8 shadow-2xl border-b border-neutral-200">
        <div className="max-w-5xl mx-auto space-y-12 sm:space-y-16">
          
          {/* Section Header */}
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-[11px] sm:text-xs uppercase tracking-[0.3em] text-[#C8A96B] font-bold">
              MORE THAN A JOURNEY
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#151515]">
              It's a Lifestyle
            </h2>
            <p className="text-neutral-600 text-xs sm:text-sm md:text-base leading-relaxed font-light pt-2">
              NautiGoa offers premium yacht rentals for those who seek extraordinary experiences on the water. Celebrate, relax and create unforgettable memories with us.
            </p>
          </div>

          {/* 3 Icon Feature Grid */}
          <div className="grid grid-cols-3 gap-3 sm:gap-8 border-y border-neutral-200 py-8 text-center">
            
            <div className="space-y-2 flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-[#FAF9F6] border border-[#C8A96B]/30 flex items-center justify-center text-[#C8A96B] shadow-sm">
                <Waves className="w-6 h-6" />
              </div>
              <h4 className="font-serif text-xs sm:text-sm font-bold text-[#151515]">
                Premium Yachts
              </h4>
            </div>

            <div className="space-y-2 flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-[#FAF9F6] border border-[#C8A96B]/30 flex items-center justify-center text-[#C8A96B] shadow-sm">
                <Gem className="w-6 h-6" />
              </div>
              <h4 className="font-serif text-xs sm:text-sm font-bold text-[#151515]">
                Unforgettable Experiences
              </h4>
            </div>

            <div className="space-y-2 flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-[#FAF9F6] border border-[#C8A96B]/30 flex items-center justify-center text-[#C8A96B] shadow-sm">
                <Users className="w-6 h-6" />
              </div>
              <h4 className="font-serif text-xs sm:text-sm font-bold text-[#151515]">
                Professional Crew
              </h4>
            </div>

          </div>

          {/* Video / Story Card - Inline Click to Play without Popup Modal */}
          <div
            className="relative aspect-[16/9] sm:aspect-[21/9] rounded-3xl overflow-hidden border border-neutral-200 shadow-2xl group cursor-pointer bg-neutral-900"
            onClick={!isPlayingInline ? handlePlayInline : undefined}
          >
            <video
              ref={inlineVideoRef}
              autoPlay
              loop
              muted
              playsInline
              poster="/Hero_section1.png"
              className="w-full h-full object-cover"
            >
              <source src="/Video.mp4" type="video/mp4" />
            </video>

            {/* Initial Overlay - Hidden once user clicks to play inline */}
            {!isPlayingInline && (
              <>
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors"></div>

                <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4 space-y-3">
                  <div className="w-16 h-16 rounded-full bg-[#C8A96B] text-black border border-white/40 flex items-center justify-center group-hover:scale-110 transition-transform shadow-2xl">
                    <Play className="w-7 h-7 fill-current translate-x-0.5" />
                  </div>
                  <span className="text-xs sm:text-sm font-serif font-bold text-white tracking-widest uppercase drop-shadow-md bg-black/50 px-4 py-1.5 rounded-full border border-white/20">
                    Watch Our Story
                  </span>
                </div>
              </>
            )}
          </div>

        </div>
      </section>

      {/* 3. FEATURED YACHTS SECTION */}
      <section className="py-24 bg-[#FAF9F6] text-neutral-900 border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
            <div>
              <span className="text-[#C8A96B] text-xs font-bold uppercase tracking-[0.25em] block mb-2">
                Handpicked Vessels
              </span>
              <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#151515]">
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
      <section className="py-28 bg-white text-neutral-900 border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-[#C8A96B] text-xs font-bold uppercase tracking-[0.25em]">
              Elite Locations
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#151515]">
              DESTINATIONS WE SERVE
            </h2>
            <p className="text-neutral-600 text-xs sm:text-sm font-light">
              From golden beach waters in Goa to glittering coastal baylines in Mumbai and Dubai.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {DESTINATIONS_DATA.map((dest) => (
              <DestinationCard key={dest.id} destination={dest} />
            ))}
          </div>
        </div>
      </section>

      {/* 5. LUXURY EXPERIENCES & SERVICES - Bento Grid Matching Reference Design */}
      <section className="py-24 bg-[#FAF9F6] text-neutral-900 border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          {/* Section Header */}
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-[#C8A96B] text-xs font-bold uppercase tracking-[0.3em] block">
              EXPERIENCES
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#151515]">
              Moments Worth Remembering
            </h2>
            <p className="text-neutral-600 text-xs sm:text-sm font-light pt-1">
              Curated private yacht journeys designed for celebrations, romance, and luxury coastal escapes.
            </p>
          </div>

          {/* Bento Photo Grid Matching Reference Image */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 sm:gap-5">
            
            {/* Top Left: Tall Red/White Yacht Speeding Card */}
            <div
              onClick={() => onOpenBooking()}
              className="md:col-span-4 md:row-span-2 group relative aspect-[4/5] md:aspect-auto min-h-[320px] rounded-2xl sm:rounded-3xl overflow-hidden bg-neutral-900 shadow-xl border border-neutral-200/80 cursor-pointer"
            >
              <img
                src="https://images.unsplash.com/photo-1569263979104-865ab7cd8d13?q=80&w=1000&auto=format&fit=crop"
                alt="Speedboat & Island Tours"
                className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent opacity-95 group-hover:opacity-100 transition-opacity p-6 flex flex-col justify-end text-white">
                <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-[#C8A96B] mb-1">
                  Speed & Island Tours
                </span>
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-white">
                  Thrilling Ocean Rides
                </h3>
                <p className="text-xs text-neutral-300 font-light mt-1 line-clamp-2">
                  High-speed coastal cruises and secret island stopovers in Goa and Dubai.
                </p>
                <div className="pt-3">
                  <span className="inline-flex items-center gap-1 text-xs font-bold text-[#C8A96B] uppercase tracking-wider group-hover:underline">
                    <span>Book Experience</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            </div>

            {/* Top Center Upper: Horizontal Beach Aerial */}
            <div
              onClick={() => onOpenBooking()}
              className="md:col-span-4 group relative aspect-[16/10] rounded-2xl sm:rounded-3xl overflow-hidden bg-neutral-900 shadow-xl border border-neutral-200/80 cursor-pointer"
            >
              <img
                src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1000&auto=format&fit=crop"
                alt="Golden Hour Sunset Cruise"
                className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent p-5 flex flex-col justify-end text-white">
                <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-[#C8A96B] mb-0.5">
                  Sunset Cruise
                </span>
                <h3 className="font-serif text-lg font-bold text-white">
                  Golden Hour Sunset Cruise
                </h3>
                <span className="text-xs text-neutral-300 font-light">
                  Watch golden ocean horizons with chilled drinks.
                </span>
              </div>
            </div>

            {/* Top Right: Tall Aerial Speedboat Wake */}
            <div
              onClick={() => onOpenBooking()}
              className="md:col-span-4 md:row-span-2 group relative aspect-[4/5] md:aspect-auto min-h-[320px] rounded-2xl sm:rounded-3xl overflow-hidden bg-neutral-900 shadow-xl border border-neutral-200/80 cursor-pointer"
            >
              <img
                src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80&w=1000&auto=format&fit=crop"
                alt="Pre-Wedding & Drone Shoots"
                className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent opacity-95 group-hover:opacity-100 transition-opacity p-6 flex flex-col justify-end text-white">
                <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-[#C8A96B] mb-1">
                  Drone Photography
                </span>
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-white">
                  Pre-Wedding & Drone Shoots
                </h3>
                <p className="text-xs text-neutral-300 font-light mt-1 line-clamp-2">
                  Cinematic 4K aerial photography on catamaran sun trampoline decks.
                </p>
                <div className="pt-3">
                  <span className="inline-flex items-center gap-1 text-xs font-bold text-[#C8A96B] uppercase tracking-wider group-hover:underline">
                    <span>Book Experience</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            </div>

            {/* Top Center Lower: Horizontal Green Bay Aerial */}
            <div
              onClick={() => onOpenBooking()}
              className="md:col-span-4 group relative aspect-[16/10] rounded-2xl sm:rounded-3xl overflow-hidden bg-neutral-900 shadow-xl border border-neutral-200/80 cursor-pointer"
            >
              <img
                src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1000&auto=format&fit=crop"
                alt="Romantic Couples & Proposals"
                className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent p-5 flex flex-col justify-end text-white">
                <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-[#C8A96B] mb-0.5">
                  Romance & Proposals
                </span>
                <h3 className="font-serif text-lg font-bold text-white">
                  Romantic Candlelight Setup
                </h3>
                <span className="text-xs text-neutral-300 font-light">
                  Custom floral decor, champagne & private deck dining.
                </span>
              </div>
            </div>

            {/* Bottom Row Item 1: Coastal Cliff */}
            <div
              onClick={() => onOpenBooking()}
              className="md:col-span-3 group relative aspect-[4/3] rounded-2xl sm:rounded-3xl overflow-hidden bg-neutral-900 shadow-xl border border-neutral-200/80 cursor-pointer"
            >
              <img
                src="https://images.unsplash.com/photo-1516483638261-f4dbaf036963?q=80&w=1000&auto=format&fit=crop"
                alt="Private Island Expeditions"
                className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent p-4 flex flex-col justify-end text-white">
                <span className="text-[9px] uppercase font-bold tracking-[0.2em] text-[#C8A96B]">
                  Island Escapes
                </span>
                <h3 className="font-serif text-base font-bold text-white">
                  Private Island Expeditions
                </h3>
              </div>
            </div>

            {/* Bottom Row Item 2: Hero Yacht Deck */}
            <div
              onClick={() => onOpenBooking()}
              className="md:col-span-3 group relative aspect-[4/3] rounded-2xl sm:rounded-3xl overflow-hidden bg-neutral-900 shadow-xl border border-neutral-200/80 cursor-pointer"
            >
              <img
                src="/Hero_section1.png"
                alt="Luxury Azimut Cruising"
                className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent p-4 flex flex-col justify-end text-white">
                <span className="text-[9px] uppercase font-bold tracking-[0.2em] text-[#C8A96B]">
                  VIP Hospitality
                </span>
                <h3 className="font-serif text-base font-bold text-white">
                  Luxury Azimut Cruising
                </h3>
              </div>
            </div>

            {/* Bottom Row Item 3: Wide Coastline Yacht View */}
            <div
              onClick={() => onOpenBooking()}
              className="md:col-span-6 group relative aspect-[16/9] md:aspect-auto rounded-2xl sm:rounded-3xl overflow-hidden bg-neutral-900 shadow-xl border border-neutral-200/80 cursor-pointer"
            >
              <img
                src="https://images.unsplash.com/photo-1567899378494-47b22a2ae96a?q=80&w=1000&auto=format&fit=crop"
                alt="Yacht Parties & Celebrations"
                className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent p-6 flex flex-col justify-end text-white">
                <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-[#C8A96B] mb-1">
                  Yacht Celebrations
                </span>
                <h3 className="font-serif text-xl font-bold text-white">
                  Yacht Parties & Birthday Celebrations
                </h3>
                <p className="text-xs text-neutral-300 font-light mt-0.5">
                  Onboard DJ sound systems, private chefs & custom balloon decor setups.
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 6. WHY CHOOSE NAUTIGOA */}
      <section className="py-28 bg-white text-neutral-900 border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#FAF9F6] border border-neutral-200/90 rounded-3xl p-8 sm:p-14 shadow-xl">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
              
              <div className="lg:col-span-1 space-y-4">
                <span className="text-[#C8A96B] text-xs font-bold uppercase tracking-[0.25em]">
                  The NautiGoa Standard
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#151515]">
                  WHY BOOK WITH NAUTIGOA?
                </h2>
                <p className="text-neutral-600 text-xs sm:text-sm leading-relaxed font-light">
                  We eliminate middleman markups, fake yacht listings, and hidden fees. Direct booking ensures verified vessels and top-tier hospitality.
                </p>
                <button
                  onClick={() => onOpenBooking()}
                  className="px-7 py-3.5 bg-[#C8A96B] text-black font-bold text-xs uppercase tracking-[0.2em] rounded-full hover:bg-[#D8B97B] transition-colors cursor-pointer shadow-lg"
                >
                  Book Directly With Us
                </button>
              </div>

              <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
                {REASON_FEATURES.map((feat, idx) => (
                  <div key={idx} className="p-6 bg-white border border-neutral-200 rounded-2xl space-y-3 hover:border-[#C8A96B]/60 transition-colors shadow-sm">
                    <div className="w-9 h-9 rounded-full bg-[#C8A96B]/20 border border-[#C8A96B]/50 flex items-center justify-center text-[#C8A96B]">
                      <Sparkles className="w-4 h-4" />
                    </div>
                    <h4 className="font-serif text-base font-bold text-[#151515]">{feat.title}</h4>
                    <p className="text-xs text-neutral-600 leading-relaxed font-light">{feat.desc}</p>
                  </div>
                ))}
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* 7. CUSTOMER TESTIMONIALS */}
      <section className="py-24 bg-[#FAF9F6] text-neutral-900 border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center space-y-2">
            <span className="text-[#C8A96B] text-xs font-bold uppercase tracking-[0.25em]">
              Real Guest Experiences
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#151515]">
              CLIENT TESTIMONIALS
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TESTIMONIALS_DATA.map((test) => (
              <div
                key={test.id}
                className="p-8 bg-white border border-neutral-200/90 rounded-2xl space-y-4 relative flex flex-col justify-between hover:border-[#C8A96B]/60 transition-colors shadow-md"
              >
                <div className="space-y-3">
                  <div className="flex items-center gap-1 text-[#C8A96B]">
                    {[...Array(test.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <p className="text-neutral-700 text-xs sm:text-sm italic leading-relaxed font-light">
                    "{test.comment}"
                  </p>
                </div>
                <div className="pt-4 border-t border-neutral-200 flex items-center justify-between">
                  <div>
                    <h4 className="font-serif text-sm font-bold text-[#151515]">{test.name}</h4>
                    <span className="text-[10px] text-neutral-500 uppercase tracking-wider">{test.location}</span>
                  </div>
                  <span className="text-[10px] px-2.5 py-1 bg-neutral-100 border border-[#C8A96B]/40 text-[#C8A96B] rounded-full font-mono font-semibold">
                    {test.yacht}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. GALLERY GRID */}
      <section className="py-24 bg-white max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="text-center space-y-2">
          <span className="text-[#C8A96B] text-xs font-bold uppercase tracking-[0.25em]">
            Visual Moments
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#151515]">
            NAUTIGOA GALLERY
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {galleryImages.map((img, idx) => (
            <div key={idx} className="group relative aspect-square overflow-hidden rounded-2xl bg-neutral-900 border border-neutral-200/80 shadow-md">
              <img
                src={img.url}
                alt={img.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-4 flex flex-col justify-end">
                <span className="text-[11px] text-[#C8A96B] uppercase font-bold tracking-widest">{img.loc}</span>
                <h4 className="text-sm font-serif text-white font-bold">{img.title}</h4>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 9. FINAL CTA BANNER - Dark Ocean Banner matching reference image */}
      <section className="py-28 bg-[#121212] text-white border-t border-neutral-800 relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-6 relative z-10">
          <span className="text-[#C8A96B] text-xs font-bold uppercase tracking-[0.3em]">
            Book Your Charter Today
          </span>
          <h2 className="font-serif text-4xl sm:text-6xl font-bold text-white uppercase tracking-tight">
            YOUR LUXURY EXPERIENCE STARTS HERE
          </h2>
          <p className="text-neutral-300 text-sm sm:text-base max-w-xl mx-auto font-light">
            Connect with our charter manager directly via WhatsApp or Phone to lock in your date for Goa, Mumbai, or Dubai.
          </p>
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => onOpenBooking()}
              className="w-full sm:w-auto px-10 py-4 bg-[#C8A96B] text-black font-bold text-xs uppercase tracking-[0.2em] rounded-full hover:bg-[#D8B97B] transition-all shadow-xl cursor-pointer"
            >
              Reserve Yacht Now
            </button>
            <a
              href="tel:+918818899951"
              className="w-full sm:w-auto px-8 py-4 bg-transparent border border-white/20 text-neutral-200 hover:text-white text-xs uppercase tracking-[0.2em] rounded-full flex items-center justify-center gap-2"
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
