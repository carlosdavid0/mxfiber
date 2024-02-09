'use client'

import { useState } from "react";
import Link from "next/link";
import { ChevronDownIcon, Bars3Icon, PhoneIcon, XMarkIcon } from '@heroicons/react/20/solid';
import Logo from "../../../public/logo-blue.png";
import Image from "next/image";

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header>
            <div>

                <div className="bg-gradient-to-tr bg-mx-blue-950 py-5 flex items-center justify-between px-10">
                    <div className="flex items-center gap-2">
                        <button className="text-md text-white/90 font-bold flex items-center gap-2 hover:text-white">
                            <PhoneIcon className="w-5 text-mx-green-500 hover:scale-110" />
                            Ligamos Para Você
                        </button>
                    </div>
                    <div>
                        <button className="flex items-center gap-2">
                            <p className="text-white">Varjota - CE</p>
                            <ChevronDownIcon className="w-5 text-mx-green-500" />
                        </button>
                    </div>
                </div>
                <nav className="flex sm:flex-row items-center justify-between gap-10 py-6 px-6 sm:px-10 w-full"> {/* Adicionando justify-between aqui */}
                    <div className="w-24 ">
                        <Link href="/" className="w-24 ">
                            <Image src={Logo} alt="Logo" />
                        </Link>
                    </div>
                    <div className="sm:hidden">
                        <button onClick={toggleMenu} className="text-black">
                            {isOpen ? (
                                <XMarkIcon className="w-6 h-6" />
                            ) : (
                                <Bars3Icon className="w-6 h-6" />
                            )}
                        </button>
                    </div>
                    <div className={`sm:flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4 text-lg ${isOpen ? "flex" : "hidden"} flex-1`}>
                        <Link href="/para-voce">
                            <p className="text-mx-blue-800 hover:text-mx-blue-900 duration-200 transition-all font-medium link-underline link-underline-black">Para você</p>
                        </Link>
                        <Link href="/para-empresas">
                            <p className="text-mx-blue-800 hover:text-mx-blue-900 duration-200 transition-all font-medium link-underline link-underline-black">Para empresas</p>
                        </Link>
                        <Link href="/contato">
                            <p className="text-mx-blue-800 hover:text-mx-blue-900 duration-200 transition-all font-medium link-underline link-underline-black">Entreterimento</p>
                        </Link>
                        <Link href="/cidades">
                            <p className="text-mx-blue-800 hover:text-mx-blue-900 duration-200 transition-all font-medium link-underline link-underline-black">Indique um amigo</p>
                        </Link>
                        <Link href="/cidades">
                            <p className="text-mx-blue-800 hover:text-mx-blue-900 duration-200 transition-all font-medium link-underline link-underline-black">Institucional</p>
                        </Link>
                    </div>
                    <div className={` items-center gap-5 ${isOpen ? 'flex' : 'hidden'}`}>
                        <button className="m-0 bg-mx-green-under text-lg py-2 rounded-md text-mx-blue-800 px-4 transform transition-transform duration-500 ease-in-out hover:-translate-y-5">
                            Assine Já
                        </button>
                        <button className="m-0 bg-mx-blue-500 text-lg py-2 rounded-md text-white px-4 transform transition-transform duration-500 ease-in-out hover:-translate-y-5">
                            Minha MX
                        </button>
                        <button className="m-0 bg-indigo-800 text-lg py-2 rounded-md text-white px-4 transform transition-transform duration-500 ease-in-out hover:-translate-y-5">
                            2ª Via
                        </button>
                    </div>

                </nav>
            </div>
        </header>
    )
}
