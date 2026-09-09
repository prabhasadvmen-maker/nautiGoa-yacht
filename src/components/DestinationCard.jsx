import { Link } from 'react-router-dom';
import { MapPin, ArrowUpRight } from 'lucide-react';

export default function DestinationCard({ destination }) {
  return (
    <div className="relative group rounded-sm overflow-hidden aspect-[4/5] bg-black border border-white/10 hover:border-[#C8A96B]/60 transition-all duration-500 shadow-2xl">
      {/* Background Image */}
      <img
        src={destination.image}
        alt={destination.name}
        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out opacity-70 group-hover:opacity-85"
      />

      {/* Dark Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>

      {/* Content Overlay */}
      <div className="absolute inset-0 p-6 flex flex-col justify-between">
        <div className="flex justify-between items-start">
          <span className="px-3 py-1 bg-black/70 backdrop-blur-md border border-[#C8A96B]/40 text-[#C8A96B] text-[11px] font-semibold tracking-widest uppercase rounded-xs">
            {destination.charterCount}
          </span>
          <div className="w-8 h-8 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white group-hover:bg-[#C8A96B] group-hover:text-black transition-all">
            <ArrowUpRight className="w-4 h-4" />
          </div>
        </div>

        <div className="space-y-3">
          <div className="flex items-center gap-2 text-[#C8A96B] text-xs font-semibold tracking-widest uppercase">
            <MapPin className="w-3.5 h-3.5" />
            <span>Destination</span>
          </div>
          <h3 className="font-serif text-3xl font-bold text-white tracking-wide">
            {destination.name}
          </h3>
          <p className="text-neutral-300 text-xs line-clamp-2 leading-relaxed">
            {destination.tagline}
          </p>

          <div className="pt-2">
            <Link
              to={`/yachts?location=${destination.name}`}
              className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#C8A96B] font-bold hover:underline"
            >
              <span>Explore {destination.name} Yachts</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
