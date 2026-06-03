import Image, { StaticImageData } from "next/image";
import post1 from "../../../assets/newsArticle/newsImage.webp";

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
      postCardImg: post1,
      postTitle: "Housing Markets That Changed the Most This Week",
    },
    {
      postCategory: "Apartment",
      postDate: "March 19, 2024",
      postCardImg: post1,
      postTitle: "Housing Markets That Changed the Most This Week",
    },
    {
      postCategory: "Apartment",
      postDate: "March 19, 2024",
      postCardImg: post1,
      postTitle: "Housing Markets That Changed the Most This Week",
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

      <div className="flex flex-row gap-10">
        {postDetails.map((post, index) => (
          <div className="flex flex-col justify-center items-center rounded-2xl border border-black" key={index}>
            <img src={post.postCardImg.src} />
            <div className="desc py-3 px-3 ">
              <div className="flex flex-row gap-4">
                <p className="font-Roboto font-regular text-[14px]/[26px] text-[#3D3E3F]">{post.postCategory}</p>
                <p className="font-Roboto font-regular text-[14px]/[28px] text-[#3D3E3F]">{post.postDate}</p>
              </div>
              <h4 className="font-Roboto font-regular text-[16px]/[28px] text-[#1a1a1a]">{post.postTitle}</h4>
              <button className="">Read More</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
