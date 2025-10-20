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
                src="/images/robots/robo.png"
                alt="Robot Head"
                width={72}
                height={72}
              />
            </div>
          </div>

          <div className="flex items-center justify-center mt-8 mb-8 p-8 sm:p-8">
            <h1 className="relative text-4xl uppercase tracking-wider text-white md:text-5xl lg:text-6xl xl:text-7xl font-bold ">
              <div className="flex flex-wrap  items-center justify-center gap-6">
                <span className="relative inline-flex items-center">
                  <div className=" bg-[#0a1628] rounded-full p-1.5">
                    <PillBtn />
                  </div>
                  <span className="md:text-[56px] lg:text-[56px]">
                    WE ARE AN
                  </span>
                </span>
                <span className="sm:text-[56px] border border-red-600">
                  AWARD{" "}
                </span>
              </div>
              <div className="mt-2 flex flex-wrap items-center justify-center gap-4 sm:gap-6 md:text-[56px] lg:text-[56px]">
                <span>WINNING DIGITAL</span>

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

      <div className="relative grid place-items-center">
        <div className="col-start-1 row-start-1">
          <Image
            src="/images/hero/heroProjects.png"
            alt="Project showcase background"
            width={1200}
            height={1200}
            className="
        w-[400px]  /* Default size for mobile */
        sm:w-[500px] /* Size for 'sm' screens and up */
        md:w-[900px] /* Optional: Size for medium screens */
        lg:w-[1200px] /* Optional: Size for large screens */
        object-contain
      "
          />
        </div>

        <div className="col-start-1 row-start-1">
          <Image
            src="/images/robots/main_robo.png"
            // src="/images/robots/robot.png"
            alt="Main robot mascot"
            width={800}
            height={800}
            className="
        w-[150px]  /* Default size for mobile */
        sm:w-[400px] /* Size for 'sm' screens and up */
        md:w-[600px] /* Optional: Size for medium screens */
        lg:w-[800px] /* Optional: Size for large screens */
        object-contain
      "
          />
        </div>
      </div>
    </>
  );
};

export default Hero;
