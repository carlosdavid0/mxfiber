import { Plano } from "@/types/planos";
import { CarouselPlanos } from "./carrousell-planos";
import { Empresa } from "@/types/empresa";

type HeroPlanosProps = {
  data?: Plano[];
  empresa: Empresa;
};

export function HeroPlanos({ data, empresa }: HeroPlanosProps) {
  return (
    <section>
      <div>
        <h1 className="text-3xl text-center  text-blue-800 space-x-1 mb-5">
          <span>Mais</span>
          <strong>Velocidade</strong>
          <span>de</span>
          <strong>conexão</strong>
          <span>por toda sua casa</span>
        </h1>

        {/* <nav>
          <ul className="flex items-center justify-center gap-4 py-5 transition-all duration-300">
            <li className=" text-blue-600 hover:text-blue-700 hover:underline cursor-pointer">
              Internet
            </li>
            <li className=" text-blue-600 hover:text-blue-700 hover:underline cursor-pointer">
              TV
            </li>
            <li className=" text-blue-600 hover:text-blue-700 hover:underline cursor-pointer">
              Combos
            </li>
          </ul>
        </nav> */}
        <CarouselPlanos empresa={empresa} data={data || []} />
      </div>
    </section>
  );
}
