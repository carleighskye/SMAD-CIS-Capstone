import svgPaths from "./svg-kbie5s86wu";

function Frame3() {
  return (
    <div className="content-stretch flex flex-col gap-[12.6px] items-start leading-[normal] relative shrink-0 text-white">
      <p className="font-['Sora:Bold',sans-serif] font-bold relative shrink-0 text-[75.6px] text-nowrap whitespace-pre">The New Safari</p>
      <p className="font-['SF_Pro_Display:Regular',sans-serif] not-italic relative shrink-0 text-[18.9px] w-[545.737px]">{`The New Safari carries on the legendary lineage with contemporary and premium updates. The New Safari is a compelling combination of Grand Design, Cutting-edge Technology & Luxurious Comfort `}</p>
    </div>
  );
}

function Frame() {
  return (
    <div className="relative shrink-0 size-[25.2px]" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 26 26">
        <g id="Frame">
          <path clipRule="evenodd" d={svgPaths.p1937b800} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame1() {
  return (
    <div className="backdrop-blur-[5.394px] backdrop-filter box-border content-stretch flex gap-[10.238px] items-center px-[25.2px] py-[9.45px] relative shrink-0">
      <div aria-hidden="true" className="absolute border-[0.787px] border-solid border-white inset-0 pointer-events-none" />
      <p className="font-['SF_Pro_Display:Semibold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[18.9px] text-nowrap text-white whitespace-pre">Book Now</p>
      <Frame />
    </div>
  );
}

export default function Frame2() {
  return (
    <div className="content-stretch flex flex-col gap-[44.1px] items-start relative size-full">
      <Frame3 />
      <Frame1 />
    </div>
  );
}