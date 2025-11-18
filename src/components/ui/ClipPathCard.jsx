import React from "react";

export default function ClipPathCard({
  title,
  gifSrc,
}) {
  const customCutClipPath =
    "polygon(10% 0%, 100% 0%, 100% 90%, 90% 100%, 0% 100%, 0% 10%)";

  return (
    <div className="relative w-full aspect-[4/3] sm:aspect-[4/3] md:aspect-[4/3] lg:aspect-[4/3] xl:aspect-[4/3] 2xl:aspect-[4/3] p-2 rounded-xl overflow-hidden">
      <div
        className="w-full h-full bg-[#081840] relative transition-transform duration-300 hover:scale-105 cursor-pointer group border border-white/5"
        style={{
          clipPath: customCutClipPath, // Defines the sharp cuts on TL and BR
        }}
      >
        {/* Content Overlay */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center" 
             style={{ 
               paddingTop: '10px',    
               paddingBottom: '2px', 
             }}
        >
          {/* Main Card Title */}
          <h3 className="uppercase !text-sm line-clamp-2 "
              style={{ marginBottom: '5px' }}
          >
            {title}
          </h3>

          {gifSrc && (
            <div className="relative w-full h-full flex-grow flex items-center justify-center">
              <img
                src={gifSrc}
                alt={`${title} animation`}
                className="max-w-[90%] max-h-[70%] sm:max-w-[80%] sm:max-h-[80%] object-cover"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}