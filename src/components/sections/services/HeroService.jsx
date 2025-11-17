import React from "react";
import PrimaryBtn from "@/components/ui/primaryBtn";
import VerticalSocialBar from "@/components/ui/VerticalSocialBar";
export default function HeroSection() {
  return (
    <>
      <div className="flex justify-between">
        <div className="w-[10%]  bg-red-600">
          <VerticalSocialBar />
        </div>
        <div className=" w-1/2 bg-green-400">
          <div className="">
            <h1>VORNIQO</h1>
            <h1>SERVICES</h1>
            <p className="w-1/2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
              earum saepe ipsa beatae at. Commodi quia possimus est voluptate
              nobis.
            </p>
          </div>
          <PrimaryBtn />
        </div>
        <div className="flex flex-grow">
          <div className="w-32 relative h-32  bg-blue-600 rounded-full">
            <div className="w-16 h-16 absolute top-8 left-8 rounded-full bg-red-600"></div>
          </div>
        </div>
      </div>

      {/* <h1>hello world</h1> */}
    </>
  );
}
