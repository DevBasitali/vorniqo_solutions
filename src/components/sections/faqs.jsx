import React from "react";
import Faqcard from "../ui/faqcard";
import Contactbtn from "../ui/faqcontactbtn";
import faqrobot from "../../../public/images/robots/faqrobot.png";
import Image from "next/image";
const faq = [
  {
    question: "What services do you offer?",
    answer:
      "We provide web & app development, UI/UX design, custom software solutions, and ongoing maintenance to help your business grow digitally.",
  },
  {
    question: "Do you work with startups as well as established businesses?",
    answer:
      "Yes, we work with startups, growing companies, and enterprises, tailoring solutions to your business stage and goals.",
  },
  {
    question: "How long does it take to complete a project?",
    answer:
      "Project timelines depend on scope and complexity. We provide clear schedules and milestones after understanding your requirements.",
  },
  {
    question: "Can you customize solutions according to my business needs?",
    answer:
      "Absolutely. Every solution is tailored to your workflows and goals for maximum impact and efficiency.",
  },
  {
    question: "How do you handle communication during projects?",
    answer:
      "We ensure smooth communication through regular updates, meetings, and dedicated project channels for full transparency.",
  },
  {
    question: "What technologies do you specialize in?",
    answer:
      "We specialize in modern technologies including JavaScript frameworks, Word Press, mobile platforms, cloud solutions, and emerging tools to deliver scalable and future-ready software.",
  },
];
// clip-path: polygon(48.77% 10.99%, 79.58% 10.99%, 75.48% 31.79%, 70.91% 42.91%, 48.77% 70.83%)
// background-color: #0073EB
function faqs() {
  return (
    <section className="border-t-[1px] mb-56  md:mb-10 lg:mb-0 md:border-t-[2px] lg:border-t-[1px] border-t-white/30 ">
      {/* heading  */}
      <div className="w-full xs:w-1/2 m-auto border-l-[1px] border-l-white/30 border-r-[1px] border-r-white/30 ">
        <h1 className="text-center">FREQUENTLY ASKED</h1>
        <h1 className="text-center">QUESTIONS</h1>
      </div>
      <div className="border-b-[1px] border-b-white/30" />
      {/* main section   */}
      <div className="flex flex-col sm:flex-row w-full lg:w-[90%] sm:m-auto  sm:border-l-[1px] sm:border-l-white/30 sm:border-r-[1px] sm:border-r-white/30 ">
        {/* faq card */}
        <div className="flex flex-col p-10 space-y-5">
          {faq.map((data, index) => (
            <Faqcard
              key={index}
              question={data.question}
              answer={data.answer}
            />
          ))}
        </div>
        {/* contact btn  */}
        <div className="relative pt-5 md:pt-10 flex flex-col lg:mx-auto">
          <Contactbtn />
          <div className="flex relative justify-center mt-36 md:mt-48 lg:mt-36 ml-5 md:ml-0 lg:mx-auto  w-[250px]">
            <div className="absolute -top-32 -right-[63px] xs:-right-20 md:-right-8 lg:-right-20 bg-[#0073EB] pt-2 p-1 w-[135px] sm:w-32 h-10 rounded-xl">
              <p>Ask us anything</p>
              <div
                style={{
                  clipPath:
                    "polygon(48.77% 10.99%, 79.58% 10.99%, 75.48% 31.79%, 70.91% 42.91%, 48.77% 70.83%)",
                }}
                className="absolute w-16 h-20 bg-[#0073EB]  top-6 -left-6"
              ></div>
            </div>
            <div className="absolute top-0 w-1/2 h-12 bg-[#0E2152] rounded-2xl ml-10"></div>
            <div className="absolute  top-20 w-full  h-24  bg-[#0E2152] rounded-2xl"></div>
            <div className="absolute -top-[188px] ">
              <Image
                src={faqrobot}
                className="w-80 h-full relative"
                alt="faqrobot"
              />{" "}
            </div>
          </div>

          {/* <div className="w-1/2 m-auto">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum,
            iste quasi fugit neque, illum possimus dignissimos iusto expedita
            qui error quam, necessitatibus provident. Velit sunt vero aspernatur
            consequatur earum laudantium.
          </div> */}
        </div>
      </div>
    </section>
  );
}

export default faqs;
