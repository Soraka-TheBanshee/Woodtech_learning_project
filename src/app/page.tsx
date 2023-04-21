import AmberButton from "@/components/AmberButton";
import BestWorks from "@/components/BestWorks/BestWorks";
import Bid from "@/components/Bid/Bid";
import BlogHome from "@/components/Blog/BlogHome";
import Footer from "@/components/Footer/Footer";
import Partners from "@/components/Partners/Partners";
import Swiper from "@/components/Slider/Swiper";

export default function Home() {
  return (
    <main className="h-full">
      <div className="c-container">
        <div className="">
          <Swiper />
        </div>
        <section className="z-20 pt-[190px] pointer-events-none relative inline-block ml-[79px] sm:ml-0 sm:w-full xs:pt-[305px]">
          <h2 className=" font-light text-[58px] leading-[68px] sm:text-center sm:block" >Woodhous</h2>
          <div className="sm:mx-auto mt-[15px] sm:w-[320px]" >
            <AmberButton padding={[15, 5]} name="ДИЗАЙН НА ВЫСОКОМ УРОВНЕ" />
          </div>
          <p className="px-[22px] py-[15px] min-h-[124px] max-w-[415px] mt-[50px] bg-[#202328E5] rounded-tr-[10px] rounded-bl-[10px] text-[14px] leading-6 sm:mx-auto " >
            Разработка и реализация красивых интерьеров из дерева ещё никогда не
            была так доступна. Интерьеры из дерева различной породы сделают ваш
            дом уютным и тёплым, радуя вас и ваших гостей.
          </p>
        </section>
      </div>

      <Bid />

      <BestWorks />

      <Partners />

      <BlogHome />

      <Footer />

      
    </main>
  );
}
