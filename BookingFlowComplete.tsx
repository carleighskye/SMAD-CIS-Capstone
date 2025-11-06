import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CalendarScheduling from './CalendarScheduling';
import PaymentGateway from './PaymentGateway';
import LoadingImport from '../imports/Loading';
import InteractiveHeader from './InteractiveHeader';

type BookingStep = 'experience' | 'travel' | 'inquiry' | 'personal' | 'review' | 'schedule' | 'payment' | 'confirmation';

export default function BookingFlowComplete() {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState<BookingStep>('experience');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [bookingData, setBookingData] = useState<any>({
    experience: null,
    travelers: 1,
    preferredMonth: '',
    inquiryName: '',
    inquiryEmail: '',
    inquiryWebsite: '',
    inquiryMessage: '',
    personalName: '',
    personalEmail: '',
    personalWebsite: '',
    personalMessage: '',
    date: '',
    time: '',
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const steps = [
    { id: 'experience', label: 'Choose Experience', number: 1 },
    { id: 'travel', label: 'Travel Details', number: 2 },
    { id: 'inquiry', label: 'Submit Inquiry', number: 3 },
    { id: 'personal', label: 'Personal Info', number: 4 },
    { id: 'review', label: 'Review', number: 5 },
    { id: 'schedule', label: 'Schedule Meeting', number: 6 },
    { id: 'payment', label: 'Payment', number: 7 },
    { id: 'confirmation', label: 'Confirmation', number: 8 }
  ];

  const handleExperienceSelect = (experience: string) => {
    setBookingData({ ...bookingData, experience });
    setCurrentStep('travel');
  };

  const handleTravelDetails = (details: any) => {
    setBookingData({ ...bookingData, ...details });
    setCurrentStep('inquiry');
  };

  const handleInquirySubmit = (data: any) => {
    setBookingData({ ...bookingData, ...data });
    setCurrentStep('personal');
  };

  const handleInquirySkip = () => {
    setCurrentStep('personal');
  };

  const handlePersonalInfo = (data: any) => {
    setBookingData({ ...bookingData, ...data });
    setCurrentStep('review');
  };

  const handleReviewSubmit = () => {
    setCurrentStep('schedule');
  };

  const handleScheduleComplete = (data: any) => {
    setBookingData({ ...bookingData, ...data });
    setCurrentStep('payment');
  };

  const handlePaymentComplete = async (data: any) => {
    setBookingData({ ...bookingData, ...data });
    setIsSubmitting(true);
    
    // Show loading screen for 2 seconds to simulate processing
    setTimeout(() => {
      setIsSubmitting(false);
      setCurrentStep('confirmation');
    }, 2000);
  };

  const handleBackToHome = () => {
    navigate('/');
  };

  const getCurrentStepIndex = () => {
    return steps.findIndex(step => step.id === currentStep);
  };

  const handleBack = () => {
    const currentIndex = getCurrentStepIndex();
    if (currentIndex > 0) {
      setCurrentStep(steps[currentIndex - 1].id as BookingStep);
    }
  };

  // Show loading screen when submitting
  if (isSubmitting) {
    return <LoadingImport />;
  }

  return (
    <div className="bg-white min-h-screen">
      {/* Header with Logo and Navigation */}
      <InteractiveHeader />

      {/* Progress Bar */}
      <div className="border-b border-gray-200 bg-gray-50">
        <div className="max-w-[1200px] mx-auto px-[24px] py-[32px]">
          <div className="flex items-center justify-between max-w-[800px] mx-auto">
            {steps.map((step, index) => {
              const isActive = step.id === currentStep;
              const isCompleted = getCurrentStepIndex() > index;
              
              return (
                <div key={step.id} className="flex items-center flex-1">
                  <div className="flex flex-col items-center gap-[8px] flex-1">
                    <div className={`w-[40px] h-[40px] rounded-full flex items-center justify-center transition-colors ${
                      isCompleted 
                        ? 'bg-[#F0F5F1] text-[#181e4b]' 
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
                      isCompleted ? 'bg-[#DF6951]' : 'bg-gray-200'
                    }`} />
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-[900px] mx-auto px-[24px] py-[48px]">
        {currentStep === 'experience' && (
          <div className="content-stretch flex flex-col gap-[32px] items-start w-full">
            <div className="content-stretch flex flex-col gap-[24px] items-start w-full">
              <p className="font-['Volkhov:Bold',sans-serif] leading-[45px] not-italic text-[36px] text-gray-950">
                Choose Your Experience
              </p>
              <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic text-[#5e6282] text-[18px]">
                Select from our curated Tanzanian adventure experiences
              </p>
            </div>

            <div className="grid grid-cols-1 gap-[16px] w-full">
              {[
                { title: 'Serengeti Safari Adventure', description: '7-day wildlife safari through the Serengeti National Park', price: '$2,500' },
                { title: 'Mount Kilimanjaro Trek', description: '8-day climb to the summit of Africa\'s highest peak', price: '$3,200' },
                { title: 'Zanzibar Beach & Culture', description: '5-day island paradise with cultural immersion', price: '$1,800' },
                { title: 'Custom Tanzania Tour', description: 'Design your own personalized Tanzanian experience', price: 'Custom' }
              ].map((experience, index) => (
                <button
                  key={index}
                  onClick={() => handleExperienceSelect(experience.title)}
                  className="bg-white p-[24px] rounded-[12px] border-2 border-gray-200 hover:border-[#181e4b] transition-all text-left group"
                >
                  <div className="flex justify-between items-start">
                    <div className="flex flex-col gap-[8px]">
                      <p className="font-['Inter:Medium',sans-serif] font-medium text-[18px] text-black group-hover:text-[#181e4b]">
                        {experience.title}
                      </p>
                      <p className="text-[14px] text-[#5e6282]">
                        {experience.description}
                      </p>
                    </div>
                    <p className="font-['Volkhov:Bold',sans-serif] text-[20px] text-[#181e4b]">
                      {experience.price}
                    </p>
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}

        {currentStep === 'travel' && (
          <div className="content-stretch flex flex-col gap-[32px] items-start w-full">
            <div className="content-stretch flex flex-col gap-[24px] items-start w-full">
              <p className="font-['Volkhov:Bold',sans-serif] leading-[45px] not-italic text-[36px] text-gray-950">
                Travel Details
              </p>
              <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic text-[#5e6282] text-[18px]">
                Tell us about your travel party
              </p>
            </div>

            <div className="content-stretch flex flex-col gap-[24px] items-start w-full">
              <div className="content-stretch flex flex-col gap-[12px] items-start w-full">
                <label className="font-['Inter:Medium',sans-serif] font-medium text-[16px] text-black">
                  Number of Travelers
                </label>
                <div className="flex gap-[12px] items-center">
                  <button
                    type="button"
                    onClick={() => setBookingData({ ...bookingData, travelers: Math.max(1, bookingData.travelers - 1) })}
                    className="w-[40px] h-[40px] rounded-[8px] border border-gray-300 flex items-center justify-center hover:bg-gray-50"
                  >
                    -
                  </button>
                  <span className="text-[24px] font-medium min-w-[60px] text-center">{bookingData.travelers}</span>
                  <button
                    type="button"
                    onClick={() => setBookingData({ ...bookingData, travelers: bookingData.travelers + 1 })}
                    className="w-[40px] h-[40px] rounded-[8px] border border-gray-300 flex items-center justify-center hover:bg-gray-50"
                  >
                    +
                  </button>
                </div>
              </div>

              <div className="content-stretch flex flex-col gap-[12px] items-start w-full">
                <label className="font-['Inter:Medium',sans-serif] font-medium text-[16px] text-black">
                  Preferred Travel Month
                </label>
                <select
                  value={bookingData.preferredMonth || ''}
                  onChange={(e) => setBookingData({ ...bookingData, preferredMonth: e.target.value })}
                  className="w-full px-[16px] py-[12px] rounded-[8px] border border-[#e0e0e0] focus:outline-none focus:border-[#181e4b]"
                >
                  <option value="">Select a month</option>
                  <option value="January 2025">January 2025</option>
                  <option value="February 2025">February 2025</option>
                  <option value="March 2025">March 2025</option>
                  <option value="April 2025">April 2025</option>
                  <option value="May 2025">May 2025</option>
                  <option value="June 2025">June 2025</option>
                  <option value="July 2025">July 2025</option>
                  <option value="August 2025">August 2025</option>
                  <option value="September 2025">September 2025</option>
                  <option value="October 2025">October 2025</option>
                  <option value="November 2025">November 2025</option>
                  <option value="December 2025">December 2025</option>
                </select>
              </div>

              <div className="content-stretch flex gap-[16px] items-center justify-between w-full mt-[24px]">
                <button
                  type="button"
                  onClick={handleBack}
                  className="px-[32px] py-[16px] rounded-[8px] border-2 border-gray-300 text-black hover:bg-gray-50 transition-colors font-['Inter:Medium',sans-serif] font-medium text-[16px]"
                >
                  Back
                </button>
                <button
                  type="button"
                  onClick={() => handleTravelDetails({ travelers: bookingData.travelers, preferredMonth: bookingData.preferredMonth })}
                  className="px-[32px] py-[16px] rounded-[8px] border-2 border-gray-300 text-black hover:bg-gray-50 transition-colors ml-auto font-['Inter:Medium',sans-serif] font-medium text-[16px] w-[160px]"
                >
                  Continue
                </button>
              </div>
            </div>
          </div>
        )}

        {currentStep === 'inquiry' && (
          <div className="content-stretch flex flex-col gap-[32px] items-start w-full">
            <div className="content-stretch flex flex-col gap-[24px] items-start w-full">
              <p className="font-['Volkhov:Bold',sans-serif] leading-[45px] not-italic text-[36px] text-gray-950">
                Submit Message/Inquiry
              </p>
              <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic text-[#5e6282] text-[18px]">
                Have questions before booking? Send us a message and we'll get back to you shortly.
              </p>
            </div>

            <div className="content-stretch flex flex-col gap-[24px] items-start w-full">
              <div className="content-stretch flex flex-col gap-[8px] items-start w-full">
                <label className="font-['Inter:Medium',sans-serif] font-medium text-[16px] text-black">
                  Name
                </label>
                <input
                  type="text"
                  value={bookingData.inquiryName}
                  onChange={(e) => setBookingData({ ...bookingData, inquiryName: e.target.value })}
                  className="w-full px-[16px] py-[12px] rounded-[8px] border border-[#d8d8d8] focus:outline-none focus:border-[#181e4b]"
                  placeholder="Your name"
                />
              </div>

              <div className="content-stretch flex flex-col gap-[8px] items-start w-full">
                <label className="font-['Inter:Medium',sans-serif] font-medium text-[16px] text-black">
                  Email
                </label>
                <input
                  type="email"
                  value={bookingData.inquiryEmail}
                  onChange={(e) => setBookingData({ ...bookingData, inquiryEmail: e.target.value })}
                  className="w-full px-[16px] py-[12px] rounded-[8px] border border-[#d8d8d8] focus:outline-none focus:border-[#181e4b]"
                  placeholder="your.email@example.com"
                />
              </div>

              <div className="content-stretch flex flex-col gap-[8px] items-start w-full">
                <label className="font-['Inter:Medium',sans-serif] font-medium text-[16px] text-black">
                  Website (Optional)
                </label>
                <input
                  type="url"
                  value={bookingData.inquiryWebsite}
                  onChange={(e) => setBookingData({ ...bookingData, inquiryWebsite: e.target.value })}
                  className="w-full px-[16px] py-[12px] rounded-[8px] border border-[#d8d8d8] focus:outline-none focus:border-[#181e4b]"
                  placeholder="https://yourwebsite.com"
                />
              </div>

              <div className="content-stretch flex flex-col gap-[8px] items-start w-full">
                <label className="font-['Inter:Medium',sans-serif] font-medium text-[16px] text-black">
                  Message
                </label>
                <textarea
                  value={bookingData.inquiryMessage}
                  onChange={(e) => setBookingData({ ...bookingData, inquiryMessage: e.target.value })}
                  className="w-full px-[16px] py-[12px] rounded-[8px] border border-[#d8d8d8] focus:outline-none focus:border-[#181e4b] min-h-[120px]"
                  placeholder="Tell us about your questions or specific requirements..."
                />
              </div>

              <div className="content-stretch flex gap-[16px] items-center justify-between w-full mt-[24px]">
                <button
                  type="button"
                  onClick={handleBack}
                  className="px-[32px] py-[16px] rounded-[8px] border-2 border-gray-300 text-black hover:bg-gray-50 transition-colors font-['Inter:Medium',sans-serif] font-medium text-[16px]"
                >
                  Back
                </button>
                <div className="flex gap-[12px] ml-auto">
                  <button
                    type="button"
                    onClick={handleInquirySkip}
                    className="px-[32px] py-[16px] rounded-[8px] border-2 border-gray-300 text-black hover:bg-gray-50 transition-colors font-['Inter:Medium',sans-serif] font-medium text-[16px] w-[120px]"
                  >
                    Skip
                  </button>
                  <button
                    type="button"
                    onClick={() => handleInquirySubmit({ 
                      inquiryName: bookingData.inquiryName,
                      inquiryEmail: bookingData.inquiryEmail,
                      inquiryWebsite: bookingData.inquiryWebsite,
                      inquiryMessage: bookingData.inquiryMessage
                    })}
                    className="px-[32px] py-[16px] rounded-[8px] border-2 border-gray-300 text-black hover:bg-gray-50 transition-colors font-['Inter:Medium',sans-serif] font-medium text-[16px] w-[160px]"
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {currentStep === 'personal' && (
          <div className="content-stretch flex flex-col gap-[32px] items-start w-full">
            <div className="content-stretch flex flex-col gap-[24px] items-start w-full">
              <p className="font-['Volkhov:Bold',sans-serif] leading-[45px] not-italic text-[36px] text-gray-950">
                Personal Information
              </p>
              <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic text-[#5e6282] text-[18px]">
                Please provide your contact information for the booking.
              </p>
            </div>

            <div className="content-stretch flex flex-col gap-[24px] items-start w-full">
              <div className="content-stretch flex flex-col gap-[8px] items-start w-full">
                <label className="font-['Inter:Medium',sans-serif] font-medium text-[16px] text-black">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  value={bookingData.personalName}
                  onChange={(e) => setBookingData({ ...bookingData, personalName: e.target.value })}
                  className="w-full px-[16px] py-[12px] rounded-[8px] border border-[#d8d8d8] focus:outline-none focus:border-[#181e4b]"
                  placeholder="John Doe"
                />
              </div>

              <div className="content-stretch flex flex-col gap-[8px] items-start w-full">
                <label className="font-['Inter:Medium',sans-serif] font-medium text-[16px] text-black">
                  Email Address *
                </label>
                <input
                  type="email"
                  required
                  value={bookingData.personalEmail}
                  onChange={(e) => setBookingData({ ...bookingData, personalEmail: e.target.value })}
                  className="w-full px-[16px] py-[12px] rounded-[8px] border border-[#d8d8d8] focus:outline-none focus:border-[#181e4b]"
                  placeholder="john@example.com"
                />
              </div>

              <div className="content-stretch flex flex-col gap-[8px] items-start w-full">
                <label className="font-['Inter:Medium',sans-serif] font-medium text-[16px] text-black">
                  Website (Optional)
                </label>
                <input
                  type="url"
                  value={bookingData.personalWebsite}
                  onChange={(e) => setBookingData({ ...bookingData, personalWebsite: e.target.value })}
                  className="w-full px-[16px] py-[12px] rounded-[8px] border border-[#d8d8d8] focus:outline-none focus:border-[#181e4b]"
                  placeholder="https://yourwebsite.com"
                />
              </div>

              <div className="content-stretch flex flex-col gap-[8px] items-start w-full">
                <label className="font-['Inter:Medium',sans-serif] font-medium text-[16px] text-black">
                  Additional Notes
                </label>
                <textarea
                  value={bookingData.personalMessage}
                  onChange={(e) => setBookingData({ ...bookingData, personalMessage: e.target.value })}
                  className="w-full px-[16px] py-[12px] rounded-[8px] border border-[#d8d8d8] focus:outline-none focus:border-[#181e4b] min-h-[120px]"
                  placeholder="Any special requests or requirements..."
                />
              </div>

              <div className="content-stretch flex gap-[16px] items-center justify-between w-full mt-[24px]">
                <button
                  type="button"
                  onClick={handleBack}
                  className="px-[32px] py-[16px] rounded-[8px] border-2 border-gray-300 text-black hover:bg-gray-50 transition-colors font-['Inter:Medium',sans-serif] font-medium text-[16px]"
                >
                  Back
                </button>
                <button
                  type="button"
                  onClick={() => {
                    if (!bookingData.personalName || !bookingData.personalEmail) {
                      alert('Please fill in all required fields');
                      return;
                    }
                    handlePersonalInfo({
                      personalName: bookingData.personalName,
                      personalEmail: bookingData.personalEmail,
                      personalWebsite: bookingData.personalWebsite,
                      personalMessage: bookingData.personalMessage
                    });
                  }}
                  className="px-[32px] py-[16px] rounded-[8px] border-2 border-gray-300 text-black hover:bg-gray-50 transition-colors ml-auto font-['Inter:Medium',sans-serif] font-medium text-[16px] w-[160px]"
                >
                  Next
                </button>
              </div>
            </div>
          </div>
        )}

        {currentStep === 'review' && (
          <div className="content-stretch flex flex-col gap-[32px] items-start w-full">
            <div className="content-stretch flex flex-col gap-[24px] items-start w-full">
              <p className="font-['Volkhov:Bold',sans-serif] leading-[45px] not-italic text-[36px] text-gray-950">
                Review Your Booking
              </p>
              <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic text-[#5e6282] text-[18px]">
                Please review your booking details before proceeding to schedule a meeting with Samuel.
              </p>
            </div>

            <div className="w-full bg-gray-50 rounded-[12px] p-[32px] border border-gray-200">
              <div className="flex flex-col gap-[24px]">
                <div>
                  <p className="font-['Inter:Medium',sans-serif] font-medium text-[18px] text-black mb-[16px]">
                    Tour Selection
                  </p>
                  <div className="flex flex-col gap-[12px]">
                    <div className="flex justify-between items-center pb-[12px] border-b border-gray-200">
                      <span className="text-[#5e6282]">Experience</span>
                      <span className="font-medium text-black">{bookingData.experience || 'Not selected'}</span>
                    </div>
                    <div className="flex justify-between items-center pb-[12px] border-b border-gray-200">
                      <span className="text-[#5e6282]">Number of Travelers</span>
                      <span className="font-medium text-black">{bookingData.travelers} {bookingData.travelers === 1 ? 'person' : 'people'}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-[#5e6282]">Preferred Travel Month</span>
                      <span className="font-medium text-black">{bookingData.preferredMonth || 'Not specified'}</span>
                    </div>
                  </div>
                </div>

                <div>
                  <p className="font-['Inter:Medium',sans-serif] font-medium text-[18px] text-black mb-[16px]">
                    Personal Information
                  </p>
                  <div className="flex flex-col gap-[12px]">
                    <div className="flex justify-between items-center pb-[12px] border-b border-gray-200">
                      <span className="text-[#5e6282]">Name</span>
                      <span className="font-medium text-black">{bookingData.personalName || 'Not provided'}</span>
                    </div>
                    <div className="flex justify-between items-center pb-[12px] border-b border-gray-200">
                      <span className="text-[#5e6282]">Email</span>
                      <span className="font-medium text-black">{bookingData.personalEmail || 'Not provided'}</span>
                    </div>
                    {bookingData.personalWebsite && (
                      <div className="flex justify-between items-center pb-[12px] border-b border-gray-200">
                        <span className="text-[#5e6282]">Website</span>
                        <span className="font-medium text-black text-[14px]">{bookingData.personalWebsite}</span>
                      </div>
                    )}
                    {bookingData.personalMessage && (
                      <div className="flex flex-col gap-[8px]">
                        <span className="text-[#5e6282]">Additional Notes</span>
                        <span className="font-medium text-black text-[14px]">{bookingData.personalMessage}</span>
                      </div>
                    )}
                  </div>
                </div>

                {(bookingData.inquiryName || bookingData.inquiryMessage) && (
                  <div>
                    <p className="font-['Inter:Medium',sans-serif] font-medium text-[18px] text-black mb-[16px]">
                      Inquiry Details
                    </p>
                    <div className="flex flex-col gap-[12px]">
                      {bookingData.inquiryName && (
                        <div className="flex justify-between items-center pb-[12px] border-b border-gray-200">
                          <span className="text-[#5e6282]">Inquiry From</span>
                          <span className="font-medium text-black">{bookingData.inquiryName}</span>
                        </div>
                      )}
                      {bookingData.inquiryMessage && (
                        <div className="flex flex-col gap-[8px]">
                          <span className="text-[#5e6282]">Message</span>
                          <span className="font-medium text-black text-[14px]">{bookingData.inquiryMessage}</span>
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </div>

            <div className="content-stretch flex gap-[16px] items-center justify-between w-full">
              <button
                type="button"
                onClick={handleBack}
                className="px-[32px] py-[16px] rounded-[8px] border-2 border-gray-300 text-black hover:bg-gray-50 transition-colors font-['Inter:Medium',sans-serif] font-medium text-[16px]"
              >
                Back
              </button>
              <button
                type="button"
                onClick={handleReviewSubmit}
                className="px-[32px] py-[16px] rounded-[8px] border-2 border-gray-300 text-black hover:bg-gray-50 transition-colors ml-auto font-['Inter:Medium',sans-serif] font-medium text-[16px] w-[280px]"
              >
                Continue to Schedule Meeting
              </button>
            </div>
          </div>
        )}

        {currentStep === 'schedule' && (
          <CalendarScheduling
            bookingData={bookingData}
            onComplete={handleScheduleComplete}
            onBack={handleBack}
          />
        )}

        {currentStep === 'payment' && (
          <PaymentGateway
            bookingData={bookingData}
            amount={2500}
            onComplete={handlePaymentComplete}
            onBack={handleBack}
          />
        )}

        {currentStep === 'confirmation' && (
          <div className="content-stretch flex flex-col gap-[32px] items-center text-center">
            <div className="w-[100px] h-[100px] rounded-full bg-[#DF6951] bg-opacity-20 flex items-center justify-center">
              <svg className="w-[60px] h-[60px] text-[#DF6951]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>

            <div className="flex flex-col gap-[16px]">
              <p className="font-['Volkhov:Bold',sans-serif] text-[42px] text-gray-950">
                Booking Confirmed!
              </p>
              <p className="font-['Inter:Regular',sans-serif] text-[18px] text-[#5e6282] max-w-[500px]">
                Thank you for booking with Grant Expedition. We've sent a confirmation email to{' '}
                <span className="font-medium text-[#181e4b]">{bookingData.personalEmail || bookingData.email}</span>
              </p>
            </div>

            <div className="bg-gray-200 rounded-[20px] p-[32px] max-w-[1018px] w-full">
              <p className="capitalize font-['Volkhov:Bold',sans-serif] text-[#181e4b] text-[50px] text-center mb-[24px]">
                Check Your Email
              </p>
              <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[1.5] text-[#181e4b] text-[18px] text-center">
                We've sent you a detailed confirmation email with your booking information, meeting details, and next steps. Please check your inbox and spam folder if you don't see it within a few minutes.
              </p>
            </div>

            <div className="w-full bg-gray-50 rounded-[12px] p-[32px] border border-gray-200 text-left">
              <p className="font-['Inter:Medium',sans-serif] font-medium text-[20px] text-black mb-[24px]">
                Booking Summary
              </p>
              
              <div className="flex flex-col gap-[16px]">
                <div className="flex justify-between items-center pb-[16px] border-b border-gray-200">
                  <span className="text-[#5e6282]">Experience</span>
                  <span className="font-medium text-black">{bookingData.experience}</span>
                </div>
                <div className="flex justify-between items-center pb-[16px] border-b border-gray-200">
                  <span className="text-[#5e6282]">Travelers</span>
                  <span className="font-medium text-black">{bookingData.travelers} {bookingData.travelers === 1 ? 'person' : 'people'}</span>
                </div>
                {bookingData.preferredMonth && (
                  <div className="flex justify-between items-center pb-[16px] border-b border-gray-200">
                    <span className="text-[#5e6282]">Preferred Month</span>
                    <span className="font-medium text-black">{bookingData.preferredMonth}</span>
                  </div>
                )}
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
                <div className="flex justify-between items-center pb-[16px] border-b border-gray-200">
                  <span className="text-[#5e6282]">Contact Email</span>
                  <span className="font-medium text-black">{bookingData.personalEmail || bookingData.email}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-[#5e6282]">Amount Paid</span>
                  <span className="font-['Volkhov:Bold',sans-serif] text-[24px] text-[#181e4b]">
                    ${bookingData.amount?.toLocaleString()}
                  </span>
                </div>
              </div>
            </div>

            {bookingData.personalMessage && (
              <div className="w-full bg-blue-50 rounded-[12px] p-[24px] border border-blue-200">
                <p className="font-['Inter:Medium',sans-serif] font-medium text-[16px] text-black mb-[12px]">
                  Your Special Requests
                </p>
                <p className="text-[14px] text-[#5e6282]">{bookingData.personalMessage}</p>
              </div>
            )}

            <div className="w-full bg-blue-50 rounded-[12px] p-[24px] border border-blue-200 text-left">
              <p className="font-['Inter:Medium',sans-serif] font-medium text-[16px] text-black mb-[12px]">
                What's Next?
              </p>
              <ul className="list-disc list-inside text-[14px] text-[#5e6282] space-y-[8px]">
                <li>You'll receive a calendar invite with meeting details</li>
                <li>Samuel will reach out 24 hours before your meeting</li>
                <li>Prepare any questions about your Tanzanian adventure</li>
                <li>Check your email for preparation materials and itinerary details</li>
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
