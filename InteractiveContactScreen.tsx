import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import InteractiveHeader from './InteractiveHeader';
import svgPaths from "../imports/svg-31nv0ddf2l";

function Footer({ onNavigate }: { onNavigate: (page: string) => void }) {
  return (
    <div className="bg-gray-200 h-[264px] overflow-clip relative shrink-0 w-full" data-name="footer">
      <div className="absolute content-stretch flex flex-col font-['Inter:Medium',sans-serif] font-medium gap-[24px] items-end justify-center leading-[0] not-italic right-[calc(25%+119px)] text-[16px] top-[48px]" data-name="Items">
        <div className="flex flex-col justify-center relative shrink-0 text-black w-full cursor-pointer hover:opacity-70 transition-opacity" onClick={() => onNavigate('/')}>
          <p className="leading-[1.5]">Home</p>
        </div>
        <div className="flex flex-col justify-center relative shrink-0 text-[#454545] w-full cursor-pointer hover:opacity-70 transition-opacity" onClick={() => onNavigate('/tours')}>
          <p className="leading-[1.5]">Tours</p>
        </div>
        <div className="flex flex-col justify-center relative shrink-0 text-[#454545] w-full cursor-pointer hover:opacity-70 transition-opacity">
          <p className="leading-[1.5]">Blog</p>
        </div>
        <div className="flex flex-col justify-center relative shrink-0 text-[#454545] w-full cursor-pointer hover:opacity-70 transition-opacity" onClick={() => onNavigate('/contact')}>
          <p className="leading-[1.5]">Contact</p>
        </div>
      </div>
      <div className="absolute content-stretch flex flex-col font-['Inter:Medium',sans-serif] font-medium gap-[24px] items-end justify-center leading-[0] not-italic right-[151px] text-[16px] top-[48px]" data-name="Items">
        <div className="flex flex-col justify-center relative shrink-0 text-black w-full cursor-pointer hover:opacity-70 transition-opacity">
          <p className="leading-[1.5]">FAQ</p>
        </div>
        <div className="flex flex-col justify-center relative shrink-0 text-[#454545] w-full cursor-pointer hover:opacity-70 transition-opacity">
          <p className="leading-[1.5]">Newsletter</p>
        </div>
        <div className="flex flex-col justify-center relative shrink-0 text-[#454545] w-full cursor-pointer hover:opacity-70 transition-opacity">
          <p className="leading-[1.5]">Privacy Policy</p>
        </div>
        <div className="flex flex-col justify-center relative shrink-0 text-[#454545] w-full cursor-pointer hover:opacity-70 transition-opacity">
          <p className="leading-[1.5]">Terms & Conditions</p>
        </div>
      </div>
      <div className="absolute content-stretch flex flex-col font-['Inter:Medium',sans-serif] font-medium gap-[24px] items-start justify-center leading-[0] not-italic right-1/2 top-[42px]" data-name="Items">
        <div className="flex flex-col justify-center min-w-full relative shrink-0 text-[16px] text-black w-[min-content]">
          <p className="leading-[1.5]">Contact Us</p>
        </div>
        <div className="flex flex-col justify-center relative shrink-0 text-[#454545] text-[0px] text-nowrap">
          <a className="[text-decoration-skip-ink:none] [text-underline-position:from-font] block cursor-pointer decoration-solid font-['Inter:Medium',sans-serif] leading-[1.5] not-italic text-[16px] underline whitespace-pre hover:text-[#97756e] transition-colors" href="mailto:info@grantexpedition.com">
            info@grantexpedition.com
          </a>
        </div>
        <div className="flex flex-col justify-center min-w-full relative shrink-0 text-[#454545] text-[0px] w-[min-content]">
          <a className="[text-decoration-skip-ink:none] [text-underline-position:from-font] block cursor-pointer decoration-solid font-['Inter:Medium',sans-serif] leading-[1.5] not-italic text-[16px] underline hover:text-[#97756e] transition-colors" href="tel:255766437358">
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
        <div className="relative rounded-[4px] shrink-0 size-[40px] cursor-pointer hover:opacity-70 transition-opacity" data-name="Buttons / Icon">
          <div className="absolute left-[8px] size-[24px] top-[8px]" data-name="Icon">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
              <g id="Icon">
                <path d={svgPaths.p132b8500} fill="var(--fill-0, #828282)" id="Icon_2" />
              </g>
            </svg>
          </div>
        </div>
        <div className="relative rounded-[4px] shrink-0 size-[40px] cursor-pointer hover:opacity-70 transition-opacity" data-name="Buttons / Icon">
          <div className="absolute left-[8px] size-[24px] top-[8px]" data-name="Icon">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
              <g id="Icon">
                <path d={svgPaths.p3a800a00} fill="var(--fill-0, #828282)" id="Icon_2" />
              </g>
            </svg>
          </div>
        </div>
        <div className="relative rounded-[4px] shrink-0 size-[40px] cursor-pointer hover:opacity-70 transition-opacity" data-name="Buttons / Icon">
          <div className="absolute left-[8px] size-[24px] top-[8px]" data-name="Icon">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
              <g id="Icon">
                <path d={svgPaths.p3b619c00} fill="var(--fill-0, #828282)" id="Icon_2" />
              </g>
            </svg>
          </div>
        </div>
        <div className="relative rounded-[4px] shrink-0 size-[40px] cursor-pointer hover:opacity-70 transition-opacity" data-name="Buttons / Icon">
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
    </div>
  );
}

function ContactForm({ onSubmit }: { onSubmit: () => void }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    website: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    onSubmit();
  };

  return (
    <form onSubmit={handleSubmit} className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="Form">
      <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-0 place-items-start relative" data-name="Name">
        <div className="[grid-area:1_/_1] bg-white h-[64px] ml-0 mt-0 relative rounded-[8px] w-[470px]" data-name="text-box-bg">
          <div aria-hidden="true" className="absolute border border-[#d8d8d8] border-solid inset-0 pointer-events-none rounded-[8px]" />
        </div>
        <input
          type="text"
          placeholder="Name"
          value={formData.name}
          onChange={(e) => setFormData({...formData, name: e.target.value})}
          className="[grid-area:1_/_1] font-['Montserrat:Regular',sans-serif] font-normal leading-[normal] ml-[20px] mt-[21px] relative text-[#494949] text-[16px] bg-transparent border-none outline-none w-[430px]"
        />
      </div>
      <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-[79px] place-items-start relative" data-name="Email">
        <div className="[grid-area:1_/_1] bg-white h-[64px] ml-0 mt-0 relative rounded-[8px] w-[470px]" data-name="text-box-bg">
          <div aria-hidden="true" className="absolute border border-[#d8d8d8] border-solid inset-0 pointer-events-none rounded-[8px]" />
        </div>
        <input
          type="email"
          placeholder="Email"
          value={formData.email}
          onChange={(e) => setFormData({...formData, email: e.target.value})}
          className="[grid-area:1_/_1] font-['Montserrat:Regular',sans-serif] font-normal leading-[normal] ml-[20px] mt-[21px] relative text-[#494949] text-[16px] bg-transparent border-none outline-none w-[430px]"
        />
      </div>
      <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-[158px] place-items-start relative" data-name="Website">
        <div className="[grid-area:1_/_1] bg-white h-[64px] ml-0 mt-0 relative rounded-[8px] w-[470px]" data-name="text-box-bg">
          <div aria-hidden="true" className="absolute border border-[#d8d8d8] border-solid inset-0 pointer-events-none rounded-[8px]" />
        </div>
        <input
          type="text"
          placeholder="Website"
          value={formData.website}
          onChange={(e) => setFormData({...formData, website: e.target.value})}
          className="[grid-area:1_/_1] font-['Montserrat:Regular',sans-serif] font-normal leading-[normal] ml-[20px] mt-[21px] relative text-[#494949] text-[16px] bg-transparent border-none outline-none w-[430px]"
        />
      </div>
      <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-[237px] place-items-start relative" data-name="Message">
        <div className="[grid-area:1_/_1] bg-white h-[146px] ml-0 mt-0 relative rounded-[8px] w-[470px]" data-name="text-box-bg">
          <div aria-hidden="true" className="absolute border border-[#d8d8d8] border-solid inset-0 pointer-events-none rounded-[8px]" />
        </div>
        <textarea
          placeholder="Message"
          value={formData.message}
          onChange={(e) => setFormData({...formData, message: e.target.value})}
          className="[grid-area:1_/_1] font-['Montserrat:Regular',sans-serif] font-normal leading-[normal] ml-[20px] mt-[20px] relative text-[#494949] text-[16px] bg-transparent border-none outline-none w-[430px] h-[106px] resize-none"
        />
      </div>
      <button
        type="submit"
        className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-[398px] place-items-start relative cursor-pointer hover:opacity-90 transition-opacity" 
        data-name="Button Submit"
      >
        <div className="[grid-area:1_/_1] bg-[#97756e] h-[64px] ml-0 mt-0 rounded-[50px] w-[470px]" data-name="bg" />
        <p className="[grid-area:1_/_1] font-['Volkhov:Bold',sans-serif] leading-[normal] ml-[235.5px] mt-[22px] not-italic relative text-[20px] text-center text-nowrap text-white translate-x-[-50%] whitespace-pre">Submit</p>
      </button>
    </form>
  );
}

function FAQItem({ question, isOpen, onToggle }: { question: string; isOpen: boolean; onToggle: () => void }) {
  return (
    <div className="bg-white relative rounded-[10px] shrink-0 w-full cursor-pointer hover:bg-gray-50 transition-colors" data-name="FAQ" onClick={onToggle}>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.3)] border-solid inset-[-1px] pointer-events-none rounded-[11px]" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[599px] items-center justify-center p-[40px] relative w-full">
          <p className="basis-0 font-['Volkhov:Bold',sans-serif] grow leading-[normal] min-h-px min-w-px not-italic relative shrink-0 text-[30px] text-black">{question}</p>
          <div className="overflow-clip relative shrink-0 size-[56px]" data-name="icon">
            <div className={`absolute left-[calc(50%+0.461px)] size-[34.922px] top-[calc(50%+0.461px)] translate-x-[-50%] translate-y-[-50%] transition-transform ${isOpen ? 'rotate-45' : ''}`} data-name="add">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 35 35">
                <path d={svgPaths.p35d71100} fill="var(--fill-0, #6B7280)" id="add" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function InteractiveContactScreen() {
  const navigate = useNavigate();
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const handleNavigate = (page: string) => {
    navigate(page);
  };

  const handleBookMeeting = () => {
    navigate('/schedule-meeting');
  };

  const handleFormSubmit = () => {
    alert('Thank you for contacting us! We will get back to you soon.');
  };

  const faqQuestions = [
    "What is included in the tour packages?",
    "How do I book a safari?",
    "What is your cancellation policy?",
    "Do you offer custom itineraries?",
    "What should I pack for a safari?"
  ];

  return (
    <div className="bg-white content-stretch flex flex-col gap-[20px] items-start relative w-full min-h-screen" data-name="Contact Screen">
      {/* Header */}
      <div className="w-full bg-white px-[80px] py-[20px]">
        <div className="max-w-[1440px] mx-auto">
          <InteractiveHeader backgroundColor="bg-white" />
        </div>
      </div>

      {/* Contact Form Section */}
      <div className="box-border content-stretch flex gap-[179px] items-end pb-[120px] pt-[30px] px-[120px] relative w-full max-w-[1512px] mx-auto" data-name="content/form">
        <div className="box-border content-stretch flex flex-col gap-[43px] items-center pb-0 pt-[30px] px-0 relative shrink-0" data-name="contact us card">
          <div className="flex flex-col font-['Volkhov:Regular',sans-serif] justify-center leading-[0] min-w-full not-italic relative shrink-0 text-[#1a202c] text-[48px] text-center tracking-[-0.96px] w-[min-content]">
            <p className="leading-[1.5]">Contact Us</p>
          </div>
          <div className="content-stretch flex flex-col font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal gap-[19px] items-start leading-[0] relative shrink-0 text-[#1a202c] text-[0px] text-center">
            <div className="flex flex-col font-['Volkhov:Regular',sans-serif] justify-center leading-[1.5] not-italic relative shrink-0 text-[24px] w-[529.478px]">
              <p className="mb-0">Address: Usa River, Arusha, Tanzania</p>
              <p className="mb-0">Phone: +255 766 437 358</p>
              <p className="mb-0">
                <span>{`Email: `}</span>
                <a className="[text-decoration-skip-ink:none] [text-underline-position:from-font] cursor-pointer decoration-solid underline hover:text-[#97756e] transition-colors" href="mailto:info@grantexpedition.com">
                  info@grantexpedition.com
                </a>
              </p>
              <p>Office Hours: Mon–Sat: 8:00 AM – 6:00 PM</p>
            </div>
            <div className="flex flex-col justify-center relative shrink-0 w-[529.478px]">
              <p className="font-['Volkhov:Regular',sans-serif] leading-[1.5] mb-0 not-italic text-[24px]">Phone: +255 766 437 358</p>
              <p className="font-['Volkhov:Regular',sans-serif] leading-[1.5] not-italic text-[24px]">
                <span>{`Email: `}</span>
                <a className="[text-decoration-skip-ink:none] [text-underline-position:from-font] cursor-pointer decoration-solid underline hover:text-[#97756e] transition-colors" href="mailto:reservation@grantexpedition.com">
                  reservation@grantexpedition.com
                </a>
              </p>
            </div>
          </div>
          <div 
            className="bg-[#97756e] box-border content-stretch flex gap-[10px] h-[64px] items-center justify-center p-[10px] relative rounded-[50px] shrink-0 w-[415px] cursor-pointer hover:bg-[#82635d] transition-colors"
            onClick={handleBookMeeting}
          >
            <div aria-hidden="true" className="absolute border border-[#97756e] border-solid inset-0 pointer-events-none rounded-[50px]" />
            <div className="flex flex-col font-['Volkhov:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[20px] text-nowrap text-white tracking-[-0.6px]">
              <p className="leading-[1.5] whitespace-pre">Book Meeting</p>
            </div>
          </div>
        </div>
        <ContactForm onSubmit={handleFormSubmit} />
      </div>

      {/* FAQ Section */}
      <div className="content-stretch flex flex-col gap-[44px] items-start relative shrink-0 w-full" data-name="FAQ section">
        <div className="content-stretch flex flex-col gap-[53px] items-center relative shrink-0 w-full px-[120px]">
          <div className="flex flex-col font-['Volkhov:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1a202c] text-[46px] text-center tracking-[-0.92px] w-full max-w-[786px]">
            <p className="leading-[1.5]">Frequently Asked Questions</p>
          </div>
        </div>
        <div className="relative shrink-0 w-full" data-name="FAQs">
          <div className="size-full">
            <div className="box-border content-stretch flex flex-col gap-[27px] items-start pb-[120px] pt-[20px] px-[120px] relative w-full">
              {faqQuestions.map((question, index) => (
                <FAQItem
                  key={index}
                  question={question}
                  isOpen={openFAQ === index}
                  onToggle={() => setOpenFAQ(openFAQ === index ? null : index)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Map Section */}
      <div className="relative shrink-0 w-full" data-name="map section">
        <div className="flex flex-col items-center size-full">
          <div className="box-border content-stretch flex flex-col gap-[83px] items-center pb-[120px] pt-0 px-[120px] relative w-full">
            <div className="content-stretch flex flex-col gap-[53px] items-center relative shrink-0 w-[786px]" data-name="Heading">
              <div className="flex flex-col font-['Volkhov:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1a202c] text-[46px] text-center tracking-[-0.92px] w-full">
                <p className="leading-[1.5]">View us on the map!</p>
              </div>
            </div>
            <div className="bg-[#d9d9d9] h-[543px] shrink-0 w-full rounded-[8px] flex items-center justify-center">
              <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] text-[#666] text-[18px]">Map will be displayed here</p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}
