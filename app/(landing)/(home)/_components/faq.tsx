"use client";

import { faqData } from "@/data/faqData";
import FaqAccordion from "./faq-accordion";
import { Accordion } from "@/components/ui/accordion";

const Faq = () => {
  return (
    <section className=" bg-[#060809] text-white">
      <div className=" py-20 container flex flex-col lg:flex-row gap-6 lg:gap-20">
        <div className=" lg:flex-1 space-y-3">
          <h2>Some questions that are frequently asked </h2>
          <p>
            Find answers to common inquiries about our microfinance services
          </p>
        </div>
        <div className=" lg:flex-[1.4]">
          <Accordion type="single" collapsible className="w-full bg-black">
            {faqData.map((faq, index) => (
              <FaqAccordion
                index={index}
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
