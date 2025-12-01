import React from "react";
import Image from "next/image";
import Link from "next/link";
import PrimaryBtn from "../ui/primaryBtn";
import ServiceCard from "../ui/serviceCard";

export const servicesData = [
  {
    id: 1,
    href: "/services",
    title: "Branding and Identity",
    subtitle: "Crafting your unique brand essence.",
  },
  {
    id: 2,
    href: "/services",
    title: "Digital Marketing",
    subtitle: "Crafting your unique brand essence.",
  },
  {
    id: 3,
    href: "/services",
    title: "Web Development",
    subtitle: "Crafting your unique brand essence.",
  },
];
export default function services() {
  const MAX_CARDS = 3;
  return (
    <section className="grid grid-cols-1">
      <div className="relative flex flex-col py-7">
        {/* Header Section */}
        <div className="mb-12">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end px-4 md:px-15 lg:px-23">
            {/* Title Group */}
            <div className="relative text-center md:text-left w-full md:w-auto">
              <span className="inline-block tracking-[2px] mb-2 text-color-text-dark font-body font-semibold">
                SERVICES ////////////////////////////////
              </span>
              <h1 className="text-7xl md:text-8xl text-white font-heading uppercase">
                Our Services
              </h1>
              <Image
                src="/images/services/flashes.webp"
                alt="flashes"
                width={80}
                height={80}
                className="absolute hidden lg:block -top-[16px] -right-24 xl:-right-22 2xl:-right-22 w-17 lg:w-20 xl:w-20 2xl:w-24 object-contain"
              />
            </div>

            {/* View All Button */}
            <div className="mt-6 md:mt-0 md:mb-2 w-full md:w-auto flex justify-center md:justify-end">
              <Link href="/services">
                <PrimaryBtn>View All</PrimaryBtn>
              </Link>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="grid grid-cols-1 gap-6 px-4 max-w-8xl sm:mx-20 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-3 justify-items-center z-10">
            {servicesData.slice(0, MAX_CARDS).map((service, index) => (
              <ServiceCard
                key={service.id}
                href={service.href}
                title={service.title}
                showRobot={index === 0 || index === 2}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
