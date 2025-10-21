// components/HeroContent.jsx
import Image from "next/image";
import { Diamond, Send, Zap } from "lucide-react";
import PillBtn from "../ui/buttonPill";
import VerticalSocialBar from "../ui/VerticalSocialBar";

const Hero = () => {
  return (
    <>
      <div className="relative w-full">
        <div className="absolute left-24 top-1/2 hidden -translate-y-1/2 md:flex">
          <VerticalSocialBar />
        </div>
        <div className="flex flex-col items-center text-center mt-4 ">
          <div className="relative flex items-center">
            <div className="flex items-center gap-2.5 rounded-full border border-white/20 bg-white/10 py-2 px-5 text-sm backdrop-blur-sm">
              <Diamond size={12} className="fill-[#01FEFF] text-[#01FEFF]" />
              <p className="tracking-wide  text-[#01FEFF]">
                Empowering the Future
              </p>
            </div>

            <div className="absolute -right-12 sm:-right-22 -top-0 sm:-top-7">
              <Image
                src="/images/robots/robo.png"
                alt="Robot Head"
                width={96} // intrinsic size for optimization
                height={96}
                className="w-10 h-10 sm:w-18 sm:h-18"
              />
            </div>
          </div>

          <div className="flex items-center justify-center mt-4 mb-4 px-4">
            <h1 className="relative font-bold uppercase tracking-wider text-white text-3xl sm:text-4xl md:text-[56px] leading-tight text-center">
              {/* Mobile: 3 lines */}
              <div className="md:hidden -space-y-0">
                {/* Line 1 */}
                <div className="flex items-center justify-center gap-3">
                  {/* Show pill from sm and up on mobile block (hide on xs) */}
                  <span className="hidden sm:inline-flex">
                    <PillBtn className="text-3xl">WE ARE AN</PillBtn>
                  </span>
                  <span className="whitespace-nowrap sm:hidden">WE ARE AN</span>
                </div>
                {/* Line 2 */}
                <div className="whitespace-nowrap">AWARD WINNING</div>
                {/* Line 3 */}
                <div className="flex items-center justify-center gap-2">
                  <span className="whitespace-nowrap">DIGITAL</span>
                  {/* AGENCY sticker (mobile size) */}
                  <span
                    className="relative inline-flex items-center whitespace-nowrap font-bold text-[#0A1628]
                         px-4 py-1 rounded-lg
                         bg-gradient-to-r from-[#00F6FF] to-[#0A84FF]
                         shadow-[0_10px_20px_rgba(0,0,0,0.25)]"
                  >
                    <span className="relative z-10">AGENCY</span>
                    <span
                      className="absolute top-0 right-0 h-4 w-4 bg-white rounded-bl-[6px]"
                      // style={{ clipPath: "polygon(100% 0, 0 100%, 100% 100%)" }}
                    />
                    {/* <Zap className="absolute -right-5 -top-2 h-5 w-5 text-[#00F6FF]" /> */}
                  </span>
                </div>
              </div>

              {/* Desktop (md+): 2 lines */}
              <div className="hidden md:flex md:flex-col md:items-center md:gap-3">
                {/* Line 1 */}
                <div className="flex items-center justify-center gap-6">
                  <PillBtn />
                  <span className="whitespace-nowrap text-5xl">WE ARE AN</span>
                  <span className="whitespace-nowrap text-5xl">AWARD</span>
                </div>
                {/* Line 2 */}
                <div className="flex items-center justify-center gap-6">
                  <span className="whitespace-nowrap text-5xl">
                    WINNING DIGITAL
                  </span>
                  {/* AGENCY sticker (desktop size) */}
                  <span
                    className="relative inline-flex items-center whitespace-nowrap font-bold text-[#0A1628]
                         px-10 py-4 rounded-xl
                         bg-gradient-to-r from-[#00F6FF] to-[#0A84FF]
                         shadow-[0_10px_20px_rgba(0,0,0,0.25)]"
                  >
                    <span className="relative z-10 text-5xl">AGENCY</span>
                    <span className="absolute top-0 right-0 h-6 w-6 bg-white rounded-bl-lg rounded-tr-" />
                  </span>
                </div>
              </div>
            </h1>
          </div>

          <p className=" text-xs sm:text-sm tracking-wide text-white">
            Lets Start Discussing Your Project
          </p>
        </div>
      </div>

      <div className="relative grid place-items-center ">
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
            alt="Main robot mascot"
            width={800}
            height={800}
            className="
        w-[300px]  
        sm:w-[700px]
        object-contain
      "
          />
        </div>
      </div>
    </>
  );
};

export default Hero;
