import type { Metadata } from "next";
import "./globals.css";
// import DevBanner from "@/components/ambiente-dev";

export const metadata: Metadata = {
  title: "MX Fibra",
  description: "",
};

export const revalidate = 10;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className="">
        {/* <DevBanner /> */}
        {children}
      </body>
    </html>
  );
}
