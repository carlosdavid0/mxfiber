import { Empresa } from "@/types/empresa";
import { images } from "@/utils/images";
import { MessageCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { SvaGraphq } from ".";

export type Service = {
  name: string;
  image: string;
  description: string;
  color: string;
};

export type ottData = {
  data: SvaGraphq;
  empresa: Empresa;
};

export function CardOtts({ data, empresa }: ottData) {
  return (
    <div
      key={data?.nome}
      className="flex flex-col rounded-lg overflow-hidden shadow-lg  select-none"
    >
      <div className="flex flex-col p-4 justify-between min-h- bg-white flex-grow">
        <div className="space-y-5 h-f">
          <Image
            src={images("https://cms.mxfibra.com", data?.icone?.id || "").url}
            alt=""
            width={500}
            height={500}
            className="w-full h-24 object-contain"
          />
          <h1 className="text-xl prose">{data?.nome}</h1>
          <p className="text-sm prose line-clamp-3 mt-10">{data?.descricao}</p>
        </div>
        <Link
          href={`
            ${empresa.whatsapp}?text=Olá, gostaria de saber mais sobre o serviço ${data?.nome}
          
          `}
        >
          <button className="flex items-center justify-center w-full rounded-full bg-green-500 px-4 py-2 text-white hover:bg-green-600 transition-colors mt-4">
            <span>conhecer mais</span>
            <MessageCircle className="ml-2 h-5 w-5" />
          </button>
        </Link>
      </div>
    </div>
  );
}
