
"use client";

import Image from "next/image";
import Link from "next/link";

export default function ProjectCard({
  image,
  title,
  subtitle,
  bgColor = "#00A3FF",
  link = "#",
}) {
  return (
    <Link 
      href={link}
      className="w-full px-9 sm:px-5 h-80 sm:h-96 md:h-[300px] lg:h-[400px] xl:h-[500px] max-w-sm sm:max-w-2xl md:max-w-md lg:max-w-lg xl:max-w-none block"
    >
      <div className="bg-[#0E2151] rounded-[2rem] overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 h-full flex flex-col hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-[#01feff] focus:ring-offset-2 focus:ring-offset-[#081840] cursor-pointer">
        {/* Image Container with custom background color */}
        <div
          className="relative flex items-end justify-center flex-grow overflow-hidden rounded-4xl"
          style={{ backgroundColor: bgColor }}
        >
          <div className="relative w-full h-full">
            <Image
              src={image}
              alt={title}
              fill
              sizes="(max-width: 640px) 360px, (max-width: 768px) 420px, (max-width: 1024px) 400px, (max-width: 1280px) 380px, 420px"
              className="object-cover sm:object-contain md:object-cover object-bottom"
              loading="lazy"
              style={{ objectPosition: 'bottom' }}
            />
          </div>
        </div>

        {/* Text Content - Fixed dark background */}
        <div className="text-center px-4 sm:px-5 md:px-5 lg:px-6 py-4 sm:py-5 md:py-5 lg:py-6 bg-[#0E2151]">
          <h3 className="text-white text-base sm:text-lg md:text-lg lg:text-xl xl:text-2xl mb-1 sm:mb-2 leading-tight uppercase tracking-tight font-heading line-clamp-1">
            {title}
          </h3>
          <p
            className="text-white/80 leading-tight uppercase tracking-wide font-body line-clamp-1"
            style={{ fontWeight: 400 }}
          >
            {subtitle}
          </p>
        </div>
      </div>
    </Link>
  );
}