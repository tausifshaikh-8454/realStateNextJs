import { ArrowRight, LucideSend } from "lucide-react";


export default function Subscribenews() {
  return (
    <>
      <div className="flex flex-col justify-center items-center py-20 gap-5">
        <div className="rounded-[50px] p-5 bg-[#E7C873] justify-center items-center">
          <LucideSend className="w-7.5 h-7.5 text-[#1F4B43]"/>
        </div>
        <div className="">
          <h2 className="font-Roboto font-medium text-[40px]/[50px] text-[#1a1a1a] text-center">Stay Up to Date</h2>
          <p className="font-Roboto font-regular text-[16px]/[28px] text-[#1a1a1a] text-center">
            Subscribe to our newsletter to receive our weekly feed.
          </p>
        </div>
        <div className="border border-[#d1d1d1] p-5 rounded-[50px] w-142.5 h-15 flex flex-row justify-between items-center gap-5">
          <input placeholder='Sign up with Your Email' type="text" className="w-full h-12.5 focus-visible:outline-transparent" />
          <button type="submit" className="flex flex-row gap-1.25 justify-center items-center font-Roboto font-medium text-[16px]/[30px] text-[#1a1a1a]">Send<ArrowRight className="w-5"/></button>
        </div>
      </div>
    </>
  );
}
