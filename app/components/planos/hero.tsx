"use client";
import { useCidades } from "@/hooks/useCidades";
import { cn } from "@/lib/utils";
import { Empresa } from "@/types/empresa";
import { Plano } from "@/types/planos";
import { gql, useQuery } from "@apollo/client";
import { useQueryState } from "nuqs";
import { useEffect } from "react";
import { Card, CardHeader, CardTitle } from "../ui/card";
import { CarouselPlanos } from "./carrousell-planos";

type HeroPlanosProps = {
  data?: Plano[];
  empresa: Empresa;
};

const queryPlanos = gql`
  query Planos($tipo: String!, $citie: String!) {
    planos(
      filter: {
        tipo: { _eq: $tipo }
        cidades: { cidades_id: { slug: { _eq: $citie } } }
      }
    ) {
      id
      status
      sort
      user_created
      date_created
      user_updated
      date_updated
      nome
      recomendado
      svas {
        sva_id {
          id
          icone {
            id
            storage
            filename_disk
            filename_download
            title
            type
            folder
            uploaded_by
            created_on
            modified_by
            modified_on
            charset
            filesize
            width
            height
            duration
            embed
            description
            location
            tags
            metadata
            focal_point_x
            focal_point_y
            tus_id
            tus_data
            uploaded_on
          }
          status
          user_created
          date_created
          user_updated
          date_updated
          nome
          descricao
          destaque
          cor_destaque
        }
      }
      cidades {
        cidades_id {
          id
          status
          user_created
          date_created
          user_updated
          nome
          slug
        }
      }
      servicos {
        servicos_id {
          id
          status
          user_created
          date_created
          user_updated
          date_updated
          nome
          icone
        }
      }
    }
  }
`;

type queryPlanos = {
  planos: Plano[];
};

export function HeroPlanos({ empresa }: HeroPlanosProps) {
  const { cidade } = useCidades();

  const [planoType] = useQueryState("planos");

  const { data, loading, observable } = useQuery<queryPlanos>(queryPlanos, {
    variables: {
      tipo: planoType || "para-voce",
      citie: cidade?.slug || "",
    },
    skip: !cidade,
  });

  useEffect(() => {
    if (cidade) {
      observable.refetch({
        tipo: planoType || "para-voce",
        citie: cidade.slug,
      });
    }
  }, [cidade, observable, planoType]);

  return (
    <section>
      <div
        className={cn(
          "w-full mx-auto",
          "transition-all duration-300 ease-in-out"
        )}
      >
        <h1
          className={cn(
            "text-center text-blue-800 space-x-1 mb-5",
            "text-2xl md:text-3xl lg:text-4xl",
            "line-clamp-2"
          )}
        >
          <span>Mais</span>
          <strong>Velocidade</strong>
          <span>de</span>
          <strong>conexão</strong>
          <span>por toda sua</span>
          <strong>{planoType === "para-empresas" ? "empresa" : "casa"}</strong>
        </h1>

        <CarouselPlanos
          empresa={empresa}
          data={data?.planos || []}
          isLoading={loading}
        />

        {!loading && data?.planos?.length === 0 && <NotFoundPlan />}
      </div>
    </section>
  );
}

function NotFoundPlan() {
  return (
    <div className="flex items-center justify-center bg-transparent p-4">
      <Card className="w-full bg-transparent border-0 shadow-none ">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl font-bold">
            Nenhum Plano Encontrado
          </CardTitle>
        </CardHeader>
      </Card>
    </div>
  );
}
