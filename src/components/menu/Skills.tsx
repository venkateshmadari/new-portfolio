import React from "react";
import Image from "next/image";
import nextJs from "../../../public/next.svg";
import typescript from "../../../public/typescript-programming-language-icon.svg";
import react from "../../../public/react-js-icon.svg"
import js from "../../../public/javascript-programming-language-icon.svg"
import tailwind from "../../../public/tailwind-css-icon.svg"

const Skills = () => {
  return (
    <div className="flex items-center flex-col justify-center  bg-gradient-to-r py-8 rounded-2xl from-primary to-shade">
      <div className="flex flex-wrap justify-center h-[100px] w-[100px] p-2">
        <Image
          src={nextJs}
          alt="image"
          height={500}
          width={500}
          className="w-full h-full object-contain"
        />
      </div>
    </div>
  );
};

export default Skills;
