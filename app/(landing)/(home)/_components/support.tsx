"use client";

import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";
import { scrollToId } from "@/lib/utils";
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
            Our commitment to your success extends around the clock. With a
            dedicated support team available 24 hours a day, 7 days a week, you
            can count on prompt assistance whenever you need it. Whether you
            have an urgent inquiry or simply want advice, our knowledgeable
            experts are just a call or click away
            <br />
            <br />
            No matter what challenges your business faces, you'll never go it
            alone. Our 24/7 support team combines banking proficiency with a
            consultative approach to deliver personalized solutions. We take the
            time to understand your unique needs and financial goals, providing
            guidance tailored to your specific situation. Rest assured, we're
            always here to support your entrepreneurial journey.
          </p>
          <Button
            onClick={() => scrollToId("contact")}
            className=" bg-black text-white hover:bg-black/90"
          >
            Contact support
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Support;
