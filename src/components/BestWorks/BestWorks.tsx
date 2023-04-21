"use client";
import BestWorks32 from "./BestWorks32";
import BestWorksDark from "./BestWorksDark";
import BestWorksLight from "./BestWorksLight";


export default function BestWorks() {
  return (
    <section>
      <BestWorksDark />

      <BestWorksLight />

      <BestWorks32 />      
    </section>
  );
}
