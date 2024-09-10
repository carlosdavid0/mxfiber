import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";
import { FileQuestion, HelpCircle } from "lucide-react";
import { Button } from "./ui/button";

const faqs = [
  {
    question: "What is Vercel?",
    answer:
      "Vercel is a cloud platform for static sites and Serverless Functions that fits perfectly with your workflow. It enables developers to host Jamstack websites and web services that deploy instantly, scale automatically, and requires no supervision, all with no configuration.",
  },
  {
    question: "How do I deploy my Next.js app on Vercel?",
    answer:
      "To deploy your Next.js app on Vercel, you can connect your GitHub repository to Vercel, and it will automatically deploy your app whenever you push changes. Alternatively, you can use the Vercel CLI to deploy from your local machine.",
  },
  {
    question: "What are the benefits of using Vercel?",
    answer:
      "Vercel offers numerous benefits including automatic deployments, serverless functions, edge caching, custom domains, and seamless integration with popular frameworks like Next.js, React, Vue, and Angular.",
  },
  {
    question: "Is Vercel free to use?",
    answer:
      "Yes, Vercel offers a free tier that includes personal projects, hobby sites, and experiments. They also offer paid plans for teams and businesses that require more resources and features.",
  },
  {
    question: "Can I use my own custom domain with Vercel?",
    answer:
      "Yes, you can use your own custom domain with Vercel. They provide easy-to-follow instructions for setting up your domain and even offer automatic HTTPS certificate provisioning.",
  },
];

export function ImprovedFAQSection() {
  return (
    <section
      className={cn(
        "max-w-screen-xl mx-auto grid",
        "grid-cols-1 lg:grid-cols-3",
        "lg:py-4"
      )}
    >
      <div className="space-y-6 px-4 lg:max-w-lg py-5 lg:py-0">
        <HelpCircle className="h-12 w-12 text-blue-600" />
        <h2 className="text-2xl font-bold text-blue-600 md:text-xl lg:text-2xl">
          Tire suas dúvidas sobre a internet MX Fibra
        </h2>

        <Button className="h-16 lg:w-full w-fit rounded-full bg-green-600 hover:bg-green-700">
          Assine pelo WhatsApp
        </Button>
      </div>
      <div className="lg:px-8 col-span-2">
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="mb-4">
              <AccordionTrigger className="text-left text-lg hover:no-underline bg-transparent text-blue-600 rounded-lg px-4 py-2 transition-all duration-200 ease-in-out hover:bg-gray-200">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="overflow-hidden transition-all duration-200 ease-in-out data-[state=open]:animate-accordion-down data-[state=closed]:animate-accordion-up">
                <div className="bg-transparent rounded-b-lg px-4 py-3 shadow-inner">
                  <p className="text-gray-600 text-lg font-light">
                    {faq.answer}
                  </p>
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
