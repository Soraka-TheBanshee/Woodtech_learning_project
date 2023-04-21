"use client";
import Image from "next/image";
import arrow from "@/public/icons/slider-arrow.svg";
import { useEffect, useState } from "react";

export default function ToTopBtn() {
  const [btnVisability, setBtnVisability] = useState<string>('pointer-events-none opacity-0 ');
  
  useEffect(() => {
    const scrollCheck = () => {
      
      if (window.scrollY > 150) {
        setBtnVisability('pointer-events-auto opacity-80 ');
      } else if (btnVisability === 'pointer-events-auto opacity-80 ') {
        setBtnVisability('pointer-events-none opacity-0 ');
      }
    };

    window.addEventListener("scroll", scrollCheck);

    return () => window.removeEventListener("scroll", scrollCheck);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <>
      <div
        onClick={scrollToTop}
        className={btnVisability + " transition-opacity duration-300 cursor-pointer fixed z-30 right-10 bottom-6 w-[45px] h-[45px] flex items-center justify-center bg-main-amber rounded-bl-md rounded-tr-md"}
      >
        <div className="-rotate-90 w-[8px] h-[15px]">
          <Image src={arrow} alt="arrow" />
        </div>
      </div>
    </>
  );
}
