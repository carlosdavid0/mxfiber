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
        <section className="space-y-6">
            <form className="space-y-3 flex items-center m-0 ">
                <input
                    onChange={e => filterCities(e.target.value)}
                    className="bg-transparent  w-full text-gray-200 border-mx-green-300/80 border-2 rounded-md px-2 py-3 focus:outline-none focus:border-mx-green-500 focus:ring-2 focus:ring-mx-green-300 mt-5 placeholder:text-gray-300 placeholder-opacity-80 transition-all duration-200"
                    placeholder="Escolha sua cidade"
                    autoFocus
                />
                <MagnifyingGlassIcon className="h-8 w-8 text-mx-green-400 -ml-10" />
            </form>

            <ul className=" space-y-5 flex-grow lg:h-[300px] md:h-[350px] h-[250px] overflow-y-auto scrollBarCities">
                {filteredCities.map((cidade, index) => (
                    <li key={index} className="flex items-center space-x-4 justify-between">
                        <Link href={`${cidade.slug}/para-voce`} onClick={() => setCitieSelected(cidade)}>
                            <p className="text-2xl text-gray-300 hover:text-white cursor-pointer transition-all duration-200 hover:font-normal font-normal">{cidade.nome} - {cidade.estado.Sigla}</p>
                        </Link>
                        <div>

                            {cidade.nome === citieSelected?.nome && <div className="-ml-10">
                                <div className="loading-container">
                                    <div className="loading-spinner"></div>
                                </div>
                                <span className="sr-only">Loading...</span>
                            </div>
                            }

                        </div>
                    </li>
                ))}
            </ul>
        </section>


    )
}