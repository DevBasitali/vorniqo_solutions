"use client";

import { motion } from "framer-motion";

export default function HexBadge({ side, icon, delay = 0 }) {
  return (
    <motion.div
      initial={{ y: -6, rotate: -4 }}
      animate={{ y: [-6, 6, -6], rotate: [-4, 4, -4] }}
      transition={{ duration: 3.2, repeat: Infinity, delay, ease: "easeInOut" }}
      className={`absolute -top-4 sm:-top-6 ${
        side === "left" ? "-left-4 sm:-left-6" : "-right-4 sm:-right-6"
      } z-30 drop-shadow-[0_8px_24px_rgba(23,233,255,0.4)]`}
      role="presentation"
      aria-hidden="true"
    >
      <div
        className="flex items-center justify-center text-white w-12 h-12 sm:w-14 sm:h-14"
        style={{
          background: "linear-gradient(180deg,#17E9FF, #2166FF)",
          clipPath:
            "polygon(25% 6.7%, 75% 6.7%, 100% 50%, 75% 93.3%, 25% 93.3%, 0% 50%)",
          boxShadow:
            "0 8px 30px rgba(23,233,255,0.35), inset 0 0 12px rgba(255,255,255,0.15)",
        }}
      >
        <div className="w-5 h-5 sm:w-6 sm:h-6 flex items-center justify-center">
          {icon}
        </div>
      </div>
    </motion.div>
  );
}