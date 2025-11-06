import { X, Calendar, Clock, Users, MapPin, DollarSign, Star } from 'lucide-react';

interface TourDetailModalProps {
  isOpen: boolean;
  onClose: () => void;
  tour: {
    id: string;
    title: string;
    description: string;
    price: string;
    duration: string;
    groupSize: string;
    difficulty: string;
    destination: string;
    highlights: string[];
    itinerary: Array<{ day: number; title: string; description: string }>;
    included: string[];
    excluded: string[];
    image?: string;
  } | null;
}

export function TourDetailModal({ isOpen, onClose, tour }: TourDetailModalProps) {
  if (!isOpen || !tour) return null;

  return (
    <div className="fixed inset-0 z-[10000] flex items-center justify-center">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Modal Content */}
      <div className="relative bg-white rounded-[24px] w-[90vw] max-w-[1000px] max-h-[90vh] overflow-hidden shadow-2xl">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute right-6 top-6 z-10 bg-white rounded-full p-2 hover:bg-gray-100 transition-colors shadow-lg"
        >
          <X className="w-6 h-6 text-gray-600" />
        </button>

        {/* Scrollable Content */}
        <div className="overflow-y-auto max-h-[90vh]">
          {/* Hero Section */}
          <div className="relative h-[300px] bg-gradient-to-br from-[#97756e] to-[#786057]">
            {tour.image && (
              <img 
                src={tour.image} 
                alt={tour.title}
                className="w-full h-full object-cover"
              />
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <h1 className="font-['Volkhov:Bold',sans-serif] text-[42px] text-white mb-2">
                {tour.title}
              </h1>
              <div className="flex items-center gap-2 text-white/90">
                <MapPin className="w-5 h-5" />
                <span className="font-['Plus_Jakarta_Sans:Medium',sans-serif] text-[16px]">
                  {tour.destination}
                </span>
              </div>
            </div>
          </div>

          {/* Info Cards */}
          <div className="grid grid-cols-4 gap-4 p-8 border-b border-gray-200">
            <div className="bg-gray-50 rounded-[16px] p-4 text-center">
              <DollarSign className="w-6 h-6 text-[#DF6951] mx-auto mb-2" />
              <div className="font-['Plus_Jakarta_Sans:Bold',sans-serif] text-[20px] text-[#181e4b]">
                ${tour.price}
              </div>
              <div className="font-['Plus_Jakarta_Sans:Regular',sans-serif] text-[12px] text-gray-600">
                Per Person
              </div>
            </div>
            
            <div className="bg-gray-50 rounded-[16px] p-4 text-center">
              <Clock className="w-6 h-6 text-[#DF6951] mx-auto mb-2" />
              <div className="font-['Plus_Jakarta_Sans:Bold',sans-serif] text-[20px] text-[#181e4b]">
                {tour.duration}
              </div>
              <div className="font-['Plus_Jakarta_Sans:Regular',sans-serif] text-[12px] text-gray-600">
                Duration
              </div>
            </div>
            
            <div className="bg-gray-50 rounded-[16px] p-4 text-center">
              <Users className="w-6 h-6 text-[#DF6951] mx-auto mb-2" />
              <div className="font-['Plus_Jakarta_Sans:Bold',sans-serif] text-[20px] text-[#181e4b]">
                {tour.groupSize}
              </div>
              <div className="font-['Plus_Jakarta_Sans:Regular',sans-serif] text-[12px] text-gray-600">
                Group Size
              </div>
            </div>
            
            <div className="bg-gray-50 rounded-[16px] p-4 text-center">
              <Star className="w-6 h-6 text-[#DF6951] mx-auto mb-2" />
              <div className="font-['Plus_Jakarta_Sans:Bold',sans-serif] text-[20px] text-[#181e4b]">
                {tour.difficulty}
              </div>
              <div className="font-['Plus_Jakarta_Sans:Regular',sans-serif] text-[12px] text-gray-600">
                Difficulty
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="p-8">
            {/* Description */}
            <div className="mb-8">
              <h2 className="font-['Volkhov:Bold',sans-serif] text-[28px] text-[#181e4b] mb-4">
                Overview
              </h2>
              <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] text-[16px] text-gray-700 leading-relaxed">
                {tour.description}
              </p>
            </div>

            {/* Highlights */}
            <div className="mb-8">
              <h2 className="font-['Volkhov:Bold',sans-serif] text-[28px] text-[#181e4b] mb-4">
                Tour Highlights
              </h2>
              <div className="grid grid-cols-2 gap-3">
                {tour.highlights.map((highlight, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-[#DF6951] mt-2 flex-shrink-0" />
                    <span className="font-['Plus_Jakarta_Sans:Regular',sans-serif] text-[15px] text-gray-700">
                      {highlight}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Itinerary */}
            <div className="mb-8">
              <h2 className="font-['Volkhov:Bold',sans-serif] text-[28px] text-[#181e4b] mb-4">
                Itinerary
              </h2>
              <div className="space-y-4">
                {tour.itinerary.map((day) => (
                  <div key={day.day} className="bg-gray-50 rounded-[16px] p-5">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="bg-[#DF6951] text-white rounded-full w-8 h-8 flex items-center justify-center font-['Plus_Jakarta_Sans:Bold',sans-serif] text-[14px]">
                        {day.day}
                      </div>
                      <h3 className="font-['Plus_Jakarta_Sans:Bold',sans-serif] text-[18px] text-[#181e4b]">
                        {day.title}
                      </h3>
                    </div>
                    <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] text-[14px] text-gray-700 ml-11">
                      {day.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Included & Excluded */}
            <div className="grid grid-cols-2 gap-8 mb-8">
              <div>
                <h3 className="font-['Volkhov:Bold',sans-serif] text-[22px] text-[#181e4b] mb-4">
                  What's Included
                </h3>
                <div className="space-y-2">
                  {tour.included.map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg className="w-3 h-3 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="font-['Plus_Jakarta_Sans:Regular',sans-serif] text-[14px] text-gray-700">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div>
                <h3 className="font-['Volkhov:Bold',sans-serif] text-[22px] text-[#181e4b] mb-4">
                  Not Included
                </h3>
                <div className="space-y-2">
                  {tour.excluded.map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <X className="w-3 h-3 text-red-600" />
                      </div>
                      <span className="font-['Plus_Jakarta_Sans:Regular',sans-serif] text-[14px] text-gray-700">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4 pt-6 border-t border-gray-200">
              <button
                onClick={onClose}
                className="flex-1 bg-gray-100 text-gray-700 px-8 py-4 rounded-[30px] font-['Plus_Jakarta_Sans:SemiBold',sans-serif] text-[16px] hover:bg-gray-200 transition-colors"
              >
                Close
              </button>
              <button
                className="flex-1 bg-[#DF6951] text-white px-8 py-4 rounded-[30px] font-['Plus_Jakarta_Sans:SemiBold',sans-serif] text-[16px] hover:bg-[#c5543d] transition-colors shadow-lg"
              >
                Book This Tour
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
