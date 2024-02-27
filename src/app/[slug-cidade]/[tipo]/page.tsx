import { EmblaCarousel } from "@/components/ui/CarroselHome";
import { TV } from "@/components/ui/Tv";
import { SvasSection } from "@/components/ui/SvasSection";
import { Footer } from "@/components/ui/Footer";
import { Navbar } from "@/components/ui/Navbar";
import { PriceSession } from "@/components/ui/Price-section";
import { TalkPlace } from "@/components/ui/TalkPlace";
import { Svas } from "@/types/Sva";
import { Tvinfo } from "@/types/Tv";
import { Banner } from "@/types/banners";
import { Cidade } from "@/types/cidades";
import { Plano } from "@/types/planos";
import request, { gql } from "graphql-request";
import { Metadata, ResolvingMetadata } from "next";
import { notFound } from "next/navigation";
import { EntrerimentSection } from "@/components/ui/EntreterimentsSection";
import { BlogSection } from "@/components/ui/BlogSection";




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

    if (!data.cidades[0]) {
        notFound();
    }


    return {
        title: `${data?.cidades[0].nome} | MXFiber`,
        description: `MXFiber está em ${data?.cidades[0].nome} e veja os planos disponíveis para você!`,
        keywords: `MXFiber, ${data?.cidades[0].nome}, Planos, Internet, Fibra Óptica`,
        robots: "index, follow",
        generator: "MXFiber",
        category: "Internet",
        publisher: "MXFiber",
        openGraph: {
            type: "website",
            title: `${data?.cidades[0].nome} | MXFiber`,
            locale: "pt_BR",
            description: `MXFiber está em ${data?.cidades[0].nome} e veja os planos disponíveis para você!`,
            url: `${process.env.SITE_URL}/${data?.cidades[0].slug}`,
            siteName: `${data?.cidades[0].nome} | MXFiber`,
            alternateLocale: ['pt-BR', 'en-US'],
            images: [   
                {
                    url: "https://mxfiber.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo-blue.1035add7.png&w=750&q=75",
                    width: 800,
                    height: 600,
                    alt: "MXFiber",
                },
            ],
        },


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

async function getPlanos({ slug, tipo }: { slug: string, tipo: string }) {
    const endpoint = `${process.env.NEXT_PUBLIC_API_URL}/graphql`;
    const query = gql`query {
        planos(filter: {
            _and: [
                {cidades: {cidades_id: {slug: {_eq: "${slug}"}}}},
                {status:{_eq: "published"}},
                {tipo_de_plano: {_eq: "${tipo}"}}
            ]
        }) {
            nome
            id
            recomendado
            servicos {
                servicos_id {
                    id
                    icone_personalizado
                    nome
                }
            }
            svas {
                sva_id {
                    destaque
                    nome
                    categoria_em_plano
                    color_de_fundo
                    icone {
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


async function getTvInfo(slug: string) {
    const endpoint = `${process.env.NEXT_PUBLIC_API_URL}/graphql`;
    const query = gql`
    query {
        TVInfo {
            banner{
                width,
                height,
                id
            }
            cor_base,
            Nome,
            titulo,
            descricao,
            icone{
                width,
                height,
                id
            }
        }
      }
         
    `





    const data: { TVInfo: Tvinfo } = await request(endpoint, query);




    return {
        tv: data?.TVInfo
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

export default async function ParaVoce({ params }: { params: { "slug-cidade": string, tipo: string } }) {

    const { cidade } = await getCityData(params["slug-cidade"])

    const { banners } = await getCarroselData(params["slug-cidade"])

    const { planos } = await getPlanos({ slug: params["slug-cidade"], tipo: params["tipo"] })

    const { svas } = await getSVAs(params["slug-cidade"])

    const { tv } = await getTvInfo(params["slug-cidade"])


    return (
        <>
            <Navbar cidade={cidade} />
            <EmblaCarousel slides={banners} />
            <PriceSession planos={planos} />
            <SvasSection svas={svas} planos={planos} />
            <TV data={tv} />
            <EntrerimentSection />
            <BlogSection />
            <Footer />
        </>
    )
}