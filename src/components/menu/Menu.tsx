"use client";
import React, { useState } from "react";

const Menu = () => {
  const [darkMode, setDarkMode] = useState(false);
  const enableMode = () => {
    setDarkMode(!darkMode);
  };
  

  return (
    <div className={darkMode ? "dark" : ""}>
      <div className="flex items-center justify-center h-[100vh] flex-col w-full bg-white dark:bg-neutral-900">
        <h1 className="text-primary text-2xl font-semibold text-center">
          welcome to my portfolio
        </h1>
        <h1 className="text-black dark:text-slate-200 text-2xl font-semibold text-center">
          my name is venkatesh
        </h1>
        <button
          className="flex items-center justify-center"
       
        >
          <label className="relative inline-flex items-center cursor-pointer" >
            <input className="sr-only peer" type="checkbox"    onClick={enableMode} />
            <div className="w-16 h-8 rounded-full ring-0 peer duration-500 outline-none bg-gray-200 overflow-hidden before:flex before:items-center before:justify-center after:flex after:items-center after:justify-center before:content-['☀️'] before:absolute before:h-6 before:w-6 before:top-1/2 before:bg-white before:rounded-full before:left-1 before:-translate-y-1/2 before:transition-all before:duration-700 peer-checked:before:opacity-0 peer-checked:before:rotate-90 peer-checked:before:-translate-y-full shadow-sm shadow-gray-400 peer-checked:shadow-lg peer-checked:shadow-gray-700 peer-checked:bg-[#383838] after:content-['🌑'] after:absolute after:bg-[#1d1d1d] after:rounded-full after:top-[4px] after:right-1 after:translate-y-full after:w-6 after:h-6 after:opacity-0 after:transition-all after:duration-700 peer-checked:after:opacity-100 peer-checked:after:rotate-180 peer-checked:after:translate-y-0"></div>
          </label>
        </button>
      </div>
    </div>
  );
};

export default Menu;
