export interface Root {
  data: Data;
}

export interface Data {
  carrosel: Carrosel[];
}

export interface Carrosel {
  id: string;
  status: string;
  user_created: string;
  date_created: string;
  user_updated: string;
  date_updated: string;
  cidades: string[];
  banner: {
    id: string;
  };
  banner_mobile?: {
    id: string;
  };
}
