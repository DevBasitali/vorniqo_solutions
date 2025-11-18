"use client";

import React from "react";

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
        onKeyDown={(e) => e.key === 'Enter' && onClick?.()}
      >
        <div className="relative z-10 flex flex-col items-center h-full text-center p-2">
          <h3 className="w-full flex-shrink-0 !font-body !font-bold text-white !text-sm sm:!text-lg line-clamp-2 pt-2 pb-1">
            {title}
          </h3>

          {gifSrc && (
            <div className="relative w-full flex-1 px-px py-5 min-h-0">
              <img
                src={gifSrc}
                alt={`${title} animation`}
                className="w-full h-full object-contain"
                loading="lazy"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
