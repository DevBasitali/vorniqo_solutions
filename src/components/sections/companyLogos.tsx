import React from "react";

import LogoLoop from "@/components/ui/LogoLoop";
const logos = [
  { src: "/images/aboutlogo/zafar.webp", alt: "alzafar" },
  { src: "/images/aboutlogo/hsq.webp", alt: "hsq" },
  { src: "/images/aboutlogo/address.webp", alt: "alzafar" },
  { src: "/images/aboutlogo/nouman.webp", alt: "hsq" },
];

export default function companyLogos() {
  return (
    <div className=" overflow-hidden h-[113px] mt-[30px] mx-auto lg:mx-22 xl:mx-36">
      <LogoLoop
        logos={logos}
        speed={40}
        direction="right"
        logoHeight={80}
        gap={40}
        hoverSpeed={0}
        scaleOnHover
        className="pb-6 mb-0 m-0 "
        pauseOnHover={true}
      />
    </div>
  );
}
