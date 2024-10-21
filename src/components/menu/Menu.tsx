import React from "react";
import { BackgroundLines } from "@/components/ui/background-lines";
import { Sora, Forum } from "next/font/google";
import { FlipWords } from "../ui/flip-words";

const sora = Sora({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
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
        className={`${sora.className} text-center capitalize text-3xl md:text-4xl lg:text-6xl xl:text-7xl py-2 md:py-10 relative z-20 font-bold tracking-tight`}
      >
        <span
          className={` ${forum.className} text-shade text-xl font-normal tracking-[1px]`}
          style={{ color: "white" }}
        >
          Hello, I'm
        </span>
        <br />
        <span className="text-gradient">venkatesh madari,</span>
      </h2>
      <div
        className={` ${forum.className}  md:text-4xl text-xl mx-auto font-bold text-shade md:-mt-8`}
      >
        <FlipWords words={words} />
      </div>
      {/* <p
        className={`${forum.className} max-w-4xl mx-auto text-sm md:text-lg lg:text-xl text-white text-center`}
      >
        A Front-End Engineer & Designer that takes great pleasure in
        conceptualizing and bringing to life visually stunning products. I am
        always eager to broaden my horizons and acquire new skills that will
        allow me to do my work more efficiently.
      </p> */}
    </BackgroundLines>
  );
}
