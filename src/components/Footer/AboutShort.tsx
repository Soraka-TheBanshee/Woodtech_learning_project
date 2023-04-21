import React from 'react'
import Image from "next/image";
import subtractionIcon from "@/public/icons/Subtract_gray.svg";



export default function AboutShort() {
  return (
    <div className="w-[340px] ml-[45.5px] xl:ml-0">
          <div className="flex items-start ">
            <Image src={subtractionIcon} alt="gray icon" />
            <div>
              <h4 className="font-bold text-[17px] leading-[20px] text-white-transparent-40">
                Woodtech
              </h4>
              <p className="text-[12px] leading-[14px] tracking-[0.12em] text-white-transparent-40">
                Architecture
              </p>
            </div>
          </div>

          <h2 className="font-black text-[18px] leading-[21.1px] uppercase mt-[45px] ">
            Коротко о нас
          </h2>
          <p className="text-[14px] leading-[24px] mt-[15px]">
            Мы досконально прорабатываем, а затем обсуждаем с нашими клиентами
            внешний вид каждого изделия. Мы крайне редко повторяемся, т.к.
            знаем, что вы цените индивидуальность и не будете довольствоваться
            готовыми решениями.
          </p>
        </div>
  )
}
