"use client";
import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import Preloader from "../components/preloader/Preloader";
import { BackgroundLinesDemo } from "@/components/menu/Menu";
import { NavbarDemo } from "@/components/navbar/Navbar";
import About from "@/components/menu/About";

import { Sora } from "next/font/google";
import Divider from "@/components/menu/Divider";
import BottomNavbar from "@/components/navbar/BottomNavbar";
import Skills from "@/components/menu/Skills";
import { Heading } from "@/components/menu/Heading";

const sora = Sora({ subsets: ["latin"] });

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll();

      setTimeout(() => {
        setIsLoading(false);
        document.body.style.cursor = "default";
        window.scrollTo(0, 0);
      }, 2000);
    })();
  }, []);
  return (
    <div className={sora.className}>
      <AnimatePresence mode="wait">
        {isLoading && <Preloader />}
      </AnimatePresence>
      <BackgroundLinesDemo />
      <NavbarDemo />
      <Divider />
      <About />
      <Divider />
      <div className="flex items-center justify-center">

      <Heading heading={"My Skills"} />
      </div>
      <div className="px-[3%] mb-8">
        <Skills />
      </div>
    </div>
  );
}
