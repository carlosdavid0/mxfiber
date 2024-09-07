"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";
import Autoplay from "embla-carousel-autoplay";
import React from "react";

const images = {
  desktop: [
    "https://res.cloudinary.com/dsolucoes/image/upload/v1725668930/mxfibra/h3d7wjakc9h4w7ffaybu.png",
    "https://res.cloudinary.com/dsolucoes/image/upload/v1725668930/mxfibra/gyqb7gebizk5bjuuoyuj.png",
    "https://res.cloudinary.com/dsolucoes/image/upload/v1725668930/mxfibra/y4lvg7audwyghsuhsxtl.png",
  ],
  mobile: [
    "https://res.cloudinary.com/dsolucoes/image/upload/v1725669043/mxfibra/ncecida98oepg7cbzzmi.png",
    "https://res.cloudinary.com/dsolucoes/image/upload/v1725669043/mxfibra/ltjwkpvmw3yzhhbuuyka.png",
    "https://res.cloudinary.com/dsolucoes/image/upload/v1725669043/mxfibra/cthatnfyi7mfflw6pvd2.png",
  ],
};
type HeroCarrouselProps = {
  hiddenOnMobile?: boolean;
};

export function HeroCarrousel({ hiddenOnMobile = true }: HeroCarrouselProps) {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: false })
  );
  return (
    <Carousel
      className="w-full shadow-xl"
      plugins={[plugin.current]}
      onMouseEnter={plugin.current.stop}
      onMouseLeave={() => plugin.current.play()}
    >
      <CarouselContent>
        {images.desktop.map((src, index) => (
          <CarouselItem key={index}>
            <div className="relative w-full h-[400px] md:h-full overflow-hidden">
              <picture>
                <source
                  media="(max-width: 767px)"
                  srcSet={images.mobile[index]}
                />
                <source media="(min-width: 768px)" srcSet={src} />
                <img
                  src={src}
                  alt={`Imagem ${index + 1}`}
                  className="object-cover w-full h-full max-w-full"
                  style={{ aspectRatio: "auto" }} // Ajuste a razão de aspecto conforme necessário
                />
              </picture>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious
        className={cn(
          "absolute left-5 top-1/2 transform -translate-y-1/2 z-10 ",
          hiddenOnMobile ? "hidden lg:flex" : ""
        )}
      />
      <CarouselNext
        className={cn(
          "absolute right-5 top-1/2 transform -translate-y-1/2 z-10 ",
          hiddenOnMobile ? "hidden lg:flex" : ""
        )}
      />
    </Carousel>
  );
}
