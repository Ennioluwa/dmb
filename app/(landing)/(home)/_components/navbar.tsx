import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

const navLinks = [
  { title: "services", href: "/" },
  { title: "about us", href: "/" },
  { title: "company", href: "/" },
  { title: "support", href: "/" },
];

const Navbar = () => {
  return (
    <div className=" bg-black h-20 ">
      <nav className=" container h-full w-full flex justify-between items-center">
        <div className=" flex items-center gap-12">
          logo
          <div className=" flex items-center gap-12">
            {navLinks.map((link, index) => (
              <Link href={link.href} key={index}>
                {link.title}
              </Link>
            ))}
          </div>
        </div>
        <div className=" flex items-center gap-5">
          <Button variant={"ghost"}>Login</Button>
          <Button>Open an account</Button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
