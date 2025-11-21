"use client";

import Image from "next/image";
import { Diamond } from "lucide-react";
import PillBtn from "../ui/buttonPill";
import VerticalSocialBar from "../ui/VerticalSocialBar";
import PrimaryBtn from "../ui/primaryBtn";
import ArtShowcaseCard from "../ui/ArtShowcaseCard";
import React, { useState, useEffect } from "react";
import Flashes from "../../../public/images/services/flashes.webp";
import HeroLoaderCard from "../ui/HeroLoaderCard";

const showcaseProjects = [
  { id: 1, image: "/images/project_Images/4.webp" },
  { id: 2, image: "/images/project_Images/4.webp" },
  { id: 3, image: "/images/project_Images/4.webp" },
  { id: 4, image: "/images/project_Images/4.webp" },
];

const Hero = () => {
  const [visibleCount, setVisibleCount] = useState(4);

  useEffect(() => {
    const updateCount = () => {
      if (window.innerWidth < 768) {
        setVisibleCount(3);
      } else if (window.innerWidth < 1024) {
        setVisibleCount(3);
      } else {
        setVisibleCount(4);
      }
    };

    updateCount(); // Run on mount
    window.addEventListener("resize", updateCount);
    return () => window.removeEventListener("resize", updateCount);
  }, []);

  return (
    <>
      <section className="relative border-b border-white/30">
        <div className="relative">
          <div className="absolute hidden xl:block left-10 top-30 ">
            <VerticalSocialBar />
          </div>
          <div className="absolute hidden xl:block right-10 top-30">
            <Image
              src="/images/hero/sideline.webp"
              alt="Hero"
              width={30}
              height={30}
            />
          </div>
        </div>
        <div className="grid grid-cols-1 gap-50 items-center justify-items-center w-full px-10">
          <div className="flex flex-col items-center text-center justify-center">
            {/* ===================== Robo Div ==================== */}
            <div className="relative flex items-center -left-4 my-4 ">
              <div className="flex items-center gap-2 rounded-full border border-[#01FEFF] py-1.5 px-5 backdrop-blur-sm">
                <Diamond size={12} className="fill-[#01FEFF] text-[#01FEFF]" />
                <span>Empowering the Future</span>
              </div>

              <div className="absolute right-[-52px] sm:right-[-68px]">
                <Image
                  src="/images/robots/robo.webp"
                  alt="Robot Head"
                  width={96}
                  height={96}
                  className="w-12 h-12 sm:w-15 sm:h-15"
                />
              </div>
            </div>

            {/* ===================== Heading Section ================= */}
            <div className="flex flex-col items-center justify-center text-center">
              <div className="uppercase text-white mb-4">
                {/* ===================== Mobile ================= */}
                <div className="lg:hidden">
                  <div className="flex items-center justify-center">
                    <h1 className="whitespace-nowrap">WE ARE AN</h1>
                  </div>
                  <h1 className="whitespace-nowrap">AWARD WINNING</h1>
                  <div className="flex items-center justify-center gap-2">
                    <h1 className="whitespace-nowrap">SOFTWARE</h1>
                    <span
                      className="relative inline-flex items-center px-5 py-0 rounded-xl
            bg-gradient-to-r from-[#00F6FF] to-[#0A84FF]
            shadow-[0_10px_20px_rgba(0,0,0,0.25)]"
                    >
                      <h1 className="relative z-10 !text-background">
                        Company
                      </h1>

                      {/* === FOLDED CORNER LOGIC === */}
                      <span
                        className="absolute top-0 right-0 h-6 w-6 z-10 bg-background"
                        style={{
                          clipPath: "polygon(0 0, 100% 100%, 100% 0)",
                        }}
                      />
                      <span className="absolute top-0 right-0 h-6 w-6  bg-white rounded-bl-lg" />

                      {/* === FLASHES IMAGE (Mobile Size: w-10) === */}
                      <div className="absolute -top-6 -right-8 z-20 pointer-events-none">
                        <Image
                          src={Flashes}
                          alt="sparks"
                          className="w-10 h-auto"
                        />
                      </div>
                    </span>
                  </div>
                </div>

                {/* ===================== Desktop ================= */}

                <div className="relative hidden lg:flex lg:flex-col lg:items-center">
                  <div className="flex items-center justify-center gap-6">
                    <PillBtn />
                    <h1 className="whitespace-nowrap ">WE ARE AN</h1>
                    <h1 className="whitespace-nowrap ">AWARD</h1>
                  </div>
                  <div className="flex items-center justify-center gap-6">
                    <h1 className="whitespace-nowrap">WINNING SOFTWARE</h1>
                    <span
                      className="relative inline-flex items-center whitespace-nowrap text-black
                                px-5 py-0 rounded-xl bg-gradient-to-r from-[#00F6FF] to-[#0A84FF] shadow-[0_10px_20px_rgba(0,0,0,0.25)]"
                    >
                      <h1 className="relative z-10 !text-background">
                        Company
                      </h1>
                      <span
                        className="absolute top-0 right-0 h-6 w-6 z-10 bg-background"
                        style={{
                          clipPath: "polygon(0 0, 100% 100%, 100% 0)",
                        }}
                      />
                      <span 
                        className="absolute top-0 right-0 h-6 w-6 bg-white rounded-bl-lg" 
                        style={{
                          clipPath: "polygon(0 0, 100% 100%, 0 100%)",
                        }}
                      />

                      <div className="absolute -top-6 -right-8 lg:-top-9 lg:-right-10 xl:-top-10 xl:-right-12 z-20 pointer-events-none">
                        <Image
                          src={Flashes}
                          alt="sparks"
                          className="w-12 lg:w-14 xl:w-16 h-auto"
                        />
                      </div>
                    </span>
                  </div>
                </div>
              </div>

              <p className="tracking-wide text-white mb-4">
                Let’s Start Discussing Your Project
              </p>
              <PrimaryBtn />
            </div>
          </div>
        </div>

        <div className="relative flex flex-col items-center justify-center align-middle mt-4 mb-1 md:my-25 lg:my-25 ">
          <div className="flex justify-center py-15 xs:py-8 w-full">
            <div className="flex items-center justify-center align-middle px-3 xs:px-5 md:px-28">
              {showcaseProjects.slice(0, visibleCount).map((project, index) => (
                <div
                  key={project.id}
                  className={`group relative transition-all duration-500 ${
                    index % 2 === 0
                      ? "translate-y-[12px] hover:-translate-y-[20px]" // up for even items
                      : "translate-y-[-12px] hover:-translate-y-[20px]" // down for odd items
                  } ${index !== 0 ? "-ml-4 md:-ml-1 lg:-ml-6" : ""}`}
                  style={{ zIndex: visibleCount - index }}
                >
                  <ArtShowcaseCard image={project.image} />

                  {/* Hover overlay */}
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                </div>
              ))}
            </div>
            {/* <div className="absolute w-full flex justify-center items-center align-middle z-10 px-5 ">
              <HeroLoaderCard/>
               <Image
              src="/images/robots/robot.webp"
              alt="Main robot mascot"
              width={200}
              height={200}
              className="w-[300px] sm:w-full object-contain"
            /> 
            </div> */}
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
