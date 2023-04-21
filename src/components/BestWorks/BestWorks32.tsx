import React from 'react'
import Image from "next/image";


import recWork from "@/public/works/work4.png";
import listik from "@/public/icons/listik.svg";
import woodCut from "@/public/icons/wood-cut.svg";

import { Roboto } from "next/font/google";
const roboto = Roboto({
  weight: ["700"],
  subsets: ["latin"],
});

export default function BestWorks32() {
  return (
    <div className="bg-white">
        <div className="c-container pt-[75px] pb-4 text-[#333333]">
          <div className="flex justify-center items-start gap-[120px] xl:gap-[60px] lg:gap-[45px] md:flex-col md:items-center">
            <div className="flex-shrink-0 relative pl-7">
              <div className="absolute z-20 bottom-[85px] xl:bottom-[115px] text-white -right-5 w-[255px] h-[105px] bg-[#202328E5] flex items-center justify-center gap-[10px] px-[28.5px] ">
                <p
                  className={
                    "font-bold  text-[70px] leading-[82px] " + roboto.className
                  }
                >
                  32
                </p>
                <p className="font-extrabold text-[28px] leading-[32.9px]">
                  года на рынке
                </p>
              </div>
              <Image
                src={recWork}
                alt="rectangle work"
                className="relative z-10 xl:w-[400px] xl:h-[500px] lg:w-[310px] lg:h-[450px] md:w-[560px] md:h-[500px] sm:w-[400px] xs:w-[300px] xs:h-[400px]"
              />
              <div className="absolute -top-5 left-2  w-[265px] h-[274px] lg:h-[200px] lg:w-[198px] md:w-[281px] md:h-[274px] sm:w-[265px] xs:w-[245px] xs:h-[230px] bg-[#EFF4F8]"></div>
            </div>
            <div>
              <h4 className="font-black uppercase text-[18px] leading-[21.1px] text-main-amber md:text-center ">
                {"\\\\"}ЛУЧШИЕ РАБОТЫ
              </h4>
              <h3 className=" w-[415px] lg:w-[340px] xs:w-[350px] md:mx-auto font-extrabold text-[28px] md:text-[25px] md:leading-[31px] leading-[32.9px] mt-[10px] md:text-center sm:px-2">
                Проектируем и создаём экологичный комфорт
              </h3>
              <div className="flex gap-[10px] my-5 md:justify-center">
                <div className="rounded-md w-[5px] h-[5px] bg-main-amber "></div>
                <div className="rounded-md w-[5px] h-[5px] bg-main-amber "></div>
                <div className="rounded-md w-[5px] h-[5px] bg-main-amber "></div>
              </div>
              <p className="w-[512px] xl:w-[470px] lg:w-[380px] xs:w-[330px] md:text-center md:mx-auto text-[14px] leading-[24px] text-left sm:text-center ">
                В работе мы используем только лучше материалы на рынке по
                доступным ценам. Наши специалисты подберут наиболее подходящие
                породы дерева, специалисты по дизайну разработают готовое
                решение.
              </p>
              <div className="flex justify-start gap-[60px] lg:gap-30px mt-[60px] sm:flex-col sm:items-center">
                <div className=" w-[220px] lg:w-[140px] md:w-[220px] text-[14px] leading-[24px]">
                  <div className="mb-[15px] flex gap-[15px] lg:flex-col lg:items-center">
                    <Image src={listik} alt="liskit" />
                    <p className="font-medium text-[18px] leading-[21.1px] ">
                      Безопасные материалы
                    </p>
                  </div>
                  <p>
                    Безопасность каждого из используемых материалов
                    подтверждается соответствующим сертификатом европейского
                    стандарта. Мы используем продукцию только проверенных годами
                    брендов.
                  </p>
                </div>
                <div className=" w-[220px] lg:w-[140px] md:w-[220px] text-[14px] leading-[24px]">
                  <div className="mb-[15px] flex gap-[15px] lg:flex-col lg:items-center">
                    <Image src={woodCut} alt="wood cut" />
                    <p className="font-medium text-[18px] leading-[21.1px] ">
                      Безопасные материалы
                    </p>
                  </div>
                  <p>
                    Безопасность каждого из используемых материалов
                    подтверждается соответствующим сертификатом европейского
                    стандарта. Мы используем продукцию только проверенных годами
                    брендов.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}
