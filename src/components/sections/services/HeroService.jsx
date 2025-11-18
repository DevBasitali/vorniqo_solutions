"use client";

import React from "react";
import Image from "next/image";
import PrimaryBtn from "@/components/ui/primaryBtn";
import VerticalSocialBar from "@/components/ui/VerticalSocialBar";
import { motion } from "framer-motion";
// icons
import { Code, SquareBottomDashedScissors, Lightbulb } from "lucide-react";
// Images
import robot from "../../../../public/images/robots/robo.webp";
import sidepin from "../../../../public/images/hero/sideline.webp";
import flash from "../../../../public/images/services/flashes.webp";
import Arrow from "../../../../public/images/Arrow.webp";

export default function HeroSection() {
  return (
    <section className="w-full  text-white py-5 px-6 relative overflow-hidden">
      {/* MAIN FLEX */}
      <div className="w-full max-w-[1400px] mx-auto flex flex-col lg:flex-row justify-between items-center">
        {/* LEFT CONTENT */}
        <div className="w-full md:pl-28 lg:w-1/2 flex flex-col gap-8 relative">
          {/* Social Bar */}
          <div className="absolute left-10 top-10 hidden md:block">
            <VerticalSocialBar />
          </div>
          <div>
            <h1 className="!text-2xl md:!text-5xl text-center md:text-start font-bold leading-tight">
              VORNIQO
            </h1>
            <h1 className="!text-2xl md:!text-5xl text-center md:text-start font-bold leading-tight">
              SERVICES
            </h1>

            <p className="mt-5 text-white/70 w-full text-center md:text-start md:w-[80%] leading-relaxed">
              Vorniqo Solution is a full-service software house dedicated to
              delivering excellence in digital innovation.
            </p>
          </div>
          <div className="flex justify-center md:w-1/3">
            <PrimaryBtn text="Contact Us" />
          </div>
        </div>

        {/* CENTER ROBOT + LABELS */}
        <div className="relative flex justify-center mr-38 mt-10 lg:mt-0">
          {/* Outer Glow Circle */}
          <div
            className="w-[350px] h-[350px] rounded-full 
           bg-[#004cff]
          flex justify-center items-center relative"
          >
            {/* middle circle with robot image */}
            <div
              className="w-[310px] h-[310px] rounded-full 
          bg-gradient-to-br from-[#00eaff] to-[#004cff]
          flex justify-center items-center relative"
            >
              <Image src={robot} alt="robot" width={270} height={270} />
            </div>
            {/* Rotation */}
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ repeat: Infinity, duration: 12, ease: "linear" }}
              className="absolute inset-0"
            >
              {/* Web Designing Tag */}
              <motion.div
                initial={{ opacity: 0, x: 20 }} // start slightly below
                animate={{ opacity: 1, y: 0 }} // move to original position
                exit={{ opacity: 0 }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeOut",
                }}
                className="absolute w-[152px] top-9 z-50 -left-16 bg-white flex items-center gap-2 shadow-xl rounded-3xl"
                // style={{ rotate: "-360deg" }}
              >
                <div className="px-2 py-2 flex gap-2 items-center">
                  <div className="w-7 h-7 rounded-full bg-gradient-to-t from-[#00eaff] to-[#004cff] flex items-center justify-center">
                    <Code size={16} strokeWidth={3} color="black" />
                  </div>
                  <p className="!text-sm !text-black">Web Designing</p>
                </div>
              </motion.div>
              {/* square */}
              {/* <div className="absolute top-24 -left-14 space-y-3">
                <div className="w-10 h-10 bg-[#01CBF8]" />
                <div className="w-7 h-7 bg-[#01CBF8]" />
              </div> */}
              {/* flashes */}
              {/* <div className="absolute top-5 -right-20">
                <Image src={flash} alt="flashes" />
              </div> */}
              {/* Video Editing Tag */}
              <motion.div
                initial={{ opacity: 0, y: -20 }} // start slightly above
                animate={{ opacity: [0, 1, 1, 0], y: [-20, 0, 0, 20] }} // drop down, then fade
                transition={{
                  duration: 4, // total loop duration
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute w-[152px] top-28 -right-24 bg-white flex items-center gap-2 shadow-xl rounded-3xl"
                style={{ rotate: "-360deg" }}
              >
                <div className="px-2 py-2 flex gap-2 items-center">
                  <div className="w-7 h-7 rounded-full bg-gradient-to-t from-[#00eaff] to-[#004cff] flex items-center justify-center">
                    <SquareBottomDashedScissors
                      size={16}
                      strokeWidth={3}
                      color="black"
                    />
                    {/* < /> */}
                  </div>
                  <p className="!text-sm !text-black">Video Editing</p>
                </div>
              </motion.div>
              {/* Arrow */}

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{
                  opacity: [0, 1, 1, 0],
                  scale: [0.8, 1, 1, 0.8],
                  // rotate: 360,
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                // animate={}
                className="absolute -bottom-2 -right-8"
              >
                {/* <MoveRight /> */}
                <Image
                  width={70}
                  height={70}
                  src={Arrow}
                  className="rotate-[20deg]"
                ></Image>
              </motion.div>
              {/* Marketing Tag */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: [0, 1, 1, 0], scale: [0.8, 1, 1, 0.8] }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute w-[152px] -bottom-4 left-28 bg-white flex items-center gap-2 shadow-xl rounded-3xl"
                style={{ rotate: "-360deg" }}
              >
                <div className="px-2 py-2 flex gap-2 items-center">
                  <div className="w-7 h-7 rounded-full bg-gradient-to-t from-[#00eaff] to-[#004cff] flex items-center justify-center">
                    <Lightbulb size={16} strokeWidth={3} color="black" />
                  </div>
                  <p className="!text-sm !text-black">Marketing</p>
                </div>
              </motion.div>
            </motion.div>
            {/* square */}
            {/* <div className="absolute top-24 -left-14 space-y-3">
              <div className="w-10 h-10 bg-[#01CBF8]" />
              <div className="w-7 h-7 bg-[#01CBF8]" />
            </div> */}
            {/* flashes */}
            {/* <div className="absolute top-5 -right-20">
              <Image src={flash} alt="flashes" />
            </div> */}
            {/* <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 0 }}
              animate={{
                opacity: [0, 1, 1, 0],
                scale: [0.8, 1.1, 1.1, 0.8],
                y: [0, -10, 10, 0], // Up → Down → Original
              }}
              transition={{
                duration: 3, // full animation loop
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute top-5 -right-20 z-50"
            >
              <Image src={flash} alt="flashes" />
            </motion.div> */}
            <div className="absolute  top-24 -left-14 space-y-3">
              <motion.div
                animate={{
                  y: [0, -6, 0], // up → down → original
                  scale: [1, 1.1, 1], // light crash/bounce
                  opacity: [1, 1, 0.5, 1], // fade effect
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="w-10 h-10 bg-[#01CBF8] -z-10"
              />

              <motion.div
                animate={{
                  y: [0, 6, 0], // opposite direction
                  scale: [1, 1.1, 1], // crash
                  opacity: [1, 1, 0.5, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.4, // second box slightly later
                }}
                className="w-7 h-7 bg-[#01CBF8]"
              />
            </div>
          </div>
        </div>

        {/* RIGHT SIDE PIN IMAGE */}
        <div className="hidden lg:flex justify-end">
          <Image src={sidepin} alt="sidepin" className="h-[400px] w-auto" />
        </div>
      </div>
    </section>
  );
}
