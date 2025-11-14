"use client";

import Image from "next/image";

export default function ProjectCard({ image, title, subtitle }) {
  return (
    <div className="w-full h-80 sm:h-52 md:h-56 lg:h-60 max-w-xs sm:max-w-sm lg:max-w-none">
      <div className="bg-[#0E2151] rounded-b-4xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300 h-full flex flex-col ">
        {/* Image Container - Takes up remaining space */}
        <div className="bg-[#] p-3 sm:p-4 lg:p-6 flex items-center justify-center flex-grow rounded-[2rem]">
          <div className="relative w-full h-full">
            <Image
              src={image}
              alt={title}
              fill
              sizes="(max-width: 640px) 280px, (max-width: 1024px) 320px, 470px"
              className="object object-center object-fill"
              loading="lazy"
            />
          </div>
        </div>

        {/* Text Content - Fixed at bottom */}
        <div className="text-center px-3 sm:px-4 lg:px-5 py-3 sm:py-4 lg:py-5 bg-[#0E2151] rounded-b-4xl">
          <h3 className="text-white text-sm sm:text-base md:text-lg lg:text-xl mb-10 leading-tight uppercase tracking-tight font-heading line-clamp-1">
            {title}
          </h3>
          <p
            className="text-white text-[10px] sm:text-xs md:text-sm leading-tight uppercase tracking-wide font-body line-clamp-1"
            style={{ fontWeight: 400 }}
          >
            {subtitle}
          </p>
        </div>
      </div>
    </div>
  );
}
