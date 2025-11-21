"use client";
import dynamic from "next/dynamic";
// --- SSR Components (SEO + Above Fold) ---
import Hero from "@/components/sections/hero";
import Services from "@/components/sections/services";
import Whyus from "@/components/sections/whyus";
// --- Lazy Loaded Components ---
const CompanyLogos = dynamic(
  () => import("@/components/sections/companyLogos"),
  {
    ssr: false,
    loading: () => <p>Loading About...</p>,
  }
);
const About = dynamic(() => import("@/components/sections/about"), {
  ssr: false,
  loading: () => <p>Loading About...</p>,
});
const Team = dynamic(() => import("@/components/sections/team"), {
  ssr: false,
  loading: () => <p>Loading Team...</p>,
});
const Project = dynamic(() => import("@/components/sections/projects"), {
  ssr: false,
  loading: () => <p>Loading Projects...</p>,
});

const Faq = dynamic(() => import("@/components/sections/faqs"), {
  ssr: false,
  loading: () => <p>Loading FAQ...</p>,
});
export default function Home() {
  return (
    <>
      <Hero />
      <CompanyLogos />
      <About />
      <Services />
      <Whyus />
      <Team />
      <Project />
      <Faq />
    </>
  );
}
