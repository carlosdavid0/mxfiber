import { Plano } from "@/types/planos";
import { CarouselPlanos } from "./carrousell-planos";
import { Empresa } from "@/types/empresa";
import { cn } from "@/lib/utils";

type HeroPlanosProps = {
  data?: Plano[];
  empresa: Empresa;
};

export function HeroPlanos({ data, empresa }: HeroPlanosProps) {
  return (
    <section className="px-4 py-8">
      <div className="max-w-full md:max-w-[90%] mx-auto">
        <h1
          className={cn(
            "text-center text-blue-800 space-x-1 mb-5",
            "text-2xl md:text-3xl lg:text-4xl",
            "line-clamp-2" // Melhora o espaçamento entre linhas
          )}
        >
          <span>Mais</span>
          <strong>Velocidade</strong>
          <span>de</span>
          <strong>conexão</strong>
          <span>por toda sua casa</span>
        </h1>

        <CarouselPlanos empresa={empresa} data={data || []} />
      </div>
    </section>
  );
}
