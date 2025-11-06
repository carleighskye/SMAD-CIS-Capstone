import { useState, useEffect } from 'react';
import { Calendar, Clock, User, Mail, Phone, MessageSquare } from 'lucide-react';
import { projectId, publicAnonKey } from '../utils/supabase/info';

interface CalendarSchedulingProps {
  bookingData?: any;
  onComplete?: (data: any) => void;
  onBack?: () => void;
}

export default function CalendarScheduling({ bookingData, onComplete, onBack }: CalendarSchedulingProps) {
  const [selectedDate, setSelectedDate] = useState<string>('');
  const [selectedTime, setSelectedTime] = useState<string>('');
  const [availableSlots, setAvailableSlots] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  // Generate next 30 days for date selection
  const generateDates = () => {
    const dates = [];
    const today = new Date();
    for (let i = 0; i < 30; i++) {
      const date = new Date(today);
      date.setDate(today.getDate() + i);
      dates.push(date.toISOString().split('T')[0]);
    }
    return dates;
  };

  const dates = generateDates();

  // Fetch available time slots when date is selected
  useEffect(() => {
    if (selectedDate) {
      fetchAvailability(selectedDate);
    }
  }, [selectedDate]);

  const fetchAvailability = async (date: string) => {
    setLoading(true);
    try {
      const response = await fetch(
        `https://${projectId}.supabase.co/functions/v1/make-server-a628c144/calendar/availability?date=${date}`,
        {
          headers: {
            Authorization: `Bearer ${publicAnonKey}`,
          },
        }
      );
      const data = await response.json();
      setAvailableSlots(data.availableSlots || []);
    } catch (error) {
      console.error('Error fetching availability:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!selectedDate || !selectedTime || !formData.name || !formData.email) {
      alert('Please fill in all required fields');
      return;
    }

    setLoading(true);
    try {
      const response = await fetch(
        `https://${projectId}.supabase.co/functions/v1/make-server-a628c144/bookings`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${publicAnonKey}`,
          },
          body: JSON.stringify({
            date: selectedDate,
            time: selectedTime,
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            message: formData.message,
            bookingData: bookingData || {}
          }),
        }
      );

      const data = await response.json();
      
      if (data.success) {
        if (onComplete) {
          onComplete({
            ...formData,
            date: selectedDate,
            time: selectedTime,
            bookingId: data.booking.id
          });
        }
      } else {
        alert(data.error || 'Failed to create booking');
      }
    } catch (error) {
      console.error('Error creating booking:', error);
      alert('Failed to create booking. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' });
  };

  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start relative w-full">
      <div className="content-stretch flex flex-col gap-[24px] items-start w-full">
        <p className="font-['Volkhov:Bold',sans-serif] leading-[45px] not-italic text-[36px] text-gray-950">
          Schedule a Virtual Meeting
        </p>
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic text-[#5e6282] text-[18px]">
          Book a consultation with Samuel to discuss your Tanzanian adventure plans.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="content-stretch flex flex-col gap-[32px] items-start w-full">
        {/* Date Selection */}
        <div className="content-stretch flex flex-col gap-[12px] items-start w-full">
          <label className="font-['Inter:Medium',sans-serif] font-medium text-[16px] text-black flex items-center gap-[8px]">
            <Calendar className="w-5 h-5" />
            Select Date
          </label>
          <div className="grid grid-cols-7 gap-[8px] w-full">
            {dates.slice(0, 14).map((date) => (
              <button
                key={date}
                type="button"
                onClick={() => setSelectedDate(date)}
                className={`p-[12px] rounded-[8px] border transition-colors ${
                  selectedDate === date
                    ? 'bg-[#181e4b] text-white border-[#181e4b]'
                    : 'bg-white text-black border-gray-300 hover:border-[#181e4b]'
                }`}
              >
                <div className="flex flex-col items-center gap-[4px]">
                  <span className="text-[12px]">{formatDate(date).split(' ')[0]}</span>
                  <span className="font-medium">{formatDate(date).split(' ')[2]}</span>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Time Selection */}
        {selectedDate && (
          <div className="content-stretch flex flex-col gap-[12px] items-start w-full">
            <label className="font-['Inter:Medium',sans-serif] font-medium text-[16px] text-black flex items-center gap-[8px]">
              <Clock className="w-5 h-5" />
              Select Time
            </label>
            {loading ? (
              <p className="text-[#5e6282]">Loading available times...</p>
            ) : availableSlots.length > 0 ? (
              <div className="grid grid-cols-4 gap-[12px] w-full">
                {availableSlots.map((slot) => (
                  <button
                    key={slot.time}
                    type="button"
                    onClick={() => setSelectedTime(slot.time)}
                    className={`p-[12px] rounded-[8px] border transition-colors ${
                      selectedTime === slot.time
                        ? 'bg-[#181e4b] text-white border-[#181e4b]'
                        : 'bg-white text-black border-gray-300 hover:border-[#181e4b]'
                    }`}
                  >
                    {slot.time}
                  </button>
                ))}
              </div>
            ) : (
              <p className="text-[#5e6282]">No available time slots for this date.</p>
            )}
          </div>
        )}

        {/* Contact Information */}
        {selectedTime && (
          <div className="content-stretch flex flex-col gap-[24px] items-start w-full">
            <p className="font-['Inter:Medium',sans-serif] font-medium text-[18px] text-black">
              Your Information
            </p>
            
            <div className="content-stretch flex gap-[16px] items-start w-full">
              <div className="content-stretch flex flex-col gap-[8px] items-start flex-1">
                <label className="font-['Inter:Medium',sans-serif] font-medium text-[14px] text-black flex items-center gap-[8px]">
                  <User className="w-4 h-4" />
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-[16px] py-[12px] rounded-[8px] border border-[#e0e0e0] focus:outline-none focus:border-[#181e4b]"
                  placeholder="John Doe"
                />
              </div>

              <div className="content-stretch flex flex-col gap-[8px] items-start flex-1">
                <label className="font-['Inter:Medium',sans-serif] font-medium text-[14px] text-black flex items-center gap-[8px]">
                  <Mail className="w-4 h-4" />
                  Email Address *
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-[16px] py-[12px] rounded-[8px] border border-[#e0e0e0] focus:outline-none focus:border-[#181e4b]"
                  placeholder="john@example.com"
                />
              </div>
            </div>

            <div className="content-stretch flex flex-col gap-[8px] items-start w-full">
              <label className="font-['Inter:Medium',sans-serif] font-medium text-[14px] text-black flex items-center gap-[8px]">
                <Phone className="w-4 h-4" />
                Phone Number
              </label>
              <input
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full px-[16px] py-[12px] rounded-[8px] border border-[#e0e0e0] focus:outline-none focus:border-[#181e4b]"
                placeholder="+255 766 437 358"
              />
            </div>

            <div className="content-stretch flex flex-col gap-[8px] items-start w-full">
              <label className="font-['Inter:Medium',sans-serif] font-medium text-[14px] text-black flex items-center gap-[8px]">
                <MessageSquare className="w-4 h-4" />
                Message or Questions
              </label>
              <textarea
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-[16px] py-[12px] rounded-[8px] border border-[#e0e0e0] focus:outline-none focus:border-[#181e4b] min-h-[100px]"
                placeholder="Tell us about your travel plans or any questions you have..."
              />
            </div>
          </div>
        )}

        {/* Action Buttons */}
        {selectedTime && (
          <div className="content-stretch flex gap-[16px] items-center justify-between w-full">
            {onBack && (
              <button
                type="button"
                onClick={onBack}
                className="px-[32px] py-[16px] rounded-[8px] border-2 border-gray-300 text-black hover:bg-gray-50 transition-colors font-['Inter:Medium',sans-serif] font-medium text-[16px]"
                disabled={loading}
              >
                Back
              </button>
            )}
            <button
              type="submit"
              disabled={loading}
              className="px-[32px] py-[16px] rounded-[8px] bg-[#DF6951] text-white hover:bg-[#c85a43] transition-colors disabled:opacity-50 ml-auto font-['Inter:Medium',sans-serif] font-medium text-[16px] w-[220px]"
            >
              {loading ? 'Scheduling...' : 'Schedule Meeting'}
            </button>
          </div>
        )}
      </form>
    </div>
  );
}
