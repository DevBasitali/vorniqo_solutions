import React from "react";
import { SignalMedium } from "lucide-react";
function HeroLoaderCard() {
  return (
    <>
      <div className=" w-[240px] h-[70px] lg:w-[300px] lg:h-[80px] bg-[#0A1B45] rounded-full flex items-center gap-4 px-5 relative overflow-hidden">
        {/* Left Icon Circle */}
        <div className="w-12 h-10 rounded-full bg-white flex items-center justify-center">
          {/* <div className="  bg-white rounded-full"> */}
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
        {/* </div> */}

        {/* Text Lines */}
        <div className="flex flex-col gap-2 w-full">
          {/* Cyan Top Bar */}
          <div className="h-3 w-[70%] lg:w-[70%] rounded-full bg-[#01FFFF]/50 relative overflow-hidden shimmer"></div>

          {/* White Bottom Bar */}
          <div className="h-3 w-[55%] lg:w-[60%] rounded-full bg-white/50 relative overflow-hidden shimmer"></div>
        </div>

        {/* Shimmer Effect */}
        <style jsx>{`
          .shimmer::after {
            content: "";
            position: absolute;
            top: 0;
            left: -100%;
            width: 100%;
            height: 100%;
            background: linear-gradient(
              90deg,
              transparent,
              rgba(255, 255, 255, 0.4),
              transparent
            );
            animation: shimmer 1.5s infinite;
          }

          @keyframes shimmer {
            0% {
              left: -100%;
            }
            100% {
              left: 100%;
            }
          }
        `}</style>
      </div>
    </>
  );
}

export default HeroLoaderCard;
