import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import BookingModal from './components/BookingModal';
import ScrollToTop from './components/ScrollToTop';

import Home from './pages/Home';
import Yachts from './pages/Yachts';
import YachtDetails from './pages/YachtDetails';
import About from './pages/About';
import Contact from './pages/Contact';

export default function App() {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [selectedYachtForBooking, setSelectedYachtForBooking] = useState(null);

  const handleOpenBooking = (yacht = null) => {
    setSelectedYachtForBooking(yacht);
    setIsBookingModalOpen(true);
  };

  const handleCloseBooking = () => {
    setIsBookingModalOpen(false);
    setSelectedYachtForBooking(null);
  };

  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen bg-[#FAF9F6] text-[#151515] font-sans selection:bg-[#C8A96B] selection:text-white">
        
        {/* Navigation Header */}
        <Navbar onOpenBooking={() => handleOpenBooking()} />

        {/* Dynamic Page Routes */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home onOpenBooking={handleOpenBooking} />} />
            <Route path="/yachts" element={<Yachts onOpenBooking={handleOpenBooking} />} />
            <Route path="/yachts/:id" element={<YachtDetails onOpenBooking={handleOpenBooking} />} />
            <Route path="/about" element={<About onOpenBooking={handleOpenBooking} />} />
            <Route path="/contact" element={<Contact onOpenBooking={handleOpenBooking} />} />
            {/* Catch-all fallback redirecting to Home */}
            <Route path="*" element={<Home onOpenBooking={handleOpenBooking} />} />
          </Routes>
        </main>

        {/* Global Footer */}
        <Footer onOpenBooking={() => handleOpenBooking()} />

        {/* Floating WhatsApp Action Button */}
        <WhatsAppButton />

        {/* Global Booking Modal */}
        <BookingModal
          isOpen={isBookingModalOpen}
          onClose={handleCloseBooking}
          selectedYacht={selectedYachtForBooking}
        />

      </div>
    </Router>
  );
}
