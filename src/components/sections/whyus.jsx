"use client";

import React, { useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

// Replace with your actual images
import Box1 from "../../../public/images/box1.png";
import Box2 from "../../../public/images/box2.png";

/* ========== FIGMA COLLAGE SETTINGS ========== */
/* Base sizes (your numbers) */
const LEFT_W = 223.29;
const LEFT_H = 464.51;
const RIGHT_W = 223.29;

/* Gap controls (tune to match Figma visuals) */
const OUTER_PAD = 16;  // padding between tiles and the rounded frame
const GAP_X = 16;      // gap between left column and right stack
const GAP_Y = 16;      // vertical gap between right-top and right-bottom

/* If you MUST keep right height at 211.63, set this true.
   Then the middle gap becomes 41.25 to keep bottoms aligned. */
const LOCK_RIGHT_H = false;
const RIGHT_H_FIXED = 211.63;

/* Computed sizes to keep edges aligned */
const RIGHT_H = LOCK_RIGHT_H ? RIGHT_H_FIXED : (LEFT_H - GAP_Y) / 2;
const COLLAGE_INNER_W = LEFT_W + GAP_X + RIGHT_W;
const COLLAGE_INNER_H = Math.max(LEFT_H, RIGHT_H * 2 + GAP_Y);
const COLLAGE_W = COLLAGE_INNER_W + OUTER_PAD * 2;
const COLLAGE_H = COLLAGE_INNER_H + OUTER_PAD * 2;

/* ========== Cards (your sizes) ========== */
const CARD_W = 423;
const CARD_H = 236;
const CARD_GAP = 24;
const CARDS_W = CARD_W * 2 + CARD_GAP; // 870
const CARDS_H = CARD_H * 2 + CARD_GAP; // 496

/* ========== Row 2 scaling to fit container ========== */
const ROW_GAP = 48;                 // gap between collage and cards
const CANVAS_W = COLLAGE_W + ROW_GAP + CARDS_W; // ~1412.58
const CANVAS_H = Math.max(COLLAGE_H, CARDS_H);  // ~496.5
const CONTAINER_W = 1200;           // keep section at 1200
const SCALE = CONTAINER_W / CANVAS_W;
const SCALED_H = CANVAS_H * SCALE;

/* ========== Icons ========== */
const BulbIcon = ({ className = "w-6 h-6" }) => (
  <svg viewBox="0 0 24 24" className={className} fill="none">
    <path d="M9 18h6m-6 2h6M7 10a5 5 0 1110 0c0 2.09-1.05 3.38-2.1 4.37-.49.45-.9.82-.9 1.63v.5H10v-.5c0-.81-.41-1.18-.9-1.63C8.05 13.38 7 12.09 7 10z" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);
const ShieldIcon = ({ className = "w-6 h-6" }) => (
  <svg viewBox="0 0 24 24" className={className} fill="none">
    <path d="M12 3l7 3v5c0 4.97-3.05 9.24-7 10-3.95-.76-7-5.03-7-10V6l7-3z" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M9 12l2 2 4-4" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);
const TargetIcon = ({ className = "w-6 h-6" }) => (
  <svg viewBox="0 0 24 24" className={className} fill="none">
    <circle cx="12" cy="12" r="8" stroke="white" strokeWidth="1.6"/>
    <circle cx="12" cy="12" r="4" stroke="white" strokeWidth="1.6"/>
    <path d="M12 2v3M22 12h-3M12 22v-3M2 12h3" stroke="white" strokeWidth="1.6" strokeLinecap="round"/>
  </svg>
);
const GearIcon = ({ className = "w-6 h-6" }) => (
  <svg viewBox="0 0 24 24" className={className} fill="none">
    <path d="M12 15a3 3 0 100-6 3 3 0 000 6z" stroke="white" strokeWidth="1.6"/>
    <path d="M19.4 15a7.96 7.96 0 00.1-2l2.1-1.6-2-3.5-2.5.6a8.06 8.06 0 00-1.7-1l-.4-2.6H11l-.4-2.6a8.06 8.06 0 00-1.7 1l-2.5-.6-2 3.5L4.5 13a7.96 7.96 0 000 2l-2.1 1.6 2 3.5 2.5-.6a8.06 8.06 0 001.7 1l.4 2.6h4l.4-2.6a8.06 8.06 0 001.7-1l2.5.6 2-3.5L19.4 15z" stroke="white" strokeWidth="1.6" strokeLinejoin="round"/>
  </svg>
);

/* ========== Hex badge (z-index high, no clipping) ========== */
function HexBadge({ side, icon, delay = 0 }) {
  return (
    <motion.div
      initial={{ y: -6, rotate: -4 }}
      animate={{ y: [-6, 6, -6], rotate: [-4, 4, -4] }}
      transition={{ duration: 3.2, repeat: Infinity, delay, ease: "easeInOut" }}
      className={`absolute -top-6 ${side === "left" ? "-left-6" : "-right-6"} z-30 drop-shadow-[0_8px_24px_rgba(23,233,255,0.4)]`}
    >
      <div
        className="grid place-items-center text-white"
        style={{
          width: 56,
          height: 56,
          background: "linear-gradient(180deg,#17E9FF, #2166FF)",
          clipPath: "polygon(25% 6.7%, 75% 6.7%, 100% 50%, 75% 93.3%, 25% 93.3%, 0% 50%)",
          boxShadow: "0 8px 30px rgba(23,233,255,0.35), inset 0 0 12px rgba(255,255,255,0.15)"
        }}
      >
        {icon}
      </div>
    </motion.div>
  );
}

/* ========== Feature card (centered text) ========== */
function FeatureCard({ title, subtitle, badgeSide, Icon, index }) {
  const ref = useRef(null);

  const handleMove = (e) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const x = e.clientX - r.left;
    const y = e.clientY - r.top;
    const rx = -((y / r.height) - 0.5) * 10;
    const ry = ((x / r.width) - 0.5) * 12;
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
      transition={{ duration: 0.6, delay: 0.15 * index, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ scale: 1.02 }}
      className="relative rounded-[20px] bg-[#09183E] text-white/95 shadow-[0_20px_60px_-30px_rgba(0,0,0,0.6)]"
      style={{
        width: CARD_W,
        height: CARD_H,
        transform: "perspective(800px) rotateX(var(--rx, 0deg)) rotateY(var(--ry, 0deg))",
        transition: "transform 120ms ease, box-shadow 200ms ease",
        overflow: "visible",
        zIndex: 20
      }}
    >
      <HexBadge side={badgeSide} icon={<Icon className="w-6 h-6" />} delay={0.06 * index} />
      <div className="absolute inset-0 rounded-[20px] ring-1 ring-white/10" />
      <div className="h-full w-full p-6 flex flex-col items-center justify-center text-center">
        <h3 className="text-5xl font-extrabold text-white tracking-tight mb-2">{title}</h3>
        <p className="text-[#A9BDD1]">{subtitle}</p>
      </div>
      <div className="pointer-events-none absolute inset-0 rounded-[20px] ring-0 hover:ring-2 hover:ring-[rgba(27,100,242,0.5)] transition-shadow duration-300" />
    </motion.div>
  );
}

/* ========== Collage (Figma-like gaps via grid) ========== */
function Collage({ src }) {
  // Outer and inner corner radii (larger on outer, smaller on inner seams)
  const R_OUTER = 24;
  const R_INNER = 12;

  return (
    <motion.div
      initial={{ x: -24, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="relative bg-[#09183E] shadow-[0_30px_80px_-40px_rgba(0,0,0,0.7)]"
      style={{
        width: COLLAGE_W,
        height: COLLAGE_H,
        borderRadius: R_OUTER,
        padding: OUTER_PAD
      }}
    >
      <div
        className="grid"
        style={{
          gridTemplateColumns: `${LEFT_W}px ${RIGHT_W}px`,
          gridTemplateRows: `${RIGHT_H}px ${RIGHT_H}px`,
          gap: `${GAP_Y}px ${GAP_X}px`, // row gap then column gap
          width: COLLAGE_INNER_W,
          height: COLLAGE_INNER_H
        }}
      >
        {/* Left tile (spans both rows) */}
        <div
          className="relative overflow-hidden ring-1 ring-white/10"
          style={{
            gridRow: "1 / span 2",
            borderRadius: `${R_OUTER}px ${R_INNER}px ${R_INNER}px ${R_OUTER}px`
          }}
        >
          <Image
            src={src}
            alt="analytics-1"
            fill
            sizes={`${LEFT_W}px`}
            className="object-cover object-left"
            priority
          />
        </div>

        {/* Right top */}
        <div
          className="relative overflow-hidden ring-1 ring-white/10"
          style={{
            borderRadius: `${R_INNER}px ${R_OUTER}px ${R_INNER}px ${R_INNER}px`
          }}
        >
          <Image
            src={src}
            alt="analytics-2"
            fill
            sizes={`${RIGHT_W}px`}
            className="object-cover object-top"
          />
        </div>

        {/* Right bottom */}
        <div
          className="relative overflow-hidden ring-1 ring-white/10"
          style={{
            borderRadius: `${R_INNER}px ${R_INNER}px ${R_OUTER}px ${R_INNER}px`
          }}
        >
          <Image
            src={Box2}
            alt="analytics-3"
            fill
            sizes={`${RIGHT_W}px`}
            className="object-cover object-bottom"
          />
        </div>
      </div>
    </motion.div>
  );
}

/* ========== Section ========== */
export default function WhyUs() {
  const features = [
    { title: "Custom-Fit Solutions", subtitle: "Built around your exact needs", badgeSide: "left",  Icon: BulbIcon },
    { title: "Transparent Process", subtitle: "No hidden steps, no surprises",   badgeSide: "right", Icon: ShieldIcon },
    { title: "Results-Driven",       subtitle: "Focused on outcomes that matter", badgeSide: "left",  Icon: TargetIcon },
    { title: "Modern Tech",          subtitle: "Always using the latest tools & trends", badgeSide: "right", Icon: GearIcon }
  ];

  return (
    <section className="w-full bg-[#09183E] text-white" style={{ padding: "64px 0" }}>
      <div className="mx-auto" style={{ width: CONTAINER_W }}>
        {/* Row 1 band: full-bleed top/bottom + centered vertical divider */}
        <div className="relative mb-12">
          <div className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 h-px w-screen bg-white/10" />
          <div className="pointer-events-none absolute left-1/2 bottom-0 -translate-x-1/2 h-px w-screen bg-white/10" />
          <div className="pointer-events-none absolute left-1/2 top-[-1px] bottom-[-1px] -translate-x-1/2 w-px bg-white/10" />

          <div className="grid grid-cols-2">
            <div className="pr-12 py-8">
              <div className="mb-5 flex items-center gap-4">
                <span className="text-[12px] tracking-[0.18em] font-semibold uppercase text-[#78F1FF]">
                  WHY CHOOSE US ///////////////////////////////////////
                </span>
              </div>
              <h2 className="uppercase font-extrabold" style={{ letterSpacing: "-0.02em", lineHeight: "1.05" }}>
                Why Our Client<br />Believe We Are<br />Different
              </h2>
            </div>
            <div className="pl-12 py-8">
              <p className="text-[#A9BDD1]" style={{ fontSize: 16, lineHeight: "1.9" }}>
                We go beyond just delivering projects — we create meaningful digital
                experiences that drive results. Our approach combines creativity,
                technology, and strategy to help your business grow with confidence.
              </p>
            </div>
          </div>
        </div>

        {/* Row 2 scaled to fit 1200 (prevents right-side clipping) */}
        <div className="relative z-10" style={{ width: CONTAINER_W, height: SCALED_H, overflow: "visible" }}>
          <div
            className="absolute left-0 top-0"
            style={{
              width: CANVAS_W,
              height: CANVAS_H,
              transform: `scale(${SCALE})`,
              transformOrigin: "top left"
            }}
          >
            <div className="flex items-start" style={{ width: CANVAS_W }}>
              {/* Collage */}
              <Collage src={Box1} />

              {/* Cards area */}
              <div className="shrink-0" style={{ width: CARDS_W, marginLeft: ROW_GAP }}>
                <div className="grid grid-cols-2" style={{ gap: CARD_GAP }}>
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

      </div>
    </section>
  );
}