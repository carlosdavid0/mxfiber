'use client'

import { Cidade } from "@/types/cidades";
import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";
import Link from "next/link";
import { useState } from "react";


export function ListCitiesHome({ data }: { data: { cidades: Cidade[] } }) {

    const [filteredCities, setFilteredCities] = useState(data.cidades)
    const [citieSelected, setCitieSelected] = useState<Cidade | null>(null)


    const filterCities = (value: string) => {
        const filtered = data.cidades.filter(city => city.nome.toLowerCase().includes(value.toLowerCase()))
        setFilteredCities(filtered)


        if (value === '') {
            setFilteredCities(data.cidades)
        }
    }



    return (
        <section className="space-y-6 max-h-screen h-full">
            <form className="space-y-3 flex items-center m-0 ">
                <input
                    onChange={e => filterCities(e.target.value)}
                    
                    placeholder="Escolha sua cidade"
                    autoFocus
                    className="bg-transparent w-full text-gray-200 border-b border-mx-green-300/80 border-t-0 border-l-0 border-r-0  px-2 py-3 focus:outline-none focus:border-mx-green-500 focus:ring-b-2 focus:ring-current focus:ring-mx-green-300 mt-5 placeholder:text-gray-300 placeholder-opacity-80 transition-all duration-200"
                    
                />
                <MagnifyingGlassIcon className="h-8 w-8 text-mx-green-400 -ml-10" />
            </form>



            <ul className=" space-y-8 flex-grow  overflow-y-auto scrollBarCities max-h-[10%] h-full">
                {filteredCities.map((cidade, index) => (
                    <li key={index} className="flex items-center space-x-4 justify-between">
                        <Link href={`${cidade.slug}/para-voce`} onClick={() => setCitieSelected(cidade)}>
                            <p className="text-2xl text-gray-300 hover:text-white cursor-pointer transition-all duration-200 font-thin">{cidade.nome} - {cidade.estado.Sigla}</p>
                        </Link>
                    </li>
                ))}
            </ul>
        </section>


    )
}