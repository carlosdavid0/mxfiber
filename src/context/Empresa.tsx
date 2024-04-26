'use client'

import { createContext } from "react";


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
}

type EmpresaContextData = {
    empresa?: Empresa;
}

const EmpresaContext = createContext({} as EmpresaContextData);





type EmpresaProviderProps = {
    children: React.ReactNode;
}
export async function EmpresaProvider({ children }: EmpresaProviderProps) {
   
    return (
        <EmpresaContext.Provider value={{  }}>
            {children}
        </EmpresaContext.Provider>
    )
}