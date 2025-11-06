import { useNavigate } from 'react-router-dom';
import imgImage2 from "figma:asset/bf8bc585f22ec4b78c4dce94735ae537b827d118.png";

interface InteractiveHeaderProps {
  transparent?: boolean;
  backgroundColor?: string;
}

function Frame1({ onNavigate, transparent }: { onNavigate: (page: string) => void; transparent?: boolean }) {
  const textColor = transparent ? 'text-white' : 'text-black';
  
  return (
    <div className={`[grid-area:1_/_1] box-border content-stretch flex font-['Volkhov:Bold',sans-serif] gap-[46.956px] h-[40.425px] items-start leading-[1.2] ml-0 mt-[25.753px] not-italic relative text-[18.783px] text-nowrap ${textColor} w-[434.53px] whitespace-pre`}>
      <p className="relative shrink-0 cursor-pointer hover:opacity-70 transition-opacity" onClick={() => onNavigate('/')}>Home</p>
      <p className="relative shrink-0 cursor-pointer hover:opacity-70 transition-opacity" onClick={() => onNavigate('/about')}>About Us</p>
      <p className="relative shrink-0 cursor-pointer hover:opacity-70 transition-opacity" onClick={() => onNavigate('/tours')}>Tours</p>
      <p className="relative shrink-0 cursor-pointer hover:opacity-70 transition-opacity" onClick={() => onNavigate('/contact')}>Contact</p>
    </div>
  );
}

function Frame({ onNavigate }: { onNavigate: (page: string) => void }) {
  return (
    <div 
      className="[grid-area:1_/_1] bg-white box-border content-stretch flex gap-[11.739px] h-[89.944px] items-center justify-center ml-[778.04px] mt-0 overflow-clip px-[28.174px] py-[14.087px] relative rounded-[9.391px] w-[171.53px] cursor-pointer hover:bg-gray-50 transition-colors" 
      data-name="Frame"
      onClick={() => onNavigate('/book')}
    >
      <p className="font-['Volkhov:Bold',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[#97756e] text-[20px] text-nowrap whitespace-pre">Book Now</p>
    </div>
  );
}

function Nav({ onNavigate, transparent }: { onNavigate: (page: string) => void; transparent?: boolean }) {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="nav">
      <Frame1 onNavigate={onNavigate} transparent={transparent} />
      <Frame onNavigate={onNavigate} />
    </div>
  );
}

export default function InteractiveHeader({ transparent = false, backgroundColor }: InteractiveHeaderProps) {
  const navigate = useNavigate();

  const handleNavigate = (page: string) => {
    navigate(page);
  };

  const containerBgClass = transparent ? 'bg-transparent' : (backgroundColor || 'bg-white');

  return (
    <div className={`content-stretch flex gap-[356px] items-start relative w-full ${containerBgClass}`}>
      <div className="basis-0 grow min-h-px min-w-px relative self-stretch shrink-0 scale-[1.25] origin-left" data-name="image 2">
        <img alt="Grant Expedition Logo" className="absolute inset-0 max-w-none object-50%-50% object-contain pointer-events-none size-full" src={imgImage2} />
      </div>
      <Nav onNavigate={handleNavigate} transparent={transparent} />
    </div>
  );
}