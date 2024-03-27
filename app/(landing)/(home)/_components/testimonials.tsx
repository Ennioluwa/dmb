"use client";

import { AspectRatio } from "@/components/ui/aspect-ratio";
import Image from "next/image";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { testimonialData } from "@/data/testimonialData";

const Testimonials = () => {
  return (
    <section className=" bg-black">
      <Carousel className="w-full">
        <CarouselContent>
          “”
          {testimonialData.map((testimonial, index) => (
            <CarouselItem key={index}>
              <div className=" lg:container flex flex-col lg:flex-row lg:items-center gap-10 lg:px-0">
                <div className=" container lg:flex-1 py-20 lg:pr-0 lg:pl-8 space-y-6">
                  <h2>{testimonial.title}</h2>
                  <p>{testimonial.subtitle}</p>
                  <h3 className="pt-24 font-light">
                    “{testimonial.testimonial}”
                  </h3>
                  <p className=" text-[#8F96A3] pt-4">
                    {testimonial.name}, {testimonial.business}
                  </p>
                </div>
                <div className=" hidden lg:block lg:flex-1 w-full h-full max-h-[34rem] lg:max-h-[40rem] mx-auto overflow-clip">
                  <AspectRatio ratio={1 / 1} className=" h-full">
                    <Image
                      src={testimonial.image}
                      alt="Image"
                      className="object-cover"
                      fill
                    />
                  </AspectRatio>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious
          className=" left-2 bg-whit cursor-pointer"
          variant="outline"
        />
        <CarouselNext variant="outline" className=" right-2  cursor-pointer" />
      </Carousel>
    </section>
  );
};

export default Testimonials;
