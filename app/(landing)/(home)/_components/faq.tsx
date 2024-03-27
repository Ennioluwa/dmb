import { faqData } from "@/data/faqData";
import React from "react";
import FaqAccordion from "./faq-accordion";
import { Accordion } from "@/components/ui/accordion";

const Faq = () => {
  return (
    <section className=" bg-[#060809]">
      <div className=" py-20 container flex flex-col lg:flex-row gap-6 lg:gap-20">
        <div className=" lg:flex-1 space-y-3">
          <h3>Some questions that are frequently asked </h3>
          <p>Some questions that are frequently asked </p>
        </div>
        <div className=" lg:flex-[1.5]">
          <Accordion type="single" collapsible className="w-full">
            {faqData.map((faq, index) => (
              <FaqAccordion
                key={index}
                title={faq.title}
                subtitle={faq.subtitle}
              />
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default Faq;
