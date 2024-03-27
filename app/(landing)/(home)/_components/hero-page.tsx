import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

const HeroPage = () => {
  return (
    <section className=" min-h-svh h-full w-full grid place-items-center bg-[#060809] py-20">
      <div className=" container flex flex-col lg:flex-row gap-20">
        <div className=" flex flex-col gap-12 lg:flex-1">
          <h1>Enjoy a different kind of banking</h1>
          <p>
            Do more with a business account that comes with top-end financial
            tools and integrations to help grow your business.
          </p>
          <Button>Open an account - it's free</Button>
        </div>
        <div className=" lg:flex-1 w-full max-w-xl">
          <AspectRatio ratio={1 / 1}>
            <Image
              src="/images/recent.png"
              alt="Image"
              className="rounded-lg object-cover"
            />
          </AspectRatio>
        </div>
      </div>
    </section>
  );
};

export default HeroPage;