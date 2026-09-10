import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  MapPin, 
  Users, 
  CheckCircle2, 
  ShieldCheck, 
  Phone, 
  MessageCircle, 
  ArrowLeft, 
  Sparkles, 
  Clock,
  Compass,
  Info
} from 'lucide-react';
import { YACHTS_DATA } from '../data/yachtsData';

export default function YachtDetails({ onOpenBooking }) {
  const { id } = useParams();
  const yacht = YACHTS_DATA.find(y => y.id === id) || YACHTS_DATA[0];

  const [activeImage, setActiveImage] = useState(yacht.image);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    date: '',
    guests: '2 Guests',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (yacht) {
      document.title = `${yacht.name} | NautiGoa Yachts`;
      setActiveImage(yacht.image);
    }
  }, [id, yacht]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    handleWhatsAppClick();
    setSubmitted(true);
  };

  const handleWhatsAppClick = () => {
    const msg = `*NAUTIGOA LUXURY YACHT CHARTER BOOKING*%0A%0A` +
      `*Selected Yacht:* ${yacht.name.toUpperCase()}%0A` +
      `*Location:* ${yacht.location}%0A` +
      `*Name:* ${formData.name || 'Not provided'}%0A` +
      `*Phone:* ${formData.phone || 'Not provided'}%0A` +
      `*Email:* ${formData.email || 'N/A'}%0A` +
      `*Charter Date:* ${formData.date || 'TBD'}%0A` +
      `*Guests:* ${formData.guests}%0A` +
      `*Special Requests:* ${formData.message || 'I would like to check availability for this yacht.'}`;

    window.open(`https://wa.me/918818899951?text=${msg}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-[#FAF9F6] text-[#151515] pt-28 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Back Link */}
        <Link
          to="/yachts"
          className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#9E7A3B] font-bold hover:underline"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to All Yachts</span>
        </Link>

        {/* Top Gallery Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* Main Large Image */}
          <div className="lg:col-span-9 relative aspect-[16/10] sm:aspect-[16/9] rounded-2xl overflow-hidden bg-neutral-100 border border-neutral-200 shadow-xl">
            <img
              src={activeImage}
              alt={yacht.name}
              className="w-full h-full object-cover transition-all duration-500"
            />
            <div className="absolute top-4 left-4 px-3.5 py-1.5 bg-white/90 backdrop-blur-md border border-neutral-200 text-[#151515] text-xs font-semibold uppercase tracking-widest rounded-full flex items-center gap-1.5 shadow-sm">
              <MapPin className="w-3.5 h-3.5 text-[#9E7A3B]" />
              <span>{yacht.location} Location</span>
            </div>
          </div>

          {/* Thumbnails */}
          <div className="lg:col-span-3 flex lg:flex-col gap-3 overflow-x-auto lg:overflow-visible">
            {yacht.gallery && yacht.gallery.map((img, idx) => (
              <button
                key={idx}
                onClick={() => setActiveImage(img)}
                className={`relative aspect-[16/10] sm:aspect-[16/9] lg:aspect-[16/10] w-28 lg:w-full rounded-xl overflow-hidden border transition-all shrink-0 cursor-pointer ${
                  activeImage === img
                    ? 'border-[#151515] ring-2 ring-black/10'
                    : 'border-neutral-200 opacity-60 hover:opacity-100'
                }`}
              >
                <img src={img} alt={`Gallery view ${idx}`} className="w-full h-full object-cover" />
              </button>
            ))}
          </div>

        </div>

        {/* Content & Enquiry Form Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Details & Specs */}
          <div className="lg:col-span-7 space-y-10">
            
            {/* Title Header */}
            <div className="space-y-3 pb-6 border-b border-neutral-200">
              <div className="flex items-center gap-3">
                <span className="text-xs uppercase font-bold tracking-[0.2em] text-[#9E7A3B]">
                  {yacht.location} Fleet
                </span>
                <span className="text-neutral-300">•</span>
                <span className="text-xs uppercase text-neutral-500 font-mono">
                  {yacht.length}
                </span>
              </div>

              <h1 className="font-serif text-4xl sm:text-5xl font-bold text-[#151515] uppercase">
                {yacht.name}
              </h1>

              <p className="text-neutral-600 text-sm italic">
                "{yacht.tagline}"
              </p>

              {/* Price Banner */}
              <div className="pt-4 flex items-baseline gap-2">
                <span className="text-xs uppercase text-neutral-500 font-medium">Starting From</span>
                <span className="font-serif text-3xl font-bold text-[#9E7A3B]">{yacht.startingPrice}</span>
                <span className="text-xs text-neutral-500">{yacht.priceUnit}</span>
              </div>
            </div>

            {/* Quick Specs Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div className="p-4 bg-white border border-neutral-200 rounded-2xl text-center space-y-1 shadow-xs">
                <Users className="w-5 h-5 text-[#9E7A3B] mx-auto" />
                <span className="text-[10px] uppercase text-neutral-500 font-semibold block">Capacity</span>
                <span className="font-serif text-sm font-bold text-[#151515]">{yacht.capacity}</span>
              </div>

              <div className="p-4 bg-white border border-neutral-200 rounded-2xl text-center space-y-1 shadow-xs">
                <Compass className="w-5 h-5 text-[#9E7A3B] mx-auto" />
                <span className="text-[10px] uppercase text-neutral-500 font-semibold block">Speed</span>
                <span className="font-serif text-sm font-bold text-[#151515]">{yacht.speed}</span>
              </div>

              <div className="p-4 bg-white border border-neutral-200 rounded-2xl text-center space-y-1 shadow-xs">
                <Sparkles className="w-5 h-5 text-[#9E7A3B] mx-auto" />
                <span className="text-[10px] uppercase text-neutral-500 font-semibold block">Cabins</span>
                <span className="font-serif text-sm font-bold text-[#151515]">{yacht.cabins}</span>
              </div>

              <div className="p-4 bg-white border border-neutral-200 rounded-2xl text-center space-y-1 shadow-xs">
                <Clock className="w-5 h-5 text-[#9E7A3B] mx-auto" />
                <span className="text-[10px] uppercase text-neutral-500 font-semibold block">Min Hours</span>
                <span className="font-serif text-sm font-bold text-[#151515]">2 Hours</span>
              </div>
            </div>

            {/* Description */}
            <div className="space-y-4">
              <h3 className="font-serif text-2xl font-bold text-[#151515]">ABOUT THIS YACHT</h3>
              <p className="text-neutral-700 text-sm sm:text-base leading-relaxed font-light">
                {yacht.description}
              </p>
            </div>

            {/* Amenities Section */}
            <div className="space-y-4">
              <h3 className="font-serif text-2xl font-bold text-[#151515]">AMENITIES & FEATURES</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {yacht.amenities.map((amenity, idx) => (
                  <div key={idx} className="flex items-center gap-3 p-3.5 bg-white border border-neutral-200 rounded-xl shadow-xs">
                    <CheckCircle2 className="w-4 h-4 text-[#9E7A3B] shrink-0" />
                    <span className="text-xs text-neutral-800 font-medium">{amenity}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Experience Includes */}
            <div className="space-y-4">
              <h3 className="font-serif text-2xl font-bold text-[#151515]">EXPERIENCE INCLUDES</h3>
              <ul className="space-y-2.5">
                {yacht.includes.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-xs text-neutral-700">
                    <span className="w-2 h-2 rounded-full bg-[#9E7A3B]"></span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>

          {/* Right Column: Booking Enquiry Form Card */}
          <div className="lg:col-span-5">
            <div className="sticky top-28 bg-white border border-neutral-200 rounded-3xl p-6 sm:p-8 space-y-6 shadow-xl">
              <div>
                <h3 className="font-serif text-2xl font-bold text-[#151515] uppercase">
                  BOOK THIS YACHT
                </h3>
                <p className="text-xs text-[#9E7A3B] tracking-wider uppercase font-semibold mt-1">
                  Reserve {yacht.name} directly with NautiGoa
                </p>
              </div>

              {submitted ? (
                <div className="py-8 text-center space-y-3 bg-[#FAF9F6] p-6 rounded-2xl border border-neutral-200">
                  <CheckCircle2 className="w-12 h-12 text-[#9E7A3B] mx-auto" />
                  <h4 className="font-serif text-xl font-bold text-[#151515]">Enquiry Submitted!</h4>
                  <p className="text-xs text-neutral-600">
                    Our Goa/Mumbai/Dubai charter desk will reply within 15 minutes.
                  </p>
                  <button
                    onClick={handleWhatsAppClick}
                    className="w-full mt-4 py-3 bg-[#25D366] text-white font-bold text-xs uppercase tracking-widest rounded-full"
                  >
                    Chat Directly on WhatsApp
                  </button>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-neutral-600 font-semibold mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      className="w-full px-4 py-2.5 bg-[#FAF9F6] border border-neutral-300 rounded-xl text-[#151515] text-sm focus:border-[#151515] focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider text-neutral-600 font-semibold mb-1">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91 88188 99951"
                      className="w-full px-4 py-2.5 bg-[#FAF9F6] border border-neutral-300 rounded-xl text-[#151515] text-sm focus:border-[#151515] focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider text-neutral-600 font-semibold mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="email@example.com"
                      className="w-full px-4 py-2.5 bg-[#FAF9F6] border border-neutral-300 rounded-xl text-[#151515] text-sm focus:border-[#151515] focus:outline-none"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs uppercase tracking-wider text-neutral-600 font-semibold mb-1">
                        Charter Date
                      </label>
                      <input
                        type="date"
                        name="date"
                        value={formData.date}
                        onChange={handleChange}
                        className="w-full px-3 py-2 bg-[#FAF9F6] border border-neutral-300 rounded-xl text-[#151515] text-xs focus:border-[#151515] focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-xs uppercase tracking-wider text-neutral-600 font-semibold mb-1">
                        Guests
                      </label>
                      <select
                        name="guests"
                        value={formData.guests}
                        onChange={handleChange}
                        className="w-full px-3 py-2 bg-[#FAF9F6] border border-neutral-300 rounded-xl text-[#151515] text-xs focus:border-[#151515] focus:outline-none"
                      >
                        <option value="2 Guests">2 Guests</option>
                        <option value="3-6 Guests">3-6 Guests</option>
                        <option value="7-12 Guests">7-12 Guests</option>
                        <option value="13-25 Guests">13-25 Guests</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider text-neutral-600 font-semibold mb-1">
                      Message / Custom Decor Request
                    </label>
                    <textarea
                      name="message"
                      rows={3}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Specify event type, decoration or catering requirements..."
                      className="w-full px-4 py-2 bg-[#FAF9F6] border border-neutral-300 rounded-xl text-[#151515] text-sm focus:border-[#151515] focus:outline-none"
                    />
                  </div>

                  <div className="space-y-3 pt-2">
                    <button
                      type="submit"
                      className="w-full py-3.5 bg-[#25D366] text-white font-bold text-xs uppercase tracking-widest rounded-full hover:bg-[#1EBE5D] transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-lg"
                    >
                      <MessageCircle className="w-4 h-4 fill-current" />
                      <span>Book Now via WhatsApp (+91 88188 99951)</span>
                    </button>
                  </div>
                </form>
              )}

              <div className="pt-4 border-t border-neutral-200 flex items-center gap-2 text-[11px] text-neutral-500">
                <ShieldCheck className="w-4 h-4 text-[#9E7A3B]" />
                <span>Zero Booking Fees • Direct Panjim Office Confirmation</span>
              </div>

            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
