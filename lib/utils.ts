import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const scrollToId = (id: string) => {
  const element = document.getElementById(id);
  console.log(element, "element");

  element?.scrollIntoView({ behavior: "smooth" });
};
