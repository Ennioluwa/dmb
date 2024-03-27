"use client";

import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

const HeroPage = () => {
  return (
    <section className=" min-h-[calc(100svh-5rem)] h-full w-full grid place-items-center bg-[#060809] py-20">
      <div className=" container flex flex-col lg:flex-row lg:items-center gap-20">
        <div className=" flex flex-col gap-12 lg:flex-1">
          <h1>Enjoy a different kind of banking</h1>
          <p>
            Do more with a business account that comes with top-end financial
            tools and integrations to help grow your business.
          </p>
          <Button className=" w-fit">Open an account - it&apos;s free</Button>
        </div>
        <div className=" lg:flex-1 w-full">
          <AspectRatio ratio={1 / 1}>
            <Image
              src="/images/hero.png"
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

export default HeroPage;
