import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import WhatsAppButton from './components/WhatsAppButton';
import Home from './pages/Home';
import Yachts from './pages/Yachts';
import YachtDetails from './pages/YachtDetails';
import About from './pages/About';
import Contact from './pages/Contact';
import BookingModal from './components/BookingModal';

export default function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedYacht, setSelectedYacht] = useState(null);

  const handleOpenBooking = (yacht = null) => {
    setSelectedYacht(yacht);
    setIsBookingOpen(true);
  };

  const handleCloseBooking = () => {
    setIsBookingOpen(false);
    setSelectedYacht(null);
  };

  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen font-sans bg-[#1a1a1a] text-white">
        <Navbar onOpenBooking={handleOpenBooking} />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home onOpenBooking={handleOpenBooking} />} />
            <Route path="/yachts" element={<Yachts onOpenBooking={handleOpenBooking} />} />
            <Route path="/yachts/:id" element={<YachtDetails onOpenBooking={handleOpenBooking} />} />
            <Route path="/about" element={<About onOpenBooking={handleOpenBooking} />} />
            <Route path="/contact" element={<Contact onOpenBooking={handleOpenBooking} />} />
          </Routes>
        </main>
        <Footer onOpenBooking={handleOpenBooking} />
        <WhatsAppButton />
      </div>

      <BookingModal 
        isOpen={isBookingOpen} 
        onClose={handleCloseBooking} 
        selectedYacht={selectedYacht}
      />
    </Router>
  );
}
