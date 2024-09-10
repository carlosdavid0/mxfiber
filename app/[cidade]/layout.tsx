import Footer from "@/components/footer";
import { HeroCarrousel } from "@/components/hero-carrousel";
import Navbar from "@/components/navbar";

type LayoutCidadesProps = {
  children: React.ReactNode;
};
function LayoutCidades({ children }: LayoutCidadesProps) {
  return (
    <main className="bg-gray-100 min-h-screen max-h-full">
      <Navbar />
      <HeroCarrousel />
      <section className="">{children}</section>
      <Footer />
    </main>
  );
}

export default LayoutCidades;
