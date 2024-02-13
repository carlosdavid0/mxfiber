import { EmblaCarousel } from "@/components/ui/CarroselHome";
import { Navbar } from "@/components/ui/Navbar";
import { PriceSession } from "@/components/ui/Price-section";
import { Banner } from "@/types/banners";
import { Cidade } from "@/types/cidades";
import request, { gql } from "graphql-request";




async function getCityData(slug: string) {

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

export async function getCarroselData(slug: string) {
    const endpoint = `${process.env.NEXT_PUBLIC_API_URL}/graphql`;
    const query = gql`
        query {
            banners(filter: {cidades: {cidades_id: {slug: {_eq: "paco-do-lumiar"}}}}) {
        
            imagem {
                width
                height
                id
            }
            mobile_image{
                width
                height
                id 
            }
            status
            }
        }
    `


    const data: { banners: Banner[] } = await request(endpoint, query);

    return {
        banners: data?.banners
    }




}



export default async function ParaVoce({ params }: { params: { "slug-cidade": string } }) {

    const { cidade } = await getCityData(params["slug-cidade"])

    const { banners } = await getCarroselData(params["slug-cidade"])


    return (
        <>
            <Navbar cidade={cidade} />
            <EmblaCarousel slides={banners} />
            <PriceSession />
        </>
    )
}