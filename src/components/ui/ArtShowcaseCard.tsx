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
      className="relative" >
      <Image
        src={image}
        alt={title || "Showcase Image"}
        width={100}
        height={100}
        className="object-center object-cover w-full xs:w-[350px] rounded-xl"
        loading="lazy"
      />
    </div>
  );
}

// w-[500px] h-20 md:w-90 md:h-50 lg:w-50 lg:h-50

