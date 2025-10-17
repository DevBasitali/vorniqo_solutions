"use client";

import React from "react";
import { ArrowRight } from "lucide-react";

const VorniqoAboutSection = () => {
  return (
    <section className="relative bg-[#09183E] py-20 px-8 overflow-hidden">
      {/* Required borders only */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute top-0 left-0 right-0 h-px bg-white/10" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-white/10" />
        <div className="absolute left-1/2 top-0 bottom-0 w-px bg-white/10" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <div className="flex items-center gap-3 text-8xl">
              <span className="text-cyan-400 text-sm font-semibold tracking-wider">
                ABOUT US /////////////////////////////
              </span>
              <div className="h-[6px] w-56 stripes-bar" />
            </div>

            <h2 className="text-5xl font-bold text-white leading-tight">
              ABOUT VORNIQO
            </h2>

            <div className="space-y-4 text-gray-300 text-base leading-relaxed">
              <p>
                Vorniqo Solution is a full-service software house dedicated to
                delivering excellence in digital innovation.
              </p>
              <p>
                We specialize in strategic marketing, high-quality graphical content,
                and reliable customer care solutions designed to help businesses grow
                and thrive in a competitive landscape. By combining creativity with
                technology.
              </p>
            </div>

            <button className="group mt-8 bg-[#01F1D6] hover:bg-cyan-500 text-[#001845] font-bold py-3 px-8 rounded-full inline-flex items-center gap-2 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-400/50">
              Contact Us
              <ArrowRight size={16} color="black" />
            </button>
          </div>

          {/* Right Column - Rings + Logos */}
          <div className="relative flex items-center justify-center h-[500px]">
            {/* RINGS */}
            <div className="absolute inset-0 flex items-center justify-center">
              {/* Middle ring (lighter) – rotates clockwise after delay */}
              <div className="segmented-ring ring-middle ring-rotate-cw delayed-middle" />
              {/* Outer ring (darkest) – rotates counter-clockwise after delay */}
              <div className="segmented-ring ring-outer ring-rotate-ccw delayed-outer" />
            </div>

            {/* Central V disc (breathing after delay) */}
            <div className="relative z-20 w-48 h-48 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center shadow-2xl shadow-cyan-400/40 animate-breathe-delayed">
              <div className="absolute inset-0 rounded-full glow-soft pointer-events-none" />
              <img
                src="/Images/v.png"
                alt="Vorniqo Logo"
                className="relative z-10 w-28 h-28 object-contain"
                draggable={false}
              />
            </div>

            {/* OUTER RING LOGOS – attached to the outer ring and rotate with it */}
            <div className="outer-logos ring-rotate-ccw delayed-outer">
              {/* Place each logo on the circumference using rotate(angle) translateX(radius) */}
              <div className="logo-slot" style={{ transform: "rotate(210deg) translateX(240px)" }}>
                <img src="/Images/zafar.png" alt="AL ZAFAR" className="logo-img" draggable={false} />
              </div>
              <div className="logo-slot" style={{ transform: "rotate(330deg) translateX(240px)" }}>
                <img src="/Images/hsq.png" alt="Lion" className="logo-img" draggable={false} />
              </div>
              <div className="logo-slot" style={{ transform: "rotate(45deg) translateX(240px)" }}>
                <img src="/Images/burj.png" alt="Arabic" className="logo-img" draggable={false} />
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        /* Set these to match your exact mock colors */
        :root {
          --ring-middle: #133a70; /* lighter blue ring */
          --ring-outer: #0f2b53;  /* darkest blue ring */
          --delay-start: 1.2s;    /* Scene 1: static start */
          --delay-middle: 1.8s;   /* Scene 3: middle ring starts */
          --delay-outer: 2.4s;    /* Scene 4: outer ring + logos start */
        }

        /* ABOUT US ///// */
        .stripes-bar {
          background: repeating-linear-gradient(
            -23deg,
            rgba(0, 255, 242, 1) 0 8px,
            transparent 8px 16px
          );
          border-radius: 2px;
        }

        /* RINGS (wedge gaps via conic-gradient + ring mask) */
        .segmented-ring {
          position: absolute;
          border-radius: 9999px;
          pointer-events: none;
          z-index: 5; /* behind logos, above background */
        }

        /* Middle ring: ~380px diameter, ~60px thick, two gaps */
        .ring-middle {
          width: 380px;
          height: 380px;
          background: conic-gradient(
            from 190deg,
            var(--ring-middle) 0deg 130deg,
            transparent 130deg 165deg,
            var(--ring-middle) 165deg 325deg,
            transparent 325deg 360deg
          );
          -webkit-mask: radial-gradient(
            farthest-side,
            transparent calc(50% - 60px),
            #000 calc(50% - 60px)
          );
          mask: radial-gradient(
            farthest-side,
            transparent calc(50% - 60px),
            #000 calc(50% - 60px)
          );
        }

        /* Outer ring: ~480px diameter, ~70px thick, two gaps */
        .ring-outer {
          width: 480px;
          height: 480px;
          background: conic-gradient(
            from 10deg,
            var(--ring-outer) 0deg 140deg,
            transparent 140deg 175deg,
            var(--ring-outer) 175deg 335deg,
            transparent 335deg 360deg
          );
          -webkit-mask: radial-gradient(
            farthest-side,
            transparent calc(50% - 70px),
            #000 calc(50% - 70px)
          );
          mask: radial-gradient(
            farthest-side,
            transparent calc(50% - 70px),
            #000 calc(50% - 70px)
          );
        }

        /* Spinning wheel animations with delays (Scene timing) */
        @keyframes spin-cw {
          to { transform: rotate(360deg); }
        }
        @keyframes spin-ccw {
          to { transform: rotate(-360deg); }
        }
        .ring-rotate-cw {
          animation: spin-cw 28s linear infinite;
        }
        .ring-rotate-ccw {
          animation: spin-ccw 34s linear infinite;
        }
        .delayed-middle { animation-delay: var(--delay-middle); }
        .delayed-outer  { animation-delay: var(--delay-outer); }

        /* Central disc breathing (hover + subtle scale) */
        @keyframes breathe {
          0%, 100% { transform: scale(1); }
          50%      { transform: scale(1.05); }
        }
        .animate-breathe-delayed {
          animation: breathe 4s ease-in-out infinite;
          animation-delay: var(--delay-start);
        }
        .glow-soft {
          background: radial-gradient(
            circle at 40% 40%,
            rgba(0, 255, 242, 0.35),
            rgba(0, 153, 255, 0.1) 40%,
            transparent 70%
          );
          filter: blur(6px);
        }

        /* OUTER RING LOGOS (attached to the outer ring) */
        .outer-logos {
          position: absolute;
          top: 50%;
          left: 50%;
          width: 480px;  /* must match .ring-outer size */
          height: 480px; /* must match .ring-outer size */
          transform: translate(-50%, -50%);
          pointer-events: none;
          z-index: 15;
        }
        .outer-logos .logo-slot {
          position: absolute;
          top: 50%;
          left: 50%;
          transform-origin: center;
        }
        .logo-img {
          width: 80px;
          height: 80px;
          border-radius: 9999px;
          background: transparent;
          box-shadow: 0 0 0 4px rgba(255,255,255,0.1), 0 8px 24px rgba(0,0,0,0.4);
          pointer-events: auto;
        }

        /* Reduced motion fallback */
        @media (prefers-reduced-motion: reduce) {
          .ring-rotate-cw,
          .ring-rotate-ccw,
          .animate-breathe-delayed {
            animation: none !important;
          }
        }
      `}</style>
    </section>
  );
};

export default VorniqoAboutSection;