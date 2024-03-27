"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { scrollToId } from "@/lib/utils";
import { ArrowUpNarrowWide, MoveUp } from "lucide-react";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <div className=" fixed bottom-4 right-4 z-50">
      {isVisible && (
        <Button
          className=" w-fit px-4 rounded-full"
          onClick={() => scrollToId("hero")}
        >
          <MoveUp size={20} />
        </Button>
      )}
    </div>
  );
};

export default ScrollToTop;
