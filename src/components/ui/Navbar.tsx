'use client'

import Link from "next/link";
import Logo from '../../../public/logo-blue.png'
import Image from "next/image";
import { Bars3Icon, ChevronDownIcon, PhoneIcon } from "@heroicons/react/20/solid";

import { Cidade } from "@/types/cidades";
import { useState } from "react";
// import { useEffect, useState } from "react";


type props = {
    cidade: Cidade
}

const MobileMenu = ({ isOpen }: {isOpen: boolean}) => {
    if (!isOpen) return null;

    return (
        <div className={`mobile-menu ${isOpen ? 'open' : ''} lg:hidden space-y-1`}>
            <Link href={'/'} className="text-lg font-medium">Para Você</Link>
            <Link href={''} className="text-lg font-medium">Para Empresa</Link>
            <Link href={''} className="text-lg font-medium">Entreterimento</Link>
            <Link href={''} className="text-lg font-medium">Indique um amigo</Link>
            <Link href={''} className="text-lg font-medium">Institucional</Link>
            <button className="m-0 bg-mx-green-under text-md h-10 rounded-md text-mx-blue-800 px-4 transform transition-transform duration-500 ease-in-out hover:-translate-y-5">
                Assine Já
            </button>
            <button className="m-0 bg-mx-blue-500 text-md h-10 rounded-md text-white px-4 transform transition-transform duration-500 ease-in-out hover:-translate-y-5">
                Minha MX
            </button>
            <button className="m-0 bg-indigo-800 text-md h-10 rounded-md text-white px-4 transform transition-transform duration-500 ease-in-out hover:-translate-y-5">
                2ª Via
            </button>
        </div>
    );
};

export  function Navbar({ cidade }: props) {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    return (
        <>
            <div className="main-navbar">

                <div className="navbar">
                    <div className="navbar__top">
                        <div className="container__top">
                            <div className="navbar__top-left">
                                <div className="text-sm lg:text-lg flex items-center gap-2">
                                    <PhoneIcon className="w-6" />
                                    Ligamos para você
                                </div>
                            </div>
                            <div>
                                <Link href={`/`} className="flex text-gray-100 hover:text-white cursor-pointer gap-2 ">
                                    <p className="text-sm lg:text-lg"> {cidade?.nome} - {cidade?.estado?.Sigla}</p>

                                    {cidade ? (

                                        <ChevronDownIcon className="w-6 hover:text-white" />

                                    ) : null}
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className={`navbar__bottom`}>
                        <div className="container__bottom">
                            <div className="navbar__bottom-left">
                                <div className="bottom__left">
                                    <Link href={'/'}>
                                        <Image
                                            src={Logo}
                                            alt=""
                                        ></Image>
                                    </Link>
                                    <div className="bottom__left-options">
                                        <Link href={''} className="transition-all duration-200 link-underline link-underline-black">PARA VOCÊ</Link>
                                        <Link href={''}>PARA EMPRESAS</Link>
                                        <Link href={''}>ENTRETERIMENTO</Link>
                                        <Link href={''}>INDIQUE UM AMIGO</Link>
                                        <Link href={''}>INSTITUCIONAL</Link>
                                    </div>
                                </div>
                                <div className="bottom__right mt-2">
                                    <button className="m-0 bg-mx-green-under text-md h-10 rounded-md text-mx-blue-800 px-4 transform transition-transform duration-500 ease-in-out hover:-translate-y-5">
                                        Assine Já
                                    </button>
                                    <button className="m-0 bg-mx-blue-500 text-md h-10 rounded-md text-white px-4 transform transition-transform duration-500 ease-in-out hover:-translate-y-5">
                                        Minha MX
                                    </button>
                                    <button className="m-0 bg-indigo-800 text-md h-10 rounded-md text-white px-4 transform transition-transform duration-500 ease-in-out hover:-translate-y-5">
                                        2ª Via
                                    </button>
                                </div>
                                <div className="bottom__right-mobile" onClick={toggleMenu}>
                                    <Bars3Icon className="w-10" />
                                </div>
                                <MobileMenu isOpen={isMenuOpen} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
