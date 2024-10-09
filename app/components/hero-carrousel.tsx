"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useCidades } from "@/hooks/useCidades";
import { cn } from "@/lib/utils";
import { Carrosel } from "@/types/banners";
import { images } from "@/utils/images";
import { gql, useQuery } from "@apollo/client";
import Autoplay from "embla-carousel-autoplay";
import { useEffect, useRef, useState } from "react";

type HeroCarrouselProps = {
  hiddenOnMobile?: boolean;
  Carrousel: Carrosel[];
};

const queryCarrousel = gql`
  query CarroselSemCidade($slug: String!) {
    carrosel(filter: { cidades: { cidades_id: { slug: { _eq: $slug } } } }) {
      id
      status
      user_created
      date_created
      user_updated
      date_updated
      cidades {
        cidades_id {
          id
        }
      }
      banner {
        id
      }
      banner_mobile {
        id
      }
    }
  }
`;

export function HeroCarrousel({
  hiddenOnMobile = true,
  Carrousel,
}: HeroCarrouselProps) {
  const { cidade } = useCidades();

  const { data, observable } = useQuery(queryCarrousel, {
    variables: {
      slug: cidade?.slug,
    },
    skip: !cidade,
  });

  const plugin = useRef(Autoplay({ delay: 5000, stopOnInteraction: false }));

  const [allCarrousel, setAllCarrousel] = useState<Carrosel[]>([]);

  useEffect(() => {
    setAllCarrousel(Carrousel);
  }, [Carrousel]);

  useEffect(() => {
    if (data) {
      setAllCarrousel([...Carrousel, ...data.carrosel]);
    }
  }, [Carrousel, data]);

  useEffect(() => {
    if (cidade) {
      observable.refetch({
        slug: cidade.slug,
      });
    }
  }, [cidade, observable]);

  if (Carrousel.length === 0) return null;

  return (
    <Carousel
      opts={{
        loop: true,
      }}
      className="w-full shadow-xl"
      plugins={[plugin.current]}
      onMouseEnter={plugin.current.stop}
      onMouseLeave={() => plugin.current.play()}
    >
      <CarouselContent>
        {allCarrousel.map((src, index) => (
          <CarouselItem key={index}>
            <div className="relative w-full h-[400px] md:h-full overflow-hidden">
              <picture>
                {src.banner_mobile && (
                  <source
                    media="(max-width: 767px)"
                    srcSet={
                      images(
                        "https://cms.mxfibra.com",
                        src.banner_mobile.id || ""
                      ).url
                    }
                  />
                )}
                <source
                  media="(min-width: 768px)"
                  srcSet={images("https://cms.mxfibra.com", src.banner.id).url}
                />
                <img
                  src={images("https://cms.mxfibra.com", src.banner.id).url}
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
          "absolute left-5 top-1/2 transform -translate-y-1/2 z-0 ",
          hiddenOnMobile ? "hidden lg:flex" : ""
        )}
      />
      <CarouselNext
        className={cn(
          "absolute right-5 top-1/2 transform -translate-y-1/2 z-0 ",
          hiddenOnMobile ? "hidden lg:flex" : ""
        )}
      />
    </Carousel>
  );
}
