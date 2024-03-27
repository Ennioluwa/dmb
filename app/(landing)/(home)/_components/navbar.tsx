"use client";

import Logo from "@/components/logo";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";
import MobileSidebar from "./mobile-sidebar";
import { navLinks } from "@/data/navData";

const Navbar = () => {
  return (
    <div className=" bg-black h-20 ">
      <nav className=" container h-full w-full flex justify-between items-center">
        <div className=" flex items-center gap-12">
          <Logo className=" shrink-0" />
          <div className=" hidden lg:inline-flex items-center gap-12">
            {navLinks.map((link, index) => (
              <Link href={link.href} key={index} className="">
                <Button
                  className=" w-fit text-foreground px-0 capitalize font-normal"
                  variant={"link"}
                >
                  {link.title}
                </Button>
              </Link>
            ))}
          </div>
        </div>
        <div className=" lg:inline-flex items-center gap-5 hidden">
          <Button variant={"ghost"}>Login</Button>
          <Button>Open an account</Button>
        </div>
        <MobileSidebar />
      </nav>
    </div>
  );
};

export default Navbar;
