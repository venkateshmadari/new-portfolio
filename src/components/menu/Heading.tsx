import React from "react";
import { Cover } from "@/components/ui/cover";
import { Sora } from "next/font/google";

const sora = Sora({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export function Heading({ heading }: any) {
  return (
    <div>
      <h2 className={`text-2xl md:text-3xl text-center mb-4 ${sora.className}`}>
        <Cover>{heading}</Cover>
      </h2>
    </div>
  );
}
