import React from 'react'
import ProjectCard from "../ui/porjectcard"

// Projects data array
const projectsData = [
  {
    id: 1,
    image: "/images/projects/project1.jpg",
    title: "Address Fountain",
    subtitle: "LUXURY HOTEL WEB DEVELOPMENT"
  },
  {
    id: 2,
    image: "/images/projects/project2.jpg",
    title: "E-Commerce Hub",
    subtitle: "RETAIL PLATFORM DESIGN"
  },
  {
    id: 3,
    image: "/images/projects/project3.jpg",
    title: "Fitness Pro",
    subtitle: "MOBILE APP DEVELOPMENT"
  }
];

export default function Projects() {
  return (
    <>
      <div className="h-full">
        <div className="border-t-[1px] w-full border-t-white/30">
          {/* Heading */}
          <div className="border-l-[1px] flex justify-center items-center border-r-[1px] border-r-white/30 h-24 border-l-white/30 w-full md:w-1/2 m-auto">
            <h1 className="text-center">Our Projects</h1>
          </div>
          
          <div className="border-t-[1px] border-t-white/30">
            <div className="w-full md:w-[90%] m-auto p-6 sm:p-10 md:p-16 border-r-[1px] min-h-screen border-l-[1px] border-l-white/30 border-r-white/30">
              {/* Projects Grid - Matching WhyUs layout */}
              <div className="grid grid-cols-1 gap-6 md:gap-[5px] lg:grid-cols-2 place-items-center my-10">
                {projectsData.map((project) => (
                  <ProjectCard 
                    key={project.id}
                    image={project.image}
                    title={project.title}
                    subtitle={project.subtitle}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}