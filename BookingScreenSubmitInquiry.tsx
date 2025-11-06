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
    <div className="bg-[#181e4b] box-border content-stretch flex gap-[10px] items-center p-[2px] relative rounded-[999px] shrink-0" data-name="check">
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
    <div className="bg-gray-200 relative shrink-0 w-full" data-name="left rail item">
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
    <div className="bg-white box-border content-stretch flex gap-[10px] items-center p-[2px] relative rounded-[999px] shrink-0" data-name="check">
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
    <div className="relative shrink-0 w-full" data-name="left rail item">
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
      <p className="font-['Volkhov:Bold',sans-serif] leading-[45px] not-italic relative shrink-0 text-[36px] text-gray-950 text-nowrap whitespace-pre">Submit Message/Inquiry</p>
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

function Frame2() {
  return (
    <div className="content-stretch flex flex-col gap-[31px] h-[125px] items-start relative shrink-0 w-full">
      <BookingHeadersDefault />
    </div>
  );
}

function Name() {
  return (
    <div className="absolute bottom-[86.15%] contents left-0 right-0 top-0" data-name="Name">
      <div className="absolute bg-white bottom-[86.15%] left-0 right-0 rounded-[8px] top-0" data-name="text-box-bg">
        <div aria-hidden="true" className="absolute border border-[#d8d8d8] border-solid inset-0 pointer-events-none rounded-[8px]" />
      </div>
      <p className="absolute font-['Montserrat:Regular',sans-serif] font-normal inset-[4.54%_85.11%_91.13%_4.25%] leading-[normal] text-[#494949] text-[16px]">Name</p>
    </div>
  );
}

function Website() {
  return (
    <div className="absolute bottom-[51.95%] contents left-0 right-0 top-[34.2%]" data-name="Website">
      <div className="absolute bg-white bottom-[51.95%] left-0 right-0 rounded-[8px] top-[34.2%]" data-name="text-box-bg">
        <div aria-hidden="true" className="absolute border border-[#d8d8d8] border-solid inset-0 pointer-events-none rounded-[8px]" />
      </div>
      <p className="absolute font-['Montserrat:Regular',sans-serif] font-normal inset-[38.74%_81.7%_56.93%_4.25%] leading-[normal] text-[#494949] text-[16px]">Website</p>
    </div>
  );
}

function Message() {
  return (
    <div className="absolute bottom-[17.1%] contents left-0 right-0 top-[51.3%]" data-name="Message">
      <div className="absolute bg-white bottom-[17.1%] left-0 right-0 rounded-[8px] top-[51.3%]" data-name="text-box-bg">
        <div aria-hidden="true" className="absolute border border-[#d8d8d8] border-solid inset-0 pointer-events-none rounded-[8px]" />
      </div>
      <p className="absolute font-['Montserrat:Regular',sans-serif] font-normal inset-[55.63%_80.64%_40.04%_4.25%] leading-[normal] text-[#494949] text-[16px]">Message</p>
    </div>
  );
}

function Email() {
  return (
    <div className="absolute bottom-[69.05%] contents left-0 right-0 top-[17.1%]" data-name="Email">
      <div className="absolute bg-white bottom-[69.05%] left-0 right-0 rounded-[8px] top-[17.1%]" data-name="text-box-bg">
        <div aria-hidden="true" className="absolute border border-[#d8d8d8] border-solid inset-0 pointer-events-none rounded-[8px]" />
      </div>
      <p className="absolute font-['Montserrat:Regular',sans-serif] font-normal inset-[21.64%_85.96%_74.03%_4.25%] leading-[normal] text-[#494949] text-[16px]">Email</p>
    </div>
  );
}

function ButtonSubmitt() {
  return (
    <div className="absolute bottom-0 contents left-0 right-0 top-[86.15%]" data-name="Button Submitt">
      <div className="absolute bg-[#97756e] bottom-0 left-0 right-0 rounded-[6px] top-[86.15%]" data-name="bg" />
      <p className="absolute font-['Montserrat:Medium',sans-serif] font-medium inset-[90.91%_43.62%_4.76%_43.62%] leading-[normal] text-[16px] text-center text-white">Submit</p>
    </div>
  );
}

function BookingTypeInfo() {
  return (
    <div className="h-[462px] relative shrink-0 w-[802px]" data-name="booking type/info">
      <Name />
      <Website />
      <Message />
      <Email />
      <ButtonSubmitt />
    </div>
  );
}

function ProgressItem() {
  return <div className="basis-0 bg-gray-200 grow h-[4px] min-h-px min-w-px shrink-0" data-name="Progress Item" />;
}

function ProgressBarVariant() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="Progress Bar/Variant6">
      <div className="basis-0 bg-[#181e4b] grow h-[4px] min-h-px min-w-px shrink-0" data-name="Progress Item" />
      <div className="basis-0 bg-[#181e4b] grow h-[4px] min-h-px min-w-px shrink-0" data-name="Progress Item" />
      <div className="basis-0 bg-[#181e4b] grow h-[4px] min-h-px min-w-px shrink-0" data-name="Progress Item" />
      <div className="basis-0 bg-gray-200 grow h-[4px] min-h-px min-w-px shrink-0" data-name="Progress Item" />
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
        <p className="font-['Outfit:Medium',sans-serif] font-medium leading-[18px] relative shrink-0 text-[16px] text-black text-center text-nowrap whitespace-pre">Skip</p>
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

export default function BookingScreenSubmitInquiry() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[48px] items-start relative size-full" data-name="Booking screen (Submit Inquiry)">
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
        <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0" data-name="booking content type">
          <Frame2 />
          <BookingTypeInfo />
        </div>
      </div>
      <div className="content-stretch flex flex-col gap-[34px] items-start relative shrink-0 w-full" data-name="step bar">
        <ProgressBarVariant />
        <Buttons />
      </div>
    </div>
  );
}