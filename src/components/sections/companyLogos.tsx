import React from "react";
import { BrandMarquee } from "../ui/BrandMarquee";

// const logos = [
//   { src: "/images/clients/alzafar.webp", alt: "alzafar" },
//   { src: "/images/clients/hsq.webp", alt: "hsq" },
//   { src: "/images/clients/alzafar.webp", alt: "alzafar" },
//   { src: "/images/clients/hsq.webp", alt: "hsq" },
//   { src: "/images/clients/alzafar.webp", alt: "alzafar" },
// ];

// function companyLogos() {
//   return (
//     <main>
//       <BrandMarquee
//         logos={logos}
//         speed={24}
//         direction="ltr"
//         className="bg-transparent"
//       />
//       <div className="w-full h-px bg-gray-100/30"></div>
//     </main>
//   );
// }

// export default companyLogos;

import LogoLoop from "@/components/LogoLoop";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
} from "react-icons/si";

const techLogos = [
  { node: <SiReact />, title: "React", href: "https://react.dev" },
  { node: <SiNextdotjs />, title: "Next.js", href: "https://nextjs.org" },
  {
    node: <SiTypescript />,
    title: "TypeScript",
    href: "https://www.typescriptlang.org",
  },
  {
    node: <SiTailwindcss />,
    title: "Tailwind CSS",
    href: "https://tailwindcss.com",
  },
];
const logos = [
  { src: "/images/clients/alzafar.webp", alt: "alzafar" },
  { src: "/images/clients/hsq.webp", alt: "hsq" },
  { src: "/images/clients/alzafar.webp", alt: "alzafar" },
  { src: "/images/clients/hsq.webp", alt: "hsq" },
  { src: "/images/clients/alzafar.webp", alt: "alzafar" },
];

// Alternative with image sources
const imageLogos = [
  {
    src: "/logos/company1.png",
    alt: "Company 1",
    href: "https://company1.com",
  },
  {
    src: "/logos/company2.png",
    alt: "Company 2",
    href: "https://company2.com",
  },
  {
    src: "/logos/company3.png",
    alt: "Company 3",
    href: "https://company3.com",
  },
];

export default function companyLogos() {
  return (
    <div
      style={{
        height: "113px",
        marginTop: "30px",
        position: "relative",
        overflow: "hidden",
        // border: 2px solid
      }}
    >
      {/* Basic horizontal loop */}
      <LogoLoop
        logos={logos}
        speed={40}
        direction="right"
        logoHeight={80}
        gap={40}
        hoverSpeed={0}
        scaleOnHover
        className="pb-6 mb-0 m-0 "
        // fadeOut
        // fadeOutColor="#ffffff"
        // ariaLabel="Technology partners"
      />
      {/* Vertical loop with deceleration on hover */}
      {/* <LogoLoop
        logos={techLogos}
        speed={80}
        direction="up"
        logoHeight={48}
        gap={40}
        hoverSpeed={20}
        fadeOut
      /> */}
      <div className="w-full h-px bg-gray-100/30" />{" "}
    </div>
  );
}
