function Heading() {
  return (
    <div className="absolute contents inset-[19.09%_50.88%_37.85%_13.5%]" data-name="Heading">
      <p className="absolute font-['Oswald:Bold',sans-serif] font-bold inset-[19.09%_54.88%_61.2%_13.5%] leading-[1.4] text-[#363636] text-[42px]">
        <span>{`It’s Time For a `}</span>
        <span className="text-[#3fd0d4]">{`New Adventure! `}</span>Don’t Wait Any Longer.
      </p>
      <p className="absolute font-['Rubik:Regular',sans-serif] font-normal inset-[41.33%_50.88%_37.85%_13.5%] leading-[1.6] text-[#6b6b6b] text-[16px]">Our team of travel insiders is obsessed with finding the best things to do everywhere we travel. From Paris to Phuket to Perth, from traditional tours to once-in-a-lifetime experiences, we have something for every kind of traveler. And we are proud to say that after 17 experience-packed years, we are the world leader. When planning your trip, why start anywhere else?</p>
    </div>
  );
}

function LeftContent() {
  return (
    <div className="absolute contents inset-[19.09%_50.88%_37.85%_13.5%]" data-name="Left Content">
      <Heading />
    </div>
  );
}

export default function NewAdventure() {
  return (
    <div className="relative size-full" data-name="New Adventure!">
      <div className="absolute bg-white h-[634px] left-1/2 top-0 translate-x-[-50%] w-[1600px]" data-name="BG" />
      <LeftContent />
    </div>
  );
}