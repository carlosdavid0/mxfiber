import { Cidade } from "@/types/cidades";
import axios from 'axios';
import request, { gql } from "graphql-request";
export async function getCities(): Promise<{ cidades: Cidade[] }> {

  try {
   const { data } = await axios.get<Cidade[]>(`${process.env.NEXT_PUBLIC_SITE_NAME}/api/cidades`)
    return { cidades: data }

  } catch (error) {
    console.log(error);
    
    return { cidades: [] }
  }
}

export async function getCityData(slug: string) {

  const endpoint = `${process.env.NEXT_PUBLIC_API_URL}/graphql`;
  const query = gql`
    query {
        cidades(filter: {status: {_eq: "published"}, slug: {_eq: "${slug}"}}, sort: "nome") {
          nome
          slug
          estado {
            nome
            Sigla
          }
        }
      } 
`;

  const data: { cidades: Cidade[] } = await request(endpoint, query);

  return {
    cidade: data?.cidades[0]
  }

}