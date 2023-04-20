import facebook from '@/public/icons/facebook.svg'
import FacebookSvg from '@/public/icons/FacebookSvg.jsx'
import insta from '@/public/icons/insta.svg'
import twitter from '@/public/icons/twitter.svg'
import vk from '@/public/icons/vk.svg'
import SocialsFootElement from './SocialsFootElement'


export default function SocialsFoot() {
  return (
    <div className=' flex items-center gap-3  ' >
      <SocialsFootElement alt='facebook' url='#' icon={facebook} />
      <SocialsFootElement alt='insta' url='#' icon={insta} />
      <SocialsFootElement alt='twitter' url='#' icon={twitter} />
      <SocialsFootElement alt='vk' url='#' icon={vk} />
    </div>
  )
}
