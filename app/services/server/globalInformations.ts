'use server'

import { endpoint } from "@/constants/endpoint";
import { Empresa } from "@/types/empresa";
import { Faq } from "@/types/faq";
import request, { gql } from "graphql-request";

export async function generalInfomations() {
    const empresaQuery = gql`
      query Empresa {
        empresa {
          id
          status
          user_created
          date_created
          user_updated
          date_updated
          nome
          privacidade
          whatsapp
          instagram
          facebook
          sobre_a_empresa
          google_play
          apple_store
          nome_do_app
        }
      }
    `;
    const data_empresa: { empresa: Empresa } = await request(
      `${endpoint}/graphql`,
      empresaQuery
    );
  
    const faqQuery = gql`
      query Faq {
        faq {
          id
          status
          pergunta
          resposta
        }
      }
    `;
  
    const data_faq: { faq: Faq[] } = await request(
      `${endpoint}/graphql`,
      faqQuery
    );
  
    return {
      empresa: data_empresa.empresa,
      faq: data_faq.faq,
    };
  }
  