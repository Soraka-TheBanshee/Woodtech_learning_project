import { FC } from "react";
import Link from "next/link";
import Image from "next/image";

interface SocialsElementProps {
  url: string;
  icon: any;
  alt: string;
}

const SocialsElement: FC<SocialsElementProps> = ({ url, icon, alt }) => {
  return (
    <div>
      <Link href={url} className="">
        <Image priority src={icon} alt={alt} />
      </Link>
    </div>
  );
};

export default SocialsElement;
