import { endpoint } from "@/constants/endpoint";
import request, { gql } from "graphql-request";
import { QuemSomosData, SectionInstitucional } from "./section";

async function getInformationsAbout() {
  const empresaQuery = gql`
    query {
      quemsomos {
        quem_somos
        historia_da_empresa
        missao
        visao
         imagem{
            id
        }
        diferencial
        nossos_valores {
          valores_id {
            descricao
            icone
            valor
          }
        }
      }
    }
  `;

  const data_carrosel: { quemsomos: QuemSomosData } = await request(
    `${endpoint}/graphql`,
    empresaQuery
  );

  return data_carrosel;
}

export default async function Institucional() {
  const { quemsomos } = await getInformationsAbout();

  return <SectionInstitucional data={quemsomos} />;
}
