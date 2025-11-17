import React from "react";
import VerticalSocialBar from "@/components/ui/VerticalSocialBar";
function page() {
  return (
    <>
      <div className="grid grid-cols-4  items-center">
        {/* <div className="flex justify-start bg-red-500 w-1/3"> */}
        <VerticalSocialBar />
        {/* </div> */}
        <div className="">
          <div className="bg-red-100">
            <h1>VORNIQO</h1>
            <h1>SERVICES</h1>
            <p className="w-1/2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
              earum saepe ipsa beatae at. Commodi quia possimus est voluptate
              nobis.
            </p>
          </div>
        </div>
        <div>
          <div className="w-32 relative h-32  bg-blue-600 rounded-full">
            <div className="w-16 h-16 absolute top-8 left-8 rounded-full bg-red-600"></div>
          </div>
        </div>
      </div>

      {/* <h1>hello world</h1> */}
    </>
  );
}

export default page;
