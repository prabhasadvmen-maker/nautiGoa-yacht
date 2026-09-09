import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Filter, Anchor, Sparkles } from 'lucide-react';
import { YACHTS_DATA } from '../data/yachtsData';
import YachtCard from '../components/YachtCard';

export default function Yachts({ onOpenBooking }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const locationQuery = searchParams.get('location') || 'All';
  const [activeFilter, setActiveFilter] = useState(locationQuery);

  useEffect(() => {
    document.title = "Luxury Yacht Fleet | NautiGoa";
  }, []);

  useEffect(() => {
    if (locationQuery) {
      setActiveFilter(locationQuery);
    }
  }, [locationQuery]);

  const filters = ['All', 'Goa', 'Mumbai', 'Dubai'];

  const filteredYachts = activeFilter === 'All'
    ? YACHTS_DATA
    : YACHTS_DATA.filter(y => y.location.toLowerCase() === activeFilter.toLowerCase());

  const handleFilterClick = (filter) => {
    setActiveFilter(filter);
    if (filter === 'All') {
      setSearchParams({});
    } else {
      setSearchParams({ location: filter });
    }
  };

  return (
    <div className="min-h-screen bg-[#050505] text-neutral-100 pt-24 sm:pt-28 pb-20 sm:pb-24 overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 sm:space-y-12">
        
        {/* Header Banner */}
        <div className="text-center max-w-3xl mx-auto space-y-3 sm:space-y-4 pt-4 sm:pt-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black border border-[#C8A96B]/40 text-[#C8A96B] text-[10px] sm:text-xs font-semibold uppercase tracking-widest">
            <Anchor className="w-3.5 h-3.5" />
            <span>Charter Fleet</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold text-white uppercase tracking-wide">
            OUR LUXURY FLEET
          </h1>

          <p className="text-neutral-300 text-xs sm:text-base font-light">
            Choose the perfect yacht for your experience. Handpicked motor yachts, luxury catamarans, and speedboats in Goa, Mumbai & Dubai.
          </p>
        </div>

        {/* Location Filter Tabs - Single row horizontal scroll on mobile */}
        <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto no-scrollbar pb-3 border-b border-white/10 px-1">
          <span className="text-[11px] text-neutral-400 uppercase tracking-wider flex items-center gap-1.5 shrink-0 mr-1 hidden sm:flex">
            <Filter className="w-3.5 h-3.5 text-[#C8A96B]" />
            <span>Filter:</span>
          </span>

          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => handleFilterClick(filter)}
              className={`px-5 py-2 sm:px-6 sm:py-2.5 rounded-xs text-[11px] sm:text-xs uppercase tracking-widest font-bold transition-all shrink-0 cursor-pointer ${
                activeFilter.toLowerCase() === filter.toLowerCase()
                  ? 'bg-[#C8A96B] text-black shadow-lg'
                  : 'bg-[#121212] border border-white/15 text-neutral-300 hover:text-white hover:border-[#C8A96B]'
              }`}
            >
              {filter} {filter === 'All' ? `(${YACHTS_DATA.length})` : ''}
            </button>
          ))}
        </div>

        {/* Yacht Grid */}
        {filteredYachts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredYachts.map((yacht) => (
              <YachtCard
                key={yacht.id}
                yacht={yacht}
                onBook={(y) => onOpenBooking(y)}
              />
            ))}
          </div>
        ) : (
          <div className="py-16 text-center space-y-4 glass-panel border border-white/10 rounded-sm">
            <Sparkles className="w-10 h-10 text-[#C8A96B] mx-auto opacity-50" />
            <h3 className="font-serif text-xl font-bold text-white">No Yachts Found</h3>
            <p className="text-xs text-neutral-400">There are no yachts currently listed under "{activeFilter}".</p>
            <button
              onClick={() => handleFilterClick('All')}
              className="px-6 py-2 bg-[#C8A96B] text-black font-bold text-xs uppercase tracking-widest rounded-xs"
            >
              Show All Yachts
            </button>
          </div>
        )}

      </div>
    </div>
  );
}
