"use client";

import React, { useRef } from "react";
import { motion } from "framer-motion";
import HexBadge from "./HexBadge";

export default function FeatureCard({ title, subtitle, badgeSide, Icon, index }) {
  const ref = useRef(null);

  const handleMove = (e) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const x = e.clientX - r.left;
    const y = e.clientY - r.top;
    const rx = -(y / r.height - 0.5) * 10;
    const ry = (x / r.width - 0.5) * 12;
    el.style.setProperty("--rx", `${rx}deg`);
    el.style.setProperty("--ry", `${ry}deg`);
  };

  const resetTilt = () => {
    const el = ref.current;
    if (!el) return;
    el.style.setProperty("--rx", `0deg`);
    el.style.setProperty("--ry", `0deg`);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={resetTilt}
      initial={{ y: 24, opacity: 0, scale: 0.98 }}
      animate={{ y: 0, opacity: 1, scale: 1 }}
      transition={{
        duration: 0.6,
        delay: 0.15 * index,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={{ scale: 1.02 }}
      className="relative rounded-[20px] bg-[#09183E] text-white/95 shadow-[0_20px_60px_-30px_rgba(0,0,0,0.6)]
        w-full h-48 sm:h-52 md:h-56 lg:h-60
        max-w-xs sm:max-w-sm lg:max-w-none
        focus:outline-none focus:ring-2 focus:ring-[#17E9FF] focus:ring-offset-2 focus:ring-offset-[#081840]
        transition-all duration-300"
      style={{
        transform:
          "perspective(800px) rotateX(var(--rx, 0deg)) rotateY(var(--ry, 0deg))",
        transition: "transform 120ms ease, box-shadow 200ms ease",
        overflow: "visible",
        zIndex: 20,
        willChange: "transform",
      }}
      tabIndex={0}
      role="article"
      aria-label={`Feature: ${title}`}
    >
      <HexBadge
        side={badgeSide}
        icon={<Icon className="w-6 h-6" />}
        delay={0.06 * index}
      />
      <div className="absolute inset-0 rounded-[20px] ring-1 ring-white/10" />
      <div className="h-full w-full p-4 sm:p-5 lg:p-6 flex flex-col justify-center text-left">
        <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold text-white tracking-tight mb-2 max-w-full">
          {title}
        </h3>
        <p className="text-sm sm:text-base text-[#A9BDD1] font-body">
          {subtitle}
        </p>
      </div>
      <div className="pointer-events-none absolute inset-0 rounded-[20px] ring-0 hover:ring-2 hover:ring-[rgba(27,100,242,0.5)] transition-shadow duration-300" />
    </motion.div>
  );
}