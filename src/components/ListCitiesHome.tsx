'use client'

import { Cidade } from "@/types/cidades";
import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";
import Link from "next/link";
import { useState } from "react";






export function ListCitiesHome({ data }: { data: { cidades: Cidade[] } }) {

const [filteredCities, setFilteredCities] = useState(data.cidades)






const filterCities = (value: string) => {
    const filtered = data.cidades.filter(city => city.nome.toLowerCase().includes(value.toLowerCase()))
    setFilteredCities(filtered)
    

    if(value === ''){
        setFilteredCities(data.cidades)
    }
}



    return (
        <section className="space-y-6">
            <form className="space-y-3 flex items-center m-0 gap-4">
                <MagnifyingGlassIcon className="h-8 text-sm mt-2 text-white" />
                <input
                    onChange={e => filterCities(e.target.value)}
                    className="h-14 m-0 w-full bg-transparent border-b-2 border-gray-300 outline-none text-white placeholder:text-gray-200/50 placeholder:font-thin transition-all duration-150 text-2xl" placeholder="Escolha sua cidade" autoFocus />
            </form>

            <ul className="ml-10 space-y-5 flex-grow max-h-80 overflow-y-auto scrollBarCities">
                {filteredCities.map((cidade, index) => (
                    <li key={index} className="flex items-center space-x-4">
                        <Link href={`${cidade.slug}/para-voce`}>
                            <p className="text-2xl text-gray-300 hover:text-white cursor-pointer transition-all duration-200 hover:font-normal font-extralight">{cidade.nome} - {cidade.estado.Sigla}</p>
                        </Link>
                    </li>
                ))}
            </ul>
        </section>


    )
}