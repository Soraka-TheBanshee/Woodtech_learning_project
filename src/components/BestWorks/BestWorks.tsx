"use client";
import React from "react";
import WorkCard from "./WorkCard";
import Image from "next/image";

import work1 from "@/public/works/work1.png";
import work2 from "@/public/works/work2.png";
import work3 from "@/public/works/work3.png";
import recWork from "@/public/works/work4.png";
import listik from "@/public/icons/listik.svg";
import woodCut from "@/public/icons/wood-cut.svg";
import AmberButton from "../AmberButton";

import { Roboto } from "next/font/google";
const roboto = Roboto({
  weight: ["700"],
  subsets: ["latin"],
});

export default function BestWorks() {
  return (
    <section>
      <div className="relative">
        <div className=" mt-[100px] flex sm:flex-col-reverse justify-center items-center gap-[59.5px] md:gap-[45px] sm:gap-[30px]">
          <p className="max-w-[417px] lg:max-w-[380px] md:max-w-[280px] text-[14px] leading-[24px] text-right sm:text-center ">
            Представляем вам лучшие проекты, разработанные нашей командой
            профессионалов с любовью и заботой о клиентах. Портфолио позволит
            вам выбрать интересующий стиль, цвет дерева, фактуру, дизайн и
            расположение элементов.
          </p>
          <div className="h-[140px] sm:h-0 sm:w-[160px] border-l sm:border-t border-white-transparent-40 "></div>
          <div>
            <h4 className="font-black uppercase text-[18px] leading-[21.1px] text-main-amber sm:text-center">
              \\Лучшие работы
            </h4>
            <p className=" max-w-[415px] font-extrabold text-[28px] md:text-[25px] md:leading-[31px] leading-[32.9px] mt-[10px] sm:text-center sm:px-2">
              Создаем тёплую атмосферу вашего отдыха
            </p>
          </div>
        </div>

        <div className=" absolute -bottom-[370px] md:-bottom-[715px] sm:-bottom-[1050px] z-10 w-full flex items-center justify-center gap-[20px] flex-wrap">
          <WorkCard
            img={work1}
            address="Санкт-Пит., Английский пр"
            description="Панорманая чилаут зона для чтения и отдыха"
            url="#"
          />
          <WorkCard
            img={work2}
            address="Москва, Рублёво-Успенское ш."
            description="Современная гостиница в древесных тонах"
            url="#"
          />
          <WorkCard
            img={work3}
            address="Москва, на Якиманке"
            description="Уютный лофт в светлых древесных тонах"
            url="#"
          />
        </div>
      </div>

      <div className=" full-bleed-white mt-[173px] text-[#333333] pt-[300px] pb-[61px] md:pt-[645px] sm:pt-[990px] flex justify-center">
        <AmberButton name="ПОКАЗАТЬ ЕЩЁ" padding={[30, 12]} />
      </div>

      <div className="pt-[75px] full-bleed-white-white text-[#333333]">
        <div className="flex justify-center items-start gap-[120px] lg:gap-[60px] md:flex-col md:items-center">
          <div className="flex-shrink-0 relative">
            <div className="absolute bottom-[85px] xl:bottom-[115px] text-white -right-5 w-[255px] h-[105px] bg-[#202328E5] flex items-center justify-center gap-[10px] px-[28.5px] ">
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
              className="xl:w-[400px] xl:h-[500px] lg:w-[310px] md:w-[600px] md:h-[500px] sm:w-[400px] xs:w-[300px] xs:h-[400px]"
            />
            <div className="absolute -top-5 -left-5 -z-10 w-[265px] h-[274px] bg-[#EFF4F8] "></div>
          </div>

          <div>
            <h4 className="font-black uppercase text-[18px] leading-[21.1px] text-main-amber md:text-center ">
              \\ЛУЧШИЕ РАБОТЫ
            </h4>
            <h3 className=" w-[415px] xs:w-[350px] md:mx-auto font-extrabold text-[28px] md:text-[25px] md:leading-[31px] leading-[32.9px] mt-[10px] md:text-center sm:px-2">
              Проектируем и создаём экологичный комфорт
            </h3>
            <div className="flex gap-[10px] my-5 md:justify-center">
              <div className="rounded-md w-[5px] h-[5px] bg-main-amber "></div>
              <div className="rounded-md w-[5px] h-[5px] bg-main-amber "></div>
              <div className="rounded-md w-[5px] h-[5px] bg-main-amber "></div>
            </div>
            <p className="w-[512px] lg:w-[380px] xs:w-[330px] md:text-center md:mx-auto text-[14px] leading-[24px] text-left sm:text-center ">
              В работе мы используем только лучше материалы на рынке по
              доступным ценам. Наши специалисты подберут наиболее подходящие
              породы дерева, специалисты по дизайну разработают готовое решение.
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
                  Безопасность каждого из используемых материалов подтверждается
                  соответствующим сертификатом европейского стандарта. Мы
                  используем продукцию только проверенных годами брендов.
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
                  Безопасность каждого из используемых материалов подтверждается
                  соответствующим сертификатом европейского стандарта. Мы
                  используем продукцию только проверенных годами брендов.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
