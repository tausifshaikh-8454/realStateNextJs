import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import featProp from "../../../assets/feature/a1.webp";
import loc from "../../../assets/feature/crdIcon/Icon.svg";
import bed from "../../../assets/feature/crdIcon/Icon-1.svg";
import bath from "../../../assets/feature/crdIcon/Icon-2.svg";
import dorm from "../../../assets/feature/crdIcon/Icon-3.svg";
import Image from "next/image";

export default function Featuredprprty() {
  return (
    <div className="flex flex-col justify-center items-center py-25">
      <h2 className="font-Roboto font-medium text-[40px]/[52px] text-[#1A1A1A]">
        Featured Properties
      </h2>
      <p className="font-Roboto font-regular text-[17px]/[32px] text-[#1A1A1A]">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>

      <div className="">
        <Tabs defaultValue="overview" className="py-10">
          <TabsList className="flex flex-row bg-transparent gap-2">
            <TabsTrigger className="font-Roboto font-medium text-[16px]/[32px] text-[#1A1A1A] rounded-3xl py-[10px] px-[16px] active:border" value="overview">Overview</TabsTrigger>
            <TabsTrigger className="font-Roboto font-medium text-[16px]/[32px] text-[#1A1A1A] rounded-3xl border-1px py-[10px] px-[16px] border border-black" value="analytics">Analytics</TabsTrigger>
            <TabsTrigger className="font-Roboto font-medium text-[16px]/[32px] text-[#1A1A1A] rounded-3xl border-1px py-[10px] px-[16px] border border-black" value="reports">Reports</TabsTrigger>
            <TabsTrigger className="font-Roboto font-medium text-[16px]/[32px] text-[#1A1A1A] rounded-3xl border-1px py-[10px] px-[16px] border-black" value="settings">Settings</TabsTrigger>
          </TabsList>
          <TabsContent value="overview">
            <div className="grid">
              <div
                className="flex flex-col justify-between card w-111.25 h-111.25 px-10 py-10 "
                style={{ backgroundImage: `url(${featProp.src})` }}
              >
                <div className="flex flex-row gap-2">
                  <p className="font-Roboto font-medium text-[13px]/[25px] uppercase text-white bg-[#1F4B43] w-fit px-[15px] py-[10px] rounded-3xl">For Sale</p>
                  <p className="font-Roboto font-medium text-[13px]/[25px] uppercase text-[#1A1A1A] bg-[#E7C873] w-fit px-[15px] py-[10px] rounded-3xl">Featured</p>
                </div>
                <div className="botttom">
                  <h4 className="font-Roboto font-medium text-[20px]/[25px] text-white pb-1">
                    Luxury Family Home
                  </h4>
                  <div className="flex flex-row gap-2">
                    <Image src={loc} alt={""} />
                    <p className="font-Roboto font-regular text-[16px]/[32px] text-white">
                      1800-1818 79th St
                    </p>
                  </div>

                  <div className="desc flex flex-row justify-between pt-4">
                    <div className="flex flex-row gap-5 divide-r-2">
                      <div className="flex flex-row gap-2  pr-5">
                        <Image src={bed} alt={""} />
                        <p className="font-Roboto font-regular text-[16px]/[32px] text-white">
                          4
                        </p>
                      </div>
                      <div className="flex flex-row gap-2 pr-5">
                        <Image src={bath} alt={""} />
                        <p className="font-Roboto font-regular text-[16px]/[32px] text-white">
                          1
                        </p>
                      </div>
                      <div className="flex flex-row gap-2">
                        <Image src={dorm} alt={""} />
                        <p className="font-Roboto font-regular text-[16px]/[32px] text-white">
                          400
                        </p>
                      </div>
                    </div>
                    <div className="p">
                      <p className="font-Roboto font-semibold text-[21px]/[32px] text-white">
                        $395,000
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
