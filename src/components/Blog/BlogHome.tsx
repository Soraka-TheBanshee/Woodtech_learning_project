import React from 'react'
import BlogComponent from './BlogComponent'

import blog1 from '@/public/blogs/blog1.png'
import blog2 from '@/public/blogs/blog2.png'
import blog3 from '@/public/blogs/blog3.png'
import BlogComponentLast from './BlogComponentLast'

export default function BlogHome() {
  return (
    <section className='full-bleed-white-white text-[#333333] pt-[75px] pb-[75px]' >
      <h2 className='text-center font-extrabold text-[28px] leading-[32.9px]' >Наш блог</h2>
      <div className='mt-[45px] flex justify-center gap-5 md:flex-wrap'>
        <BlogComponent url='#' date='12 июля' img={blog1} header='Построили потрясающую деревянную лестницу' description='Один из самых необычных проектов нашей компании — винтовая деревянная лестница в старинном стиле.'  />
        <BlogComponent url='#' date='02 июля' img={blog2} header='СОЗДАНИЕ ДЕРЕВЯННОЙ ФУТУРИСТИЧЕСКОЙ СПАЛЬНИ' description='Создание уникальнейшего проекта — деревянной спальни в футуристическом стиле — занялj у команды Woodtech два месяца'  />
        <BlogComponentLast img={blog3} />
      </div>
      <div className='mt-[50px] flex justify-center gap-[10px] md:hidden' >
        <div className='border hover:border-main-amber border-[#DDE2E9] w-[30px]' ></div>
        <div className='border hover:border-main-amber border-[#DDE2E9] w-[30px]' ></div>
        <div className='border hover:border-main-amber border-[#DDE2E9] w-[30px]' ></div>
      </div>
    </section>
  )
}
