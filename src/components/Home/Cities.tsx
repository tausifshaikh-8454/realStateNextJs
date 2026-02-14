import Image, { StaticImageData } from "next/image";
import prpty from "../../assets/workwithUs/property.svg";
import home from "../../assets/workwithUs/homes.svg";
import trust from "../../assets/workwithUs/trusated.svg";
import prop1 from "../../assets/properties/prop1.webp";
import prop2 from "../../assets/properties/prop2.webp";
import prop3 from "../../assets/properties/prop3.webp";
import prop4 from "../../assets/properties/prop4.webp";
import prop5 from "../../assets/properties/prop5.webp";
import { Button } from "../ui/button";
import { ArrowRightIcon } from "lucide-react";

const prpties: {
  image: StaticImageData;
  crdTitle: string;
  shrtDesc: string;
}[] = [
  {
    image: prop1,
    crdTitle: "New York",
    shrtDesc: "8 Properties",
  },
  {
    image: prop2,
    crdTitle: "Chicago",
    shrtDesc: "8 Properties",
  },
  {
    image: prop3,
    crdTitle: "Los Angeles",
    shrtDesc: "2 Properties",
  },
  {
    image: prop4,
    crdTitle: "Miami",
    shrtDesc: "1 Property",
  },
  {
    image: prop5,
    crdTitle: "Florida",
    shrtDesc: "3 Properties",
  },
];

export default function Cities() {
  return (
    // card section
    <>
      <div className="flex flex-col items-center bg-white justify-center py-25 px-5">
        <h2 className="font-Roboto font-medium text-[40px]/[52px] text-[#1A1A1A]">
          Find Properties in These Cities
        </h2>
        <p className="font-Roboto font-regular text-[17px]/[32px] text-[#1A1A1A]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
        <div className="flex flex-row xl:gap-3 2xl:gap-7 justify-center items-center cursor-pointer ">
          {prpties.map((prp, index) => (
            <div
              className="card bg-cover bg-no-repeat w-63 h-79 mt-10 pt-10 pl-10 "
              key={index}
              style={{ backgroundImage: `url(${prp.image.src})` }}
            >
              <h4 className="font-Roboto font-medium text-[20px]/[22px] tracking-wide text-white">
                {prp.crdTitle}
              </h4>
              <p className="font-Roboto font-regular text-[15px]/[28px] text-white">
                {prp.shrtDesc}
              </p>
            </div>
          ))}
        </div>
      </div>
      {/* work with us section */}
      <div className="flex flex-col items-center bg-white justify-center py-10">
        <h2 className="font-Roboto font-medium text-[40px]/[52px] text-[#1A1A1A]">
          Why You Should Work With Us
        </h2>
        <p className="font-Roboto font-regular text-[17px]/[32px] text-[#1A1A1A]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
        <div className="max-w-300 flex flex-row justify-center align-middle pt-10 gap-5">
          <div className="text-center flex flex-col items-center justify-center w-[30%]">
            <Image className="pb-6.25" src={prpty} alt="" />
            <h4 className="font-Roboto font-medium text-[21px]/[25px] text-[#1A1A1A] pb-4">
              Wide Range of Properties
            </h4>
            <p className="font-Roboto font-regular text-[15px]/[21px] text-[#1A1A1A]">
              We offer expert legal help for all related property items in
              Dubai.
            </p>
          </div>
          <div className="text-center flex flex-col items-center justify-center w-[30%]">
            <Image className="pb-6.25" src={home} alt="" />
            <h4 className="font-Roboto font-medium text-[21px]/[25px] text-[#1A1A1A] pb-4">
              Buy or Rent Homes
            </h4>
            <p className="font-Roboto font-regular text-[15px]/[21px] text-[#1A1A1A]">
              We sell your home at the best market price and very quickly as
              well.
            </p>
          </div>
          <div className="text-center flex flex-col items-center justify-center w-[30%]">
            <Image className="pb-6.25" src={trust} alt="" />
            <h4 className="font-Roboto font-medium text-[21px]/[25px] text-[#1A1A1A] pb-4">
              Trusted by Thousands
            </h4>
            <p className="font-Roboto font-regular text-[15px]/[21px] text-[#1A1A1A]">
              We offer you free consultancy to get a loan for your new home.
            </p>
          </div>
        </div>
      </div>

      {/* CTA section */}

      <div className="flex flex-row px-5 max-w-360 w-full justify-center items-center m-auto">
        <div className="flex flex-row justify-evenly items-center mt-37.5 py-21.25 rounded-3xl w-full bg-[#1F4B43]">
          <div className="">
            <h4 className="font-Roboto font-medium text-[30px]/[62px] text-white">
              Sign in to streamline your search
            </h4>
            <p className="font-Roboto font-regular text-[17px]/[32px] text-white">
              Save properties, create alerts and keep track of the enquiries you
              send to agents.
            </p>
          </div>
          <div className="">
            <Button className="rounded-2.5 font-Roboto font-semibold text-[15px]/[28.5px] bg-[#E7C873] text-[#1F4B43] py-5 px-6 h-13 ">
              Sign in or create an account <ArrowRightIcon />
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
