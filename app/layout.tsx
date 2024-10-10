import type { Metadata } from "next";
import Provider from "./context/Provider";
import "./globals.css";
import { generalInfomations } from "./services/server/globalInformations";
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
      images: [
        "https://scontent.ffor12-1.fna.fbcdn.net/v/t39.30808-6/296046201_418062010344264_1262103760827051546_n.png?_nc_cat=110&ccb=1-7&_nc_sid=cc71e4&_nc_ohc=5MUPllCWXUMQ7kNvgH2EDP1&_nc_ht=scontent.ffor12-1.fna&_nc_gid=AumqCfsA7a0Ns3beOwE9P_x&oh=00_AYBMgUJ8QlfGz9RNrJRBJLJzpG0xo45T5r89-zjjP7RICA&oe=670D95B4",
      ],
      type: "website",
      title: Informations.empresa.nome,
      siteName: "Mx Fibra",
      countryName: "BR",
      locale: "pt_BR",
      emails: [],
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
