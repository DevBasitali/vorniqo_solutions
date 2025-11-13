import React from "react";
import Image from "next/image";
import single_flash from "../../../public/images/services/single_flash.png";
function OurTeamCard() {
  return (
    <>
      <div className="relative bg-r h-72 w-72">
        <div
          className="w-64 h-64 m-auto p-10 bg-gradient-to-br from-cyan-400 to-blue-600 shadow-lg"
          style={{
            clipPath:
              "polygon(50% 0%, 90% 20%, 100% 60%, 75% 100%, 25% 100%, 0% 60%, 10% 20%)",
          }}
        >
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium,
            neque?
          </p>
        </div>
        {/* Flash icon */}
        <div className="absolute top-2 right-16">
          <Image src={single_flash} alt="single-flash" width={50} height={50} />
        </div>
        {/* descreption */}
        <div className="flex flex-col justify-center items-center">
          <h6>M.TALHA</h6>
          <p>CEO FOUNDER OF</p>
          <p>VORNIQO SOLUTIONS</p>
        </div>
      </div>
    </>
  );
}

export default OurTeamCard;
