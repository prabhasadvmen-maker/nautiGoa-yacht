import { Link } from 'react-router-dom';
import { Users, MapPin, Anchor, ArrowRight } from 'lucide-react';

export default function YachtCard({ yacht, onBook }) {
  return (
    <div className="group bg-[#121212] border border-white/10 rounded-sm overflow-hidden flex flex-col hover:border-[#C8A96B]/60 transition-all duration-300 shadow-xl hover:shadow-[#C8A96B]/10">
      
      {/* Image Container with Badge */}
      <div className="relative aspect-[16/10] overflow-hidden bg-black">
        <img
          src={yacht.image}
          alt={yacht.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity"></div>
        
        {/* Location Badge */}
        <div className="absolute top-4 left-4 px-3 py-1 bg-black/80 backdrop-blur-md border border-[#C8A96B]/40 text-[#C8A96B] text-[11px] font-semibold uppercase tracking-widest rounded-xs flex items-center gap-1.5">
          <MapPin className="w-3 h-3 text-[#C8A96B]" />
          <span>{yacht.location}</span>
        </div>

        {/* Capacity Badge */}
        <div className="absolute bottom-4 left-4 px-3 py-1 bg-neutral-900/90 backdrop-blur-md border border-white/10 text-white text-[11px] font-medium tracking-wider rounded-xs flex items-center gap-1.5">
          <Users className="w-3 h-3 text-[#C8A96B]" />
          <span>{yacht.capacity}</span>
        </div>
      </div>

      {/* Card Content */}
      <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
        <div>
          <div className="flex items-center justify-between gap-2 mb-1">
            <h3 className="font-serif text-xl font-bold text-white group-hover:text-[#C8A96B] transition-colors">
              {yacht.name}
            </h3>
            {yacht.length && (
              <span className="text-[11px] text-neutral-400 font-mono border border-neutral-800 px-2 py-0.5 rounded">
                {yacht.length}
              </span>
            )}
          </div>
          <p className="text-xs text-[#C8A96B] tracking-wider uppercase mb-3 font-medium">
            {yacht.tagline}
          </p>
          <p className="text-neutral-400 text-xs line-clamp-2 leading-relaxed">
            {yacht.shortDesc}
          </p>
        </div>

        {/* Price & Action Footer */}
        <div className="pt-4 border-t border-white/10 flex items-center justify-between gap-2">
          <div>
            <span className="text-[10px] uppercase text-neutral-400 tracking-wider block">Starting From</span>
            <div className="flex items-baseline gap-1">
              <span className="font-serif text-lg font-bold text-white">{yacht.startingPrice}</span>
              <span className="text-[10px] text-neutral-400">{yacht.priceUnit}</span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <Link
              to={`/yachts/${yacht.id}`}
              className="px-3 py-2 border border-white/20 text-neutral-200 hover:text-white hover:border-[#C8A96B] text-xs uppercase tracking-wider rounded-xs transition-colors"
            >
              Details
            </Link>
            <button
              onClick={() => onBook(yacht)}
              className="px-4 py-2 bg-[#C8A96B] text-black font-bold text-xs uppercase tracking-wider rounded-xs hover:bg-[#D8B97B] transition-colors cursor-pointer flex items-center gap-1"
            >
              <span>Book</span>
              <ArrowRight className="w-3 h-3" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
