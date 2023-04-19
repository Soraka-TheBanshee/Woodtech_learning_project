"use client";

import React from "react";
import { usePathname } from "next/navigation";
import NavElement from "./NavElement";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <div className="mx-2">
      <div className="flex gap-5 items-center flex-wrap lg:items-start lg:justify-end md:w-[330px] sm:w-[220px] sm:justify-center sm:gap-1  " >
        <NavElement name="Главная" url="/" selected={pathname} />
        <NavElement name="Проекты" url="/projects" selected={pathname} />
        <NavElement name="Услуги" url="/service" selected={pathname} />
        <NavElement name="Блог" url="/blog" selected={pathname} />
        <NavElement name="Компания" url="/about" selected={pathname} />
      </div>
    </div>
  );
}
