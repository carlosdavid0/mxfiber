/* eslint-disable @typescript-eslint/no-explicit-any */
import * as React from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { CardOtts, Service } from "./cardOtts";
import { cn } from "@/lib/utils";

type CarouselPlanosProps = {
  data: Service[];
};

export function CarouselDestaquesOTT({ data }: CarouselPlanosProps) {
  return (
    <Carousel
      opts={{
        align: "start",
        loop: false,
      }}
      className="relative w-full md:px-4 lg:px-6 xl:px-8"
    >
      <CarouselContent>
        {data.map((item, index) => (
          <CarouselItem
            key={index}
            className="basis-full sm:basis-1/2 md:basis-1/2 lg:basis-1/3 h-full"
          >
            <CardOtts data={item} />
          </CarouselItem>
        ))}
      </CarouselContent>

      {/* <CarouselPrevious
        className={cn(
          "absolute top-1/2 -translate-y-1/2 left-3 z-0 bg-blue-500 hover:bg-blue-600 hover:text-white text-gray-50 rounded-full p-2"
        )}
      />
      <CarouselNext
        className={cn(
          "absolute top-1/2 -translate-y-1/2 right-3 z-0 bg-blue-500 hover:bg-blue-600 hover:text-white text-gray-50 rounded-full p-2"
        )}
      /> */}
    </Carousel>
  );
}
