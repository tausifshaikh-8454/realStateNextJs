"use client";
import axios from "axios";
import { useEffect, useState } from "react";

type props = {
  params: Promise<{
    slug: string;
  }>;
};

type blog = {
  title: {
    rendered: "string";
  };
  acf: {
    featureimage: "string";
  };
};

export default function Page({ params }: props) {
  const [blogs, setBlogDet] = useState<blog[]>([]);

  useEffect(() => {
    const getAPIDet = async () => {
      try {
        const { data } = await axios.get(
          `${process.env.NEXT_PUBLIC_POST_API}/?slug=${(await params).slug}`,
        );

        setBlogDet(data);
      } catch (error) {
        console.error(error);
      }
    };

    getAPIDet();
  }, [params]);

  return (
    <>
      {blogs.map((BlogDet) => (
        <div className="">
          <img src={BlogDet.acf.featureimage} />
          <p className="">{BlogDet.title.rendered}</p>
        </div>
      ))}
    </>
  );
}
