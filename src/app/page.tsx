import About from "../components/sections/about";
import Hero from "../components/sections/hero";
import CompanyLogos from "../components/sections/companyLogos";
import Whyus from "../components/sections/whyus";
import Faq from "../components/sections/faqs"
import Project from "../components/sections/projects";

export default function Home() {
  return (
    <>
       <Hero />
       <CompanyLogos/>
       <About />
      {/*<Whyus />
      <Project />
      <Faq /> */}
    </>
  );
}
