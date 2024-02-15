import Image from "next/image";
import Logo from '../../public/logo.png';
import { ListCitiesHome } from "@/components/ui/ListCitiesHome";
import { getCities } from "@/services/getCities";
import { Metadata } from "next";



export const metadata: Metadata = {
  title: "MXFiber",
  description: "Conheça a cidade de e veja os planos disponíveis para você!",
  keywords: "MXFiber, Cidades, Planos, Internet, Fibra Óptica"


};

export default async function Home() {

  const data = await getCities();

  return (
    
    <main className="bg-gradient-to-tr from-blue-900 via-sky-900 to-indigo-900 min-h-screen flex flex-col justify-between py-4 px-6 sm:px-10">
      <section className="space-y-10 w-full sm:w-3/4 lg:w-[700px] xl:w-[700px] mx-auto">
        <div className="space-y-3 flex justify-center">
          <Image
            className="w-[20%]"
            src={Logo}
            alt="Logo"
          />
        </div>
        <ListCitiesHome data={data} />
      </section>
    </main >
  );
}
