"use client";

import { blogData } from "@/data/blogData";
import { AspectRatio } from "@radix-ui/react-aspect-ratio";
import Image from "next/image";

const Blog = () => {
  return (
    <section className=" bg-white text-black">
      <div className=" py-20 container flex flex-col gap-6 overflow-clip">
        <h2 className=" lg:w-2/3">
          Go further with resources <br /> from our blog to begin
        </h2>
        <p className=" sm:w-2/3 text-[#595959] ">
          We have partnered with businesses on the same mission as ours to help
          local businesses. We have also added resources you need to start, run
          and grow your business.
        </p>
        <div className=" pt-20 grid grid-cols-1 md:grid-cols-3  gap-6 lg:gap-10 gap-y-10 overflow-clip">
          {blogData.map((blog, index) => (
            <div
              key={index}
              className="border col-span-1 rounded-lg max-w-md mx-auto md:mx-0"
            >
              <div className="">
                <AspectRatio ratio={39 / 24}>
                  <Image
                    src={blog.image}
                    alt="Image"
                    className=" object-cover w-full"
                    fill
                  />
                </AspectRatio>
              </div>
              <div className=" flex flex-col gap-1 p-6">
                <p className=" font-bold text-nowrap truncate ">{blog.title}</p>
                <h6 className=" text-[#595959] text-nowrap truncate">
                  {blog.subtitle}
                </h6>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
