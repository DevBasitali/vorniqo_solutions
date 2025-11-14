import React from "react";
import Image from "next/image";
import single_flash from "../../../public/images/services/single_flash.png";
import talha from "../../../public/images/team/talha.png";
// import daniyal from "../../../public/images/team/daniyal.png";
// import hera from "../../../public/images/team/hera.png";
// import shafay from "../../../public/images/team/shafay.png";
// import ahmad from "../../../public/images/team/ahmad.png";
// import fawad from "../../../public/images/team/fawad.png";
function OurTeamCard() {
  return (
    <>
      <div className="flex flex-col justify-center w-fit">
        <Image src={talha} className="" alt="ceo" />
        {/* descreption */}
        <div className="flex justify-center flex-col items-center">
          <h3>M.TALHA</h3>
          <p className="!text-sm">CEO FOUNDER OF</p>
          <p className="!text-sm">VORNIQO SOLUTIONS</p>
        </div>
      </div>
    </>
  );
}

export default OurTeamCard;
