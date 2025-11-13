import About from "../components/sections/about";
import Hero from "../components/sections/hero";
import CompanyLogos from "../components/sections/companyLogos";
import Services from "../components/sections/services";
import Whyus from "../components/sections/whyus";
import Faq from "../components/sections/faqs";
import Project from "../components/sections/projects";
import Team from "@/components/sections/team";

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
      {/* <Faq /> */}
    </>
  );
}
