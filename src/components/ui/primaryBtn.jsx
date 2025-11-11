import React from "react";
import { ArrowRight } from "lucide-react";

function primaryBtn() {
  return (
    <button
      type="button"
      className="
    inline-flex items-center justify-center  gap-x-1 rounded-full 
    bg-gradient-to-r from-[#014FF8] to-[#01F1D6] 
    px-2.5 py-2.5 text-[#061A36] transition hover:brightness-110  
  "
    >
      Contact Us
      <ArrowRight size={20} strokeWidth={2} color="black" />
    </button>
  );
}

export default primaryBtn;
