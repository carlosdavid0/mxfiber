import { Metadata } from "next";
import { Cidade } from "@/types/cidades";
import Image from "next/image";
import logo from "@/assets/logo.webp";
import { fetchData } from "@/utils/fetch";
import { ListCities } from "@/components/cidades/list-cities";

export const metadata: Metadata = {
  title: "MX Fibra",
  description: "",
};

const getCities = async (): Promise<Cidade[]> => {
  const response: Promise<Cidade[]> = await fetchData({
    path: "/items/cidades?fields[]=estado.nome&fields[]=estado.id&fields[]=nome&fields[]=status&fields[]=id&sort[]=sort&fields[]=estado.sigla&fields[]=slug",
  });
  return response;
};

export default async function AuthenticationPage() {
  const cities = await getCities();

  return (
    <div className="bg-[#105BCF] h-screen ">
      <section className="lg:mx-auto max-w-screen-md mx-10">
        <header className="w-full py-10 flex flex-col gap-10 items-start">
          <Image src={logo} alt="Logo MX" className="h-20 w-auto" />
        </header>
        <ListCities cities={cities} />
      </section>
    </div>
  );
}
