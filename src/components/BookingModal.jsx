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
    if (e) e.preventDefault();
    const yachtNameStr = selectedYacht ? selectedYacht.name : 'Flexible / Fleet Recommendation';
    
    const textMessage = `*NAUTIGOA LUXURY YACHT CHARTER BOOKING*%0A%0A` +
      `*Name:* ${formData.name}%0A` +
      `*Phone:* ${formData.phone}%0A` +
      `*Email:* ${formData.email || 'N/A'}%0A` +
      `*Yacht Choice:* ${yachtNameStr}%0A` +
      `*Location:* ${formData.location}%0A` +
      `*Charter Date:* ${formData.date || 'To be decided'}%0A` +
      `*Guests:* ${formData.guests}%0A` +
      `*Occasion:* ${formData.occasion}%0A` +
      `*Special Requests:* ${formData.message || 'None'}`;

    const waUrl = `https://wa.me/918818899951?text=${textMessage}`;
    window.open(waUrl, '_blank');
    setIsSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-2xl bg-white border border-neutral-200 rounded-3xl shadow-2xl overflow-hidden my-6 max-h-[90vh] flex flex-col">
        
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-neutral-200 bg-[#FAF9F6]">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full overflow-hidden border border-[#9E7A3B] shrink-0 bg-white shadow-xs">
              <img src="/Logo.jpg" alt="NautiGoa Logo" className="w-full h-full object-cover" />
            </div>
            <div>
              <h3 className="font-serif text-xl font-bold text-[#151515] tracking-wide">
                BOOK YOUR LUXURY YACHT
              </h3>
              <p className="text-xs text-[#9E7A3B] uppercase tracking-wider font-semibold">
                NautiGoa Direct Charter Reservation
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-neutral-500 hover:text-black transition-colors cursor-pointer"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Body Form */}
        <div className="p-6 overflow-y-auto space-y-6">
          {isSubmitted ? (
            <div className="py-12 text-center space-y-4">
              <CheckCircle2 className="w-16 h-16 text-[#9E7A3B] mx-auto animate-bounce" />
              <h4 className="font-serif text-2xl text-[#151515] font-bold">Enquiry Received!</h4>
              <p className="text-sm text-neutral-600 max-w-md mx-auto leading-relaxed">
                Thank you for contacting NautiGoa Yachts. Our charter manager will get in touch with you immediately on WhatsApp (+91 88188 99951) with custom quotes & slot availability.
              </p>
              <button
                onClick={() => {
                  setIsSubmitted(false);
                  onClose();
                }}
                className="mt-4 px-6 py-2.5 bg-[#151515] text-white font-bold text-xs uppercase tracking-widest rounded-full cursor-pointer"
              >
                Close & Continue Browsing
              </button>
            </div>
          ) : (
            <form onSubmit={handleWhatsAppSubmit} className="space-y-4">
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs uppercase tracking-wider text-neutral-600 mb-1 font-semibold">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    className="w-full px-4 py-2.5 bg-[#FAF9F6] border border-neutral-300 rounded-xl text-[#151515] text-sm focus:border-[#151515] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-neutral-600 mb-1 font-semibold">
                    Phone / WhatsApp *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+91 98765 43210"
                    className="w-full px-4 py-2.5 bg-[#FAF9F6] border border-neutral-300 rounded-xl text-[#151515] text-sm focus:border-[#151515] focus:outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs uppercase tracking-wider text-neutral-600 mb-1 font-semibold">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="yourname@domain.com"
                    className="w-full px-4 py-2.5 bg-[#FAF9F6] border border-neutral-300 rounded-xl text-[#151515] text-sm focus:border-[#151515] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-neutral-600 mb-1 font-semibold">
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

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs uppercase tracking-wider text-neutral-600 mb-1 font-semibold">
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
                  <label className="block text-xs uppercase tracking-wider text-neutral-600 mb-1 font-semibold">
                    Number of Guests
                  </label>
                  <select
                    name="guests"
                    value={formData.guests}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 bg-[#FAF9F6] border border-neutral-300 rounded-xl text-[#151515] text-sm focus:border-[#151515] focus:outline-none"
                  >
                    <option value="Couple (2 Guests)">Couple (2 Guests)</option>
                    <option value="Small Group (3-6 Guests)">Small Group (3-6 Guests)</option>
                    <option value="Medium Party (7-12 Guests)">Medium Party (7-12 Guests)</option>
                    <option value="Large Event (13-25 Guests)">Large Event (13-25 Guests)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider text-neutral-600 mb-1 font-semibold">
                  Occasion / Type
                </label>
                <select
                  name="occasion"
                  value={formData.occasion}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 bg-[#FAF9F6] border border-neutral-300 rounded-xl text-[#151515] text-sm focus:border-[#151515] focus:outline-none"
                >
                  <option value="Sunset Cruise">Sunset Cruise</option>
                  <option value="Romantic Date / Proposal">Romantic Date / Proposal</option>
                  <option value="Pre-Wedding Drone Shoot">Pre-Wedding Drone Shoot</option>
                  <option value="Birthday / Anniversary Party">Birthday / Anniversary Party</option>
                  <option value="Corporate Event">Corporate Event</option>
                  <option value="Island Expedition">Island Expedition</option>
                </select>
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider text-neutral-600 mb-1 font-semibold">
                  Special Requests / Custom Decor & Catering
                </label>
                <textarea
                  name="message"
                  rows={3}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Mention any custom requirements like balloon decor, private chef, champagne..."
                  className="w-full px-4 py-2 bg-[#FAF9F6] border border-neutral-300 rounded-xl text-[#151515] text-sm focus:border-[#151515] focus:outline-none"
                />
              </div>

              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <button
                  type="submit"
                  className="w-full py-3.5 bg-[#25D366] hover:bg-[#1EBE5D] text-white font-bold text-xs uppercase tracking-widest rounded-full transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-lg"
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
  );
}
