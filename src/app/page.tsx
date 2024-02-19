import Image from "next/image";
import Logo from '../../public/logo.png';
import { ListCitiesHome } from "@/components/ui/ListCitiesHome";
import { getCities } from "@/services/getCities";
import { Metadata } from "next";





export default async function Home() {

  const data = await getCities();

  return (
    <main className="bg-mx-blue-800 
 grid lg:grid-cols-5 grid-cols-1 min-h-screen max-h-max gap-4">
      <div className="lg:col-span-3 lg:block hidden">
        <img src="https://res.cloudinary.com/dsolucoes/image/upload/v1708277670/ktujaqsgbjde9zopl1ab.png" alt="Imagem de uma cidade" className="w-full max-h-screen min-h-full" />
      </div>
      <div className="lg:px-6 px-3 py-7 space-y-5 lg:col-span-2">
        <Image src={Logo} alt="MXFiber" className='w-32' />
        <section>
          <header className="space-y-2">
            <h1 className="lg:text-5xl text-4xl font-semibold text-white">Seja bem-vindo!</h1>
            <p className="text-white lg:text-md text-sm font-light fon">
              Por favor, escolha uma cidade para prosseguir com o acesso:
            </p>
          </header>
          <ListCitiesHome data={data} />
        </section>
      </div>
    </main>


  );
}
