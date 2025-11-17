import React from 'react';
import Image from 'next/image';

export default function ServiceSection() {
  return (
    <section className="w-full border-b border-white/30">
      <div className="w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-8 sm:py-10 md:py-12 lg:py-14">
        <div className="flex flex-col sm:flex-row items-center sm:items-center gap-4">
          {/* Icon */}
          <div className="flex-shrink-0">
            <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 relative">
              <Image
                src="/images/icons/branding-icon.svg"
                alt="Branding Icon"
                fill
                className="object-contain"
              />
            </div>
          </div>

          {/* Text Content */}
          <div className="flex flex-col gap-2 text-center sm:text-left flex-1">
            {/* Main Heading */}
            <h2 className="font-heading uppercase text-color-text-light">
              Branding and Graphics Design
            </h2>

            {/* Subheading */}
            <p className="text-color-text-light font-body">
              We craft distinctive visual identities and impactful designs that elevate your brand's presence across all platforms.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
