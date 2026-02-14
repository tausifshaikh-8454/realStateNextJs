import { StaticImageData } from "next/image";
import prop1 from "../../assets/properties/prop1.webp";
import prop2 from "../../assets/properties/prop2.webp";
import prop3 from "../../assets/properties/prop3.webp";
import prop4 from "../../assets/properties/prop4.webp";
import prop5 from "../../assets/properties/prop5.webp";

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
              <h4 className="font-Roboto font-medium text-[20px]/[22px] tracking-wide">
                {prp.crdTitle}
              </h4>
              <p className="font-Roboto font-regular text-[15px]/[28px]">
                {prp.shrtDesc}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col items-center bg-white justify-center py-10">
        <h2 className="font-Roboto font-medium text-[40px]/[52px] text-[#1A1A1A]">
          Why You Should Work With Us
        </h2>
        <p className="font-Roboto font-regular text-[17px]/[32px] text-[#1A1A1A]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>
    </>
  );
}
