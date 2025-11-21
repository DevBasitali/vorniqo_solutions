import React from "react";

import HeroSection from "@/components/sections/services/HeroService";
import BrandingSection from "@/components/sections/services/BrandingService";
import UxWebService from "@/components/sections/services/uxWebService";
import MarketingVideosService from "@/components/sections/services/MarketingVideosService";
import ClientBusinessService from "@/components/sections/services/ClientBusinessService";

function page() {
  return (
    <>
      <HeroSection />
      <BrandingSection />
      <UxWebService />
      <MarketingVideosService />
      <ClientBusinessService />
    </>
  );
}

export default page;
