import { Metadata } from "next";
import Link from "next/link";

import { cn } from "@/lib/utils";
import { ScrollArea } from "../components/ui/scroll-area";
import { ChevronRightIcon, MapPinIcon } from "lucide-react";
import { Cidade } from "@/types/cidades";
import Image from "next/image";
import logo from "@/assets/logo.webp";
import { fetchData } from "@/utils/fetch";

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
        <ScrollArea
          className="container lg:mx-auto lg:max-h-[600px] max-h-[500px] overflow-y-auto"
          id="scroll-cities"
        >
          {cities?.map((item, index) => (
            <Link
              key={item.id}
              href={`/${item.slug}/para-voce`}
              prefetch={false}
            >
              <div
                className={cn(
                  "flex items-center justify-between  py-3  border-white/10 transition-all my-2 hover:bg-blue-300 hover:border-white/20 rounded-md px-2 hover:shadow-md",
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
      </section>
    </div>
  );
}
