import { ArrowRightIcon } from "lucide-react";
import hro from "../../assets/hero-img.webp";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <div
      className="flex flex-col mx-auto h-screen bg-cover bg-no-repeat items-center bg-center -mt-22 justify-center align-middle"
      style={{ backgroundImage: `url(${hro.src})` }}>

      <h1 className="font-Roboto font-medium text-[60px]/[72px] text-center mx-auto text-white">
        Office Space at <br /> Northwest
      </h1>
      <Button className="w-41.75 h-13.5 rounded-2px font-Roboto font-semibold text-[15px]/[28.5px] bg-[#E7C873] text-[#1A1A1A] mt-7">
        View Details <ArrowRightIcon />
      </Button>
    </div>
  );
}
