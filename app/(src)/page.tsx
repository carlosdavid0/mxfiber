import { HeroSky } from "@/components/otts/heroSky";
import { HeroPlanos } from "@/components/planos/hero";
import { endpoint } from "@/constants/endpoint";
import { cn } from "@/lib/utils";
import { Empresa } from "@/types/empresa";
import request, { gql } from "graphql-request";

import { HeroCarrousel } from "@/components/hero-carrousel";
import { HeroOTTSDestaque } from "@/components/otts/HeroDestaques/index";
import { Carrosel } from "@/types/banners";

async function getEmpresaInfo() {
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
        sobre_a_empresa
        google_play
        apple_store
        nome_do_app
      }
    }
  `;

  const data_empresa: { empresa: Empresa } = await request(
    `${`${endpoint}/graphql`}/graphql`,
    empresaQuery
  );

  return data_empresa;
}
async function getCarrouselBase() {
  const empresaQuery = gql`
    query CarroselSemCidade {
      carrosel(filter: { cidades: { cidades_id: { id: { _eq: null } } } }) {
        id
        status
        user_created
        date_created
        user_updated
        date_updated
        cidades {
          cidades_id {
            id
          }
        }
        banner {
          id
        }
        banner_mobile {
          id
        }
      }
    }
  `;

  const data_carrosel: { carrosel: Carrosel[] } = await request(
    `${`${endpoint}/graphql`}/graphql`,
    empresaQuery
  );

  return data_carrosel;
}

async function Page() {
  const { empresa } = await getEmpresaInfo();
  const { carrosel } = await getCarrouselBase();

  return (
    <>
      <HeroCarrousel Carrousel={carrosel} hiddenOnMobile />

      <div className={cn("py-6 lg:mx-auto mx-2 max-w-screen-xl")}>
        <HeroPlanos empresa={empresa as Empresa} />
      </div>

      <HeroSky empresa={empresa} />
      <HeroOTTSDestaque empresa={empresa} />
    </>
  );
}

export default Page;
