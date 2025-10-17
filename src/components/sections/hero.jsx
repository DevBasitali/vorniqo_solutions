// components/HeroContent.jsx
import Image from "next/image";
import { Diamond, Send } from "lucide-react";
import PillBtn from "../ui/buttonPill";

const Hero = () => {
  return (
    // Main container for all content
    <div className="flex flex-col items-center text-center mt-24">
      {/* Top Pill ("Empowering the Future") & Robot */}
      <div className="relative mb- flex items-center">
        <div className="flex items-center gap-2.5 rounded-full border border-white/20 bg-white/10 py-2 px-5 text-sm backdrop-blur-sm">
          <Diamond size={12} className="fill-[#01FEFF] text-[#01FEFF]" />
          <span className="tracking-wide  text-[#01FEFF]">
            Empowering the Future
          </span>
        </div>

        {/* --- THIS DIV IS UPDATED --- */}
        {/* I changed -right-12 to -right-20 to create more space */}
        <div className="absolute -right-20 -top- sm:-right-24">
          <Image
            src="/robots/robo.png"
            alt="Robot Head"
            width={72}
            height={72}
          />
        </div>
      </div>
      {/* Main Heading Section */}
      <div className="flex items-center justify-center p-8">
        <h1 className="text-4xl uppercase tracking-wider text-white md:text-5xl lg:text-6xl xl:text-7xl font-bold">
          {/* Line 1: "WE ARE AN AWARD" */}
          <div className=" flex flex-wrap items-center justify-center gap-4 sm:gap-6">
            <span className="relative inline-flex items-center gap-3">
              <div className="bg-[#0a1628] rounded-full p-1.5">
                <PillBtn />
              </div>
              <span>WE ARE AN</span>
            </span>
            <span>AWARD</span>
          </div>

          {/* Line 2: "WINNING DIGITAL AGENCY" */}
          <div className="mt-2 flex flex-wrap items-center justify-center gap-4 sm:gap-6">
            <span>WINNING DIGITAL</span>
            {/* <span className="relative inline-block px-8 py-2 md:px-10 md:py-3 text-[#0a1628] bg-cyan-400  border border-red-600"> */}

            <span
              className="relative inline-block px-8 py-2 md:px-10 md:py-3 text-[#0a1628] bg-cyan-400"
              style={{
                clipPath: "polygon(0% 0%, 92% 0%, 100% 8%, 100% 100%, 0% 100%)",
              }}
            >
              <span className="relative z-10 font-bold">AGENCY</span>

              {/* Top-right corner fold/peel effect */}
              <div
                className="absolute -top-16.5 -right-15 w-60 h-60 bg-white rounded-bl-2xl"
                style={{
                  clipPath:
                    "polygon(57.17% 45.4%, 57.27% 27.46%, 66.08% 36.53%, 75% 45.5%, 75% 45.4%)",
                  //   clipPath: "polygon(0 0, 100% 0, 100% 100%)",
                }}
              ></div>

              {/* Lightning bolt accent */}
              {/* <svg
                className="absolute -right-6 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 text-cyan-400"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M13 2L3 14h8l-1 8 10-12h-8l1-8z" />
              </svg> */}
            </span>
          </div>
        </h1>
      </div>

      {/* Subheading */}
      <p className=" text-lg tracking-wide text-white">
        Lets Start Discussing Your Project
      </p>
    </div>
  );
};

export default Hero;
