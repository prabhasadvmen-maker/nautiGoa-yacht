import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PaymentPending from './pages/PaymentPending';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="*" element={<PaymentPending />} />
      </Routes>
    </Router>
  );
}
