import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

const Support = () => {
  return (
    <section className=" bg-black">
      <div className=" lg:container flex flex-col lg:flex-row lg:items-center">
        <div className=" lg:flex-1 w-full max-w-xl h-[600px]">
          <AspectRatio ratio={1 / 1}>
            <Image
              src="/images/recent.png"
              alt="Image"
              className="rounded-lg object-cover"
            />
          </AspectRatio>
        </div>
        <div className=" container px-6 py-10 space-y-6">
          <h6 className=" text-[#595959]">SUPPORT WHEN YOU NEED IT</h6>
          <h3 className=" text-[#595959]">
            We have a support team available for you 24/7
          </h3>
          <p className=" text-[#595959]">
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
          <Button variant={"secondary"}>Contact support</Button>
        </div>
      </div>
    </section>
  );
};

export default Support;
