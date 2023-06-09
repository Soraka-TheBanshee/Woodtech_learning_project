import Link from "next/link";
import { FC } from "react";

export interface FLink {
  name: string;
  url: string;
}

interface FooterTallBlockProps {
  header: string;
  links: FLink[];
}

const FooterTallBlock: FC<FooterTallBlockProps> = ({ header, links }) => {
  return (
    <div className="w-[169px] md:text-center sm:w-[130px] ">
      <h2 className="font-black text-[18px] leading-[21.1px] uppercase ">
        {header}
      </h2>
      <div className="w-[30px] border-t-[3px] border-t-main-amber mt-[25px] md:mx-auto"></div>

      <div className="flex flex-col " >
        {links.map((link) => {
          return (
            <Link
              key={link.name}
              href={link.url}
              className="mt-[25px] text-[14px] leading-[24px] text-white-transparent-40 hover:text-main-amber hover:underline"
            >
              {link.name}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default FooterTallBlock;
