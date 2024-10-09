"use client";
import ModalChooseCities from "@/components/cidades/modal-escolha-cidades";
import { gql, useQuery } from "@apollo/client";
import { getCookie } from "cookies-next";
import { useQueryState } from "nuqs";
import { createContext, useContext, useEffect, useState } from "react";

type Cidade = {
  id: string;
  nome: string;
  slug: string;
  estado: Estado;
};

type Estado = {
  id: string;
  nome: string;
  sigla: string;
};

type contextType = {
  cidades: Cidade[];
  cidade: Cidade | null;
  updateCidade: (cidade: Cidade) => void;
};
export const CidadeContext = createContext<contextType>({
  cidades: [] as Cidade[],
  cidade: {} as Cidade | null,
  updateCidade: () => {},
});

type CidadeProviderProps = {
  children: React.ReactNode;
};

const CidadeQuery = gql`
  query Cidades {
    cidades(filter: { status: { _eq: "published" } }) {
      id
      estado {
        id
        nome
        sigla
      }
      nome
      slug
    }
  }
`;

type QueryCidades = {
  cidades: Cidade[];
};

export default function CidadeProvider({ children }: CidadeProviderProps) {
  const { data: cidades, loading } = useQuery<QueryCidades>(CidadeQuery);
  const [cidade, setCidade] = useState<Cidade | null>(null);
  const [, setModalState] = useQueryState("modal-cidade");

  useEffect(() => {
    const citieModal = JSON.parse(getCookie("mxfibra_cidade") || "null");

    const isValid =
      citieModal && cidades?.cidades.find((c) => c.id === citieModal.id);

    if (!isValid && !loading && cidades?.cidades.length) {
      setModalState("open");
      return;
    }

    setCidade(isValid);
    setModalState(null);
  }, [setModalState, loading, cidades?.cidades]);

  function updateCidade(cidade: Cidade) {
    setCidade(cidade);
  }

  return (
    <CidadeContext.Provider
      value={{
        cidades: cidades?.cidades || [],
        cidade,
        updateCidade,
      }}
    >
      {children}
      <ModalChooseCities />
    </CidadeContext.Provider>
  );
}

export function ReturnCity() {
  const { cidade } = useContext(CidadeContext);
  const [, setModalState] = useQueryState("modal-cidade");
  const [isClient, setIsClient] = useState(false); // Novo estado para controlar a montagem no cliente

  useEffect(() => {
    setIsClient(true); // O componente foi montado no cliente
  }, []);

  const prevCidade = JSON.parse(getCookie("mxfibra_cidade") || "null");

  function openModalChooseCitie() {
    setModalState("open");
  }

  return (
    <strong
      onClick={openModalChooseCitie}
      className="text-blue-500 transition-all
    duration-300 ease-in-out cursor-pointer"
    >
      {isClient ? cidade?.nome || (prevCidade && prevCidade.nome) || "" : ""}
    </strong>
  );
}
