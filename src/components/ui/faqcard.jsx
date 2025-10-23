'use client';

import { useState } from 'react';

// Single FAQ Card Component
export default function FAQCard({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={`
        w-full max-w-[800px] mx-auto
        transition-all duration-300 ease-in-out
        rounded-lg
        ${isOpen 
          ? 'border-2 border-[#00FFFF] bg-[#09183E]' 
          : 'border-2 border-transparent bg-[#09183E]'
        }
      `}
    >
      {/* Question Header - Clickable */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-6 text-left focus:outline-none focus:ring-2 focus:ring-[#00FFFF] focus:ring-opacity-50 rounded-lg transition-all"
        aria-expanded={isOpen}
      >
        <span className="text-[#E2E8F0] text-lg md:text-xl pr-4 font-bold">
          {question}
        </span>
        
        {/* Chevron Icon */}
        <svg
          className={`w-6 h-6 flex-shrink-0 text-[#E2E8F0] transition-transform duration-300 ${
            isOpen ? 'rotate-180' : ''
          }`}
          fill="none"
          strokeWidth="2"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {/* Answer Section - Expandable */}
      <div
        className={`
          overflow-hidden transition-all duration-300 ease-in-out
          ${isOpen ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'}
        `}
      >
        <div className="px-6 pb-8 pt-4">
          <p className="text-[#94A3B8] text-base md:text-lg leading-relaxed">
            {answer}
          </p>
        </div>
      </div>
    </div>
  );
}

// Example Usage Component (shows how to use multiple cards)
export function FAQSection() {
  const faqs = [
    {
      question: "How Do You Handle Communication During Projects?",
      answer: "We maintain transparent communication through regular updates, dedicated project managers, and real-time collaboration tools to ensure you're always informed about project progress."
    },
    {
      question: "Do You Work With Startups As Well As Established Businesses?",
      answer: "Yes, We Work With Businesses Of All Sizes—From Startups Building Their First Product To Enterprises Looking To Scale And Optimize Existing Systems."
    },
    {
      question: "What Technologies Do You Specialize In?",
      answer: "We specialize in modern web technologies including React, Next.js, Node.js, and cloud platforms, ensuring scalable and performant solutions for your business needs."
    }
  ];

  return (
    <div className="w-full max-w-2xl mx-auto py-12 px-4">
      <h2 className="text-3xl md:text-4xl text-[#E2E8F0] mb-8 text-center font-bold">
        Frequently Asked Questions
      </h2>
      
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <FAQCard
            key={index}
            question={faq.question}
            answer={faq.answer}
          />
        ))}
      </div>
    </div>
  );
}