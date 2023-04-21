import React from 'react'
import SocialsFoot from '../Soicals/SocialsFoot'

export default function FooterInSocials() {
  return (
    <div className="w-[265px]">
          <h2 className="font-black text-[18px] leading-[21.1px] uppercase ">
            Мы в соцсетях
          </h2>

          <div className="w-[30px] border-t-[3px] border-t-main-amber mt-[25px]"></div>

          <p className="text-[14px] leading-[24px] mt-[25px]">
            Подпишитесь на нас в социальных сетях, чтобы не пропустить выход
            новых невероятных проектов, разработанных для наших клиентов по
            всему миру.
          </p>

          <div className="mt-[25px]">
            <SocialsFoot />
          </div>
        </div>
  )
}
