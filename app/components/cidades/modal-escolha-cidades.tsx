"use client";

import logo from "@/assets/logo.png";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { useCidades } from "@/hooks/useCidades";
import { setCookie } from "cookies-next";
import { MapPin } from "lucide-react";
import Image from "next/image";
import { useQueryState } from "nuqs";
import { AutoComplete } from "../ui/autocomplete";

export default function ModalChooseCities() {
  const [modalCitieState, setModalCitieState] = useQueryState("modal-cidade");

  const { cidades, updateCidade } = useCidades();

  function handleCloseModal() {
    setModalCitieState(null);
  }

  function handleSelectCidade(cidade: string) {
    const item = cidades.find((c) => c.id === cidade);

    if (item) {
      setCookie("mxfibra_cidade", JSON.stringify(item), {
        expires: new Date(Date.now() + 1000 * 60 * 60 * 24 * 365), // 1 year,
      });

      updateCidade(item);
      handleCloseModal();
    }
  }

  const open = modalCitieState === "open";

  return (
    <div className="lg:mx-0 ">
      <Dialog open={open} onOpenChange={handleCloseModal}>
        <DialogContent className="p-0 bg-white w-full">
          <div className="p-6 flex flex-col h-full">
            <div className="mb-8">
              <Image src={logo} alt="Logo" width={56} height={56} />
            </div>

            <div className="flex items-start space-y-3 mb-6 flex-col">
              <MapPin className="h-8 w-8 text-blue-600" />
              <p className="text-sm text-gray-500 font-sans leading-relaxed">
                Informe a sua cidade para que possamos personalizar as ofertas
                de acordo com a disponibilidade para a sua região.
              </p>
            </div>

            <div className=" w-full">
              <AutoComplete
                placeholder="Digite o nome da sua cidade"
                emptyMessage="Nenhuma cidade encontrada"
                onValueChange={(e) => handleSelectCidade(e.value)}
                options={cidades.map((cidade) => ({
                  value: cidade.id,
                  label: cidade.nome,
                }))}
              />
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
