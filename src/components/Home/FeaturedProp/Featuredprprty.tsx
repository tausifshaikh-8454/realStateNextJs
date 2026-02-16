import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import crd1 from "../../../assets/feature/article.webp";
import crd2 from "../../../assets/feature/a1.webp";
import crd3 from "../../../assets/feature/article2.webp";
import crd4 from "../../../assets/feature/article3.webp";
import crd5 from "../../../assets/feature/article4.webp";
import crd6 from "../../../assets/feature/article6.webp";
import loc from "../../../assets/feature/crdIcon/Icon.svg";
import bed from "../../../assets/feature/crdIcon/Icon-1.svg";
import bath from "../../../assets/feature/crdIcon/Icon-2.svg";
import dorm from "../../../assets/feature/crdIcon/Icon-3.svg";
import Image, { StaticImageData } from "next/image";

const propDetails: {
  propName: string;
  propImage: StaticImageData;
  propLoc: string;
  propType: string;
  featProp: string;
  roomCap: string;
  bathQuan: string;
  area: string;
  pricing: string;
}[] = [
  {
    propName: "Luxury Family Home",
    propImage: crd1,
    propLoc: "1800-1818 79th St",
    propType: " For Sale",
    featProp: "Featured",
    roomCap: "4",
    bathQuan: "3",
    area: "400",
    pricing: "395,000",
  },
  {
    propName: "Skyper Pool Apartment",
    propImage: crd2,
    propLoc: "1020 Bloomingdale Ave",
    propType: "For Sale",
    featProp: "",
    roomCap: "4",
    bathQuan: "2",
    area: "450",
    pricing: "$280,000",
  },
  {
    propName: "North Dillard Street",
    propImage: crd3,
    propLoc: "4330 Bell Shoals Rd",
    propType: "For Rent",
    featProp: "",
    roomCap: "4",
    bathQuan: "2",
    area: "400",
    pricing: "250 /month",
  },
  {
    propName: "Eaton Garth Penthouse",
    propImage: crd4,
    propLoc: "7722 18th Ave, Brooklyn",
    propType: "For Sale",
    featProp: "Featured",
    roomCap: "4",
    bathQuan: "2",
    area: "450",
    pricing: "180,000",
  },
  {
    propName: "New Apartment Nice Wiew",
    propImage: crd5,
    propLoc: "42 Avenue O, Brooklyn",
    propType: "For Rent",
    featProp: "Featured",
    roomCap: "4",
    bathQuan: "1",
    area: "460",
    pricing: "850/ month",
  },
  {
    propName: "Diamond Manor Apartment",
    propImage: crd6,
    propLoc: "7802 20th Ave, Brooklyn",
    propType: "For Sale",
    featProp: "Featured",
    roomCap: "4",
    bathQuan: "2",
    area: "500",
    pricing: "259,000",
  },
];

export default function Featuredprprty() {
  return (
    <div className="flex flex-col justify-center items-center py-25">
      <h2 className="font-Roboto font-medium text-[40px]/[52px] text-[#1A1A1A]">
        Featured Properties
      </h2>
      <p className="font-Roboto font-regular text-[17px]/[32px] text-[#1A1A1A]">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>

      <div className="m-auto">
        <Tabs defaultValue="overview" className="py-10 flex flex-row items-center">
          <TabsList className="flex flex-row bg-transparent gap-2 pb-10">
            <TabsTrigger
              className="font-Roboto font-medium text-[16px]/[32px] text-[#1A1A1A] rounded-3xl p-5 active:border"
              value="overview"
            >
              Overview
            </TabsTrigger>
            <TabsTrigger
              className="font-Roboto font-medium text-[16px]/[32px] text-[#1A1A1A] rounded-3xl border-1px p-5 border border-black"
              value="analytics"
            >
              Analytics
            </TabsTrigger>
            <TabsTrigger
              className="font-Roboto font-medium text-[16px]/[32px] text-[#1A1A1A] rounded-3xl border-1px p-5 border border-black"
              value="reports"
            >
              Reports
            </TabsTrigger>
            <TabsTrigger
              className="font-Roboto font-medium text-[16px]/[32px] text-[#1A1A1A] rounded-3xl border-1px p-5 border-black"
              value="settings"
            >
              Settings
            </TabsTrigger>
          </TabsList>

          <TabsContent value="overview">
            <div className="max-w-360 w-full grid grid-cols-3 gap-4">
              {propDetails.map((singleProperty, index) => (
                <div
                  className="flex flex-col 2xl:w-[445px] 2xl:h-[445px] xl:w-[410px] xl:h-[410px]  justify-between card px-10 py-10 xl:px-5 xl:py-5 bg-no-repeat bg-cover"
                  key={index}
                  style={{
                    backgroundImage: `url(${singleProperty.propImage.src})`,
                  }}
                >
                  <div className="flex flex-row gap-2">
                    <p className="font-Roboto font-medium text-[13px]/[25px] uppercase text-white bg-[#1F4B43] w-fit px-[15px] py-[10px] rounded-3xl">
                      {singleProperty.propType}
                    </p>
                    {singleProperty.featProp && (
                      <p className="font-Roboto font-medium text-[13px]/[25px] uppercase text-[#1A1A1A] bg-[#E7C873] w-fit px-[15px] py-[10px] rounded-3xl">
                        {singleProperty.featProp}
                      </p>
                    )}
                  </div>
                  <div className="botttom">
                    <h4 className="font-Roboto font-medium text-[20px]/[25px] text-white pb-1">
                      {singleProperty.propName}
                    </h4>
                    <div className="flex flex-row gap-2">
                      <Image src={loc} alt={""} />
                      <p className="font-Roboto font-regular text-[16px]/[32px] text-white">
                        {singleProperty.propLoc}
                      </p>
                    </div>

                    <div className="desc flex flex-row justify-between pt-4">
                      <div className="flex flex-row gap-5">
                        <div className="flex flex-row gap-2 pr-5 border-r-2">
                          <Image src={bed} alt={""} />
                          <p className="font-Roboto font-regular text-[16px]/[32px] text-white">
                            {singleProperty.roomCap}
                          </p>
                        </div>
                        <div className="flex flex-row gap-2 pr-5 border-r-2">
                          <Image src={bath} alt={""} />
                          <p className="font-Roboto font-regular text-[16px]/[32px] text-white">
                            {singleProperty.bathQuan}
                          </p>
                        </div>
                        <div className="flex flex-row gap-2">
                          <Image src={dorm} alt={""} />
                          <p className="font-Roboto font-regular text-[16px]/[32px] text-white">
                            {singleProperty.area}
                          </p>
                        </div>
                      </div>
                      <div className="p">
                        <p className="font-Roboto font-semibold text-[21px]/[32px] text-white">
                          ${singleProperty.pricing}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
