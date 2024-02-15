import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import { SpeedInsights } from "@vercel/speed-insights/next"
import { Providers } from "@/components/providers/Providers";

const inter = Inter({ subsets: ["latin"] });


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <SpeedInsights />
      <body className={inter.className}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
