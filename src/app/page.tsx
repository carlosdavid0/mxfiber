import Image from "next/image";
import Logo from '../../public/logo.png';
import { request, gql } from 'graphql-request'
import { notFound } from "next/navigation";
import { Cidade } from "@/types/cidades";
import { ListCitiesHome } from "@/components/ListCitiesHome";



async function getData(): Promise<{ cidades: Cidade[] }> {

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


export default async function Home() {

  const data = await getData();

  return (
    <main className="bg-gradient-to-tr from-blue-900 via-sky-900 to-indigo-900 min-h-screen flex flex-col justify-between py-4 px-6 sm:px-10">
      <section className="space-y-10 w-full sm:w-3/4 lg:w-[700px] xl:w-[700px] mx-auto">
        <div className="space-y-3 flex justify-center">
          <Image
            className="w-[20%]"
            src={Logo}
            alt="Logo"
          />
        </div>
        <ListCitiesHome data={data} />
      </section>
    </main >
  );
}
