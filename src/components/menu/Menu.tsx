import React from "react";
import { BackgroundLines } from "@/components/ui/background-lines";
import { Sora, Forum } from "next/font/google";
import { FlipWords } from "../ui/flip-words";

const sora = Sora({
  subsets: ["latin"],
});

const forum = Forum({
  subsets: ["latin"],
  weight: ["400"],
});

export function BackgroundLinesDemo() {
  const words = [
    "Front-End Web Developer",
    "Web Designer",
    "Developer",
    "Web Integrator",
  ];
  return (
    <BackgroundLines className="flex items-center justify-center w-full flex-col px-4 bg-black">
      <h2
        className={` text-center capitalize text-3xl md:text-4xl lg:text-6xl xl:text-7xl py-2 md:py-10 relative z-20 font-bold tracking-tight`}
      >
        <span
          className={` ${forum.className} text-shade text-xl font-normal tracking-[1px]`}
          style={{ color: "white" }}
        >
          Hello, I'm
        </span>
        <br />
        <span className={`text-gradient ${sora.className}`}>
          venkatesh madari,
        </span>
      </h2>
      <div
        className={`${forum.className} md:text-4xl text-xl mx-auto font-bold text-shade md:-mt-8`}
      >
        <FlipWords words={words} />
      </div>
    </BackgroundLines>
  );
}
