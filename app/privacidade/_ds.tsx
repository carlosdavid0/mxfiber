import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import { endpoint } from "@/constants/endpoint";
import { Cidade } from "@/types/cidades";
import { Empresa } from "@/types/empresa";
import request, { gql } from "graphql-request";

type LayoutCidadesProps = {
  params: { cidade: string };
};

async function generalInfomations(citie: string) {
  const citiesQuery = gql`
    query Cidades {
    cidades(filter: { status: { _eq: "published" }, slug: { _eq: "${citie}" } }) {
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
`;
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

  const data_citie: { cidades: Cidade[] } = await request(endpoint, citiesQuery)
    .then((data) => {
      return data as { cidades: Cidade[] };
    })
    .catch((error) => {
      console.log(error);
      return { cidades: [] };
    });

  return {
    citie: data_citie.cidades[0],
    empresa: data_empresa.empresa,
  };
}

async function LayoutCidades({ params }: LayoutCidadesProps) {
  const Informations = await generalInfomations(params.cidade);

  return (
    <main className="bg-gray-100 min-h-screen max-h-full">
      <Navbar citie={Informations.citie} empresa={Informations.empresa} />
      <section className="max-w-screen-xl lg:mx-auto mx-4 py-5 text-black">
        <div
          id="renderPrivacidadeContent"
          className="prose max-w-full"
          dangerouslySetInnerHTML={{
            __html: Informations?.empresa?.privacidade,
          }}
        />
      </section>
      <Footer data={Informations.empresa} />
    </main>
  );
}

export default LayoutCidades;
