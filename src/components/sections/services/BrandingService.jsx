// import React from "react";
// import { Palette } from "lucide-react";
// import ClipPathCard from "@/components/ui/ClipPathCard"; // Your responsive card component

// export default function ServiceSection() {
//   const cards = [
//     {
//       id: 1,
//       title: "Creative Graphics",
//       description:
//         "Strategic planning and positioning that defines your market presence.",
//       image: "/images/box1.png",
//     },
//     {
//       id: 2,
//       title: "Brand Identity",
//       description: "Crafting memorable logos and comprehensive design systems.",
//        image: "/images/box1.png",
//     },
//     {
//       id: 3,
//       title: "Design Excellence",
//       description: "Designing impactful print and digital assets that convert.",
//        image: "/images/box1.png",
//     },
//   ];

//   // The groupShadowStyle object has been REMOVED.

//   return (
//     <section className="w-full border-b border-white/30 py-8 sm:py-10 md:py-12 lg:py-14">
//       {/* Outer div applies responsive padding (px-4 to xl:px-16) to the section content */}
//       <div className="w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
//         {/* Main content wrapper, w-full ensures it stretches to the padding limits */}
//         <div className="w-full"> 
          
//           {/* Header/Icon Section */}
//           <div className="flex flex-col sm:flex-row sm:items-start gap-4 mb-8 sm:mb-10 md:mb-12">
//             <div className="flex-shrink-0 mx-auto sm:mx-0">
//               <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 flex items-center justify-center">
//                 <Palette
//                   className="w-full h-full text-color-text-dark"
//                   strokeWidth={1.5}
//                 />
//               </div>
//             </div>
//             <div className="flex flex-col gap-2 text-center sm:text-left flex-1">
//               <h2 className="font-heading uppercase text-color-text-light">
//                 Branding and Graphics Design
//               </h2>
//               <p className="text-color-text-light font-body">
//                 We craft distinctive visual identities and impactful designs
//                 that elevate your brand's presence across all platforms.
//               </p>
//             </div>
//           </div>

//           {/* Card Grid Container - NO SHADOW STYLE APPLIED */}
//           <div 
//             // Removed style={groupShadowStyle}
//             className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
//           > 
//             {cards.map((card) => (
//               <div 
//                 key={card.id} 
//                 className="w-full flex justify-center" // Centering wrapper for smaller cards
//               >
//                 {/* Inner wrapper constrains card size for XL and 2XL screens */}
//                 <div className="w-full max-w-sm xl:max-w-md 2xl:max-w-lg "> 
//                     <ClipPathCard
//                       title={card.title}
//                       description={card.description}
//                       image={card.image}
//                       icon={Palette}
//                     />
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// In ServiceSection.jsx

import React from "react";
import { Palette } from "lucide-react"; 
import ClipPathCard from "@/components/ui/ClipPathCard"; // Your updated card component

export default function ServiceSection() {
  const cards = [
    {
      id: 1,
      title: "Brand Strategy",
      gifSrc: "/animations/box1.gif", // Example GIF path
    },
    {
      id: 2,
      title: "Visual Identity",
      gifSrc: "/animations/box1.gif", // Example GIF path
    },
    {
      id: 3,
      title: "Marketing Materials",
      gifSrc: "/animations/box1.gif", // Example GIF path
    },
  ];

  return (
    <section className="w-full border-b border-white/30 py-8 sm:py-10 md:py-12 lg:py-14">
      <div className="w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
        <div className="w-full"> 
          <div className="flex flex-col sm:flex-row sm:items-start gap-4 mb-8 sm:mb-10 md:mb-12">
            <div className="flex-shrink-0 mx-auto sm:mx-0">
              <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 flex items-center justify-center">
                <Palette
                  className="w-full h-full text-color-text-dark"
                  strokeWidth={1.5}
                />
              </div>
            </div>
            <div className="flex flex-col gap-2 text-center sm:text-left flex-1">
              <h2 className="font-heading  uppercase text-color-text-light">
                Branding and Graphics Design
              </h2>
              <p className="text-color-text-light font-body">
                We craft distinctive visual identities and impactful designs
                that elevate your brand's presence across all platforms.
              </p>
            </div>
          </div>

          <div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          > 
            {cards.map((card) => (
              <div 
                key={card.id} 
                className="w-full flex justify-center"
              >
                <div className="w-full max-w-sm xl:max-w-md 2xl:max-w-md"> 
                    <ClipPathCard
                      title={card.title}
                      gifSrc={card.gifSrc}
                    />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}