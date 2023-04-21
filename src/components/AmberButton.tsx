import { FC } from "react";

interface AmberButtonProps {
  name: string;
  clickHandler?: () => void;
  padding: [number, number];
}

const AmberButton: FC<AmberButtonProps> = ({ padding, name, clickHandler }) => {
  const pad = padding[1].toString() + "px " + padding[0].toString() + "px";
  return (
    <div
      onClick={clickHandler}
      className="bg-main-amber text-white rounded-tr-[5px] rounded-bl-[5px] inline-block text-[18px] leading-[21.1px] font-black select-none cursor-pointer "
      style={{ padding: pad }}
    >
      {name}
    </div>
  );
};

export default AmberButton;
