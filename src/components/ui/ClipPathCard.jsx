"use client";

import React from "react";
import Image from "next/image";
export default function ClipPathCard({ title, gifSrc, onClick }) {
  const customCutClipPath =
    "polygon(10% 0%, 100% 0%, 100% 90%, 90% 100%, 0% 100%, 0% 10%)";

  const shadowFilterStyle = {
    filter: "drop-shadow(0px 8px 15px rgba(0, 0, 0, 0.3))",
  };

  return (
    <div
      className="relative w-full aspect-[4/3] p-2 rounded-xl overflow-hidden"
      style={shadowFilterStyle}
    >
      <div
        className="w-full h-full bg-[#081840] relative transition-transform duration-300 hover:scale-105 cursor-pointer group border border-white/5"
        style={{ clipPath: customCutClipPath }}
        onClick={onClick}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => e.key === "Enter" && onClick?.()}
      >
        <div className="relative z-10 flex flex-col items-center h-full text-center p-2">
          <h3 className="w-full flex-shrink-0 !font-body !font-bold text-white !text-sm sm:!text-lg line-clamp-2 mt-4 pb-1">
            {title}
          </h3>

          {gifSrc && (
            <div className="relative w-full flex items-center justify-center px-2 py-2   overflow-hidden">
              <Image
                src={gifSrc}
                width={2000}
                height={2000}
                className="object-cover"
                alt={`${title} animation`}
                unoptimized
              ></Image>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
