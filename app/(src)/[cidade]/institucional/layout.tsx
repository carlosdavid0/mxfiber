import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import { endpoint } from "@/constants/endpoint";
import { Carrosel } from "@/types/banners";
import { Cidade } from "@/types/cidades";
import { Empresa } from "@/types/empresa";
import request, { gql } from "graphql-request";

type LayoutCidadesProps = {
  children: React.ReactNode;
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
    `${`${endpoint}/graphql`}/graphql`,
    empresaQuery
  );
  const bannerQuery = gql`
    query Carrosel {
    carrosel(filter: { cidades: { cidades_id: { slug: { _eq: "${citie}" } } } }) {
        id
        status
        sort
        user_created
        date_created
        user_updated
        date_updated
        cidades {
            cidades_id {
                slug
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

  const data_citie: { cidades: Cidade[] } = await request(
    `${endpoint}/graphql`,
    citiesQuery
  )
    .then((data) => {
      return data as { cidades: Cidade[] };
    })
    .catch((error) => {
      console.log(error);
      return { cidades: [] };
    });

  const data_banner: { carrosel: Carrosel[] } = await request(
    `${`${endpoint}/graphql`}/graphql`,
    bannerQuery
  );

  return {
    citie: data_citie.cidades[0],
    empresa: data_empresa.empresa,
    banner: data_banner.carrosel,
  };
}

async function LayoutCidades({ children, params }: LayoutCidadesProps) {
  const Informations = await generalInfomations(params.cidade);

  return (
    <main className="bg-gray-100 min-h-screen max-h-full">
      <Navbar citie={Informations.citie} empresa={Informations.empresa} />

      <section>{children}</section>
      <Footer data={Informations.empresa} />
    </main>
  );
}

export default LayoutCidades;
