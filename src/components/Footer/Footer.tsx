import Link from "next/link";

import AboutShort from "./AboutShort";
import FooterInSocials from "./FooterInSocials";
import FooterTallBlock, { FLink } from "./FooterTallBlock";

export default function Footer() {
  const menuLinks: FLink[] = [
    { name: "Главная", url: "/" },
    { name: "Проекты", url: "/projects" },
    { name: "Услуги", url: "/service" },
    { name: "Блог", url: "/blog" },
    { name: "Компания", url: "/about" },
  ];
  const servicesLinks: FLink[] = [
    { name: "Дизайн интерьера", url: "#" },
    { name: "Проектирование", url: "#" },
    { name: "Поставка дерева", url: "#" },
    { name: "Ремонт", url: "#" },
    { name: "Концепт", url: "#" },
    { name: "Выезд мастера", url: "#" },
  ];

  return (
    <div className="bg-deep-dark">
      <section className="c-container py-[75px]">
        <div className="flex justify-between flex-wrap
        md:flex-col md:gap-y-10 md:items-center">
          <AboutShort />
          <div className="flex gap-[21px]" >
            <FooterTallBlock header="Меню" links={menuLinks} />
            <FooterTallBlock header="Услуги" links={servicesLinks} />
          </div>
          <FooterInSocials />
        </div>
      </section>
    </div>
  );
}
