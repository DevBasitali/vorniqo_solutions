// components/HeroContent.jsx
import Image from "next/image";
import { Diamond } from "lucide-react";
import PillBtn from "../ui/buttonPill";
import VerticalSocialBar from "../ui/VerticalSocialBar";
import PrimaryBtn from "../ui/primaryBtn";

const Hero = () => {
  return (
    <>
      <div className="relative w-full">
        <div className="absolute hidden lg:block left-10 top-30 ">
          <VerticalSocialBar />
        </div>
        <div className="absolute hidden lg:block right-10 top-30">
          <Image
            src="/images/hero/sideline.webp"
            alt="Hero"
            width={30}
            height={30}
          />
        </div>
        <div className="flex flex-col items-center text-center justify-center ">
          {/* Robo Div */}
          <div className="relative flex items-center my-6 -left-4">
            <div className="flex items-center gap-2 rounded-full border border-[#01FEFF] py-1.5 px-5 backdrop-blur-sm">
              <Diamond size={12} className="fill-[#01FEFF] text-[#01FEFF]" />
              <p className=" ">Empowering the Future</p>
            </div>

            <div className="absolute right-[-52] sm:right-[-68]">
              <Image
                src="/images/robots/robo.webp"
                alt="Robot Head"
                width={96}
                height={96}
                className="w-12 h-12 sm:w-15 sm:h-15"
              />
            </div>
          </div>

          {/* Heading Section */}
          <div className="flex flex-col items-center justify-center text-center mb-6">
            <div className="uppercase text-white">
              {/* Mobile (below lg): 3 lines */}
              <div className="lg:hidden">
                {/* Line 1 */}
                <div className="flex items-center justify-center gap-3">
                  <h1 className="whitespace-nowrap text-2xl sm:text-3xl">
                    WE ARE AN
                  </h1>
                </div>
                {/* Line 2 */}
                <h1 className="whitespace-nowrap text-2xl sm:text-3xl">
                  AWARD WINNING
                </h1>
                {/* Line 3 */}
                <div className="flex items-center justify-center gap-2">
                  <h1 className="whitespace-nowrap text-2xl sm:text-3xl">
                    SOFTWARE
                  </h1>
                  <span
                    className="relative inline-flex items-center whitespace-nowrap
                       px-3 py-1 rounded-lg
                       bg-gradient-to-r from-[#00F6FF] to-[#0A84FF]
                       shadow-[0_10px_20px_rgba(0,0,0,0.25)]"
                  >
                    <h1 className="relative z-10 text-2xl sm:text-3xl">
                      AGENCY
                    </h1>
                  </span>
                </div>
              </div>

              {/* Desktop (lg+): 2 lines */}
              <div className="hidden lg:flex lg:flex-col lg:items-center lg:gap-4">
                {/* Line 1 */}
                <div className="flex items-center justify-center gap-6">
                  <PillBtn />
                  <h1 className="whitespace-nowrap text-5xl">WE ARE AN</h1>
                  <h1 className="whitespace-nowrap text-5xl ">AWARD</h1>
                </div>
                {/* Line 2 */}
                <div className="flex items-center justify-center gap-6">
                  <h1 className="whitespace-nowrap ">WINNING SOFTWARE</h1>
                  <span
                    className="relative inline-flex items-center whitespace-nowrap text-black
                       px-8 py-2 rounded-xl
                       bg-gradient-to-r from-[#00F6FF] to-[#0A84FF]
                       shadow-[0_10px_20px_rgba(0,0,0,0.25)]"
                  >
                    <h1 className="relative z-10">AGENCY</h1>
                    <span className="absolute top-0 right-0 h-6 w-6 bg-white rounded-bl-lg" />
                  </span>
                </div>
              </div>
            </div>
          </div>

          <p className=" tracking-wide text-white">
            Lets Start Discussing Your Project
          </p>

          <div className="mt-6">
            <PrimaryBtn />
          </div>
        </div>
      </div>

      {/* <div className="relative grid place-items-center ">
        <div className="col-start-1 row-start-1">
          <Image
            src="/images/hero/heroProjects.png"
            alt="Project showcase background"
            width={1200}
            height={1200}
            className="
        w-[400px]  
        sm:w-[500px] 
        md:w-[900px] 
        lg:w-[1200px]
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
      </div> */}
    </>
  );
};

export default Hero;
