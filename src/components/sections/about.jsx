"use client";

import React from "react";
import { ArrowRight } from "lucide-react";
import PrimaryBtn from "../ui/primaryBtn";

const VorniqoAboutSection = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-1  lg:grid-cols-2 2xl:grid-cols-2 2xl:px-64 border-b  border-t border-white/30">
      <div className="flex items-start justify-start pt-7 border-r border-white/30">
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
      <div className="flex items-center justify-end px-6">
        <div
          className="
      relative mx-auto
      h-[260px] sm:h-[320px] md:h-[400px] lg:h-[460px] 2xl:h-[520px]
      w-full md:w-auto
    "
        >
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative">
              {/* Outer Circle */}
              <div
                className="rounded-full w-[55vw] max-w-[420px] aspect-square inset-
            bg-[conic-gradient(from_180deg,rgba(255,255,255,0.1)_0deg,rgba(255,255,255,0.1)_144deg,transparent_144deg,transparent_452deg,rgba(255,255,255,0.1)_252deg,rgba(255,255,255,0.1)_360deg)]
          "
              />

              {/* Middle Ring */}
              <div className="absolute inset-6 rounded-full bg-[#0E2152] border border-white/10" />

              {/* Inner Gradient Circle with Logo */}
              <div
                className="absolute inset-[25%] rounded-full flex items-center justify-center
          bg-[linear-gradient(120deg,#00FBCD_0%,#013EFC_100%)]
          shadow-[0_0_50px_rgba(1,254,255,0.25)]"
              >
                <img
                  src="/images/logos/vorniqoLogo.webp"
                  alt="VORNIQO Logo"
                  className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 object-contain"
                />
              </div>
            </div>
          </div>
          <div id="vorniqo-circle-mount" className="absolute inset-0" />
        </div>
      </div>
    </section>
  );
};

export default VorniqoAboutSection;
