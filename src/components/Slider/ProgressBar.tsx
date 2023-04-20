"use client"
import { FC, useMemo, useState } from "react";
import { ISlideIndex } from "./Swiper";

interface ProgressBarProps {
  slideIndex: undefined | ISlideIndex
}

const ProgressBar: FC<ProgressBarProps> = ({slideIndex}) => {
  
  const progressInstanceProcents = useMemo(() =>{
    let instance
    console.log('useMemo is working');
    
    if (slideIndex) {
      instance = 1/(slideIndex.length/100)
    } else {
      instance = 0
    }
    return instance 
    
  }, [slideIndex?.length])
  
  


  let progress 

  if (slideIndex) {
    if (slideIndex?.current === slideIndex?.length) {
      progress = '100'
    } else {
      const result = slideIndex.current * progressInstanceProcents
      progress = result.toString()
    }
    
  } else {
    progress = '0'
  }
  
  const styles = {transform: `translate(${progress}%, 0)`}

  console.log(progress);
  

  return (
    <div>
      <div className="relative h-[5px] w-[180px] xs:w-[150px] rounded-md bg-[#A1AABC] overflow-hidden " >
        <div className={'absolute h-full w-full bg-[#8C9AB3] -left-full transition-transform duration-300 '} 
        style={styles}></div>
      </div>
    </div>
  );
};

export default ProgressBar;
