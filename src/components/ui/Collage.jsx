"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const COLLAGE_ASPECT = 0.95;
const R_OUTER = 24;
const R_INNER = 12;

export default function Collage({ src, Box2 }) {
  return (
    <motion.div
      initial={{ x: -24, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="relative bg-[#09183E] shadow-[0_30px_80px_-40px_rgba(0,0,0,0.7)] 
        w-full h-auto
        max-w-[240px] sm:max-w-[280px] md:max-w-[300px] lg:max-w-[420px] xl:max-w-[480px] 
        mx-auto lg:mx-0 
        p-2 sm:p-3 lg:p-3"
      style={{
        borderRadius: R_OUTER,
        aspectRatio: COLLAGE_ASPECT,
      }}
      role="img"
      aria-label="Project showcase collage"
    >
      <div
        className="grid h-full w-full"
        style={{
          gridTemplateColumns: "1fr 1fr",
          gridTemplateRows: "1fr 1fr",
          gap: "8px 8px",
        }}
      >
        {/* Left tile (spans both rows) */}
        <div
          className="relative overflow-hidden ring-1 ring-white/10"
          style={{
            gridRow: "1 / span 2",
            borderRadius: `${R_OUTER}px ${R_INNER}px ${R_INNER}px ${R_OUTER}px`,
          }}
        >
          <Image
            src={src}
            alt="Analytics dashboard preview"
            fill
            sizes="(max-width: 640px) 160px, (max-width: 768px) 200px, (max-width: 1024px) 250px, 300px"
            className="object-cover object-left"
            loading="lazy"
          />
        </div>

        {/* Right top */}
        <div
          className="relative overflow-hidden ring-1 ring-white/10"
          style={{
            borderRadius: `${R_INNER}px ${R_OUTER}px ${R_INNER}px ${R_INNER}px`,
          }}
        >
          <Image
            src={src}
            alt="Project detail view"
            fill
            sizes="(max-width: 640px) 160px, (max-width: 768px) 200px, (max-width: 1024px) 250px, 300px"
            className="object-cover object-top"
            loading="lazy"
          />
        </div>

        {/* Right bottom */}
        <div
          className="relative overflow-hidden ring-1 ring-white/10"
          style={{
            borderRadius: `${R_INNER}px ${R_INNER}px ${R_OUTER}px ${R_INNER}px`,
          }}
        >
          <Image
            src={Box2}
            alt="Additional project screenshot"
            fill
            sizes="(max-width: 640px) 160px, (max-width: 768px) 200px, (max-width: 1024px) 250px, 300px"
            className="object-cover object-bottom"
            loading="lazy"
          />
        </div>
      </div>
    </motion.div>
  );
}