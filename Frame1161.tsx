import imgImage2 from "figma:asset/bf8bc585f22ec4b78c4dce94735ae537b827d118.png";

function Frame1() {
  return (
    <div className="[grid-area:1_/_1] box-border content-stretch flex font-['Volkhov:Bold',sans-serif] gap-[46.956px] h-[40.425px] items-start leading-[1.2] ml-0 mt-[25.753px] not-italic relative text-[18.783px] text-nowrap text-white w-[434.53px] whitespace-pre">
      <p className="relative shrink-0">Home</p>
      <p className="relative shrink-0">About Us</p>
      <p className="relative shrink-0">Tours</p>
      <p className="relative shrink-0">Contact</p>
    </div>
  );
}

function Frame() {
  return (
    <div className="[grid-area:1_/_1] bg-white box-border content-stretch flex gap-[11.739px] h-[89.944px] items-center justify-center ml-[778.04px] mt-0 overflow-clip px-[28.174px] py-[14.087px] relative rounded-[9.391px] w-[171.53px]" data-name="Frame">
      <p className="font-['Volkhov:Bold',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[#97756e] text-[20px] text-nowrap whitespace-pre">Book Now</p>
    </div>
  );
}

function Nav() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="nav">
      <Frame1 />
      <Frame />
    </div>
  );
}

export default function Frame2() {
  return (
    <div className="content-stretch flex gap-[356px] items-start relative size-full">
      <div className="basis-0 grow min-h-px min-w-px relative self-stretch shrink-0" data-name="image 2">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-contain pointer-events-none size-full" src={imgImage2} />
      </div>
      <Nav />
    </div>
  );
}