"use client";

import demo from "../../../assets/properties/prop1.webp";
import Autoplay from "embla-carousel-autoplay";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function ClientTestimony() {
  return (
    <div className="flex flex-row justify-center w-full bg-[#1A1A1A]">
      <div className="">

      </div>
      <div className="">
        {" "}
        <Carousel
          plugins={[
            Autoplay({
              delay: 6000,
            }),
          ]}
          opts={{
            align: "center",
            slidesToScroll: 1,
            loop: true,
          }}
          className="m-w-360 w-full overflow-hidden px-20 justify-center"
        >
          <CarouselContent className="m-0">
            <CarouselItem className="basis-full lg:basis-1/3">
              <div className="">
                <img src={`${demo.src}`} />
                <h5 className="">Slide 1</h5>
              </div>
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </div>
  );
}
