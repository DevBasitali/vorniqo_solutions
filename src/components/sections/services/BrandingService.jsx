import React from "react";
import Image from "next/image";
import BrandingLogo from "../../../../public/images/servicespagelogos/branding.webp";
import ClipPathCard from "@/components/ui/ClipPathCard";

export default function ServiceSection() {
  const cards = [
    {
      id: 1,
      title: "Creative Graphics",
      gifSrc: "/images/animationfiles/creativegraphics.png",
    },
    {
      id: 2,
      title: "Brand Identity",
      gifSrc: "/images/animationfiles/Brandidentity.png",
    },
    {
      id: 3,
      title: "Design Excellence",
      gifSrc: "/images/animationfiles/designExcellence.png",
    },
  ];

  return (
    <section className="w-full border-b border-white/30 py-8 sm:py-10 md:py-12 lg:py-14">
      <div className="w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
        <div className="w-full ">
          <div className="flex flex-col lg:flex-row lg:items-start ml-8 sm:ml-6 xl:ml-4 2xl:ml-16 gap-x-8 mb-8 sm:mb-10 md:mb-12">
            <div className="flex-shrink-0 mx-0">
              <div
                className="
                  relative flex items-center justify-center
                  w-16 h-16           
                  sm:w-20 sm:h-20     
                  md:w-24 md:h-24     
                  lg:w-24 lg:h-24     
                  xl:w-24 xl:h-24     
                  2xl:w-24 2xl:h-24 
              "
              >
                <Image
                  src={BrandingLogo}
                  alt="Branding Logo"
                  className="object-contain"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  loading="lazy"
                />
              </div>
            </div>

            <div className="flex flex-col gap-2 text-left flex-1">
              <h2 className="font-heading uppercase text-color-text-light">
                Branding and Graphics Design
              </h2>
              <p className="text-color-text-light font-body">
                We craft distinctive visual identities and impactful designs
                that elevate your brand's presence across all platforms.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cards.map((card) => (
              <div key={card.id} className="w-full flex justify-center">
                <div className="w-full max-w-sm xl:max-w-md 2xl:max-w-md">
                  <ClipPathCard title={card.title} gifSrc={card.gifSrc} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
