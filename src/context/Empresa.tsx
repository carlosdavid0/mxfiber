"use client";

import { createContext, useContext, useEffect, useState } from "react";

type Empresa = {
  nome: string;
  slug: string;
  logo: string;
  endereco: string;
  telefone: string;
  email: string;
  site: string;
  facebook: string;
  instagram: string;
  twitter: string;
  whatsapp: string;
  youtube: string;
  linkedin: string;
  descricao: string;
  status: string;
};

export interface Data {
  configuracoes: Configuracoes;
}

export interface Configuracoes {
  nome_da_empresa: string;
  email: string;
  facebook: string;
  instragram: string;
  telefone: string;
  linkedin: string;
  youtube: string;
  nome_do_app: string;
  apple_store: string;
  googleplay: string;
  assine_ja: string;
}

type EmpresaContextData = {
  empresa?: Configuracoes;
};

const EmpresaContext = createContext({} as EmpresaContextData);

type EmpresaProviderProps = {
  children: React.ReactNode;
  settings: Configuracoes;
};
export function EmpresaProvider({ children, settings }: EmpresaProviderProps) {
  const [empresa, setEmpresa] = useState<Configuracoes>();

  useEffect(() => {
   console.log(settings)
    setEmpresa(settings)
  }, [settings]);

  return (
    <EmpresaContext.Provider value={{ empresa }}>
      {children}
    </EmpresaContext.Provider>
  );
}

export const useEmpresa = () => {
  return useContext(EmpresaContext);
};
