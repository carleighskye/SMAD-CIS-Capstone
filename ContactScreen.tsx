import { useNavigate } from 'react-router-dom';
import UnifiedHeader from '../components/UnifiedHeader';
import svgPaths from "./svg-vfup178smm";
import img from "figma:asset/bf8bc585f22ec4b78c4dce94735ae537b827d118.png";

/**
 * @figmaAssetKey 88318f808c3378ae66163016926436a91904ba4c
 */
function Footer({ className }: { className?: string }) {
  return (
    <div className={className} data-name="footer">
      <div className="absolute content-stretch flex flex-col font-['Inter:Medium',sans-serif] font-medium gap-[24px] items-end justify-center leading-[0] not-italic right-[calc(25%+119px)] text-[16px] top-[48px]" data-name="Items">
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
      <div className="absolute content-stretch flex flex-col font-['Inter:Medium',sans-serif] font-medium gap-[24px] items-end justify-center leading-[0] not-italic right-[151px] text-[16px] top-[48px]" data-name="Items">
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
          <p className="leading-[1.5]">Terms & Conditions</p>
        </div>
      </div>
      <div className="absolute content-stretch flex flex-col font-['Inter:Medium',sans-serif] font-medium gap-[24px] items-start justify-center leading-[0] not-italic right-1/2 top-[42px]" data-name="Items">
        <div className="flex flex-col justify-center min-w-full relative shrink-0 text-[16px] text-black w-[min-content]">
          <p className="leading-[1.5]">Contact Us</p>
        </div>
        <div className="flex flex-col justify-center relative shrink-0 text-[#454545] text-[0px] text-nowrap">
          <a className="[text-decoration-skip-ink:none] [text-underline-position:from-font] block cursor-pointer decoration-solid font-['Inter:Medium',sans-serif] leading-[1.5] not-italic text-[16px] underline whitespace-pre" href="mailto:info@grantexpedition.com">
            info@grantexpedition.com
          </a>
        </div>
        <div className="flex flex-col justify-center min-w-full relative shrink-0 text-[#454545] text-[0px] w-[min-content]">
          <a className="[text-decoration-skip-ink:none] [text-underline-position:from-font] block cursor-pointer decoration-solid font-['Inter:Medium',sans-serif] leading-[1.5] not-italic text-[16px] underline" href="tel:255766437358">
            +255 766 437 358
          </a>
        </div>
        <div className="flex flex-col justify-center min-w-full relative shrink-0 text-[#454545] text-[16px] w-[min-content]">
          <p className="leading-[1.5]">Arusha, Tanzania</p>
        </div>
      </div>
      <div className="absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] left-[80px] not-italic text-[24px] text-black text-nowrap top-[70px] translate-y-[-50%]">
        <p className="leading-[1.5] whitespace-pre">Grant Expedition</p>
      </div>
      <div className="absolute content-stretch flex gap-[8px] items-start left-[80px] top-[176px]" data-name="Social Icons">
        <div className="relative rounded-[4px] shrink-0 size-[40px]" data-name="Buttons / Icon">
          <div className="absolute left-[8px] size-[24px] top-[8px]" data-name="Icon">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
              <g id="Icon">
                <path d={svgPaths.p132b8500} fill="var(--fill-0, #828282)" id="Icon_2" />
              </g>
            </svg>
          </div>
        </div>
        <div className="relative rounded-[4px] shrink-0 size-[40px]" data-name="Buttons / Icon">
          <div className="absolute left-[8px] size-[24px] top-[8px]" data-name="Icon">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
              <g id="Icon">
                <path d={svgPaths.p3a800a00} fill="var(--fill-0, #828282)" id="Icon_2" />
              </g>
            </svg>
          </div>
        </div>
        <div className="relative rounded-[4px] shrink-0 size-[40px]" data-name="Buttons / Icon">
          <div className="absolute left-[8px] size-[24px] top-[8px]" data-name="Icon">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
              <g id="Icon">
                <path d={svgPaths.p3b619c00} fill="var(--fill-0, #828282)" id="Icon_2" />
              </g>
            </svg>
          </div>
        </div>
        <div className="relative rounded-[4px] shrink-0 size-[40px]" data-name="Buttons / Icon">
          <div className="absolute left-[8px] size-[24px] top-[8px]" data-name="Icon">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
              <g id="Icon">
                <path d={svgPaths.p1f140b00} fill="var(--fill-0, #828282)" id="Icon_2" />
              </g>
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute h-0 left-[80px] top-px w-[1280px]" data-name="Divider">
        <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1280 1">
            <line id="Divider" stroke="var(--stroke-0, #E6E6E6)" x2="1280" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <div className="absolute content-start flex flex-wrap gap-[32px] items-start left-[56.53%] right-0 top-[2327px]" data-name="Form">
        <div className="content-stretch flex flex-col gap-[8px] h-[80px] items-start relative shrink-0 w-[295px]" data-name="Input">
          <p className="font-['Inter:Medium',sans-serif] font-medium leading-[1.5] not-italic relative shrink-0 text-[16px] text-black w-full">First name</p>
          <div className="basis-0 bg-white grow min-h-px min-w-px relative rounded-[8px] shrink-0 w-full" data-name="Field">
            <div aria-hidden="true" className="absolute border border-[#e0e0e0] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
            <div className="size-full">
              <div className="box-border content-stretch flex gap-[8px] items-start px-[16px] py-[12px] relative size-full">
                <p className="basis-0 font-['Inter:Medium',sans-serif] font-medium grow leading-[1.5] min-h-px min-w-px not-italic relative shrink-0 text-[#828282] text-[16px]">Jane</p>
              </div>
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col gap-[8px] h-[80px] items-start relative shrink-0 w-[297px]" data-name="Input">
          <p className="font-['Inter:Medium',sans-serif] font-medium leading-[1.5] not-italic relative shrink-0 text-[16px] text-black w-full">Last name</p>
          <div className="basis-0 bg-white grow min-h-px min-w-px relative rounded-[8px] shrink-0 w-full" data-name="Field">
            <div aria-hidden="true" className="absolute border border-[#e0e0e0] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
            <div className="size-full">
              <div className="box-border content-stretch flex gap-[8px] items-start px-[16px] py-[12px] relative size-full">
                <p className="basis-0 font-['Inter:Medium',sans-serif] font-medium grow leading-[1.5] min-h-px min-w-px not-italic relative shrink-0 text-[#828282] text-[16px]">Smitherton</p>
              </div>
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col gap-[8px] h-[80px] items-start relative shrink-0 w-[626px]" data-name="Input">
          <p className="font-['Inter:Medium',sans-serif] font-medium leading-[1.5] not-italic relative shrink-0 text-[16px] text-black w-full">Email address</p>
          <div className="basis-0 bg-white grow min-h-px min-w-px relative rounded-[8px] shrink-0 w-full" data-name="Field">
            <div aria-hidden="true" className="absolute border border-[#e0e0e0] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
            <div className="size-full">
              <div className="box-border content-stretch flex gap-[8px] items-start px-[16px] py-[12px] relative size-full">
                <p className="basis-0 font-['Inter:Medium',sans-serif] font-medium grow leading-[1.5] min-h-px min-w-px not-italic relative shrink-0 text-[#828282] text-[16px]">email@janesfakedomain.net</p>
              </div>
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col gap-[8px] h-[194px] items-start relative shrink-0 w-[626px]" data-name="Input">
          <p className="font-['Inter:Medium',sans-serif] font-medium leading-[1.5] not-italic relative shrink-0 text-[16px] text-black w-full">Your message</p>
          <div className="basis-0 bg-white grow min-h-px min-w-px relative rounded-[8px] shrink-0 w-full" data-name="Field">
            <div aria-hidden="true" className="absolute border border-[#e0e0e0] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
            <div className="size-full">
              <div className="box-border content-stretch flex gap-[8px] items-start px-[16px] py-[12px] relative size-full">
                <p className="basis-0 font-['Inter:Medium',sans-serif] font-medium grow leading-[1.5] min-h-px min-w-px not-italic relative shrink-0 text-[#828282] text-[16px]">Enter your question or message</p>
              </div>
            </div>
          </div>
        </div>
        <div className="basis-0 bg-black grow min-h-px min-w-px relative rounded-[8px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] shrink-0" data-name="Button">
          <div className="flex flex-row items-center justify-center size-full">
            <div className="box-border content-stretch flex gap-[8px] items-center justify-center px-[32px] py-[16px] relative w-full">
              <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[20px] text-nowrap text-white">
                <p className="leading-[1.5] whitespace-pre">Submit</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame2() {
  const navigate = useNavigate();
  
  return (
    <div className="content-stretch flex gap-[62px] items-center leading-[normal] relative shrink-0 text-[26px] text-black text-nowrap whitespace-pre">
      <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal relative shrink-0 cursor-pointer hover:opacity-70 transition-opacity" style={{ fontVariationSettings: "'wdth' 100" }} onClick={() => navigate('/')}>
        Home
      </p>
      <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal relative shrink-0 cursor-pointer hover:opacity-70 transition-opacity" style={{ fontVariationSettings: "'wdth' 100" }} onClick={() => navigate('/about')}>
        About
      </p>
      <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal relative shrink-0 cursor-pointer hover:opacity-70 transition-opacity" style={{ fontVariationSettings: "'wdth' 100" }}>
        Tours
      </p>
      <p className="font-['Instrument_Sans:SemiBold',sans-serif] font-semibold relative shrink-0 cursor-pointer" style={{ fontVariationSettings: "'wdth' 100" }}>
        Contact
      </p>
    </div>
  );
}

function Frame1() {
  const navigate = useNavigate();
  
  return (
    <div className="bg-[#fee373] box-border content-stretch flex gap-[10px] items-center justify-center p-[12px] relative rounded-[5px] shrink-0 cursor-pointer hover:bg-[#fed450] transition-colors" onClick={() => navigate('/contact')}>
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

function Frame3() {
  return (
    <div className="content-stretch flex flex-col font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal gap-[19px] items-start leading-[0] relative shrink-0 text-[#1a202c] text-[0px] text-center">
      <div className="flex flex-col font-['Yuji_Syuku:Regular',sans-serif] justify-center leading-[1.5] not-italic relative shrink-0 text-[24px] w-[529.478px]">
        <p className="mb-0">Address: Usa River, Arusha, Tanzania</p>
        <p className="mb-0">Phone: +255 766 437 358</p>
        <p className="mb-0">
          <span>{`Email: `}</span>
          <a className="[text-decoration-skip-ink:none] [text-underline-position:from-font] cursor-pointer decoration-solid underline" href="mailto:info@grantexpedition.com">
            <span className="[text-decoration-skip-ink:none] [text-underline-position:from-font] decoration-solid font-['Yuji_Syuku:Regular',sans-serif] leading-[1.5] not-italic text-[24px]" href="mailto:info@grantexpedition.com">
              info@grantexpedition.com
            </span>
          </a>
        </p>
        <p>Office Hours: Mon–Sat: 8:00 AM – 6:00 PM</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 w-[529.478px]">
        <p className="font-['Yuji_Syuku:Regular',sans-serif] leading-[1.5] mb-0 not-italic text-[24px]">Phone: +255 766 437 358</p>
        <p className="font-['Yuji_Syuku:Regular',sans-serif] leading-[1.5] not-italic text-[24px]">
          <span>{`Email: `}</span>
          <a className="[text-decoration-skip-ink:none] [text-underline-position:from-font] cursor-pointer decoration-solid underline" href="mailto:reservation@grantexpedition.com">
            <span className="[text-decoration-skip-ink:none] [text-underline-position:from-font] decoration-solid font-['Yuji_Syuku:Regular',sans-serif] leading-[1.5] not-italic text-[24px]" href="mailto:reservation@grantexpedition.com">
              reservation@grantexpedition.com
            </span>
          </a>
        </p>
      </div>
    </div>
  );
}

function Frame4() {
  return (
    <div className="bg-[#97756e] box-border content-stretch flex gap-[10px] h-[64px] items-center justify-center p-[10px] relative rounded-[6px] shrink-0 w-[415px] cursor-pointer hover:bg-[#82635d] transition-colors">
      <div aria-hidden="true" className="absolute border border-[#97756e] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <div className="flex flex-col font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[16px] text-nowrap text-white tracking-[-0.48px]">
        <p className="leading-[1.5] whitespace-pre">Book Meeting</p>
      </div>
    </div>
  );
}

function Name() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-0 place-items-start relative" data-name="Name">
      <div className="[grid-area:1_/_1] bg-white h-[64px] ml-0 mt-0 relative rounded-[8px] w-[470px]" data-name="text-box-bg">
        <div aria-hidden="true" className="absolute border border-[#d8d8d8] border-solid inset-0 pointer-events-none rounded-[8px]" />
      </div>
      <p className="[grid-area:1_/_1] font-['Montserrat:Regular',sans-serif] font-normal leading-[normal] ml-[20px] mt-[21px] relative text-[#494949] text-[16px] text-nowrap whitespace-pre">Name</p>
    </div>
  );
}

function Website() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-[158px] place-items-start relative" data-name="Website">
      <div className="[grid-area:1_/_1] bg-white h-[64px] ml-0 mt-0 relative rounded-[8px] w-[470px]" data-name="text-box-bg">
        <div aria-hidden="true" className="absolute border border-[#d8d8d8] border-solid inset-0 pointer-events-none rounded-[8px]" />
      </div>
      <p className="[grid-area:1_/_1] font-['Montserrat:Regular',sans-serif] font-normal leading-[normal] ml-[20px] mt-[21px] relative text-[#494949] text-[16px] text-nowrap whitespace-pre">Website</p>
    </div>
  );
}

function Message() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-[237px] place-items-start relative" data-name="Message">
      <div className="[grid-area:1_/_1] bg-white h-[146px] ml-0 mt-0 relative rounded-[8px] w-[470px]" data-name="text-box-bg">
        <div aria-hidden="true" className="absolute border border-[#d8d8d8] border-solid inset-0 pointer-events-none rounded-[8px]" />
      </div>
      <p className="[grid-area:1_/_1] font-['Montserrat:Regular',sans-serif] font-normal leading-[normal] ml-[20px] mt-[20px] relative text-[#494949] text-[16px] text-nowrap whitespace-pre">Message</p>
    </div>
  );
}

function Email() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-[79px] place-items-start relative" data-name="Email">
      <div className="[grid-area:1_/_1] bg-white h-[64px] ml-0 mt-0 relative rounded-[8px] w-[470px]" data-name="text-box-bg">
        <div aria-hidden="true" className="absolute border border-[#d8d8d8] border-solid inset-0 pointer-events-none rounded-[8px]" />
      </div>
      <p className="[grid-area:1_/_1] font-['Montserrat:Regular',sans-serif] font-normal leading-[normal] ml-[20px] mt-[21px] relative text-[#494949] text-[16px] text-nowrap whitespace-pre">Email</p>
    </div>
  );
}

function ButtonSubmitt() {
  const handleSubmit = () => {
    alert('Thank you for your message! We will get back to you soon.');
  };
  
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-[398px] place-items-start relative cursor-pointer" data-name="Button Submitt" onClick={handleSubmit}>
      <div className="[grid-area:1_/_1] bg-[#97756e] h-[64px] ml-0 mt-0 rounded-[6px] w-[470px] hover:bg-[#82635d] transition-colors" data-name="bg" />
      <p className="[grid-area:1_/_1] font-['Montserrat:Medium',sans-serif] font-medium leading-[normal] ml-[235px] mt-[22px] relative text-[16px] text-center text-nowrap text-white translate-x-[-50%] whitespace-pre pointer-events-none">Submit</p>
    </div>
  );
}

function Form() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="Form">
      <Name />
      <Website />
      <Message />
      <Email />
      <ButtonSubmitt />
    </div>
  );
}

function FaqSection() {
  return (
    <div className="content-stretch flex flex-col gap-[152px] items-center relative shrink-0 w-full" data-name="FAQ section">
      <div className="content-stretch flex flex-col gap-[53px] items-center relative shrink-0 w-[786px]" data-name="FAQ heading">
        <div className="flex flex-col font-['Volkhov:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1a202c] text-[46px] text-center tracking-[-0.92px] w-full">
          <p className="leading-[1.5]">Frequently Asked Questions</p>
        </div>
      </div>
    </div>
  );
}

function FaQs() {
  return (
    <div className="relative shrink-0 w-full" data-name="FAQs">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[27px] items-start pb-[120px] pt-[20px] px-[120px] relative w-full">
          <div className="bg-white relative rounded-[10px] shrink-0 w-full cursor-pointer hover:bg-gray-50 transition-colors" data-name="FAQ">
            <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.3)] border-solid inset-[-1px] pointer-events-none rounded-[11px]" />
            <div className="flex flex-row items-center justify-center size-full">
              <div className="box-border content-stretch flex gap-[599px] items-center justify-center p-[40px] relative w-full">
                <p className="basis-0 font-['Volkhov:Bold',sans-serif] grow leading-[normal] min-h-px min-w-px not-italic relative shrink-0 text-[30px] text-black">Frequently Asked Questions</p>
                <div className="overflow-clip relative shrink-0 size-[56px]" data-name="icon">
                  <div className="absolute left-[calc(50%+0.461px)] size-[34.922px] top-[calc(50%+0.461px)] translate-x-[-50%] translate-y-[-50%]" data-name="add">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 35 35">
                      <path d={svgPaths.p35d71100} fill="var(--fill-0, #6B7280)" id="add" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white relative rounded-[10px] shrink-0 w-full cursor-pointer hover:bg-gray-50 transition-colors" data-name="FAQ">
            <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.3)] border-solid inset-[-1px] pointer-events-none rounded-[11px]" />
            <div className="flex flex-row items-center justify-center size-full">
              <div className="box-border content-stretch flex gap-[599px] items-center justify-center p-[40px] relative w-full">
                <p className="basis-0 font-['Volkhov:Bold',sans-serif] grow leading-[normal] min-h-px min-w-px not-italic relative shrink-0 text-[30px] text-black">Frequently Asked Questions</p>
                <div className="overflow-clip relative shrink-0 size-[56px]" data-name="icon">
                  <div className="absolute left-[calc(50%+0.461px)] size-[34.922px] top-[calc(50%+0.461px)] translate-x-[-50%] translate-y-[-50%]" data-name="add">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 35 35">
                      <path d={svgPaths.p35d71100} fill="var(--fill-0, #6B7280)" id="add" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white relative rounded-[10px] shrink-0 w-full cursor-pointer hover:bg-gray-50 transition-colors" data-name="FAQ">
            <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.3)] border-solid inset-[-1px] pointer-events-none rounded-[11px]" />
            <div className="flex flex-row items-center justify-center size-full">
              <div className="box-border content-stretch flex gap-[599px] items-center justify-center p-[40px] relative w-full">
                <p className="basis-0 font-['Volkhov:Bold',sans-serif] grow leading-[normal] min-h-px min-w-px not-italic relative shrink-0 text-[30px] text-black">Frequently Asked Questions</p>
                <div className="overflow-clip relative shrink-0 size-[56px]" data-name="icon">
                  <div className="absolute left-[calc(50%+0.461px)] size-[34.922px] top-[calc(50%+0.461px)] translate-x-[-50%] translate-y-[-50%]" data-name="add">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 35 35">
                      <path d={svgPaths.p35d71100} fill="var(--fill-0, #6B7280)" id="add" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white relative rounded-[10px] shrink-0 w-full cursor-pointer hover:bg-gray-50 transition-colors" data-name="FAQ">
            <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.3)] border-solid inset-[-1px] pointer-events-none rounded-[11px]" />
            <div className="flex flex-row items-center justify-center size-full">
              <div className="box-border content-stretch flex gap-[599px] items-center justify-center p-[40px] relative w-full">
                <p className="basis-0 font-['Volkhov:Bold',sans-serif] grow leading-[normal] min-h-px min-w-px not-italic relative shrink-0 text-[30px] text-black">Frequently Asked Questions</p>
                <div className="overflow-clip relative shrink-0 size-[56px]" data-name="icon">
                  <div className="absolute left-[calc(50%+0.461px)] size-[34.922px] top-[calc(50%+0.461px)] translate-x-[-50%] translate-y-[-50%]" data-name="add">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 35 35">
                      <path d={svgPaths.p35d71100} fill="var(--fill-0, #6B7280)" id="add" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white relative rounded-[10px] shrink-0 w-full cursor-pointer hover:bg-gray-50 transition-colors" data-name="FAQ">
            <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.3)] border-solid inset-[-1px] pointer-events-none rounded-[11px]" />
            <div className="flex flex-row items-center justify-center size-full">
              <div className="box-border content-stretch flex gap-[599px] items-center justify-center p-[40px] relative w-full">
                <p className="basis-0 font-['Volkhov:Bold',sans-serif] grow leading-[normal] min-h-px min-w-px not-italic relative shrink-0 text-[30px] text-black">Frequently Asked Questions</p>
                <div className="overflow-clip relative shrink-0 size-[56px]" data-name="icon">
                  <div className="absolute left-[calc(50%+0.461px)] size-[34.922px] top-[calc(50%+0.461px)] translate-x-[-50%] translate-y-[-50%]" data-name="add">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 35 35">
                      <path d={svgPaths.p35d71100} fill="var(--fill-0, #6B7280)" id="add" />
                    </svg>
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

function FaqSection1() {
  return (
    <div className="content-stretch flex flex-col gap-[44px] items-start relative shrink-0 w-full" data-name="FAQ section">
      <FaqSection />
      <FaQs />
    </div>
  );
}

function MapSection() {
  return (
    <div className="relative shrink-0 w-full" data-name="map section">
      <div className="flex flex-col items-center size-full">
        <div className="box-border content-stretch flex flex-col gap-[83px] items-center pb-[120px] pt-0 px-[120px] relative w-full">
          <div className="content-stretch flex flex-col gap-[53px] items-center relative shrink-0 w-[786px]" data-name="Heading">
            <div className="flex flex-col font-['Volkhov:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1a202c] text-[46px] text-center tracking-[-0.92px] w-full">
              <p className="leading-[1.5]">View us on the map!</p>
            </div>
          </div>
          <div className="bg-[#d9d9d9] h-[543px] shrink-0 w-full" />
        </div>
      </div>
    </div>
  );
}

export default function ContactScreen() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[85px] items-start relative size-full" data-name="Contact Screen">
      <UnifiedHeader />
      <div className="relative shrink-0 w-full" data-name="content/form">
        <div className="flex flex-row items-center size-full">
          <div className="box-border content-stretch flex gap-[128px] items-center pb-[120px] pt-[20px] px-[120px] relative w-full">
            <div className="content-stretch flex flex-col gap-[43px] items-center relative shrink-0" data-name="contact us card">
              <div className="flex flex-col font-['Volkhov:Regular',sans-serif] justify-center leading-[0] min-w-full not-italic relative shrink-0 text-[#1a202c] text-[48px] text-center tracking-[-0.96px] w-[min-content]">
                <p className="leading-[1.5]">Contact Us</p>
              </div>
              <Frame3 />
              <Frame4 />
            </div>
            <Form />
          </div>
        </div>
      </div>
      <FaqSection1 />
      <MapSection />
      <Footer className="bg-gray-200 h-[264px] overflow-clip relative shrink-0 w-full" />
    </div>
  );
}