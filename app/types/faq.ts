export interface Data {
  faq: Faq[];
}

export interface Faq {
  id: string;
  status: string;
  user_created: string;
  date_created: string;
  pergunta: string;
  resposta: string;
}
