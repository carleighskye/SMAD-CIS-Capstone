import svgPaths from "./svg-4t9algbqu9";
import imgPhoto11 from "figma:asset/de5863810f356ad74c5a8fcf54e053bd0ad1ffad.png";
import UnifiedHeader from "../components/UnifiedHeader";
import NewAdventureSection from "../components/NewAdventureSection";

function Group() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-px place-items-start relative">
      <div className="[grid-area:1_/_1] flex h-[51.452px] items-center justify-center ml-0 mt-0 relative w-[60.778px]">
        <div className="flex-none rotate-[180deg] scale-y-[-100%]">
          <div className="bg-[#97756e] h-[51.452px] rounded-[10px] w-[60.778px]" />
        </div>
      </div>
    </div>
  );
}

function Group4() {
  return (
    <div className="flex items-start gap-[20px] relative w-full">
      <div className="shrink-0">
        <Group />
      </div>
      <div className="flex flex-col gap-[8px] flex-1">
        <div className="flex flex-col font-['Volkhov:Bold',sans-serif] font-bold text-[#1a202c] text-[22px]">
          <p className="leading-[1.5]">Select Your Tour</p>
        </div>
        <div className="flex flex-col font-['Volkhov:Regular',sans-serif] font-normal text-[#1a202c] text-[18px]">
          <p className="leading-[1.75]">Choose from our featured itineraries or request a custom one.</p>
        </div>
      </div>
    </div>
  );
}

function Group1() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[0.001px] mt-px place-items-start relative">
      <div className="[grid-area:1_/_1] flex h-[51.452px] items-center justify-center ml-0 mt-0 relative w-[60.778px]">
        <div className="flex-none rotate-[180deg] scale-y-[-100%]">
          <div className="bg-[#97756e] h-[51.452px] rounded-[10px] w-[60.778px]" />
        </div>
      </div>
    </div>
  );
}

function Group7() {
  return (
    <div className="flex items-start gap-[20px] relative w-full">
      <div className="shrink-0">
        <Group1 />
      </div>
      <div className="flex flex-col gap-[8px] flex-1">
        <div className="flex flex-col font-['Volkhov:Bold',sans-serif] font-bold text-[#1a202c] text-[22px]">
          <p className="leading-[1.5]">Travel Details</p>
        </div>
        <div className="flex flex-col font-['Volkhov:Regular',sans-serif] font-normal text-[#1a202c] text-[18px]">
          <p className="leading-[1.75]">Select the amount of travelers that will be attending.</p>
        </div>
      </div>
    </div>
  );
}

function Group2() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-[6.917px] place-items-start relative">
      <div className="[grid-area:1_/_1] flex h-[51.452px] items-center justify-center ml-0 mt-0 relative w-[60.778px]">
        <div className="flex-none rotate-[180deg] scale-y-[-100%]">
          <div className="bg-[#97756e] h-[51.452px] rounded-[10px] w-[60.778px]" />
        </div>
      </div>
    </div>
  );
}

function Group5() {
  return (
    <div className="flex items-start gap-[20px] relative w-full">
      <div className="shrink-0">
        <Group2 />
      </div>
      <div className="flex flex-col gap-[8px] flex-1">
        <div className="flex flex-col font-['Volkhov:Bold',sans-serif] font-bold text-[#1a202c] text-[22px]">
          <p className="leading-[1.5]">Submit an Inquiry or Message a Guide</p>
        </div>
        <div className="flex flex-col font-['Volkhov:Regular',sans-serif] font-normal text-[#1a202c] text-[18px]">
          <p className="leading-[1.75]">Have questions before booking? Complete the short form below to connect directly with one of our local guides for personalized recommendations.</p>
        </div>
      </div>
    </div>
  );
}

function Group3() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[0.001px] mt-px place-items-start relative">
      <div className="[grid-area:1_/_1] flex h-[51.452px] items-center justify-center ml-0 mt-0 relative w-[60.778px]">
        <div className="flex-none rotate-[180deg] scale-y-[-100%]">
          <div className="bg-[#97756e] h-[51.452px] rounded-[10px] w-[60.778px]" />
        </div>
      </div>
    </div>
  );
}

function Group6() {
  return (
    <div className="flex items-start gap-[20px] relative w-full">
      <div className="shrink-0">
        <Group3 />
      </div>
      <div className="flex flex-col gap-[8px] flex-1">
        <div className="flex flex-col font-['Volkhov:Bold',sans-serif] font-bold text-[#1a202c] text-[22px]">
          <p className="leading-[1.5]">Secure Your Booking</p>
        </div>
        <div className="flex flex-col font-['Volkhov:Regular',sans-serif] font-normal text-[#1a202c] text-[18px]">
          <p className="leading-[1.75]">Confirm safely online with protected information and payment.</p>
        </div>
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-col gap-[50px] items-start leading-[0] relative w-full">
      <Group4 />
      <Group7 />
      <Group5 />
      <Group6 />
    </div>
  );
}

function BookSteps() {
  return (
    <div className="content-stretch flex items-start justify-start relative shrink-0 w-full" data-name="Book steps">
      <Frame1 />
    </div>
  );
}

function TitleWrapper() {
  return (
    <div className="relative shrink-0" data-name="title-wrapper">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[8px] items-center justify-center px-0 py-[2px] relative">
        <p className="font-['Volkhov:Bold',sans-serif] font-bold leading-[28px] relative shrink-0 text-[20px] text-nowrap text-white whitespace-pre">Get Started</p>
      </div>
    </div>
  );
}

function ButtonInterior() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px relative rounded-[6px] shrink-0" data-name="button-interior">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[6px] items-center justify-center px-[12px] py-[6px] relative size-full">
          <TitleWrapper />
        </div>
      </div>
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex flex-col gap-[44px] items-center relative shrink-0 w-full max-w-[600px]">
      <BookSteps />
      <div className="bg-[#97756e] content-stretch flex h-[70px] items-start relative rounded-[10px] shrink-0 w-full" data-name="segmented-control">
        <div className="basis-0 bg-[rgba(0,0,0,0.08)] grow h-full min-h-px min-w-px relative rounded-[10px] shrink-0" data-name="button-group-state">
          <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.02)] border-solid inset-0 pointer-events-none rounded-[10px]" />
          <div className="flex flex-row items-center size-full">
            <div className="box-border content-stretch flex gap-[2px] items-center p-[3px] relative size-full">
              <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0" data-name="button-option">
                <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center justify-center relative size-full">
                  <div className="basis-0 grow min-h-px min-w-px relative rounded-[8px] shrink-0" data-name="segmented-control-primitive">
                    <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center justify-center relative w-full">
                      <div className="basis-0 flex flex-row grow items-center self-stretch shrink-0">
                        <ButtonInterior />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex flex-col lg:flex-row gap-[40px] lg:gap-[60px] xl:gap-[87px] items-center justify-center relative shrink-0 w-full">
      <div className="flex flex-row items-center shrink-0">
        <div className="w-[400px] h-[520px] lg:w-[450px] lg:h-[586px] xl:w-[531px] xl:h-[693px] relative" data-name="Photo1 1">
          <img alt="" className="absolute inset-0 max-w-none object-center object-cover pointer-events-none size-full rounded-lg" src={imgPhoto11} />
        </div>
      </div>
      <Frame4 />
    </div>
  );
}

function BookingContentScreen() {
  return (
    <div className="box-border content-stretch flex flex-col items-center pb-[120px] pt-[20px] px-[40px] md:px-[80px] lg:px-[120px] relative shrink-0 w-full max-w-[1440px] mx-auto" data-name="Booking content screen">
      <div className="content-stretch flex flex-col gap-[24px] items-center relative shrink-0 w-full mb-[60px]" data-name="Heading">
        <div className="flex flex-col font-['Volkhov:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1a202c] text-[48px] text-center w-full">
          <p className="leading-[1.5]">Book Your Tanzanian Adventure In 4 Easy Steps</p>
        </div>
      </div>
      <Frame5 />
    </div>
  );
}

function Items() {
  return (
    <div className="absolute content-stretch flex flex-col font-['Volkhov:Regular',sans-serif] font-normal gap-[24px] items-end justify-center leading-[0] not-italic right-[calc(25%+119px)] text-[16px] top-[48px]" data-name="Items">
      <div className="flex flex-col justify-center relative shrink-0 text-black w-full">
        <p className="leading-[1.5]">Home</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 text-[#454545] w-full">
        <p className="leading-[1.5]">Tours</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 text-[#454545] w-full">
        <p className="leading-[1.5]">Blog</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 text-[#454545] w-full">
        <p className="leading-[1.5]">Contact</p>
      </div>
    </div>
  );
}

function Items1() {
  return (
    <div className="absolute content-stretch flex flex-col font-['Volkhov:Regular',sans-serif] font-normal gap-[24px] items-end justify-center leading-[0] not-italic right-[151px] text-[16px] top-[48px]" data-name="Items">
      <div className="flex flex-col justify-center relative shrink-0 text-black w-full">
        <p className="leading-[1.5]">FAQ</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 text-[#454545] w-full">
        <p className="leading-[1.5]">Newsletter</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 text-[#454545] w-full">
        <p className="leading-[1.5]">Privacy Policy</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 text-[#454545] w-full">
        <p className="leading-[1.5]">{`Terms & Conditions`}</p>
      </div>
    </div>
  );
}

function Items2() {
  return (
    <div className="absolute content-stretch flex flex-col font-['Volkhov:Regular',sans-serif] font-normal gap-[24px] items-start justify-center leading-[0] not-italic right-1/2 top-[42px]" data-name="Items">
      <div className="flex flex-col justify-center min-w-full relative shrink-0 text-[16px] text-black w-[min-content]">
        <p className="leading-[1.5]">Contact Us</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 text-[#454545] text-[0px] text-nowrap">
        <a className="[text-decoration-skip-ink:none] [text-underline-position:from-font] block cursor-pointer decoration-solid font-['Volkhov:Regular',sans-serif] leading-[1.5] not-italic text-[16px] underline whitespace-pre" href="mailto:info@grantexpedition.com">
          info@grantexpedition.com
        </a>
      </div>
      <div className="flex flex-col justify-center min-w-full relative shrink-0 text-[#454545] text-[0px] w-[min-content]">
        <a className="[text-decoration-skip-ink:none] [text-underline-position:from-font] block cursor-pointer decoration-solid font-['Volkhov:Regular',sans-serif] leading-[1.5] not-italic text-[16px] underline" href="tel:255766437358">
          +255 766 437 358
        </a>
      </div>
      <div className="flex flex-col justify-center min-w-full relative shrink-0 text-[#454545] text-[16px] w-[min-content]">
        <p className="leading-[1.5]">Arusha, Tanzania</p>
      </div>
    </div>
  );
}

function Icon() {
  return (
    <div className="absolute left-[8px] size-[24px] top-[8px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d={svgPaths.p132b8500} fill="var(--fill-0, #828282)" id="Icon_2" />
        </g>
      </svg>
    </div>
  );
}

function ButtonsIcon() {
  return (
    <div className="relative rounded-[4px] shrink-0 size-[40px]" data-name="Buttons / Icon">
      <Icon />
    </div>
  );
}

function Icon1() {
  return (
    <div className="absolute left-[8px] size-[24px] top-[8px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d={svgPaths.p3a800a00} fill="var(--fill-0, #828282)" id="Icon_2" />
        </g>
      </svg>
    </div>
  );
}

function ButtonsIcon1() {
  return (
    <div className="relative rounded-[4px] shrink-0 size-[40px]" data-name="Buttons / Icon">
      <Icon1 />
    </div>
  );
}

function Icon2() {
  return (
    <div className="absolute left-[8px] size-[24px] top-[8px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d={svgPaths.p3b619c00} fill="var(--fill-0, #828282)" id="Icon_2" />
        </g>
      </svg>
    </div>
  );
}

function ButtonsIcon2() {
  return (
    <div className="relative rounded-[4px] shrink-0 size-[40px]" data-name="Buttons / Icon">
      <Icon2 />
    </div>
  );
}

function Icon3() {
  return (
    <div className="absolute left-[8px] size-[24px] top-[8px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d={svgPaths.p1f140b00} fill="var(--fill-0, #828282)" id="Icon_2" />
        </g>
      </svg>
    </div>
  );
}

function ButtonsIcon3() {
  return (
    <div className="relative rounded-[4px] shrink-0 size-[40px]" data-name="Buttons / Icon">
      <Icon3 />
    </div>
  );
}

function SocialIcons() {
  return (
    <div className="absolute content-stretch flex gap-[8px] items-start left-[80px] top-[176px]" data-name="Social Icons">
      <ButtonsIcon />
      <ButtonsIcon1 />
      <ButtonsIcon2 />
      <ButtonsIcon3 />
    </div>
  );
}

function Field() {
  return (
    <div className="basis-0 bg-white grow min-h-px min-w-px relative rounded-[8px] shrink-0 w-full" data-name="Field">
      <div aria-hidden="true" className="absolute border border-[#e0e0e0] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
      <div className="size-full">
        <div className="box-border content-stretch flex gap-[8px] items-start px-[16px] py-[12px] relative size-full">
          <p className="basis-0 font-['Inter:Medium',sans-serif] font-medium grow leading-[1.5] min-h-px min-w-px not-italic relative shrink-0 text-[#828282] text-[16px]">Jane</p>
        </div>
      </div>
    </div>
  );
}

function Input() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[80px] items-start relative shrink-0 w-[295px]" data-name="Input">
      <p className="font-['Volkhov:Regular',sans-serif] font-normal leading-[1.5] not-italic relative shrink-0 text-[16px] text-black w-full">First name</p>
      <Field />
    </div>
  );
}

function Field1() {
  return (
    <div className="basis-0 bg-white grow min-h-px min-w-px relative rounded-[8px] shrink-0 w-full" data-name="Field">
      <div aria-hidden="true" className="absolute border border-[#e0e0e0] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
      <div className="size-full">
        <div className="box-border content-stretch flex gap-[8px] items-start px-[16px] py-[12px] relative size-full">
          <p className="basis-0 font-['Inter:Medium',sans-serif] font-medium grow leading-[1.5] min-h-px min-w-px not-italic relative shrink-0 text-[#828282] text-[16px]">Smitherton</p>
        </div>
      </div>
    </div>
  );
}

function Input1() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[80px] items-start relative shrink-0 w-[297px]" data-name="Input">
      <p className="font-['Volkhov:Regular',sans-serif] font-normal leading-[1.5] not-italic relative shrink-0 text-[16px] text-black w-full">Last name</p>
      <Field1 />
    </div>
  );
}

function Field2() {
  return (
    <div className="basis-0 bg-white grow min-h-px min-w-px relative rounded-[8px] shrink-0 w-full" data-name="Field">
      <div aria-hidden="true" className="absolute border border-[#e0e0e0] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
      <div className="size-full">
        <div className="box-border content-stretch flex gap-[8px] items-start px-[16px] py-[12px] relative size-full">
          <p className="basis-0 font-['Inter:Medium',sans-serif] font-medium grow leading-[1.5] min-h-px min-w-px not-italic relative shrink-0 text-[#828282] text-[16px]">email@janesfakedomain.net</p>
        </div>
      </div>
    </div>
  );
}

function Input2() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[80px] items-start relative shrink-0 w-[626px]" data-name="Input">
      <p className="font-['Volkhov:Regular',sans-serif] font-normal leading-[1.5] not-italic relative shrink-0 text-[16px] text-black w-full">Email address</p>
      <Field2 />
    </div>
  );
}

function Field3() {
  return (
    <div className="basis-0 bg-white grow min-h-px min-w-px relative rounded-[8px] shrink-0 w-full" data-name="Field">
      <div aria-hidden="true" className="absolute border border-[#e0e0e0] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
      <div className="size-full">
        <div className="box-border content-stretch flex gap-[8px] items-start px-[16px] py-[12px] relative size-full">
          <p className="basis-0 font-['Inter:Medium',sans-serif] font-medium grow leading-[1.5] min-h-px min-w-px not-italic relative shrink-0 text-[#828282] text-[16px]">Enter your question or message</p>
        </div>
      </div>
    </div>
  );
}

function Input3() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[194px] items-start relative shrink-0 w-[626px]" data-name="Input">
      <p className="font-['Volkhov:Regular',sans-serif] font-normal leading-[1.5] not-italic relative shrink-0 text-[16px] text-black w-full">Your message</p>
      <Field3 />
    </div>
  );
}

function Button() {
  return (
    <div className="basis-0 bg-black grow min-h-px min-w-px relative rounded-[8px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] shrink-0" data-name="Button">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[8px] items-center justify-center px-[32px] py-[16px] relative w-full">
          <div className="flex flex-col font-['Volkhov:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[20px] text-nowrap text-white">
            <p className="leading-[1.5] whitespace-pre">Submit</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Form() {
  return (
    <div className="absolute content-start flex flex-wrap gap-[32px] items-start left-[56.53%] right-0 top-[2327px]" data-name="Form">
      <Input />
      <Input1 />
      <Input2 />
      <Input3 />
      <Button />
    </div>
  );
}

export default function BookingScreen() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[82px] items-center relative size-full" data-name="Booking screen">
      <UnifiedHeader />
      <NewAdventureSection />
      <BookingContentScreen />
      <div className="bg-gray-200 h-[264px] overflow-clip relative shrink-0 w-full" data-name="footer">
        <Items />
        <Items1 />
        <Items2 />
        <div className="absolute flex flex-col font-['Volkhov:Bold',sans-serif] font-bold justify-center leading-[0] left-[80px] not-italic text-[24px] text-black text-nowrap top-[70px] translate-y-[-50%]">
          <p className="leading-[1.5] whitespace-pre">Grant Expedition</p>
        </div>
        <SocialIcons />
        <div className="absolute h-0 left-[80px] top-px w-[1280px]" data-name="Divider">
          <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1280 1">
              <line id="Divider" stroke="var(--stroke-0, #E6E6E6)" x2="1280" y1="0.5" y2="0.5" />
            </svg>
          </div>
        </div>
        <Form />
      </div>
    </div>
  );
}