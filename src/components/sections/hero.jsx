"use client";
import Image from "next/image";
import { Diamond } from "lucide-react";
import PillBtn from "../ui/buttonPill";
import VerticalSocialBar from "../ui/VerticalSocialBar";
import PrimaryBtn from "../ui/primaryBtn";
import ArtShowcaseCard from "../ui/ArtShowcaseCard";
import React, { useState, useEffect } from "react";


const showcaseProjects = [
  { id: 1, image: "/images/project_Images/project3.webp" },
  { id: 2, image: "/images/project_Images/project4.webp" },
  { id: 3, image: "/images/project_Images/project3.webp" },
  { id: 4, image: "/images/project_Images/project4.webp" },
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
      <div className="relative">
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
      </div>
      <div className="grid grid-cols-1 gap-50 items-center justify-items-center w-full px-10">
        <div className="flex flex-col items-center text-center justify-center">
          {/* ===================== Robo Div ==================== */}
          <div className="relative flex items-center -left-4 my-4 ">
            <div className="flex items-center gap-2 rounded-full border border-[#01FEFF] py-1.5 px-5 backdrop-blur-sm">
              <Diamond size={12} className="fill-[#01FEFF] text-[#01FEFF]" />
              <p>Empowering the Future</p>
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
                <div className="flex items-center justify-center gap-4">
                  <h1 className="whitespace-nowrap">SOFTWARE</h1>
                  <span
                    className="relative inline-flex items-center whitespace-nowrap
                    px-3 py-1 rounded-lg
                    bg-gradient-to-r from-[#00F6FF] to-[#0A84FF]
                    shadow-[0_10px_20px_rgba(0,0,0,0.25)]"
                  >
                    <h1 className="relative z-10">AGENCY</h1>
                  </span>
                </div>
              </div>

              {/* ===================== Desktop ================= */}
              <div className="hidden lg:flex lg:flex-col lg:items-center">
                <div className="flex items-center justify-center gap-6">
                  <PillBtn />
                  <h1 className="whitespace-nowrap ">WE ARE AN</h1>
                  <h1 className="whitespace-nowrap ">AWARD</h1>
                </div>
                <div className="flex items-center justify-center gap-6">
                  <h1 className="whitespace-nowrap">WINNING SOFTWARE</h1>
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

            <p className="tracking-wide text-white mb-4">
              Let’s Start Discussing Your Project
            </p>
            <PrimaryBtn />
          </div>
        </div>
      </div>

      <div className="relative flex flex-col items-center justify-center align-middle mt-4 mb-1 md:my-25 lg:my-25">
        <div className="flex justify-center py-15 px-4 md:px-10 lg:px-24 ">
          <div className="flex items-center justify-center align-middle">
            {showcaseProjects.slice(0, visibleCount).map((project, index) => (
              <div
                key={project.id}
                className={`group relative transition-all duration-500 ${
                  index % 2 === 0
                    ? "translate-y-[-12px] hover:-translate-y-[20px]" // up for even items
                    : "translate-y-[12px] hover:-translate-y-[20px]" // down for odd items
                } ${index !== 0 ? "-ml-4 md:-ml-1 lg:-ml-6" : ""}`}
                style={{ zIndex: visibleCount - index }}
              >
                <ArtShowcaseCard image={project.image} />

                {/* Hover overlay */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              </div>
            ))}
          </div>
        </div>
        <div className="absolute z-10 ">
          <Image
            src="/images/robots/robot.webp"
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
      <div className="w-full h-px bg-gray-100/30"></div>
    </>
  );
};

export default Hero;

{
  /* */
}
