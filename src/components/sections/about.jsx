"use client";

import React from "react";
import { ArrowRight } from "lucide-react";
import PrimaryBtn from "../ui/primaryBtn";

const VorniqoAboutSection = () => {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="relative overflow-hidden bg-[var(--color-background)] px-4 sm:px-6 lg:px-8 py-14 md:py-20 2xl:py-28"
    >
      {/* Top/Bottom borders + center divider (md+) */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute top-0 left-0 right-0 h-px bg-white/10" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-white/10" />
        <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-white/10" />
      </div>

      <div className="relative z-10 mx-auto max-w-screen-2xl">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-y-10 gap-x-10 lg:gap-x-16 2xl:gap-x-24">
          {/* Left column */}
          <div className="order-1 md:order-1 space-y-6 lg:space-y-8">
            {/* Label + stripes */}
            <div className="">
              <p
                className="uppercase "
                aria-hidden="true"
              >
                About Us ///////////////////////////
              </p>
            </div>

            {/* Heading */}
            <h1
              id="about-heading"
              className="flex justify-center align-middle items-center text-white"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              ABOUT VORNIQO
            </h1>

            {/* Copy */}
            <div className="flex flex-col text-center space-y-2 text-gray-300">
              <p className=" px-4">
                Vorniqo Solution is a full‑service software house dedicated to
                delivering excellence in digital innovation.
              </p>
              <p className="px-4 items-center">
                We specialize in strategic marketing, high‑quality graphical
                content, and reliable customer care solutions designed to help
                businesses grow and thrive in a competitive landscape. By
                combining creativity with technology,
              </p>
            </div>
          </div>

          {/* Right column: reserved for your future circle/animation */}
          <div className="order-2 md:order-2">
            <div
              className="
                relative mx-auto
                h-[320px] sm:h-[380px] md:h-[460px] lg:h-[520px] 2xl:h-[600px]
                w-full md:w-auto
              "
            >
              {/* Placeholder visual: feel free to remove when you add the animation.
                  This just shows subtle rings so the layout matches your design. */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative">
                  {/* Outer rings (subtle) */}
                  <div className="rounded-full bg-transparent border border-white/10 w-[75vw] max-w-[520px] aspect-square hidden md:block" />
                  <div className="absolute inset-6 rounded-full border border-white/10 hidden md:block" />
                  {/* Center gradient disk (static placeholder) */}
                  <div
                    className="absolute inset-[22%] rounded-full
                                  bg-[radial-gradient(50%_50%_at_50%_50%,#01feff_0%,#0ea5e9_40%,#0b4fd6_80%)]
                                  shadow-[0_0_60px_rgba(1,254,255,0.25)]"
                  />
                </div>
              </div>

              {/* Keep this empty container to mount your animated circle later */}
              <div id="vorniqo-circle-mount" className="absolute inset-0" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VorniqoAboutSection;
