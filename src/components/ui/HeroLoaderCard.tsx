import React from "react";
import { SignalMedium } from "lucide-react";
import { motion } from "framer-motion";

function HeroLoaderCard() {
  return (
    <div className="w-[140px] h-[45px] bg-[#0A1B45] rounded-full flex items-center gap-4 px-2 md:w-[180px] md:h-[50px] lg:w-[250px] lg:h-[60px] lg:px-5 relative overflow-hidden">
      {/* Icon */}
      <div className="w-8 h-6 lg:w-10 lg:h-8 rounded-full bg-white flex items-center justify-center">
        <div
          className="w-4 h-4 lg:w-6 lg:h-6 bg-[#10255B] relative"
          style={{
            clipPath:
              "polygon(50% 0%, 90% 20%, 100% 60%, 75% 100%, 25% 100%, 0% 60%, 10% 20%)",
          }}
        >
          <SignalMedium
            className="absolute w-3 h-3 top-0 left-1 lg:w-6 lg:h-6 lg:-top-1 lg:left-1"
            // size={15}
            color="white"
          />
        </div>
      </div>
      {/* LINES */}
      <div className="flex flex-col gap-2 h-5 lg:h-8 w-full">
        {/* TOP LINE */}
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "55%" }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
          className="relative h-3 bg-[#01FFFF] rounded-full overflow-hidden"
        ></motion.div>
        {/* BOTTOM LINE */}
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "80%" }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
          className="relative h-3 bg-white rounded-full overflow-hidden"
        ></motion.div>
      </div>
    </div>
  );
}

export default HeroLoaderCard;
