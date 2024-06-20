import { Svas } from "@/types/Sva";
import request, { gql } from "graphql-request";
import Link from "next/link";
import WhatsaApp from "../../../public/whatsapp";

async function getSvaDestaque() {
  const endpoint = `${process.env.NEXT_PUBLIC_API_URL}/graphql`;
  const query = gql`
    query {
      configuracoes {
        assine_ja
      }
      sva(filter: { destaque: { _eq: true } }) {
        categoria_em_plano
        color_de_fundo
        capa {
          id
          height
          width
        }
        descricao
        icone {
          id
          height
          width
        }
        nome
      }
    }
  `;

  const data: { sva: Svas[]; configuracoes: { assine_ja: string } } =
    await request(endpoint, query);

  return {
    data,
  };
}

export async function EntretenimentSection() {
  const { data } = await getSvaDestaque();
  return (
    <section className="bg-white">
      <div className="py-8 px-4 max-w-screen-xl lg:py-10 grid  lg:grid-cols-[400px_minmax(900px,_1fr)_100px] mx-auto space-y-4 lg:space-y-0">
        <div className="lg:max-w-[80%] w-full space-y-2">
          <div>
            <h3 className="text-mx-blue-700 text-3xl font-semibold text-center md:text-start">
              + Entretenimento
              <br />
              junto com sua
              <br />
              Internet Fibra
            </h3>
          </div>

          <p className="text-md text-center md:text-start">
            Aqui na MX Fibra, você monta o seu plano: escolha sua velocidade e adicione os melhores aplicativos de streaming!
          </p>
        </div>
        {/* grid xl:grid-cols-3 lg:grid-cols-2 grid-cols-1 md:grid-cols-2 gap-4" */}
        <div className="grid gap-4 grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2">
          {data.sva.map((sva, index) => {
            const bannerUrl = `${process.env.NEXT_PUBLIC_API_URL}/assets/${sva?.capa?.id}`;

            return (
              <div
                key={index}
                className={`rounded-lg ${sva.capa && 'bg-black/50'} h-96 bg-cover px-4 py-6 shadow-lg flex flex-col justify-end bg-blend-overlay space-y-5`}
                style={sva.capa ? { backgroundImage: `url('${bannerUrl}')` } : { backgroundColor: sva.color_de_fundo }}
              >
                <img
                  src={`${process.env.NEXT_PUBLIC_API_URL}/assets/${sva?.icone?.id}`}
                  alt="icone"
                />
                <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200 line-clamp-4">
                  {sva.descricao}
                </p>

                <Link
                  href={
                    `${data?.configuracoes?.assine_ja}&text=Gostaria de assinar o plano ${sva.nome}` || ""
                  }
                >
                  <button className="bg-white text-black hover:bg-gray-200 duration-500 transition-all px-4 py-2 rounded-md font-semibold flex items-center gap-2 justify-center">
                    Conhecer Mais
                    <span>
                      <WhatsaApp width={15} height={15} fill={"#1081ff"} />
                    </span>
                  </button>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
