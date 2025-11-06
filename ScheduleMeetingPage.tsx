import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CalendarScheduling from './CalendarScheduling';
import InteractiveHeader from './InteractiveHeader';
import LoadingImport from '../imports/Loading';

export default function ScheduleMeetingPage() {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleComplete = (data: any) => {
    setIsSubmitting(true);
    
    // Show loading screen for 2 seconds to simulate processing
    setTimeout(() => {
      setIsSubmitting(false);
      // Navigate to a confirmation or back to tours
      navigate('/tours', { state: { meetingScheduled: true } });
    }, 2000);
  };

  const handleBack = () => {
    navigate('/tours');
  };

  if (isSubmitting) {
    return <LoadingImport />;
  }

  return (
    <div className="bg-white min-h-screen">
      {/* Header with Logo and Navigation */}
      <InteractiveHeader />

      {/* Main Content */}
      <div className="max-w-[900px] mx-auto px-[24px] py-[48px]">
        <CalendarScheduling
          onComplete={handleComplete}
          onBack={handleBack}
        />
      </div>

      {/* Footer Spacer */}
      <div className="h-[100px]" />
    </div>
  );
}
