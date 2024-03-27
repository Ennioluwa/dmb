"use client";

import Image from "next/image";

const FinancialStack = () => {
  return (
    <section className=" bg-white text-black">
      <div className=" py-20 container flex flex-col gap-6">
        <h2 className="font-semibold">
          The complete financial <br />
          stack for your business
        </h2>
        <p className=" text-gray">
          We help companies of all types work better, save time and money with a
          simply <br />
          better banking service that works.
        </p>
        <div className=" pt-16 flex flex-col md:flex-row md:items-center gap-6 lg:gap-10 gap-y-10">
          <div className=" flex flex-row md:flex-col lg:flex-row gap-4 text-left md:text-center lg:text-left items-center md:flex-1">
            <div className=" shrink-0 size-16 rounded-lg overflow-clip relative">
              <Image src={"/images/finance/1.png"} alt="Finance" fill />
            </div>
            <div className=" flex flex-col gap-1">
              <h3>Speed</h3>
              <p className=" text-gray">
                Open a commercial-grade current account from anywhere in 10
                minutes
              </p>
            </div>
          </div>
          <div className=" flex flex-row md:flex-col lg:flex-row gap-4 text-left md:text-center lg:text-left items-center md:flex-1">
            <div className=" shrink-0 size-16 rounded-lg overflow-clip relative">
              <Image src={"/images/finance/2.png"} alt="Finance" fill />
            </div>
            <div className=" flex flex-col gap-1">
              <h3>Security</h3>
              <p className=" text-gray">
                Rely on bank-grade security with all your monies fully insured
                by NDIC
              </p>
            </div>
          </div>
          <div className=" flex flex-row md:flex-col lg:flex-row gap-4 text-left md:text-center lg:text-left items-center md:flex-1">
            <div className=" shrink-0 size-16 rounded-lg overflow-clip relative">
              <Image src={"/images/finance/3.png"} alt="Finance" fill />
            </div>
            <div className=" flex flex-col gap-1">
              <h3>Support</h3>
              <p className=" text-gray">
                Get access to a trusted support team and resources whenever you
                want
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinancialStack;
