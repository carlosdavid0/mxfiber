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
      <section className="px-4 py-6 max-w-screen-xl mx-auto">
        {children}
      </section>
    </main>
  );
}

export default LayoutCidades;
