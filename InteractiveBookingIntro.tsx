import { useNavigate } from 'react-router-dom';
import InteractiveHeader from './InteractiveHeader';
import imgPhoto21 from "figma:asset/e54b036d9aebd21ca2abc9003e667681cc1ab93b.png";
import svgPaths from "../imports/svg-4t9algbqu9";

function Group() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-px place-items-start relative">
      <div className="[grid-area:1_/_1] flex h-[51.452px] items-center justify-center ml-0 mt-0 relative w-[60.778px]">
        <div className="flex-none rotate-[180deg] scale-y-[-100%]">
          <div className="bg-[#97756e] h-[51.452px] rounded-[10px] w-[60.778px]" />
        </div>
      </div>
    </div>
  );
}

function Group4() {
  return (
    <div className="flex items-start gap-[20px] relative w-full">
      <div className="shrink-0">
        <Group />
      </div>
      <div className="flex flex-col gap-[8px] flex-1">
        <div className="flex flex-col font-['Volkhov:Bold',sans-serif] text-[#1a202c] text-[22px]">
          <p className="leading-[1.5] font-[Volkhov]">Select Your Tour</p>
        </div>
        <div className="flex flex-col font-['Volkhov:Regular',sans-serif] text-[#1a202c] text-[18px]">
          <p className="leading-[1.75] font-[Volkhov]">Choose from our featured itineraries or request a custom one.</p>
        </div>
      </div>
    </div>
  );
}

function Group1() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[0.001px] mt-px place-items-start relative">
      <div className="[grid-area:1_/_1] flex h-[51.452px] items-center justify-center ml-0 mt-0 relative w-[60.778px]">
        <div className="flex-none rotate-[180deg] scale-y-[-100%]">
          <div className="bg-[#97756e] h-[51.452px] rounded-[10px] w-[60.778px]" />
        </div>
      </div>
    </div>
  );
}

function Group7() {
  return (
    <div className="flex items-start gap-[20px] relative w-full">
      <div className="shrink-0">
        <Group1 />
      </div>
      <div className="flex flex-col gap-[8px] flex-1">
        <div className="flex flex-col font-['Volkhov:Bold',sans-serif] text-[#1a202c] text-[22px]">
          <p className="leading-[1.5]">Travel Details</p>
        </div>
        <div className="flex flex-col font-['Volkhov:Regular',sans-serif] text-[#1a202c] text-[18px]">
          <p className="leading-[1.75]">Select the amount of travelers that will be attending.</p>
        </div>
      </div>
    </div>
  );
}

function Group2() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-[6.917px] place-items-start relative">
      <div className="[grid-area:1_/_1] flex h-[51.452px] items-center justify-center ml-0 mt-0 relative w-[60.778px]">
        <div className="flex-none rotate-[180deg] scale-y-[-100%]">
          <div className="bg-[#97756e] h-[51.452px] rounded-[10px] w-[60.778px]" />
        </div>
      </div>
    </div>
  );
}

function Group5() {
  return (
    <div className="flex items-start gap-[20px] relative w-full">
      <div className="shrink-0">
        <Group2 />
      </div>
      <div className="flex flex-col gap-[8px] flex-1">
        <div className="flex flex-col font-['Volkhov:Bold',sans-serif] text-[#1a202c] text-[22px]">
          <p className="leading-[1.5]">Submit an Inquiry or Message a Guide</p>
        </div>
        <div className="flex flex-col font-['Volkhov:Regular',sans-serif] text-[#1a202c] text-[18px]">
          <p className="leading-[1.75]">Have questions before booking? Complete the short form below to connect directly with one of our local guides for personalized recommendations.</p>
        </div>
      </div>
    </div>
  );
}

function Group3() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[0.001px] mt-px place-items-start relative">
      <div className="[grid-area:1_/_1] flex h-[51.452px] items-center justify-center ml-0 mt-0 relative w-[60.778px]">
        <div className="flex-none rotate-[180deg] scale-y-[-100%]">
          <div className="bg-[#97756e] h-[51.452px] rounded-[10px] w-[60.778px]" />
        </div>
      </div>
    </div>
  );
}

function Group6() {
  return (
    <div className="flex items-start gap-[20px] relative w-full">
      <div className="shrink-0">
        <Group3 />
      </div>
      <div className="flex flex-col gap-[8px] flex-1">
        <div className="flex flex-col font-['Volkhov:Bold',sans-serif] text-[#1a202c] text-[22px]">
          <p className="leading-[1.5]">Secure Your Booking</p>
        </div>
        <div className="flex flex-col font-['Volkhov:Regular',sans-serif] text-[#1a202c] text-[18px]">
          <p className="leading-[1.75]">Confirm safely online with protected information and payment.</p>
        </div>
      </div>
    </div>
  );
}

function HeroSection() {
  const navigate = useNavigate();

  return (
    <div className="relative w-full aspect-[16/9] overflow-hidden">
      {/* Background Image from Frame7-64-35 */}
      <div className="absolute inset-0">
        <img 
          src={imgPhoto21}
          alt="Tanzania Safari - Lions in the wild" 
          className="w-full h-full object-cover"
        />
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* Content - Centered */}
      <div className="relative z-10 h-full flex items-center justify-center">
        <div className="max-w-[900px] mx-auto px-[40px] text-center">
          <div className="content-stretch flex flex-col gap-[32px] items-center">
            <h1 className="font-['Volkhov:Bold',sans-serif] text-white text-[48px] md:text-[56px] leading-[1.3] font-[Volkhov]">
              Book your Unique Tanzanian Adventure Now
            </h1>
            <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] text-white text-[18px] md:text-[20px] leading-[1.6] max-w-[700px] font-[Volkhov]">
              We'll work with you to create a custom safari plan that fits your needs and budget. We'll also help you find your flights, hotels, and activities. And best of all, we'll give you a 10% discount on your first trip with us!
            </p>
            <div 
              className="relative rounded-[50px] shrink-0 cursor-pointer hover:bg-white/20 transition-colors mt-[16px]" 
              onClick={() => navigate('/book/start')}
            >
              <div className="box-border content-stretch flex gap-[10px] items-center justify-center overflow-clip px-[32px] py-[14px] relative rounded-[inherit]">
                <p className="font-['Plus_Jakarta_Sans:SemiBold',sans-serif] leading-[24px] relative shrink-0 text-white text-[18px] text-nowrap tracking-[0.5px] whitespace-pre font-[Volkhov]">
                  Get Started
                </p>
              </div>
              <div aria-hidden="true" className="absolute border-2 border-white border-solid inset-0 pointer-events-none rounded-[50px]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Footer({ className }: { className?: string }) {
  const navigate = useNavigate();

  const handleNavigation = (e: React.MouseEvent) => {
    const target = e.target as HTMLElement;
    const text = target.textContent?.trim();

    if (text === 'Home') navigate('/');
    else if (text === 'Tours') navigate('/tours');
    else if (text === 'Blog') navigate('/blog');
    else if (text === 'Contact') navigate('/contact');
  };

  return (
    <div className={className} data-name="footer" onClick={handleNavigation}>
      <div className="absolute content-stretch flex flex-col font-['Inter:Medium',sans-serif] font-medium gap-[24px] items-end justify-center leading-[0] not-italic right-[calc(25%+119px)] text-[16px] top-[48px]" data-name="Items">
        <div className="flex flex-col justify-center relative shrink-0 text-black w-full cursor-pointer hover:text-[#97756e] transition-colors">
          <p className="leading-[1.5]">Home</p>
        </div>
        <div className="flex flex-col justify-center relative shrink-0 text-[#454545] w-full cursor-pointer hover:text-[#97756e] transition-colors">
          <p className="leading-[1.5]">Tours</p>
        </div>
        <div className="flex flex-col justify-center relative shrink-0 text-[#454545] w-full cursor-pointer hover:text-[#97756e] transition-colors">
          <p className="leading-[1.5]">Blog</p>
        </div>
        <div className="flex flex-col justify-center relative shrink-0 text-[#454545] w-full cursor-pointer hover:text-[#97756e] transition-colors">
          <p className="leading-[1.5]">Contact</p>
        </div>
      </div>
      <div className="absolute content-stretch flex flex-col font-['Inter:Medium',sans-serif] font-medium gap-[24px] items-end justify-center leading-[0] not-italic right-[151px] text-[16px] top-[48px]" data-name="Items">
        <div className="flex flex-col justify-center relative shrink-0 text-black w-full">
          <p className="leading-[1.5]">FAQ</p>
        </div>
        <div className="flex flex-col justify-center relative shrink-0 text-[#454545] w-full">
          <p className="leading-[1.5]">Newsletter</p>
        </div>
        <div className="flex flex-col justify-center relative shrink-0 text-[#454545] w-full">
          <p className="leading-[1.5]">Privacy Policy</p>
        </div>
        <div className="flex flex-col justify-center relative shrink-0 text-[#454545] w-full">
          <p className="leading-[1.5]">Terms & Conditions</p>
        </div>
      </div>
      <div className="absolute content-stretch flex flex-col font-['Inter:Medium',sans-serif] font-medium gap-[24px] items-start justify-center leading-[0] not-italic right-1/2 top-[42px]" data-name="Items">
        <div className="flex flex-col justify-center min-w-full relative shrink-0 text-[16px] text-black w-[min-content]">
          <p className="leading-[1.5]">Contact Us</p>
        </div>
        <div className="flex flex-col justify-center relative shrink-0 text-[#454545] text-[0px] text-nowrap">
          <a className="[text-decoration-skip-ink:none] [text-underline-position:from-font] block cursor-pointer decoration-solid font-['Inter:Medium',sans-serif] leading-[1.5] not-italic text-[16px] underline whitespace-pre hover:text-[#97756e] transition-colors" href="mailto:info@grantexpedition.com">
            info@grantexpedition.com
          </a>
        </div>
        <div className="flex flex-col justify-center min-w-full relative shrink-0 text-[#454545] text-[0px] w-[min-content]">
          <a className="[text-decoration-skip-ink:none] [text-underline-position:from-font] block cursor-pointer decoration-solid font-['Inter:Medium',sans-serif] leading-[1.5] not-italic text-[16px] underline hover:text-[#97756e] transition-colors" href="tel:255766437358">
            +255 766 437 358
          </a>
        </div>
        <div className="flex flex-col justify-center min-w-full relative shrink-0 text-[#454545] text-[16px] w-[min-content]">
          <p className="leading-[1.5]">Arusha, Tanzania</p>
        </div>
      </div>
      <div className="absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] left-[80px] not-italic text-[24px] text-black text-nowrap top-[70px] translate-y-[-50%]">
        <p className="leading-[1.5] whitespace-pre">Grant Expedition</p>
      </div>
      <div className="absolute content-stretch flex gap-[8px] items-start left-[80px] top-[176px]" data-name="Social Icons">
        <div className="relative rounded-[4px] shrink-0 size-[40px] cursor-pointer hover:opacity-70 transition-opacity" data-name="Buttons / Icon">
          <div className="absolute left-[8px] size-[24px] top-[8px]" data-name="Icon">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
              <g id="Icon">
                <path d={svgPaths.p132b8500} fill="var(--fill-0, #828282)" id="Icon_2" />
              </g>
            </svg>
          </div>
        </div>
        <div className="relative rounded-[4px] shrink-0 size-[40px] cursor-pointer hover:opacity-70 transition-opacity" data-name="Buttons / Icon">
          <div className="absolute left-[8px] size-[24px] top-[8px]" data-name="Icon">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
              <g id="Icon">
                <path d={svgPaths.p3a800a00} fill="var(--fill-0, #828282)" id="Icon_2" />
              </g>
            </svg>
          </div>
        </div>
        <div className="relative rounded-[4px] shrink-0 size-[40px] cursor-pointer hover:opacity-70 transition-opacity" data-name="Buttons / Icon">
          <div className="absolute left-[8px] size-[24px] top-[8px]" data-name="Icon">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
              <g id="Icon">
                <path d={svgPaths.p3b619c00} fill="var(--fill-0, #828282)" id="Icon_2" />
              </g>
            </svg>
          </div>
        </div>
        <div className="relative rounded-[4px] shrink-0 size-[40px] cursor-pointer hover:opacity-70 transition-opacity" data-name="Buttons / Icon">
          <div className="absolute left-[8px] size-[24px] top-[8px]" data-name="Icon">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
              <g id="Icon">
                <path d={svgPaths.p1f140b00} fill="var(--fill-0, #828282)" id="Icon_2" />
              </g>
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute h-0 left-[80px] top-px w-[1280px]" data-name="Divider">
        <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1280 1">
            <line id="Divider" stroke="var(--stroke-0, #E6E6E6)" x2="1280" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default function InteractiveBookingIntro() {
  return (
    <div className="bg-white w-full min-h-screen relative">
      {/* Transparent Header Overlay */}
      <div className="absolute top-0 left-0 right-0 z-20 px-[40px] md:px-[80px] py-[20px]">
        <div className="max-w-[1440px] mx-auto">
          <InteractiveHeader transparent={true} />
        </div>
      </div>

      <HeroSection />
      
      {/* 4 Steps Content Section */}
      <div className="box-border content-stretch flex flex-col items-center py-[80px] md:py-[100px] px-[40px] md:px-[80px] lg:px-[120px] relative shrink-0 w-full max-w-[1440px] mx-auto">
        <div className="content-stretch flex flex-col gap-[50px] items-start leading-[0] relative w-full max-w-[700px]">
          <Group4 />
          <Group7 />
          <Group5 />
          <Group6 />
        </div>
      </div>

      <Footer className="bg-gray-200 h-[264px] overflow-clip relative shrink-0 w-full" />
    </div>
  );
}
