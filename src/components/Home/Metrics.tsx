import { ArrowRightIcon } from "lucide-react";
import metr from "../../assets/metrics.webp";
import { Button } from "../ui/button";

export default function Metrics() {
  return (
    <div className="flex flex-row justify-center items-center max-w-360 w-full py-41.25 px-10" >
      <div className="w-1/2 pr-25">
        <h2 className="font-Roboto font-medium text-[40px]/[52px] text-[#1A1A1A] pb-3">
          We Use Real Estate to Show Our Appreciation of The World
        </h2>
        <p className="font-Roboto font-regular text-[17px]/[32px] text-[#1A1A1A]">
          Pellentesque egestas elementum egestas faucibus sem. Velit nunc egestas ut morbi. Leo diam diam nibh eget fermentum massa pretium. Mi mauris nulla ac dictum ut mauris non.
        </p>
        <div className="grid grid-cols-2 grid-rows-2 pt-15 gap-4">
            <div className="pr-20">
                <h4 className="font-Roboto font-medium text-[40px]/[72px] text-[#1a1a1a]">$18M</h4>
                <p className="font-Roboto font-regular text-[15px]/[30px] text-[#1a1a1a]">Owned from properties transactions</p>
            </div>
            <div className="pr-20">
                <h4 className="font-Roboto font-medium text-[40px]/[72px] text-[#1a1a1a]">15K+</h4>
                <p className="font-Roboto font-regular text-[15px]/[30px] text-[#1a1a1a]">Properties for Sell</p>
            </div>
            <div className="pr-20">
                <h4 className="font-Roboto font-medium text-[40px]/[72px] text-[#1a1a1a]">26K+</h4>
                <p className="font-Roboto font-regular text-[15px]/[30px] text-[#1a1a1a]">Properties for Buy</p>
            </div>
            <div className="pr-20">
                <h4 className="font-Roboto font-medium text-[40px]/[72px] text-[#1a1a1a]">890</h4>
                <p className="font-Roboto font-regular text-[15px]/[30px] text-[#1a1a1a]">Daily completed transactions.</p>
            </div>
        </div>
        <Button className="mt-10 bg-[#E7C873] text-[#1a1a1a] font-Roboto font-medium text-[15px] w-41 h-13.5">Learn More <ArrowRightIcon/></Button>
      </div>
      <div className="w-1/2 bg-no-repeat bg-cover">
        <img src={metr.src} alt="" className="w-fit h-fit" />
      </div>
    </div>
  );
}
