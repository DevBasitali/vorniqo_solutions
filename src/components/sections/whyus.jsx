"use client";
import React from "react";
import {
  BulbIcon,
  ShieldIcon,
  TargetIcon,
  GearIcon,
} from "@/components/icons/FeatureIcons";
import FeatureCard from "@/components/ui/FeatureCard";
import Collage from "@/components/ui/Collage";

export default function WhyUs() {
  const features = [
    {
      title: "Custom-Fit Solutions",
      subtitle: "Built around your exact needs",
      badgeSide: "left",
      Icon: BulbIcon,
    },
    {
      title: "Transparent Process",
      subtitle: "No hidden steps, no surprises",
      badgeSide: "right",
      Icon: ShieldIcon,
    },
    {
      title: "Results-Driven",
      subtitle: "Focused on outcomes that matter",
      badgeSide: "left",
      Icon: TargetIcon,
    },
    {
      title: "Modern Tech",
      subtitle: "Always using the latest tools & trends",
      badgeSide: "right",
      Icon: GearIcon,
    },
  ];

  return (
    <section className="grid grid-cols-1">
      <div className="relative flex flex-col py-7">
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start px-4 md:px-20 lg:px-24 border-t border-b border-white/30">
          <div className="w-full lg:w-1/2 text-center lg:text-left lg:border-r lg:border-white/30 py-8 lg:pr-8">
            <span className="inline-block tracking-[2px] mb-2 text-color-text-dark font-body font-semibold">
              WHY CHOOSE US ///////////////////////
            </span>
            <h1 className="font-heading uppercase">
              Why Our Client
              <br />
              Believe We Are
              <br />
              Different
            </h1>
          </div>

          <div className="w-full lg:w-1/2 py-8 lg:pl-8">
            <p className="text-color-text-light text-center lg:text-left px-4 sm:px-8 lg:px-0">
              We go beyond just delivering projects we create meaningful digital
              experiences that drive results. Our approach combines creativity,
              technology, and strategy to help your business grow with
              confidence.
            </p>
          </div>
        </div>

        {/* Content Section */}
        <div className="relative py-8 lg:py-12">
          <div className="grid grid-cols-1 gap-6 md:gap-[5px] px-4 mx-auto sm:px-8 md:px-12 lg:px-20 lg:grid-cols-2 place-items-center z-10">
            {/* Collage - Now visible on md+ */}
            <div className="w-full hidden md:block">
              <Collage />
            </div>

            {/* Feature Cards Grid */}
            <div className="w-full">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 place-items-center">
                {features.map((f, i) => (
                  <FeatureCard
                    key={f.title}
                    title={f.title}
                    subtitle={f.subtitle}
                    badgeSide={f.badgeSide}
                    Icon={f.Icon}
                    index={i}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
