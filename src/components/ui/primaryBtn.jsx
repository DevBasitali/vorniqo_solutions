import React from 'react'
import {ArrowRight} from 'lucide-react';

function primaryBtn() {
  return (
  <button
  type="button"
  className="
    inline-flex items-center justify-center gap-x-2 rounded-full 
    bg-gradient-to-r from-[#014FF8] to-[#01F1D6] 
    px-5 py-2.5 
    text-sm font-bold text-[#061A36] 
    transition hover:brightness-110
  "
>
  <span>Contact Us</span>
  <ArrowRight size={16} color="black" />
 
</button>
  )
}

export default primaryBtn
