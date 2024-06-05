"use client"
import { ListCitiesHome } from "@/components/ui/ListCitiesHome";
import { getCities } from "@/services/getCities";
import { Cidade } from "@/types/cidades";
import Image from "next/image";
import { useEffect, useState } from "react";
import Logo from "../../public/logo.png";




export default function Home() {
  const [cities, setCities] = useState<Cidade[]>([]);

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    const cities = await getCities();
    setCities(cities.cidades);
  }

  return (
    <main className="bg-mx-blue-800 min-h-screen ">
      <div className="lg:px-6 px-3 py-7 space-y-5 lg:col-span-2 mx-auto container max-w-screen-lg">
        <Image src={Logo} alt="MXFiber" className="w-32" />
        <section>
          <ListCitiesHome
            data={{
              cidades: cities,
            }}
          />
        </section>
      </div>
    </main>
  );
}
