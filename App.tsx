import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import InteractiveHomeScreen from './components/InteractiveHomeScreen';
import InteractiveAboutPage from './components/InteractiveAboutPage';
import InteractiveContactScreen from './components/InteractiveContactScreen';
import InteractiveTourScreen from './components/InteractiveTourScreen';
import InteractiveBookingIntro from './components/InteractiveBookingIntro';
import InteractiveLoading from './components/InteractiveLoading';
import InteractiveConfirmation from './components/InteractiveConfirmation';
import BookingFlowComplete from './components/BookingFlowComplete';
import AdminDashboard from './components/AdminDashboard';
import ScheduleMeetingPage from './components/ScheduleMeetingPage';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<InteractiveHomeScreen />} />
        <Route path="/about" element={<InteractiveAboutPage />} />
        <Route path="/tours" element={<InteractiveTourScreen />} />
        <Route path="/contact" element={<InteractiveContactScreen />} />
        <Route path="/book" element={<InteractiveBookingIntro />} />
        <Route path="/book/start" element={<BookingFlowComplete />} />
        <Route path="/schedule-meeting" element={<ScheduleMeetingPage />} />
        <Route path="/loading" element={<InteractiveLoading />} />
        <Route path="/confirmation" element={<InteractiveConfirmation />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}
