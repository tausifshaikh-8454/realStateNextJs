import Featuredprprty from "@/components/Home/FeaturedProp/Featuredprprty";
import Cities from "@/components/Home/Cities";
import Hero from "@/components/Home/Hero";
import Image from "next/image";
import Cta from "@/components/Home/Cta";
import Metrics from "@/components/Home/Metrics";
import ClientTestimony from "@/components/Home/ClientTestimony/ClientTestimony";
import Article from "@/components/Home/Article&News/Article";



export default function Home() {
  return (
    <>
      <Hero/>
      <Cities />
      <Featuredprprty/>
      <Cta/>
      <Metrics/>
      <ClientTestimony/>
      <Article/>
    </>
  );
}
