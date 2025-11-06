import svgPaths from "./svg-3doiybc4qz";
import imgPexelsMagdaEhlers1319515 from "figma:asset/a60b0a45e42e05dd425b3e1f547b796d3102b8a6.png";
import imgGettyImagesDiidb9NdEiuUnsplash from "figma:asset/cf324f8a55049189be141c7797b5b7a067ce70d6.png";
type Frame1Props = {
  className?: string;
  property1?: "Default" | "Variant2";
};

/**
 * @figmaAssetKey 98b97b7702a618009f7622fcd977ccca1d0d850a
 */
function Frame1({ className, property1 = "Default" }: Frame1Props) {
  if (property1 === "Variant2") {
    return (
      <div className={className} data-name="Property 1=Variant2">
        <div className="box-border content-stretch flex gap-[10px] items-start px-[30px] py-[20px] relative">
          <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#5e675d] text-[20px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
            PLAN A TRIP
          </p>
        </div>
        <div aria-hidden="true" className="absolute border border-[#5e675d] border-solid inset-0 pointer-events-none" />
      </div>
    );
  }
  return (
    <div className={className} data-name="Property 1=Default">
      <div className="box-border content-stretch flex gap-[10px] items-start px-[30px] py-[20px] relative">
        <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#f3eedf] text-[20px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
          PLAN A TRIP
        </p>
      </div>
      <div aria-hidden="true" className="absolute border border-[#f3eedf] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Frame() {
  return (
    <div className="absolute bottom-[6.94%] left-[0.7%] right-0 top-[2.08%]" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 234 71">
        <g clipPath="url(#clip0_10_7583)" id="Frame">
          <path d={svgPaths.p2a15ab00} fill="var(--fill-0, #F4F3F0)" id="Vector" />
          <path d={svgPaths.p30451900} fill="var(--fill-0, #F4F3F0)" id="Vector_2" />
          <path d={svgPaths.p1546e780} fill="var(--fill-0, #F4F3F0)" id="Vector_3" />
          <path d={svgPaths.p22934440} fill="var(--fill-0, #F4F3F0)" id="Vector_4" />
          <path d={svgPaths.p2eea7080} fill="var(--fill-0, #F4F3F0)" id="Vector_5" />
          <path d={svgPaths.p225fef80} fill="var(--fill-0, #F4F3F0)" id="Vector_6" />
          <path d={svgPaths.p3cbf25b0} fill="var(--fill-0, #F4F3F0)" id="Vector_7" />
          <path d={svgPaths.p16dbb140} fill="var(--fill-0, #F4F3F0)" id="Vector_8" />
          <path d={svgPaths.p15ee1900} fill="var(--fill-0, #F4F3F0)" id="Vector_9" />
          <path d={svgPaths.p3d3dbf00} fill="var(--fill-0, #F4F3F0)" id="Vector_10" />
          <path d={svgPaths.p263c3e00} fill="var(--fill-0, #F4F3F0)" id="Vector_11" />
          <path d={svgPaths.p226a9900} fill="var(--fill-0, #F4F3F0)" id="Vector_12" />
          <path d={svgPaths.p1ff8d1f0} fill="var(--fill-0, #F4F3F0)" id="Vector_13" />
          <path d={svgPaths.p2bec700} fill="var(--fill-0, #F4F3F0)" id="Vector_14" />
          <path d={svgPaths.p257014f0} fill="var(--fill-0, #F4F3F0)" id="Vector_15" />
        </g>
        <defs>
          <clipPath id="clip0_10_7583">
            <rect fill="white" height="70.9583" width="233.357" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame2() {
  return (
    <div className="absolute content-stretch flex gap-[53px] items-center justify-end left-[943px] top-[53px]">
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#f3eedf] text-[20px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Destinations
      </p>
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#f3eedf] text-[20px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        About Us
      </p>
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#f3eedf] text-[20px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Experience
      </p>
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#f3eedf] text-[20px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Blog
      </p>
      <Frame1 className="relative shrink-0" />
    </div>
  );
}

function NavBar() {
  return (
    <div className="absolute h-[168px] left-[-5px] overflow-clip top-0 w-[1925px]" data-name="Nav bar">
      <div className="absolute h-[78px] left-[266px] overflow-clip top-[45px] w-[235px]" data-name="Logo_Frika Safaris">
        <Frame />
      </div>
      <Frame2 />
    </div>
  );
}

function Group() {
  return (
    <div className="absolute bottom-[-107px] h-[562px] left-[-23.37px] mix-blend-overlay w-[552.369px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 553 562">
        <g id="Group 71" opacity="0.2" style={{ mixBlendMode: "overlay" }}>
          <path d={svgPaths.pc9abb00} fill="var(--fill-0, white)" id="Vector" />
          <path d={svgPaths.p10a06780} fill="var(--fill-0, white)" id="Vector_2" />
          <path d={svgPaths.p1cf58400} fill="var(--fill-0, white)" id="Vector_3" />
          <path d={svgPaths.pe357580} fill="var(--fill-0, white)" id="Vector_4" />
          <path d={svgPaths.p12e7ea80} fill="var(--fill-0, white)" id="Vector_5" />
          <path d={svgPaths.p11294880} fill="var(--fill-0, white)" id="Vector_6" />
          <path d={svgPaths.p226abbf0} fill="var(--fill-0, white)" id="Vector_7" />
          <path d={svgPaths.p2855fc00} fill="var(--fill-0, white)" id="Vector_8" />
          <path d={svgPaths.p37e89b00} fill="var(--fill-0, white)" id="Vector_9" />
          <path d={svgPaths.p337dc80} fill="var(--fill-0, white)" id="Vector_10" />
          <path d={svgPaths.p133b9a00} fill="var(--fill-0, white)" id="Vector_11" />
          <path d={svgPaths.pec24f40} fill="var(--fill-0, white)" id="Vector_12" />
          <path d={svgPaths.p113a6180} fill="var(--fill-0, white)" id="Vector_13" />
          <path d={svgPaths.p2bcc33f0} fill="var(--fill-0, white)" id="Vector_14" />
          <path d={svgPaths.p2a52c480} fill="var(--fill-0, white)" id="Vector_15" />
          <path d={svgPaths.p68f5200} fill="var(--fill-0, white)" id="Vector_16" />
          <path d={svgPaths.pecb6480} fill="var(--fill-0, white)" id="Vector_17" />
          <path d={svgPaths.p3ee3d970} fill="var(--fill-0, white)" id="Vector_18" />
          <path d={svgPaths.pe4b1b00} fill="var(--fill-0, white)" id="Vector_19" />
          <path d={svgPaths.p4878d00} fill="var(--fill-0, white)" id="Vector_20" />
          <path d={svgPaths.p20c4ab80} fill="var(--fill-0, white)" id="Vector_21" />
          <path d={svgPaths.pbe0b00} fill="var(--fill-0, white)" id="Vector_22" />
          <path d={svgPaths.p19fb0b00} fill="var(--fill-0, white)" id="Vector_23" />
          <path d={svgPaths.p2566b9c0} fill="var(--fill-0, white)" id="Vector_24" />
          <path d={svgPaths.p27a15480} fill="var(--fill-0, white)" id="Vector_25" />
          <path d={svgPaths.p37fc4c00} fill="var(--fill-0, white)" id="Vector_26" />
          <path d={svgPaths.p266a1e00} fill="var(--fill-0, white)" id="Vector_27" />
          <path d={svgPaths.p1185e400} fill="var(--fill-0, white)" id="Vector_28" />
          <path d={svgPaths.p20d12d00} fill="var(--fill-0, white)" id="Vector_29" />
          <path d={svgPaths.p3a69f200} fill="var(--fill-0, white)" id="Vector_30" />
          <path d={svgPaths.p1a1f8e00} fill="var(--fill-0, white)" id="Vector_31" />
          <path d={svgPaths.p5989080} fill="var(--fill-0, white)" id="Vector_32" />
          <path d={svgPaths.p32185800} fill="var(--fill-0, white)" id="Vector_33" />
          <path d={svgPaths.p1db02d00} fill="var(--fill-0, white)" id="Vector_34" />
          <path d={svgPaths.pfa74a80} fill="var(--fill-0, white)" id="Vector_35" />
          <path d={svgPaths.p1b6c7e00} fill="var(--fill-0, white)" id="Vector_36" />
          <path d={svgPaths.p16774600} fill="var(--fill-0, white)" id="Vector_37" />
          <path d={svgPaths.pe86c700} fill="var(--fill-0, white)" id="Vector_38" />
          <path d={svgPaths.p32ab9d80} fill="var(--fill-0, white)" id="Vector_39" />
          <path d={svgPaths.p2b7e2b80} fill="var(--fill-0, white)" id="Vector_40" />
          <path d={svgPaths.pac44b00} fill="var(--fill-0, white)" id="Vector_41" />
          <path d={svgPaths.p8ed2c00} fill="var(--fill-0, white)" id="Vector_42" />
          <path d={svgPaths.p38794c40} fill="var(--fill-0, white)" id="Vector_43" />
          <path d={svgPaths.p38cb2b80} fill="var(--fill-0, white)" id="Vector_44" />
          <path d={svgPaths.p31c03b80} fill="var(--fill-0, white)" id="Vector_45" />
          <path d={svgPaths.p3595f800} fill="var(--fill-0, white)" id="Vector_46" />
          <path d={svgPaths.pef79800} fill="var(--fill-0, white)" id="Vector_47" />
          <path d={svgPaths.p3557fa00} fill="var(--fill-0, white)" id="Vector_48" />
          <path d={svgPaths.p15093d00} fill="var(--fill-0, white)" id="Vector_49" />
          <path d={svgPaths.p102f7680} fill="var(--fill-0, white)" id="Vector_50" />
          <path d={svgPaths.p2dc9a680} fill="var(--fill-0, white)" id="Vector_51" />
          <path d={svgPaths.p2972ad00} fill="var(--fill-0, white)" id="Vector_52" />
          <path d={svgPaths.pc07b800} fill="var(--fill-0, white)" id="Vector_53" />
          <path d={svgPaths.pc957400} fill="var(--fill-0, white)" id="Vector_54" />
          <path d={svgPaths.p34841800} fill="var(--fill-0, white)" id="Vector_55" />
          <path d={svgPaths.p24494400} fill="var(--fill-0, white)" id="Vector_56" />
          <path d={svgPaths.p8a84100} fill="var(--fill-0, white)" id="Vector_57" />
          <path d={svgPaths.p1006f400} fill="var(--fill-0, white)" id="Vector_58" />
          <path d={svgPaths.p34a06040} fill="var(--fill-0, white)" id="Vector_59" />
          <path d={svgPaths.p2b486800} fill="var(--fill-0, white)" id="Vector_60" />
          <path d={svgPaths.p39a2fb00} fill="var(--fill-0, white)" id="Vector_61" />
          <path d={svgPaths.p39e92880} fill="var(--fill-0, white)" id="Vector_62" />
          <path d={svgPaths.p9318600} fill="var(--fill-0, white)" id="Vector_63" />
          <path d={svgPaths.p20beb180} fill="var(--fill-0, white)" id="Vector_64" />
          <path d={svgPaths.p35355000} fill="var(--fill-0, white)" id="Vector_65" />
          <path d={svgPaths.p265f9700} fill="var(--fill-0, white)" id="Vector_66" />
          <path d={svgPaths.p2baabc80} fill="var(--fill-0, white)" id="Vector_67" />
          <path d={svgPaths.p38d32880} fill="var(--fill-0, white)" id="Vector_68" />
          <path d={svgPaths.pd00df80} fill="var(--fill-0, white)" id="Vector_69" />
          <path d={svgPaths.ped95c00} fill="var(--fill-0, white)" id="Vector_70" />
          <path d={svgPaths.p34ef03a0} fill="var(--fill-0, white)" id="Vector_71" />
          <path d={svgPaths.p9c1510} fill="var(--fill-0, white)" id="Vector_72" />
          <path d={svgPaths.p150f800} fill="var(--fill-0, white)" id="Vector_73" />
          <path d={svgPaths.p2eca0900} fill="var(--fill-0, white)" id="Vector_74" />
          <path d={svgPaths.p22863a00} fill="var(--fill-0, white)" id="Vector_75" />
          <path d={svgPaths.p203fae00} fill="var(--fill-0, white)" id="Vector_76" />
          <path d={svgPaths.p8e56300} fill="var(--fill-0, white)" id="Vector_77" />
          <path d={svgPaths.p237cba00} fill="var(--fill-0, white)" id="Vector_78" />
          <path d={svgPaths.p1c268400} fill="var(--fill-0, white)" id="Vector_79" />
          <path d={svgPaths.p39d525f0} fill="var(--fill-0, white)" id="Vector_80" />
          <path d={svgPaths.p393a000} fill="var(--fill-0, white)" id="Vector_81" />
          <path d={svgPaths.p2d93ef80} fill="var(--fill-0, white)" id="Vector_82" />
          <path d={svgPaths.p28f27c72} fill="var(--fill-0, white)" id="Vector_83" />
          <path d={svgPaths.p27ea700} fill="var(--fill-0, white)" id="Vector_84" />
          <path d={svgPaths.p1ce54440} fill="var(--fill-0, white)" id="Vector_85" />
          <path d={svgPaths.p3e11c9f0} fill="var(--fill-0, white)" id="Vector_86" />
          <path d={svgPaths.p19114a00} fill="var(--fill-0, white)" id="Vector_87" />
          <path d={svgPaths.p209e9b00} fill="var(--fill-0, white)" id="Vector_88" />
          <path d={svgPaths.pbf65b00} fill="var(--fill-0, white)" id="Vector_89" />
          <path d={svgPaths.p1b802300} fill="var(--fill-0, white)" id="Vector_90" />
          <path d={svgPaths.p1ec59dc0} fill="var(--fill-0, white)" id="Vector_91" />
          <path d={svgPaths.p123f8800} fill="var(--fill-0, white)" id="Vector_92" />
          <path d={svgPaths.p4702100} fill="var(--fill-0, white)" id="Vector_93" />
          <path d={svgPaths.p1f603900} fill="var(--fill-0, white)" id="Vector_94" />
          <path d={svgPaths.p83a4300} fill="var(--fill-0, white)" id="Vector_95" />
          <path d={svgPaths.p2a09e580} fill="var(--fill-0, white)" id="Vector_96" />
          <path d={svgPaths.p1662f5f0} fill="var(--fill-0, white)" id="Vector_97" />
          <path d={svgPaths.p9242d00} fill="var(--fill-0, white)" id="Vector_98" />
          <path d={svgPaths.pfc3e200} fill="var(--fill-0, white)" id="Vector_99" />
          <path d={svgPaths.pf87b880} fill="var(--fill-0, white)" id="Vector_100" />
          <path d={svgPaths.p6434500} fill="var(--fill-0, white)" id="Vector_101" />
          <path d={svgPaths.pe5d7f40} fill="var(--fill-0, white)" id="Vector_102" />
          <path d={svgPaths.p68e2780} fill="var(--fill-0, white)" id="Vector_103" />
          <path d={svgPaths.p33ca3c80} fill="var(--fill-0, white)" id="Vector_104" />
          <path d={svgPaths.p12243780} fill="var(--fill-0, white)" id="Vector_105" />
          <path d={svgPaths.pbaab500} fill="var(--fill-0, white)" id="Vector_106" />
          <path d={svgPaths.p817a000} fill="var(--fill-0, white)" id="Vector_107" />
          <path d={svgPaths.pa155f00} fill="var(--fill-0, white)" id="Vector_108" />
          <path d={svgPaths.p203029f0} fill="var(--fill-0, white)" id="Vector_109" />
          <path d={svgPaths.p2eba600} fill="var(--fill-0, white)" id="Vector_110" />
          <path d={svgPaths.p3f215a80} fill="var(--fill-0, white)" id="Vector_111" />
          <path d={svgPaths.p1d02280} fill="var(--fill-0, white)" id="Vector_112" />
          <path d={svgPaths.p2f24ec00} fill="var(--fill-0, white)" id="Vector_113" />
          <path d={svgPaths.pd960800} fill="var(--fill-0, white)" id="Vector_114" />
          <path d={svgPaths.p1201bd00} fill="var(--fill-0, white)" id="Vector_115" />
          <path d={svgPaths.p15c58970} fill="var(--fill-0, white)" id="Vector_116" />
          <path d={svgPaths.p1248f700} fill="var(--fill-0, white)" id="Vector_117" />
          <path d={svgPaths.p3045b580} fill="var(--fill-0, white)" id="Vector_118" />
          <path d={svgPaths.p12b27800} fill="var(--fill-0, white)" id="Vector_119" />
          <path d={svgPaths.p9467d00} fill="var(--fill-0, white)" id="Vector_120" />
          <path d={svgPaths.p34833200} fill="var(--fill-0, white)" id="Vector_121" />
          <path d={svgPaths.p27507200} fill="var(--fill-0, white)" id="Vector_122" />
          <path d={svgPaths.p1a352c00} fill="var(--fill-0, white)" id="Vector_123" />
          <path d={svgPaths.p347e3a00} fill="var(--fill-0, white)" id="Vector_124" />
          <path d={svgPaths.p309e6a00} fill="var(--fill-0, white)" id="Vector_125" />
        </g>
      </svg>
    </div>
  );
}

function Frame5() {
  return (
    <div className="absolute h-[530px] left-[1067px] overflow-clip top-[550px] w-[606px]">
      <div className="absolute bg-[#a86747] bottom-0 h-[599px] left-0 w-[606px]" />
      <Group />
    </div>
  );
}

function Frame4() {
  return (
    <div className="absolute h-[685px] left-[869px] overflow-clip rounded-br-[26px] top-[265px] w-[531px]">
      <div className="absolute h-[685px] left-0 rounded-br-[265.5px] top-0 w-[531px]" data-name="pexels-magda-ehlers-1319515">
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-br-[265.5px]">
          <div className="absolute inset-0 overflow-hidden rounded-br-[265.5px]">
            <img alt="" className="absolute h-[116.26%] left-0 max-w-none top-[-0.32%] w-full" src={imgPexelsMagdaEhlers1319515} />
          </div>
          <div className="absolute bg-[rgba(0,0,0,0.1)] inset-0 rounded-br-[265.5px]" />
        </div>
      </div>
    </div>
  );
}

function Frame3() {
  return (
    <div className="absolute h-[443px] left-[1469px] overflow-clip rounded-tl-[50px] top-[323px] w-[330px]">
      <div className="absolute h-[442px] left-[-125px] top-0 w-[804px]" data-name="getty-images-DIIDB9ndEIU-unsplash">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgGettyImagesDiidb9NdEiuUnsplash} />
      </div>
    </div>
  );
}

export default function Banner() {
  return (
    <div className="bg-[#1a2d2f] relative size-full" data-name="Banner">
      <NavBar />
      <Frame5 />
      <Frame4 />
      <Frame3 />
      <div className="absolute font-['Aboreto:Regular',sans-serif] leading-[0] left-[261px] not-italic text-[#f4f3f0] text-[81.258px] text-nowrap top-[362px] whitespace-pre">
        <p className="leading-[normal] mb-0">THERE IS NO PLACE</p>
        <p className="leading-[normal]">
          <span>{`LIKE `}</span>
          <span className="text-[#a86747]">AFRICA</span>
        </p>
      </div>
      <p className="absolute font-['Roboto:Regular',sans-serif] font-normal h-[113px] leading-[30px] left-[432px] text-[18px] text-white top-[601px] w-[322px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Sed tincidunt quis amet ut. Augue et pellentesque quis sit tempus placerat vitae. Nunc potenti donec blandit quis sit. Faucibus purus odio sit massa id.
      </p>
      <div className="absolute h-0 left-[262px] top-[610px] w-[142px]">
        <div className="absolute bottom-[-1px] left-0 right-0 top-[-1px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 142 2">
            <path d="M142 1H0" id="Vector 12" stroke="var(--stroke-0, #A86747)" strokeWidth="2" />
          </svg>
        </div>
      </div>
    </div>
  );
}