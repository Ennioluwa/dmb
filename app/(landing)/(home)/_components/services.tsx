"use client";

import { AspectRatio } from "@/components/ui/aspect-ratio";
import { servicesData } from "@/data/servicesData";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { useState } from "react";

const Services = () => {
  const [index, setIndex] = useState(0);

  return (
    <section id="services" className=" bg-white text-black">
      <div className=" py-20 container flex flex-col gap-6">
        <h2>
          Everything you need,
          <br />
          less of what you don&apos;t.
        </h2>
        <div className=" flex flex-col lg:flex-row lg:items-center gap-20">
          <div className=" flex flex-col lg:flex-1">
            {servicesData.map((service, i) => (
              <div
                onClick={() => setIndex(i)}
                key={i}
                className={cn(
                  " space-y-2 px-3 py-6 border-l-4 cursor-pointer",
                  index === i ? "border-primary" : "border-[#F9FAFA]"
                )}
              >
                <h3
                  className={cn(
                    " capitalize",
                    index === i ? " text-black " : "text-[#8F96A3]"
                  )}
                >
                  {service.title}
                </h3>
                <p
                  className={cn(
                    index === i ? " text-black " : "text-[#B4B8AE]"
                  )}
                >
                  {service.subtitle}
                </p>
              </div>
            ))}
          </div>
          <div className=" lg:flex-1 w-full hidden lg:block">
            <AspectRatio ratio={1 / 1}>
              <Image
                src={servicesData[index].image}
                alt="Image"
                className="rounded-xl object-cover"
                fill
              />
            </AspectRatio>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
