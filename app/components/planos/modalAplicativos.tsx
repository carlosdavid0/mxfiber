import { Plano, Sva } from "@/types/planos";

import { DialogContent } from "@/components/ui/dialog";
import { cn } from "@/lib/utils";
type props = {
  data?: Plano;
};

function ModalAplicativos({ data }: props) {
  return (
    <DialogContent className="bg-white lg:min-w-[700px] min-w-svw">
      <h1 className="text-3xl text-blue-600 text-center">
        Mais Conexão, Mais Aplicativos
      </h1>
      <div className={cn("grid grid-cols-5 gap-4 p-3 mx-2 rounded-lg")}>
        {data?.svas.map((item: Sva, index: number) => (
          <div key={index} className="flex items-center gap-2 text-md">
            <img
              src={`https://mx-directus.dsolucoes.com/assets/${item.sva_id.icone.id}`}
              alt={item.sva_id.nome}
              className="w-96"
            />
          </div>
        ))}
      </div>
    </DialogContent>
  );
}

export default ModalAplicativos;
