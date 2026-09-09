import { useState, useEffect } from 'react';
import { X, Calendar, Users, MapPin, Anchor, MessageCircle, Send, CheckCircle2 } from 'lucide-react';
import { YACHTS_DATA } from '../data/yachtsData';

export default function BookingModal({ isOpen, onClose, selectedYacht = null }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    location: 'Goa',
    yachtId: selectedYacht ? selectedYacht.id : YACHTS_DATA[0].id,
    date: '',
    guests: '2 Guests',
    occasion: 'Sunset Cruise',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (selectedYacht) {
      setFormData(prev => ({
        ...prev,
        yachtId: selectedYacht.id,
        location: selectedYacht.location || 'Goa'
      }));
    }
  }, [selectedYacht]);

  if (!isOpen) return null;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleWhatsAppSubmit = (e) => {
    e.preventDefault();
    const yachtObj = YACHTS_DATA.find(y => y.id === formData.yachtId) || YACHTS_DATA[0];
    
    const textMessage = `*NAUTIGOA YACHT CHARTER ENQUIRY*%0A%0A` +
      `*Name:* ${formData.name}%0A` +
      `*Phone:* ${formData.phone}%0A` +
      `*Email:* ${formData.email || 'N/A'}%0A` +
      `*Selected Yacht:* ${yachtObj.name}%0A` +
      `*Location:* ${formData.location}%0A` +
      `*Charter Date:* ${formData.date || 'To be decided'}%0A` +
      `*Guests:* ${formData.guests}%0A` +
      `*Occasion:* ${formData.occasion}%0A` +
      `*Message:* ${formData.message || 'None'}`;

    const waUrl = `https://wa.me/918818899951?text=${textMessage}`;
    window.open(waUrl, '_blank');
    setIsSubmitted(true);
  };

  const handleDirectSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-2xl bg-[#121212] border border-[#C8A96B]/50 rounded-sm shadow-2xl overflow-hidden my-6 max-h-[90vh] flex flex-col">
        
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-white/10 bg-black/70">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full overflow-hidden border border-[#C8A96B] shrink-0 bg-black">
              <img src="/Logo.jpg" alt="NautiGoa Logo" className="w-full h-full object-cover" />
            </div>
            <div>
              <h3 className="font-serif text-xl font-bold text-white tracking-wide">
                BOOK YOUR LUXURY YACHT
              </h3>
              <p className="text-xs text-[#C8A96B] uppercase tracking-wider font-medium">
                NautiGoa Direct Charter Reservation
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-neutral-400 hover:text-white transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Body Form */}
        <div className="p-6 overflow-y-auto space-y-6">
          {isSubmitted ? (
            <div className="py-12 text-center space-y-4">
              <CheckCircle2 className="w-16 h-16 text-[#C8A96B] mx-auto animate-bounce" />
              <h4 className="font-serif text-2xl text-white font-bold">Enquiry Received!</h4>
              <p className="text-sm text-neutral-300 max-w-md mx-auto leading-relaxed">
                Thank you for contacting NautiGoa Yachts. Our charter manager will get in touch with you immediately on WhatsApp (+91 88188 99951) with custom quotes & slot availability.
              </p>
              <button
                onClick={() => {
                  setIsSubmitted(false);
                  onClose();
                }}
                className="mt-4 px-6 py-2.5 bg-[#C8A96B] text-black font-bold text-xs uppercase tracking-widest rounded-xs"
              >
                Close & Continue Browsing
              </button>
            </div>
          ) : (
            <form onSubmit={handleWhatsAppSubmit} className="space-y-4">
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs uppercase tracking-wider text-neutral-300 mb-1 font-medium">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    className="w-full px-4 py-2.5 bg-black/60 border border-white/15 rounded-xs text-white text-sm focus:border-[#C8A96B] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-neutral-300 mb-1 font-medium">
                    Phone / WhatsApp *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+91 98765 43210"
                    className="w-full px-4 py-2.5 bg-black/60 border border-white/15 rounded-xs text-white text-sm focus:border-[#C8A96B] focus:outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs uppercase tracking-wider text-neutral-300 mb-1 font-medium">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="yourname@domain.com"
                    className="w-full px-4 py-2.5 bg-black/60 border border-white/15 rounded-xs text-white text-sm focus:border-[#C8A96B] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-neutral-300 mb-1 font-medium">
                    Preferred Location *
                  </label>
                  <select
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 bg-black/60 border border-white/15 rounded-xs text-white text-sm focus:border-[#C8A96B] focus:outline-none"
                  >
                    <option value="Goa">Goa (Panjim Base)</option>
                    <option value="Mumbai">Mumbai (Gateway)</option>
                    <option value="Dubai">Dubai (Dubai Marina)</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs uppercase tracking-wider text-neutral-300 mb-1 font-medium">
                    Select Yacht *
                  </label>
                  <select
                    name="yachtId"
                    value={formData.yachtId}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 bg-black/60 border border-white/15 rounded-xs text-white text-sm focus:border-[#C8A96B] focus:outline-none"
                  >
                    {YACHTS_DATA.map(y => (
                      <option key={y.id} value={y.id}>
                        {y.name} ({y.location}) - {y.startingPrice}/hr
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-neutral-300 mb-1 font-medium">
                    Charter Date
                  </label>
                  <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 bg-black/60 border border-white/15 rounded-xs text-white text-sm focus:border-[#C8A96B] focus:outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs uppercase tracking-wider text-neutral-300 mb-1 font-medium">
                    Number of Guests
                  </label>
                  <select
                    name="guests"
                    value={formData.guests}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 bg-black/60 border border-white/15 rounded-xs text-white text-sm focus:border-[#C8A96B] focus:outline-none"
                  >
                    <option value="Couple (2 Guests)">Couple (2 Guests)</option>
                    <option value="Small Group (3-6 Guests)">Small Group (3-6 Guests)</option>
                    <option value="Medium Party (7-12 Guests)">Medium Party (7-12 Guests)</option>
                    <option value="Large Event (13-25 Guests)">Large Event (13-25 Guests)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-neutral-300 mb-1 font-medium">
                    Occasion / Type
                  </label>
                  <select
                    name="occasion"
                    value={formData.occasion}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 bg-black/60 border border-white/15 rounded-xs text-white text-sm focus:border-[#C8A96B] focus:outline-none"
                  >
                    <option value="Sunset Cruise">Sunset Cruise</option>
                    <option value="Romantic Date / Proposal">Romantic Date / Proposal</option>
                    <option value="Pre-Wedding Drone Shoot">Pre-Wedding Drone Shoot</option>
                    <option value="Birthday / Anniversary Party">Birthday / Anniversary Party</option>
                    <option value="Corporate Event">Corporate Event</option>
                    <option value="Island Expedition">Island Expedition</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider text-neutral-300 mb-1 font-medium">
                  Special Requests / Custom Decor & Catering
                </label>
                <textarea
                  name="message"
                  rows={3}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Mention any custom requirements like balloon decor, private chef, champagne..."
                  className="w-full px-4 py-2 bg-black/60 border border-white/15 rounded-xs text-white text-sm focus:border-[#C8A96B] focus:outline-none"
                />
              </div>

              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <button
                  type="submit"
                  className="flex-1 py-3 bg-[#25D366] text-white font-bold text-xs uppercase tracking-widest rounded-xs hover:bg-[#1EBE5D] transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-lg"
                >
                  <MessageCircle className="w-4 h-4 fill-current" />
                  <span>Submit via WhatsApp (+91 88188 99951)</span>
                </button>
                <button
                  type="button"
                  onClick={handleDirectSubmit}
                  className="py-3 px-6 bg-transparent border border-white/20 text-neutral-200 hover:text-white hover:border-[#C8A96B] text-xs uppercase tracking-widest rounded-xs transition-colors cursor-pointer"
                >
                  Send Enquiry
                </button>
              </div>

            </form>
          )}
        </div>
      </div>
    </div>
  );
}
