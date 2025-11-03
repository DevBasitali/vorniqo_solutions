"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Btn from "../ui/primaryBtn";
import SecondaryBtn from "../ui/secondaryBtn";

function Navbar() {

  const navClipPath = 'path("M 0 0 L 1120 0 L 1120 54 Q 1117 58 1114 60 L 1086 72 L 34 72 L 6 60 Q 3 58 0 54 Z")';
  const hexClipPath = "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)";

  return (
    <>
      <header className="relative flex justify-center py-4 md:py-10 select-none z-50">
        <div className="relative w-full max-w-[1120px] px-4 md:px-0">
          <div className="absolute left-1/2 top-1/2 z-30 -translate-x-1/2 -translate-y-1/2">
            <div
              className="relative w-[100px] h-[115.47px]"
              style={{ filter: "drop-shadow(0 0 10px rgba(9, 24, 62, 0.75))" }}
            >
              <div
                className="absolute inset-0 bg-gradient-to-b from-primary/50 to-transparent"
                style={{ clipPath: hexClipPath }}
              />
              <div
                className="absolute top-0.5 right-0.5 bottom-0.5 left-0.5 flex items-center justify-center bg-background"
                style={{ clipPath: hexClipPath }}
              >
                <Image
                  src="/images/logos/vorniqoLogo.webp"
                  width={70}
                  height={70}
                  alt="Vorniqo Logo"
                  className="max-w-[70%] max-h-[70%] object-contain"
                  draggable="false"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          <div
            className="relative h-[72px] bg-background shadow-[inset_0_0_0_1px_rgba(255,255,255,0.1)] drop-shadow-[0_0_10px_rgba(255,255,255,0.1)]"

            style={{ clipPath: 'none' }}
            ref={el => {
              if (el && window.innerWidth >= 768) {
                el.style.clipPath = navClipPath;
              }
            }}
          >
            <div className="relative z-10 flex h-full items-center justify-between px-6 md:px-8">
              <nav className="hidden md:flex">
                <ul className="flex items-center gap-10 text-[14px] font-medium text-text-light">
                  <li><Link href="#home" className="transition-colors hover:text-primary">Home</Link></li>
                  <li><Link href="#services" className="transition-colors hover:text-primary">Services</Link></li>
                  <li><Link href="#about-us" className="transition-colors hover:text-primary">About Us</Link></li>
                </ul>
              </nav>
              <div className="hidden md:flex items-center gap-6 ml-auto">
                <Link href="#why-us" className="text-[14px] font-medium transition-colors hover:text-primary text-text-light">
                  Why Us
                </Link>
                <Btn />
                <SecondaryBtn />
              </div>
              <div className="flex-1 md:hidden"></div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Navbar;
