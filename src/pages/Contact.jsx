import { useState, useEffect } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  MessageCircle, 
  Send, 
  CheckCircle2, 
  Clock, 
  ShieldCheck
} from 'lucide-react';

const InstagramIcon = (props) => (
  <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

const FacebookIcon = (props) => (
  <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
  </svg>
);
import { YACHTS_DATA } from '../data/yachtsData';

export default function Contact({ onOpenBooking }) {
  useEffect(() => {
    document.title = "Book a Luxury Yacht | NautiGoa";
  }, []);

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    location: 'Goa',
    yachtId: YACHTS_DATA[0].id,
    date: '',
    guests: '2 Guests',
    occasion: 'Sunset Cruise',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = (e) => {
    if (e) e.preventDefault();
    
    const msg = `*NAUTIGOA LUXURY YACHT CHARTER BOOKING*%0A%0A` +
      `*Name:* ${formData.name}%0A` +
      `*Phone:* ${formData.phone}%0A` +
      `*Email:* ${formData.email || 'N/A'}%0A` +
      `*Location:* ${formData.location}%0A` +
      `*Charter Date:* ${formData.date || 'TBD'}%0A` +
      `*Guests:* ${formData.guests}%0A` +
      `*Occasion:* ${formData.occasion}%0A` +
      `*Special Requests:* ${formData.message || 'None'}`;

    window.open(`https://wa.me/918818899951?text=${msg}`, '_blank');
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-[#FAF9F6] text-[#151515] pt-28 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Header Hero */}
        <div className="text-center max-w-3xl mx-auto space-y-4 pt-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#C8A96B]/40 text-[#9E7A3B] text-xs font-semibold uppercase tracking-widest shadow-xs">
            <MessageCircle className="w-3.5 h-3.5" />
            <span>24/7 Charter Desk</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold text-[#151515] uppercase tracking-wide leading-tight">
            LET'S PLAN YOUR PERFECT YACHT EXPERIENCE
          </h1>

          <p className="text-neutral-600 text-sm sm:text-base font-light">
            Fill out the form below or chat directly on WhatsApp to check live boat availability in Goa, Mumbai, and Dubai.
          </p>
        </div>

        {/* Contact Info & Booking Form Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Contact Details Column */}
          <div className="lg:col-span-5 space-y-8">
            
            <div className="space-y-4">
              <span className="text-[#9E7A3B] text-xs font-semibold uppercase tracking-[0.25em]">
                Direct Contacts
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#151515] leading-snug">
                REACH <span className="px-2.5 py-0.5 bg-[#C8A96B] text-black font-black rounded-lg shadow-sm mx-1 inline-block">NAUTIGOA</span> DESK
              </h2>
              <p className="text-neutral-600 text-xs sm:text-sm leading-relaxed">
                Our reservations team is available 24/7 to customize your itinerary, arrange food & drinks, and coordinate captain briefings.
              </p>
            </div>

            {/* Contact Cards */}
            <div className="space-y-4">
              
              {/* Slogan Banner */}
              <div className="p-4 bg-gradient-to-r from-[#C8A96B]/20 via-[#C8A96B]/10 to-transparent border-l-4 border-[#C8A96B] rounded-r-2xl">
                <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-[#9E7A3B] block">Official Motto</span>
                <p className="font-serif text-lg font-bold text-[#151515] italic">"BOOK NOW, thank us later"</p>
              </div>

              {/* WhatsApp Direct */}
              <a
                href="https://wa.me/918818899951"
                target="_blank"
                rel="noreferrer"
                className="p-5 bg-white border border-neutral-200 hover:border-[#25D366] rounded-2xl flex items-center gap-4 transition-all block shadow-xs"
              >
                <div className="w-12 h-12 rounded-full bg-[#25D366]/10 border border-[#25D366]/30 flex items-center justify-center text-[#25D366]">
                  <MessageCircle className="w-5 h-5 fill-current" />
                </div>
                <div>
                  <span className="text-[10px] uppercase text-neutral-500 font-semibold tracking-wider block">WhatsApp Direct</span>
                  <span className="font-serif text-lg font-bold text-[#151515]">+91 88188 99951</span>
                </div>
              </a>

              {/* Phone Direct */}
              <a
                href="tel:+918818899951"
                className="p-5 bg-white border border-neutral-200 hover:border-[#151515] rounded-2xl flex items-center gap-4 transition-all block shadow-xs"
              >
                <div className="w-12 h-12 rounded-full bg-[#FAF9F6] border border-neutral-200 flex items-center justify-center text-[#9E7A3B]">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] uppercase text-neutral-500 font-semibold tracking-wider block">Call Reservations</span>
                  <span className="font-serif text-lg font-bold text-[#151515]">+91 88188 99951</span>
                </div>
              </a>

              {/* Official Email */}
              <a
                href="mailto:booking@nautigoa.com"
                className="p-5 bg-white border border-neutral-200 hover:border-[#151515] rounded-2xl flex items-center gap-4 transition-all block shadow-xs"
              >
                <div className="w-12 h-12 rounded-full bg-[#FAF9F6] border border-neutral-200 flex items-center justify-center text-[#9E7A3B]">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] uppercase text-neutral-500 font-semibold tracking-wider block">Official Email</span>
                  <span className="font-serif text-base font-bold text-[#151515]">booking@nautigoa.com</span>
                </div>
              </a>

              {/* Help & Support Email */}
              <a
                href="mailto:help@nautigoa.com"
                className="p-5 bg-white border border-neutral-200 hover:border-[#151515] rounded-2xl flex items-center gap-4 transition-all block shadow-xs"
              >
                <div className="w-12 h-12 rounded-full bg-[#FAF9F6] border border-neutral-200 flex items-center justify-center text-[#9E7A3B]">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] uppercase text-neutral-500 font-semibold tracking-wider block">Help & Support Email</span>
                  <span className="font-serif text-base font-bold text-[#151515]">help@nautigoa.com</span>
                </div>
              </a>

              {/* Goa Office Base */}
              <div className="p-5 bg-white border border-neutral-200 rounded-2xl flex items-start gap-4 shadow-xs">
                <div className="w-12 h-12 rounded-full bg-[#FAF9F6] border border-neutral-200 flex items-center justify-center text-[#9E7A3B] shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] uppercase text-neutral-500 font-semibold tracking-wider block">Goa Office Base</span>
                  <p className="text-xs text-[#151515] font-medium leading-relaxed mt-1">
                    NautiGoa Yacht Service, 548, Next to Britona Church, Panjim, Goa - 403001, India
                  </p>
                </div>
              </div>

            </div>

            {/* Social Channels */}
            <div className="pt-4 border-t border-neutral-200 space-y-3">
              <span className="text-xs uppercase text-neutral-600 tracking-wider block font-semibold">Follow Official Channels</span>
              <div className="flex items-center space-x-4">
                <a
                  href="https://www.instagram.com/nautigoa"
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-2 bg-white border border-neutral-300 hover:border-[#151515] text-[#151515] text-xs rounded-full flex items-center gap-2 transition-colors shadow-xs"
                >
                  <InstagramIcon className="w-4 h-4 text-[#9E7A3B]" />
                  <span>Instagram (@nautigoa)</span>
                </a>
                <a
                  href="https://www.facebook.com/NautiGoaYachts/"
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-2 bg-white border border-neutral-300 hover:border-[#151515] text-[#151515] text-xs rounded-full flex items-center gap-2 transition-colors shadow-xs"
                >
                  <FacebookIcon className="w-4 h-4 text-[#9E7A3B]" />
                  <span>Facebook</span>
                </a>
              </div>
            </div>

          </div>

          {/* Booking Form Column */}
          <div className="lg:col-span-7">
            <div className="bg-white border border-neutral-200 rounded-3xl p-8 space-y-6 shadow-xl">
              <div>
                <h3 className="font-serif text-2xl font-bold text-[#151515] uppercase">
                  BOOKING REQUEST FORM
                </h3>
                <p className="text-xs text-[#9E7A3B] uppercase tracking-wider font-semibold mt-1">
                  Complete your details for instant slot check
                </p>
              </div>

              {submitted ? (
                <div className="py-12 text-center space-y-4 bg-[#FAF9F6] p-8 rounded-2xl border border-neutral-200">
                  <CheckCircle2 className="w-14 h-14 text-[#9E7A3B] mx-auto animate-bounce" />
                  <h4 className="font-serif text-2xl font-bold text-[#151515]">Request Received!</h4>
                  <p className="text-sm text-neutral-600 max-w-md mx-auto">
                    We have received your yacht charter request. Our reservation officer will contact you immediately.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-4 px-6 py-2.5 bg-[#151515] text-white font-bold text-xs uppercase tracking-widest rounded-full"
                  >
                    Send Another Request
                  </button>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-4">
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
                        placeholder="Your full name"
                        className="w-full px-4 py-2.5 bg-[#FAF9F6] border border-neutral-300 rounded-xl text-[#151515] text-sm focus:border-[#151515] focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-xs uppercase tracking-wider text-neutral-600 font-semibold mb-1">
                        Phone / WhatsApp *
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
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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

                    <div>
                      <label className="block text-xs uppercase tracking-wider text-neutral-600 font-semibold mb-1">
                        Preferred Location *
                      </label>
                      <select
                        name="location"
                        value={formData.location}
                        onChange={handleChange}
                        className="w-full px-4 py-2.5 bg-[#FAF9F6] border border-neutral-300 rounded-xl text-[#151515] text-sm focus:border-[#151515] focus:outline-none"
                      >
                        <option value="Goa">Goa (Panjim Base)</option>
                        <option value="Mumbai">Mumbai (Gateway)</option>
                        <option value="Dubai">Dubai (Dubai Marina)</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs uppercase tracking-wider text-neutral-600 font-semibold mb-1">
                        Charter Date
                      </label>
                      <input
                        type="date"
                        name="date"
                        value={formData.date}
                        onChange={handleChange}
                        className="w-full px-4 py-2.5 bg-[#FAF9F6] border border-neutral-300 rounded-xl text-[#151515] text-sm focus:border-[#151515] focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-xs uppercase tracking-wider text-neutral-600 font-semibold mb-1">
                        Guests Count
                      </label>
                      <select
                        name="guests"
                        value={formData.guests}
                        onChange={handleChange}
                        className="w-full px-4 py-2.5 bg-[#FAF9F6] border border-neutral-300 rounded-xl text-[#151515] text-sm focus:border-[#151515] focus:outline-none"
                      >
                        <option value="Couple (2 Guests)">Couple (2 Guests)</option>
                        <option value="3-6 Guests">3-6 Guests</option>
                        <option value="7-12 Guests">7-12 Guests</option>
                        <option value="13-25 Guests">13-25 Guests</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider text-neutral-600 font-semibold mb-1">
                      Occasion / Event Type
                    </label>
                    <select
                      name="occasion"
                      value={formData.occasion}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 bg-[#FAF9F6] border border-neutral-300 rounded-xl text-[#151515] text-sm focus:border-[#151515] focus:outline-none"
                    >
                      <option value="Sunset Cruise">Sunset Cruise</option>
                      <option value="Proposal / Romantic Date">Proposal / Romantic Date</option>
                      <option value="Pre-Wedding Shoot">Pre-Wedding Shoot</option>
                      <option value="Birthday Party">Birthday Party</option>
                      <option value="Corporate Hosting">Corporate Hosting</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider text-neutral-600 font-semibold mb-1">
                      Message / Special Requests
                    </label>
                    <textarea
                      name="message"
                      rows={3}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your celebration, food/drink choices, decor requirements..."
                      className="w-full px-4 py-2.5 bg-[#FAF9F6] border border-neutral-300 rounded-xl text-[#151515] text-sm focus:border-[#151515] focus:outline-none"
                    />
                  </div>

                  <div className="pt-2 flex flex-col sm:flex-row gap-3">
                    <button
                      type="submit"
                      className="w-full py-4 bg-[#25D366] hover:bg-[#1EBE5D] text-white font-bold text-xs uppercase tracking-[0.2em] rounded-full transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-xl"
                    >
                      <MessageCircle className="w-4 h-4 fill-current" />
                      <span>Book Now via WhatsApp (+91 88188 99951)</span>
                    </button>
                  </div>

                </form>
              )}
            </div>
          </div>

        </div>

        {/* Interactive Google Map Section */}
        <div className="space-y-4 pt-6">
          <div className="flex items-center justify-between">
            <h3 className="font-serif text-2xl font-bold text-[#151515] uppercase">GOA BASE LOCATION</h3>
            <span className="text-xs text-[#9E7A3B] uppercase font-semibold">Panjim, Next to Britona Church</span>
          </div>

          <div className="w-full h-96 sm:h-[450px] rounded-3xl overflow-hidden border border-neutral-200 shadow-xl relative bg-neutral-100">
            <iframe
              title="NautiGoa Yacht Base Location Map"
              src="https://maps.google.com/maps?q=Britona%20Church%20Panjim%20Goa&t=&z=15&ie=UTF8&iwloc=&output=embed"
              className="w-full h-full border-0"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

      </div>
    </div>
  );
}
