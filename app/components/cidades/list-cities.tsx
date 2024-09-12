"use client";
import { Cidade } from "@/types/cidades";
import { ScrollArea } from "@radix-ui/react-scroll-area";
import { SearchIcon } from "lucide-react";
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
        className="container lg:mx-auto lg:max-h-[600px] max-h-[500px] overflow-y-auto space-y-5 mt-5"
        id="scroll-cities"
      >
        {filteredCities.map((item, index) => (
          <li
            key={index}
            className="flex items-center space-x-4 justify-between"
          >
            <Link href={`${item.slug}/para-voce`}>
              <p className="text-2xl text-gray-300 hover:text-white cursor-pointer transition-all duration-200 font-thin">
                {item.nome} - {item.estado.sigla}
              </p>
            </Link>
          </li>
        ))}
      </ScrollArea>
    </div>
  );
}
