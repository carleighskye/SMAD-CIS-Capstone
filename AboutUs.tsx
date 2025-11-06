import svgPaths from "./svg-yxlv8ks8h";
import imgPhoto41 from "figma:asset/0554616567fa22c452e185876bd27880e49a2a01.png";

function Frame1() {
  return (
    <div className="bg-[#97756e] box-border content-stretch flex gap-[10px] items-center justify-center p-[10px] relative shrink-0">
      <div className="flex flex-col font-['Volkhov:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[20px] text-center text-nowrap text-white">
        <p className="leading-[28px] whitespace-pre">More About Us</p>
      </div>
    </div>
  );
}

function Frame2() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[2px] items-start left-[695px] top-[68px] w-[669px]">
      <div className="flex flex-col font-['Volkhov:Bold',sans-serif] h-[142.333px] justify-center leading-[0] not-italic relative shrink-0 text-[#694c46] text-[48px] w-full">
        <p className="leading-[45px]">About Grant Expedition</p>
      </div>
      <div className="flex flex-col font-['Volkhov:Regular',sans-serif] h-[139px] justify-center leading-[32px] not-italic relative shrink-0 text-[#181e4b] text-[20px] tracking-[0.5px] w-[550px]">
        <p className="mb-0">Grant Expedition is built on trust, professionalism, and a personal touch. Every trip is designed as if we’re guiding family.</p>
        <p>&nbsp;</p>
      </div>
      <Frame1 />
    </div>
  );
}

function TicketSvg() {
  return (
    <div className="absolute left-1/2 size-[60px] top-1/2 translate-x-[-50%] translate-y-[-50%]" data-name="ticket.svg">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 60 60">
        <g id="ticket.svg">
          <path clipRule="evenodd" d={svgPaths.p16713380} fill="var(--fill-0, #F0F5F1)" fillRule="evenodd" id="Vector" />
          <path clipRule="evenodd" d={svgPaths.p33271d80} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector_2" />
          <path clipRule="evenodd" d={svgPaths.pb5bc280} fill="var(--fill-0, #97756E)" fillRule="evenodd" id="Vector_3" />
          <path clipRule="evenodd" d={svgPaths.p1b68f980} fill="var(--fill-0, #97756E)" fillRule="evenodd" id="Vector_4" />
        </g>
      </svg>
    </div>
  );
}

function TicketSvgFill() {
  return (
    <div className="absolute left-0 overflow-clip size-[60px] top-0" data-name="ticket.svg fill">
      <TicketSvg />
    </div>
  );
}

function TicketSvg1() {
  return (
    <div className="absolute left-[40px] overflow-clip size-[60px] top-[calc(50%-61.625px)] translate-y-[-50%]" data-name="ticket.svg">
      <TicketSvgFill />
    </div>
  );
}

function Section() {
  return (
    <div className="bg-white h-[263.25px] relative rounded-[24px] shadow-[0px_10px_40px_0px_rgba(0,0,0,0.05)] shrink-0 w-[336.66px]" data-name="Section">
      <TicketSvg1 />
      <div className="absolute flex flex-col font-['Volkhov:Regular',sans-serif] h-[27px] justify-center leading-[0] left-[40px] not-italic text-[#05073c] text-[17.719px] top-[143.56px] translate-y-[-50%] w-[190px]">
        <p className="leading-[27px]">Ultimate flexibility</p>
      </div>
      <div className="absolute flex flex-col font-['Volkhov:Regular',sans-serif] h-[48px] justify-center leading-[28.13px] left-[40px] not-italic text-[#05073c] text-[14.766px] top-[195.06px] translate-y-[-50%] w-[227px]">
        <p className="mb-0">You’re in control, with free</p>
        <p>cancellation and payment.</p>
      </div>
    </div>
  );
}

function HotAirBalloonSvg() {
  return (
    <div className="absolute left-1/2 size-[60px] top-1/2 translate-x-[-50%] translate-y-[-50%]" data-name="hot-air-balloon.svg">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 60 60">
        <g id="hot-air-balloon.svg">
          <path clipRule="evenodd" d={svgPaths.p161a5800} fill="var(--fill-0, #F0F5F1)" fillRule="evenodd" id="Vector" />
          <path clipRule="evenodd" d={svgPaths.p1330a700} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector_2" />
          <path clipRule="evenodd" d={svgPaths.p1e7f4100} fill="var(--fill-0, #F0F5F1)" fillRule="evenodd" id="Vector_3" />
          <path clipRule="evenodd" d={svgPaths.p2e733480} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector_4" />
          <path clipRule="evenodd" d={svgPaths.p282dee00} fill="var(--fill-0, #F0F5F1)" fillRule="evenodd" id="Vector_5" />
          <path clipRule="evenodd" d={svgPaths.p19ed0b00} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector_6" />
          <path clipRule="evenodd" d={svgPaths.p63f9a00} fill="var(--fill-0, #97756E)" fillRule="evenodd" id="Vector_7" />
          <path clipRule="evenodd" d={svgPaths.p222e9700} fill="var(--fill-0, #97756E)" fillRule="evenodd" id="Vector_8" />
          <path clipRule="evenodd" d={svgPaths.p3cdc0600} fill="var(--fill-0, #97756E)" fillRule="evenodd" id="Vector_9" />
          <path d={svgPaths.p7985800} fill="var(--fill-0, #97756E)" id="Vector_10" />
        </g>
      </svg>
    </div>
  );
}

function HotAirBalloonSvgFill() {
  return (
    <div className="absolute left-0 overflow-clip size-[60px] top-0" data-name="hot-air-balloon.svg fill">
      <HotAirBalloonSvg />
    </div>
  );
}

function HotAirBalloonSvg1() {
  return (
    <div className="absolute left-[40px] overflow-clip size-[60px] top-[calc(50%-61.625px)] translate-y-[-50%]" data-name="hot-air-balloon.svg">
      <HotAirBalloonSvgFill />
    </div>
  );
}

function Section1() {
  return (
    <div className="bg-white h-[263.25px] relative rounded-[24px] shadow-[0px_10px_40px_0px_rgba(0,0,0,0.05)] shrink-0 w-[336.66px]" data-name="Section">
      <HotAirBalloonSvg1 />
      <div className="absolute flex flex-col font-['Volkhov:Regular',sans-serif] h-[27px] justify-center leading-[0] left-[40px] not-italic text-[#05073c] text-[17.719px] top-[143.56px] translate-y-[-50%] w-[253px]">
        <p className="leading-[27px]">Memorable experiences</p>
      </div>
      <div className="absolute flex flex-col font-['Volkhov:Regular',sans-serif] h-[48px] justify-center leading-[28.13px] left-[40px] not-italic text-[#05073c] text-[14.648px] top-[195.06px] translate-y-[-50%] w-[235px]">
        <p className="mb-0">Browse and book tours and</p>
        <p>activities so incredible.</p>
      </div>
    </div>
  );
}

function DiamondSvg() {
  return (
    <div className="absolute left-1/2 size-[60px] top-1/2 translate-x-[-50%] translate-y-[-50%]" data-name="diamond.svg">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 60 60">
        <g id="diamond.svg">
          <path clipRule="evenodd" d={svgPaths.p98d3600} fill="var(--fill-0, #F0F5F1)" fillRule="evenodd" id="Vector" />
          <path clipRule="evenodd" d={svgPaths.p1868a700} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector_2" />
          <path clipRule="evenodd" d={svgPaths.p1c0ef900} fill="var(--fill-0, #F0F5F1)" fillRule="evenodd" id="Vector_3" />
          <path clipRule="evenodd" d={svgPaths.p351dfc80} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector_4" />
          <path clipRule="evenodd" d={svgPaths.p8bcfcf0} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector_5" />
          <path clipRule="evenodd" d={svgPaths.p399fa1c0} fill="var(--fill-0, #F0F5F1)" fillRule="evenodd" id="Vector_6" />
          <path clipRule="evenodd" d={svgPaths.p258eab00} fill="var(--fill-0, #F0F5F1)" fillRule="evenodd" id="Vector_7" />
          <path clipRule="evenodd" d={svgPaths.p29c35780} fill="var(--fill-0, #F0F5F1)" fillRule="evenodd" id="Vector_8" />
          <path d={svgPaths.p36196200} fill="var(--fill-0, #97756E)" id="Vector_9" />
          <path clipRule="evenodd" d={svgPaths.p64d76f0} fill="var(--fill-0, #97756E)" fillRule="evenodd" id="Vector_10" />
          <path clipRule="evenodd" d={svgPaths.p328b82c0} fill="var(--fill-0, #97756E)" fillRule="evenodd" id="Vector_11" />
          <path clipRule="evenodd" d={svgPaths.p3ce06780} fill="var(--fill-0, #97756E)" fillRule="evenodd" id="Vector_12" />
          <path clipRule="evenodd" d={svgPaths.p20f23400} fill="var(--fill-0, #97756E)" fillRule="evenodd" id="Vector_13" />
        </g>
      </svg>
    </div>
  );
}

function DiamondSvgFill() {
  return (
    <div className="absolute left-0 overflow-clip size-[60px] top-0" data-name="diamond.svg fill">
      <DiamondSvg />
    </div>
  );
}

function DiamondSvg1() {
  return (
    <div className="absolute left-[40px] overflow-clip size-[60px] top-[calc(50%-61.625px)] translate-y-[-50%]" data-name="diamond.svg">
      <DiamondSvgFill />
    </div>
  );
}

function Section2() {
  return (
    <div className="bg-white h-[263.25px] relative rounded-[24px] shadow-[0px_10px_40px_0px_rgba(0,0,0,0.05)] shrink-0 w-[336.66px]" data-name="Section">
      <DiamondSvg1 />
      <div className="absolute flex flex-col font-['Volkhov:Regular',sans-serif] h-[27px] justify-center leading-[0] left-[40px] not-italic text-[#05073c] text-[18px] top-[143.56px] translate-y-[-50%] w-[197px]">
        <p className="leading-[27px]">Quality at our core</p>
      </div>
      <div className="absolute flex flex-col font-['Volkhov:Regular',sans-serif] h-[48px] justify-center leading-[28.13px] left-[40px] not-italic text-[#05073c] text-[14.531px] top-[195.06px] translate-y-[-50%] w-[288px]">
        <p className="mb-0">High quality standards. Millions of</p>
        <p>reviews.</p>
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="absolute content-stretch flex gap-[30px] items-center left-[323px] top-[523px]">
      <Section />
      <Section1 />
      <Section2 />
    </div>
  );
}

export default function AboutUs() {
  return (
    <div className="bg-[#f0f5f1] relative size-full" data-name="About Us">
      <div className="absolute h-[550.333px] left-[70px] rounded-[63px] top-[68px] w-[583px]" data-name="Photo4 1">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[63px] size-full" src={imgPhoto41} />
      </div>
      <Frame2 />
      <Frame />
    </div>
  );
}