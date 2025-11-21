// import React from "react";
// // import Image from "next/image";
// import PrimaryButton from "./primaryBtn";

// import Link from "next/link";
// const ServiceCard = ({ href, title, subtitle }) => {
//   return (
//     <div
//       className="relative flex flex-col 
// border border-white/10 bg-[#081860]/20
// rounded-2xl p-6 hover:border-l-[#01feff]/60 hover:border-r-[#01feff]/60 hover:border-t-[#01feff]/60
// w-full h-60 duration-300"
//     >
//       <div className="flex flex-col gap-y-4 h-full">
//         <div className="flex flex-col gap-y-2 flex-grow overflow-y-auto">
//           <h3 className="text-white">{title}</h3>
//           <p className="text-slate-300">{subtitle}</p>
//         </div>
//         <div className="mt-4">
//           <Link href={href}>
//             <PrimaryButton />
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ServiceCard;


import React from "react";
import Link from "next/link";
import { FileText } from "lucide-react";
import PrimaryButton from "./primaryBtn";

const ServiceCard = ({ href, title, subtitle }) => {
  return (
    // Wrapper with top margin to accommodate the floating icon
    <div className="group relative w-full h-full mt-6"> 
      
      {/* === FLOATING ICON (Top Left) === */}
      <div className="absolute -top-6 left-8 z-20">
        <div className="w-14 h-14 bg-[#091C4B] border border-white/10 rounded-2xl flex items-center justify-center shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
           {/* Gradient Icon Inner */}
           <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#01F1D6] to-[#014FF8] flex items-center justify-center text-[#071435]">
             <FileText size={20} strokeWidth={2.5} />
           </div>
        </div>
      </div>

      {/* === MAIN CARD CONTAINER === */}
      <div className="relative h-full min-h-[280px] w-full bg-[#050C22] border border-white/10 rounded-[32px] overflow-hidden transition-all duration-300 hover:border-[#01feff]/50 hover:shadow-[0_0_30px_rgba(1,254,255,0.1)]">

        {/* Background Decoration (Bottom Right Blob) */}
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-[#0B183D] rounded-tl-full opacity-50 pointer-events-none transition-transform duration-500 group-hover:scale-110" />
        
        {/* Content Container */}
        <div className="relative z-10 flex flex-col h-full p-8 pt-12">
           
           {/* Text Content */}
           <div className="flex-grow mt-2">
             <h3 className="text-2xl font-heading text-white mb-3 group-hover:text-[#01feff] transition-colors">
               {title}
             </h3>
             <p className="text-slate-400 font-body text-sm leading-relaxed">
               {subtitle}
             </p>
           </div>

           {/* === PRIMARY BUTTON === */}
           <div className="mt-8">
             <Link href={href || "/services"} className="inline-block">
               <PrimaryButton />
             </Link>
           </div>

        </div>
      </div>
    </div>
  );
};

export default ServiceCard;