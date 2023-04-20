import { StaticImageData } from 'next/image'
import Link from 'next/link';
import Image from 'next/image';
import { FC } from 'react'

interface SocialsFootElementProps {
  url: string;
  icon: any;
  alt: string;
}

const SocialsFootElement: FC<SocialsFootElementProps> = ({url, icon, alt}) => {
  return <div>
  <Link href={url} className="group inline-block w-10 h-10 border-[3px]  border-white-transparent-40 hover:border-none hover:bg-main-amber">
    <div className="footer-socials-icon opacity-40 group-hover:opacity-100 w-full h-full flex items-center justify-center">
      <Image priority src={icon} alt={alt} />
    </div>
    
  </Link>
</div>
}

export default SocialsFootElement