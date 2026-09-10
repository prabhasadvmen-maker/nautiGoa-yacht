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
  RotateCcw,
  MapPin,
  UserCheck,
  Smartphone,
  Download,
  Bell,
  Zap
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
    { url: "/new_iamge/Img1.png", title: "Luxury Azimut Flybridge", loc: "Dubai Marina" },
    { url: "/new_iamge/img2.png", title: "Golden Sunset Cruise", loc: "Panjim Coast" },
    { url: "/new_iamge/img3.png", title: "Sea Ray Sundancer Speedboat", loc: "Mandovi River" },
    { url: "/new_iamge/img4.png", title: "VIP Cockpit Deck Lounge", loc: "Goa Waters" },
    { url: "/new_iamge/img5.png", title: "Princess 62 Superyacht", loc: "Dubai Marina" },
    { url: "/new_iamge/img6.png", title: "Teak Deck Sunbathing Lounge", loc: "Mumbai Gateway" },
    { url: "/new_iamge/img7.png", title: "Royal Horizon Cruise", loc: "Mumbai Coast" },
    { url: "/new_iamge/img8.png", title: "Lagoon Dual-Hull Catamaran", loc: "Mandovi Bay" },
    { url: "/new_iamge/img9.png", title: "Trampoline Bow Net Lounge", loc: "Goa Waters" },
    { url: "/new_iamge/img10.png", title: "Yacht Party & DJ Celebration", loc: "Goa Coast" },
    { url: "/new_iamge/img11.png", title: "Sunseeker 76 Flybridge Deck", loc: "Dubai Waters" },
    { url: "/new_iamge/img12.jpeg", title: "Pre-Wedding Drone Photography", loc: "Goa Island" },
    { url: "/new_iamge/img13.jpeg", title: "Romantic Dinner & Sunset Setup", loc: "Panjim Sunset" },
    { url: "/new_iamge/img14.jpeg", title: "Ferretti Sovereign Ocean Cruise", loc: "Dubai Horizon" }
  ];

  return (
    <div className="min-h-screen bg-[#FAF9F6] text-[#151515] selection:bg-[#C8A96B] selection:text-white overflow-x-hidden">
      
      {/* 1. HERO SECTION */}
      <HeroSection onOpenBooking={onOpenBooking} />

      {/* 2. MORE THAN A BOAT RIDE SECTION */}
      <section className="bg-white text-neutral-900 px-5 sm:px-8 lg:px-12 py-10 sm:py-14 relative z-20 border-b border-neutral-200 overflow-hidden">

        {/* High quality Captain Hat Image placed at top-left marked location */}
        <div className="absolute -top-2 left-2 sm:top-1 sm:left-8 md:left-14 lg:left-20 z-20 pointer-events-none">
          <img 
            src="/images/captain_hat.png" 
            alt="NautiGoa Captain Hat" 
            className="w-16 h-16 sm:w-24 sm:h-24 md:w-28 md:h-28 object-contain drop-shadow-xl -rotate-12 transition-transform duration-300 hover:rotate-0"
            loading="lazy"
            decoding="async"
          />
        </div>

        <div className="max-w-5xl mx-auto space-y-6 sm:space-y-8 text-center relative z-10">
          
          {/* Header Block */}
          <div className="text-center space-y-1 max-w-3xl mx-auto pt-2 sm:pt-0">
            <span className="text-xs sm:text-sm font-serif italic text-[#C8A96B] tracking-wider block font-medium">
              About NautiGoa
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#151515] tracking-tight leading-tight">
              More Than a <span className="font-serif italic font-normal text-[#151515]">Boat Ride</span>
            </h2>
          </div>

          {/* Description Paragraphs (Centered, zero text overlap) */}
          <div className="max-w-3xl mx-auto space-y-4 text-xs sm:text-sm md:text-base text-neutral-600 font-light leading-relaxed">
            <p>
              NautiGoa offers a unique way to experience the beauty of Goa, Mumbai and Dubai's surrounding coastline. We combine the thrill of a high-performance luxury yacht with the comfort of a private, premium experience.
            </p>
            <p>
              Whether you're chasing a daytime adventure, a scenic island-hopping journey or an unforgettable sunset cruise, our professional skipper guides you through the region's most stunning locations.
            </p>
          </div>

          {/* 4 Feature Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 pt-4">
            
            {/* Card 1 */}
            <div className="bg-white border border-neutral-200/90 rounded-[24px] p-6 shadow-xs hover:shadow-md transition-all text-left space-y-3">
              <div className="w-11 h-11 rounded-xl bg-[#0c1322] text-white flex items-center justify-center shrink-0">
                <Waves className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-base font-bold text-[#151515]">
                Luxury Meets Adventure
              </h3>
              <p className="text-xs text-neutral-500 font-light leading-relaxed">
                The thrill of a fast, sleek speedboat without sacrificing comfort or style.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white border border-neutral-200/90 rounded-[24px] p-6 shadow-xs hover:shadow-md transition-all text-left space-y-3">
              <div className="w-11 h-11 rounded-xl bg-[#0c1322] text-white flex items-center justify-center shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-base font-bold text-[#151515]">
                Hidden Destinations
              </h3>
              <p className="text-xs text-neutral-500 font-light leading-relaxed">
                Secluded beaches, crystal-clear bays and beautiful island scenery.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white border border-neutral-200/90 rounded-[24px] p-6 shadow-xs hover:shadow-md transition-all text-left space-y-3">
              <div className="w-11 h-11 rounded-xl bg-[#0c1322] text-white flex items-center justify-center shrink-0">
                <Users className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-base font-bold text-[#151515]">
                Small Group Feel
              </h3>
              <p className="text-xs text-neutral-500 font-light leading-relaxed">
                Space for up to 10-25 guests — every trip feels personal and exclusive.
              </p>
            </div>

            {/* Card 4 */}
            <div className="bg-white border border-neutral-200/90 rounded-[24px] p-6 shadow-xs hover:shadow-md transition-all text-left space-y-3">
              <div className="w-11 h-11 rounded-xl bg-[#0c1322] text-white flex items-center justify-center shrink-0">
                <UserCheck className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-base font-bold text-[#151515]">
                Professional Skipper
              </h3>
              <p className="text-xs text-neutral-500 font-light leading-relaxed">
                Relax and enjoy while an experienced skipper handles the rest.
              </p>
            </div>

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
                src="/new_iamge/Img1.png"
                alt="Speedboat & Island Tours"
                className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 gpu-accelerate"
                loading="lazy"
                decoding="async"
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
                src="/new_iamge/img2.png"
                alt="Golden Hour Sunset Cruise"
                className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 gpu-accelerate"
                loading="lazy"
                decoding="async"
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
                src="/new_iamge/img12.jpeg"
                alt="Pre-Wedding & Drone Shoots"
                className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 gpu-accelerate"
                loading="lazy"
                decoding="async"
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
                src="/new_iamge/img13.jpeg"
                alt="Romantic Couples & Proposals"
                className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 gpu-accelerate"
                loading="lazy"
                decoding="async"
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
                src="/new_iamge/img4.png"
                alt="Private Island Expeditions"
                className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 gpu-accelerate"
                loading="lazy"
                decoding="async"
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
                src="/new_iamge/img6.png"
                alt="Luxury Azimut Cruising"
                className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 gpu-accelerate"
                loading="lazy"
                decoding="async"
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
                src="/new_iamge/img10.png"
                alt="Yacht Parties & Celebrations"
                className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 gpu-accelerate"
                loading="lazy"
                decoding="async"
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
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 gpu-accelerate"
                loading="lazy"
                decoding="async"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-4 flex flex-col justify-end">
                <span className="text-[11px] text-[#C8A96B] uppercase font-bold tracking-widest">{img.loc}</span>
                <h4 className="text-sm font-serif text-white font-bold">{img.title}</h4>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 8.5 NAUTIGOA MOBILE APP - COMING SOON BANNER */}
      <section className="py-20 bg-gradient-to-br from-[#0c1322] via-[#0f172a] to-[#050914] text-white border-y border-white/10 relative overflow-hidden">
        
        {/* Subtle background glow */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#C8A96B]/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#C8A96B]/15 border border-[#C8A96B]/40 text-[#C8A96B] text-xs font-semibold uppercase tracking-widest">
                <Smartphone className="w-4 h-4" />
                <span>NautiGoa iOS & Android App</span>
              </div>

              <h2 className="font-serif text-3xl sm:text-5xl font-bold text-white leading-tight">
                NAUTIGOA MOBILE APP <br className="hidden sm:block" />
                <span className="font-serif italic font-normal text-[#C8A96B]">COMING SOON</span>
              </h2>

              <p className="text-neutral-300 text-sm sm:text-base font-light leading-relaxed max-w-xl mx-auto lg:mx-0">
                We are building the ultimate luxury yacht charter app for Goa, Mumbai & Dubai. Soon you’ll be able to book VIP yachts in 1-tap, track live boat locations, and receive exclusive sunset deal alerts right from your smartphone.
              </p>

              {/* App Features Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                <div className="p-4 rounded-2xl bg-white/5 border border-white/10 text-left space-y-1.5 backdrop-blur-md">
                  <Zap className="w-5 h-5 text-[#C8A96B]" />
                  <h4 className="font-serif text-sm font-bold text-white">1-Tap Booking</h4>
                  <p className="text-[11px] text-neutral-400 font-light">Instant charter reservation & direct captain chat.</p>
                </div>

                <div className="p-4 rounded-2xl bg-white/5 border border-white/10 text-left space-y-1.5 backdrop-blur-md">
                  <MapPin className="w-5 h-5 text-[#C8A96B]" />
                  <h4 className="font-serif text-sm font-bold text-white">Live GPS Tracker</h4>
                  <p className="text-[11px] text-neutral-400 font-light">Real-time vessel location & live route map.</p>
                </div>

                <div className="p-4 rounded-2xl bg-white/5 border border-white/10 text-left space-y-1.5 backdrop-blur-md">
                  <Bell className="w-5 h-5 text-[#C8A96B]" />
                  <h4 className="font-serif text-sm font-bold text-white">VIP Offers</h4>
                  <p className="text-[11px] text-neutral-400 font-light">Exclusive sunset charter deals & promo notifications.</p>
                </div>
              </div>

              {/* App Store Buttons Badges */}
              <div className="pt-4 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                
                {/* iOS App Store Badge */}
                <div className="px-5 py-3 rounded-2xl bg-black/60 border border-white/20 flex items-center gap-3 backdrop-blur-md shadow-xl opacity-90 hover:opacity-100 transition-opacity">
                  <svg className="w-7 h-7 fill-white" viewBox="0 0 24 24">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.33c.64-.78 1.08-1.87.96-2.96-.93.04-2.09.62-2.75 1.4-.59.68-1.1 1.79-.96 2.86 1.04.08 2.11-.52 2.75-1.3z" />
                  </svg>
                  <div className="text-left">
                    <span className="text-[9px] uppercase tracking-wider text-neutral-400 block leading-tight font-medium">Download on the</span>
                    <div className="flex items-center gap-1.5">
                      <span className="font-serif text-sm font-bold text-white leading-tight">App Store</span>
                      <span className="text-[9px] px-1.5 py-0.5 rounded-full bg-[#C8A96B]/30 text-[#C8A96B] font-mono font-semibold">SOON</span>
                    </div>
                  </div>
                </div>

                {/* Google Play Store Badge */}
                <div className="px-5 py-3 rounded-2xl bg-black/60 border border-white/20 flex items-center gap-3 backdrop-blur-md shadow-xl opacity-90 hover:opacity-100 transition-opacity">
                  <svg className="w-7 h-7 fill-white" viewBox="0 0 24 24">
                    <path d="M3 20.5v-17c0-.55.33-1.02.84-1.24L14 12 3.84 21.74c-.51-.22-.84-.69-.84-1.24zm12.41-7.09l2.76-1.59c.65-.38.65-1.01 0-1.39l-2.76-1.59L12.59 12l2.82 1.41zM4.77 2.45l9.23 9.23-2.82 2.82L2.6 5.92c-.22-.22-.22-.58 0-.8l2.17-2.67zm0 19.1l2.17-2.67c.22-.22.22-.58 0-.8L2.6 18.08c-.22-.22-.22-.58 0-.8l9.58-9.58 2.82 2.82-9.23 9.23z" />
                  </svg>
                  <div className="text-left">
                    <span className="text-[9px] uppercase tracking-wider text-neutral-400 block leading-tight font-medium">GET IT ON</span>
                    <div className="flex items-center gap-1.5">
                      <span className="font-serif text-sm font-bold text-white leading-tight">Google Play</span>
                      <span className="text-[9px] px-1.5 py-0.5 rounded-full bg-[#C8A96B]/30 text-[#C8A96B] font-mono font-semibold">SOON</span>
                    </div>
                  </div>
                </div>

              </div>

            </div>

            {/* Right Mockup Mobile Graphic Column */}
            <div className="lg:col-span-5 flex justify-center relative">
              
              {/* Outer Glowing Phone Shell */}
              <div className="relative w-64 sm:w-72 aspect-[9/18] rounded-[44px] bg-gradient-to-b from-[#1e293b] via-[#0f172a] to-black p-3.5 border-4 border-white/20 shadow-2xl overflow-hidden -rotate-2 hover:rotate-0 transition-transform duration-500">
                
                {/* Phone Screen Mockup Container */}
                <div className="w-full h-full rounded-[34px] bg-[#0c1322] overflow-hidden flex flex-col justify-between border border-white/10 relative">
                  
                  {/* Top Notch & Bar */}
                  <div className="pt-3 px-5 flex items-center justify-between z-10">
                    <span className="text-[9px] font-mono font-bold text-white">9:41</span>
                    <div className="w-12 h-3 bg-black rounded-full mx-auto"></div>
                    <span className="text-[9px] text-neutral-400 font-semibold">5G</span>
                  </div>

                  {/* App Screen Chat Preview */}
                  <div className="px-3 py-3 flex-1 flex flex-col justify-between z-10 space-y-2 overflow-hidden">
                    
                    {/* Chat Header */}
                    <div className="flex items-center justify-between pb-2 border-b border-white/10">
                      <div className="flex items-center gap-2">
                        <div className="relative">
                          <div className="w-7 h-7 rounded-full bg-[#C8A96B] flex items-center justify-center text-black font-bold text-[10px] shadow-md">
                            N
                          </div>
                          <span className="absolute bottom-0 right-0 w-2 h-2 rounded-full bg-emerald-500 ring-2 ring-[#0c1322]"></span>
                        </div>
                        <div className="flex flex-col">
                          <span className="text-[11px] font-bold text-white leading-tight">NautiGOA Desk</span>
                          <span className="text-[8px] text-emerald-400 font-medium">Online • App Launch</span>
                        </div>
                      </div>
                      <span className="text-[8px] px-2 py-0.5 rounded-full bg-[#C8A96B]/20 text-[#C8A96B] font-mono font-bold uppercase border border-[#C8A96B]/40">
                        Coming Soon
                      </span>
                    </div>

                    {/* Chat Messages Stream */}
                    <div className="space-y-2.5 my-auto text-[10px] leading-tight">
                      
                      {/* Message 1: Guest Inquiry (Right Bubble) */}
                      <div className="flex flex-col items-end space-y-0.5">
                        <div className="max-w-[85%] bg-gradient-to-r from-[#C8A96B] to-[#D8B97B] text-black p-2.5 rounded-2xl rounded-tr-xs shadow-md font-medium">
                          Hi NautiGoa! Is Azimut 55 Yacht available for sunset cruise in Goa? 🚤
                        </div>
                        <div className="flex items-center gap-1 text-[7px] text-neutral-400 px-1">
                          <span>9:41 AM</span>
                          <span className="text-sky-400 font-bold">✓✓</span>
                        </div>
                      </div>

                      {/* Message 2: NautiGoa Reply (Left Bubble - App Soon) */}
                      <div className="flex flex-col items-start space-y-0.5">
                        <div className="max-w-[88%] bg-white/10 border border-white/15 backdrop-blur-md text-white p-2.5 rounded-2xl rounded-tl-xs shadow-md space-y-1">
                          <span className="text-[8px] uppercase tracking-wider text-[#C8A96B] font-bold block">NautiGoa Concierge</span>
                          <p className="text-neutral-200">
                            Hello! Yes, slots are open! Our new NautiGoa Mobile App is launching soon for 1-tap instant booking & live GPS tracking! 📱✨
                          </p>
                        </div>
                        <span className="text-[7px] text-neutral-400 px-1">9:41 AM</span>
                      </div>

                      {/* Message 3: App Pre-Register Offer (Left Bubble) */}
                      <div className="flex flex-col items-start space-y-0.5">
                        <div className="max-w-[90%] bg-[#C8A96B]/15 border border-[#C8A96B]/40 backdrop-blur-md text-white p-2.5 rounded-2xl shadow-md space-y-1">
                          <div className="flex items-center gap-1 text-[#C8A96B]">
                            <Zap className="w-3 h-3 shrink-0" />
                            <span className="text-[9px] font-bold uppercase tracking-wider">App Launch Offer</span>
                          </div>
                          <p className="text-[9.5px] text-neutral-200">
                            ⚡ Pre-register today to get <span className="text-[#C8A96B] font-bold">15% OFF</span> on your first app charter booking!
                          </p>
                        </div>
                        <span className="text-[7px] text-neutral-400 px-1">9:42 AM</span>
                      </div>

                    </div>

                    {/* Fake Chat Input Bar Bottom */}
                    <div className="p-2 rounded-xl bg-white/10 border border-white/15 flex items-center justify-between text-neutral-400 text-[9px]">
                      <span className="truncate pr-2">💬 Type a message or book app...</span>
                      <div className="w-5 h-5 rounded-full bg-[#C8A96B] text-black flex items-center justify-center font-bold shrink-0">
                        ➔
                      </div>
                    </div>

                  </div>

                  {/* App Launching Banner Bottom */}
                  <div className="py-2.5 px-3 bg-gradient-to-r from-[#C8A96B] to-[#D8B97B] text-black text-center space-y-0.5 z-10">
                    <span className="text-[8px] font-bold uppercase tracking-wider block">Official App Launch</span>
                    <span className="text-[11px] font-serif font-bold block">Coming Soon on App Store & Play Store</span>
                  </div>

                </div>

              </div>

            </div>

          </div>
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
