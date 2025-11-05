import React from 'react';
import { BrandMarquee } from '../ui/BrandMarquee';

const logos = [
  { src: '/images/clients/alzafar.webp', alt: 'alzafar' },
  { src: '/images/clients/hsq.webp', alt: 'hsq' },
  { src: '/images/clients/alzafar.webp', alt: 'alzafar' },
  { src: '/images/clients/hsq.webp', alt: 'hsq' },
  { src: '/images/clients/alzafar.webp', alt: 'alzafar' },
  
]

function companyLogos() {
  return (
    <main>
      <BrandMarquee
        logos={logos}
        speed={24}           
        direction="ltr"
        className="bg-transparent"
      />
    <div className="w-full h-px bg-gray-100/30"></div>
    </main>
    
  );
}

export default companyLogos;
