import imgTourCard from "figma:asset/3c69b7fa589b53f29372a9e5bea25442b6c67e97.png";
import img from "figma:asset/bf8bc585f22ec4b78c4dce94735ae537b827d118.png";

/**
 * @figmaAssetKey d02973e61045f647a2fc9f1aca539195d4f83aa5
 */
function TourCard({ className }: { className?: string }) {
  return (
    <div className={className} data-name="tour card">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[10px] size-full" src={imgTourCard} />
      <div className="bg-white box-border content-stretch flex gap-[10px] items-center justify-center p-[10px] relative rounded-[30px] shrink-0">
        <div aria-hidden="true" className="absolute border border-[#181e4b] border-solid inset-0 pointer-events-none rounded-[30px]" />
        <div className="flex flex-col font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#181e4b] text-[20px] text-nowrap tracking-[-0.6px]">
          <p className="leading-[1.5] whitespace-pre">Taste of Tanzania</p>
        </div>
      </div>
      <div className="h-[100px] shrink-0 w-[224px]" data-name="Car" />
      <div className="content-stretch flex gap-[26px] h-[125px] items-center relative shrink-0 w-[280px]">
        <div className="bg-white box-border content-stretch flex gap-[10px] items-center justify-center p-[10px] relative rounded-[30px] shrink-0 w-[112px]">
          <div aria-hidden="true" className="absolute border border-[#181e4b] border-solid inset-0 pointer-events-none rounded-[30px]" />
          <div className="flex flex-col font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#181e4b] text-[16px] text-nowrap tracking-[-0.48px]">
            <p className="leading-[1.5] whitespace-pre">Book Now</p>
          </div>
        </div>
        <div className="bg-white box-border content-stretch flex gap-[10px] items-center justify-center p-[10px] relative rounded-[30px] shrink-0 w-[115px]">
          <div aria-hidden="true" className="absolute border border-[#181e4b] border-solid inset-0 pointer-events-none rounded-[30px]" />
          <div className="flex flex-col font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#181e4b] text-[16px] text-nowrap tracking-[-0.48px]">
            <p className="leading-[1.5] whitespace-pre">Learn More</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex gap-[62px] items-center leading-[normal] relative shrink-0 text-[26px] text-black text-nowrap whitespace-pre">
      <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal relative shrink-0" style={{ fontVariationSettings: "'wdth' 100" }}>
        Home
      </p>
      <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal relative shrink-0" style={{ fontVariationSettings: "'wdth' 100" }}>
        About
      </p>
      <p className="font-['Instrument_Sans:SemiBold',sans-serif] font-semibold relative shrink-0" style={{ fontVariationSettings: "'wdth' 100" }}>
        Tours
      </p>
      <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal relative shrink-0" style={{ fontVariationSettings: "'wdth' 100" }}>
        Contact
      </p>
    </div>
  );
}

function Frame1() {
  return (
    <div className="bg-[#fee373] box-border content-stretch flex gap-[10px] items-center justify-center p-[12px] relative rounded-[5px] shrink-0">
      <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[28px] text-black text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Book Now
      </p>
    </div>
  );
}

function Frame() {
  return (
    <div className="basis-0 content-stretch flex gap-[66px] grow h-[152px] items-center justify-center min-h-px min-w-px relative shrink-0">
      <Frame2 />
      <Frame1 />
    </div>
  );
}

function Frame3() {
  return (
    <div className="bg-white box-border content-stretch flex gap-[10px] items-center justify-center p-[10px] relative rounded-[30px] shrink-0">
      <div aria-hidden="true" className="absolute border border-[#181e4b] border-solid inset-0 pointer-events-none rounded-[30px]" />
      <div className="flex flex-col font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#181e4b] text-[20px] text-nowrap tracking-[-0.6px]">
        <p className="leading-[1.5] whitespace-pre">Taste of Tanzania</p>
      </div>
    </div>
  );
}

function Frame4() {
  return (
    <div className="bg-white box-border content-stretch flex gap-[10px] items-center justify-center p-[10px] relative rounded-[30px] shrink-0 w-[112px]">
      <div aria-hidden="true" className="absolute border border-[#181e4b] border-solid inset-0 pointer-events-none rounded-[30px]" />
      <div className="flex flex-col font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#181e4b] text-[16px] text-nowrap tracking-[-0.48px]">
        <p className="leading-[1.5] whitespace-pre">{`Book  Now`}</p>
      </div>
    </div>
  );
}

function Frame5() {
  return (
    <div className="bg-white box-border content-stretch flex gap-[10px] items-center justify-center p-[10px] relative rounded-[30px] shrink-0 w-[115px]">
      <div aria-hidden="true" className="absolute border border-[#181e4b] border-solid inset-0 pointer-events-none rounded-[30px]" />
      <div className="flex flex-col font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#181e4b] text-[16px] text-nowrap tracking-[-0.48px]">
        <p className="leading-[1.5] whitespace-pre">Learn More</p>
      </div>
    </div>
  );
}

function Frame6() {
  return (
    <div className="bg-white box-border content-stretch flex gap-[10px] items-center justify-center p-[10px] relative rounded-[30px] shrink-0">
      <div aria-hidden="true" className="absolute border border-[#181e4b] border-solid inset-0 pointer-events-none rounded-[30px]" />
      <div className="flex flex-col font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#181e4b] text-[20px] text-nowrap tracking-[-0.6px]">
        <p className="leading-[1.5] whitespace-pre">Taste of Tanzania</p>
      </div>
    </div>
  );
}

function Frame7() {
  return (
    <div className="bg-white box-border content-stretch flex gap-[10px] items-center justify-center p-[10px] relative rounded-[30px] shrink-0 w-[112px]">
      <div aria-hidden="true" className="absolute border border-[#181e4b] border-solid inset-0 pointer-events-none rounded-[30px]" />
      <div className="flex flex-col font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#181e4b] text-[16px] text-nowrap tracking-[-0.48px]">
        <p className="leading-[1.5] whitespace-pre">{`Book  Now`}</p>
      </div>
    </div>
  );
}

function Frame8() {
  return (
    <div className="bg-white box-border content-stretch flex gap-[10px] items-center justify-center p-[10px] relative rounded-[30px] shrink-0 w-[115px]">
      <div aria-hidden="true" className="absolute border border-[#181e4b] border-solid inset-0 pointer-events-none rounded-[30px]" />
      <div className="flex flex-col font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#181e4b] text-[16px] text-nowrap tracking-[-0.48px]">
        <p className="leading-[1.5] whitespace-pre">Learn More</p>
      </div>
    </div>
  );
}

function Frame9() {
  return (
    <div className="bg-white box-border content-stretch flex gap-[10px] items-center justify-center p-[10px] relative rounded-[30px] shrink-0">
      <div aria-hidden="true" className="absolute border border-[#181e4b] border-solid inset-0 pointer-events-none rounded-[30px]" />
      <div className="flex flex-col font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#181e4b] text-[20px] text-nowrap tracking-[-0.6px]">
        <p className="leading-[1.5] whitespace-pre">Taste of Tanzania</p>
      </div>
    </div>
  );
}

function Frame10() {
  return (
    <div className="bg-white box-border content-stretch flex gap-[10px] items-center justify-center p-[10px] relative rounded-[30px] shrink-0 w-[112px]">
      <div aria-hidden="true" className="absolute border border-[#181e4b] border-solid inset-0 pointer-events-none rounded-[30px]" />
      <div className="flex flex-col font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#181e4b] text-[16px] text-nowrap tracking-[-0.48px]">
        <p className="leading-[1.5] whitespace-pre">{`Book  Now`}</p>
      </div>
    </div>
  );
}

function Frame11() {
  return (
    <div className="bg-white box-border content-stretch flex gap-[10px] items-center justify-center p-[10px] relative rounded-[30px] shrink-0 w-[115px]">
      <div aria-hidden="true" className="absolute border border-[#181e4b] border-solid inset-0 pointer-events-none rounded-[30px]" />
      <div className="flex flex-col font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#181e4b] text-[16px] text-nowrap tracking-[-0.48px]">
        <p className="leading-[1.5] whitespace-pre">Learn More</p>
      </div>
    </div>
  );
}

function Frame13() {
  return (
    <div className="content-stretch flex gap-[54px] items-start relative shrink-0">
      <TourCard className="box-border content-stretch flex flex-col gap-[76px] h-[462px] items-start overflow-clip pb-[24px] pt-[35px] px-[20px] relative rounded-[10px] shrink-0 w-[304px]" />
      <div className="box-border content-stretch flex flex-col gap-[76px] h-[462px] items-start overflow-clip pb-[24px] pt-[35px] px-[20px] relative rounded-[10px] shrink-0 w-[304px]" data-name="tour card">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[10px] size-full" src={imgTourCard} />
        <Frame3 />
        <div className="h-[100px] shrink-0 w-[224px]" data-name="Car" />
        <div className="content-stretch flex gap-[26px] h-[125px] items-center relative shrink-0 w-[280px]">
          <Frame4 />
          <Frame5 />
        </div>
      </div>
      <div className="box-border content-stretch flex flex-col gap-[76px] h-[462px] items-start overflow-clip pb-[24px] pt-[35px] px-[20px] relative rounded-[10px] shrink-0 w-[304px]" data-name="tour card">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[10px] size-full" src={imgTourCard} />
        <Frame6 />
        <div className="h-[100px] shrink-0 w-[224px]" data-name="Car" />
        <div className="content-stretch flex gap-[26px] h-[125px] items-center relative shrink-0 w-[280px]">
          <Frame7 />
          <Frame8 />
        </div>
      </div>
      <div className="box-border content-stretch flex flex-col gap-[76px] h-[462px] items-start overflow-clip pb-[24px] pt-[35px] px-[20px] relative rounded-[10px] shrink-0 w-[304px]" data-name="tour card">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[10px] size-full" src={imgTourCard} />
        <Frame9 />
        <div className="h-[100px] shrink-0 w-[224px]" data-name="Car" />
        <div className="content-stretch flex gap-[26px] h-[125px] items-center relative shrink-0 w-[280px]">
          <Frame10 />
          <Frame11 />
        </div>
      </div>
    </div>
  );
}

function Frame12() {
  return (
    <div className="bg-white box-border content-stretch flex gap-[10px] items-center justify-center p-[10px] relative rounded-[30px] shrink-0">
      <div aria-hidden="true" className="absolute border border-[#181e4b] border-solid inset-0 pointer-events-none rounded-[30px]" />
      <div className="flex flex-col font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#181e4b] text-[20px] text-nowrap tracking-[-0.6px]">
        <p className="leading-[1.5] whitespace-pre">Taste of Tanzania</p>
      </div>
    </div>
  );
}

function Frame15() {
  return (
    <div className="bg-white box-border content-stretch flex gap-[10px] items-center justify-center p-[10px] relative rounded-[30px] shrink-0 w-[112px]">
      <div aria-hidden="true" className="absolute border border-[#181e4b] border-solid inset-0 pointer-events-none rounded-[30px]" />
      <div className="flex flex-col font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#181e4b] text-[16px] text-nowrap tracking-[-0.48px]">
        <p className="leading-[1.5] whitespace-pre">{`Book  Now`}</p>
      </div>
    </div>
  );
}

function Frame16() {
  return (
    <div className="bg-white box-border content-stretch flex gap-[10px] items-center justify-center p-[10px] relative rounded-[30px] shrink-0 w-[115px]">
      <div aria-hidden="true" className="absolute border border-[#181e4b] border-solid inset-0 pointer-events-none rounded-[30px]" />
      <div className="flex flex-col font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#181e4b] text-[16px] text-nowrap tracking-[-0.48px]">
        <p className="leading-[1.5] whitespace-pre">Learn More</p>
      </div>
    </div>
  );
}

function Frame17() {
  return (
    <div className="bg-white box-border content-stretch flex gap-[10px] items-center justify-center p-[10px] relative rounded-[30px] shrink-0">
      <div aria-hidden="true" className="absolute border border-[#181e4b] border-solid inset-0 pointer-events-none rounded-[30px]" />
      <div className="flex flex-col font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#181e4b] text-[20px] text-nowrap tracking-[-0.6px]">
        <p className="leading-[1.5] whitespace-pre">Taste of Tanzania</p>
      </div>
    </div>
  );
}

function Frame18() {
  return (
    <div className="bg-white box-border content-stretch flex gap-[10px] items-center justify-center p-[10px] relative rounded-[30px] shrink-0 w-[112px]">
      <div aria-hidden="true" className="absolute border border-[#181e4b] border-solid inset-0 pointer-events-none rounded-[30px]" />
      <div className="flex flex-col font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#181e4b] text-[16px] text-nowrap tracking-[-0.48px]">
        <p className="leading-[1.5] whitespace-pre">{`Book  Now`}</p>
      </div>
    </div>
  );
}

function Frame19() {
  return (
    <div className="bg-white box-border content-stretch flex gap-[10px] items-center justify-center p-[10px] relative rounded-[30px] shrink-0 w-[115px]">
      <div aria-hidden="true" className="absolute border border-[#181e4b] border-solid inset-0 pointer-events-none rounded-[30px]" />
      <div className="flex flex-col font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#181e4b] text-[16px] text-nowrap tracking-[-0.48px]">
        <p className="leading-[1.5] whitespace-pre">Learn More</p>
      </div>
    </div>
  );
}

function Frame20() {
  return (
    <div className="bg-white box-border content-stretch flex gap-[10px] items-center justify-center p-[10px] relative rounded-[30px] shrink-0">
      <div aria-hidden="true" className="absolute border border-[#181e4b] border-solid inset-0 pointer-events-none rounded-[30px]" />
      <div className="flex flex-col font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#181e4b] text-[20px] text-nowrap tracking-[-0.6px]">
        <p className="leading-[1.5] whitespace-pre">Taste of Tanzania</p>
      </div>
    </div>
  );
}

function Frame21() {
  return (
    <div className="bg-white box-border content-stretch flex gap-[10px] items-center justify-center p-[10px] relative rounded-[30px] shrink-0 w-[112px]">
      <div aria-hidden="true" className="absolute border border-[#181e4b] border-solid inset-0 pointer-events-none rounded-[30px]" />
      <div className="flex flex-col font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#181e4b] text-[16px] text-nowrap tracking-[-0.48px]">
        <p className="leading-[1.5] whitespace-pre">{`Book  Now`}</p>
      </div>
    </div>
  );
}

function Frame22() {
  return (
    <div className="bg-white box-border content-stretch flex gap-[10px] items-center justify-center p-[10px] relative rounded-[30px] shrink-0 w-[115px]">
      <div aria-hidden="true" className="absolute border border-[#181e4b] border-solid inset-0 pointer-events-none rounded-[30px]" />
      <div className="flex flex-col font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#181e4b] text-[16px] text-nowrap tracking-[-0.48px]">
        <p className="leading-[1.5] whitespace-pre">Learn More</p>
      </div>
    </div>
  );
}

function Frame23() {
  return (
    <div className="bg-white box-border content-stretch flex gap-[10px] items-center justify-center p-[10px] relative rounded-[30px] shrink-0">
      <div aria-hidden="true" className="absolute border border-[#181e4b] border-solid inset-0 pointer-events-none rounded-[30px]" />
      <div className="flex flex-col font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#181e4b] text-[20px] text-nowrap tracking-[-0.6px]">
        <p className="leading-[1.5] whitespace-pre">Taste of Tanzania</p>
      </div>
    </div>
  );
}

function Frame24() {
  return (
    <div className="bg-white box-border content-stretch flex gap-[10px] items-center justify-center p-[10px] relative rounded-[30px] shrink-0 w-[112px]">
      <div aria-hidden="true" className="absolute border border-[#181e4b] border-solid inset-0 pointer-events-none rounded-[30px]" />
      <div className="flex flex-col font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#181e4b] text-[16px] text-nowrap tracking-[-0.48px]">
        <p className="leading-[1.5] whitespace-pre">{`Book  Now`}</p>
      </div>
    </div>
  );
}

function Frame25() {
  return (
    <div className="bg-white box-border content-stretch flex gap-[10px] items-center justify-center p-[10px] relative rounded-[30px] shrink-0 w-[115px]">
      <div aria-hidden="true" className="absolute border border-[#181e4b] border-solid inset-0 pointer-events-none rounded-[30px]" />
      <div className="flex flex-col font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#181e4b] text-[16px] text-nowrap tracking-[-0.48px]">
        <p className="leading-[1.5] whitespace-pre">Learn More</p>
      </div>
    </div>
  );
}

function Frame14() {
  return (
    <div className="content-stretch flex gap-[54px] items-start relative shrink-0">
      <div className="box-border content-stretch flex flex-col gap-[76px] h-[462px] items-start overflow-clip pb-[24px] pt-[35px] px-[20px] relative rounded-[10px] shrink-0 w-[304px]" data-name="tour card">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[10px] size-full" src={imgTourCard} />
        <Frame12 />
        <div className="h-[100px] shrink-0 w-[224px]" data-name="Car" />
        <div className="content-stretch flex gap-[26px] h-[125px] items-center relative shrink-0 w-[280px]">
          <Frame15 />
          <Frame16 />
        </div>
      </div>
      <div className="box-border content-stretch flex flex-col gap-[76px] h-[462px] items-start overflow-clip pb-[24px] pt-[35px] px-[20px] relative rounded-[10px] shrink-0 w-[304px]" data-name="tour card">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[10px] size-full" src={imgTourCard} />
        <Frame17 />
        <div className="h-[100px] shrink-0 w-[224px]" data-name="Car" />
        <div className="content-stretch flex gap-[26px] h-[125px] items-center relative shrink-0 w-[280px]">
          <Frame18 />
          <Frame19 />
        </div>
      </div>
      <div className="box-border content-stretch flex flex-col gap-[76px] h-[462px] items-start overflow-clip pb-[24px] pt-[35px] px-[20px] relative rounded-[10px] shrink-0 w-[304px]" data-name="tour card">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[10px] size-full" src={imgTourCard} />
        <Frame20 />
        <div className="h-[100px] shrink-0 w-[224px]" data-name="Car" />
        <div className="content-stretch flex gap-[26px] h-[125px] items-center relative shrink-0 w-[280px]">
          <Frame21 />
          <Frame22 />
        </div>
      </div>
      <div className="box-border content-stretch flex flex-col gap-[76px] h-[462px] items-start overflow-clip pb-[24px] pt-[35px] px-[20px] relative rounded-[10px] shrink-0 w-[304px]" data-name="tour card">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[10px] size-full" src={imgTourCard} />
        <Frame23 />
        <div className="h-[100px] shrink-0 w-[224px]" data-name="Car" />
        <div className="content-stretch flex gap-[26px] h-[125px] items-center relative shrink-0 w-[280px]">
          <Frame24 />
          <Frame25 />
        </div>
      </div>
    </div>
  );
}

export default function TourScreen() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[54px] items-center relative size-full" data-name="Tour Screen">
      <div className="box-border content-stretch flex gap-[527px] items-start justify-center pl-[10px] pr-0 py-0 relative shrink-0 w-[1512px]" data-name="Header">
        <div className="h-[152px] relative shrink-0 w-[191px]" data-name="image 2">
          <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-contain pointer-events-none size-full" src={img} />
        </div>
        <Frame />
      </div>
      <div className="content-stretch flex flex-col gap-[53px] items-center leading-[0] relative shrink-0 text-[#1a202c] text-center w-[829px]" data-name="Heading">
        <div className="flex flex-col font-['Volkhov:Regular',sans-serif] justify-center min-w-full not-italic relative shrink-0 text-[48px] tracking-[-0.96px] w-[min-content]">
          <p className="leading-[1.5]">Our Tour Packages</p>
        </div>
        <div className="flex flex-col font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal justify-center leading-[1.5] relative shrink-0 text-[18px] w-[529.478px]">
          <p className="mb-0">African safari vacation stands out as a truly extraordinary option for any holiday. Imagine stepping into a world where wildlife roams freely. On such a journey, you’re not just a spectator; you become a part of the timeless rhythm of nature.</p>
          <p className="mb-0">In the vast array of African destinations, Tanzania carves a special niche with its richest wildlife and stunning landscapes. From tropical forests, endless savannahs, and snowy mountains to enormous rivers and some of the world’s deepest lakes – Tanzania has it all. The country also boasts exceptional lodges, a rich culture, fewer travelers, developed infrastructure, and an ever-present sense of adventure in each journey. In beautiful Tanzania, travelers with various preferences and budgets can embark on a once-in-a-lifetime adventure.</p>
          <p>&nbsp;</p>
        </div>
      </div>
      <Frame13 />
      <Frame14 />
    </div>
  );
}