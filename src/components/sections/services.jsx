import React from "react";
import Image from "next/image";

export default function services() {
  return (
    <div>
      <section className="grid grid-cols-1">
        <div className="relative flex items-start justify-start pt-7 border-r border-white/30">
          <div className="px-4 md:px-15 lg:px-23 max-w-prose text-center">
            <span className="flex items-start sm:text-center mt-4 pl-10 sm:pl-0 text-pretty tracking-[2px] my-1">
              Services ///////////////////////////////////////
            </span>
            <h1 className="flex items-start justify-center sm:justify-center md:justify-start">
              our services
            </h1>
            <div>
              <Image
                src="/images/services/flashes.webp"
                alt="flashes"
                width={80}
                height={80}
                className=" absolute hidden sm:hidden lg:block 2xl:hidden lg:top-10 lg:right-180 w-[80px] object-contain"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
