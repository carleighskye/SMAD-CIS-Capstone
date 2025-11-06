import img from "figma:asset/bf8bc585f22ec4b78c4dce94735ae537b827d118.png";

function Frame2() {
  return (
    <div className="content-stretch flex gap-[62px] items-center leading-[normal] relative shrink-0 text-[26px] text-black text-nowrap whitespace-pre">
      <p className="font-['DM_Sans:SemiBold',sans-serif] font-semibold relative shrink-0" style={{ fontVariationSettings: "'opsz' 14" }}>
        Home
      </p>
      <p className="font-['DM_Sans:Regular',sans-serif] font-normal relative shrink-0" style={{ fontVariationSettings: "'opsz' 14" }}>
        About
      </p>
      <p className="font-['DM_Sans:Regular',sans-serif] font-normal relative shrink-0" style={{ fontVariationSettings: "'opsz' 14" }}>
        Tours
      </p>
      <p className="font-['DM_Sans:Regular',sans-serif] font-normal relative shrink-0" style={{ fontVariationSettings: "'opsz' 14" }}>
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

export default function Frame3() {
  return (
    <div className="relative size-full">
      <div className="absolute box-border content-stretch flex gap-[527px] items-start justify-center left-0 pl-[10px] pr-0 py-0 top-0 w-[1512px]" data-name="Header">
        <div className="h-[152px] relative shrink-0 w-[191px]" data-name="image 1">
          <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-contain pointer-events-none size-full" src={img} />
        </div>
        <Frame />
      </div>
    </div>
  );
}