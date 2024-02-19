import { Blinker } from "next/font/google";
import "./globals.css";

import { SpeedInsights } from "@vercel/speed-insights/next"
import { Metadata } from "next";

const blinker = Blinker({
  subsets: ["latin"],
  weight:['100','200','300','400','600','700','800','900'],
});

export const metadata: Metadata = {
  title: "MXFibra",
  description: "Conheça a cidade de e veja os planos disponíveis para você!",
  keywords: "MXFibra, Cidades, Planos, Internet, Fibra Óptica"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <SpeedInsights />
      <body className={blinker.className}>
       
          {children}

      </body>
    </html>
  );
}
