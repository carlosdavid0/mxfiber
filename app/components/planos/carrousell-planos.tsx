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

export function CarouselSize() {
  const d = {
    desktop: 5,
    tablet: 3,
    mobile: 1,
  };
  return (
    <Carousel
      opts={{
        align: "start",
        loop: true,
        slidesToScroll: d as any,
      }}
      className="w-full max-w-full"
    >
      <CarouselContent>
        {Array.from({ length: 10 }).map((_, index) => (
          <CarouselItem
            key={index}
            className="sm:basis-1/2 md:basis-1/3 lg:basis-1/4 xl:basis-1/5"
          >
            <CardPlanos />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
