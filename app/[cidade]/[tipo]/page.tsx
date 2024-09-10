import { ImprovedFAQSection } from "@/components/faq";
import HeroDestaque from "@/components/otts/HeroDestaques/";
import { HeroSky } from "@/components/otts/heroSky";
import { HeroPlanos } from "@/components/planos/hero";

function Page() {
  return (
    <>
      <div className="py-6 max-w-screen-xl lg:mx-auto mx-2">
        <HeroPlanos />
      </div>

      <HeroSky />
      <HeroDestaque />
      <ImprovedFAQSection />
    </>
  );
}

export default Page;
