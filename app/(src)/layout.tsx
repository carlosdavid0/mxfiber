import { ImprovedFAQSection } from "@/components/faq";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import { generalInfomations } from "@/services/server/globalInformations";

type LayoutCidadesProps = {
  children: React.ReactNode;
};

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
