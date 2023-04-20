import { StaticImageData } from "next/image";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

import tearpoint from "@/public/icons/tearpoint.svg";

interface WorkCardProps {
  img: StaticImageData;
  address: string;
  description: string;
  url: string;
}

const WorkCard: FC<WorkCardProps> = ({ img, address, description, url }) => {
  return (
    <Link href={url} className="w-[360px] xl:w-[320px] lg:w-[200px] md:w-[300px] sm:w-[360px] sm:min-h-[325px] min-h-[325px] xl:min-h-[300px] text-[#333333] bg-white group flex flex-col ">
      <Image src={img} alt={description} />
      <div className="px-[30px] mt-[18px] flex gap-3 flex-grow">
        
        <div className="flex flex-col items-center pt-[5px]">
          <Image src={tearpoint} alt="Tearpoint" width={17} />
          <div className="mt-[14px]">
            <div className="w-[5px] h-[5px] rounded-full bg-[#DDE2E9] group-hover:bg-main-amber"></div>
            <div className="w-[5px] h-[5px] rounded-full bg-[#DDE2E9] group-hover:bg-main-amber mt-[10px]"></div>
            <div className="w-[5px] h-[5px] rounded-full bg-[#DDE2E9] group-hover:bg-main-amber mt-[10px]"></div>
          </div>
        </div>

        <div className="flex-grow" >
          <p className="text-[14px] leading-[24px] text-[#8C9AB3] " >{address}</p>
          <p className="font-medium mt-[7px] text-[18px] leading-[21.1px] lg:text-sm md:text-[18px] md:leading-[21.1px] ">{description}</p>
        </div>

      </div>

      <div className="h-[3px] bg-[#DDE2E9] group-hover:bg-main-amber "></div>
    </Link>
  );
};

export default WorkCard;
