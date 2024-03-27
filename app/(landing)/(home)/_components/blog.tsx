import { AspectRatio } from "@radix-ui/react-aspect-ratio";
import Image from "next/image";
import React from "react";

const Blog = () => {
  return (
    <section className=" bg-white">
      <div className=" py-20 container flex flex-col gap-6">
        <h3 className=" lg:w-2/3">
          Go further with resources from our blog to begin
        </h3>
        <p className=" lg:w-2/3">
          We have partnered with businesses on the same mission as ours to help
          local businesses. We have also added resources you need to start, run
          and grow your business.
        </p>
        <div className=" flex flex-col lg:flex-row lg:items-center gap-8 rounded-lg">
          <div className=" lg:flex-1 w-full max-w-xl">
            <AspectRatio ratio={39 / 24}>
              <Image
                src="/images/recent.png"
                alt="Image"
                className=" object-cover"
              />
            </AspectRatio>
          </div>
          <div className=" flex gap-4 items-center lg:flex-1 max-w-96">
            <div className=" flex flex-col gap-1 p-6">
              <h5>
                We have partnered with businesses on the same mission as ours to
                help local businesses. We have also added resources you need to
                start, run and grow your business.
              </h5>
              <p>
                Open a commercial-grade current account from anywhere in 10
                minutes
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
