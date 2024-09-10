/* eslint-disable @typescript-eslint/no-explicit-any */
import * as React from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import CardPlanos from "./card-planos";
import { cn } from "@/lib/utils";

export function CarouselPlanos() {
  return (
    <Carousel
      opts={{
        align: "start",
        loop: true,
      }}
      className="relative w-full md:px-4 lg:px-6 xl:px-8"
    >
      <CarouselContent>
        {Array.from({ length: 10 }).map((_, index) => (
          <CarouselItem
            key={index}
            className="basis-full sm:basis-1/2 md:basis-1/2 lg:basis-1/3 xl:basis-1/4"
          >
            <CardPlanos variant={index % 2 === 0 ? "primary" : "secondary"} />
          </CarouselItem>
        ))}
      </CarouselContent>

      <CarouselPrevious
        className={cn(
          "absolute top-1/2 -translate-y-1/2 left-2 z-0 bg-blue-500 hover:bg-blue-600 hover:text-white text-gray-50 rounded-full p-2"
        )}
      />
      <CarouselNext
        className={cn(
          "absolute top-1/2 -translate-y-1/2 right-5 z-0 bg-blue-500 hover:bg-blue-600 hover:text-white text-gray-50 rounded-full p-2"
        )}
      />
    </Carousel>
  );
}
