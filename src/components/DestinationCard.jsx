import { Link } from 'react-router-dom';
import { MapPin, ArrowUpRight } from 'lucide-react';

export default function DestinationCard({ destination }) {
  return (
    <div className="relative group rounded-2xl sm:rounded-3xl overflow-hidden aspect-[4/5] bg-neutral-900 border border-neutral-200/80 hover:border-[#C8A96B] transition-all duration-500 shadow-xl">
      {/* Background Image */}
      <img
        src={destination.image}
        alt={destination.name}
        className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 ease-out opacity-85 group-hover:opacity-95"
      />

      {/* Dark Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent"></div>

      {/* Content Overlay */}
      <div className="absolute inset-0 p-6 flex flex-col justify-between">
        <div className="flex justify-between items-start">
          <span className="px-3 py-1 bg-black/75 backdrop-blur-md border border-[#C8A96B]/50 text-[#C8A96B] text-[11px] font-semibold tracking-widest uppercase rounded-full shadow-md">
            {destination.charterCount}
          </span>
          <div className="w-9 h-9 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white group-hover:bg-[#C8A96B] group-hover:text-black transition-all shadow-md">
            <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
          </div>
        </div>

        <div className="space-y-3">
          <div className="flex items-center gap-2 text-[#C8A96B] text-xs font-bold tracking-widest uppercase">
            <MapPin className="w-3.5 h-3.5" />
            <span>Destination</span>
          </div>
          <h3 className="font-serif text-3xl font-bold text-white tracking-wide">
            {destination.name}
          </h3>
          <p className="text-neutral-200 text-xs line-clamp-2 leading-relaxed font-light">
            {destination.tagline}
          </p>

          <div className="pt-2">
            <Link
              to={`/yachts?location=${destination.name}`}
              className="inline-flex items-center gap-1.5 text-xs uppercase tracking-widest text-[#C8A96B] font-bold hover:underline"
            >
              <span>Explore {destination.name} Yachts</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
