"use client";

import { Button } from "@/components/ui/button";

const GetStarted = () => {
  return (
    <section className=" bg-[#060809]">
      <div className=" py-20 container flex flex-col gap-6 lg:gap-10">
        <h3>Get started — It&apos;s free</h3>
        <p>
          Get all the best financial products for your business growth for free.
          <br />
          Open the last current account you will ever need for your business
        </p>
        <Button>Open an account — It&apos;s free</Button>
      </div>
    </section>
  );
};

export default GetStarted;
