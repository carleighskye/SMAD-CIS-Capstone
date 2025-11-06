import svgPaths from "./svg-gvs55kgnid";
import imgRectangle17 from "figma:asset/bdc4e9e798bb7e15ae87fe31c13c5b3cc6d31461.png";
import imgImage33 from "figma:asset/0936a74669c796b13d6446c8177e79c2a2249ca6.png";
import { imgImage32 } from "./svg-kw1y1";

function Group19() {
  return (
    <div className="absolute h-[488.155px] left-[916.45px] top-[25.27px] w-[470.863px]">
      <div className="absolute inset-[-40.87%_-42.37%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 870 888">
          <g id="Group 589" opacity="0.4">
            <g filter="url(#filter0_f_7_6904)" id="Ellipse 8" opacity="0.8">
              <ellipse cx="434.95" cy="443.596" fill="var(--fill-0, #59B1E6)" rx="235.432" ry="244.077" />
            </g>
          </g>
          <defs>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="887.191" id="filter0_f_7_6904" width="869.9" x="0" y="0">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
              <feGaussianBlur result="effect1_foregroundBlur_7_6904" stdDeviation="99.7591" />
            </filter>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function Group() {
  return (
    <div className="absolute inset-[0.01%_0.17%_-0.01%_0.17%]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19 19">
        <g id="Group">
          <path d={svgPaths.p19f9a400} fill="var(--fill-0, #84829A)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute contents inset-[0.01%_0.17%_-0.01%_0.17%]" data-name="Group">
      <Group />
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute inset-[16.42%_4.79%_7.43%_17.66%]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 15">
        <g id="Group">
          <path d={svgPaths.p2e8a0f00} fill="var(--fill-0, #84829A)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group6() {
  return (
    <div className="absolute contents inset-[16.42%_4.79%_7.43%_17.66%]" data-name="Group">
      <Group2 />
    </div>
  );
}

function Leaf1() {
  return (
    <div className="absolute inset-[33.34%_82.01%_27.77%_7.91%] overflow-clip" data-name="leaf 1">
      <Group1 />
      <Group6 />
    </div>
  );
}

function Leaf() {
  return (
    <div className="absolute bottom-0 contents left-0 right-[74.1%] top-0" data-name="LEAF">
      <div className="absolute bottom-0 left-0 right-[74.1%] top-0">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 48 48">
          <circle cx="23.9422" cy="23.9422" fill="var(--fill-0, #F5F5F5)" id="Ellipse 4" r="23.9422" />
        </svg>
      </div>
      <Leaf1 />
    </div>
  );
}

function Send() {
  return (
    <div className="absolute bottom-0 left-[74.1%] right-0 top-0" data-name="send">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 48 48">
        <g id="send">
          <circle cx="23.9422" cy="23.9422" fill="var(--fill-0, #F5F5F5)" id="Ellipse 3" r="23.9422" />
          <g id="send 2">
            <path d={svgPaths.p200b1a80} fill="var(--fill-0, #84829A)" id="Vector" />
            <path d={svgPaths.p12c87680} fill="var(--fill-0, #84829A)" id="Vector_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Group8() {
  return (
    <div className="absolute inset-[0.01%_-0.01%_-0.01%_0.01%]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19 19">
        <g id="Group">
          <path d={svgPaths.p32f26400} fill="var(--fill-0, #84829A)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group9() {
  return (
    <div className="absolute contents inset-[0.01%_-0.01%_-0.01%_0.01%]" data-name="Group">
      <Group8 />
    </div>
  );
}

function Map() {
  return (
    <div className="absolute inset-[30.56%_43.88%_30.55%_46.04%] overflow-clip" data-name="map 1">
      <Group9 />
    </div>
  );
}

function MapIcon() {
  return (
    <div className="absolute bottom-0 contents left-[38.85%] right-[35.25%] top-0" data-name="map icon">
      <div className="absolute bottom-0 left-[38.85%] right-[35.25%] top-0">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 48 48">
          <circle cx="23.9422" cy="23.9422" fill="var(--fill-0, #F5F5F5)" id="Ellipse 4" r="23.9422" />
        </svg>
      </div>
      <Map />
    </div>
  );
}

function Options() {
  return (
    <div className="absolute h-[47.884px] left-[873.89px] top-[480.17px] w-[184.887px]" data-name="OPTIONS">
      <Leaf />
      <Send />
      <MapIcon />
    </div>
  );
}

function Group10() {
  return (
    <div className="relative size-[21.282px]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 22">
        <g id="Group">
          <path d={svgPaths.p3e4caf70} fill="var(--fill-0, #84829A)" id="Vector" />
          <path d={svgPaths.pf6a6a80} fill="var(--fill-0, #84829A)" id="Vector_2" />
          <path d={svgPaths.p2750b280} fill="var(--fill-0, #84829A)" id="Vector_3" />
          <path d={svgPaths.p3a619a00} fill="var(--fill-0, #84829A)" id="Vector_4" />
          <path d={svgPaths.p3c3f93a0} fill="var(--fill-0, #84829A)" id="Vector_5" />
          <path d={svgPaths.pabb4e00} fill="var(--fill-0, #84829A)" id="Vector_6" />
          <path d={svgPaths.p22e7ea30} fill="var(--fill-0, #84829A)" id="Vector_7" />
          <path d={svgPaths.p16ddcd00} fill="var(--fill-0, #84829A)" id="Vector_8" />
          <path d={svgPaths.p38f10f80} fill="var(--fill-0, #84829A)" id="Vector_9" />
          <path d={svgPaths.p24d2a500} fill="var(--fill-0, #84829A)" id="Vector_10" />
          <path d={svgPaths.pc66dfc0} fill="var(--fill-0, #84829A)" id="Vector_11" />
          <path d={svgPaths.p28f81200} fill="var(--fill-0, #84829A)" id="Vector_12" />
          <path d={svgPaths.p3d830f00} fill="var(--fill-0, #84829A)" id="Vector_13" />
        </g>
      </svg>
    </div>
  );
}

function Group13() {
  return (
    <div className="absolute contents left-[869.9px] top-[566.63px]" data-name="Group">
      <div className="absolute flex items-center justify-center left-[869.9px] size-[21.282px] top-[566.63px]">
        <div className="flex-none rotate-[180deg] scale-y-[-100%]">
          <Group10 />
        </div>
      </div>
    </div>
  );
}

function Group14() {
  return (
    <div className="absolute contents left-[869.9px] top-[566.63px]" data-name="Group">
      <Group13 />
    </div>
  );
}

function Building() {
  return (
    <div className="absolute contents left-[869.9px] top-[566.63px]" data-name="building 1">
      <Group14 />
    </div>
  );
}

function Group5() {
  return (
    <div className="absolute contents left-[836.65px] top-[103.75px]">
      <div className="absolute bg-white h-[532.049px] left-[836.65px] rounded-[34.583px] shadow-[0px_133.012px_106.41px_0px_rgba(0,0,0,0.02),0px_86.212px_62.319px_0px_rgba(0,0,0,0.02),0px_51.234px_33.893px_0px_rgba(0,0,0,0.01),0px_26.602px_17.292px_0px_rgba(0,0,0,0.01),0px_10.838px_8.67px_0px_rgba(0,0,0,0.01),0px_2.463px_4.187px_0px_rgba(0,0,0,0)] top-[103.75px] w-[492.145px]" />
      <Options />
      <Building />
      <p className="absolute font-['Poppins:Medium',sans-serif] leading-[1.245] left-[911.13px] not-italic text-[#84829a] text-[21.282px] text-nowrap top-[567.96px] tracking-[-0.4256px] whitespace-pre">24 people going</p>
      <p className="absolute font-['Poppins:Medium',sans-serif] leading-[1.245] left-[869.9px] not-italic text-[#84829a] text-[21.282px] text-nowrap top-[425.64px] tracking-[-0.1064px] whitespace-pre">14-29 June</p>
      <p className="absolute font-['Poppins:Medium',sans-serif] leading-[1.245] left-[1008.23px] not-italic text-[#84829a] text-[21.282px] text-nowrap top-[425.64px] tracking-[-0.1064px] whitespace-pre">by Robbin joseph</p>
      <div className="absolute h-[214.15px] left-[869.9px] rounded-[31.923px] top-[130.35px] w-[426.969px]">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[31.923px] size-full" src={imgRectangle17} />
      </div>
      <p className="absolute font-['Poppins:Medium',sans-serif] leading-[1.245] left-[869.9px] not-italic text-[#080809] text-[23.942px] text-nowrap top-[379.08px] tracking-[0.3591px] whitespace-pre">Trip To Greece</p>
      <div className="absolute flex h-[calc(1px*((var(--transform-inner-width)*1)+(var(--transform-inner-height)*0)))] items-center justify-center left-[990.94px] top-[426.97px] w-[calc(1px*((var(--transform-inner-height)*1)+(var(--transform-inner-width)*0)))]" style={{ "--transform-inner-width": "21.28125", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[90deg]">
          <div className="h-0 relative w-[21.282px]">
            <div className="absolute bottom-0 left-0 right-0 top-[-1.33px]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 2">
                <line id="Line 3" stroke="var(--stroke-0, #84829A)" strokeWidth="1.33012" x2="21.2819" y1="0.665061" y2="0.665061" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function MaskGroup() {
  return (
    <div className="absolute contents left-[1158.54px] top-[418.99px]" data-name="Mask Group">
      <div className="absolute h-[87.788px] left-[1141.24px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[17.292px_1.33px] mask-size-[66.506px_66.506px] top-[417.66px] w-[98.429px]" data-name="image 32" style={{ maskImage: `url('${imgImage32}')` }}>
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage33} />
      </div>
    </div>
  );
}

function Group3() {
  return (
    <div className="absolute contents left-[1241px] top-[530.72px]">
      <div className="absolute bg-neutral-100 h-[6.651px] left-[1241px] rounded-[39.904px] top-[530.72px] w-[207.499px]" />
      <div className="absolute bg-[#8a79df] h-[6.651px] left-[1241px] rounded-[39.904px] top-[530.72px] w-[97.099px]" />
    </div>
  );
}

function Group4() {
  return (
    <div className="absolute contents left-[1131.93px] top-[395.04px]">
      <div className="absolute bg-white h-[171.586px] left-[1131.93px] rounded-[23.942px] shadow-[0px_133.012px_106.41px_0px_rgba(0,0,0,0.02),0px_86.212px_62.319px_0px_rgba(0,0,0,0.02),0px_51.234px_33.893px_0px_rgba(0,0,0,0.01),0px_26.602px_17.292px_0px_rgba(0,0,0,0.01),0px_10.838px_8.67px_0px_rgba(0,0,0,0.01),0px_2.463px_4.187px_0px_rgba(0,0,0,0)] top-[395.04px] w-[349.822px]" />
      <p className="absolute font-['Poppins:Medium',sans-serif] leading-[1.245] left-[1239.67px] not-italic text-[#080809] text-[23.942px] text-nowrap top-[446.92px] tracking-[-0.3591px] whitespace-pre">Trip to rome</p>
      <p className="absolute font-['Gilroy-ExtraBold:☞',sans-serif] font-['Poppins:Medium',sans-serif] leading-[1.245] left-[1238.34px] not-italic text-[#080809] text-[0px] text-[18.622px] text-nowrap top-[494.8px] tracking-[-1.0242px] whitespace-pre">
        <span className="text-[#8a79df]">40%</span>
        <span>{` completed`}</span>
      </p>
      <div className="absolute left-[1158.54px] size-[66.506px] top-[418.99px]">
        <div className="absolute bottom-[-30%] left-[-10%] right-[-14%] top-0">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 83 87">
            <g filter="url(#filter0_d_7_6872)" id="Ellipse 6" opacity="0.3">
              <circle cx="39.9037" cy="33.253" fill="var(--fill-0, white)" r="33.253" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="86.4579" id="filter0_d_7_6872" width="82.4675" x="-1.19209e-07" y="0">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                <feOffset dx="1.33012" dy="11.9711" />
                <feGaussianBlur stdDeviation="3.99036" />
                <feColorMatrix type="matrix" values="0 0 0 0 0.4125 0 0 0 0 0.407344 0 0 0 0 0.407344 0 0 0 0.13 0" />
                <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_7_6872" />
                <feBlend in="SourceGraphic" in2="effect1_dropShadow_7_6872" mode="normal" result="shape" />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
      <MaskGroup />
      <p className="absolute font-['Poppins:Medium',sans-serif] leading-[1.245] left-[1241px] not-italic text-[#84829a] text-[18.622px] text-nowrap top-[416.33px] tracking-[-0.6518px] whitespace-pre">Ongoing</p>
      <Group3 />
    </div>
  );
}

function Group15() {
  return (
    <div className="absolute h-[24.72px] left-[1268.94px] top-[568.9px] w-[26.602px]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 27 25">
        <g id="Group">
          <path d={svgPaths.p3a871380} fill="var(--fill-0, #4152CA)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group16() {
  return (
    <div className="absolute contents left-[1268.94px] top-[568.9px]" data-name="Group">
      <Group15 />
    </div>
  );
}

function Heart() {
  return (
    <div className="absolute contents left-[1268.94px] top-[568.9px]" data-name="heart (6) 1">
      <Group16 />
    </div>
  );
}

function Image() {
  return (
    <div className="absolute contents left-[836.65px] top-[103.75px]" data-name="Image">
      <Group5 />
      <Group4 />
      <Heart />
    </div>
  );
}

function Image1() {
  return (
    <div className="absolute contents left-[836.65px] top-[25.27px]" data-name="Image">
      <Group19 />
      <Image />
    </div>
  );
}

function Group17() {
  return (
    <div className="relative size-[29.263px]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 30 30">
        <g id="Group">
          <path d={svgPaths.p677fff0} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group18() {
  return (
    <div className="absolute contents left-[17.29px] top-[292.63px]" data-name="Group">
      <div className="absolute flex items-center justify-center left-[17.29px] size-[29.263px] top-[292.63px]">
        <div className="flex-none rotate-[180deg] scale-y-[-100%]">
          <Group17 />
        </div>
      </div>
    </div>
  );
}

function Selection() {
  return (
    <div className="absolute contents left-[17.29px] top-[292.63px]" data-name="selection 1">
      <Group18 />
    </div>
  );
}

function Group7() {
  return (
    <div className="absolute contents left-0 top-[275.34px]">
      <div className="absolute bg-[#f0bb1f] h-[63.846px] left-0 rounded-[17.292px] top-[275.34px] w-[62.516px]" />
      <Selection />
    </div>
  );
}

function Value() {
  return (
    <div className="absolute contents left-0 top-[270.02px]" data-name="Value">
      <Group7 />
      <p className="absolute font-['Poppins:Bold',sans-serif] leading-[1.245] left-[90.45px] not-italic text-[#5e6282] text-[21.282px] text-nowrap top-[270.02px] whitespace-pre">Choose Destination</p>
      <div className="absolute font-['Poppins:Regular',sans-serif] leading-[1.245] left-[90.45px] not-italic text-[#5e6282] text-[21.282px] text-nowrap top-[301.94px] whitespace-pre">
        <p className="mb-0">{`Lorem ipsum dolor sit amet, consectetur `}</p>
        <p>{`adipiscing elit. Urna, tortor tempus. `}</p>
      </div>
    </div>
  );
}

function TaxiCarCabVehicleTransport() {
  return (
    <div className="absolute h-[24.94px] left-[16.96px] top-[594.07px] w-[29.928px]" data-name="Taxi Car Cab Vehicle Transport">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 30 25">
        <g id="Taxi Car Cab Vehicle Transport">
          <path d={svgPaths.pf17c500} fill="var(--fill-0, white)" id="Vector" />
          <path d={svgPaths.p22e99c80} fill="var(--fill-0, white)" id="Vector_2" />
          <path d={svgPaths.p3b8afa00} fill="var(--fill-0, white)" id="Vector_3" />
          <path d={svgPaths.p1443a270} fill="var(--fill-0, white)" id="Vector_4" />
          <path d={svgPaths.pc827700} fill="var(--fill-0, white)" id="Vector_5" />
          <path d={svgPaths.p2ea2b00} fill="var(--fill-0, white)" id="Vector_6" />
        </g>
      </svg>
    </div>
  );
}

function Taxi() {
  return (
    <div className="absolute contents left-[16.96px] top-[594.07px]" data-name="taxi 1">
      <TaxiCarCabVehicleTransport />
    </div>
  );
}

function Group11() {
  return (
    <div className="absolute contents left-0 top-[573.28px]">
      <div className="absolute bg-[#006380] h-[63.846px] left-0 rounded-[17.292px] top-[573.28px] w-[62.516px]" />
      <Taxi />
    </div>
  );
}

function Value1() {
  return (
    <div className="absolute contents left-0 top-[567.96px]" data-name="Value">
      <Group11 />
      <div className="absolute font-['Poppins:Regular',sans-serif] leading-[1.245] left-[90.45px] not-italic text-[#5e6282] text-[21.282px] text-nowrap top-[601.22px] whitespace-pre">
        <p className="mb-0">{`Lorem ipsum dolor sit amet, consectetur `}</p>
        <p>{`adipiscing elit. Urna, tortor tempus. `}</p>
      </div>
      <p className="absolute font-['Poppins:Bold',sans-serif] leading-[1.245] left-[90.45px] not-italic text-[#5e6282] text-[21.282px] text-nowrap top-[567.96px] whitespace-pre">Reach Airport on Selected Date</p>
    </div>
  );
}

function WaterSport() {
  return (
    <div className="absolute h-[23.757px] left-[17.26px] top-[443.02px] w-[29.335px]" data-name="water-sport 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 30 24">
        <g id="water-sport 1">
          <path d={svgPaths.pc373700} fill="var(--fill-0, white)" id="Vector" />
          <path d={svgPaths.p56bb80} fill="var(--fill-0, white)" id="Vector_2" />
          <path d={svgPaths.p27875300} fill="var(--fill-0, white)" id="Vector_3" />
          <path d={svgPaths.p144f5980} fill="var(--fill-0, white)" id="Vector_4" />
          <path d={svgPaths.p12478ef0} fill="var(--fill-0, white)" id="Vector_5" />
          <path d={svgPaths.p235e4300} fill="var(--fill-0, white)" id="Vector_6" />
          <path d={svgPaths.p2c68fd00} fill="var(--fill-0, white)" id="Vector_7" />
          <path d={svgPaths.p17801e00} fill="var(--fill-0, white)" id="Vector_8" />
          <path d={svgPaths.p1a7f5400} fill="var(--fill-0, white)" id="Vector_9" />
        </g>
      </svg>
    </div>
  );
}

function Group12() {
  return (
    <div className="absolute contents left-0 top-[424.31px]">
      <div className="absolute bg-[#f15a2b] h-[63.846px] left-0 rounded-[17.292px] top-[424.31px] w-[62.516px]" />
      <WaterSport />
    </div>
  );
}

function Value2() {
  return (
    <div className="absolute contents left-0 top-[418.99px]" data-name="Value">
      <div className="absolute font-['Poppins:Regular',sans-serif] leading-[1.245] left-[90.45px] not-italic text-[#5e6282] text-[21.282px] text-nowrap top-[450.92px] whitespace-pre">
        <p className="mb-0">{`Lorem ipsum dolor sit amet, consectetur `}</p>
        <p>{`adipiscing elit. Urna, tortor tempus. `}</p>
      </div>
      <p className="absolute font-['Poppins:Bold',sans-serif] leading-[1.245] left-[90.45px] not-italic text-[#5e6282] text-[21.282px] text-nowrap top-[418.99px] whitespace-pre">Make Payment</p>
      <Group12 />
    </div>
  );
}

function Values() {
  return (
    <div className="absolute contents left-0 top-[270.02px]" data-name="Values">
      <Value />
      <Value1 />
      <Value2 />
    </div>
  );
}

export default function BookATrip() {
  return (
    <div className="relative size-full" data-name="Book a trip">
      <div className="absolute capitalize font-['Volkhov:Bold',sans-serif] leading-[normal] left-0 not-italic text-[#14183e] text-[66.506px] text-nowrap top-[55.87px] whitespace-pre">
        <p className="mb-0">{`Book your next trip `}</p>
        <p>in 3 easy steps</p>
      </div>
      <Image1 />
      <p className="absolute font-['Poppins:SemiBold',sans-serif] leading-[normal] left-[87.99px] not-italic text-[#5e6282] text-[23.942px] text-center text-nowrap top-0 translate-x-[-50%] whitespace-pre">Easy and Fast</p>
      <Values />
    </div>
  );
}