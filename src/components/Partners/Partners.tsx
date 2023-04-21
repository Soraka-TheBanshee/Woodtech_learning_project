import React from 'react'
import Partner from './Partner'

import partner1 from '@/public/partners/partner1.png'
import partner2 from '@/public/partners/partner2.png'
import partner3 from '@/public/partners/partner3.png'
import partner4 from '@/public/partners/partner4.png'

export default function Partners() {
  return (
    <section className='c-container pt-[75px] pb-14' >
      <h2 className='text-center font-extrabold text-[28px] leading-[32.9px]' >Наши партнёры</h2>
      <div className='mt-[40px] flex justify-center gap-5 sm:flex-wrap' >
        <Partner logo={partner1} name='Millano Parquet S.R.L.' description=' Мы заботимся о древесине и тщательно следим за производственным процессом.' />
        <Partner logo={partner2} name='Mazzucato Legnami' description=' — итальянский производитель древесины, крупнейший на рынке Европы.' />
        <Partner logo={partner3} name='Andrea Fanfani' description=' создаёт уникальную итальянскую мебель ручной работы, как продолжнение вашего интерьера.' />
        <Partner logo={partner4} name='Angelo Cappilini' description=' воссоздаёт мебель ушедших эпох: ампир, барокко, рококо и др.' />
      </div>
    </section>
  )
}
