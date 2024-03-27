"use client";

import { AspectRatio } from "@/components/ui/aspect-ratio";
import Image from "next/image";

const Testimonials = () => {
  return (
    <section className=" bg-black">
      <div className=" lg:container flex flex-col lg:flex-row lg:items-center gap-10 lg:px-0">
        <div className=" container lg:flex-1 py-20 lg:pr-0 lg:pl-8 space-y-6">
          <h2>
            We are built for every <br />
            ambitious business
          </h2>
          <p>
            Thousands of forward-thinking businesses rely on the Dew MFB
            everyday to turbo-charge their business financial operations
          </p>
          <h3 className="pt-24 font-light">
            “The ease of opening an account completely won me over. The app is
            very easy to navigate and it&apos;s obvious they have the best
            insterests of SMEs at heart. I&apos;m proud to call them my bank.”
          </h3>
          <p className=" text-[#8F96A3] pt-4">Olakunbi Adedipe, Odu Fashion</p>
          <div>
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="6" cy="6" r="6" fill="white" />
            </svg>
          </div>
        </div>
        <div className=" lg:flex-1 w-full h-full max-h-[34rem] lg:max-h-[40rem] mx-auto overflow-clip">
          <AspectRatio ratio={1 / 1} className=" h-full">
            <Image
              src="/images/testimonial.png"
              alt="Image"
              className="object-cover"
              fill
            />
          </AspectRatio>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
