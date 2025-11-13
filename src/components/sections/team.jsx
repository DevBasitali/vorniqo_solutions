import React from "react";
import OurTeamCard from "@/components/ui/OurTeamCard";
function Team() {
  return (
    <>
      <div className="h-full">
        <div className="border-t-[1px] w-full border-t-white ">
          {/* heading */}
          <div className="border-l-[1px] flex justify-center items-center border-r-[1px] border-r-white h-24 border-l-white w-1/2 m-auto ">
            <h1 className="text-center">MEET OUR TEAM</h1>
          </div>
          <div className="border-t-[1px] border-t-white">
            <div className="w-[90%] m-auto p-16  border-r-[1px] border-r-white h-[100vh] border-l-[1px] border-l-white">
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi,
                numquam.
              </p>
              <div className="my-10">
                <OurTeamCard></OurTeamCard>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Team;
