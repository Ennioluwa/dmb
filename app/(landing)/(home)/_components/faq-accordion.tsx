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
}

const FaqAccordion: FC<FaqAccordionProps> = ({ title, subtitle }) => {
  return (
    <AccordionItem value={title}>
      <AccordionTrigger>{title}</AccordionTrigger>
      <AccordionContent>{subtitle}</AccordionContent>
    </AccordionItem>
  );
};

export default FaqAccordion;
