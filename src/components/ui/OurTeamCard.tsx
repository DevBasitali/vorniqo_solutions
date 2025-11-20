import React from "react";
import Image from "next/image";

interface OurTeamCardProps {
  image: string;
  name: string;
  designation: string;
  grade?: string; // optional
}

function OurTeamCard({ image, name, designation, grade }: OurTeamCardProps) {
  return (
    <div className="flex flex-col justify-center items-center ">
      <Image src={image} width={200} height={200} alt={name} />

      {/* Details */}
      <div className="flex flex-col justify-center items-center">
        <h1 className=" !text-sm lg:!text-lg ">{name}</h1>
        <p className="!text-xs lg:!text-sm">{designation}</p>

        {/* Optional Grade */}
        {grade && <p className="!text-xs lg:!text-sm">{grade}</p>}
      </div>
    </div>
  );
}

export default OurTeamCard;
