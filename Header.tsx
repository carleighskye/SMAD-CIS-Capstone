import img from "figma:asset/bf8bc585f22ec4b78c4dce94735ae537b827d118.png";

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
    <div className="bg-[#ffec9d] box-border content-stretch flex gap-[10px] items-center justify-center p-[12px] relative rounded-[5px] shrink-0">
      <p className="font-['Geologica:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[28px] text-black text-nowrap whitespace-pre" style={{ fontVariationSettings: "'CRSV' 0, 'SHRP' 0" }}>
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

export default function Header() {
  return (
    <div className="relative size-full" data-name="Header">
      <div className="flex flex-row justify-center size-full">
        <div className="box-border content-stretch flex gap-[527px] items-start justify-center pl-[10px] pr-0 py-0 relative size-full">
          <div className="h-[152px] relative shrink-0 w-[191px]" data-name="image 2">
            <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-contain pointer-events-none size-full" src={img} />
          </div>
          <Frame />
        </div>
      </div>
    </div>
  );
}