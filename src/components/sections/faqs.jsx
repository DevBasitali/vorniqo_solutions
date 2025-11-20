import React from "react";
import Faqcard from "../ui/faqcard";
import Contactbtn from "../ui/faqcontactbtn";
import faqrobot from "../../../public/images/robots/faqrobot.png";
import Image from "next/image";
const faq = [
  {
    question: "How Do You Handle Communication During Projects?",
    answer:
      "We maintain transparent communication through regular updates, dedicated project managers, and real-time collaboration tools to ensure you're always informed about project progress.",
  },
  {
    question: "Do You Work With Startups As Well As Established Businesses?",
    answer:
      "Yes, We Work With Businesses Of All Sizes—From Startups Building Their First Product To Enterprises Looking To Scale And Optimize Existing Systems.",
  },
  {
    question: "What Technologies Do You Specialize In?",
    answer:
      "We specialize in modern web technologies including React, Next.js, Node.js, and cloud platforms, ensuring scalable and performant solutions for your business needs.",
  },
  {
    question: "What Technologies Do You Specialize In?",
    answer:
      "We specialize in modern web technologies including React, Next.js, Node.js, and cloud platforms, ensuring scalable and performant solutions for your business needs.",
  },
  {
    question: "What Technologies Do You Specialize In?",
    answer:
      "We specialize in modern web technologies including React, Next.js, Node.js, and cloud platforms, ensuring scalable and performant solutions for your business needs.",
  },
  {
    question: "What Technologies Do You Specialize In?",
    answer:
      "We specialize in modern web technologies including React, Next.js, Node.js, and cloud platforms, ensuring scalable and performant solutions for your business needs.",
  },
];
// clip-path: polygon(48.77% 10.99%, 79.58% 10.99%, 75.48% 31.79%, 70.91% 42.91%, 48.77% 70.83%)
// background-color: #0073EB
function faqs() {
  return (
    <section className="border-t-[1px] md:border-t-[2px] lg:border-t-[1px] border-t-white/30 ">
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
