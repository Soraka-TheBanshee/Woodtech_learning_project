import React from "react";
import UsTrustElement from "./UsTrustElement";
import AmberButton from "../AmberButton";

import { Roboto } from "next/font/google";
const roboto = Roboto({
  weight: ["700"],
  subsets: ["latin"],
});

export default function Bid() {
  return (
    <section className=" sm:block flex items-center justify-between mt-[169px] bg-deep-dark px-[80px] pt-[76px] pb-[86px] ">
      <div className="flex-grow ">
        <h3 className="font-[900] text-[18px] leading-[21px] text-[#8C9AB3] sm:text-center">
          НАМ ДОВЕРЯЮТ
        </h3>
        <div className="my-[20px] border-[0.5px] border-white opacity-30 w-[220px] sm:mx-auto "></div>
        <div className="grid grid-cols-3 md:grid-cols-2 gap-y-[10px] sm:hidden ">
          <UsTrustElement count={860} who="клиентов по всему миру" />
          <UsTrustElement count={36} who="лучших франчайзи" />
          <UsTrustElement count={38} who="пернатых попугаев" />
          <UsTrustElement count={23} who="надёжных партнёра" />
          <UsTrustElement count={108} who="производителя мебели" />
          <UsTrustElement count={256} who="восьмибитных цветов" />
          <UsTrustElement count={69} who="басистов" />
          <UsTrustElement count={85} who="сотрудников" />
        </div>
      </div>

      <div className="w-[360px] xs:w-auto ">
        <p className="text-[14px] leading-[24px] text-right ">
          Позвоните нам или оставьте заявку на сайте. Мы перезвоним вам в
          течение 10 минут.
        </p>
        <div className={'font-light text-[28px] lg:text-xl leading-[47.6px] text-right  hover:underline ' + roboto.className} >
          <a href="tel:+7-499-000-00-00">
            +7 {"("}499{")"} 000-00-00
          </a>
        </div>
        <div className="flex justify-end" >
          <AmberButton padding={[30, 12]} name="ОФОРМИТЬ ЗАЯВКУ СЕЙЧАС" clickHandler={undefined} />
        </div>
      </div>
    </section>
  );
}
