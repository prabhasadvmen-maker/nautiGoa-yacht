import { Link } from 'react-router-dom';
import { Users, MapPin, Anchor, ArrowRight } from 'lucide-react';

export default function YachtCard({ yacht, onBook }) {
  return (
    <div className="group bg-white border border-neutral-200/90 rounded-2xl overflow-hidden flex flex-col hover:border-[#C8A96B] transition-all duration-300 shadow-md hover:shadow-xl">
      
      {/* Image Container with Badge */}
      <div className="relative aspect-[16/10] overflow-hidden bg-neutral-100">
        <img
          src={yacht.image}
          alt={yacht.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
          loading="lazy"
          decoding="async"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity"></div>
        
        {/* Location Badge */}
        <div className="absolute top-4 left-4 px-3 py-1 bg-black/75 backdrop-blur-md border border-[#C8A96B]/50 text-[#C8A96B] text-[11px] font-semibold uppercase tracking-widest rounded-full flex items-center gap-1.5 shadow-md">
          <MapPin className="w-3 h-3 text-[#C8A96B]" />
          <span>{yacht.location}</span>
        </div>

        {/* Capacity Badge */}
        <div className="absolute bottom-4 left-4 px-3 py-1 bg-black/75 backdrop-blur-md border border-white/20 text-white text-[11px] font-medium tracking-wider rounded-full flex items-center gap-1.5 shadow-md">
          <Users className="w-3 h-3 text-[#C8A96B]" />
          <span>{yacht.capacity}</span>
        </div>
      </div>

      {/* Card Content */}
      <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
        <div>
          <div className="flex items-center justify-between gap-2 mb-1">
            <h3 className="font-serif text-xl font-bold text-[#151515] group-hover:text-[#C8A96B] transition-colors">
              {yacht.name}
            </h3>
            {yacht.length && (
              <span className="text-[11px] text-neutral-600 font-mono border border-neutral-200 px-2 py-0.5 rounded-full bg-neutral-100">
                {yacht.length}
              </span>
            )}
          </div>
          <p className="text-xs text-[#C8A96B] tracking-wider uppercase mb-3 font-semibold">
            {yacht.tagline}
          </p>
          <p className="text-neutral-600 text-xs line-clamp-2 leading-relaxed">
            {yacht.shortDesc}
          </p>
        </div>

        {/* Price & Action Footer */}
        <div className="pt-4 border-t border-neutral-200 flex items-center justify-between gap-2">
          <div>
            <span className="text-[10px] uppercase text-neutral-500 tracking-wider block">Starting From</span>
            <div className="flex items-baseline gap-1">
              <span className="font-serif text-lg font-bold text-[#151515]">{yacht.startingPrice}</span>
              <span className="text-[10px] text-neutral-500">{yacht.priceUnit}</span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <Link
              to={`/yachts/${yacht.id}`}
              className="px-3.5 py-2 border border-neutral-300 text-neutral-700 hover:text-black hover:border-black text-xs uppercase tracking-wider rounded-full transition-colors font-medium"
            >
              Details
            </Link>
            <button
              onClick={() => onBook(yacht)}
              className="px-4 py-2 bg-[#C8A96B] text-black font-bold text-xs uppercase tracking-wider rounded-full hover:bg-[#D8B97B] transition-colors cursor-pointer flex items-center gap-1 shadow-md"
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
