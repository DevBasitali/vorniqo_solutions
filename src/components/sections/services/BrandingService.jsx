import React from "react";
import { Palette } from "lucide-react"; 
import ClipPathCard from "@/components/ui/ClipPathCard";

export default function ServiceSection() {
  const cards = [
  {
    id: 1,
    title: "Creative Graphics",
    gifSrc: "/images/Animationfiles/CreativeGraphics.gif",
  },
  {
    id: 2,
    title: "Brand Identity",
    gifSrc: "/images/Animationfiles/CreativeGraphics.gif",
  },
  {
    id: 3,
    title: "Design Excellence",
    gifSrc: "/images/Animationfiles/designExcelence.gif",
  },
];

  return (
    <section className="w-full border-b border-white/30 py-8 sm:py-10 md:py-12 lg:py-14">
      <div className="w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
        <div className="w-full "> 
          <div className="flex flex-col sm:flex-row sm:items-start sm:ml-18 gap-4 mb-8 sm:mb-10 md:mb-12">
            <div className="flex-shrink-0 mx-auto sm:mx-0">
              <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 flex items-center justify-center">
                <Palette
                  className="w-full h-full text-color-text-dark"
                  strokeWidth={1.5}
                />
              </div>
            </div>
            <div className="flex flex-col gap-2 text-center sm:text-left flex-1">
              <h2 className="font-heading  uppercase text-color-text-light">
                Branding and Graphics Design
              </h2>
              <p className="text-color-text-light font-body">
                We craft distinctive visual identities and impactful designs
                that elevate your brand's presence across all platforms.
              </p>
            </div>
          </div>

          <div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          > 
            {cards.map((card) => (
              <div 
                key={card.id} 
                className="w-full flex justify-center"
              >
                <div className="w-full max-w-sm xl:max-w-md 2xl:max-w-md"> 
                    <ClipPathCard
                      title={card.title}
                      gifSrc={card.gifSrc}
                    />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}