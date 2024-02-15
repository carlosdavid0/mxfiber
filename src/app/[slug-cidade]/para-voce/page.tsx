import { EmblaCarousel } from "@/components/ui/CarroselHome";
import { EntreterimentoSection } from "@/components/ui/EntreterimentoSection";
import { Navbar } from "@/components/ui/Navbar";
import { PriceSession } from "@/components/ui/Price-section";
import { Svas } from "@/types/Sva";
import { Banner } from "@/types/banners";
import { Cidade } from "@/types/cidades";
import { Plano } from "@/types/planos";
import request, { gql } from "graphql-request";
import { Metadata, ResolvingMetadata } from "next";




export async function generateMetadata(
    { params }: any,
    parent: ResolvingMetadata
): Promise<Metadata> {
    // read route params
    const slug = params['slug-cidade']


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
        title: `${data?.cidades[0].nome} | MXFiber`,
        description: `MXFiber está em ${data?.cidades[0].nome} e veja os planos disponíveis para você!`,
        keywords: `MXFiber, ${data?.cidades[0].nome}, Planos, Internet, Fibra Óptica`

    }


}

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

async function getPlanos(slug: string) {
    const endpoint = `${process.env.NEXT_PUBLIC_API_URL}/graphql`;
    const query = gql`query {
   
        planos(filter: {cidades: {cidades_id: {slug: {_eq: "${slug}"}}}}){
            nome
            id
            servicos{
                servicos_id{
                    id
                    nome
                }
            }
            svas {
                sva_id{
                    nome
                    categoria_em_plano
                    color_de_fundo
                    
                    icone{
                        width
                        height
                        id
                    }
                }
            }
        }
    }`



    const data: { planos: Plano[] } = await request(endpoint, query);


    return {
        planos: data?.planos
    }




}
async function getCarroselData(slug: string) {
    const endpoint = `${process.env.NEXT_PUBLIC_API_URL}/graphql`;
    const query = gql`
        query {
            banners(filter: {cidades: {cidades_id: {slug: {_eq: "${slug}"}}}}) {
        
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

async function getSVAs(slug: string) {
    const endpoint = `${process.env.NEXT_PUBLIC_API_URL}/graphql`;
    const query = gql`
    query {
        sva(sort: ["sort", "date_created"]) {
          nome
          date_created
          categoria_em_plano
          color_de_fundo
          descricao
          icone {
            width
            height
            id
          }
        }
      }
         
    `



    const data: { sva: Svas[] } = await request(endpoint, query);


    return {
        svas: data?.sva
    }




}


export default async function ParaVoce({ params }: { params: { "slug-cidade": string } }) {

    const { cidade } = await getCityData(params["slug-cidade"])

    const { banners } = await getCarroselData(params["slug-cidade"])

    const { planos } = await getPlanos(params["slug-cidade"])

    const { svas } = await getSVAs(params["slug-cidade"])


    return (
        <>
            <Navbar cidade={cidade} />
            <EmblaCarousel slides={banners} />
            <PriceSession planos={planos} />
            <EntreterimentoSection svas={svas} />
        </>
    )
}