import Image, { StaticImageData } from "next/image";
import post1 from "../../../assets/newsArticle/newsImage.webp";
import post2 from "../../../assets/newsArticle/aprt2.webp";
import post3 from "../../../assets/newsArticle/office.webp";
import post4 from "../../../assets/newsArticle/shop.webp";
import { ArrowRightIcon } from "lucide-react";

export default function Article() {
  const postDetails: {
    postCategory: string;
    postDate: string;
    postCardImg: StaticImageData;
    // postFeaturedImg: StaticImageData;
    postTitle: string;
  }[] = [
    {
      postCategory: "Apartment",
      postDate: "March 19, 2024",
      postCardImg: post1,
      postTitle: "Housing Markets That Changed the Most This Week",
    },
    {
      postCategory: "Apartment",
      postDate: "March 19, 2024",
      postCardImg: post2,
      postTitle: "Read Unveils the Best Canadian Cities for Biking",
    },
    {
      postCategory: "Office",
      postDate: "March 19, 2024",
      postCardImg: post3,
      postTitle: "10 Walkable Cities Where You Can Live Affordably",
    },
    {
      postCategory: "Shop",
      postDate: "March 19, 2024",
      postCardImg: post4,
      postTitle: "New Apartment Nice in the Best Canadian Cities",
    },
  ];

  return (
    <div className="max-w-360 w-full py-20 px-10 m-auto flex flex-col justify-center item-center">
      <h2 className="font-Roboto font-medium text-[40px]/[60px] text-black text-center">
        Recent Articles & News
      </h2>
      <p className="font-Roboto font-regular text-[16px]/[32px] text-center">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>

      <div className="flex flex-row gap-10 py-10">
        {postDetails.map((post, index) => (
          <div className="flex flex-col justify-center items-center rounded-2xl border border-[#E9E9E9] shadow-xl shadow-grey m-auto" key={index}>
            <img className="rounded-t-2xl" src={post.postCardImg.src} />
            <div className="desc px-5 py-5 flex flex-col justify-center items-center gap-2 m-auto">
              <div className="flex flex-row gap-4 justify-center">
                <p className="font-Roboto font-regular text-[14px]/[26px] text-[#3D3E3F]">{post.postCategory}</p> |
                <p className="font-Roboto font-regular text-[14px]/[28px] text-[#3D3E3F]">{post.postDate}</p>
              </div>
              <h4 className="font-Roboto font-medium text-[16px]/[28px] text-[#1a1a1a] text-center">{post.postTitle}</h4>
              <button className="flex flex-row w-fit h-fit rounded-[07px] py-1.75 px-3 font-Roboto font-medium text-[14px] gap-2.5 text-[#1a1a1a] border border-[#E9E9E9] text-center">Read More <ArrowRightIcon className="w-3.75" /></button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
