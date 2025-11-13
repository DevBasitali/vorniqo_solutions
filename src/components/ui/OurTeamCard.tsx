import React from "react";
import Image from "next/image";
import single_flash from "../../../public/images/services/single_flash.png";
function OurTeamCard() {
  return (
    <>
      <div className="relative bg-red-500 h-72 w-72">
        <div
          className="w-64 h-64 p-10 bg-gradient-to-br from-cyan-400 to-blue-600 shadow-lg"
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
        <div className="absolute top-10 -right-10">
          <Image src={single_flash} alt="single-flash" />

          {/* </Image> */}
        </div>
      </div>
    </>
  );
}

export default OurTeamCard;
