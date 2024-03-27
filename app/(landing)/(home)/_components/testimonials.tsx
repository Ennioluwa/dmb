"use client";

import { AspectRatio } from "@/components/ui/aspect-ratio";
import Image from "next/image";

const Testimonials = () => {
  return (
    <section className=" bg-black">
      <div className=" lg:container flex flex-col lg:flex-row">
        <div className=" container py-10 space-y-6">
          <h3>We are built for every ambitious business</h3>
          <p>
            Thousands of forward-thinking businesses rely on Brass everyday to
            turbo-charge their business financial operations
          </p>
          <h5>
            “The ease of opening an account completely won me over. The app is
            very easy to navigate and it&apos;s obvious they have the best
            insterests of SMEs at heart. I&apos;m proud to call them my bank.”
          </h5>
          <p>Olakunbi Adedipe, Odu Fashion</p>
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
        <div className=" lg:flex-1 w-full max-w-xl h-[600px]">
          <AspectRatio ratio={1 / 1}>
            <Image
              src="/images/recent.png"
              alt="Image"
              className="rounded-lg object-cover"
              fill
            />
          </AspectRatio>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
