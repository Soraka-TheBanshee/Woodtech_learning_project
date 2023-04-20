import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { FC } from "react";

import { Roboto } from "next/font/google";
const roboto = Roboto({
  weight: ["700"],
  subsets: ["latin"],
});

interface BlogComponentProps {
  date: string;
  img: StaticImageData;
  header: string;
  description: string;
  url: string
}

const BlogComponent: FC<BlogComponentProps> = ({
  date,
  img,
  header,
  description,
  url
}) => {
  return (
    <div className="w-[360px] md:w-[500px] xs:w-[360px] h-[420px] p-[10px] pb-[25px] border border-[#A1AABC] flex flex-col">
      <div className="img h-[200px] lg:h-[128px] md:h-[200px] relative">
        <Image src={img} alt={header} />
        <div className={"absolute top-[10px] left-[10px] px-[10px] bg-main-amber text-white font-bold text-[14px] leading-[24px] uppercase " + roboto.className} >{date}</div>
      </div>
      <div className="flex gap-[10px] mt-[25px] ">
        <div className="h-[40px] border border-main-amber" ></div>
        <h3 className="font-black text-[18px] leading-[21.1px] uppercase " >{header}</h3>
      </div>

      <p className="text-[14px] leading-[24px] flex-grow " >{description}</p>

      <Link href={url} className="font-bold text-[14px] leading-[24px] hover:underline" >Читать полностью</Link>

    </div>
  );
};

export default BlogComponent;
