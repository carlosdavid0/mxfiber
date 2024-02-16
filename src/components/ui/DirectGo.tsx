import Image from "next/image";


import DirectGO from '../../../public/DGO-logo.png'
import TvLanding from '../../../public/tv.png'
import { PlayCircleIcon, TvIcon, UserCircleIcon } from "@heroicons/react/20/solid";
import WhatsaApp from "../../../public/whatsapp";

export function DirectGo() {


    const tv = [
        {
            icon: <TvIcon className="text-orange-500 w-12" />,
            name: '+ de 70 canais Tv Ao Vivo',
        },
        {
            icon: <PlayCircleIcon className="text-orange-500 w-12" />,
            name: 'Milhares de filmes e séries',
        },
        {
            icon: <UserCircleIcon className="text-orange-500 w-12" />,
            name: 'Até 2 acessos simultâneos',
        }
    ]
    return (
        <section className="bg-black/90 bg-cover bg-no-repeat bg-[url('https://mxfibra.com/wp-content/uploads/2023/12/frentedgo.png')]  bg-blend-overlay">
            <div className="py-10 px-4 mx-auto lg:max-w-screen-xl w-full lg:py-14 lg:px-6 grid lg:grid-cols-2 grid-cols-1 justify-between">
                <div className="max-w-screen-md space-y-5">
                    <div className="space-y-5">
                        <Image src={DirectGO} alt="TV" width={120} height={120} />
                        <h2 className="text-4xl tracking-tight font-normal text-white">
                            TV por assinatura da MX FIBRA
                        </h2>
                    </div>




                    <ul className="space-y-5">
                        {tv.map((item, index) => (
                            <li key={index} className="flex items-center space-x-3 text-white">
                                {item.icon}
                                <span>{item.name}</span>
                            </li>
                        ))}
                    </ul>

                    <div className="flex gap-4">
                        <button className="lg:w-fit w-full px-5 bg-orange-500 rounded-lg text-md h-14  transform transition-transform duration-500 ease-in-out hover:bg-orange-400">
                            <div className="flex items-center justify-center gap-2">
                                <TvIcon className="text-white w-5" />
                                <span className="text-xl text-white">Lista de canais</span>
                            </div>
                        </button>
                        <button className="lg:w-fit w-full bg-green-500 rounded-lg text-md h-14  px-4 transform transition-transform duration-500 ease-in-out hover:bg-green-400">
                            <div className="flex items-center justify-center gap-2">
                                <WhatsaApp width={"20px"} fill={'#fff'} height={'20px'}  />
                                <span className="text-xl text-white">Assine Já</span>
                            </div>
                        </button>

                    </div>
                </div>
                <div className="max-w-screen-lg hidden lg:flex">

                    <Image src={TvLanding} alt="TV" className="w-full" />
                </div>


            </div>
        </section >
    )
}