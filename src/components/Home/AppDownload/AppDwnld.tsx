import Cta from "../../../assets/appDownld/CTA.webp"
import playStore from "../../../assets/appDownld/playstoreSvg.svg"
import apple from "../../../assets/appDownld/applesvg.svg"

export default function AppDwnld() {
  return (
    <div className="">
        <div className="max-w-360 w-full h-150 flex flex-row justify-center items-center m-auto py-20 px-10">
            <div className="w-50% h-full px-20 flex flex-col justify-center rounded-l-[10px] bg-[#1F4B43]">
                <p className="font-Roboto font-regular text-[14px]/[28px] text-white px-7.5 py-2.5 bg-[#ffffff1f] rounded-[36px] w-fit">Start today</p>
                <h2 className="font-Roboto font-medium text-[32px]/[64px] text-white">Download the App</h2>
                <p className="font-Roboto font-regular text-[15px]/[28px] text-white">Take classes on the go with the just home app. Stream or download to watch on the plane, the subway, or wherever you learn best.</p>
                <div className="dwnlBtn mt-10 flex flex-row gap-10">
                    <div className="ctaButton bg-white flex flex-row w-48.75 h-15.75 justify-center items-center gap-3 rounded-2xl">
                        <img src={apple.src}/> 
                        <div className="border-l-2 border-[#1f4b432d] px-3.75">
                            <p className="font-Roboto font-regular text-[12px]/[24px] text-[#1F4B43]">Download on the</p>
                            <p className="font-Roboto font-medium text-[16px]/[28px] text-[#1F4B43]">Apple Store</p>
                        </div>
                    </div>
                    <div className="ctaButton bg-white flex flex-row w-48.75 h-15.75 justify-center items-center gap-3 rounded-2xl">
                        <img src={playStore.src}/> 
                        <div className="border-l-2 border-[#1f4b432d] px-3.75">
                            <p className="font-Roboto font-regular text-[12px]/[24px] text-[#1F4B43]">Download on the</p>
                            <p className="font-Roboto font-medium text-[16px]/[28px] text-[#1F4B43]">Google Play</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-50% h-full">
                <img src={Cta.src} className="w-full h-full" />
            </div>
        </div>
    </div>
  )
}
