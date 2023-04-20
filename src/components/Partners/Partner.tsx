import Image, { StaticImageData } from "next/image";
import { FC } from "react";

interface PartnerProps {
  logo: StaticImageData;
  name: string;
  description: string;
}

const Partner: FC<PartnerProps> = ({ logo, name, description }) => {
  return (
    <div className="flex flex-col items-center w-[270px] " >
      <div className="h-[100px] flex justify-center items-center" >
        <Image src={logo} alt={name} className="" />
      </div>
      <p className="text-center text-[14px] leading-[24px]" ><span className="font-extrabold text-main-amber" >{name}</span> {description}</p>
    </div>
  );
};

export default Partner;
