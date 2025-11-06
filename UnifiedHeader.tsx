import { useNavigate, useLocation } from 'react-router-dom';
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import img from "figma:asset/bf8bc585f22ec4b78c4dce94735ae537b827d118.png";

export default function UnifiedHeader() {
  const navigate = useNavigate();
  const location = useLocation();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Determine which page is active
  const isHome = location.pathname === '/';
  const isAbout = location.pathname === '/about';
  const isTours = location.pathname === '/tours';
  const isContact = location.pathname === '/contact';

  return (
    <div className="relative shrink-0 w-full" data-name="Header">
      <div className="flex flex-row justify-center size-full">
        <div className="box-border content-stretch flex gap-[527px] items-start justify-center pl-[10px] pr-0 py-0 relative w-full">
          <div 
            className="h-[152px] relative shrink-0 w-[191px] cursor-pointer" 
            data-name="image 1"
            onClick={() => navigate('/')}
          >
            <img alt="Grant Expedition" className="absolute inset-0 max-w-none object-50%-50% object-contain pointer-events-none size-full" src={img} />
          </div>
          <div className="basis-0 content-stretch flex gap-[66px] grow h-[152px] items-center justify-center min-h-px min-w-px relative shrink-0">
            <div className="content-stretch flex gap-[62px] items-center leading-[normal] relative shrink-0 text-[26px] text-black text-nowrap whitespace-pre">
              <p 
                className={`relative shrink-0 cursor-pointer hover:opacity-70 transition-opacity ${
                  isHome 
                    ? "font-['DM_Sans:SemiBold',sans-serif] font-semibold" 
                    : "font-['DM_Sans:Regular',sans-serif] font-normal"
                }`}
                style={{ fontVariationSettings: "'opsz' 14" }}
                onClick={() => navigate('/')}
              >
                Home
              </p>
              <p 
                className={`relative shrink-0 cursor-pointer hover:opacity-70 transition-opacity ${
                  isAbout 
                    ? "font-['DM_Sans:SemiBold',sans-serif] font-semibold" 
                    : "font-['DM_Sans:Regular',sans-serif] font-normal"
                }`}
                style={{ fontVariationSettings: "'opsz' 14" }}
                onClick={() => navigate('/about')}
              >
                About
              </p>
              <p 
                className={`relative shrink-0 cursor-pointer hover:opacity-70 transition-opacity ${
                  isTours 
                    ? "font-['DM_Sans:SemiBold',sans-serif] font-semibold" 
                    : "font-['DM_Sans:Regular',sans-serif] font-normal"
                }`}
                style={{ fontVariationSettings: "'opsz' 14" }}
                onClick={() => navigate('/tours')}
              >
                Tours
              </p>
              <div className="relative">
                <div 
                  className="flex items-center gap-[8px] cursor-pointer hover:opacity-70 transition-opacity"
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                >
                  <p 
                    className={`relative shrink-0 ${
                      isContact 
                        ? "font-['DM_Sans:SemiBold',sans-serif] font-semibold" 
                        : "font-['DM_Sans:Regular',sans-serif] font-normal"
                    }`}
                    style={{ fontVariationSettings: "'opsz' 14" }}
                  >
                    Contact
                  </p>
                  <ChevronDown 
                    className={`w-[20px] h-[20px] transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`}
                  />
                </div>
                
                {/* Dropdown Menu */}
                {isDropdownOpen && (
                  <>
                    {/* Backdrop to close dropdown when clicking outside */}
                    <div 
                      className="fixed inset-0 z-10" 
                      onClick={() => setIsDropdownOpen(false)}
                    />
                    
                    {/* Dropdown Content */}
                    <div className="absolute top-full left-0 mt-[8px] bg-white rounded-[8px] shadow-lg border border-gray-200 py-[8px] min-w-[200px] z-20">
                      <div
                        className="px-[20px] py-[12px] hover:bg-gray-100 cursor-pointer transition-colors font-['DM_Sans:Regular',sans-serif] text-[18px] text-black"
                        onClick={() => {
                          setIsDropdownOpen(false);
                          navigate('/schedule-meeting');
                        }}
                      >
                        Schedule Meeting
                      </div>
                      <div
                        className="px-[20px] py-[12px] hover:bg-gray-100 cursor-pointer transition-colors font-['DM_Sans:Regular',sans-serif] text-[18px] text-black"
                        onClick={() => {
                          setIsDropdownOpen(false);
                          navigate('/contact');
                        }}
                      >
                        FAQs
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>
            <div 
              className="bg-[#fee373] box-border content-stretch flex gap-[10px] items-center justify-center p-[12px] relative rounded-[5px] shrink-0 cursor-pointer hover:bg-[#fdd84d] transition-colors"
              onClick={() => navigate('/book')}
            >
              <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[28px] text-black text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
                Book Now
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
