import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";
import { HelpCircle } from "lucide-react";
import { Button } from "./ui/button";
import { Faq } from "@/types/faq";

type data = {
  data: Faq[];
};

export function ImprovedFAQSection({ data }: data) {
  return (
    <div className="bg-blue-600">
      <section
        className={cn(
          "max-w-screen-xl mx-auto grid",
          "grid-cols-1 lg:grid-cols-3",
          "lg:py-10  "
        )}
      >
        <div className="space-y-6 px-4 lg:max-w-lg py-5 lg:py-0">
          <HelpCircle className="h-12 w-12 text-blue-200" />
          <h2 className="text-2xl font-bold text-white md:text-xl lg:text-2xl">
            Tire suas dúvidas sobre a internet MX Fibra
          </h2>

          <Button className="h-16 lg:w-full w-fit rounded-full bg-green-600 hover:bg-green-700">
            Assine pelo WhatsApp
          </Button>
        </div>
        <div className="lg:px-8 col-span-2">
          <Accordion type="single" collapsible className="w-full  ">
            {data?.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="mb-4"
              >
                <AccordionTrigger className="text-left text-lg hover:no-underline bg-transparent text-white rounded-lg px-4 py-2 transition-all duration-200 ease-in-out  hover:bg-blue-500">
                  {faq.pergunta}
                </AccordionTrigger>
                <AccordionContent className="overflow-hidden transition-all duration-200 ease-in-out data-[state=open]:animate-accordion-down data-[state=closed]:animate-accordion-up">
                  <div className="bg-transparent rounded-b-lg px-4 py-3 shadow-inner">
                    <p className="text-white/90 text-lg font-light">
                      {faq.resposta}
                    </p>
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
    </div>
  );
}
