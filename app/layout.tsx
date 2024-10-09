import type { Metadata } from "next";
import { generalInfomations } from "./(src)/layout";
import Provider from "./context/Provider";
import "./globals.css";
// import DevBanner from "@/components/ambiente-dev";

export async function generateMetadata(): Promise<Metadata> {
  const Informations = await generalInfomations();

  const meta: Metadata = {
    title: Informations.empresa.nome,
    description: Informations.empresa.sobre_a_empresa,
    creator: "Evalue Marketing",
    robots: "index, follow",
    category: "Business",
    appLinks: {
      android: {
        app_name: Informations.empresa.nome_do_app,
        url: Informations.empresa.google_play,
        package: "",
      },
      ios: {
        app_name: Informations.empresa.nome_do_app,
        app_store_id: "",
        url: Informations.empresa.apple_store,
      },
    },
    applicationName: "Mx Fibra",
    openGraph: {
      type: "website",
      title: Informations.empresa.nome,
      siteName: "Mx Fibra",
      countryName: "BR",
      locale: "pt_BR",
      url: "https://mxfibra.com.br",
    },
    metadataBase: new URL("https://mxfibra.com.br"),
    manifest: "/manifest.json",
    publisher: "Dsoluções",

    keywords: ["Mx fibra"],
  };

  return meta;
}

export const revalidate = 10;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className="">
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
