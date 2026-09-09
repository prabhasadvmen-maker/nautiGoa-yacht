import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Anchor, 
  ShieldCheck, 
  Award, 
  Users, 
  Sparkles, 
  MapPin, 
  Heart, 
  CheckCircle2, 
  ArrowRight 
} from 'lucide-react';
import { DESTINATIONS_DATA } from '../data/yachtsData';
import DestinationCard from '../components/DestinationCard';

export default function About({ onOpenBooking }) {
  useEffect(() => {
    document.title = "About NautiGoa | Luxury Yacht Experiences";
  }, []);

  const coreValues = [
    {
      title: "Our Story",
      desc: "Founded in Goa with a vision to revolutionize marine tourism, NautiGoa started with a simple belief: everyone deserves to experience the magic of the sea aboard world-class luxury vessels."
    },
    {
      title: "Our Mission",
      desc: "To deliver unforgettable, safe, and impeccably curated luxury yacht charters across Goa, Mumbai, and Dubai, setting gold standards for marine hospitality."
    },
    {
      title: "Why NautiGoa",
      desc: "Unlike booking intermediaries, we operate directly with verified vessel owners and captains, ensuring absolute pricing transparency and zero fake listings."
    },
    {
      title: "Luxury Experience",
      desc: "Every charter is tailored with premium sound systems, plush lounging areas, bespoke champagne decor, and dedicated steward service."
    },
    {
      title: "Professional Crew",
      desc: "Our captains and marine crew hold international maritime certifications, trained in guest hospitality, navigation, and emergency protocols."
    },
    {
      title: "Safety First",
      desc: "All vessels carry certified life rafts, state-of-the-art GPS navigation, automatic life vests, and round-the-clock coastal communications."
    }
  ];

  return (
    <div className="min-h-screen bg-[#050505] text-neutral-100 pt-28 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        
        {/* Hero Section */}
        <div className="text-center max-w-3xl mx-auto space-y-4 pt-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black border border-[#C8A96B]/40 text-[#C8A96B] text-xs font-semibold uppercase tracking-widest">
            <Anchor className="w-3.5 h-3.5" />
            <span>Since Inception</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-6xl font-bold text-white uppercase tracking-wide">
            ABOUT NAUTIGOA
          </h1>

          <p className="text-neutral-300 text-sm sm:text-lg font-light leading-relaxed">
            NautiGoa provides premium yacht experiences for people who want to celebrate, relax, and create unforgettable memories on the water.
          </p>
        </div>

        {/* Story & Image Banner */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <span className="text-[#C8A96B] text-xs font-semibold uppercase tracking-[0.25em]">
              The NautiGoa Philosophy
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white leading-tight">
              Sailing Into Luxury, One Beautiful Moment At A Time
            </h2>
            <p className="text-neutral-300 text-sm sm:text-base leading-relaxed font-light">
              Operating out of Panjim (next to Britona Church) in Goa, alongside our flagship locations in Mumbai Marina and Dubai Coastline, NautiGoa has become synonymous with elite sea experiences.
            </p>
            <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed">
              Whether you are planning an intimate sunset date, a pre-wedding drone photography shoot, a high-octane birthday bash, or a corporate VIP hosting, our fleet and hospitality crew guarantee pure elegance.
            </p>

            <div className="pt-2 flex items-center gap-4">
              <button
                onClick={onOpenBooking}
                className="px-6 py-3 bg-[#C8A96B] text-black font-bold text-xs uppercase tracking-widest rounded-xs hover:bg-[#D8B97B] transition-colors"
              >
                Plan Your Charter
              </button>
              <a
                href="tel:+918818899951"
                className="px-6 py-3 border border-white/20 text-white text-xs uppercase tracking-widest rounded-xs hover:border-[#C8A96B]"
              >
                Call Desk
              </a>
            </div>
          </div>

          <div className="relative aspect-[4/3] rounded-sm overflow-hidden border border-white/10 shadow-2xl">
            <img
              src="/images/hero_yacht.png"
              alt="NautiGoa Yacht Experience"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-70"></div>
          </div>
        </div>

        {/* Core Values / Grid Sections */}
        <div className="space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-[#C8A96B] text-xs font-semibold uppercase tracking-[0.25em]">
              Our Foundation
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white">
              WHAT SETS US APART
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {coreValues.map((val, idx) => (
              <div
                key={idx}
                className="p-8 bg-[#121212] border border-white/10 rounded-sm space-y-3 hover:border-[#C8A96B]/50 transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-full bg-[#C8A96B]/15 border border-[#C8A96B]/40 flex items-center justify-center text-[#C8A96B]">
                  <Sparkles className="w-5 h-5" />
                </div>
                <h3 className="font-serif text-xl font-bold text-white">{val.title}</h3>
                <p className="text-xs text-neutral-400 leading-relaxed">{val.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Destination Cards Section */}
        <div className="space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-[#C8A96B] text-xs font-semibold uppercase tracking-[0.25em]">
              Global Footprint
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white">
              OUR DESTINATIONS
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {DESTINATIONS_DATA.map((dest) => (
              <DestinationCard key={dest.id} destination={dest} />
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
