import React from "react";
import ProjectCard from "../ui/porjectcard";

const projectsData = [
  {
    id: 1,
    image: "/images/our_projectImages/hsqTower.webp",
    title: "HSQ Towers",
    subtitle: "Hotel Website Design",
    bgColor: "#FFF3DB",
    link: "https://www.hsqtowers.com",
  },
  {
    id: 2,
    image: "/images/our_projectImages/address_fountain.webp",
    title: "Address Fountain",
    subtitle: "Luxury Hotel Web Development",
    bgColor: "#0073EB",
    link: "https://www.hsqtowers.com",
  },
  {
    id: 3,
    image: "/images/our_projectImages/burjZafar.webp",
    title: "Burj A Zafar",
    subtitle: "MOBILE APP DEVELOPMENT",
    bgColor: "#361C03",
    link: "https://www.hsqtowers.com",
  },
];

export default function Projects() {
  return (
    <section className="grid grid-cols-1">
      <div className="relative flex flex-col">
        {/* Header Section */}
        <div className="border-t border-b border-white/30">
          <div className="flex justify-center items-center md:border-l md:border-r md:border-white/30 h-20 sm:h-24 w-full sm:w-3/4 md:w-2/3 lg:w-1/2 mx-auto px-4">
            <h1 className="text-center uppercase font-heading">Our Projects</h1>
          </div>
        </div>

        {/* Content Section */}
        <div className="md:border-t md:border-white/30">
          <div className="w-full lg:w-[90%] xl:w-[85%] 2xl:w-[80%] mx-auto px-4 sm:px-20 md:px-3 lg:px-5 xl:px-16 py-8 sm:py-10 md:py-20 lg:py-20 min-h-screen">
            {/* Projects Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 xl:grid-cols-3 gap-6 sm:gap-8 md:gap-0 place-items-center">
              {projectsData.map((project) => (
                <ProjectCard
                  key={project.id}
                  image={project.image}
                  title={project.title}
                  subtitle={project.subtitle}
                  bgColor={project.bgColor}
                  link={project.link}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}