"use client";
import { useCidades } from "@/hooks/useCidades";
import { cn } from "@/lib/utils";
import { Empresa } from "@/types/empresa";
import { gql, useQuery } from "@apollo/client";
import { Gamepad2, Music, Play, Tv } from "lucide-react";
import { CarouselDestaquesOTT } from "./carrousell";

type Props = {
  empresa: Empresa;
};

const OttsQuery = gql`
  query Planos {
    sva {
      nome
      status
      descricao
      destaque
      icone_dark {
        id
      }
      icone {
        id
      }
    }
  }
`;

export type SvaGraphq = {
  nome: string;
  status: string;
  descricao: string;
  destaque: boolean;
  icone_dark: {
    id: string;
  };
  icone: {
    id: string;
  };
};

type QuerySva = {
  sva: SvaGraphq[];
};

export function HeroOTTSDestaque({ empresa }: Props) {
  const { cidade } = useCidades();

  const { data, loading } = useQuery<QuerySva>(OttsQuery, {
    context: { clientName: "ott" },
    skip: !cidade,
  });

  if (loading) return null;

  return (
    <section
      className={cn(
        "max-w-screen-xl mx-auto grid items-end ",
        "grid-cols-1 lg:grid-cols-3",
        "lg:py-10"
      )}
    >
      <div className="space-y-6 px-4 lg:max-w-sm py-5 lg:py-0">
        <div className="flex space-x-4">
          {[Play, Gamepad2, Music, Tv].map((Icon, index) => (
            <div key={index} className="rounded-full bg-gray-100 p-3">
              <Icon className="h-6 w-6 text-gray-600" />
            </div>
          ))}
        </div>
        <h2 className="text-3xl font-bold text-blue-600 md:text-4xl lg:text-4xl">
          + Entretenimento junto com sua Fibra Internet.
        </h2>
        <p className="text-lg text-gray-600">
          Aqui na MX Fibra, você pode personalizar seu plano: escolha sua
          velocidade e adicione os melhores apps de streaming!
        </p>
      </div>

      <div className="px-4 col-span-2">
        <CarouselDestaquesOTT empresa={empresa} data={data?.sva || []} />
      </div>
    </section>
  );
}
