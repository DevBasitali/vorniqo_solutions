"use client";

import React, { useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

// Replace with your actual images
import Box1 from "../../../public/images/box1.png";
import Box2 from "../../../public/images/box2.png";

/* ========== COLLAGE PROPORTIONS ========== */
const COLLAGE_ASPECT = 0.95; // width / height ratio
const R_OUTER = 24;
const R_INNER = 12;

/* ========== Icons ========== */
const BulbIcon = ({ className = "w-6 h-6" }) => (
  <svg viewBox="0 0 24 24" className={className} fill="none">
    <path
      d="M9 18h6m-6 2h6M7 10a5 5 0 1110 0c0 2.09-1.05 3.38-2.1 4.37-.49.45-.9.82-.9 1.63v.5H10v-.5c0-.81-.41-1.18-.9-1.63C8.05 13.38 7 12.09 7 10z"
      stroke="white"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const ShieldIcon = ({ className = "w-6 h-6" }) => (
  <svg viewBox="0 0 24 24" className={className} fill="none">
    <path
      d="M12 3l7 3v5c0 4.97-3.05 9.24-7 10-3.95-.76-7-5.03-7-10V6l7-3z"
      stroke="white"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M9 12l2 2 4-4"
      stroke="white"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const TargetIcon = ({ className = "w-6 h-6" }) => (
  <svg viewBox="0 0 24 24" className={className} fill="none">
    <circle cx="12" cy="12" r="8" stroke="white" strokeWidth="1.6" />
    <circle cx="12" cy="12" r="4" stroke="white" strokeWidth="1.6" />
    <path
      d="M12 2v3M22 12h-3M12 22v-3M2 12h3"
      stroke="white"
      strokeWidth="1.6"
      strokeLinecap="round"
    />
  </svg>
);

const GearIcon = ({ className = "w-6 h-6" }) => (
  <svg viewBox="0 0 24 24" className={className} fill="none">
    <path
      d="M12 15a3 3 0 100-6 3 3 0 000 6z"
      stroke="white"
      strokeWidth="1.6"
    />
    <path
      d="M19.4 15a7.96 7.96 0 00.1-2l2.1-1.6-2-3.5-2.5.6a8.06 8.06 0 00-1.7-1l-.4-2.6H11l-.4-2.6a8.06 8.06 0 00-1.7 1l-2.5-.6-2 3.5L4.5 13a7.96 7.96 0 000 2l-2.1 1.6 2 3.5 2.5-.6a8.06 8.06 0 001.7 1l.4 2.6h4l.4-2.6a8.06 8.06 0 001.7-1l2.5.6 2-3.5L19.4 15z"
      stroke="white"
      strokeWidth="1.6"
      strokeLinejoin="round"
    />
  </svg>
);

function HexBadge({ side, icon, delay = 0 }) {
  return (
    <motion.div
      initial={{ y: -6, rotate: -4 }}
      animate={{ y: [-6, 6, -6], rotate: [-4, 4, -4] }}
      transition={{ duration: 3.2, repeat: Infinity, delay, ease: "easeInOut" }}
      className={`absolute -top-4 sm:-top-6 ${
        side === "left" ? "-left-4 sm:-left-6" : "-right-4 sm:-right-6"
      } z-30 drop-shadow-[0_8px_24px_rgba(23,233,255,0.4)]`}
    >
      <div
        className="grid place-items-center text-white w-12 h-12 sm:w-14 sm:h-14"
        style={{
          background: "linear-gradient(180deg,#17E9FF, #2166FF)",
          clipPath:
            "polygon(25% 6.7%, 75% 6.7%, 100% 50%, 75% 93.3%, 25% 93.3%, 0% 50%)",
          boxShadow:
            "0 8px 30px rgba(23,233,255,0.35), inset 0 0 12px rgba(255,255,255,0.15)",
        }}
      >
        <div className="w-4 h-4 sm:w-5 sm:h-5">{icon}</div>
      </div>
    </motion.div>
  );
}

function FeatureCard({ title, subtitle, badgeSide, Icon, index }) {
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
        max-w-xs sm:max-w-sm lg:max-w-none"
      style={{
        transform:
          "perspective(800px) rotateX(var(--rx, 0deg)) rotateY(var(--ry, 0deg))",
        transition: "transform 120ms ease, box-shadow 200ms ease",
        overflow: "visible",
        zIndex: 20,
      }}
    >
      <HexBadge
        side={badgeSide}
        icon={<Icon className="w-6 h-6" />}
        delay={0.06 * index}
      />
      <div className="absolute inset-0 rounded-[20px] ring-1 ring-white/10" />
      <div className="h-full w-full p-4 sm:p-5 lg:p-6 flex flex-col items-center justify-center text-center">
        <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-2">
          {title}
        </h3>
        <p className="text-sm sm:text-base text-[#A9BDD1]">{subtitle}</p>
      </div>
      <div className="pointer-events-none absolute inset-0 rounded-[20px] ring-0 hover:ring-2 hover:ring-[rgba(27,100,242,0.5)] transition-shadow duration-300" />
    </motion.div>
  );
}

function Collage({ src }) {
  return (
    <motion.div
      initial={{ x: -24, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="relative bg-[#09183E] shadow-[0_30px_80px_-40px_rgba(0,0,0,0.7)]
  w-full h-auto
  max-w-[240px] sm:max-w-[280px] md:max-w-[250px] lg:max-w-[360px]
  mx-auto lg:mx-0
  p-2 sm:p-3 lg:p-3"
      style={{
        borderRadius: R_OUTER,
        aspectRatio: COLLAGE_ASPECT,
      }}
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
            alt="analytics-1"
            fill
            sizes="(max-width: 640px) 160px, (max-width: 768px) 200px, (max-width: 1024px) 250px, 300px"
            className="object-cover object-left"
            priority
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
            alt="analytics-2"
            fill
            sizes="(max-width: 640px) 160px, (max-width: 768px) 200px, (max-width: 1024px) 250px, 300px"
            className="object-cover object-top"
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
            alt="analytics-3"
            fill
            sizes="(max-width: 640px) 160px, (max-width: 768px) 200px, (max-width: 1024px) 250px, 300px"
            className="object-cover object-bottom"
          />
        </div>
      </div>
    </motion.div>
  );
}

export default function WhyUs() {
  const features = [
    {
      title: "Custom-Fit Solutions",
      subtitle: "Built around your exact needs",
      badgeSide: "left",
      Icon: BulbIcon,
    },
    {
      title: "Transparent Process",
      subtitle: "No hidden steps, no surprises",
      badgeSide: "right",
      Icon: ShieldIcon,
    },
    {
      title: "Results-Driven",
      subtitle: "Focused on outcomes that matter",
      badgeSide: "left",
      Icon: TargetIcon,
    },
    {
      title: "Modern Tech",
      subtitle: "Always using the latest tools & trends",
      badgeSide: "right",
      Icon: GearIcon,
    },
  ];

  return (
    <section className="grid grid-cols-1">
      <div className="relative flex flex-col py-7">
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start px-4 md:px-20 lg:px-24 border-t border-b border-white/30">
          <div className="w-full lg:w-1/2 text-center lg:text-left lg:border-r lg:border-white/30 py-8 lg:pr-8">
            <span className="inline-block tracking-[2px] mb-2 text-color-text-dark font-semibold">
              WHY CHOOSE US ///////////////////////
            </span>
            <h2 className="font-heading uppercase">
              Why Our Client
              <br />
              Believe We Are
              <br />
              Different
            </h2>
          </div>

          <div className="w-full lg:w-1/2 py-8 lg:pl-8">
            <p className="text-color-text-light text-center lg:text-left px-4 sm:px-8 lg:px-0">
              We go beyond just delivering projects we create meaningful digital
              experiences that drive results. Our approach combines creativity,
              technology, and strategy to help your business grow with
              confidence.
            </p>
          </div>
        </div>

        {/* Content Section */}
        <div className="relative py-8 lg:py-12">
         <div className="grid grid-cols-1 gap-6 md:gap-[5px] px-4 mx-auto sm:px-8 md:px-12 lg:px-20 lg:grid-cols-2 place-items-center z-10">
            <div className="w-full hidden lg:block">
              <Collage src={Box1} />
            </div>

            {/* Feature Cards Grid */}
            <div className="w-full">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 place-items-center">
                {features.map((f, i) => (
                  <FeatureCard
                    key={f.title}
                    title={f.title}
                    subtitle={f.subtitle}
                    badgeSide={f.badgeSide}
                    Icon={f.Icon}
                    index={i}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
