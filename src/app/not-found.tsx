"use client";
import React from "react";
import { FaReact } from "react-icons/fa";
import { motion } from "framer-motion";

const NotFound = () => {
  return (
    <div className="relative bg-black h-[100vh] flex flex-col justify-center items-center p-4">
      <h1 className="text-4xl md:text-6xl lg:text-8xl xl:text-9xl font-bold text-[#263238] mb-4">
        Page
      </h1>
      <div className="flex items-center mb-4">
        <span className="text-[6rem] md:text-[8rem] lg:text-[10rem] xl:text-[12rem] text-[#263238]">
          N
        </span>
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
          className="flex items-center"
        >
          <FaReact className="text-[4rem] md:text-[6rem] lg:text-[8rem] xl:text-[10rem] text-primary" />
        </motion.div>
        <span className="text-[6rem] md:text-[8rem] lg:text-[10rem] xl:text-[12rem] text-[#263238]">
          T
        </span>
      </div>
      <h1 className="text-4xl md:text-6xl lg:text-8xl xl:text-9xl font-bold text-[#263238] mt-4">
        Found
      </h1>
    </div>
  );
};

export default NotFound;
