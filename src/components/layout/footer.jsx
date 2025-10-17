import React from 'react';
import Link from 'next/link';
import { MoveUpRight, ArrowRight, Linkedin, Instagram, Facebook } from 'lucide-react';

// A reusable component for social links (Corrected for LEFT-ALIGNMENT)
const SocialLink = ({ name, icon, href = "#" }) => (
  <Link
    href={href}
    target="_blank"
    className="
      group flex flex-col items-start justify-center gap-y-4 
      px-8 py-10 transition hover:bg-white/[.03] h-full
    "
  >
    {/* Icon */}
    <div className="flex h-12 w-12 items-center">
      {icon}
    </div>

    {/* Text and small arrow */}
    <span className="flex items-center gap-x-1.5 text-sm font-semibold text-white">
      {name}
      <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1" />
    </span>
  </Link>
);

function Footer() {
  // Define colors and social links data
  const NAV_BG = '#09183E';
  const CYAN = '#00FFCC';
  const TEXT_SOFT = '#E6EDF7';
  const GRADIENT_START = '#00C2FF';
  const GRADIENT_END = '#01F1D6';

  const socialLinks = [
    { name: 'LINKEDIN', icon: <Linkedin className="h-6 w-6 text-white" />, href: 'https://linkedin.com' },
    { name: 'INSTAGRAM', icon: <Instagram className="h-6 w-6 text-white" />, href: 'https://instagram.com' },
    { name: 'FACEBOOK', icon: <Facebook className="h-6 w-6 text-white" />, href: 'https://facebook.com' },
  ];

  return (
    <footer style={{ backgroundColor: NAV_BG }}>
      <div className="mx-auto max-w-7xl">
        {/* Row 1: Call to Action Section (Two-column grid) */}
        <div className="grid grid-cols-2 divide-x divide-white/10 border-b border-white/10">
          {/* Left Column */}
          <div className="flex items-end justify-between p-12">
            <div>
              <p className="mb-2 text-sm font-medium tracking-wider" style={{ color: TEXT_SOFT }}>
                HAVE A PROJECT IN MIND?
              </p>
              <h2 className="text-4xl font-bold leading-tight text-white">
                BOOK A FREE CALL<br />WITH US
              </h2>
            </div>
            <Link
              href="#"
              className="group flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-white transition-transform hover:scale-105"
              aria-label="Book a call"
            >
              <MoveUpRight className="h-4 w-4 text-[#0A193E] transition-transform group-hover:rotate-45" />
            </Link>
          </div>
          {/* Right Column */}
          <div className="flex items-center p-12">
            <p className="max-w-md text-lg" style={{ color: TEXT_SOFT }}>
              Get a Free Demo Session — See How We Work Before You Decide.
            </p>
          </div>
        </div>

        {/* Row 2: Social Media Links (Corrected with uneven columns and left-alignment) */}
        <div className="grid grid-cols-[1fr_2fr_2fr_2fr_1fr] divide-x divide-white/10">
          {/* Column 1: Empty (will be narrow) */}
          <div></div>

          {/* Columns 2, 3, 4: Social Links (will be wide) */}
          {socialLinks.map((link) => (
            <SocialLink key={link.name} {...link} />
          ))}

          {/* Column 5: Empty (will be narrow) */}
          <div></div>
        </div>
      </div>

      {/* Row 3: Copyright with Gradient */}
      <div
        className="py-3 text-center bg-gradient-to-r from-[#014FF8] to-[#01F1D6] "  >
        <p className="text-sm font-medium tracking-wide" style={{ color: NAV_BG }}>
          © ALL RIGHTS RESERVED 2025 | VORNIQO SOLUTIONS
        </p>
      </div>
    </footer>
  );
}

export default Footer;