import svgPaths from "./svg-fy1u9uridb";
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

function Frame3() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0">
      <div className="h-[212px] relative shrink-0 w-[214px]" data-name="Spinner">
        <div className="absolute inset-[13.45%]">
          <div className="absolute inset-[-4.52%_-4.47%]" style={{ "--stroke-0": "rgba(239, 243, 253, 1)" } as React.CSSProperties}>
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 171 169">
              <ellipse cx="85.2171" cy="84.4861" id="Ellipse 1" rx="78.2171" ry="77.4861" stroke="var(--stroke-0, #EFF3FD)" strokeWidth="14" />
            </svg>
          </div>
        </div>
        <div className="absolute flex inset-0 items-center justify-center">
          <div className="flex-none h-[112.773px] rotate-[120.115deg] skew-x-[359.61deg] w-[113.207px]">
            <div className="relative size-full">
              <div className="absolute inset-[2.52%_71.03%_19.98%_-4.5%]" style={{ "--stroke-0": "rgba(64, 64, 64, 1)" } as React.CSSProperties}>
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 52 121">
                  <path d={svgPaths.p145bf8c0} id="Ellipse 2" stroke="var(--stroke-0, #404040)" strokeDasharray="4 4" strokeLinecap="round" strokeWidth="14" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col font-['Abhaya_Libre_Medium:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[18px] text-center text-neutral-700 text-nowrap">
        <p className="leading-[normal] whitespace-pre">Submitting...</p>
      </div>
    </div>
  );
}

export default function Loading() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[173px] items-center relative size-full" data-name="Loading">
      <div className="box-border content-stretch flex gap-[527px] items-start justify-center pl-[10px] pr-0 py-0 relative shrink-0 w-[1512px]" data-name="Header">
        <div className="h-[152px] relative shrink-0 w-[191px]" data-name="image 2">
          <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-contain pointer-events-none size-full" src={img} />
        </div>
        <Frame />
      </div>
      <div className="content-stretch flex flex-col gap-[238px] items-center relative shrink-0">
        <Frame3 />
      </div>
    </div>
  );
}