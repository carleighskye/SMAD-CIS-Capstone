import img from "figma:asset/bf8bc585f22ec4b78c4dce94735ae537b827d118.png";

function Frame2() {
  return (
    <div className="content-stretch flex font-['Instrument_Sans:Regular',sans-serif] font-normal gap-[62px] items-center leading-[normal] relative shrink-0 text-[26px] text-black text-nowrap whitespace-pre">
      <p className="relative shrink-0" style={{ fontVariationSettings: "'wdth' 100" }}>
        Home
      </p>
      <p className="relative shrink-0" style={{ fontVariationSettings: "'wdth' 100" }}>
        About
      </p>
      <p className="relative shrink-0" style={{ fontVariationSettings: "'wdth' 100" }}>
        Tours
      </p>
      <p className="relative shrink-0" style={{ fontVariationSettings: "'wdth' 100" }}>
        Contact
      </p>
    </div>
  );
}

function Frame1() {
  return (
    <div className="bg-[#fee373] box-border content-stretch flex gap-[10px] items-center justify-center p-[12px] relative rounded-[5px] shrink-0">
      <p className="font-['Instrument_Sans:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[28px] text-black text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
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

function Title() {
  return (
    <div className="absolute contents left-[291px] top-[76px]" data-name="Title">
      <p className="absolute capitalize font-['Volkhov:Bold',sans-serif] leading-[normal] left-[509px] not-italic text-[#181e4b] text-[50px] text-center text-nowrap top-[76px] translate-x-[-50%] whitespace-pre">Check Your Email</p>
    </div>
  );
}

function Frame3() {
  return (
    <div className="bg-gray-200 h-[293px] overflow-clip relative rounded-[20px] shrink-0 w-[1018px]">
      <Title />
      <p className="absolute font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal h-[54px] leading-[1.5] left-[509px] text-[#181e4b] text-[18px] text-center top-[163px] translate-x-[-50%] w-[674px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et</p>
    </div>
  );
}

export default function Confirmation() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[173px] items-center relative size-full" data-name="Confirmation">
      <div className="box-border content-stretch flex gap-[527px] items-start justify-center pl-[10px] pr-0 py-0 relative shrink-0 w-[1512px]" data-name="Header">
        <div className="h-[152px] relative shrink-0 w-[191px]" data-name="image 2">
          <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-contain pointer-events-none size-full" src={img} />
        </div>
        <Frame />
      </div>
      <Frame3 />
    </div>
  );
}