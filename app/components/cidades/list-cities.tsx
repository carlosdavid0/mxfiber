"use client";
import { cn } from "@/lib/utils";
import { Cidade } from "@/types/cidades";
import { ScrollArea } from "@radix-ui/react-scroll-area";
import { ChevronRightIcon, MapPinIcon, SearchIcon } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

type props = {
  cities: Cidade[];
};

export function ListCities({ cities }: props) {
  const [search, setSearch] = useState("");

  const filteredCities = cities.filter((city) =>
    city.nome.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <div className="w-full relative">
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Buscar cidade"
          className="mb-4 w-full p-2 outline-none border-b border-gray-300 bg-transparent *:
         focus:ring-0 focus:border-lime-500 transition-all  text-white placeholder-white
        "
        />
        <SearchIcon
          size={24}
          className="absolute right-2 top-2 text-white/60"
        />
      </div>
      <ScrollArea
        className="container lg:mx-auto lg:max-h-[600px] max-h-[500px] overflow-y-auto"
        id="scroll-cities"
      >
        {filteredCities.map((item, index) => (
          <Link key={item.id} href={`/${item.slug}/para-voce`} prefetch={false}>
            <div
              className={cn(
                "flex items-center justify-between py-3 border-white/10 transition-all my-2 hover:bg-blue-500 rounded-md px-2",
                index === 0 && "border-0"
              )}
            >
              <div className="flex items-center gap-3">
                <MapPinIcon size={24} className="text-white/60" />
                <span className="text-white text-xl font-medium">
                  {item.nome} - {item.estado.sigla}
                </span>
              </div>
              <ChevronRightIcon size={24} />
            </div>
          </Link>
        ))}
      </ScrollArea>
    </div>
  );
}
