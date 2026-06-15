
import axios from "axios";


type props = {
  params: Promise< {
    slug: string;
  }>;
};

type blog = {
  title: {
    rendered: string;
  };
  acf: {
    featureimage: string;
  };
  id: number;
};

async function blogDetAPI(slug: string): Promise<blog[]> {
  try {
    const { data } = await axios.get<blog[]>(
      `${process.env.NEXT_PUBLIC_POST_API}?slug=${slug}`,
    );
    console.log(data)
    return data;
  } catch (error) {
   throw error;
  }
}

export default async function Page({ params }: props) {
 
  const { slug } = await params
  let blogs = await blogDetAPI(slug);


  return (
    <>
      {blogs.map((BlogDet) => (
        <div className="" key={BlogDet.id}>
          <img src={BlogDet.acf.featureimage} />
          <p className="">{BlogDet.title.rendered}</p>
        </div>
      ))}
    </>
  );
}
