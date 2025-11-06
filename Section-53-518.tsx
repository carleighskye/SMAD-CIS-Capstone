import svgPaths from "./svg-79j4sqct8h";
import { TourFilterDropdown } from "../components/TourFilterDropdown";
import { TourDetailModal } from "../components/TourDetailModal";
import { useState } from "react";
import imgTourCard from "figma:asset/df2b6d52c510b5307088457ab47ff6bbae4367e7.png";
import imgTourCard1 from "figma:asset/de5863810f356ad74c5a8fcf54e053bd0ad1ffad.png";
import imgTourCard2 from "figma:asset/9e79fdbdf7566ce8a067e9ce2989c12556366f68.png";
import imgTanzaniaCulture from "figma:asset/be5202d13c05478c718a7e99a8e6a72ae4115841.png";
import Frame7540 from "./Frame7540";
import Frame7539 from "./Frame7539";

// Sample tour data
const tourData = [
  {
    id: '1',
    title: 'Serengeti Safari Adventure',
    description: 'Experience the magnificent wildlife of the Serengeti on this unforgettable safari adventure. Witness the great wildebeest migration, spot the Big Five, and immerse yourself in the stunning landscapes of Tanzania\'s most famous national park. Our expert guides will ensure you have the best wildlife viewing opportunities while staying in comfortable lodges.',
    price: '2,850',
    duration: '7 Days',
    groupSize: '2-8 People',
    difficulty: 'Easy',
    destination: 'Serengeti National Park',
    highlights: [
      'Witness the Great Wildebeest Migration',
      'Spot the Big Five: Lion, Leopard, Elephant, Buffalo, Rhino',
      'Professional wildlife photography opportunities',
      'Stay in luxury tented camps',
      'Game drives at sunrise and sunset',
      'Visit the Ngorongoro Crater'
    ],
    itinerary: [
      { day: 1, title: 'Arrival in Arusha', description: 'Meet your guide and transfer to your hotel. Evening briefing about the safari.' },
      { day: 2, title: 'Arusha to Serengeti', description: 'Drive through the Ngorongoro Conservation Area to the Serengeti. Afternoon game drive.' },
      { day: 3, title: 'Full Day Serengeti', description: 'Morning and afternoon game drives exploring the Serengeti plains.' },
      { day: 4, title: 'Serengeti Exploration', description: 'Continue wildlife viewing with optional balloon safari at sunrise.' },
      { day: 5, title: 'Serengeti to Ngorongoro', description: 'Morning game drive, then travel to Ngorongoro Crater rim.' },
      { day: 6, title: 'Ngorongoro Crater', description: 'Descend into the crater for a full day of game viewing.' },
      { day: 7, title: 'Return to Arusha', description: 'Morning at leisure, then transfer to airport for departure.' }
    ],
    included: [
      'All accommodation',
      'All meals during safari',
      'Park entrance fees',
      'Professional safari guide',
      '4x4 Land Cruiser with pop-up roof',
      'Airport transfers',
      'Drinking water'
    ],
    excluded: [
      'International flights',
      'Travel insurance',
      'Personal expenses',
      'Tips and gratuities',
      'Alcoholic beverages',
      'Optional balloon safari ($550)'
    ]
  },
  {
    id: '2',
    title: 'Mount Kilimanjaro Trek',
    description: 'Conquer Africa\'s highest peak on this challenging but rewarding trek to the summit of Mount Kilimanjaro. Follow the Machame Route, known as the "Whiskey Route," through diverse ecosystems from lush rainforest to alpine desert. Reach Uhuru Peak at 5,895 meters and experience the thrill of standing on the Roof of Africa.',
    price: '3,200',
    duration: '8 Days',
    groupSize: '4-12 People',
    difficulty: 'Challenging',
    destination: 'Mount Kilimanjaro',
    highlights: [
      'Summit Africa\'s highest peak at 5,895m',
      'Trek through 5 climate zones',
      'Witness stunning sunrise from Uhuru Peak',
      'Professional mountain guides and porters',
      'Machame "Whiskey" Route',
      'Certificate of achievement'
    ],
    itinerary: [
      { day: 1, title: 'Arrival & Briefing', description: 'Arrive in Moshi, meet your guide, equipment check and trek briefing.' },
      { day: 2, title: 'Machame Gate to Machame Camp', description: 'Start trek through rainforest (5-7 hours hiking).' },
      { day: 3, title: 'Machame to Shira Camp', description: 'Climb through moorland zone to Shira Plateau (4-6 hours).' },
      { day: 4, title: 'Shira to Barranco Camp', description: 'Acclimatization day via Lava Tower (6-8 hours).' },
      { day: 5, title: 'Barranco to Karanga Camp', description: 'Climb the Barranco Wall and traverse to Karanga (4-5 hours).' },
      { day: 6, title: 'Karanga to Barafu Camp', description: 'Ascend to base camp, rest before summit attempt (4-5 hours).' },
      { day: 7, title: 'Summit Day to Mweka', description: 'Midnight start to summit, descend to Mweka Camp (12-16 hours).' },
      { day: 8, title: 'Mweka to Moshi', description: 'Final descent through rainforest, receive summit certificate.' }
    ],
    included: [
      'Professional mountain guide',
      'Porters and cook',
      'All camping equipment',
      'All meals on mountain',
      'Park fees and permits',
      'Airport transfers',
      'Summit certificate'
    ],
    excluded: [
      'International flights',
      'Travel insurance',
      'Sleeping bag rental ($30)',
      'Personal trekking gear',
      'Tips for guides and porters',
      'Personal expenses'
    ]
  },
  {
    id: '3',
    title: 'Zanzibar Beach Retreat',
    description: 'Relax and unwind on the pristine beaches of Zanzibar after your safari adventure. Discover the rich history of Stone Town, explore spice plantations, swim in crystal-clear turquoise waters, and experience the vibrant culture of this exotic island paradise. Perfect for honeymooners and beach lovers.',
    price: '1,650',
    duration: '5 Days',
    groupSize: '2-6 People',
    difficulty: 'Easy',
    destination: 'Zanzibar Island',
    highlights: [
      'Pristine white sand beaches',
      'Stone Town UNESCO World Heritage site',
      'Spice plantation tour',
      'Snorkeling in Mnemba Atoll',
      'Sunset dhow cruise',
      'Jozani Forest red colobus monkeys'
    ],
    itinerary: [
      { day: 1, title: 'Arrival in Zanzibar', description: 'Transfer to beach resort, relax and enjoy the beach.' },
      { day: 2, title: 'Stone Town Tour', description: 'Explore historic Stone Town, visit Palace Museum and spice markets.' },
      { day: 3, title: 'Spice Tour & Beach', description: 'Morning spice plantation tour, afternoon at leisure on the beach.' },
      { day: 4, title: 'Mnemba Snorkeling', description: 'Full day snorkeling trip to Mnemba Atoll, see dolphins and tropical fish.' },
      { day: 5, title: 'Departure', description: 'Morning at leisure, transfer to airport.' }
    ],
    included: [
      'Beach resort accommodation',
      'Daily breakfast',
      'Airport transfers',
      'Stone Town guided tour',
      'Spice plantation tour',
      'Snorkeling trip with equipment'
    ],
    excluded: [
      'Lunch and dinner',
      'International flights',
      'Travel insurance',
      'Water sports activities',
      'Tips and gratuities',
      'Personal expenses'
    ]
  },
  {
    id: '4',
    title: 'Taste of Tanzania',
    description: 'A perfect introduction to Tanzania\'s incredible wildlife and natural wonders. This 5-day safari takes you to Tarangire National Park, famous for its elephant herds, and the world-renowned Ngorongoro Crater. Experience authentic Maasai culture and enjoy game drives in diverse landscapes.',
    price: '1,950',
    duration: '5 Days',
    groupSize: '2-6 People',
    difficulty: 'Easy',
    destination: 'Tarangire & Ngorongoro',
    highlights: [
      'Large elephant herds in Tarangire',
      'Ngorongoro Crater wildlife viewing',
      'Visit a traditional Maasai village',
      'Baobab tree landscapes',
      'Excellent bird watching',
      'Crater floor game drive'
    ],
    itinerary: [
      { day: 1, title: 'Arusha to Tarangire', description: 'Drive to Tarangire National Park, afternoon game drive among giant baobabs.' },
      { day: 2, title: 'Full Day Tarangire', description: 'Full day exploring Tarangire, famous for elephants and diverse wildlife.' },
      { day: 3, title: 'Tarangire to Ngorongoro', description: 'Morning game drive, visit Maasai village, continue to Ngorongoro.' },
      { day: 4, title: 'Ngorongoro Crater', description: 'Descend into the crater for a full day of spectacular wildlife viewing.' },
      { day: 5, title: 'Return to Arusha', description: 'Morning at leisure, drive back to Arusha for departure.' }
    ],
    included: [
      'Lodge accommodation',
      'All meals',
      'Park fees',
      'Safari vehicle with pop-up roof',
      'Professional guide',
      'Maasai village visit',
      'Airport transfers'
    ],
    excluded: [
      'International flights',
      'Travel insurance',
      'Alcoholic drinks',
      'Tips for guide',
      'Personal expenses',
      'Optional activities'
    ]
  }
];

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

/**
 * @figmaAssetKey a8a9ae67bb85b9b94fd1ed18d21ecd01314b6109
 */
function TourCard({ className }: { className?: string }) {
  return (
    <div className={className} data-name="tour card">
      <div className="bg-white box-border content-stretch flex gap-[10px] items-center justify-center p-[10px] relative rounded-[30px] shrink-0">
        <div aria-hidden="true" className="absolute border border-[#181e4b] border-solid inset-0 pointer-events-none rounded-[30px]" />
        <div className="flex flex-col font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#181e4b] text-[20px] text-nowrap tracking-[-0.6px]">
          <p className="leading-[1.5] whitespace-pre">Taste of Tanzania</p>
        </div>
      </div>
      <div className="h-[100px] shrink-0 w-[224px]" data-name="Car" />
      <div className="content-stretch flex gap-[26px] h-[125px] items-center relative shrink-0 w-[280px]">
        <div className="bg-white box-border content-stretch flex gap-[10px] items-center justify-center p-[10px] relative rounded-[30px] shrink-0 w-[112px]">
          <div aria-hidden="true" className="absolute border border-[#181e4b] border-solid inset-0 pointer-events-none rounded-[30px]" />
          <div className="flex flex-col font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#181e4b] text-[16px] text-nowrap tracking-[-0.48px]">
            <p className="leading-[1.5] whitespace-pre">Book Now</p>
          </div>
        </div>
        <div className="bg-white box-border content-stretch flex gap-[10px] items-center justify-center p-[10px] relative rounded-[30px] shrink-0 w-[115px]">
          <div aria-hidden="true" className="absolute border border-[#181e4b] border-solid inset-0 pointer-events-none rounded-[30px]" />
          <div className="flex flex-col font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#181e4b] text-[16px] text-nowrap tracking-[-0.48px]">
            <p className="leading-[1.5] whitespace-pre">Learn More</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function DivColXl() {
  return (
    <div className="h-[281px] relative shrink-0 w-[503px]" data-name="div.col-xl-4">
      <div className="absolute flex h-[calc(1px*((var(--transform-inner-width)*0.006433780305087566)+(var(--transform-inner-height)*0.9999793171882629)))] items-center justify-center left-[14.93px] top-[32.41px] translate-y-[-50%] w-[calc(1px*((var(--transform-inner-height)*0.006433780305087566)+(var(--transform-inner-width)*0.9999793171882629)))]" style={{ "--transform-inner-width": "419.078125", "--transform-inner-height": "34.484375" } as React.CSSProperties}>
        <div className="flex-none rotate-[0.369deg]">
          <div className="flex flex-col font-['Volkhov:Bold',sans-serif] h-[34.488px] justify-center leading-[0] not-italic relative text-[40px] text-white w-[419.082px]">
            <p className="leading-[45px] text-[rgb(0,0,0)]">Popular things to do</p>
          </div>
        </div>
      </div>
      <div className="absolute flex flex-col font-['Volkhov:Regular',sans-serif] h-[76px] justify-center leading-[28.13px] left-[15px] not-italic text-[14.648px] text-white top-[132px] translate-y-[-50%] w-[406px]">
        <p className="mb-0 text-[rgb(0,0,0)]">There are many variations of passages of Lorem Ipsum</p>
        <p className="mb-0 text-[rgb(0,0,0)]">available, but the majority have suffered alteration in some</p>
        <p>form.</p>
      </div>
    </div>
  );
}

function Frame20() {
  return (
    <div className="bg-[#97756e] content-stretch flex gap-[10px] h-[63px] items-center justify-center relative rounded-[30px] shrink-0 w-[285px]">
      <div className="flex flex-col font-['Volkhov:Regular',sans-serif] h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-center text-white w-[133px]">
        <p className="leading-[28px]">See All Tours</p>
      </div>
    </div>
  );
}

function Frame21() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0">
      <DivColXl />
      <Frame20 />
    </div>
  );
}

function Component1Svg() {
  return (
    <div className="absolute h-[41px] left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%] w-[40px]" data-name="1.svg">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 41">
        <g id="1.svg">
          <path d={svgPaths.p24a40c00} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Component1SvgFill() {
  return (
    <div className="absolute h-[41px] left-0 overflow-clip top-0 w-[40px]" data-name="1.svg fill">
      <Component1Svg />
    </div>
  );
}

function Component1Svg1() {
  return (
    <div className="absolute h-[41px] left-1/2 overflow-clip top-1/2 translate-x-[-50%] translate-y-[-50%] w-[40px]" data-name="1.svg">
      <Component1SvgFill />
    </div>
  );
}

function DivFeatureCardIcon() {
  return (
    <div className="absolute bg-[#97756e] left-[calc(50%-0.01px)] rounded-[80px] size-[80px] top-[30px] translate-x-[-50%]" data-name="div.featureCard__icon">
      <Component1Svg1 />
    </div>
  );
}

function DivLh() {
  return (
    <div className="absolute h-[19.5px] left-[calc(50%-0.005px)] top-[162px] translate-x-[-50%] w-[75.09px]" data-name="div.lh-13">
      <div className="absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[20px] justify-center leading-[0] left-[calc(50%+0.1px)] not-italic text-[#05073c] text-[14.18px] text-center top-[9px] translate-x-[-50%] translate-y-[-50%] w-[75.29px]">
        <p className="leading-[19.5px]">100+ Tours</p>
      </div>
    </div>
  );
}

function Link() {
  return (
    <div className="bg-white h-[211.5px] relative rounded-[12px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] shrink-0 w-[189.98px]" data-name="Link">
      <DivFeatureCardIcon />
      <div className="absolute flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[27px] justify-center leading-[0] left-[calc(50%-0.49px)] not-italic text-[#05073c] text-[17.578px] text-center top-[143.5px] translate-x-[-50%] translate-y-[-50%] w-[177px]">
        <p className="leading-[27px]">Honeymoon Tours</p>
      </div>
      <DivLh />
    </div>
  );
}

function Component2Svg() {
  return (
    <div className="absolute h-[41px] left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%] w-[40px]" data-name="2.svg">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 41">
        <g id="2.svg">
          <path d={svgPaths.p63c2c00} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Component2SvgFill() {
  return (
    <div className="absolute h-[41px] left-0 overflow-clip top-0 w-[40px]" data-name="2.svg fill">
      <Component2Svg />
    </div>
  );
}

function Component2Svg1() {
  return (
    <div className="absolute h-[41px] left-1/2 overflow-clip top-1/2 translate-x-[-50%] translate-y-[-50%] w-[40px]" data-name="2.svg">
      <Component2SvgFill />
    </div>
  );
}

function DivFeatureCardIcon1() {
  return (
    <div className="absolute bg-[#97756e] left-1/2 rounded-[80px] size-[80px] top-[30px] translate-x-[-50%]" data-name="div.featureCard__icon">
      <Component2Svg1 />
    </div>
  );
}

function DivLh1() {
  return (
    <div className="absolute h-[19.5px] left-[calc(50%-0.005px)] top-[162px] translate-x-[-50%] w-[75.09px]" data-name="div.lh-13">
      <div className="absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[20px] justify-center leading-[0] left-[calc(50%+0.105px)] not-italic text-[#05073c] text-[14.18px] text-center top-[9px] translate-x-[-50%] translate-y-[-50%] w-[75.3px]">
        <p className="leading-[19.5px]">100+ Tours</p>
      </div>
    </div>
  );
}

function Link1() {
  return (
    <div className="bg-white h-[211.5px] relative rounded-[12px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] shrink-0 w-[189.98px]" data-name="Link">
      <DivFeatureCardIcon1 />
      <div className="absolute flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[27px] justify-center leading-[0] left-[calc(50%+0.1px)] not-italic text-[#05073c] text-[17.578px] text-center top-[143.5px] translate-x-[-50%] translate-y-[-50%] w-[117.76px]">
        <p className="leading-[27px]">Cultural Tours</p>
      </div>
      <DivLh1 />
    </div>
  );
}

function Component2Svg2() {
  return (
    <div className="absolute h-[41px] left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%] w-[40px]" data-name="2.svg">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 41">
        <g id="2.svg">
          <path d={svgPaths.p63c2c00} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Component2SvgFill1() {
  return (
    <div className="absolute h-[41px] left-0 overflow-clip top-0 w-[40px]" data-name="2.svg fill">
      <Component2Svg2 />
    </div>
  );
}

function Component2Svg3() {
  return (
    <div className="absolute h-[41px] left-1/2 overflow-clip top-1/2 translate-x-[-50%] translate-y-[-50%] w-[40px]" data-name="2.svg">
      <Component2SvgFill1 />
    </div>
  );
}

function DivFeatureCardIcon2() {
  return (
    <div className="absolute bg-[#97756e] left-1/2 rounded-[80px] size-[80px] top-[30px] translate-x-[-50%]" data-name="div.featureCard__icon">
      <Component2Svg3 />
    </div>
  );
}

function DivLh2() {
  return (
    <div className="absolute h-[19.5px] left-[calc(50%-0.005px)] top-[162px] translate-x-[-50%] w-[75.09px]" data-name="div.lh-13">
      <div className="absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[20px] justify-center leading-[0] left-[calc(50%+0.105px)] not-italic text-[#05073c] text-[14.18px] text-center top-[9px] translate-x-[-50%] translate-y-[-50%] w-[75.3px]">
        <p className="leading-[19.5px]">100+ Tours</p>
      </div>
    </div>
  );
}

function Link2() {
  return (
    <div className="bg-white h-[211.5px] relative rounded-[12px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] shrink-0 w-[189.98px]" data-name="Link">
      <DivFeatureCardIcon2 />
      <div className="absolute flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[27px] justify-center leading-[0] left-[calc(50%+0.1px)] not-italic text-[#05073c] text-[17.578px] text-center top-[143.5px] translate-x-[-50%] translate-y-[-50%] w-[117.76px]">
        <p className="leading-[27px]">Family Tours</p>
      </div>
      <DivLh2 />
    </div>
  );
}

function Frame14() {
  return (
    <div className="content-start flex flex-wrap gap-[30px] items-start relative shrink-0 w-[648px]">
      <Link />
      <Link1 />
      <Link2 />
      <Link1 />
      <Link1 />
      <Link1 />
    </div>
  );
}

function Frame15() {
  return (
    <div className="absolute content-stretch flex gap-[98px] items-center left-1/2 -translate-x-1/2 top-[165px]">
      <TourFilterDropdown />
    </div>
  );
}

function Frame() {
  return (
    <div className="bg-white box-border content-stretch flex gap-[10px] items-center justify-center p-[10px] relative rounded-[30px] shrink-0">
      <div aria-hidden="true" className="absolute border border-[#181e4b] border-solid inset-0 pointer-events-none rounded-[30px]" />
      <div className="flex flex-col font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#181e4b] text-[20px] text-nowrap tracking-[-0.6px]">
        <p className="leading-[1.5] whitespace-pre">Taste of Tanzania</p>
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="bg-white box-border content-stretch flex gap-[10px] items-center justify-center p-[10px] relative rounded-[30px] shrink-0 w-[112px]">
      <div aria-hidden="true" className="absolute border border-[#181e4b] border-solid inset-0 pointer-events-none rounded-[30px]" />
      <div className="flex flex-col font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#181e4b] text-[16px] text-nowrap tracking-[-0.48px]">
        <p className="leading-[1.5] whitespace-pre">{`Book  Now`}</p>
      </div>
    </div>
  );
}

function Frame2({ onClick }: { onClick?: () => void }) {
  return (
    <button onClick={onClick} className="bg-white box-border content-stretch flex gap-[10px] items-center justify-center p-[10px] relative rounded-[30px] shrink-0 w-[115px] cursor-pointer hover:bg-gray-50 transition-colors">
      <div aria-hidden="true" className="absolute border border-[#181e4b] border-solid inset-0 pointer-events-none rounded-[30px]" />
      <div className="flex flex-col font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#181e4b] text-[16px] text-nowrap tracking-[-0.48px]">
        <p className="leading-[1.5] whitespace-pre">Learn More</p>
      </div>
    </button>
  );
}

function Frame3() {
  return (
    <div className="bg-white box-border content-stretch flex gap-[10px] items-center justify-center p-[10px] relative rounded-[30px] shrink-0">
      <div aria-hidden="true" className="absolute border border-[#181e4b] border-solid inset-0 pointer-events-none rounded-[30px]" />
      <div className="flex flex-col font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#181e4b] text-[20px] text-nowrap tracking-[-0.6px]">
        <p className="leading-[1.5] whitespace-pre">Taste of Tanzania</p>
      </div>
    </div>
  );
}

function Frame4() {
  return (
    <div className="bg-white box-border content-stretch flex gap-[10px] items-center justify-center p-[10px] relative rounded-[30px] shrink-0 w-[112px]">
      <div aria-hidden="true" className="absolute border border-[#181e4b] border-solid inset-0 pointer-events-none rounded-[30px]" />
      <div className="flex flex-col font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#181e4b] text-[16px] text-nowrap tracking-[-0.48px]">
        <p className="leading-[1.5] whitespace-pre">{`Book  Now`}</p>
      </div>
    </div>
  );
}

function Frame5({ onClick }: { onClick?: () => void }) {
  return (
    <button onClick={onClick} className="bg-white box-border content-stretch flex gap-[10px] items-center justify-center p-[10px] relative rounded-[30px] shrink-0 w-[115px] cursor-pointer hover:bg-gray-50 transition-colors">
      <div aria-hidden="true" className="absolute border border-[#181e4b] border-solid inset-0 pointer-events-none rounded-[30px]" />
      <div className="flex flex-col font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#181e4b] text-[16px] text-nowrap tracking-[-0.48px]">
        <p className="leading-[1.5] whitespace-pre">Learn More</p>
      </div>
    </button>
  );
}

function Frame6() {
  return (
    <div className="bg-white box-border content-stretch flex gap-[10px] items-center justify-center p-[10px] relative rounded-[30px] shrink-0">
      <div aria-hidden="true" className="absolute border border-[#181e4b] border-solid inset-0 pointer-events-none rounded-[30px]" />
      <div className="flex flex-col font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#181e4b] text-[20px] text-nowrap tracking-[-0.6px]">
        <p className="leading-[1.5] whitespace-pre">Taste of Tanzania</p>
      </div>
    </div>
  );
}

function Frame7() {
  return (
    <div className="bg-white box-border content-stretch flex gap-[10px] items-center justify-center p-[10px] relative rounded-[30px] shrink-0 w-[112px]">
      <div aria-hidden="true" className="absolute border border-[#181e4b] border-solid inset-0 pointer-events-none rounded-[30px]" />
      <div className="flex flex-col font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#181e4b] text-[16px] text-nowrap tracking-[-0.48px]">
        <p className="leading-[1.5] whitespace-pre">{`Book  Now`}</p>
      </div>
    </div>
  );
}

function Frame8({ onClick }: { onClick?: () => void }) {
  return (
    <button onClick={onClick} className="bg-white box-border content-stretch flex gap-[10px] items-center justify-center p-[10px] relative rounded-[30px] shrink-0 w-[115px] cursor-pointer hover:bg-gray-50 transition-colors">
      <div aria-hidden="true" className="absolute border border-[#181e4b] border-solid inset-0 pointer-events-none rounded-[30px]" />
      <div className="flex flex-col font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#181e4b] text-[16px] text-nowrap tracking-[-0.48px]">
        <p className="leading-[1.5] whitespace-pre">Learn More</p>
      </div>
    </button>
  );
}

// First row - Wrapper for Frame7539 with proper positioning
function Frame10({ onLearnMore }: { onLearnMore: (tourId: string) => void }) {
  return (
    <div className="absolute content-stretch flex gap-[30px] items-start left-1/2 -translate-x-1/2 top-[280px]">
      <Frame7539 />
    </div>
  );
}

function Frame9() {
  return (
    <div className="bg-white box-border content-stretch flex gap-[10px] items-center justify-center p-[10px] relative rounded-[30px] shrink-0">
      <div aria-hidden="true" className="absolute border border-[#181e4b] border-solid inset-0 pointer-events-none rounded-[30px]" />
      <div className="flex flex-col font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#181e4b] text-[20px] text-nowrap tracking-[-0.6px]">
        <p className="leading-[1.5] whitespace-pre">Taste of Tanzania</p>
      </div>
    </div>
  );
}

function Frame12() {
  return (
    <div className="bg-white box-border content-stretch flex gap-[10px] items-center justify-center p-[10px] relative rounded-[30px] shrink-0 w-[112px]">
      <div aria-hidden="true" className="absolute border border-[#181e4b] border-solid inset-0 pointer-events-none rounded-[30px]" />
      <div className="flex flex-col font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#181e4b] text-[16px] text-nowrap tracking-[-0.48px]">
        <p className="leading-[1.5] whitespace-pre">{`Book  Now`}</p>
      </div>
    </div>
  );
}

function Frame13({ onClick }: { onClick?: () => void }) {
  return (
    <button onClick={onClick} className="bg-white box-border content-stretch flex gap-[10px] items-center justify-center p-[10px] relative rounded-[30px] shrink-0 w-[115px] cursor-pointer hover:bg-gray-50 transition-colors">
      <div aria-hidden="true" className="absolute border border-[#181e4b] border-solid inset-0 pointer-events-none rounded-[30px]" />
      <div className="flex flex-col font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#181e4b] text-[16px] text-nowrap tracking-[-0.48px]">
        <p className="leading-[1.5] whitespace-pre">Learn More</p>
      </div>
    </button>
  );
}

function Frame16() {
  return (
    <div className="bg-white box-border content-stretch flex gap-[10px] items-center justify-center p-[10px] relative rounded-[30px] shrink-0">
      <div aria-hidden="true" className="absolute border border-[#181e4b] border-solid inset-0 pointer-events-none rounded-[30px]" />
      <div className="flex flex-col font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#181e4b] text-[20px] text-nowrap tracking-[-0.6px]">
        <p className="leading-[1.5] whitespace-pre">Taste of Tanzania</p>
      </div>
    </div>
  );
}

function Frame17() {
  return (
    <div className="bg-white box-border content-stretch flex gap-[10px] items-center justify-center p-[10px] relative rounded-[30px] shrink-0 w-[112px]">
      <div aria-hidden="true" className="absolute border border-[#181e4b] border-solid inset-0 pointer-events-none rounded-[30px]" />
      <div className="flex flex-col font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#181e4b] text-[16px] text-nowrap tracking-[-0.48px]">
        <p className="leading-[1.5] whitespace-pre">{`Book  Now`}</p>
      </div>
    </div>
  );
}

function Frame18({ onClick }: { onClick?: () => void }) {
  return (
    <button onClick={onClick} className="bg-white box-border content-stretch flex gap-[10px] items-center justify-center p-[10px] relative rounded-[30px] shrink-0 w-[115px] cursor-pointer hover:bg-gray-50 transition-colors">
      <div aria-hidden="true" className="absolute border border-[#181e4b] border-solid inset-0 pointer-events-none rounded-[30px]" />
      <div className="flex flex-col font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#181e4b] text-[16px] text-nowrap tracking-[-0.48px]">
        <p className="leading-[1.5] whitespace-pre">Learn More</p>
      </div>
    </button>
  );
}

function Frame19() {
  return (
    <div className="bg-white box-border content-stretch flex gap-[10px] items-center justify-center p-[10px] relative rounded-[30px] shrink-0">
      <div aria-hidden="true" className="absolute border border-[#181e4b] border-solid inset-0 pointer-events-none rounded-[30px]" />
      <div className="flex flex-col font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#181e4b] text-[20px] text-nowrap tracking-[-0.6px]">
        <p className="leading-[1.5] whitespace-pre">Taste of Tanzania</p>
      </div>
    </div>
  );
}

function Frame22() {
  return (
    <div className="bg-white box-border content-stretch flex gap-[10px] items-center justify-center p-[10px] relative rounded-[30px] shrink-0 w-[112px]">
      <div aria-hidden="true" className="absolute border border-[#181e4b] border-solid inset-0 pointer-events-none rounded-[30px]" />
      <div className="flex flex-col font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#181e4b] text-[16px] text-nowrap tracking-[-0.48px]">
        <p className="leading-[1.5] whitespace-pre">{`Book  Now`}</p>
      </div>
    </div>
  );
}

function Frame23({ onClick }: { onClick?: () => void }) {
  return (
    <button onClick={onClick} className="bg-white box-border content-stretch flex gap-[10px] items-center justify-center p-[10px] relative rounded-[30px] shrink-0 w-[115px] cursor-pointer hover:bg-gray-50 transition-colors">
      <div aria-hidden="true" className="absolute border border-[#181e4b] border-solid inset-0 pointer-events-none rounded-[30px]" />
      <div className="flex flex-col font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#181e4b] text-[16px] text-nowrap tracking-[-0.48px]">
        <p className="leading-[1.5] whitespace-pre">Learn More</p>
      </div>
    </button>
  );
}

function Frame24() {
  return (
    <div className="bg-white box-border content-stretch flex gap-[10px] items-center justify-center p-[10px] relative rounded-[30px] shrink-0">
      <div aria-hidden="true" className="absolute border border-[#181e4b] border-solid inset-0 pointer-events-none rounded-[30px]" />
      <div className="flex flex-col font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#181e4b] text-[20px] text-nowrap tracking-[-0.6px]">
        <p className="leading-[1.5] whitespace-pre">Taste of Tanzania</p>
      </div>
    </div>
  );
}

function Frame25() {
  return (
    <div className="bg-white box-border content-stretch flex gap-[10px] items-center justify-center p-[10px] relative rounded-[30px] shrink-0 w-[112px]">
      <div aria-hidden="true" className="absolute border border-[#181e4b] border-solid inset-0 pointer-events-none rounded-[30px]" />
      <div className="flex flex-col font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#181e4b] text-[16px] text-nowrap tracking-[-0.48px]">
        <p className="leading-[1.5] whitespace-pre">{`Book  Now`}</p>
      </div>
    </div>
  );
}

function Frame26({ onClick }: { onClick?: () => void }) {
  return (
    <button onClick={onClick} className="bg-white box-border content-stretch flex gap-[10px] items-center justify-center p-[10px] relative rounded-[30px] shrink-0 w-[115px] cursor-pointer hover:bg-gray-50 transition-colors">
      <div aria-hidden="true" className="absolute border border-[#181e4b] border-solid inset-0 pointer-events-none rounded-[30px]" />
      <div className="flex flex-col font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#181e4b] text-[16px] text-nowrap tracking-[-0.48px]">
        <p className="leading-[1.5] whitespace-pre">Learn More</p>
      </div>
    </button>
  );
}

// Second row - Wrapper for Frame7540 with proper positioning
function Frame11Wrapper() {
  return (
    <div className="absolute content-stretch flex gap-[30px] items-start left-1/2 -translate-x-1/2 top-[800px]">
      <Frame7540 />
    </div>
  );
}

// Third row of tour cards - imported from Figma
function Frame27() {
  return (
    <div className="absolute content-stretch flex gap-[30px] items-start left-1/2 -translate-x-1/2 top-[1320px]">
      <div className="box-border content-stretch flex flex-col gap-[76px] h-[462px] items-start overflow-clip pb-[24px] pt-[35px] px-[20px] relative rounded-[10px] shrink-0 w-[304px]" data-name="tour card">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[10px] size-full" src={imgTourCard} />
        <div className="bg-white box-border content-stretch flex gap-[10px] items-center justify-center p-[10px] relative rounded-[30px] shrink-0">
          <div aria-hidden="true" className="absolute border border-[#181e4b] border-solid inset-0 pointer-events-none rounded-[30px]" />
          <div className="flex flex-col font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#181e4b] text-[20px] text-nowrap tracking-[-0.6px]">
            <p className="leading-[1.5] whitespace-pre">Zanzibar Beach</p>
          </div>
        </div>
        <div className="h-[100px] shrink-0 w-[224px]" data-name="Car" />
        <div className="content-stretch flex gap-[26px] h-[125px] items-center relative shrink-0 w-[280px]">
          <div className="bg-white box-border content-stretch flex gap-[10px] items-center justify-center p-[10px] relative rounded-[30px] shrink-0 w-[112px]">
            <div aria-hidden="true" className="absolute border border-[#181e4b] border-solid inset-0 pointer-events-none rounded-[30px]" />
            <div className="flex flex-col font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#181e4b] text-[16px] text-nowrap tracking-[-0.48px]">
              <p className="leading-[1.5] whitespace-pre">{`Book  Now`}</p>
            </div>
          </div>
          <div className="bg-white box-border content-stretch flex gap-[10px] items-center justify-center p-[10px] relative rounded-[30px] shrink-0 w-[115px]">
            <div aria-hidden="true" className="absolute border border-[#181e4b] border-solid inset-0 pointer-events-none rounded-[30px]" />
            <div className="flex flex-col font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#181e4b] text-[16px] text-nowrap tracking-[-0.48px]">
              <p className="leading-[1.5] whitespace-pre">Learn More</p>
            </div>
          </div>
        </div>
      </div>
      <div className="box-border content-stretch flex flex-col gap-[76px] h-[462px] items-start overflow-clip pb-[24px] pt-[35px] px-[20px] relative rounded-[10px] shrink-0 w-[304px]" data-name="tour card">
        <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[10px]">
          <img alt="" className="absolute h-full left-[-2.52%] max-w-none top-[0.49%] w-[113.98%]" src={imgTourCard1} />
        </div>
        <div className="bg-white box-border content-stretch flex gap-[10px] items-center justify-center p-[10px] relative rounded-[30px] shrink-0">
          <div aria-hidden="true" className="absolute border border-[#181e4b] border-solid inset-0 pointer-events-none rounded-[30px]" />
          <div className="flex flex-col font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#181e4b] text-[20px] text-nowrap tracking-[-0.6px]">
            <p className="leading-[1.5] whitespace-pre">Mt. Kilimanjaro Trek</p>
          </div>
        </div>
        <div className="h-[100px] shrink-0 w-[224px]" data-name="Car" />
        <div className="content-stretch flex gap-[26px] h-[125px] items-center relative shrink-0 w-[280px]">
          <div className="bg-white box-border content-stretch flex gap-[10px] items-center justify-center p-[10px] relative rounded-[30px] shrink-0 w-[112px]">
            <div aria-hidden="true" className="absolute border border-[#181e4b] border-solid inset-0 pointer-events-none rounded-[30px]" />
            <div className="flex flex-col font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#181e4b] text-[16px] text-nowrap tracking-[-0.48px]">
              <p className="leading-[1.5] whitespace-pre">{`Book  Now`}</p>
            </div>
          </div>
          <div className="bg-white box-border content-stretch flex gap-[10px] items-center justify-center p-[10px] relative rounded-[30px] shrink-0 w-[115px]">
            <div aria-hidden="true" className="absolute border border-[#181e4b] border-solid inset-0 pointer-events-none rounded-[30px]" />
            <div className="flex flex-col font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#181e4b] text-[16px] text-nowrap tracking-[-0.48px]">
              <p className="leading-[1.5] whitespace-pre">Learn More</p>
            </div>
          </div>
        </div>
      </div>
      <div className="box-border content-stretch flex flex-col gap-[76px] h-[462px] items-start overflow-clip pb-[24px] pt-[35px] px-[20px] relative rounded-[10px] shrink-0 w-[304px]" data-name="tour card">
        <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[10px]">
          <img alt="" className="absolute h-full left-[-94.49%] max-w-none top-[0.49%] w-[227.85%]" src={imgTourCard2} />
        </div>
        <div className="bg-white box-border content-stretch flex gap-[10px] items-center justify-center p-[10px] relative rounded-[30px] shrink-0">
          <div aria-hidden="true" className="absolute border border-[#181e4b] border-solid inset-0 pointer-events-none rounded-[30px]" />
          <div className="flex flex-col font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#181e4b] text-[20px] text-nowrap tracking-[-0.6px]">
            <p className="leading-[1.5] whitespace-pre">Birds of Tanzania</p>
          </div>
        </div>
        <div className="h-[100px] shrink-0 w-[224px]" data-name="Car" />
        <div className="content-stretch flex gap-[26px] h-[125px] items-center relative shrink-0 w-[280px]">
          <div className="bg-white box-border content-stretch flex gap-[10px] items-center justify-center p-[10px] relative rounded-[30px] shrink-0 w-[112px]">
            <div aria-hidden="true" className="absolute border border-[#181e4b] border-solid inset-0 pointer-events-none rounded-[30px]" />
            <div className="flex flex-col font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#181e4b] text-[16px] text-nowrap tracking-[-0.48px]">
              <p className="leading-[1.5] whitespace-pre">{`Book  Now`}</p>
            </div>
          </div>
          <div className="bg-white box-border content-stretch flex gap-[10px] items-center justify-center p-[10px] relative rounded-[30px] shrink-0 w-[115px]">
            <div aria-hidden="true" className="absolute border border-[#181e4b] border-solid inset-0 pointer-events-none rounded-[30px]" />
            <div className="flex flex-col font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#181e4b] text-[16px] text-nowrap tracking-[-0.48px]">
              <p className="leading-[1.5] whitespace-pre">Learn More</p>
            </div>
          </div>
        </div>
      </div>
      <div className="box-border content-stretch flex flex-col gap-[76px] h-[462px] items-start overflow-clip pb-[24px] pt-[35px] px-[20px] relative rounded-[10px] shrink-0 w-[304px]" data-name="tour card">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[10px] size-full" src={imgTanzaniaCulture} />
        <div className="bg-white box-border content-stretch flex gap-[10px] items-center justify-center p-[10px] relative rounded-[30px] shrink-0">
          <div aria-hidden="true" className="absolute border border-[#181e4b] border-solid inset-0 pointer-events-none rounded-[30px]" />
          <div className="flex flex-col font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#181e4b] text-[20px] text-nowrap tracking-[-0.6px]">
            <p className="leading-[1.5] whitespace-pre">Tanzania Culture</p>
          </div>
        </div>
        <div className="h-[100px] shrink-0 w-[224px]" data-name="Car" />
        <div className="content-stretch flex gap-[26px] h-[125px] items-center relative shrink-0 w-[280px]">
          <div className="bg-white box-border content-stretch flex gap-[10px] items-center justify-center p-[10px] relative rounded-[30px] shrink-0 w-[112px]">
            <div aria-hidden="true" className="absolute border border-[#181e4b] border-solid inset-0 pointer-events-none rounded-[30px]" />
            <div className="flex flex-col font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#181e4b] text-[16px] text-nowrap tracking-[-0.48px]">
              <p className="leading-[1.5] whitespace-pre">{`Book  Now`}</p>
            </div>
          </div>
          <div className="bg-white box-border content-stretch flex gap-[10px] items-center justify-center p-[10px] relative rounded-[30px] shrink-0 w-[115px]">
            <div aria-hidden="true" className="absolute border border-[#181e4b] border-solid inset-0 pointer-events-none rounded-[30px]" />
            <div className="flex flex-col font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#181e4b] text-[16px] text-nowrap tracking-[-0.48px]">
              <p className="leading-[1.5] whitespace-pre">Learn More</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Section() {
  const [selectedTour, setSelectedTour] = useState<typeof tourData[0] | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleLearnMore = (tourId: string) => {
    const tour = tourData.find(t => t.id === tourId);
    if (tour) {
      setSelectedTour(tour);
      setIsModalOpen(true);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedTour(null), 300);
  };

  return (
    <div className="bg-gradient-to-b from-[#97756e] relative size-full to-[#ffffff] to-[41.827%]" data-name="Section">
      <div className="absolute box-border content-stretch flex flex-col gap-[8px] items-center leading-[0] left-1/2 -translate-x-1/2 pb-0 pt-[20px] px-0 text-white text-center top-[80px]" data-name="Heading" style={{ textShadow: '0 0 20px rgba(255,255,255,0.8)' }}>
        <div className="flex flex-col font-['Volkhov:Regular',sans-serif] justify-center not-italic relative shrink-0 text-[48px] tracking-[-0.96px]">
          <p className="leading-[1.5]">Our Tour Packages</p>
        </div>
      </div>
      <Frame15 />
      <Frame10 onLearnMore={handleLearnMore} />
      <Frame11Wrapper />
      <Frame27 />
      <Footer className="absolute bg-gray-200 h-[264px] left-0 overflow-clip top-[2457px] w-[1512px]" />
      
      <TourDetailModal 
        isOpen={isModalOpen}
        onClose={closeModal}
        tour={selectedTour}
      />
    </div>
  );
}