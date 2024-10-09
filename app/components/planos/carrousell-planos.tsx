/* eslint-disable @typescript-eslint/no-explicit-any */

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";
import { Empresa } from "@/types/empresa";
import { Plano } from "@/types/planos";
import CardPlanos from "./card-planos";

type planosCarrousel = {
  data: Plano[];
  empresa: Empresa;
  isLoading?: boolean;
};

export function CarouselPlanos({ data, empresa, isLoading }: planosCarrousel) {
  if (isLoading && !data) {
    return (
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="relative w-full md:px-4 lg:px-6 xl:px-8"
      >
        <CarouselContent>
          {Array.from({ length: 3 }).map((_, index) => (
            <CarouselItem
              key={index}
              className="basis-full sm:basis-1/2 md:basis-1/2 lg:basis-1/3 xl:basis-1/3"
            >
              <CardPlanos
                data={{} as Plano}
                variant={"primary"}
                empresa={empresa}
                isLoading={isLoading}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    );
  }

  return (
    <Carousel
      opts={{
        align: "start",
        loop: true,
      }}
      className="relative w-full md:px-4 lg:px-6 xl:px-8"
    >
      <CarouselContent>
        {data?.map((item, index) => (
          <CarouselItem
            key={index}
            className={cn(
              data.length >= 4 &&
                "basis-full sm:basis-1/2 md:basis-1/2 lg:basis-1/3 xl:basis-1/4",
              data.length === 3 &&
                "basis-full sm:basis-1/2 md:basis-1/2 lg:basis-1/3 xl:basis-1/3",
              data.length === 2 && "basis-full sm:basis-1/2 md:basis-1/2",
              data.length === 1 &&
                "basis-full sm:basis-1/2 md:basis-1/2 lg:basis-1/2 xl:basis-1/2"
            )}
          >
            <CardPlanos
              empresa={empresa}
              data={item}
              variant={item.recomendado ? "primary" : "secondary"}
            />
          </CarouselItem>
        ))}
      </CarouselContent>

      {/* <CarouselPrevious
        className={cn(
          "absolute top-1/2 -translate-y-1/2 left-2 z-0 bg-blue-500 hover:bg-blue-600 hover:text-white text-gray-50 rounded-full p-2"
        )}
      />
      <CarouselNext
        className={cn(
          "absolute top-1/2 -translate-y-1/2 right-5 z-0 bg-blue-500 hover:bg-blue-600 hover:text-white text-gray-50 rounded-full p-2"
        )}
      /> */}
    </Carousel>
  );
}
