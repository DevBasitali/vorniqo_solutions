"use client";
import React from "react";
import Image from "next/image";
import PrimaryBtn from "@/components/ui/primaryBtn";
import VerticalSocialBar from "@/components/ui/VerticalSocialBar";
import { motion, useMotionValue, useTransform } from "framer-motion";
// icons
import { Code, SquareBottomDashedScissors, Lightbulb } from "lucide-react";
// Images
import sidepin from "../../../../public/images/hero/sideline.webp";
import Arrow from "../../../../public/images/arrow.webp";
// import servicerobot from "../../../../public/images/animationfiles/servicerobot.png";

export default function HeroSection() {
  const rotate = useMotionValue(0);
  const counterRotate = useTransform(rotate, (v) => -v);
  return (
    <section className="w-full border-b-[1px] border-b-white/30  text-white py-10 md:py-20 lg:py-24 px-6 relative overflow-hidden">
      {/* MAIN FLEX */}
      <div className="w-full max-w-[1400px]  h-full mx-auto flex flex-col lg:flex-row justify-between">
        {/* LEFT CONTENT */}
        <div className="w-full lg:pl-44 lg:w-1/2 bg-r0 flex flex-col gap-8 bg-red-40 relative">
          {/* Social Bar */}
          <div className="absolute left-10 top-10 hidden md:block">
            <VerticalSocialBar />
          </div>
          <div>
            <h1 className="!text-2xl md:!text-5xl text-center lg:text-start font-bold leading-tight">
              VORNIQO
            </h1>
            <h1 className="!text-2xl md:!text-5xl text-center lg:text-start font-bold leading-tight">
              SERVICES
            </h1>

            <p className="mt-5 text-white/70 w-full text-center lg:text-start md:w-1/2 mx-auto lg:mx-0  lg:w-[80%] leading-relaxed">
              Vorniqo Solution is a full-service software house dedicated to
              delivering excellence in digital innovation.
            </p>
          </div>
          <div className="flex justify-center lg:justify-start">
            <PrimaryBtn text="Contact Us" />
          </div>
        </div>

        {/* CENTER ROBOT + LABELS */}
        <div className="relative flex justify-center mb-10 mt-16 md:mt-20 lg:mb-0 lg:mr-38 lg:mt-0">
          {/* Outer Glow Circle */}
          <div
            className="w-[280px] h-[280px] md:w-[350px] md:h-[350px] rounded-full 
           bg-[#004cff]
          flex justify-center items-center relative"
          >
            {/* middle circle with robot image */}
            <div
              className="w-[235px] h-[235px] md:w-[310px] md:h-[310px] rounded-full 
          bg-gradient-to-br from-[#00eaff] to-[#004cff]
          flex justify-center items-center relative"
            >
              <Image
                src="/images/animationfiles/servicerobot.png"
                alt="robot"
                width={250}
                height={250}
                unoptimized={true}
              />
            </div>
            {/* Rotation */}
            <motion.div
              style={{ rotate }}
              animate={{ rotate: -360 }}
              transition={{
                duration: 12,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute inset-0"
            >
              {/* Web Designing Tag */}
              <motion.div
                style={{ rotate: counterRotate }}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{
                  opacity: [0, 1, 1, 0],
                  scale: [0.8, 1, 1, 0.8],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute w-[142px] md:w-[152px] top-9 z-50 -left-16 bg-white flex items-center gap-2 shadow-xl rounded-3xl"
              >
                <div className="px-2 py-2 flex gap-2 items-center">
                  <div className="w-7 h-7 rounded-full bg-gradient-to-t from-[#00eaff] to-[#004cff] flex items-center justify-center">
                    <Code size={16} strokeWidth={3} color="black" />
                  </div>
                  <p className="!text-xs md:!text-sm !text-black">
                    Web Designing
                  </p>
                </div>
              </motion.div>
              {/* Video Editing Tag */}
              <motion.div
                style={{ rotate: counterRotate }}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{
                  opacity: [0, 1, 1, 0],
                  scale: [0.8, 1, 1, 0.8],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute w-[142px] md:w-[152px] top-28 -right-24 bg-white flex items-center gap-2 shadow-xl rounded-3xl"
              >
                <div className="px-2 py-2 flex gap-2 items-center">
                  <div className="w-7 h-7 rounded-full bg-gradient-to-t from-[#00eaff] to-[#004cff] flex items-center justify-center">
                    <SquareBottomDashedScissors
                      size={16}
                      strokeWidth={3}
                      color="black"
                    />
                  </div>
                  <p className="!text-xs md:!text-sm !text-black">
                    Video Editing
                  </p>
                </div>
              </motion.div>
              {/* Arrow */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{
                  opacity: [0, 1, 1, 0],
                  scale: [0.8, 1, 1, 0.8],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -bottom-2 -right-6"
              >
                <Image
                  src={Arrow}
                  alt="Arrow"
                  className="w-20 h-20 md:w-24 md:h-24"
                ></Image>
              </motion.div>
              {/* Marketing Tag */}
              <motion.div
                style={{ rotate: counterRotate }}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{
                  opacity: [0, 1, 1, 0],
                  scale: [0.8, 1, 1, 0.8],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute w-[142px] md:w-[152px] -bottom-4 left-28 bg-white flex items-center gap-2 shadow-xl rounded-3xl"
              >
                <div className="px-2 py-2 flex gap-2 items-center">
                  <div className="w-7 h-7 rounded-full bg-gradient-to-t from-[#00eaff] to-[#004cff] flex items-center justify-center">
                    <Lightbulb size={16} strokeWidth={3} color="black" />
                  </div>
                  <p className="!text-xs md:!text-sm !text-black">Marketing</p>
                </div>
              </motion.div>
            </motion.div>
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
