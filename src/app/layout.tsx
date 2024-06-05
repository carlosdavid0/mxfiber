import { Configuracoes, EmpresaProvider } from "@/context/Empresa";
import request, { gql } from "graphql-request";
import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import Head from "next/head";
import Script from "next/script";
import "./globals.css";

const inter = Roboto({ subsets: ["latin"], weight: ["300", "400"] });

export const metadata: Metadata = {
  title: "MXFibra",
  description: "Conheça a cidade de e veja os planos disponíveis para você!",
  keywords: "MXFibra, Cidades, Planos, Internet, Fibra Óptica",
  other: {
    "adopt-website-id": "0a8a3e95-6723-4736-9515-479b6972bb36",
  },
};

export const revalidate = 60; // revalidate at most every hour

async function getDataBussiness() {
  const endpoint = `${process.env.NEXT_PUBLIC_API_URL}/graphql`;
  const query = gql`
    query {
      configuracoes {
        nome_da_empresa
        email
        facebook
        instragram
        telefone
        linkedin
        youtube
        nome_do_app
        apple_store
        googleplay
        assine_ja
      }
    }
  `;

  const data: { configuracoes: Configuracoes } = await request(endpoint, query);

  return data.configuracoes;
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const empresa = await getDataBussiness();
  return (
    <html lang="pt-br">
      <Head>
        <meta
          name="adopt-website-id"
          content="0a8a3e95-6723-4736-9515-479b6972bb36"
        />
        <Script
          src="//tag.goadopt.io/injector.js?website_code=0a8a3e95-6723-4736-9515-479b6972bb36"
          className="adopt-injector"
        ></Script>
      </Head>
      <body className={inter.className}>
        <EmpresaProvider settings={empresa}>{children}</EmpresaProvider>
      </body>
    </html>
  );
}
