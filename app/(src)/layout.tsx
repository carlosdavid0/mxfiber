import { ImprovedFAQSection } from "@/components/faq";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import { endpoint } from "@/constants/endpoint";
import { Empresa } from "@/types/empresa";
import { Faq } from "@/types/faq";
import request, { gql } from "graphql-request";

type LayoutCidadesProps = {
  children: React.ReactNode;
};

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
        user_created
        date_created
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

export default async function LayoutCidades({ children }: LayoutCidadesProps) {
  const Informations = await generalInfomations();

  return (
    <main className="bg-gray-100 min-h-screen max-h-full">
      <Navbar empresa={Informations.empresa} />
      <section>{children}</section>
      <ImprovedFAQSection
        empresa={Informations.empresa}
        data={Informations.faq}
      />
      <Footer data={Informations.empresa} />
    </main>
  );
}
