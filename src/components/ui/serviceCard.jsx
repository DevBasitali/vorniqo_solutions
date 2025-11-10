import React from "react";
import Image from "next/image";
import PrimaryButton from "./primaryBtn";

const ServiceCard = ({ icon, title, subtitle }) => {
  return (
    <div
      className="relative flex flex-col justify-between 
                  border border-white/10 bg-[#081860]/20
                 rounded-2xl p-6 w-60 h-60 sm:w-80 sm:h-80    
                 hover:scale-[1.02] transition-transform duration-300 "
    >
      <div className="flex flex-col gap-y-2 sm:gap-y-6 mx-2 mt-5">
        <h3 className="text-white">{title}</h3>
        <p className="text-slate-300">{subtitle}</p>
      </div>
      <div className="ml-5">
        <PrimaryButton />
      </div>
    </div>
  );
};

export default ServiceCard;

{
  /* <div className="flex items-center justify-start mb-4 border">
        
          <Image
          src="/images/services/card_icons.webp"
          alt="Service Logo Here"
          width={10}
          height={10}
          className="w-20 h-20"
          />
      </div> */
}
