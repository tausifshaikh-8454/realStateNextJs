import { Button } from "../ui/button";
import secBg from "../../assets/ctaSecBg.webp"
import { ArrowRightIcon } from "lucide-react";


export default function Cta() {
  return (
    <div className="w-full py-60 flex flex-wrap flex-col justify-center align-middle bg-cover bg-no-repeat "  style={{ backgroundImage: `url(${secBg.src})` }}>
        <div className="flex flex-col justify-center items-center align-middle gap-5 m-auto">
            <h2 className="font-Roboto font-medium text-[60px]/[72px] text-center mx-auto text-white">
                Discover a place you'll <br/>love to live
            </h2>
            <p className="font-Roboto font-regular text-[16px]/[30px] text-white">Pellentesque egestas elementum egestas faucibus sem. Velit nunc egestas ut morbi. Leo diam diam</p>
            <Button className="w-47.5 h-13.75 rounded-2xl bg-[#E7C873] text-[#1A1A1A]">View Properties<ArrowRightIcon /></Button>
      </div>
    </div>
  )
}
