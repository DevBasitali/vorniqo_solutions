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
                 w-full sm:w-[280px] md:w-[300px] lg:w-[280px]
                 overflow-hidden rounded-[4px] md:rounded-[8px] lg:rounded-[8px]
                 bg-white text-gray-900" >
      <Image
        src={image}
        alt={title || "Showcase Image"}
        width={100}
        height={100}
        className="object-center object-cover w-[500px] h-20 md:w-90 md:h-50 lg:w-50 lg:h-50"
        loading="lazy"
      />
    </div>
  );
}


