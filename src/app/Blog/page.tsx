import axios from "axios"


type posts = {
  title:{
    rendered : 'string';
  }
}

async function blogAPI(): Promise<posts[]> {
  const{ data } = await axios.get<posts[]>(`${process.env.NEXT_PUBLIC_POST_API}`);
  return data;
}


export default async function Blog() {
  let BlogDet = await blogAPI();
  
  return (
    <>{
      BlogDet.map((blogSing) => (
        <p className="">{blogSing.title.rendered}</p>
      )

      )
    }
    
    </>
  )
}
