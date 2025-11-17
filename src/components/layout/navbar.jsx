"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Btn from "../ui/primaryBtn";
import SecondaryBtn from "../ui/secondaryBtn";

function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navClipPath =
    'path("M 0 0 L 1120 0 L 1120 54 Q 1117 58 1114 60 L 1086 72 L 34 72 L 6 60 Q 3 58 0 54 Z")';
  const hexClipPath =
    "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)";

  const toggleMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <>
      <header className="relative flex justify-center py-4 md:py-10 select-none z-50">
        <div className="relative w-full max-w-[1120px] px-4 md:px-0">
          {/* Logo - Hexagon - Always in center */}
          <div className="absolute left-1/2 top-1/2 z-30 -translate-x-1/2 -translate-y-1/2">
            <div
              className="relative w-[80px] h-[92.38px] md:w-[100px] md:h-[115.47px]"
              style={{ filter: "drop-shadow(0 0 10px rgba(9, 24, 62, 0.75))" }}
            >
              <div
                className="absolute inset-0 bg-gradient-to-r from-[#014FF8] to-[#01F1D6]"
                style={{
                  clipPath: hexClipPath,
                  background:
                    "linear-gradient(to bottom, #014FF8 0%, #01F1D6 50%, transparent 100%)",
                }}
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

          {/* Main Navbar */}
          <div
            className="relative h-[72px] bg-background shadow-[inset_0_0_0_1px_rgba(255,255,255,0.1)] drop-shadow-[0_0_10px_rgba(255,255,255,0.1)]"
            style={{ clipPath: "none" }}
            ref={(el) => {
              if (el && window.innerWidth >= 768) {
                el.style.clipPath = navClipPath;
              }
            }}
          >
            <div className="relative z-10 flex h-full items-center justify-between px-6 md:px-8">
              {/* Desktop Navigation - Left Side */}
              <nav className="hidden lg:flex">
                <ul className="flex items-center gap-10 text-[14px] font-medium text-text-light">
                  <li>
                    <Link
                      href="#home"
                      className="transition-colors hover:text-primary"
                    >
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#services"
                      className="transition-colors hover:text-primary"
                    >
                      Services
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#about-us"
                      className="transition-colors hover:text-primary"
                    >
                      About Us
                    </Link>
                  </li>
                </ul>
              </nav>

              {/* Desktop Navigation - Right Side */}
              <div className="hidden lg:flex items-center gap-6 ml-auto">
                <Link
                  href="#why-us"
                  className="text-[14px] font-medium transition-colors hover:text-primary text-text-light"
                >
                  Why Us
                </Link>
                <Btn />
                <SecondaryBtn />
              </div>

              {/* Spacer for mobile to center logo */}
              <div className="flex-1 lg:hidden"></div>

              {/* Mobile Hamburger Button - Right Side - NAVBAR */}
              <button
                onClick={toggleMenu}
                className="lg:hidden w-9 h-9 rounded-xl bg-gradient-to-r from-[#014FF8] to-[#01F1D6] flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-[#01feff] focus:ring-offset-2 focus:ring-offset-[#081840] transition-transform duration-300 hover:scale-105"
                aria-label="Toggle menu"
              >
                <div className="w-4 h-4 flex flex-col justify-between">
                  <span
                    className="block h-0.5 w-full !bg-black transition-all duration-300"
                    style={{ backgroundColor: "#000000" }}
                  />
                  <span
                    className="block h-0.5 w-full !bg-black transition-all duration-300"
                    style={{ backgroundColor: "#000000" }}
                  />
                  <span
                    className="block h-0.5 w-full !bg-black transition-all duration-300"
                    style={{ backgroundColor: "#000000" }}
                  />
                </div>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden transition-opacity duration-300 ${
          mobileMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={toggleMenu}
      />

      {/* Mobile Menu Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-[280px] sm:w-[320px] bg-[#0E2151] shadow-2xl z-50 lg:hidden transform transition-transform duration-300 ease-out ${
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Mobile Menu Content */}
        <div className="flex flex-col h-full p-6">
          {/* Close Button (X) - SIDEBAR */}
          <button
            onClick={toggleMenu}
            className="self-end w-9 h-9 rounded-xl bg-gradient-to-r from-[#014FF8] to-[#01F1D6] flex items-center justify-center mb-8 focus:outline-none focus:ring-2 focus:ring-[#01feff] transition-transform duration-300 hover:scale-105"
            aria-label="Close menu"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="#000000"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          {/* Mobile Navigation Links */}
          <nav className="flex-1">
            <ul className="flex flex-col gap-6">
              <li>
                <Link
                  href="#home"
                  onClick={toggleMenu}
                  className="block text-lg font-medium text-text-light hover:text-[#01feff] transition-colors py-2 border-b border-white/10"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="#services"
                  onClick={toggleMenu}
                  className="block text-lg font-medium text-text-light hover:text-[#01feff] transition-colors py-2 border-b border-white/10"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="#about-us"
                  onClick={toggleMenu}
                  className="block text-lg font-medium text-text-light hover:text-[#01feff] transition-colors py-2 border-b border-white/10"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="#why-us"
                  onClick={toggleMenu}
                  className="block text-lg font-medium text-text-light hover:text-[#01feff] transition-colors py-2 border-b border-white/10"
                >
                  Why Us
                </Link>
              </li>
            </ul>
          </nav>

          {/* Mobile Buttons */}
          <div className="flex flex-col gap-4 pt-6 border-t border-white/10">
            <div onClick={toggleMenu}>
              <Btn />
            </div>
            <div onClick={toggleMenu}>
              <SecondaryBtn />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
