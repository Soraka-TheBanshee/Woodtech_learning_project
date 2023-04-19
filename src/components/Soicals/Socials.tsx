import React from 'react'
import facebook from '@/public/icons/facebook.svg'
import insta from '@/public/icons/insta.svg'
import twitter from '@/public/icons/twitter.svg'
import vk from '@/public/icons/vk.svg'
import SocialsElement from './SocialsElement'


export default function Socials() {
  return (
    <div className=' flex items-center justify-between gap-3 rounded-full p-[11px] bg-white-transparent-40 ' >
      <SocialsElement alt='facebook' url='#' icon={facebook} />
      <SocialsElement alt='insta' url='#' icon={insta} />
      <SocialsElement alt='twitter' url='#' icon={twitter} />
      <SocialsElement alt='vk' url='#' icon={vk} />
    </div>
  )
}
