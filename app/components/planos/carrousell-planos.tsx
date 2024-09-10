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
import { Plano } from "@/types/planos";
import { Empresa } from "@/types/empresa";

type planosCarrousel = {
  data: Plano[];
  empresa: Empresa;
};

export function CarouselPlanos({ data, empresa }: planosCarrousel) {
  return (
    <Carousel
      opts={{
        align: "start",
        loop: true,
      }}
      className="relative w-full md:px-4 lg:px-6 xl:px-8"
    >
      <CarouselContent>
        {data.map((item, index) => (
          <CarouselItem
            key={index}
            className="basis-full sm:basis-1/2 md:basis-1/2 lg:basis-1/3 xl:basis-1/4"
          >
            <CardPlanos
              empresa={empresa}
              data={item}
              variant={item.recomendado ? "primary" : "secondary"}
            />
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
