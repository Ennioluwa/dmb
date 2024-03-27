"use client";

import { FC } from "react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FaqAccordionProps {
  title: string;
  subtitle: string;
  index: number;
}

const FaqAccordion: FC<FaqAccordionProps> = ({ title, subtitle, index }) => {
  return (
    <AccordionItem value={`${index}`}>
      <AccordionTrigger>{title}</AccordionTrigger>
      <AccordionContent>{subtitle}</AccordionContent>
    </AccordionItem>
  );
};

export default FaqAccordion;
