"use client";
import { Play, Gamepad2, Music, Tv } from "lucide-react";
import { CarouselDestaquesOTT } from "./carrousell";
import { cn } from "@/lib/utils";
import { Sva } from "@/types/planos";

type Props = {
  planos: Plano[];
};

type Plano = {
  svas: Sva[];
};

function processarSvas(planos: Plano[]): Sva[] {
  const svas: Sva[] = [];

  planos.forEach((plano) => {
    plano.svas.forEach((sva) => {
      // Remove duplicados
      if (!svas.some((s) => s.sva_id.nome === sva.sva_id.nome)) {
        svas.push(sva);
      }
    });
  });

  // Ordena os SVAs
  const sortedSvas = svas.sort((a, b) => {
    // Primeiro, compara o status de destaque
    if (a.sva_id.destaque && !b.sva_id.destaque) return -1;
    if (!a.sva_id.destaque && b.sva_id.destaque) return 1;

    // Se os statuses forem iguais, compara o nome
    if (a.sva_id.nome < b.sva_id.nome) return -1;
    if (a.sva_id.nome > b.sva_id.nome) return 1;

    // Se os statuses e nomes forem iguais, retorna 0
    return 0;
  });

  return sortedSvas;
}
export default function Component({ planos }: Props) {
  const svas = processarSvas(planos);

  console.log(svas);

  return (
    <section
      className={cn(
        "max-w-screen-xl mx-auto grid items-end ",
        "grid-cols-1 lg:grid-cols-3",
        "lg:py-10"
      )}
    >
      <div className="space-y-6 px-4 lg:max-w-sm py-5 lg:py-0">
        <div className="flex space-x-4">
          {[Play, Gamepad2, Music, Tv].map((Icon, index) => (
            <div key={index} className="rounded-full bg-gray-100 p-3">
              <Icon className="h-6 w-6 text-gray-600" />
            </div>
          ))}
        </div>
        <h2 className="text-3xl font-bold text-blue-600 md:text-4xl lg:text-4xl">
          + Entretenimento junto com sua Fibra Internet.
        </h2>
        <p className="text-lg text-gray-600">
          Aqui na MX Fibra, você pode personalizar seu plano: escolha sua
          velocidade e adicione os melhores apps de streaming!
        </p>
      </div>

      <div className="px-4 col-span-2">
        <CarouselDestaquesOTT data={svas} />
      </div>
    </section>
  );
}
