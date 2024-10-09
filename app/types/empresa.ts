export interface EmpresaResponse {
  data: Data;
}

export interface Data {
  empresa: Empresa;
}

export interface Empresa {
  id: string;
  status: string;
  user_created: string;
  date_created: string;
  nome: string;
  privacidade: string;
  whatsapp: string;
  instagram: string;
  sobre_a_empresa: string;
  facebook: string;
  google_play: string;
  apple_store: string;
  nome_do_app: string;
}
