import Logo from "@/components/logo";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { navLinks } from "@/data/navData";
import { Menu, MoveUpRight } from "lucide-react";
import Link from "next/link";

const MobileSidebar = () => {
  return (
    <Sheet>
      <SheetTrigger className=" lg:hidden" asChild>
        <Button className=" lg:hidden px-4" variant={"ghost"}>
          <Menu className=" cursor-pointer block lg:hidden" size={24} />
        </Button>
      </SheetTrigger>
      <SheetContent className="  sm:border-l border-gray-600 bg-black w-full max-w-full py-4">
        <SheetHeader className=" flex flex-col gap-40">
          <Logo />
          <div className="flex flex-col gap-3">
            {navLinks.map((item, index) => (
              <Link href={item.href} key={index} className=" group">
                <Button
                  className=" w-full capitalize gap-4 bg-black"
                  variant={"outline"}
                >
                  {item.title}
                  <MoveUpRight
                    className=" group-hover:rotate-45 transition-transform duration-300 ease-in-out"
                    size={14}
                  />
                </Button>
              </Link>
            ))}
          </div>
          <div className="flex flex-col items-center gap-5 w-full">
            <Button className=" w-full" variant={"ghost"}>
              Login
            </Button>
            <Button className=" w-full">Contact Us</Button>
          </div>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};

export default MobileSidebar;
