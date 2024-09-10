import { ImprovedFAQSection } from "@/components/faq";
import HeroDestaque from "@/components/otts/HeroDestaques/";
import { HeroSky } from "@/components/otts/heroSky";
import { HeroPlanos } from "@/components/planos/hero";
import { Empresa } from "@/types/empresa";
import { Faq } from "@/types/faq";
import { Plano } from "@/types/planos";
import request, { gql } from "graphql-request";

type pageProps = {
  params: {
    cidade: string;
    tipo: "para-voce" | "para-empresas";
  };
};

async function getPage(citie: string, tipo: string) {
  const endpoint = `${process.env.BASE_URL}/graphql`;

  const citiesQuery = gql`
     query Planos {
  planos(filter: { tipo: { _eq: "${tipo}" }}) {
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
        sort
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
    cidades(filter: { cidades_id: { slug: { _eq: "${citie}" }}}) {
      cidades_id {
        id
        status
        sort
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
        sort
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

  const data_planos: { planos: Plano[] } = await request(endpoint, citiesQuery);

  return data_planos.planos;
}

async function getFAQ() {
  const endpoint = `${process.env.BASE_URL}/graphql`;

  const queryFaQ = gql`
    query Faq {
      faq {
        id
        status
        sort
        user_created
        date_created
        user_updated
        date_updated
        pergunta
        resposta
      }
    }
  `;

  const data: { faq: Faq[] } = await request(endpoint, queryFaQ);
  return data;
}

async function getEmpresa() {
  const endpoint = `${process.env.BASE_URL}/graphql`;

  const empresaQuery = gql`
    query Empresa {
      empresa {
        id
        status
        user_created
        date_created
        user_updated
        date_updated
        nome
        privacidade
        whatsapp
        instagram
        facebook
        google_play
        apple_store
        nome_do_app
      }
    }
  `;
  const data_empresa: { empresa: Empresa } = await request(
    endpoint,
    empresaQuery
  );

  return data_empresa.empresa;
}

async function Page({ params: { cidade, tipo } }: pageProps) {
  const planos = await getPage(cidade, tipo);
  const empresa = await getEmpresa();
  const faq = await getFAQ();

  return (
    <>
      <div className="py-6 max-w-screen-xl lg:mx-auto mx-2">
        {planos.length > 0 && <HeroPlanos empresa={empresa} data={planos} />}
      </div>

      {planos.length > 0 && <HeroSky />}
      {planos.length > 0 && <HeroDestaque planos={planos} />}
      <ImprovedFAQSection data={faq.faq} />
    </>
  );
}

export default Page;
