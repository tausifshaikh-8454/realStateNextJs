import axios from "axios";

type posts = {
  id: number;
  title: {
    rendered: string;
  };
  acf: {
    featureimage: string;
  };
};

async function blogAPI(): Promise<posts[]>  {
  try{
     const { data } = await axios.get<posts[]>(
    `${process.env.NEXT_PUBLIC_POST_API}`,
  );
   return data;
  }
  catch(error){
    throw error;
  }
}

export default async function Blog() {
  let BlogDet = await blogAPI();

  return (
    <>
      {BlogDet.map((blogSing) => (
        <div className="" key={blogSing.id}>
          <img src={blogSing.acf.featureimage} />
          <p className="">{blogSing.title.rendered}</p>
        </div>
      ))}
    </>
  );
}
