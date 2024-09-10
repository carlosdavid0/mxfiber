export interface Cidades {
  data: Cidade[];
}

export interface Cidade {
  nome: string;
  status: string;
  id: string;
  estado: Estado;
  slug: string;
}

export interface Estado {
  nome: string;
  id: number;
  sigla: string;
}
