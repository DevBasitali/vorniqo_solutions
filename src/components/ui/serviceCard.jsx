import React from "react";
// import Image from "next/image";
import PrimaryButton from "./primaryBtn";

import Link from "next/link";
const ServiceCard = ({ href, title, subtitle }) => {
  return (
    <div
      className="relative flex flex-col 
border border-white/10 bg-[#081860]/20
rounded-2xl p-6 hover:border-l-[#01feff]/60 hover:border-r-[#01feff]/60 hover:border-t-[#01feff]/60
w-full h-60 duration-300"
    >
      <div className="flex flex-col gap-y-4 h-full">
        <div className="flex flex-col gap-y-2 flex-grow overflow-y-auto">
          <h3 className="text-white">{title}</h3>
          <p className="text-slate-300">{subtitle}</p>
        </div>
        <div className="mt-4">
          <Link href={href}>
            <PrimaryButton />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
