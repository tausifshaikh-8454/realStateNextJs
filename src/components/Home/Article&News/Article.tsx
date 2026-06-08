"use client";
import Image, { StaticImageData } from "next/image";
import post1 from "../../../assets/newsArticle/newsImage.webp";
import post2 from "../../../assets/newsArticle/aprt2.webp";
import post3 from "../../../assets/newsArticle/office.webp";
import post4 from "../../../assets/newsArticle/shop.webp";
import { ArrowRightIcon } from "lucide-react";
import { useEffect, useState } from "react";
import axios from "axios";

type Posts = {
  id: "number";
  title: {
    rendered: "string";
  };
  content: {
    rendered: "string";
  };
  date: "string";

  class_list: "string";
  acf: {
    featureimage: "url";
  };
};

export default function Article() {
  const [APIposts, setPosts] = useState<Posts[]>([]);

  useEffect(() => {
    const fetchApi = async () => {
      try {
        const { data } = await axios.get(`${process.env.NEXT_PUBLIC_POST_API}`);

        setPosts(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchApi();
  }, []);

  return (
    <>
      <div className="max-w-360 w-full py-20 px-10 m-auto flex flex-col justify-center item-center">
        <h2 className="font-Roboto font-medium text-[40px]/[60px] text-black text-center">
          Recent Articles & News
        </h2>
        <p className="font-Roboto font-regular text-[16px]/[32px] text-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>

        <div className="flex flex-row gap-10 py-10">
          {APIposts.map((newPost) => (
            <div
              className="flex flex-col justify-center items-center rounded-2xl border border-[#E9E9E9] shadow-xl shadow-grey m-auto"
              key={newPost.id}
            >
              <img src = {newPost.acf.featureimage} className="rounded-t-2xl" />
              <div className="desc px-5 py-5 flex flex-col justify-center items-center gap-2 m-auto">
                <div className="flex flex-row gap-1 justify-center items-center">
                  <p className="font-Roboto font-regular text-[12px]/[26px] text-[#3D3E3F]">
                    {newPost.date.slice(0, 10)}
                  </p>
                  |
                  <p className="font-Roboto font-regular Uppercase text-[12px]/[28px] text-[#3D3E3F]">
                    {newPost.class_list[6].slice(9)}
                  </p>
                </div>
                <h4 className="font-Roboto font-medium text-[16px]/[28px] text-[#1a1a1a] text-center">
                  {newPost.title.rendered.slice(0, 30) + "..."}
                </h4>
                <button className="flex flex-row w-fit h-fit rounded-[07px] py-1.75 px-3 font-Roboto font-medium text-[14px] gap-2.5 text-[#1a1a1a] border border-[#E9E9E9] text-center">
                  Read More <ArrowRightIcon className="w-3.75" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
