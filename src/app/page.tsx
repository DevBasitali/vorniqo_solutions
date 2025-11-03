import About from "../components/sections/about";
import Hero from "../components/sections/hero";
import Whyus from "../components/sections/whyus";
import Faq from "../components/sections/faqs"
import Project from "../components/sections/projects";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Whyus />
      <Project />
      <Faq />
    </>
  );
}
