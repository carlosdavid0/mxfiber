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
    <main className="bg-[#105bcf] min-h-screen ">
      <div className="lg:px-6 px-3 py-7 space-y-5 lg:col-span-2 mx-auto container max-w-screen-lg">
        <Image src={logo} alt="MXFiber" className="w-32" />
        <section>
          <ListCities cities={cities} />
        </section>
      </div>
    </main>
  );
}
