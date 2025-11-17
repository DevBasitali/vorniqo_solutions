"use client";

import { useState } from "react";

// Single FAQ Card Component
export default function FAQCard({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={`
        w-full max-w-[600px] mx-auto
        transition-all duration-300 ease-in-out
        rounded-lg
        ${
          isOpen
            ? // border-[#00FFFF]
              "border-2  bg-[#081840]"
            : "border-2 border-transparent bg-[#081840]"
        }
      `}
    >
      {/* Question Header - Clickable */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        // focus:ring-2 focus:ring-[#00FFFF] focus:ring-opacity-50
        className="w-full flex items-center justify-between bg-[#081850] p-6 text-left focus:outline-none rounded-lg transition-all"
        aria-expanded={isOpen}
      >
        <span className="!text-white text-lg md:text-xl pr-4 font-bold">
          {question}
        </span>

        {/* Chevron Icon */}
        <svg
          className={`w-6 h-6 flex-shrink-0 text-white transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
          fill="none"
          strokeWidth="2"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      {/* Answer Section - Expandable */}
      <div
        className={`
          overflow-hidden transition-all duration-300 ease-in-out
          ${isOpen ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"}
        `}
      >
        <div className="px-6 pb-8 pt-4 bg-[#112A68]">
          <p className="text-white  text-base md:text-lg leading-relaxed">
            {answer}
          </p>
        </div>
      </div>
    </div>
  );
}
