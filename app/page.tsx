import { Metadata } from "next";
import Link from "next/link";

import { cn } from "@/lib/utils";
import { ScrollArea } from "./components/ui/scroll-area";
import { ChevronRightIcon, MapPinIcon } from "lucide-react";

export const metadata: Metadata = {
  title: "MX Fibra",
  description: "",
};

export default function AuthenticationPage() {
  return (
    <div className="bg-blue-500 h-screen ">
      <section className="lg:mx-auto max-w-screen-md mx-10">
        <header className="w-full py-10 flex flex-col gap-10 items-start">
          <img
            src="https://www.mxfibra.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.c61d9a9b.png&w=750&q=75"
            alt="Logo MX"
            className="h-20 w-auto"
          />

          <input
            type="text"
            placeholder="Escolha sua cidade"
            className={cn(
              "w-full px-0 py-2 pr-10 border-b bg-transparent text-white ring-0 outline-none focus:border-green-400 transition-all placeholder:text-white/60"
            )}
          />
        </header>
        <ScrollArea
          className="container lg:mx-auto lg:max-h-[600px] max-h-[500px] 
        
          overflow-y-auto"
          id="scroll-cities"
        >
          {Array.from({ length: 30 }).map((_, index) => (
            <Link key={index} href="/cidade/cidade" prefetch={false}>
              <div
                className={cn(
                  "flex items-center justify-between  py-3  border-white/10 transition-all my-2 hover:bg-blue-300 hover:border-white/20 rounded-md px-2 hover:shadow-md",
                  index === 0 ? "border-0" : ""
                )}
              >
                <div className="flex items-center gap-3">
                  <MapPinIcon size={24} className="text-white/60" />
                  <span className="text-white text-xl font-medium">
                    City Name
                  </span>
                </div>
                <ChevronRightIcon size={24} />
              </div>
            </Link>
          ))}
        </ScrollArea>
      </section>
    </div>
  );
}
