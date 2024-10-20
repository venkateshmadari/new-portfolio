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
  const words = ["Front-End Web Developer", "Designer", "Developer", "Web Integrator"];
  return (
    <BackgroundLines className="flex items-center justify-center w-full flex-col px-4 bg-black">
      <h2
        className={`${sora.className} text-center capitalize text-2xl md:text-4xl lg:text-6xl xl:text-7xl py-2 md:py-10 relative z-20 font-bold tracking-tight`}
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
      className={` ${forum.className}  text-4xl mx-auto font-bold text-shade -mt-8`}
      >
        <FlipWords words={words} />
      </div>
      <p
        className={`${forum.className} max-w-xl mx-auto text-sm md:text-lg lg:text-xl text-neutral-400 text-center`}
      >
        Get the best advices from our experts, including expert artists,
        painters, marathon enthusiasts and RDX, totally free.
      </p>
    </BackgroundLines>
  );
}
