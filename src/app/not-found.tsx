import { Navbar } from "@/components/ui/Navbar";
import { Cidade } from "@/types/cidades";
import { Metadata } from "next";
import Link from "next/link";


export const metadata: Metadata = {
    title: "MXFibra",
    description: "Conheça a cidade de e veja os planos disponíveis para você!",
    keywords: "MXFibra, Cidades, Planos, Internet, Fibra Óptica"
};

export default function NotFound() {
    return (
        <section>
            <Navbar cidade={{} as Cidade} />
            <section className=" ">
                <div className="container flex items-center min-h-screen px-6 py-12 mx-auto">
                    <div className="flex flex-col items-center max-w-sm mx-auto text-center">
                        <p className="p-3 text-sm font-medium text-mx-green-400 rounded-full bg-mx-blue-50 ">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" className="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
                            </svg>
                        </p>
                        <h1 className="mt-3 text-2xl font-semibold text-gray-800  md:text-3xl">Página não encontrada</h1>

                        <div className="flex items-center w-full mt-6 gap-x-3 shrink-0 sm:w-auto">
                           
                            <Link href={'/'}>
                                <button className="w-1/2 px-5 py-2 text-sm tracking-wide text-white transition-colors duration-200 bg-mx-blue-500 rounded-lg shrink-0 sm:w-auto hover:bg-mx-blue-600 dark:hover:bg-mx-blue-500 dark:bg-mx-blue-600">
                                    Ir para o início
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </section>
    );
}