'use client';

import { ArrowRight } from 'lucide-react';

// Contact Card Component
export default function ContactCard() {
  return (
    <div className="w-full max-w-[320px]">
      <div 
        className="bg-gradient-to-br from-[#00A3FF] via-[#00C3FF] to-[#00E5FF] rounded-[2rem] px-6 py-8 shadow-xl"
      >
        {/* Title */}
        <h3 className="text-[#0A1E42] text-xl text-center mb-3" style={{ fontFamily: 'integral-cf-bold' }}>
          CONTACT US
        </h3>
        
        {/* Description */}
        <p className="text-[#0A1E42] text-sm text-center mb-6 leading-relaxed" style={{ fontFamily: 'tt-firs', fontWeight: 300 }}>
          Have a question or a project in mind? We're here to help. Reach out to our team and let's start building solutions together.*
        </p>
        
        {/* Button */}
        <div className="flex justify-center">
          <button 
            className="bg-[#09183E] text-white px-6 py-3 rounded-full text-sm flex items-center gap-2 hover:bg-[#0d2656] transition-colors duration-200 shadow-lg"
            style={{ fontFamily: 'tt-firs', fontWeight: 600 }}
          >
            Contact Us
            <div className="w-5 h-5 bg-white rounded-full flex items-center justify-center">
              <ArrowRight className="w-3 h-3 text-[#0A1E42]" strokeWidth={2.5} />
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}

// Demo showing the card in context
export function ContactCardDemo() {
  return (
    <div className="min-h-screen bg-[#09183E] flex items-center justify-center p-8">
      <ContactCard />
    </div>
  );
}