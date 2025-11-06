function Component() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[6px] grow items-center min-h-px min-w-px relative shrink-0 w-full" data-name="Component 6">
      <p className="font-['Volkhov:Regular',sans-serif] h-[78px] leading-[normal] not-italic relative shrink-0 text-[18px] text-center text-white w-[243px]">Plan confidently with transparent pricing and safety assurance.</p>
    </div>
  );
}

function CustomerQuote() {
  return (
    <div className="basis-0 bg-gradient-to-b from-[#97756e] from-[39.904%] grow h-full min-h-px min-w-px relative rounded-[12px] shrink-0 to-[#312624]" data-name="Customer Quote">
      <div aria-hidden="true" className="absolute border border-[#97756e] border-solid inset-[-0.5px] pointer-events-none rounded-[12.5px]" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[9px] items-start p-[32px] relative size-full">
          <p className="font-['Volkhov:Bold',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[24px] text-center text-white tracking-[-0.48px] w-full">Tailored Itineraries</p>
          <Component />
        </div>
      </div>
    </div>
  );
}

function Component1() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[6px] grow items-center min-h-px min-w-px relative shrink-0 w-full" data-name="Component 6">
      <p className="font-['Volkhov:Regular',sans-serif] h-[78px] leading-[normal] not-italic relative shrink-0 text-[18px] text-center text-white w-[243px]">Plan confidently with transparent pricing and safety assurance.</p>
    </div>
  );
}

function CustomerQuote1() {
  return (
    <div className="basis-0 bg-gradient-to-b from-[#97756e] from-[39.904%] grow h-full min-h-px min-w-px relative rounded-[12px] shrink-0 to-[#312624]" data-name="Customer Quote">
      <div aria-hidden="true" className="absolute border border-[#97756e] border-solid inset-[-0.5px] pointer-events-none rounded-[12.5px]" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[9px] items-start p-[32px] relative size-full">
          <p className="font-['Volkhov:Bold',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[24px] text-center text-white tracking-[-0.48px] w-full">Sustainable Travel</p>
          <Component1 />
        </div>
      </div>
    </div>
  );
}

function Component2() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-center relative shrink-0 w-full" data-name="Component 6">
      <p className="font-['Volkhov:Regular',sans-serif] h-[78px] leading-[normal] not-italic relative shrink-0 text-[18px] text-center text-white w-[243px]">Plan confidently with transparent pricing and safety assurance.</p>
    </div>
  );
}

function CustomerQuote2() {
  return (
    <div className="basis-0 bg-gradient-to-b from-[#97756e] from-[39.904%] grow h-full min-h-px min-w-px relative rounded-[12px] shrink-0 to-[#312624]" data-name="Customer Quote">
      <div aria-hidden="true" className="absolute border border-[#e6e6e6] border-solid inset-[-0.5px] pointer-events-none rounded-[12.5px]" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[9px] items-start p-[32px] relative size-full">
          <p className="font-['Volkhov:Bold',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[24px] text-center text-white tracking-[-0.48px] w-full">Secure Online Booking</p>
          <Component2 />
        </div>
      </div>
    </div>
  );
}

export default function AboutTopContent() {
  return (
    <div className="bg-white relative rounded-[12px] size-full" data-name="About top content">
      <div className="flex flex-col items-center size-full">
        <div className="box-border content-stretch flex flex-col gap-[77px] items-center pb-[120px] pt-[20px] px-[120px] relative size-full">
          <div className="content-stretch flex flex-col gap-[20px] items-center leading-[0] relative shrink-0 text-[#1a202c] text-center w-full" data-name="Heading">
            <div className="flex flex-col font-['Volkhov:Regular',sans-serif] justify-center min-w-full not-italic relative shrink-0 text-[48px] tracking-[-0.96px] w-[min-content]">
              <p className="leading-[1.5]">We Provide You Personalized Tours</p>
            </div>
            <div className="flex flex-col font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal justify-center leading-[1.5] relative shrink-0 text-[18px] w-[529.478px]">
              <p className="mb-0">{` Grant Expedition is built on trust, professionalism, and a personal touch. Every trip is designed as if we’re guiding family.`}</p>
              <p>&nbsp;</p>
            </div>
          </div>
          <div className="basis-0 content-stretch flex gap-[32px] grow items-start min-h-px min-w-px relative shrink-0 w-[1204px]" data-name="Component 8">
            <CustomerQuote />
            <CustomerQuote1 />
            <CustomerQuote2 />
          </div>
        </div>
      </div>
    </div>
  );
}