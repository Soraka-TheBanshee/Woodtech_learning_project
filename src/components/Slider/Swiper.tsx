"use client";
/* eslint-disable import/no-unresolved */
import {
  Swiper,
  SwiperProps,
  SwiperRef,
  SwiperSlide,
  useSwiper,
} from "swiper/react";
import { Navigation, Pagination, Swiper as SwiperType } from "swiper";
import img from "@/public/slider-img.png";
import Image from "next/image";

import "swiper/swiper.min.css";
import "swiper/css/bundle";
import { useEffect, useRef, useState } from "react";
import { NavigationOptions } from "swiper/types";
import SwipperNavBtn from "./SwipperNavBtn";
import ProgressBar from "./ProgressBar";

import { Roboto } from "next/font/google";
const roboto = Roboto({
  weight: ["300"],
  subsets: ["latin"],
});
// type swipper = React.FunctionComponent<React.RefAttributes<SwiperRef> & SwiperProps>

export interface ISlideIndex {
  current: number;
  length: number;
}

export default () => {
  const swiperRef = useRef<SwiperType>();
  const [slideIndex, setSlideIndex] = useState<ISlideIndex>();

  useEffect(() => {
    if (swiperRef.current) {
      const initSlide: ISlideIndex = {
        current: 1,
        length: swiperRef.current?.slides.length,
      };
      setSlideIndex(initSlide);
    }
  }, []);

  const nextSlideHandle = () => {
    swiperRef.current?.slideNext();
  };

  const prevSlideHandle = () => {
    swiperRef.current?.slidePrev();
  };

  const slideChangeHandler = () => {
    console.log(swiperRef.current?.realIndex);
    setSlideIndex((prev) => {
      if (prev && swiperRef.current) {
        const currentIndex = swiperRef.current?.realIndex;
        return { ...prev, current: currentIndex + 1 };
      }
    });
  };

  let currentSlideString;
  if (slideIndex?.current) {
    if (slideIndex.current > 9) {
      currentSlideString = slideIndex.current.toString();
    } else {
      currentSlideString = "0" + slideIndex.current.toString();
    }
  }
  let currentLengthString;
  if (slideIndex?.current) {
    if (slideIndex.length > 9) {
      currentLengthString = slideIndex.length.toString();
    } else {
      currentLengthString = "0" + slideIndex.length.toString();
    }
  }

  return (
    <Swiper
      modules={[Navigation, Pagination]}
      slidesPerView={1}
      onBeforeInit={(swiper) => {
        swiperRef.current = swiper;
      }}
      onSlideChange={slideChangeHandler}
      className="
      w-[1260px] absolute top-3 xs:top-0 rounded-md translate-x-[9px]
      xl:w-[1000px]
      lg:w-[740px]
      md:w-[616px]
      sm:w-[450px]
      xs:w-screen xs:translate-x-0 
      "
    >
      <SwiperSlide>
        <div className="img lg:h-[700px] md:h-[600px] xs:h-[740px]">
          <Image src={img} alt="testing" />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="img lg:h-[700px] md:h-[600px] xs:h-[740px]">
          <Image src={img} alt="testing" />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="img lg:h-[700px] md:h-[600px] xs:h-[740px]">
          <Image src={img} alt="testing" />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="img lg:h-[700px] md:h-[600px] xs:h-[740px]">
          <Image src={img} alt="testing" />
        </div>
      </SwiperSlide>
      

      <div className="absolute right-0 bottom-0 h-[76px] md:h-[56px] w-[430px] xs:w-[380px] rounded-tl-lg z-10 bg-main-dark flex justify-center items-center gap-[27px]">
        <div
          className={
            "flex justify-between items-center w-[44px] font-[300] " +
            roboto.className
          }
        >
          <p className="text-[14px] leading-4 text-[#A1AABC] ">
            {currentSlideString}
          </p>
          <div className="h-[27px] border-[0.5px] border-solid border-[#8C9AB3]"></div>
          <p className="text-xs  text-[#8C9AB3]">{currentLengthString}</p>
        </div>

        <ProgressBar slideIndex={slideIndex} />

        <div className="flex gap-[23px]">
          <SwipperNavBtn clickHandler={prevSlideHandle} reverse={true} />

          <SwipperNavBtn clickHandler={nextSlideHandle} />
        </div>
      </div>
    </Swiper>
  );
};
