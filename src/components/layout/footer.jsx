import React from "react";
import Link from "next/link";
import { MoveUpRight, ArrowRight } from "lucide-react";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
// A reusable component for social links (Corrected for LEFT-ALIGNMENT)
const SocialLink = ({ name, icon, href = "#" }) => (
  <Link
    href={href}
    target="_blank"
    className="
      group flex flex-col items-start lg:justify-center gap-y-1 lg:gap-y-4 
       pl-3 sm:pl-0  lg:px-8 py-10 transition hover:bg-white/[.03] h-full
    "
  >
    {/* Icon */}
    <div className="flex h-12 w-12 items-center">{icon}</div>

    {/* Text and small arrow */}
    <h1 className="flex lg:items-center gap-x-1.5 !text-xs xs:!text-sm lg:!text-lg !font-bold !text-white">
      {name}
      <ArrowRight
        size={30}
        className="h-5 w-5 transition-transform group-hover:translate-x-1"
      />
    </h1>
  </Link>
);

function Footer() {
  // Define colors and social links data
  const NAV_BG = "#09183E";
  const CYAN = "#00FFCC";
  const TEXT_SOFT = "#E6EDF7";
  const GRADIENT_START = "#00C2FF";
  const GRADIENT_END = "#01F1D6";

  const socialLinks = [
    {
      name: "LINKEDIN",
      icon: <FaLinkedin className="h-6 w-6 text-white" />,
      href: "https://linkedin.com",
    },
    {
      name: "INSTAGRAM",
      icon: <FaInstagram className="h-6 w-6 text-white" />,
      href: "https://www.instagram.com/vorniqo_solutions?igsh=NDBzeHExdG1la2I5",
    },
    {
      name: "FACEBOOK",
      icon: <FaFacebook className="h-6 w-6 text-white" />,
      href: "https://facebook.com",
    },
  ];

  return (
    <footer>
      <div className="mx-auto w-full ">
        {/* Row 1: Call to Action Section (Two-column grid) */}
        <div className="grid  grid-cols-1 sm:grid-cols-2 divide-x divide-white/30 border-b border-white/30 border-t">
          {/* Left Column */}
          <div className="flex items-end justify-between p-5 lg:p-12">
            <div>
              <p
                className="mb-2 !text-sm lg:!text-2xl font-medium tracking-wider"
                style={{ color: TEXT_SOFT }}
              >
                HAVE A PROJECT IN MIND?
              </p>
              <h2 className=" text-3xl xs:text-4xl font-bold leading-tight text-white">
                BOOK A FREE CALL
                <br />
                WITH US
              </h2>
            </div>
            <Link
              href="#"
              className="group flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-white transition-transform hover:scale-105"
              aria-label="Book a call"
            >
              <MoveUpRight className="h-5 w-5 text-[#0A193E] transition-transform group-hover:rotate-45" />
            </Link>
          </div>
          {/* Right Column */}
          <div className="flex items-center justify-center p-5 lg:p-12">
            <p className="max-w-md !text-lg text-white">
              Get a Free Demo Session See How We Work Before You Decide.
            </p>
          </div>
        </div>

        {/* Row 2: Social Media Links (Corrected with uneven columns and left-alignment) */}
        <div className="grid grid-cols-3 divide-x divide-white/30">
          {/* Column 1: Empty (will be narrow) */}
          {/* <div></div> */}

          {/* Columns 2, 3, 4: Social Links (will be wide) */}
          {socialLinks.map((link) => (
            <SocialLink key={link.name} {...link} />
          ))}

          {/* Column 5: Empty (will be narrow) */}
          <div></div>
        </div>
      </div>

      {/* Row 3: Copyright with Gradient */}
      <div className="py-3 text-center bg-gradient-to-r from-[#0073EB] to-[#01FFFF] ">
        <p
          className=" !text-sm sm:!text-sm  !text-[#071435] font-medium tracking-wide"
          // style={{ color: NAV_BG }}
        >
          © ALL RIGHTS RESERVED 2025 | VORNIQO SOLUTIONS
        </p>
      </div>
    </footer>
  );
}

export default Footer;
