// components/HeroContent.jsx
import Image from "next/image";
import { Diamond, Send } from "lucide-react";
import PillBtn from "../ui/buttonPill";
import VerticalSocialBar from "../ui/VerticalSocialBar";

const Hero = () => {
  return (
    <>
      <div className="relative w-full">
        <div className="absolute left-24 top-1/2 hidden -translate-y-1/2 md:flex">
          <VerticalSocialBar />
        </div>
        <div className="flex flex-col items-center text-center mt-16 ">
          <div className="relative mb- flex items-center">
            <div className="flex items-center gap-2.5 rounded-full border border-white/20 bg-white/10 py-2 px-5 text-sm backdrop-blur-sm">
              <Diamond size={12} className="fill-[#01FEFF] text-[#01FEFF]" />
              <span className="tracking-wide  text-[#01FEFF]">
                Empowering the Future
              </span>
            </div>

            <div className="absolute -right-20 -top- sm:-right-24">
              <Image
                src="/robots/robo.png"
                alt="Robot Head"
                width={72}
                height={72}
              />
            </div>
          </div>

          <div className="flex items-center justify-center p-8">
            <h1 className="text-4xl uppercase tracking-wider text-white md:text-5xl lg:text-6xl xl:text-7xl font-bold">
              <div className=" flex flex-wrap items-center justify-center gap-4 sm:gap-6">
                <span className="relative inline-flex items-center gap-3">
                  <div className="bg-[#0a1628] rounded-full p-1.5">
                    <PillBtn />
                  </div>
                  <span className="">WE ARE AN</span>
                </span>
                <span>AWARD</span>
              </div>

              <div className="mt-2 flex flex-wrap items-center justify-center gap-4 sm:gap-6">
                <span>WINNING DIGITAL</span>
                {/* <span className="relative inline-block px-8 py-2 md:px-10 md:py-3 text-[#0a1628] bg-cyan-400  border border-red-600"> */}

                <span
                  className="relative inline-block px-8 py-2 md:px-10 md:py-3 text-[#0a1628] bg-cyan-400"
                  style={{
                    clipPath:
                      "polygon(0% 0%, 92% 0%, 100% 8%, 100% 100%, 0% 100%)",
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
                </span>
              </div>
            </h1>
          </div>

          <p className=" text-lg tracking-wide text-white">
            Lets Start Discussing Your Project
          </p>
        </div>
      </div>
      <div>
<div className="flex justify-center">
  <Image
    src="/hero/heroProjects.png"
    alt="Robot Head"
    width={192}
    height={192}
    className=""
  />
</div>
      </div>
    </>
  );
};

export default Hero;
