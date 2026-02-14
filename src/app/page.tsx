import Featuredprprty from "@/components/Home/FeaturedProp/Featuredprprty";
import Cities from "@/components/Home/Cities";
import Hero from "@/components/Home/Hero";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Hero/>
      <Cities />
      <Featuredprprty/>
    </>
  );
}
