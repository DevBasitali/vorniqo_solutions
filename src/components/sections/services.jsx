"use client";
import React from "react";
import Image from "next/image";
import { useState, useEffect, useMemo } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import ServiceCard from "../ui/serviceCard";

export const servicesData = [
  {
    id: 1,
    icon: "/icons/branding.svg",
    title: "Branding and Identity",
    subtitle: "Crafting your unique brand essence.",
  },
  {
    id: 2,
    icon: "/icons/marketing.svg",
    title: "Digital Marketing",
    subtitle: "Crafting your unique brand essence.",
  },
  {
    id: 3,
    icon: "/icons/development.svg",
    title: "Web Development",
    subtitle: "Crafting your unique brand essence.",
  },
  {
    id: 4,
    icon: "/icons/development.svg",
    title: "Web Development",
    subtitle: "Crafting your unique brand essence.",
  },
  {
    id: 5,
    icon: "/icons/development.svg",
    title: "Web Development",
    subtitle: "Crafting your unique brand essence.",
  },
  {
    id: 6,
    icon: "/icons/development.svg",
    title: "Web Development",
    subtitle: "Crafting your unique brand essence.",
  },
  {
    id: 8,
    icon: "/icons/development.svg",
    title: "Web Development",
    subtitle: "Crafting your unique brand essence.",
  },
  {
    id: 7,
    icon: "/icons/development.svg",
    title: "Web Development",
    subtitle: "Crafting your unique brand essence.",
  },
];

const useWindowWidth = () => {
  const [width, setWidth] = useState(0);
  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return width;
};

export default function services() {
  const windowWidth = useWindowWidth();
  const [currentIndex, setCurrentIndex] = useState(0);

  // LOGIC: Determine how many cards to show based on screen width
  const cardsToShow = useMemo(() => {
    if (windowWidth >= 1536) return 4; // 2xl
    if (windowWidth >= 1024) return 3; // lg
    if (windowWidth >= 768) return 3; // md
    return 1;
  }, [windowWidth]);

  // Calculate limits
  const maxIndex = servicesData.length - cardsToShow;
  const isPrevDisabled = currentIndex === 0;
  const isNextDisabled = currentIndex >= maxIndex;

  // Handlers
  const handleNext = () => {
    setCurrentIndex((prevIndex) => Math.min(prevIndex + 2, maxIndex));
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => Math.max(prevIndex - 2, 0));
  };

  // Reset index when screen size changes to prevent blank space
  useEffect(() => {
    setCurrentIndex((prevIndex) => Math.min(prevIndex, maxIndex));
  }, [cardsToShow, maxIndex]);

  // Dynamic CSS for sliding effect
  const transformStyle = {
    transform: `translateX(-${currentIndex * (100 / cardsToShow)}%)`,
  };

  return (
    <section className="grid grid-cols-1">
      <div className="relative flex flex-col pt-7">
        <div className="mb-12 ">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end px-4 md:px-15 lg:px-23">
            {/* Title Group */}
            <div className="text-center md:text-left w-full md:w-auto">
              <span className="inline-block tracking-[2px] mb-2 text-color-text-dark font-body font-semibold">
                Services ///////////////////////////////////////
              </span>
              <h1 className="text-7xl md:text-8xl text-white font-heading uppercase">
                Our Services
              </h1>
            </div>

            {/* CAROUSEL BUTTONS */}
            <div className="flex space-x-4 mt-4 md:mt-0 mx-auto md:mx-0">
              <button
                onClick={handlePrev}
                disabled={isPrevDisabled}
                className={`p-3 rounded-full border border-white/20 transition-colors ${isPrevDisabled ? "text-white/30 cursor-not-allowed" : "text-white hover:bg-white/10"}`}
                aria-label="Previous card"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={handleNext}
                disabled={isNextDisabled}
                className={`p-3 rounded-full border border-white/20 transition-colors ${isNextDisabled ? "text-white/30 cursor-not-allowed" : "text-white hover:bg-white/10"}`}
                aria-label="Next card"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Placeholder for the flash image */}
          <div>
            <Image
              src="/images/services/flashes.webp"
              alt="flashes"
              width={80}
              height={80}
              className=" absolute hidden lg:block lg:top-10 lg:right-180 2xl:top-10 2xl:right-295 w-[80px] object-contain"
            />
          </div>
        </div>

        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out py-10 px-4 md:px-15 lg:px-23 border"
            style={{
              // Dynamically set the width of the entire track container
              width: `${(100 / cardsToShow) * servicesData.length}%`,
              ...transformStyle,
            }}
          >
            {servicesData.map((service) => (
              <div
                key={service.id}
                className="p-4 flex-shrink-0"
                style={{
                  // Set the width of the individual card wrapper
                  width: `${100 / servicesData.length}%`,
                }}
              >
                <ServiceCard
                  icon={service.icon}
                  title={service.title}
                  subtitle={service.subtitle}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
