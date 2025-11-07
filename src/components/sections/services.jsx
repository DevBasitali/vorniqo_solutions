import React from "react";
import Image from "next/image";
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
    subtitle: "Helping your business reach and engage audiences online.",
  },
  {
    id: 3,
    icon: "/icons/development.svg",
    title: "Web Development",
    subtitle: "Building modern and scalable digital experiences.",
  },
];

export default function services() {
  return (
    <section className="grid grid-cols-1">
      <div className="relative flex flex-col pt-7 border-r border-white/30">
        <div className="px-4 md:px-15 lg:px-23 max-w-prose text-center">
          <span className="flex items-start sm:text-center mt-4 pl-10 sm:pl-0 text-pretty tracking-[2px] my-1">
            Services ///////////////////////////////////////
          </span>
          <h1 className="flex items-start justify-center sm:justify-center md:justify-start">
            our services
          </h1>
          <div>
            <Image
              src="/images/services/flashes.webp"
              alt="flashes"
              width={80}
              height={80}
              className=" absolute hidden sm:hidden md:hidden lg:block 2xl:block lg:top-10 lg:right-180 2xl:top-10 2xl:right-330 w-[80px] object-contain"
            />
          </div>
        </div>
        <div className="grid grid-cols-3 px-40 py-10 gap-20">
          {servicesData.map((service) => (
            <ServiceCard
              key={service.id}
              icon={service.icon}
              title={service.title}
              subtitle={service.subtitle}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
