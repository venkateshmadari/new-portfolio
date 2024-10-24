import React from "react";
import { Cover } from "@/components/ui/cover";
import { Sora } from "next/font/google";
import star from "../../../public/star.svg";
import Image from "next/image";


const sora = Sora({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export function Heading({ heading }: any) {
  return (
    <div>
      <h2 className={`text-2xl md:text-3xl flex items-center mt-10  text-center mb-4 ${sora.className}`}>
        <Image
          src={star}
          height={30}
          width={30}
          alt="star"
          className="object-contain"
        />
        <Cover>{heading}</Cover>
      </h2>
    </div>
  );
}
