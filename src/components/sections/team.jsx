"use client";
import React, { useState } from "react";
import OurTeamCard from "@/components/ui/OurTeamCard";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Image from "next/image";

const Teamarray = [
  {
    image: "/images/team/hr.webp",
    name: "DANIYAL ZAFAR",
    des: "CO FOUNDER/",
    grade: "HR MANAGER",
  },
  {
    image: "/images/team/basit.webp",
    name: "BASIT ALI",
    des: "SENIOR MERNSTACK",
    grade: "DEVELOPER",
  },
  {
    image: "/images/team/fawad.webp",
    name: "M FAWAD KHAN",
    des: "JUNIOR MERNSTACK",
    grade: "DEVELOPER",
  },
  {
    image: "/images/team/huzaifa.webp",
    name: "HUZAIFA ABBASI",
    des: "FRONTEND DEVELOPER",
  },
  {
    image: "/images/team/ahmad.webp",
    name: "M AHMAD",
    des: "SENIOR",
    grade: "UI UX DESIGNER",
  },
  {
    image: "/images/team/shafay.webp",
    name: "SHAFAY SHAHEEN",
    des: "GRAPHICS DESIGNER,",
    grade: "UI UX DESIGNER",
  },
  {
    image: "/images/team/ubaid.webp",
    name: "M UBAID",
    des: "ANIMATOR EDITOR",
  },
  {
    image: "/images/team/saad.webp",
    name: "SAAD SOHAIL",
    des: "DIGITAL MARKETER",
  },
  {
    image: "/images/team/mamoona.webp",
    name: "MAMOONA KHAN",
    // des: "CUSTOMER SERVICE REPRESENTATIVE",
    des: "CSR",
  },
  {
    image: "/images/team/hera.webp",
    name: "HIRA NAZ",
    des: "CSR",
  },
];
function Team() {
  const [api, setApi] = useState(null);

  const handlePrev = () => {
    if (api) api.scrollPrev();
  };

  const handleNext = () => {
    if (api) api.scrollNext();
  };
  return (
    <>
      <div className="">
        <div className="!border-t-[1px] w-full !border-t-white/30 ">
          {/* heading */}
          <div className="border-l-[1px] flex justify-center items-center !border-r-[1px] !border-r-white/30 h-24 border-l-white/30 w-1/2 m-auto">
            <h1 className="text-center md:!text-3xl lg:!text-6xl">
              MEET OUR TEAM
            </h1>
          </div>
          <section className="w-full  border-t-[1px] border-white/30 px-2 xs:px-8 lg:px-10">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2  md:gap-20">
              {/* LEFT TEXT CONTENT */}
              <div className="h-full md:border-r-[1px] md:border-white/30">
                <div className="text-center md:text-left space-y-5 py-5 lg:py-20 ">
                  <h2 className="text-white !text-2xl sm:text-3xl md:!text-4xl font-extrabold">
                    M.TALHA
                  </h2>

                  <p className="text-[#7EA0FF] font-semibold tracking-wide">
                    CEO FOUNDER OF VORNIGO SOLUTIONS
                  </p>

                  <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                    Vornigo Solution is a full-service software house dedicated
                    to delivering excellence in digital innovation.
                  </p>

                  <p className="text-gray-300 leading-relaxed lg:w-[80%] text-sm sm:text-base">
                    We specialize in strategic marketing, high quality graphical
                    content, and reliable customer care solutions designed to
                    help businesses grow and thrive in a competitive landscape.
                    By combining creativity with technology, we deliver
                    impactful solutions.
                  </p>
                </div>
              </div>
              {/* RIGHT IMAGE  */}
              <div className="flex justify-center py-5 lg:py-10">
                {/* FOUNDER IMAGE */}
                <Image
                  src="/images/team/ceo.webp"
                  alt="Founder"
                  width={370}
                  height={330}
                />
              </div>
            </div>
          </section>
          {/* Carousel */}
          <div className="border-t-[1px] border-t-white/30">
            <div className="w-full m-auto md:border-r-[1px] md:border-r-white/30 md:border-l-[1px] md:border-l-white/30 md:w-[90%]">
              <Carousel
                className="w m-auto  h-full"
                setApi={setApi}
                opts={{
                  loop: true,
                }}
              >
                <CarouselContent className="flex  ">
                  {Teamarray.map((data, i) => (
                    <CarouselItem
                      key={i}
                      className="basis-1/2 lg:basis-1/4 2xl:basis-1/5 flex justify-center pl-5 gap-1"
                    >
                      <OurTeamCard
                        image={data.image}
                        name={data.name}
                        designation={data.des}
                        grade={data.grade}
                      />
                    </CarouselItem>
                  ))}
                </CarouselContent>
              </Carousel>
              {/* bottom buttons */}
              <div className="flex justify-center mt-6 pb-3 gap-6">
                <button
                  onClick={handlePrev}
                  className="w-10 h-10 bg-[#D9D9D9] flex justify-center items-center"
                  style={{
                    clipPath:
                      "polygon(50% 0%, 90% 20%, 100% 60%, 75% 100%, 25% 100%, 0% 60%, 10% 20%)",
                  }}
                >
                  <ChevronLeftIcon
                    size={30}
                    strokeWidth={2}
                    color="black"
                    className="flex justify-center items-center"
                  />
                </button>
                <button
                  onClick={handleNext}
                  className="w-10 h-10 bg-[#D9D9D9] flex justify-center items-center "
                  style={{
                    clipPath:
                      "polygon(50% 0%, 90% 20%, 100% 60%, 75% 100%, 25% 100%, 0% 60%, 10% 20%)",
                  }}
                >
                  <ChevronRightIcon size={30} strokeWidth={2} color="black" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Team;
