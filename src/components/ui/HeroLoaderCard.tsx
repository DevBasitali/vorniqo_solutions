import React from "react";
import { SignalMedium } from "lucide-react";
import { motion } from "framer-motion";

function HeroLoaderCard() {
  return (
    <div className="w-[240px] h-[70px] lg:w-[300px] lg:h-[80px] bg-[#0A1B45] rounded-full flex items-center gap-4 px-5 relative overflow-hidden">
      {/* Icon */}
      <div className="w-12 h-10 rounded-full bg-white flex items-center justify-center">
        <div
          className="w-6 h-6 bg-[#10255B] relative"
          style={{
            clipPath:
              "polygon(50% 0%, 90% 20%, 100% 60%, 75% 100%, 25% 100%, 0% 60%, 10% 20%)",
          }}
        >
          <SignalMedium
            className="absolute -top-1 left-1"
            size={25}
            color="white"
          />
        </div>
      </div>

      {/* LINES */}
      <div className="flex flex-col gap-2 w-full">
        {/* TOP LINE */}
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "70%" }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          className="relative h-3 bg-[#01FFFF]/50 rounded-full overflow-hidden"
        >
          {/* Infinite Light Sweep */}
          <motion.div
            className="absolute top-0 left-0 h-full w-1/3 bg-white/30"
            animate={{ x: ["-100%", "150%"] }}
            transition={{
              duration: 1.4,
              repeat: Infinity,
              repeatType: "loop",
              ease: "linear",
            }}
          />
        </motion.div>

        {/* BOTTOM LINE */}
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "55%" }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
          className="relative h-3 bg-white/50 rounded-full overflow-hidden"
        >
          {/* Infinite Light Sweep */}
          <motion.div
            className="absolute top-0 left-0 h-full w-1/3 bg-white/40"
            animate={{ x: ["-100%", "150%"] }}
            transition={{
              duration: 1.4,
              repeat: Infinity,
              repeatType: "loop",
              ease: "linear",
              delay: 0.2, // slight offset
            }}
          />
        </motion.div>
      </div>
    </div>
  );
}

export default HeroLoaderCard;
