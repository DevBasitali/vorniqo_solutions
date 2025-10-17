import React from 'react'

function secondaryBtn() {
  return (
    <button
  type="button"
  className="
    relative inline-flex items-center justify-center rounded-full 
    p-[1.5px] 
    bg-gradient-to-r from-[#00C2FF] to-[#01F1D6] 
    font-semibold text-white 
    transition-all hover:brightness-110 focus:outline-none
  "
>
  {/* This inner span creates the dark background */}
  <span
    className="
      block rounded-full bg-[#09183E] 
      px-6 py-2
    "
  >
    {/* This span creates the gradient text */}
    <span
      className="
        bg-gradient-to-r from-[#00C2FF] to-[#01F1D6] 
        bg-clip-text text-sm text-transparent
      "
    >
      Get Started
    </span>
  </span>
</button>
  )
}

export default secondaryBtn
