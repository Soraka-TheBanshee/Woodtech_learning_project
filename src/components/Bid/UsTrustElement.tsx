import { FC } from "react";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  weight: ["700"],
  subsets: ["latin"],
});

interface UsTrustElementProps {
  who: string;
  count: number | string;
}

const UsTrustElement: FC<UsTrustElementProps> = ({ who, count }) => {
  return (
    <p className="inline-block text-[14px] leading-[24px] text-[#8C9AB3] ">
      <span className={'font-bold text-[14px] leading-[24px] text-[#A1AABC] ' + roboto.className} >{count}</span> {who}
    </p>
  );
};

export default UsTrustElement;
