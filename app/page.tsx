import logo from "@/assets/logo.webp";
import { ListCities } from "@/components/cidades/list-cities";
import { Cidade } from "@/types/cidades";
import { fetchData } from "@/utils/fetch";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "MX Fibra",
  description: "",
};

const getCities = async (): Promise<Cidade[]> => {
  try {
    const response: Promise<Cidade[]> = await fetchData({
      path: "/items/cidades?fields[]=estado.nome&fields[]=estado.id&fields[]=nome&fields[]=status&fields[]=id&sort[]=sort&fields[]=estado.sigla&fields[]=slug",
    });
    return response;
  } catch (e) {
    console.log(e);
    return [];
  }
};

export default async function AuthenticationPage() {
  const cities = await getCities();

  return (
    <div className="flex flex-col min-h-screen bg-[#105bcf]">
      {/* Main content area */}
      <main className="flex-grow">
        <div className="lg:px-6 px-3 py-7 space-y-5 lg:col-span-2 mx-auto container max-w-screen-lg">
          <Image src={logo} alt="MXFiber" className="w-32" />
          <section>
            <ListCities cities={cities} />
          </section>
        </div>
      </main>

      {/* Sticky footer */}
      <footer className=" text-white text-center py-5 mt-auto flex lg:flex-row gap-5 flex-col lg:items-center lg:justify-center items-start justify-start mx-4 ">
        <p>IMAX SOLUÇÕES E SERVIÇOS-LTDA</p>
        <p>
          <strong>CNPJ:</strong> 18.381.644/0001-32
        </p>
        <p>
          <strong>E-mail:</strong>{" "}
          <a href="mailto:suporte@mxfibra.net.br" className="underline">
            suporte@mxfibra.net.br
          </a>
        </p>
      </footer>
    </div>
  );
}
