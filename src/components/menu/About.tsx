import Image from "next/image";
import eyeImage from "/public/eyes.jpeg";
import { Sora, Forum } from "next/font/google";
import { Heading } from "./Heading";

const sora = Sora({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

const forum = Forum({
  subsets: ["latin"],
  weight: ["400"],
});
export default function About() {
  return (
    <section
      className={` ${forum.className} flex items-center justify-center w-full flex-col`}
    >
      <Heading heading={"Who am i ?"} />
      <div className="w-full h-[150px] md:h-[300px] py-4 relative">
        <Image src={eyeImage} alt="eye-about" layout="fill" objectFit="cover" />
      </div>
      <p className="md:max-w-4xl px-8 text-center text-white text-base md:text-3xl leading-relaxed py-6">
        I am a{" "}
        <strong className="text-shade" style={{ letterSpacing: "1px" }}>
          Front-End web Developer & Designer
        </strong>{" "}
        who takes great pleasure in conceptualizing and bringing to life
        visually stunning products. I am always eager to broaden my horizons and
        acquire new skills that allow me to work more efficiently.
      </p>
    </section>
  );
}
