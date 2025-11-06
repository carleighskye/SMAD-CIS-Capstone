import { useState, useEffect } from 'react';
import { Calendar, DollarSign, Users, Clock } from 'lucide-react';
import { projectId, publicAnonKey } from '../utils/supabase/info';

interface Booking {
  id: string;
  date: string;
  time: string;
  name: string;
  email: string;
  phone?: string;
  status: string;
  paymentId?: string;
  createdAt: string;
}

export default function AdminDashboard() {
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedDate, setSelectedDate] = useState<string>(new Date().toISOString().split('T')[0]);

  useEffect(() => {
    fetchBookings();
  }, [selectedDate]);

  const fetchBookings = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        `https://${projectId}.supabase.co/functions/v1/make-server-a628c144/calendar/availability?date=${selectedDate}`,
        {
          headers: {
            Authorization: `Bearer ${publicAnonKey}`,
          },
        }
      );
      const data = await response.json();
      // In a real app, we'd have a separate endpoint to fetch bookings
      console.log('Calendar data:', data);
    } catch (error) {
      console.error('Error fetching bookings:', error);
    } finally {
      setLoading(false);
    }
  };

  const generateDates = () => {
    const dates = [];
    const today = new Date();
    for (let i = -7; i < 14; i++) {
      const date = new Date(today);
      date.setDate(today.getDate() + i);
      dates.push(date.toISOString().split('T')[0]);
    }
    return dates;
  };

  const dates = generateDates();

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' });
  };

  return (
    <div className="bg-white min-h-screen">
      {/* Header */}
      <header className="border-b border-gray-200 bg-[#181e4b]">
        <div className="max-w-[1400px] mx-auto px-[24px] py-[24px]">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="font-['Volkhov:Bold',sans-serif] text-[28px] text-white">
                Admin Dashboard
              </h1>
              <p className="text-[14px] text-gray-300 mt-[4px]">
                Manage bookings and calendar
              </p>
            </div>
            <div className="flex items-center gap-[8px]">
              <div className="w-[8px] h-[8px] rounded-full bg-green-400"></div>
              <span className="text-[14px] text-white">System Online</span>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-[1400px] mx-auto px-[24px] py-[32px]">
        {/* Stats */}
        <div className="grid grid-cols-4 gap-[24px] mb-[32px]">
          <div className="bg-white p-[24px] rounded-[12px] border border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-[14px] text-[#5e6282] mb-[8px]">Total Bookings</p>
                <p className="font-['Volkhov:Bold',sans-serif] text-[32px] text-gray-950">24</p>
              </div>
              <div className="w-[48px] h-[48px] rounded-full bg-blue-100 flex items-center justify-center">
                <Calendar className="w-[24px] h-[24px] text-[#181e4b]" />
              </div>
            </div>
          </div>

          <div className="bg-white p-[24px] rounded-[12px] border border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-[14px] text-[#5e6282] mb-[8px]">Revenue</p>
                <p className="font-['Volkhov:Bold',sans-serif] text-[32px] text-gray-950">$48,500</p>
              </div>
              <div className="w-[48px] h-[48px] rounded-full bg-green-100 flex items-center justify-center">
                <DollarSign className="w-[24px] h-[24px] text-green-600" />
              </div>
            </div>
          </div>

          <div className="bg-white p-[24px] rounded-[12px] border border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-[14px] text-[#5e6282] mb-[8px]">Active Clients</p>
                <p className="font-['Volkhov:Bold',sans-serif] text-[32px] text-gray-950">18</p>
              </div>
              <div className="w-[48px] h-[48px] rounded-full bg-purple-100 flex items-center justify-center">
                <Users className="w-[24px] h-[24px] text-purple-600" />
              </div>
            </div>
          </div>

          <div className="bg-white p-[24px] rounded-[12px] border border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-[14px] text-[#5e6282] mb-[8px]">Avg. Meeting Time</p>
                <p className="font-['Volkhov:Bold',sans-serif] text-[32px] text-gray-950">45m</p>
              </div>
              <div className="w-[48px] h-[48px] rounded-full bg-orange-100 flex items-center justify-center">
                <Clock className="w-[24px] h-[24px] text-orange-600" />
              </div>
            </div>
          </div>
        </div>

        {/* Calendar View */}
        <div className="bg-white rounded-[12px] border border-gray-200 p-[32px]">
          <div className="flex items-center justify-between mb-[24px]">
            <h2 className="font-['Volkhov:Bold',sans-serif] text-[24px] text-gray-950">
              Calendar Schedule
            </h2>
            <div className="flex items-center gap-[12px]">
              <button className="px-[16px] py-[8px] rounded-[8px] border border-gray-300 text-black hover:bg-gray-50">
                Today
              </button>
            </div>
          </div>

          {/* Date Selector */}
          <div className="grid grid-cols-7 gap-[8px] mb-[32px]">
            {dates.map((date) => (
              <button
                key={date}
                onClick={() => setSelectedDate(date)}
                className={`p-[12px] rounded-[8px] border transition-colors ${
                  selectedDate === date
                    ? 'bg-[#181e4b] text-white border-[#181e4b]'
                    : date === new Date().toISOString().split('T')[0]
                    ? 'bg-blue-50 text-black border-blue-200'
                    : 'bg-white text-black border-gray-200 hover:border-[#181e4b]'
                }`}
              >
                <div className="flex flex-col items-center gap-[4px]">
                  <span className="text-[12px]">{formatDate(date).split(' ')[0]}</span>
                  <span className="font-medium">{formatDate(date).split(' ')[2]}</span>
                </div>
              </button>
            ))}
          </div>

          {/* Time Slots */}
          <div className="grid grid-cols-4 gap-[12px]">
            {Array.from({ length: 8 }, (_, i) => i + 9).map((hour) => {
              const timeSlot = `${hour.toString().padStart(2, '0')}:00`;
              const isBooked = false; // In real app, check against bookings
              
              return (
                <div
                  key={timeSlot}
                  className={`p-[16px] rounded-[8px] border ${
                    isBooked
                      ? 'bg-red-50 border-red-200'
                      : 'bg-gray-50 border-gray-200'
                  }`}
                >
                  <div className="flex items-center justify-between mb-[8px]">
                    <span className="font-medium text-[14px]">{timeSlot}</span>
                    <span className={`text-[12px] px-[8px] py-[2px] rounded-full ${
                      isBooked
                        ? 'bg-red-100 text-red-700'
                        : 'bg-green-100 text-green-700'
                    }`}>
                      {isBooked ? 'Booked' : 'Available'}
                    </span>
                  </div>
                  {isBooked && (
                    <div className="text-[12px] text-[#5e6282]">
                      <p className="font-medium text-black">John Doe</p>
                      <p>Safari Planning</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Recent Bookings */}
        <div className="bg-white rounded-[12px] border border-gray-200 p-[32px] mt-[32px]">
          <h2 className="font-['Volkhov:Bold',sans-serif] text-[24px] text-gray-950 mb-[24px]">
            Recent Bookings
          </h2>

          {loading ? (
            <p className="text-[#5e6282] text-center py-[32px]">Loading bookings...</p>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-[12px] px-[16px] text-[14px] font-medium text-[#5e6282]">
                      Booking ID
                    </th>
                    <th className="text-left py-[12px] px-[16px] text-[14px] font-medium text-[#5e6282]">
                      Client
                    </th>
                    <th className="text-left py-[12px] px-[16px] text-[14px] font-medium text-[#5e6282]">
                      Date & Time
                    </th>
                    <th className="text-left py-[12px] px-[16px] text-[14px] font-medium text-[#5e6282]">
                      Status
                    </th>
                    <th className="text-left py-[12px] px-[16px] text-[14px] font-medium text-[#5e6282]">
                      Amount
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {/* Sample data - in real app, map over bookings */}
                  <tr className="border-b border-gray-100 hover:bg-gray-50">
                    <td className="py-[16px] px-[16px] text-[14px] font-mono">
                      #BK-001
                    </td>
                    <td className="py-[16px] px-[16px]">
                      <p className="font-medium">Sample Client</p>
                      <p className="text-[12px] text-[#5e6282]">sample@email.com</p>
                    </td>
                    <td className="py-[16px] px-[16px] text-[14px]">
                      Dec 15, 2024 at 10:00 AM
                    </td>
                    <td className="py-[16px] px-[16px]">
                      <span className="px-[12px] py-[4px] rounded-full text-[12px] bg-green-100 text-green-700">
                        Confirmed
                      </span>
                    </td>
                    <td className="py-[16px] px-[16px] font-medium">
                      $2,500
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
