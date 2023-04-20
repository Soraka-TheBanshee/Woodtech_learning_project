import Image from "next/image";
import { FC } from "react";
import sliderArrow from "@/public/icons/slider-arrow.svg"



interface SwipperNavBtnProps {
  clickHandler: () => void;
  reverse?: boolean;
}

const SwipperNavBtn: FC<SwipperNavBtnProps> = ({clickHandler, reverse}) => {
  return (
    <div onClick={clickHandler} className="cursor-pointer" >
      <Image src={sliderArrow} alt='slider arrow' className={reverse?'rotate-180':undefined} />
    </div>
  );
};

export default SwipperNavBtn;
