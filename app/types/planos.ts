export interface Plano {
  id: string;
  status: string;
  user_created: string;
  date_created: string;
  user_updated: string;
  date_updated: string;
  nome: string;
  recomendado: boolean;
  svas: Sva[];
  cidades: Cidade[];
  servicos: Servico[];
}

export interface Sva {
  sva_id: SvaId;
}

export interface SvaId {
  id: string;
  status: string;
  user_created: string;
  icone: {
    id: string;
  };
  date_created: string;
  user_updated?: string;
  date_updated?: string;
  nome: string;
  descricao: string;
  destaque?: boolean;
  cor_destaque?: string;
}

export interface Cidade {
  cidades_id: CidadesId;
}

export interface CidadesId {
  id: string;
  status: string;
  user_created: string;
  date_created: string;
  user_updated: string;
  nome: string;
  slug: string;
}

export interface Servico {
  servicos_id: ServicosId;
}

export interface ServicosId {
  id: string;
  status: string;
  sort: number;
  user_created: string;
  date_created: string;
  user_updated: string;
  date_updated: string;
  nome: string;
  icone: string;
}
