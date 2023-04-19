"use client"

import Link from 'next/link'
import { FC } from 'react'

interface NavElementProps {
  url: string,
  name: string,
  selected: string
}

const NavElement: FC<NavElementProps> = ({url, name, selected}) => {
  const isSelected = selected === url 
  return <Link href={url} className={`${isSelected?'bg-white-transparent-40 text-[#333333]':'hover:border-white'} transition-colors duration-300 px-[15px] py-[5px] rounded-bl-[5px] rounded-tr-[5px] border border-transparent `} >{name}</Link>
}

export default NavElement