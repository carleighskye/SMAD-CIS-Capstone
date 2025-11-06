import imgPhoto21 from "figma:asset/e54b036d9aebd21ca2abc9003e667681cc1ab93b.png";

export default function Frame() {
  return (
    <div className="relative size-full">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[10px] items-start p-[10px] relative size-full">
          <div className="aspect-[1600/900] relative shrink-0 w-full" data-name="Photo2 1">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <img alt="" className="absolute left-[-0.26%] max-w-none size-full top-[0.46%]" src={imgPhoto21} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}