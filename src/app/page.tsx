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

    <main className="bg-gradient-to-tr from-blue-900 via-sky-900 to-indigo-900 
 grid lg:grid-cols-2 grid-cols-1 min-h-screen max-h-max">
      <div className="lg:block hidden">
        <img src="https://res.cloudinary.com/dsolucoes/image/upload/v1708203187/izbbxlsps0mm0mshzafs.png" alt="Imagem de uma cidade" className="w-full max-h-screen min-h-full" />
      </div>
      <div className="px-6 py-7 space-y-5">
        <Image src={Logo} alt="MXFiber" className='lg:w-[15%] md:w-[17%] w-[25%]' />
        <ListCitiesHome data={data} />
      </div>


    </main >
  );
}
