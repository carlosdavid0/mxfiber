import { Empresa } from "@/types/empresa";
import { Sva } from "@/types/planos";
import { images } from "@/utils/images";
import { MessageCircle } from "lucide-react";
import Link from "next/link";

export type Service = {
  name: string;
  image: string;
  description: string;
  color: string;
};

export type ottData = {
  data: Sva;
  empresa: Empresa;
};

export function CardOtts({ data, empresa }: ottData) {
  return (
    <div
      key={data.sva_id.nome}
      className="flex flex-col rounded-lg overflow-hidden shadow-lg "
    >
      {/* <div
        className="h-48 bg-cover bg-center"
        // style={{ backgroundImage: `url(${data.image})` }}
      /> */}
      {/* {flex flex-col justify-between p-4 bg-white flex-grow min-h-24} */}
      <div className="flex flex-col p-4 justify-between min-h-72 bg-white flex-grow">
        <div className="space-y-5 h-f">
          <img
            src={
              images(
                "https://mx-directus.dsolucoes.com",
                data.sva_id.icone.id || ""
              ).url
            }
            alt=""
            className="w-36 min-h-20"
          />
          <p className="text-sm text-gray-600 line-clamp-3 mt-10">
            {data.sva_id.descricao}
          </p>
        </div>
        <Link href={empresa.whatsapp}>
          <button className="flex items-center justify-center w-full rounded-full bg-green-500 px-4 py-2 text-white hover:bg-green-600 transition-colors mt-4">
            <span>conhecer mais</span>
            <MessageCircle className="ml-2 h-5 w-5" />
          </button>
        </Link>
      </div>
    </div>
  );
}
