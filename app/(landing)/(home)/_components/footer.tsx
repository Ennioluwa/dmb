"use client";

import Logo from "@/components/logo";
import { Instagram, Linkedin, Twitter, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <section className=" bg-[#151415]">
      <div className="container py-20">
        <div className="  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 justify-center items-start gap-20 flex-wrap">
          <div className=" flex flex-col gap-6 flex-[1]">
            <Logo />
          </div>
          <div className=" flex flex-col gap-6 flex-[1]">
            <h5 className=" text-xl font-medium text-[#50555E] ">Features</h5>
            <p className=" text-nowrap">Testimonials</p>
            <p className=" text-nowrap">AI Enhancements</p>
            <p className=" text-nowrap">Video Funnels</p>
          </div>
          <div className=" flex flex-col gap-6 flex-[1] shrink-0">
            <h6 className=" text-xl font-medium text-[#50555E] ">Services</h6>
            <p className=" text-nowrap">Retail businesses</p>
            <p className=" text-nowrap">Internet companies</p>
          </div>
          <div className=" flex flex-col gap-6 flex-[1]">
            <h5 className=" text-xl font-medium text-[#50555E] ">About</h5>
            <p className=" text-nowrap">Customers</p>
            <p className=" text-nowrap">Company</p>
            <p className=" text-nowrap">Why Dew</p>
            <p className=" text-nowrap">Press resources</p>
            <p className=" text-nowrap">Careers</p>
          </div>
          <div className=" flex flex-col gap-6 flex-[1]">
            <h5 className=" text-xl font-medium text-[#50555E] ">Legal</h5>
            <p className=" text-nowrap">Terms of service</p>
            <p className=" text-nowrap">Privacy policy</p>
            <p className=" text-nowrap">Capital TOS</p>
          </div>
          <div className=" flex flex-col gap-6 flex-[1]">
            <h5 className=" text-xl font-medium text-[#50555E] ">Social</h5>
            <div className="flex gap-4 items-center">
              <div className=" grid place-items-center h-8 w-8 rounded-full bg-[#000]">
                <Linkedin size={14} color="#A2FF00" />
              </div>
              <div className=" grid place-items-center h-8 w-8 rounded-full bg-[#000]">
                <Youtube size={14} color="#A2FF00" />
              </div>
              <div className=" grid place-items-center h-8 w-8 rounded-full bg-[#000]">
                <Twitter size={14} color="#A2FF00" />
              </div>
              <div className=" grid place-items-center h-8 w-8 rounded-full bg-[#000]">
                <Instagram size={14} color="#A2FF00" />
              </div>
            </div>
            <p>help@dewmfb.com</p>
          </div>
        </div>
        <div className=" mt-20 text-center">
          <h6>
            Banking services backed by Bancorp MFB & FCMB and regulated by the
            Central Bank of Nigeria. <br />
            <br />
            Dew Microfinance Bank Limited, DMB | Copyright© 2024 DMB, All Rights
            Reserved.
          </h6>
        </div>
      </div>
    </section>
  );
};

export default Footer;
