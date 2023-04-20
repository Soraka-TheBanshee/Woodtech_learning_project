import React from "react";
import Image from "next/image";
import testingImg from "@/public/testing-girl.png"

export default function Test() {
  return (
    <div>
      <Image
        src={testingImg}
        alt="cute anime girl"
        width={100}
        height={100}
      />{" "}
    </div>
  );
}
