import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CalendarScheduling from './CalendarScheduling';
import PaymentGateway from './PaymentGateway';

type BookingStep = 'experience' | 'details' | 'schedule' | 'payment' | 'confirmation';

interface BookingFlowProps {
  initialStep?: BookingStep;
}

export default function BookingFlow({ initialStep = 'schedule' }: BookingFlowProps) {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState<BookingStep>(initialStep);
  const [bookingData, setBookingData] = useState<any>({});

  const steps = [
    { id: 'schedule', label: 'Schedule Meeting', number: 1 },
    { id: 'payment', label: 'Payment', number: 2 },
    { id: 'confirmation', label: 'Confirmation', number: 3 }
  ];

  const handleScheduleComplete = (data: any) => {
    setBookingData({ ...bookingData, ...data });
    setCurrentStep('payment');
  };

  const handlePaymentComplete = (data: any) => {
    setBookingData({ ...bookingData, ...data });
    setCurrentStep('confirmation');
  };

  const handleBackToHome = () => {
    navigate('/');
  };

  const getCurrentStepIndex = () => {
    return steps.findIndex(step => step.id === currentStep);
  };

  return (
    <div className="bg-white min-h-screen">
      {/* Header with Logo and Navigation */}
      <header className="border-b border-gray-200">
        <div className="max-w-[1200px] mx-auto px-[24px] py-[20px]">
          <div className="flex items-center justify-between">
            <button 
              onClick={handleBackToHome}
              className="font-['Volkhov:Bold',sans-serif] text-[24px] text-[#181e4b] hover:text-[#0f1435] transition-colors"
            >
              Grant Expedition
            </button>
            <div className="flex items-center gap-[8px]">
              <div className="w-[8px] h-[8px] rounded-full bg-green-500"></div>
              <span className="text-[14px] text-[#5e6282]">Secure Booking</span>
            </div>
          </div>
        </div>
      </header>

      {/* Progress Bar */}
      <div className="border-b border-gray-200 bg-gray-50">
        <div className="max-w-[1200px] mx-auto px-[24px] py-[32px]">
          <div className="flex items-center justify-between max-w-[600px] mx-auto">
            {steps.map((step, index) => {
              const isActive = step.id === currentStep;
              const isCompleted = getCurrentStepIndex() > index;
              
              return (
                <div key={step.id} className="flex items-center flex-1">
                  <div className="flex flex-col items-center gap-[8px] flex-1">
                    <div className={`w-[40px] h-[40px] rounded-full flex items-center justify-center transition-colors ${
                      isCompleted 
                        ? 'bg-green-500 text-white' 
                        : isActive 
                        ? 'bg-[#181e4b] text-white' 
                        : 'bg-gray-200 text-gray-500'
                    }`}>
                      {isCompleted ? '✓' : step.number}
                    </div>
                    <span className={`text-[12px] text-center ${
                      isActive ? 'text-[#181e4b] font-medium' : 'text-gray-500'
                    }`}>
                      {step.label}
                    </span>
                  </div>
                  {index < steps.length - 1 && (
                    <div className={`h-[2px] flex-1 mx-[8px] transition-colors ${
                      isCompleted ? 'bg-green-500' : 'bg-gray-200'
                    }`} />
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-[800px] mx-auto px-[24px] py-[48px]">
        {currentStep === 'schedule' && (
          <CalendarScheduling
            bookingData={bookingData}
            onComplete={handleScheduleComplete}
          />
        )}

        {currentStep === 'payment' && (
          <PaymentGateway
            bookingData={bookingData}
            amount={1500}
            onComplete={handlePaymentComplete}
            onBack={() => setCurrentStep('schedule')}
          />
        )}

        {currentStep === 'confirmation' && (
          <div className="content-stretch flex flex-col gap-[32px] items-center text-center">
            <div className="w-[100px] h-[100px] rounded-full bg-green-100 flex items-center justify-center">
              <svg className="w-[60px] h-[60px] text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>

            <div className="flex flex-col gap-[16px]">
              <p className="font-['Volkhov:Bold',sans-serif] text-[42px] text-gray-950">
                Booking Confirmed!
              </p>
              <p className="font-['Inter:Regular',sans-serif] text-[18px] text-[#5e6282] max-w-[500px]">
                Thank you for booking with Grant Expedition. We've sent a confirmation email to{' '}
                <span className="font-medium text-[#181e4b]">{bookingData.email}</span>
              </p>
            </div>

            <div className="w-full bg-gray-50 rounded-[12px] p-[32px] border border-gray-200 text-left">
              <p className="font-['Inter:Medium',sans-serif] font-medium text-[20px] text-black mb-[24px]">
                Booking Summary
              </p>
              
              <div className="flex flex-col gap-[16px]">
                <div className="flex justify-between items-center pb-[16px] border-b border-gray-200">
                  <span className="text-[#5e6282]">Meeting Date</span>
                  <span className="font-medium text-black">{bookingData.date}</span>
                </div>
                <div className="flex justify-between items-center pb-[16px] border-b border-gray-200">
                  <span className="text-[#5e6282]">Meeting Time</span>
                  <span className="font-medium text-black">{bookingData.time}</span>
                </div>
                <div className="flex justify-between items-center pb-[16px] border-b border-gray-200">
                  <span className="text-[#5e6282]">Booking ID</span>
                  <span className="font-medium text-black font-mono text-[14px]">{bookingData.bookingId}</span>
                </div>
                <div className="flex justify-between items-center pb-[16px] border-b border-gray-200">
                  <span className="text-[#5e6282]">Transaction ID</span>
                  <span className="font-medium text-black font-mono text-[14px]">{bookingData.transactionId}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-[#5e6282]">Amount Paid</span>
                  <span className="font-['Volkhov:Bold',sans-serif] text-[24px] text-[#181e4b]">
                    ${bookingData.amount?.toLocaleString()}
                  </span>
                </div>
              </div>
            </div>

            <div className="w-full bg-blue-50 rounded-[12px] p-[24px] border border-blue-200 text-left">
              <p className="font-['Inter:Medium',sans-serif] font-medium text-[16px] text-black mb-[12px]">
                What's Next?
              </p>
              <ul className="list-disc list-inside text-[14px] text-[#5e6282] space-y-[8px]">
                <li>You'll receive a calendar invite with meeting details</li>
                <li>Samuel will reach out 24 hours before your meeting</li>
                <li>Prepare any questions about your Tanzanian adventure</li>
                <li>Check your email for preparation materials</li>
              </ul>
            </div>

            <button
              onClick={handleBackToHome}
              className="px-[48px] py-[16px] rounded-[8px] bg-[#181e4b] text-white hover:bg-[#0f1435] transition-colors font-['Inter:Medium',sans-serif] font-medium text-[18px]"
            >
              Return to Home
            </button>
          </div>
        )}
      </div>

      {/* Footer */}
      <footer className="border-t border-gray-200 mt-[80px]">
        <div className="max-w-[1200px] mx-auto px-[24px] py-[32px]">
          <div className="flex items-center justify-between">
            <p className="text-[14px] text-[#5e6282]">
              © 2025 Grant Expedition. All rights reserved.
            </p>
            <div className="flex items-center gap-[24px]">
              <a href="/contact" className="text-[14px] text-[#5e6282] hover:text-[#181e4b]">
                Need Help?
              </a>
              <a href="tel:+255766437358" className="text-[14px] text-[#5e6282] hover:text-[#181e4b]">
                +255 766 437 358
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
