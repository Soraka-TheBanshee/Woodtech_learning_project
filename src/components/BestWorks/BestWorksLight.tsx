import React from "react";
import WorkCard from "./WorkCard";
import AmberButton from "../AmberButton";


import work1 from "@/public/works/work1.png";
import work2 from "@/public/works/work2.png";
import work3 from "@/public/works/work3.png";

export default function BestWorksLight() {
  return (
    <div className="bg-[#EFF4F8]">
      <div className=" c-container text-[#333333] pb-[61px] ">
        <div className="-translate-y-[100px] z-10 w-full flex items-center justify-center gap-[20px] flex-wrap">
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
        <div className="flex justify-center -mt-[30px]">
          <AmberButton name="ПОКАЗАТЬ ЕЩЁ" padding={[30, 12]} />
        </div>
      </div>
    </div>
  );
}
