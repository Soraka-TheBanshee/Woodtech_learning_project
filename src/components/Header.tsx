import { FC } from "react";
import Image from "next/image";
import subtractionIcon from "@/public/icons/subtractIcon.svg";
import Navbar from "./Navbar/Navbar";
import Socials from "./Soicals/Socials";

const Header: FC = () => {
  return (
    <>
      <header className="px-[44px] relative z-20 xl:pt-3">
        <div className="
        min-h-[115px] flex justify-between items-center  flex-wrap 
        lg:grid lg:grid-cols-3
        xs:grid-cols-1  xs:gap-y-2
        ">
          
          <div className="flex items-start gap-[7px] self-center justify-self-center xs:scale-150 xs:mt-6 xs:mb-4">
            <div className=" container pt-[2px]">
              <Image priority src={subtractionIcon} alt="subtract icon" />
            </div>
            <div>
              <span className="block text-[17px] leading-5 font-bold">
                WOODTECH
              </span>
              <span className="block">Architechture</span>
            </div>
          </div>

          <div className="row-[1/3] col-[2/4] xs:row-span-1 xs:col-auto justify-self-end xs:justify-self-center " >
            <Navbar />
          </div>

          <div className="flex-initia row-[2/3] col-[1/2] xs:row-span-1 xs:col-auto  self-center justify-self-center xs:justify-self-stretch xs:mb-2">
            <Socials />
          </div>

        </div>
        
        <div className="border-b border-white-transparent-40"></div>
      </header>
    </>
  );
};

export default Header;
