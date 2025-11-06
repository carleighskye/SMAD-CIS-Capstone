import imgLions from "figma:asset/e54b036d9aebd21ca2abc9003e667681cc1ab93b.png";
import svgPaths from '../imports/svg-kbie5s86wu';

export default function NewAdventureSection() {
  return (
    <div className="w-full relative py-[120px] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src={imgLions}
          alt="Tanzania Lions" 
          className="w-full h-full object-cover"
        />
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-[1280px] mx-auto px-[40px] md:px-[80px]">
        <div className="flex flex-col gap-[44px] items-start max-w-[600px]">
          <div className="flex flex-col gap-[24px]">
            <h2 className="font-['Volkhov:Bold',sans-serif] text-white text-[48px] md:text-[60px] leading-[1.3]">
              <span>It's Time For a </span>
              <span className="text-[rgb(255,255,255)]">New Adventure! </span>
              <span>Don't Wait Any Longer.</span>
            </h2>
            <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] text-white text-[18px] leading-[1.6]">
              Our team of travel insiders is obsessed with finding the best things to do everywhere we travel. From Paris to Phuket to Perth, from traditional tours to once-in-a-lifetime experiences, we have something for every kind of traveler. And we are proud to say that after 17 experience-packed years, we are the world leader. When planning your trip, why start anywhere else?
            </p>
          </div>

          {/* Book Now Button */}
          <div className="backdrop-blur-[5.394px] backdrop-filter box-border content-stretch flex gap-[10px] items-center px-[30px] py-[15px] relative shrink-0 cursor-pointer hover:bg-white/10 transition-colors">
            <div aria-hidden="true" className="absolute border-[1px] border-solid border-white inset-0 pointer-events-none" />
            <p className="font-['Volkhov:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[20px] text-nowrap text-white whitespace-pre">Book Now</p>
            <div className="relative shrink-0 size-[25.2px]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 26 26">
                <g>
                  <path clipRule="evenodd" d={svgPaths.p1937b800} fill="white" fillRule="evenodd" />
                </g>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
