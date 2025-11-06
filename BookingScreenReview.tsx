import svgPaths from "./svg-y86pg161tr";
import img from "figma:asset/bf8bc585f22ec4b78c4dce94735ae537b827d118.png";
type HeaderProps = {
  className?: string;
  property1?: "Home" | "about" | "tours" | "Contact" | "Book";
};

/**
 * @figmaAssetKey d0d636c5af59edd93c1e3ca81db1203b6d4ff5ad
 */
function Header({ className, property1 = "Home" }: HeaderProps) {
  const element = <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-contain pointer-events-none size-full" src={img} />;
  if (property1 === "about") {
    return (
      <div className={className} data-name="Property 1=about">
        <div className="h-[152px] relative shrink-0 w-[191px]" data-name="image 2">
          {element}
        </div>
        <div className="basis-0 content-stretch flex gap-[66px] grow h-[152px] items-center justify-center min-h-px min-w-px relative shrink-0">
          <div className="content-stretch flex gap-[62px] items-center leading-[normal] relative shrink-0 text-[26px] text-black text-nowrap whitespace-pre">
            <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal relative shrink-0" style={{ fontVariationSettings: "'wdth' 100" }}>
              Home
            </p>
            <p className="font-['Instrument_Sans:SemiBold',sans-serif] font-semibold relative shrink-0" style={{ fontVariationSettings: "'wdth' 100" }}>
              About
            </p>
            <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal relative shrink-0" style={{ fontVariationSettings: "'wdth' 100" }}>
              Tours
            </p>
            <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal relative shrink-0" style={{ fontVariationSettings: "'wdth' 100" }}>
              Contact
            </p>
          </div>
          <div className="bg-[#fee373] box-border content-stretch flex gap-[10px] items-center justify-center p-[12px] relative rounded-[5px] shrink-0">
            <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[28px] text-black text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
              Book Now
            </p>
          </div>
        </div>
      </div>
    );
  }
  if (property1 === "tours") {
    return (
      <div className={className} data-name="Property 1=tours">
        <div className="h-[152px] relative shrink-0 w-[191px]" data-name="image 2">
          {element}
        </div>
        <div className="basis-0 content-stretch flex gap-[66px] grow h-[152px] items-center justify-center min-h-px min-w-px relative shrink-0">
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
          <div className="bg-[#fee373] box-border content-stretch flex gap-[10px] items-center justify-center p-[12px] relative rounded-[5px] shrink-0">
            <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[28px] text-black text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
              Book Now
            </p>
          </div>
        </div>
      </div>
    );
  }
  if (property1 === "Contact") {
    return (
      <div className={className} data-name="Property 1=Contact">
        <div className="h-[152px] relative shrink-0 w-[191px]" data-name="image 2">
          {element}
        </div>
        <div className="basis-0 content-stretch flex gap-[66px] grow h-[152px] items-center justify-center min-h-px min-w-px relative shrink-0">
          <div className="content-stretch flex gap-[62px] items-center leading-[normal] relative shrink-0 text-[26px] text-black text-nowrap whitespace-pre">
            <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal relative shrink-0" style={{ fontVariationSettings: "'wdth' 100" }}>
              Home
            </p>
            <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal relative shrink-0" style={{ fontVariationSettings: "'wdth' 100" }}>
              About
            </p>
            <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal relative shrink-0" style={{ fontVariationSettings: "'wdth' 100" }}>
              Tours
            </p>
            <p className="font-['Instrument_Sans:SemiBold',sans-serif] font-semibold relative shrink-0" style={{ fontVariationSettings: "'wdth' 100" }}>
              Contact
            </p>
          </div>
          <div className="bg-[#fee373] box-border content-stretch flex gap-[10px] items-center justify-center p-[12px] relative rounded-[5px] shrink-0">
            <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[28px] text-black text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
              Book Now
            </p>
          </div>
        </div>
      </div>
    );
  }
  if (property1 === "Book") {
    return (
      <div className={className} data-name="Property 1=Book">
        <div className="h-[152px] relative shrink-0 w-[191px]" data-name="image 2">
          {element}
        </div>
        <div className="basis-0 content-stretch flex gap-[66px] grow h-[152px] items-center justify-center min-h-px min-w-px relative shrink-0">
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
          <div className="bg-[#fee373] box-border content-stretch flex gap-[10px] items-center justify-center p-[12px] relative rounded-[5px] shrink-0">
            <p className="font-['Instrument_Sans:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[28px] text-black text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
              Book Now
            </p>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className={className} data-name="Property 1=Home">
      <div className="h-[152px] relative shrink-0 w-[191px]" data-name="image 1">
        {element}
      </div>
      <div className="basis-0 content-stretch flex gap-[66px] grow h-[152px] items-center justify-center min-h-px min-w-px relative shrink-0">
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
        <div className="bg-[#fee373] box-border content-stretch flex gap-[10px] items-center justify-center p-[12px] relative rounded-[5px] shrink-0">
          <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[28px] text-black text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
            Book Now
          </p>
        </div>
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center justify-center px-[16px] py-[12px] relative w-full">
          <div className="basis-0 flex flex-col font-['Outfit:SemiBold',sans-serif] font-semibold grow justify-center leading-[0] min-h-px min-w-px relative shrink-0 text-[24px] text-zinc-950">
            <p className="leading-[32px]">Reservation Form</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Check() {
  return (
    <div className="bg-white box-border content-stretch flex gap-[10px] items-center p-[2px] relative rounded-[999px] shrink-0" data-name="check">
      <div aria-hidden="true" className="absolute border border-solid border-zinc-200 inset-0 pointer-events-none rounded-[999px]" />
    </div>
  );
}

function CheckContainer() {
  return (
    <div className="box-border content-stretch flex gap-[10px] items-center pb-0 pt-[3px] px-0 relative shrink-0" data-name="check container">
      <Check />
    </div>
  );
}

function TextContainer() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start justify-center min-h-px min-w-px relative shrink-0" data-name="text container">
      <div className="flex flex-col font-['Outfit:Medium',sans-serif] font-medium justify-center leading-[0] min-w-full overflow-ellipsis overflow-hidden relative shrink-0 text-[16px] text-nowrap text-zinc-500 w-[min-content]">
        <p className="[white-space-collapse:collapse] leading-[24px] overflow-ellipsis overflow-hidden">Choose Your Experience</p>
      </div>
    </div>
  );
}

function LeftRailItem() {
  return (
    <div className="relative shrink-0 w-full" data-name="left rail item">
      <div className="size-full">
        <div className="box-border content-stretch flex gap-[12px] items-start p-[16px] relative w-full">
          <CheckContainer />
          <TextContainer />
        </div>
      </div>
    </div>
  );
}

function Check1() {
  return (
    <div className="bg-white box-border content-stretch flex gap-[10px] items-center p-[2px] relative rounded-[999px] shrink-0" data-name="check">
      <div aria-hidden="true" className="absolute border border-solid border-zinc-200 inset-0 pointer-events-none rounded-[999px]" />
    </div>
  );
}

function CheckContainer1() {
  return (
    <div className="box-border content-stretch flex gap-[10px] items-center pb-0 pt-[3px] px-0 relative shrink-0" data-name="check container">
      <Check1 />
    </div>
  );
}

function TextContainer1() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start justify-center min-h-px min-w-px relative shrink-0" data-name="text container">
      <div className="flex flex-col font-['Outfit:Medium',sans-serif] font-medium justify-center leading-[0] min-w-full overflow-ellipsis overflow-hidden relative shrink-0 text-[16px] text-nowrap text-zinc-500 w-[min-content]">
        <p className="[white-space-collapse:collapse] leading-[24px] overflow-ellipsis overflow-hidden">Travel Details</p>
      </div>
    </div>
  );
}

function LeftRailItem1() {
  return (
    <div className="relative shrink-0 w-full" data-name="left rail item">
      <div className="size-full">
        <div className="box-border content-stretch flex gap-[12px] items-start p-[16px] relative w-full">
          <CheckContainer1 />
          <TextContainer1 />
        </div>
      </div>
    </div>
  );
}

function Check2() {
  return (
    <div className="bg-white box-border content-stretch flex gap-[10px] items-center p-[2px] relative rounded-[999px] shrink-0" data-name="check">
      <div aria-hidden="true" className="absolute border border-solid border-zinc-200 inset-0 pointer-events-none rounded-[999px]" />
    </div>
  );
}

function CheckContainer2() {
  return (
    <div className="box-border content-stretch flex gap-[10px] items-center pb-0 pt-[3px] px-0 relative shrink-0" data-name="check container">
      <Check2 />
    </div>
  );
}

function TextContainer2() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start justify-center min-h-px min-w-px relative shrink-0" data-name="text container">
      <div className="flex flex-col font-['Outfit:Medium',sans-serif] font-medium justify-center leading-[0] min-w-full overflow-ellipsis overflow-hidden relative shrink-0 text-[16px] text-nowrap text-zinc-500 w-[min-content]">
        <p className="[white-space-collapse:collapse] leading-[24px] overflow-ellipsis overflow-hidden">Submit Inquiry/Message</p>
      </div>
    </div>
  );
}

function LeftRailItem2() {
  return (
    <div className="relative shrink-0 w-full" data-name="left rail item">
      <div className="size-full">
        <div className="box-border content-stretch flex gap-[12px] items-start p-[16px] relative w-full">
          <CheckContainer2 />
          <TextContainer2 />
        </div>
      </div>
    </div>
  );
}

function Check3() {
  return (
    <div className="bg-white box-border content-stretch flex gap-[10px] items-center p-[2px] relative rounded-[999px] shrink-0" data-name="check">
      <div aria-hidden="true" className="absolute border border-solid border-zinc-200 inset-0 pointer-events-none rounded-[999px]" />
    </div>
  );
}

function CheckContainer3() {
  return (
    <div className="box-border content-stretch flex gap-[10px] items-center pb-0 pt-[3px] px-0 relative shrink-0" data-name="check container">
      <Check3 />
    </div>
  );
}

function TextContainer3() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start justify-center min-h-px min-w-px relative shrink-0" data-name="text container">
      <div className="flex flex-col font-['Outfit:Medium',sans-serif] font-medium justify-center leading-[0] min-w-full overflow-ellipsis overflow-hidden relative shrink-0 text-[16px] text-nowrap text-zinc-500 w-[min-content]">
        <p className="[white-space-collapse:collapse] leading-[24px] overflow-ellipsis overflow-hidden">Personal Information</p>
      </div>
    </div>
  );
}

function LeftRailItem3() {
  return (
    <div className="relative shrink-0 w-full" data-name="left rail item">
      <div className="size-full">
        <div className="box-border content-stretch flex gap-[12px] items-start p-[16px] relative w-full">
          <CheckContainer3 />
          <TextContainer3 />
        </div>
      </div>
    </div>
  );
}

function Check4() {
  return (
    <div className="bg-[#181e4b] box-border content-stretch flex gap-[10px] items-center p-[2px] relative rounded-[999px] shrink-0" data-name="check">
      <div aria-hidden="true" className="absolute border border-solid border-zinc-200 inset-0 pointer-events-none rounded-[999px]" />
    </div>
  );
}

function CheckContainer4() {
  return (
    <div className="box-border content-stretch flex gap-[10px] items-center pb-0 pt-[3px] px-0 relative shrink-0" data-name="check container">
      <Check4 />
    </div>
  );
}

function TextContainer4() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start justify-center min-h-px min-w-px relative shrink-0" data-name="text container">
      <div className="flex flex-col font-['Outfit:Medium',sans-serif] font-medium justify-center leading-[0] min-w-full overflow-ellipsis overflow-hidden relative shrink-0 text-[16px] text-nowrap text-zinc-500 w-[min-content]">
        <p className="[white-space-collapse:collapse] leading-[24px] overflow-ellipsis overflow-hidden">Review</p>
      </div>
    </div>
  );
}

function LeftRailItem4() {
  return (
    <div className="bg-gray-200 relative shrink-0 w-full" data-name="left rail item">
      <div className="size-full">
        <div className="box-border content-stretch flex gap-[12px] items-start p-[16px] relative w-full">
          <CheckContainer4 />
          <TextContainer4 />
        </div>
      </div>
    </div>
  );
}

function Top() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0 w-[300px]" data-name="Top">
      <Frame />
      <LeftRailItem />
      <LeftRailItem1 />
      <LeftRailItem2 />
      <LeftRailItem3 />
      <LeftRailItem4 />
    </div>
  );
}

function PreviewListing() {
  return <div className="box-border content-stretch flex flex-col items-center justify-center p-[24px] shrink-0 w-[300px]" data-name="Preview Listing" />;
}

function MainContent() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-full" data-name="Main Content">
      <p className="font-['Volkhov:Bold',sans-serif] leading-[45px] not-italic relative shrink-0 text-[36px] text-gray-950 text-nowrap whitespace-pre">Review</p>
    </div>
  );
}

function BookingHeadersDefault() {
  return (
    <div className="relative shrink-0 w-full" data-name="Booking Headers/Default">
      <div className="flex flex-col items-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col gap-[24px] items-center pl-0 pr-[96px] py-0 relative w-full">
          <MainContent />
          <p className="font-['Inter:Regular',sans-serif] font-normal h-[78px] leading-[normal] not-italic relative shrink-0 text-[#5e6282] text-[18px] w-full">Plan confidently with transparent pricing and safety assurance.</p>
        </div>
      </div>
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex flex-col h-[105px] items-start relative shrink-0 w-full">
      <BookingHeadersDefault />
    </div>
  );
}

function SpanPageNumber() {
  return (
    <div className="absolute bg-white left-[15px] rounded-[15px] size-[30px] top-[19.84px]" data-name="span.page-number">
      <div className="absolute flex flex-col font-['Helvetica:Bold',sans-serif] h-[30px] justify-center leading-[0] left-[calc(50%+0.105px)] not-italic text-[#97756e] text-[16px] text-center top-[14.5px] translate-x-[-50%] translate-y-[-50%] w-[9.11px]">
        <p className="leading-[30px]">1</p>
      </div>
    </div>
  );
}

function ListItem() {
  return (
    <div className="bg-[#97756e] h-[72px] relative rounded-[10px] shrink-0 w-[234px]" data-name="List → Item">
      <div aria-hidden="true" className="absolute border-2 border-[#97756e] border-solid inset-[-2px] pointer-events-none rounded-[12px]" />
      <SpanPageNumber />
      <div className="absolute flex flex-col font-['ABeeZee:Regular',sans-serif] h-[32px] justify-center leading-[0] left-[calc(50%+29px)] not-italic text-[16px] text-center text-white top-[36px] translate-x-[-50%] translate-y-[-50%] w-[182px]">
        <p className="leading-[32px]">Booking Information</p>
      </div>
    </div>
  );
}

function SpanPageNumber1() {
  return (
    <div className="absolute bg-neutral-100 left-[15px] rounded-[15px] size-[30px] top-[20px]" data-name="span.page-number">
      <div className="absolute flex flex-col font-['Helvetica:Bold',sans-serif] h-[30px] justify-center leading-[0] left-[calc(50%+0.105px)] not-italic text-[#4a4e56] text-[16px] text-center top-[14.5px] translate-x-[-50%] translate-y-[-50%] w-[9.11px]">
        <p className="leading-[30px]">2</p>
      </div>
    </div>
  );
}

function ListItem1() {
  return (
    <div className="h-[72px] relative rounded-[10px] shrink-0 w-[234px]" data-name="List → Item">
      <div aria-hidden="true" className="absolute border-2 border-[#97756e] border-solid inset-[-2px] pointer-events-none rounded-[12px]" />
      <SpanPageNumber1 />
      <div className="absolute flex flex-col font-['ABeeZee:Regular',sans-serif] h-[32px] justify-center leading-[0] left-[calc(50%+16.5px)] not-italic text-[#4a4e56] text-[16px] text-center top-[36px] translate-x-[-50%] translate-y-[-50%] w-[163px]">
        <p className="leading-[32px]">Guest Information</p>
      </div>
    </div>
  );
}

function SpanPageNumber2() {
  return (
    <div className="absolute bg-neutral-100 left-[15px] rounded-[15px] size-[30px] top-[20px]" data-name="span.page-number">
      <div className="absolute flex flex-col font-['Helvetica:Bold',sans-serif] h-[30px] justify-center leading-[0] left-[calc(50%+0.105px)] not-italic text-[#4a4e56] text-[16px] text-center top-[14.5px] translate-x-[-50%] translate-y-[-50%] w-[9.11px]">
        <p className="leading-[30px]">3</p>
      </div>
    </div>
  );
}

function ListItem2() {
  return (
    <div className="h-[72px] relative rounded-[10px] shrink-0 w-[234px]" data-name="List → Item">
      <div aria-hidden="true" className="absolute border-2 border-[#97756e] border-solid inset-[-2px] pointer-events-none rounded-[12px]" />
      <SpanPageNumber2 />
      <div className="absolute flex flex-col font-['ABeeZee:Regular',sans-serif] h-[32px] justify-center leading-[0] left-[calc(50%+26px)] not-italic text-[#4a4e56] text-[16px] text-center top-[36px] translate-x-[-50%] translate-y-[-50%] w-[182px]">
        <p className="leading-[32px]">Booking Information</p>
      </div>
    </div>
  );
}

function Frame2() {
  return (
    <div className="absolute content-stretch flex gap-[11px] items-center left-[30px] top-[65px]">
      <ListItem />
      <ListItem1 />
      <ListItem2 />
    </div>
  );
}

function Image() {
  return (
    <div className="absolute right-[12px] size-[18px] top-1/2 translate-y-[-50%]" data-name="image">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="image">
          <path d={svgPaths.p3bd122f0} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function ImageFill() {
  return (
    <div className="absolute left-0 overflow-clip size-px top-0" data-name="image fill">
      <Image />
    </div>
  );
}

function Div() {
  return (
    <div className="absolute h-[26px] left-0 overflow-clip right-0 top-[calc(50%+12.5px)] translate-y-[-50%]" data-name="div">
      <div className="absolute flex flex-col font-['Helvetica:Regular',sans-serif] h-[26px] justify-center leading-[0] left-0 not-italic text-[#4a4e56] text-[16px] top-[12.5px] translate-y-[-50%] w-[99.073px]">
        <p className="leading-[26px]">Country Code</p>
      </div>
    </div>
  );
}

function Options() {
  return (
    <div className="absolute left-[15px] rounded-[5px] size-px top-0" data-name="Options">
      <ImageFill />
      <Div />
    </div>
  );
}

function Textbox() {
  return (
    <div className="absolute h-[45px] left-[19.39px] overflow-clip right-[19.06px] top-px" data-name="Textbox">
      <div className="absolute flex flex-col font-['Helvetica:Regular',sans-serif] h-[45px] justify-center leading-[0] left-0 not-italic text-[#444444] text-[15px] top-[22.5px] translate-y-[-50%] w-[92.903px]">
        <p className="leading-[45px]">Country Code</p>
      </div>
    </div>
  );
}

function Image1() {
  return (
    <div className="absolute right-0 size-[20px] top-1/2 translate-y-[-50%]" data-name="image">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="image">
          <path d={svgPaths.p274aa172} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function ImageFill1() {
  return (
    <div className="absolute left-0 overflow-clip size-[20px] top-0" data-name="image fill">
      <Image1 />
    </div>
  );
}

function Before() {
  return (
    <div className="absolute right-[1.67px] size-[20px] top-[13px]" data-name="::before">
      <ImageFill1 />
    </div>
  );
}

function ComboboxMenu() {
  return (
    <div className="absolute bg-white h-[45px] left-0 right-[15px] rounded-[8px] top-[-0.08px]" data-name="Combobox menu">
      <div aria-hidden="true" className="absolute border border-[#e4e7ee] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Textbox />
      <Before />
    </div>
  );
}

function Form() {
  return (
    <div className="[grid-area:1_/_2] h-[50px] relative shrink-0" data-name="Form">
      <Options />
      <ComboboxMenu />
    </div>
  );
}

function DivPlaceholder() {
  return (
    <div className="absolute h-[17px] left-[15px] overflow-clip right-[15.34px] top-[14px]" data-name="div#placeholder">
      <div className="absolute capitalize flex flex-col font-['Rubik:Regular',sans-serif] font-normal h-[17px] justify-center leading-[0] left-0 text-[#6c757d] text-[14px] top-[8.5px] translate-y-[-50%] w-[108.027px]">
        <p className="leading-[normal]">Contact Number</p>
      </div>
    </div>
  );
}

function FormInput() {
  return (
    <div className="[grid-area:1_/_3] bg-white h-[43px] relative rounded-[5px] shrink-0" data-name="Form → Input">
      <div aria-hidden="true" className="absolute border border-[#e4e7ee] border-solid inset-[-1px] pointer-events-none rounded-[6px]" />
      <DivPlaceholder />
    </div>
  );
}

function DivPlaceholder1() {
  return (
    <div className="absolute h-[17px] left-[15px] overflow-clip right-[15px] top-[14px]" data-name="div#placeholder">
      <div className="absolute capitalize flex flex-col font-['Rubik:Regular',sans-serif] font-normal h-[17px] justify-center leading-[0] left-0 text-[#6c757d] text-[14px] top-[8.5px] translate-y-[-50%] w-[92.122px]">
        <p className="leading-[normal]">Email Address</p>
      </div>
    </div>
  );
}

function FormInput1() {
  return (
    <div className="[grid-area:2_/_1] bg-white h-[43px] relative rounded-[5px] shrink-0" data-name="Form → Input">
      <div aria-hidden="true" className="absolute border border-[#e4e7ee] border-solid inset-[-1px] pointer-events-none rounded-[6px]" />
      <DivPlaceholder1 />
    </div>
  );
}

function DivPlaceholder2() {
  return (
    <div className="absolute h-[17px] left-[15px] overflow-clip right-[14.67px] top-[14px]" data-name="div#placeholder">
      <div className="absolute capitalize flex flex-col font-['Rubik:Regular',sans-serif] font-normal h-[17px] justify-center leading-[0] left-0 text-[#6c757d] text-[14px] top-[8.5px] translate-y-[-50%] w-[70.969px]">
        <p className="leading-[normal]">First Name</p>
      </div>
    </div>
  );
}

function FormInput2() {
  return (
    <div className="[grid-area:2_/_2] bg-white h-[43px] relative rounded-[5px] shrink-0" data-name="Form → Input">
      <div aria-hidden="true" className="absolute border border-[#e4e7ee] border-solid inset-[-1px] pointer-events-none rounded-[6px]" />
      <DivPlaceholder2 />
    </div>
  );
}

function DivPlaceholder3() {
  return (
    <div className="absolute h-[17px] left-[15px] overflow-clip right-[15px] top-[14px]" data-name="div#placeholder">
      <div className="absolute capitalize flex flex-col font-['Rubik:Regular',sans-serif] font-normal h-[17px] justify-center leading-[0] left-0 text-[#6c757d] text-[14px] top-[8.5px] translate-y-[-50%] w-[69.687px]">
        <p className="leading-[normal]">Last Name</p>
      </div>
    </div>
  );
}

function FormInput3() {
  return (
    <div className="[grid-area:2_/_3] bg-white h-[43px] relative rounded-[5px] shrink-0" data-name="Form → Input">
      <div aria-hidden="true" className="absolute border border-[#e4e7ee] border-solid inset-[-1px] pointer-events-none rounded-[6px]" />
      <DivPlaceholder3 />
    </div>
  );
}

function DivPlaceholder4() {
  return (
    <div className="absolute h-[17px] left-[16px] overflow-clip right-[16px] top-[14.5px]" data-name="div#placeholder">
      <div className="absolute capitalize flex flex-col font-['Rubik:Regular',sans-serif] font-normal h-[17px] justify-center leading-[0] left-0 text-[#4a4e56] text-[14px] top-[8.5px] translate-y-[-50%] w-[84.44px]">
        <p className="leading-[normal]">Date of Birth</p>
      </div>
    </div>
  );
}

function FormInput4() {
  return (
    <div className="[grid-area:3_/_1] bg-white h-[45px] relative rounded-[5px] shrink-0" data-name="Form → Input">
      <div aria-hidden="true" className="absolute border border-[#e4e7ee] border-solid inset-0 pointer-events-none rounded-[5px]" />
      <DivPlaceholder4 />
    </div>
  );
}

function Image2() {
  return (
    <div className="absolute right-[12px] size-[18px] top-1/2 translate-y-[-50%]" data-name="image">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="image">
          <path d={svgPaths.p3bd122f0} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function ImageFill2() {
  return (
    <div className="absolute left-0 overflow-clip size-px top-0" data-name="image fill">
      <Image2 />
    </div>
  );
}

function Div1() {
  return (
    <div className="absolute h-[26px] left-0 overflow-clip right-0 top-[calc(50%+12.5px)] translate-y-[-50%]" data-name="div">
      <div className="absolute flex flex-col font-['Helvetica:Regular',sans-serif] h-[26px] justify-center leading-[0] left-0 not-italic text-[#4a4e56] text-[16px] top-[12.5px] translate-y-[-50%] w-[105.302px]">
        <p className="leading-[26px]">Select Country</p>
      </div>
    </div>
  );
}

function Options1() {
  return (
    <div className="absolute left-[15px] rounded-[5px] size-px top-0" data-name="Options">
      <ImageFill2 />
      <Div1 />
    </div>
  );
}

function Textbox1() {
  return (
    <div className="absolute h-[45px] left-[19.39px] overflow-clip right-[19.39px] top-px" data-name="Textbox">
      <div className="absolute flex flex-col font-['Helvetica:Regular',sans-serif] h-[45px] justify-center leading-[0] left-0 not-italic text-[#444444] text-[15px] top-[22.5px] translate-y-[-50%] w-[98.742px]">
        <p className="leading-[45px]">Select Country</p>
      </div>
    </div>
  );
}

function Image3() {
  return (
    <div className="absolute right-0 size-[20px] top-1/2 translate-y-[-50%]" data-name="image">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="image">
          <path d={svgPaths.p274aa172} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function ImageFill3() {
  return (
    <div className="absolute left-0 overflow-clip size-[20px] top-0" data-name="image fill">
      <Image3 />
    </div>
  );
}

function Before1() {
  return (
    <div className="absolute right-[2px] size-[20px] top-[13px]" data-name="::before">
      <ImageFill3 />
    </div>
  );
}

function ComboboxMenu1() {
  return (
    <div className="absolute bg-white h-[45px] left-0 right-[4px] rounded-[8px] top-[0.5px]" data-name="Combobox menu">
      <div aria-hidden="true" className="absolute border border-[#e4e7ee] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Textbox1 />
      <Before1 />
    </div>
  );
}

function Form1() {
  return (
    <div className="[grid-area:3_/_2] h-[50px] relative shrink-0" data-name="Form">
      <Options1 />
      <ComboboxMenu1 />
    </div>
  );
}

function Frame4() {
  return (
    <div className="absolute gap-[32px] grid grid-cols-[repeat(3,_minmax(0px,_1fr))] grid-rows-[repeat(3,_minmax(0px,_1fr))] h-[148.5px] left-[30px] top-[152px] w-[724px]">
      <div className="[grid-area:1_/_1] flex flex-col font-['Rubik:Regular',sans-serif] font-normal h-[24px] justify-center leading-[0] relative shrink-0 text-[#4a4e56] text-[16px]">
        <p className="leading-[24px]">Contact Details</p>
      </div>
      <Form />
      <FormInput />
      <FormInput1 />
      <FormInput2 />
      <FormInput3 />
      <FormInput4 />
      <Form1 />
      <div className="[grid-area:3_/_3] flex flex-col font-['ABeeZee:Regular',sans-serif] h-[16.1px] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-black">
        <p className="leading-[16.1px]">+ Add Passenger</p>
      </div>
    </div>
  );
}

function Frame3() {
  return <div className="absolute h-[60px] left-[410px] top-[490.95px] w-[335px]" />;
}

function BookingTypeBookingForm() {
  return (
    <div className="h-[388px] relative shrink-0 w-full" data-name="booking type/booking form">
      <Frame2 />
      <Frame4 />
      <Frame3 />
    </div>
  );
}

function ProgressItem() {
  return <div className="basis-0 bg-[#181e4b] grow h-[4px] min-h-px min-w-px shrink-0" data-name="Progress Item" />;
}

function ProgressBarVariant() {
  return (
    <div className="content-stretch flex gap-[4px] h-[4px] items-center relative shrink-0 w-full" data-name="Progress Bar/Variant6">
      <div className="basis-0 bg-[#181e4b] grow h-[4px] min-h-px min-w-px shrink-0" data-name="Progress Item" />
      <div className="basis-0 bg-[#181e4b] grow h-[4px] min-h-px min-w-px shrink-0" data-name="Progress Item" />
      <div className="basis-0 bg-[#181e4b] grow h-[4px] min-h-px min-w-px shrink-0" data-name="Progress Item" />
      <div className="basis-0 bg-[#181e4b] grow h-[4px] min-h-px min-w-px shrink-0" data-name="Progress Item" />
      <ProgressItem />
    </div>
  );
}

function TextWrapper() {
  return (
    <div className="h-[20px] relative shrink-0" data-name="text-wrapper">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[8px] h-[20px] items-center justify-center px-[4px] py-0 relative">
        <p className="font-['Outfit:Medium',sans-serif] font-medium leading-[18px] relative shrink-0 text-[#d9d9d9] text-[16px] text-center text-nowrap whitespace-pre">Back</p>
      </div>
    </div>
  );
}

function ButtonBorderless() {
  return (
    <div className="bg-[#181e4b] relative rounded-[6px] shrink-0" data-name="button-borderless">
      <div className="content-stretch flex items-center justify-center overflow-clip relative rounded-[inherit]">
        <div className="relative rounded-[6px] shrink-0" data-name="button-plain">
          <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[4px] items-center justify-center overflow-clip px-[16px] py-[12px] relative rounded-[inherit]">
            <TextWrapper />
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#dde0e4] border-solid inset-[-1px] pointer-events-none rounded-[7px]" />
    </div>
  );
}

function TextWrapper1() {
  return (
    <div className="h-[20px] relative shrink-0" data-name="text-wrapper">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[8px] h-[20px] items-center justify-center px-[4px] py-0 relative">
        <p className="font-['Outfit:Medium',sans-serif] font-medium leading-[18px] relative shrink-0 text-[16px] text-black text-center text-nowrap whitespace-pre">Submit</p>
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0">
      <div className="bg-[#d9d9d9] relative rounded-[6px] shrink-0" data-name="button-filled">
        <div className="content-stretch flex items-center justify-center overflow-clip relative rounded-[inherit]">
          <div className="relative rounded-[6px] shrink-0" data-name="button-plain">
            <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[4px] items-center justify-center overflow-clip px-[16px] py-[12px] relative rounded-[inherit]">
              <TextWrapper1 />
            </div>
          </div>
        </div>
        <div aria-hidden="true" className="absolute border border-[#d9d9d9] border-solid inset-[-1px] pointer-events-none rounded-[7px]" />
      </div>
    </div>
  );
}

function Buttons() {
  return (
    <div className="h-[76px] relative shrink-0 w-full" data-name="Buttons">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex h-[76px] items-center justify-between p-[16px] relative w-full">
          <ButtonBorderless />
          <Frame1 />
        </div>
      </div>
    </div>
  );
}

export default function BookingScreenReview() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[48px] items-start relative size-full" data-name="Booking screen (review)">
      <Header property1="Book" className="relative shrink-0 w-full" />
      <div className="content-stretch flex gap-[130px] items-end relative shrink-0 w-[1342px]" data-name="Content type">
        <div className="flex flex-row items-end self-stretch">
          <div className="h-full relative shrink-0" data-name="Left Rail Naivgation">
            <div className="content-stretch flex flex-col h-full items-start overflow-clip relative rounded-[inherit]">
              <Top />
              <PreviewListing />
            </div>
            <div aria-hidden="true" className="absolute border-[0px_1px_0px_0px] border-solid border-zinc-200 inset-0 pointer-events-none" />
          </div>
        </div>
        <div className="basis-0 content-stretch flex flex-col gap-[4px] grow items-start min-h-px min-w-px relative shrink-0" data-name="booking content type">
          <Frame5 />
          <BookingTypeBookingForm />
        </div>
      </div>
      <div className="content-stretch flex flex-col gap-[34px] items-start relative shrink-0 w-full" data-name="step bar">
        <ProgressBarVariant />
        <Buttons />
      </div>
    </div>
  );
}