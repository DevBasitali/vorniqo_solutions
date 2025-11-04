import React from "react";
import Image from "next/image";

interface ArtShowcaseCardProps {
  image: string;
  title?: string;
}

export default function ArtShowcaseCard({
  image,
  title,
}: ArtShowcaseCardProps) {
  return (
    <div
      className="relative 
                 w-[100%] sm:w-[300px] md:w-[280px] lg:w-[250px] 
                 overflow-hidden rounded-[4px] md:rounded-[8px] lg:rounded-[8px]
                 bg-white text-gray-900" >
      <Image
        src={image}
        alt={title || "Showcase Image"}
        width={100}
        height={100}
        className="object-cover w-[600px] h-20 md:w-40 md:h-50 lg:w-50 lg:h-50"
        loading="lazy"
      />
    </div>
  );
}
