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
    subtitle: "Crafting your unique brand essence.",
  },
  {
    id: 3,
    icon: "/icons/development.svg",
    title: "Web Development",
    subtitle: "Crafting your unique brand essence.",
  },
];

export default function services() {
  return (
    <section className="grid grid-cols-1">
      <div className="relative flex flex-col py-7">
        {/* Header Section */}
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
          </div>

          <div>
            <Image
              src="/images/services/flashes.webp"
              alt="flashes"
              width={80}
              height={80}
              className=" absolute hidden lg:block lg:top-10 xl:hidden 2xl:hidden lg:right-180 2xl:top-10 2xl:right-295 w-[80px] object-contain"
            />
          </div>
        </div>
        <div className="relative">
          <div className="grid grid-cols-1 gap-6 px-4 max-w-8xl sm:mx-20 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-3 justify-items-center z-10">
            {servicesData.map((service) => (
              <ServiceCard
                key={service.id}
                icon={service.icon}
                title={service.title}
                subtitle={service.subtitle}
              />
            ))}
          </div>
          <div>
            <Image
              src="/images/services/card_robot.webp"
              alt="card_robo"
              width={230}
              height={230}
              className="absolute hidden xl:block xl:-top-5 xl:-right-18"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
