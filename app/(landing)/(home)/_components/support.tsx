"use client";

import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const Support = () => {
  return (
    <section className=" bg-white text-[#595959] py-20">
      <div className=" lg:container flex flex-col lg:flex-row lg:items-center gap-10 lg:px-0">
        <div className=" lg:flex-1 w-full h-full max-h-[34rem] lg:max-h-max mx-auto overflow-clip">
          <AspectRatio ratio={1 / 1}>
            <Image
              src="/images/support.png"
              alt="Image"
              className="object-cover"
              fill
            />
          </AspectRatio>
        </div>
        <div className=" container  lg:flex-1 lg:pl-0 lg:pr-8 space-y-10">
          <h6 className="">SUPPORT WHEN YOU NEED IT</h6>
          <h2 className=" text-black">
            We have a support team available for you 24/7
          </h2>
          <p className="">
            Our support team are a mix of bankers and growth experts ready to
            help you. With a Brass account, you get a team that is genuinely
            seeking to understand your business and provide solutions for its
            financial operations.
            <br />
            <br />
            Our support team are a mix of bankers and growth experts ready to
            help you. With a Brass account, you get a team that is genuinely
            seeking to understand your business and provide solutions for its
            financial operations.
          </p>
          <Button className=" bg-black text-white hover:bg-black/90">
            Contact support
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Support;
