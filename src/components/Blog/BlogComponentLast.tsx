import { StaticImageData } from "next/image";
import { FC } from "react";
import Image from "next/image";
import Link from "next/link";

interface BlogComponentLastProps {
  img: StaticImageData;
}

const BlogComponentLast: FC<BlogComponentLastProps> = ({img}) => {
  return (
    <div className="w-[360px] h-[420px] p-[10px] border border-[#A1AABC] md:w-[500px] xs:w-[360px]">
      <div className="img h-full relative">
        <Image src={img} alt={'just image'} />
        <Link href={'/blog'} className="absolute top-[50%] left-0 w-full text-main-amber text-center font-bold text-[14px] leading-[24px] hover:underline " >Перейти к следующим запясям блога </Link >
      </div>
    </div>
  );
};

export default BlogComponentLast;
