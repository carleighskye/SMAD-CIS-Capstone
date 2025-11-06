import svgPaths from "./svg-3stxu1uydf";
import imgImage1 from "figma:asset/cd46c95b3d29634980166261065a2a2933a11888.png";
import imgImage2 from "figma:asset/169950b81657969fef26e0da1630791b4184721f.png";
import imgImage3 from "figma:asset/bf2057eb3b24a8503ec2eb8f881d5a6da24960be.png";
import imgImage4 from "figma:asset/c317fbac11097d991178e071613dfc65ee7a42ea.png";

function Images() {
  return (
    <div className="absolute contents left-[101px] top-[238px]" data-name="Images">
      <div className="absolute left-[101px] rounded-[6px] size-[124px] top-[238px]" data-name="Image 1">
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[6px]">
          <div className="absolute bg-[#d9d9d9] inset-0 rounded-[6px]" />
          <img alt="" className="absolute max-w-none object-50%-50% object-cover rounded-[6px] size-full" src={imgImage1} />
        </div>
      </div>
      <div className="absolute left-[253px] rounded-[6px] size-[124px] top-[238px]" data-name="Image 2">
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[6px]">
          <div className="absolute bg-[#d9d9d9] inset-0 rounded-[6px]" />
          <img alt="" className="absolute max-w-none object-50%-50% object-cover rounded-[6px] size-full" src={imgImage2} />
        </div>
      </div>
      <div className="absolute left-[405px] rounded-[6px] size-[124px] top-[238px]" data-name="Image 3">
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[6px]">
          <div className="absolute bg-[#d9d9d9] inset-0 rounded-[6px]" />
          <img alt="" className="absolute max-w-none object-50%-50% object-cover rounded-[6px] size-full" src={imgImage3} />
        </div>
      </div>
      <div className="absolute left-[557px] rounded-[6px] size-[124px] top-[238px]" data-name="Image 4">
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[6px]">
          <div className="absolute bg-[#d9d9d9] inset-0 rounded-[6px]" />
          <img alt="" className="absolute max-w-none object-50%-50% object-cover rounded-[6px] size-full" src={imgImage4} />
        </div>
      </div>
    </div>
  );
}

function SolidInterfaceArrowRight() {
  return (
    <div className="absolute left-[757px] size-[24px] top-[288px]" data-name="Solid/Interface/Arrow right">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Solid/Interface/Arrow right">
          <path d={svgPaths.pbc93c80} fill="var(--fill-0, white)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Right() {
  return (
    <div className="absolute contents left-[753px] top-[284px]" data-name="Right">
      <div className="absolute left-[753px] size-[32px] top-[284px]" data-name="Box">
        <div aria-hidden="true" className="absolute border border-[#e6e6e6] border-solid inset-0 pointer-events-none" />
      </div>
      <SolidInterfaceArrowRight />
    </div>
  );
}

function SolidInterfaceArrowRight1() {
  return (
    <div className="relative size-[24px]" data-name="Solid/Interface/Arrow right">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Solid/Interface/Arrow right">
          <path d={svgPaths.pbc93c80} fill="var(--fill-0, white)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Left() {
  return (
    <div className="absolute contents left-0 top-[284px]" data-name="Left">
      <div className="absolute flex items-center justify-center left-0 size-[32px] top-[284px]">
        <div className="flex-none rotate-[180deg] scale-y-[-100%]">
          <div className="relative size-[32px]" data-name="Box">
            <div aria-hidden="true" className="absolute border border-[#e6e6e6] border-solid inset-0 pointer-events-none" />
          </div>
        </div>
      </div>
      <div className="absolute flex items-center justify-center left-[4px] size-[24px] top-[288px]">
        <div className="flex-none rotate-[180deg] scale-y-[-100%]">
          <SolidInterfaceArrowRight1 />
        </div>
      </div>
    </div>
  );
}

function Icons() {
  return (
    <div className="absolute contents left-0 top-[284px]" data-name="Icons">
      <Right />
      <Left />
    </div>
  );
}

function ImagesAndIcons() {
  return (
    <div className="absolute contents left-0 top-[238px]" data-name="Images and Icons">
      <Images />
      <Icons />
    </div>
  );
}

function SolidBrandsFacebook() {
  return (
    <div className="absolute left-[297px] size-[30px] top-[152px]" data-name="Solid/Brands/Facebook">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 30 30">
        <g id="Solid/Brands/Facebook">
          <path d={svgPaths.p10bf2b80} fill="var(--fill-0, white)" id="Union" />
        </g>
      </svg>
    </div>
  );
}

function SolidBrandsTwitter() {
  return (
    <div className="absolute inset-[34.08%_51.47%_59.19%_44.71%]" data-name="Solid/Brands/Twitter">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 30 30">
        <g id="Solid/Brands/Twitter">
          <path d={svgPaths.p3c4983c0} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function SolidBrandsLinkedin() {
  return (
    <div className="absolute inset-[34.08%_37.71%_59.19%_58.47%]" data-name="Solid/Brands/Linkedin">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 30 30">
        <g id="Solid/Brands/Linkedin">
          <g id="Union">
            <path d={svgPaths.p5631500} fill="var(--fill-0, white)" />
            <path d={svgPaths.p3b2213f0} fill="var(--fill-0, white)" />
            <path d={svgPaths.p24558e00} fill="var(--fill-0, white)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function SolidBrandsInstagram() {
  return (
    <div className="absolute inset-[34.08%_44.59%_59.19%_51.59%]" data-name="Solid/Brands/Instagram">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 30 30">
        <g id="Solid/Brands/Instagram">
          <g id="Subtract">
            <path d={svgPaths.p118b8200} fill="var(--fill-0, white)" />
            <path clipRule="evenodd" d={svgPaths.p270a2b0} fill="var(--fill-0, white)" fillRule="evenodd" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function SocialMediaIcons() {
  return (
    <div className="absolute contents left-[calc(50%+0.5px)] top-[152px] translate-x-[-50%]" data-name="Social Media Icons">
      <SolidBrandsFacebook />
      <SolidBrandsTwitter />
      <SolidBrandsLinkedin />
      <SolidBrandsInstagram />
    </div>
  );
}

function Heading() {
  return (
    <div className="absolute contents left-1/2 top-0 translate-x-[-50%]" data-name="Heading">
      <div className="absolute bottom-[78.47%] flex items-center justify-center left-1/2 top-[21.52%] translate-x-[-50%] w-[165px]">
        <div className="flex-none">
          <div className="relative size-full" data-name="Line">
            <div className="absolute bottom-0 left-[-0.3px] right-[-0.3px] top-0">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 165">
                <path d="M0.3 0V165" id="Line" stroke="var(--stroke-0, #E6E6E6)" strokeWidth="0.6" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <p className="absolute font-['Satisfy:Regular',sans-serif] leading-[1.2] left-[calc(50%-288.5px)] not-italic text-[60px] text-nowrap text-white top-0 tracking-[2px] whitespace-pre">Make memories with us</p>
    </div>
  );
}

export default function MakeMemoriesWithUs() {
  return (
    <div className="relative size-full" data-name="Make memories with us">
      <p className="absolute bottom-0 font-['Rubik:Regular',sans-serif] font-normal leading-[1.6] left-[calc(50%-99.5px)] text-[#f9fbff] text-[18px] top-[93.72%] w-[199px]">Get the best offers first.</p>
      <ImagesAndIcons />
      <SocialMediaIcons />
      <Heading />
    </div>
  );
}