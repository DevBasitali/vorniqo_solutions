import React from "react";
import OurTeamCard from "@/components/ui/OurTeamCard";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
function Team() {
  return (
    <>
      <div className="">
        <div className="border-t-[1px] w-full border-t-white/30 ">
          {/* heading */}
          <div className="border-l-[1px] flex justify-center items-center border-r-[1px] border-r-white/30 h-24 border-l-white/30 w-1/2 m-auto">
            <h1 className="text-center">MEET OUR TEAM</h1>
          </div>
          <div className="border-t-[1px] border-t-white/30">
            <div className="w-[90%] border-r-[1px] m-auto border-r-white/30 border-l-[1px] border-l-white/30">
              <div className="p-10 gap-10 flex">
                {/* <OurTeamCard></OurTeamCard>
                <OurTeamCard></OurTeamCard>
                <OurTeamCard></OurTeamCard>
                <OurTeamCard></OurTeamCard>
                <OurTeamCard></OurTeamCard>
                <OurTeamCard></OurTeamCard> */}
                <Carousel className="w-full flex justify-center">
                  <CarouselContent className="flex">
                    {Array.from({ length: 8 }).map((_, i) => (
                      <CarouselItem
                        key={i}
                        className="
          basis-1/2        /* xs & sm → 2 per view */
          lg:basis-1/4     /* lg → 4 per view */
          2xl:basis-1/5    /* 2xl → 5 per view */
          flex justify-center
        "
                      >
                        <OurTeamCard />
                      </CarouselItem>
                    ))}
                  </CarouselContent>

                  <CarouselPrevious />
                  <CarouselNext />
                </Carousel>

                {/* <button
                  className="w-12 h-12 bg-red-500"
                  style={{
                    clipPath:
                      "polygon(50% 0%, 90% 20%, 100% 60%, 75% 100%, 25% 100%, 0% 60%, 10% 20%)",
                  }}
                >
                  <ChevronLeftIcon size={25} />
                  <ChevronRightIcon size={25} />
                </button> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Team;
