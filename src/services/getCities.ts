import { Cidade } from "@/types/cidades";
import request, { gql } from "graphql-request";
import { notFound } from "next/navigation";

export async function getCities(): Promise<{ cidades: Cidade[] }> {

    try {
  
      const endpoint = `${process.env.NEXT_PUBLIC_API_URL}/graphql`;
      const query = gql`
      query {
      
        cidades(filter: {status: {_eq: "published"}}, sort: "nome") {
          nome
          slug
          estado {
            nome
            Sigla
          }
        }
      }
       
    `;
  
      const data = await request(endpoint, query) as { cidades: Cidade[] };
  
  
      if (!data) {
        return notFound()
      }
  
      return data
    } catch (error) {
  
      return notFound()
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