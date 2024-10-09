/* eslint-disable @typescript-eslint/no-explicit-any */

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Empresa } from "@/types/empresa";
import { SvaGraphq } from ".";
import { CardOtts } from "./cardOtts";

type CarouselPlanosProps = {
  data: SvaGraphq[];
  empresa: Empresa;
};

export function CarouselDestaquesOTT({ data, empresa }: CarouselPlanosProps) {
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
            <CardOtts data={item} empresa={empresa} />
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
