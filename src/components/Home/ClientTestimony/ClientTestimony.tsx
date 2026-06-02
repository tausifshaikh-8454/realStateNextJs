"use client";

import amd from "../../../assets/OurClients/AMD.svg";
import amazon from "../../../assets/OurClients/amazon.svg";
import cisco from "../../../assets/OurClients/cisco.svg";
import dropcam from "../../../assets/OurClients/dropcom.svg";
import logi from "../../../assets/OurClients/logi.svg";
import spoti from "../../../assets/OurClients/spoti.svg";
import testiImg from "../../../assets/testimony/div_avarta.webp";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import Marquee from "react-fast-marquee";
import "swiper/css/navigation";
import "swiper/css";
import "./testiStyle.css";

export default function ClientTestimony() {
  return (
    <>
      <div className="w-full bg-[#1A1A1A] px-10 py-25">
        <div className="max-w-360 w-full flex flex-row justify-center m-auto gap-30">
          <div className="w-[50%]">
            <h2 className="font-Roboto font-medium text-[40px]/[52px] text-white">
              What our customers are saying us?
            </h2>
            <div className="grid grid-cols-2 grid-rows-1 pt-5">
              <h5 className="font-Roboto font-medium text-[26px]/[32px] text-white">
                10m+
              </h5>
              <h5 className="font-Roboto font-medium text-[26px]/[32px] text-white">
                4.88
              </h5>
              <p className="font-Roboto font-regular text-[15px]/[32px] text-white">
                Happy People
              </p>
              <p className="font-Roboto font-regular text-[15px]/[32px] text-white">
                Overall rating
              </p>
            </div>
          </div>
          <div className="w-[50%]">
            <Swiper
              modules={[Navigation, Autoplay]}
              slidesPerView={1}
              navigation
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              loop={true}
            >
              <SwiperSlide>
                <div className="flex flex-col">
                  <div className="flex flex-row gap-10 items-center">
                    <img src={testiImg.src} alt="" />
                    <div className="">
                      <p className="font-Roboto font-medium text-[20px] text-white">
                        Cameron Williamson
                      </p>
                      <p className="font-Roboto font-regular text-[20px] text-white">
                        Designer
                      </p>
                    </div>
                  </div>
                  <p className="font-Roboto font-medium text-[20px] text-white my-10">
                    Searches for mutiplexes, property comparisons, and the loan
                    estimator. Works great. Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit, sed do eiusmod tempor incididunt
                    ut labore et dores.
                  </p>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="flex flex-col">
                  <div className="flex flex-row gap-10 items-center">
                    <img src={testiImg.src} alt="" />
                    <div className="">
                      <p className="font-Roboto font-medium text-[20px] text-white">
                        Cameron Williamson
                      </p>
                      <p className="font-Roboto font-regular text-[20px] text-white">
                        Designer
                      </p>
                    </div>
                  </div>
                  <p className="font-Roboto font-medium text-[20px] text-white my-10">
                    Searches for mutiplexes, property comparisons, and the loan
                    estimator. Works great. Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit, sed do eiusmod tempor incididunt
                    ut labore et dores.
                  </p>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>

      <div className="w-full border-t border-[#ffffff1f] bg-[#1A1A1A] px-10 py-25">
        <Marquee speed={50} autoFill={false} direction="right" className="max-w-360 w-full m-auto flex flex-row ">
          <div className="flex flex-row flex-nowrap justify-between items-center gap-37">
            <img src={amazon.src} alt="Testimonial" />
            <img src={amd.src} alt="Testimonial" />
            <img src={cisco.src} alt="Testimonial" />
            <img src={dropcam.src} alt="Testimonial" />
            <img src={logi.src} alt="Testimonial" />
            <img src={spoti.src} alt="Testimonial" />
          </div>
        </Marquee>
      </div>
    </>
  );
}
