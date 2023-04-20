import Image from "next/image";
import subtractionIcon from "@/public/icons/Subtract_gray.svg";
import arrow from "@/public/icons/slider-arrow.svg";

import Link from "next/link";
import SocialsFoot from "../Soicals/SocialsFoot";

export default function Footer() {
  return (
    <section className="full-bleed-black py-[75px]">
      <div className="relative flex justify-center gap-[45.5px] flex-wrap">
        <div className="w-[340px] ml-[45.5px]">
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

        <div className="w-[169px] mr-[21px]">
          <h2 className="font-black text-[18px] leading-[21.1px] uppercase ">
            Меню
          </h2>

          <div className="w-[30px] border-t-[3px] border-t-main-amber mt-[25px]"></div>

          <div className="flex flex-col ">
            <Link
              href="/"
              className="mt-[25px] text-[14px] leading-[24px] text-white-transparent-40 hover:text-main-amber hover:underline"
            >
              Главная
            </Link>
            <Link
              href="/projects"
              className="mt-[25px] text-[14px] leading-[24px] text-white-transparent-40 hover:text-main-amber hover:underline"
            >
              Проекты
            </Link>
            <Link
              href="/serice"
              className="mt-[25px] text-[14px] leading-[24px] text-white-transparent-40 hover:text-main-amber hover:underline"
            >
              Услуги
            </Link>
            <Link
              href="/blog"
              className="mt-[25px] text-[14px] leading-[24px] text-white-transparent-40 hover:text-main-amber hover:underline"
            >
              Блог
            </Link>
            <Link
              href="/about"
              className="mt-[25px] text-[14px] leading-[24px] text-white-transparent-40 hover:text-main-amber hover:underline"
            >
              Компания
            </Link>
          </div>
        </div>

        <div className="w-[169px] mr-[115px]">
          <h2 className="font-black text-[18px] leading-[21.1px] uppercase ">
            Услуги
          </h2>

          <div className="w-[30px] border-t-[3px] border-t-main-amber mt-[25px]"></div>

          <div className="flex flex-col ">
            <Link
              href="#"
              className="mt-[25px] text-[14px] leading-[24px] text-white-transparent-40 hover:text-main-amber hover:underline"
            >
              Дизайн интерьера
            </Link>
            <Link
              href="#"
              className="mt-[25px] text-[14px] leading-[24px] text-white-transparent-40 hover:text-main-amber hover:underline"
            >
              Проектирование
            </Link>
            <Link
              href="#"
              className="mt-[25px] text-[14px] leading-[24px] text-white-transparent-40 hover:text-main-amber hover:underline"
            >
              Поставка дерева
            </Link>
            <Link
              href="#"
              className="mt-[25px] text-[14px] leading-[24px] text-white-transparent-40 hover:text-main-amber hover:underline"
            >
              Ремонт
            </Link>
            <Link
              href="#"
              className="mt-[25px] text-[14px] leading-[24px] text-white-transparent-40 hover:text-main-amber hover:underline"
            >
              Концепт
            </Link>
            <Link
              href="#"
              className="mt-[25px] text-[14px] leading-[24px] text-white-transparent-40 hover:text-main-amber hover:underline"
            >
              Выезд мастера
            </Link>
          </div>
        </div>

        <div className="w-[265px]">
          <h2 className="font-black text-[18px] leading-[21.1px] uppercase ">
            Мы в соцсетях
          </h2>

          <div className="w-[30px] border-t-[3px] border-t-main-amber mt-[25px]"></div>

          <p className="text-[14px] leading-[24px] mt-[25px]">
            Подпишитесь на нас в социальных сетях, чтобы не пропустить выход
            новых невероятных проектов, разработанных для наших клиентов по
            всему миру.
          </p>

          <div className="mt-[25px]">
            <SocialsFoot />
          </div>
        </div>

        <div className="cursor-pointer absolute right-[18px] -bottom-[35px] w-[45px] h-[45px] flex items-center justify-center bg-main-amber rounded-bl-md rounded-tr-md">
          <div className="-rotate-90 w-[8px] h-[15px]">
            <Image src={arrow} alt="arrow" />
          </div>
        </div>

      </div>
    </section>
  );
}
