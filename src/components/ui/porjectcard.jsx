"use client";

import Image from "next/image";
import Link from "next/link";

export default function ProjectCard({
  image,
  title,
  subtitle,
  bgColor = "#00A3FF",
  link = "#",
  external = false,
}) {
  const isExternal =
    external ||
    link.startsWith("http://") ||
    link.startsWith("https://") ||
    link.startsWith("www.");

  const formattedLink = link.startsWith("www.") ? `https://${link}` : link;

  return (
    <Link
      href={formattedLink}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      className="w-full px-9 sm:px-5 h-80 sm:h-96 md:h-[300px] lg:h-[400px] xl:h-[500px] max-w-sm sm:max-w-2xl md:max-w-md lg:max-w-lg xl:max-w-none block group"
    >
      <div className="bg-[#0E2151] rounded-[2rem] lg:rounded-[4rem] overflow-visible shadow-xl hover:shadow-2xl transition-all duration-300 h-full flex flex-col hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-[#01feff] focus:ring-offset-2 focus:ring-offset-[#081840] cursor-pointer relative">
        {/* Robot Head - LARGER SIZE - Animates from bottom to top on hover */}
        <div className="absolute hidden md:block -top-10 sm:-top-12 md:-top-17.5 lg:-top-20 left-10 sm:left-4 md:left-10 -z-40 w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 opacity-0 group-hover:opacity-100 transform translate-y-16 group-hover:translate-y-0 transition-all duration-200 ease-out ">
          <Image
            src="/images/our_projectImages/robo_head.webp"
            alt="Robot"
            width={112}
            height={112}
            className="w-full h-full object-contain"
          />
        </div>

        {/* Hover Arrow Indicator */}
        <div className="absolute top-3 right-3 sm:top-4 sm:right-4 z-30 w-9 h-9 sm:w-10 sm:h-10 md:w-11 md:h-11 lg:w-12 lg:h-12 bg-[#081840] rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0 scale-90 group-hover:scale-100 shadow-lg">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2.5}
            stroke="currentColor"
            className="w-4 h-4 sm:w-5 sm:h-5 md:w-5 md:h-5 lg:w-6 lg:h-6 text-white -rotate-45"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
            />
          </svg>
        </div>

        {/* Image Container */}
        <div
          className="relative flex items-end justify-center flex-grow overflow-hidden rounded-[2rem] lg:rounded-[4rem]"
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
              style={{ objectPosition: "bottom" }}
            />
          </div>
        </div>

        {/* Text Content */}
        <div className="text-center px-4 sm:px-5 md:px-5 lg:px-6 py-4 sm:py-5 md:py-5 lg:py-6 ">
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
