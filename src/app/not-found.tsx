import React from "react";
import { Sora } from "next/font/google";

export const sora = Sora({ subsets: ["latin"], weight: ["400", "600"] });

const NotFound = () => {
  return (
    <div className="h-[100vh] bg-black flex items-center justify-center flex-col gap-1">
      <h1 className={`text-secondary text-3xl capitalize font-bold ${sora.className} pt-16`}> <span className="text-primary">Oops!</span> page not found </h1>
      <img src="/error.svg" alt="404 page not found" className="h-auto w-[500px] " />
    </div>
  );
};

export default NotFound;
