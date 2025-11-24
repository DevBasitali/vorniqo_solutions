import React from "react";
import { ArrowRight } from "lucide-react";

function PrimaryBtn({ children, className = "", ...props }) {
  return (
    <button
      type="button"
      className={`
        relative overflow-hidden
        inline-flex items-center justify-center gap-x-2 rounded-full
        bg-gradient-to-r from-[#01F1D6] to-[#014FF8]
        px-4 py-2
        transition-all duration-300
        group
        ${className} 
      `}
      {...props}
    >
      {/* Rounded expanding background */}
      <span
        className="
          absolute inset-0 bg-white rounded-t-full scale-0 origin-bottom
          transition-transform duration-1000 ease-out
          group-hover:scale-150
        "
      ></span>

      {/* Text + Icon */}
      <h4
        className="
          relative z-10 flex items-center gap-x-2
          transition-colors duration-500
          !text-[#061A36] !text-sm !font-extralight group-hover:!text-black
        "
      >
        {/* Render passed text or default to 'Contact Us' */}
        {children || "Contact Us"}
        
        <span
          className="
            flex items-center justify-center rounded-full bg-transparent p-1
            transition-all duration-500 ease-in-out
            group-hover:bg-black group-hover:rotate-[-50deg]
          "
        >
          <ArrowRight
            size={18}
            strokeWidth={2}
            className="
              text-[#061A36] transition-all duration-500 ease-in-out 
              group-hover:text-white
            "
          />
        </span>
      </h4>
    </button>
  );
}

export default PrimaryBtn;