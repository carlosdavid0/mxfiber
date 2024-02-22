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
export function EntrerimentSection() {
    return (
        <section className="bg-white">
            <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-10 lg:px-6">
                <div className="w-1/4 space-y-2">
                    <div>
                        <h3 className="text-mx-blue-700 text-3xl font-semibold">
                            + Entretenimento<br />
                            junto com sua<br />Internet Fibra
                        </h3>
                    </div>

                    <p className="text-md"> Aqui na MX Fibra, você monta o seu plano: escolha sua velocidade e adicione os melhores aplicativos de streaming!</p>
                </div>
            </div>
        </section>

    )
}