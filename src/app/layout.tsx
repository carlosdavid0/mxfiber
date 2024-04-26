import { EmpresaProvider } from "@/context/Empresa";
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
  }

};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <Head>
        <meta name="adopt-website-id" content="0a8a3e95-6723-4736-9515-479b6972bb36" />
      </Head>
      <body className={inter.className}>
        <EmpresaProvider>
          {children}
        </EmpresaProvider>
        <Script className="adopt-injector" src="https://tag.goadopt.io/injector.js?website_code=0a8a3e95-6723-4736-9515-479b6972bb36" />
      </body>
    </html>
  );
}
