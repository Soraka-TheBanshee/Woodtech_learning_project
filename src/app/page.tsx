"use client";
import Carousel from "@/components/Carousel/Carousel";
import Test from "@/components/Carousel/Test";
import Swiper from "@/components/Slider/Swiper";

export default function Home() {
  return (
    <main className="h-full">
      <div className="">
        <Swiper />
      </div>
      <div className="z-20 pointer-events-none relative inline-block ml-[79px] mt-[76px] sm:ml-0 sm:block">
        <h2 className=" font-light text-[58px] leading-[68px] sm:text-center sm:block" >Woodhous</h2>
        <h3 className="mt-[15px] px-[15px] py-[5px] bg-main-amber rounded-tr-[5px] rounded-bl-[5px] inline-block text-[18px] leading-[21.1px] font-black sm:mx-auto sm:w-[320px] sm:block " >ДИЗАЙН НА ВЫСОКОМ УРОВНЕ</h3>
        <p className="px-[22px] py-[15px] min-h-[124px] max-w-[415px] mt-[50px] bg-[#202328E5] rounded-tr-[10px] rounded-bl-[10px] text-[14px] leading-6 sm:mx-auto " >

          Разработка и реализация красивых интерьеров из дерева ещё никогда не
          была так доступна. Интерьеры из дерева различной породы сделают ваш
          дом уютным и тёплым, радуя вас и ваших гостей.
        </p>
      </div>
    </main>
  );
}
