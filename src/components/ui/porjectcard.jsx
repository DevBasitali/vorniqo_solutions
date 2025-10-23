'use client';

// Project Card Component
export default function ProjectCard({ 
  image = "/placeholder-project.jpg", 
  title = "Address Fountain", 
  subtitle = "LUXURY HOTEL WEB DEVELOPMENT"
}) {
  return (
    <div className="w-full max-w-[270px]">
      <div className="bg-[#0A1E42] rounded-[2rem] overflow-hidden shadow-xl">
        {/* Image Container - Takes most of the card */}
        <div className="bg-[#00A3FF] p-6 aspect-square flex items-center justify-center">
          <img 
            src={image} 
            alt={title}
            className="w-full h-full object-contain"
          />
        </div>
        
        {/* Text Content - Gradient bottom section */}
        <div className="text-center px-5 py-6 bg-[#0A1E42] rounded-b-[2rem]">
          <h3 
            className="text-[#FFFFFF] text-xl mb-1 leading-tight uppercase tracking-tight" 
            style={{ fontFamily: 'integral-cf-bold' }}
          >
            {title}
          </h3>
          <p 
            className="text-[#FFFFFF] text-xs leading-tight uppercase tracking-wide"
            style={{ fontFamily: 'tt-firs', fontWeight: 400 }}
          >
            {subtitle}
          </p>
        </div>
      </div>
    </div>
  );
}

// Demo showing multiple project cards
export function ProjectCardsDemo() {
  const projects = [
    {
      image: "https://placehold.co/400x400/0A1E42/E2E8F0?text=Project+Preview",
      title: "Address Fountain",
      subtitle: "LUXURY HOTEL WEB DEVELOPMENT"
    },
    {
      image: "https://placehold.co/400x400/0A1E42/E2E8F0?text=E-Commerce",
      title: "E-Commerce Hub",
      subtitle: "RETAIL PLATFORM DESIGN"
    },
    {
      image: "https://placehold.co/400x400/0A1E42/E2E8F0?text=Fitness+App",
      title: "Fitness Pro",
      subtitle: "MOBILE APP DEVELOPMENT"
    }
  ];

  return (
    <div className="min-h-screen bg-[#09183E] p-8">
      <div className="max-w-6xl mx-auto">
        <h2 
          className="text-white text-3xl text-center mb-12" 
          style={{ fontFamily: 'integral-cf-bold' }}
        >
          OUR PROJECTS
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </div>
  );
}