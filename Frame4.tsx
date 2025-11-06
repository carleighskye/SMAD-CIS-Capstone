function Frame1() {
  return (
    <div className="box-border content-stretch flex gap-[30px] items-start pb-[4px] pt-0 px-0 relative shrink-0">
      <div aria-hidden="true" className="absolute border-[0px_0px_3px] border-solid border-white inset-0 pointer-events-none" />
      <p className="font-['Sora:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[20px] text-nowrap text-white whitespace-pre">Overview</p>
    </div>
  );
}

export default function Frame() {
  return (
    <div className="content-stretch flex gap-[72px] items-start relative size-full">
      <Frame1 />
      <p className="font-['Sora:SemiBold',sans-serif] font-semibold leading-[normal] opacity-70 relative shrink-0 text-[20px] text-nowrap text-white whitespace-pre">Edition</p>
      <p className="font-['Sora:SemiBold',sans-serif] font-semibold leading-[normal] opacity-70 relative shrink-0 text-[20px] text-nowrap text-white whitespace-pre">Specs</p>
      <p className="font-['Sora:SemiBold',sans-serif] font-semibold leading-[normal] opacity-70 relative shrink-0 text-[20px] text-nowrap text-white whitespace-pre">Compare</p>
      <p className="font-['Sora:SemiBold',sans-serif] font-semibold leading-[normal] opacity-70 relative shrink-0 text-[20px] text-nowrap text-white whitespace-pre">Reviews</p>
      <p className="font-['Sora:SemiBold',sans-serif] font-semibold leading-[normal] opacity-70 relative shrink-0 text-[20px] text-nowrap text-white whitespace-pre">Price</p>
    </div>
  );
}