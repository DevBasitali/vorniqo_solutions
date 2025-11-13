"use client";

import React from "react";
import { ArrowRight } from "lucide-react";
import PrimaryBtn from "../ui/primaryBtn";
import Image from "next/image";
import { motion } from "framer-motion";
import vorniqologo from "../../../public/images/v.png";
import address from "../../../public/images/aboutlogo/address.png";
import hsqlogo from "../../../public/images/aboutlogo/hsqlogo.png";
import nouman from "../../../public/images/aboutlogo/nouman.png";
import zafar from "../../../public/images/aboutlogo/zafar.png";
import certified from "../../../public/images/aboutlogo/certified.png";
import emoji from "../../../public/images/aboutlogo/emoji.png";
const VorniqoAboutSection = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-1 h-fit xs:h-full sm:h-[80%] xl:h-[60%] lg:grid-cols-2 2xl:grid-cols-2 border-b border-t border-white/30">
      {/* left section */}
      <div className="flex  justify-center items-center lg:pl-1 border-r  border border-amber-400">
        <div className="md:flex md:flex-col px-4 md:px-15 lg:px-16 max-w-prose text-center">
          <span className="flex items-start sm:text-center mt-4 pl-10 sm:pl-0 text-pretty tracking-[2px] my-1">
            ABOUT US ///////////////////////////////////////
          </span>
          <h1 className="flex items-start justify-center sm:justify-center md:justify-start">
            ABOUT VORNIQO
          </h1>
          <p className="text-center sm:text-start leading-relaxed">
            Vorniqo Solution is a full-service software house dedicated to
            delivering excellence in digital innovation.
          </p>

          <p className="text-center sm:text-start leading-relaxed mt-4">
            We specialize in strategic marketing, high-quality graphical
            content, and reliable customer care solutions designed to help
            businesses grow and thrive in a competitive landscape. By combining
            creativity with technology,
          </p>
        </div>
      </div>
      {/* right */}
      <div className="flex justify-center pt-28 xs:pt-14 sm:pt-0 mb-24 lg:mb-0 items-center border border-red-400">
        {/* Outer wrapper for all circles */}
        <div className="relative flex justify-center items-center ">
          {/* Outer arc (bottom) */}
          <motion.div
            className="absolute w-[18rem] h-[18rem] xs:w-[19rem] xs:h-[19rem] sm:w-80 sm:h-80 bg-[#112A68]"
            style={{
              clipPath: "polygon(0 75%, 100% 75%, 100% 100%, 0% 100%)",
              borderRadius: "50%",
              transform: "rotate(23deg)",
            }}
            animate={{
              rotate: -360,
            }}
            transition={{
              repeat: Infinity,
              ease: "linear",
              duration: 25, // speed control — smaller = faster
            }}
          ></motion.div>
          {/* Outer arc (top) */}
          <motion.div
            className="absolute w-[18rem] h-[18rem] xs:w-[19rem] xs:h-[19rem] sm:w-80 sm:h-80 bg-[#112A68]"
            style={{
              clipPath: "polygon(0 0, 100% 0, 100% 25%, 0% 25%)",
              borderRadius: "50%",
              transform: "rotate(20deg)",
            }}
            animate={{
              rotate: -360,
            }}
            transition={{
              repeat: Infinity,
              ease: "linear",
              duration: 25,
            }}
          ></motion.div>
          {/* Middle circle */}
          <div className="absolute w-60 h-60 sm:w-64 sm:h-64 bg-[#0E2152] rounded-full" />
          {/* emoji */}
          <div className="absolute  w-full h-full">
            <motion.div
              className="absolute -top-14 -right-24 xs:-right-28  sm:-right-36 "
              animate={{
                y: [0, -10, 0, 10, 0], // up-down motion
                x: [0, 10, 0, -10, 0], // right-left motion
              }}
              transition={{
                duration: 6, // total loop duration (adjust for speed)
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <Image src={emoji} alt="Top Image" width={80} height={80} />
            </motion.div>
          </div>
          {/* Main inner gradient circle */}
          <div className="relative w-40 h-40 sm:w-44 sm:h-44 rounded-full flex justify-center items-center bg-gradient-to-r from-[#00FBCD] to-[#013EFC]">
            <Image
              src={vorniqologo}
              width={100}
              height={100}
              alt="Vorniqologo"
            />
          </div>
          {/* Upper image section */}
          <motion.div
            className="absolute w-full h-[150px]"
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, ease: "linear", duration: 20 }}
          >
            {/* nouman */}
            <motion.div
              className="absolute -bottom-3 -left-16"
              animate={{ rotate: -360 }}
              transition={{ repeat: Infinity, ease: "linear", duration: 20 }}
            >
              <Image src={nouman} alt="Top Image" width={50} height={50} />
            </motion.div>
            {/* address fountain */}
            <motion.div
              className="absolute -top-16 -left-4"
              animate={{ rotate: -360 }}
              transition={{ repeat: Infinity, ease: "linear", duration: 20 }}
            >
              <Image src={address} alt="Top Image" width={50} height={50} />
            </motion.div>
            {/* zafar */}
            <motion.div
              className="absolute -top-4 -right-[65px]"
              animate={{ rotate: -360 }}
              transition={{ repeat: Infinity, ease: "linear", duration: 20 }}
            >
              <Image src={zafar} alt="Top Image" width={50} height={50} />
            </motion.div>
            {/* hsq */}
            <motion.div
              className="absolute -bottom-7 -right-12"
              animate={{ rotate: -360 }}
              transition={{ repeat: Infinity, ease: "linear", duration: 20 }}
            >
              <Image src={hsqlogo} alt="Top Image" width={50} height={50} />
            </motion.div>
          </motion.div>
          {/* certified */}
          <div className="absolute">
            <motion.div
              className="absolute -top-44 -left-[170px] sm:-top-30 sm:-left-[250px]"
              animate={{
                y: [0, -15, 0, 10, 0], // moves up, then down slightly, then resets
              }}
              transition={{
                duration: 4, // speed of the up-down motion
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <Image src={certified} alt="Top Image" width={100} height={100} />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VorniqoAboutSection;
