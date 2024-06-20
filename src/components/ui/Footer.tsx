"use client";

import { useEmpresa } from "@/context/Empresa";

import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillLinkedin,
  AiFillMail,
  AiFillYoutube
} from "react-icons/ai";

import Image from "next/image";
import Link from "next/link";
import Logo from "../../../public/logo-blue.png";

export function Footer() {
  const { empresa } = useEmpresa();

  return (
    <footer className="bg-white border-t">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <div className="flex items-start flex-col gap-5">
              <Image src={Logo} className="w-[10%]" alt="FlowBite Logo" />

              <div className="flex items-center justify-center gap-4">
                {empresa?.googleplay && (
                  <a
                    href={empresa?.apple_store}
                    className="flex items-center gap-2"
                  >
                    <Image
                      src="/googleplay.png"
                      width={100}
                      height={30}
                      alt="Google Play"
                    />
                  </a>
                )}
                {empresa?.apple_store && (
                  <a
                    href={empresa?.apple_store}
                    className="flex items-center gap-2"
                  >
                    <Image
                      src="/applestore.png"
                      width={100}
                      height={30}
                      alt="Apple Store"
                    />
                  </a>
                )}
              </div>

              <div className="flex gap-2">
                <a href="">
                  <div className="bg-mx-blue-200 p-2 rounded-full hover:bg-mx-blue-300 transition-all duration-200">
                    <AiFillInstagram className="text-2xl text-mx-blue-800" />
                  </div>
                </a>
                <a href="">
                  <div className="bg-mx-blue-200 p-2 rounded-full hover:bg-mx-blue-300 transition-all duration-200">
                    <AiFillFacebook className="text-2xl text-mx-blue-800" />
                  </div>
                </a>
                <a href="">
                  <div className="bg-mx-blue-200 p-2 rounded-full hover:bg-mx-blue-300 transition-all duration-200">
                    <AiFillYoutube className="text-2xl text-mx-blue-800" />
                  </div>
                </a>
                <a href="">
                  <div className="bg-mx-blue-200 p-2 rounded-full hover:bg-mx-blue-300 transition-all duration-200">
                    <AiFillLinkedin className="text-2xl text-mx-blue-800" />
                  </div>
                </a>
                <a href="">
                  <div className="bg-mx-blue-200 p-2 rounded-full hover:bg-mx-blue-300 transition-all duration-200">
                    <AiFillMail className="text-2xl text-mx-blue-800" />
                  </div>
                </a>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">
                LGPD
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <Link href="/privacidade" className="hover:underline">
                    Politicas de privacidade
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">
                Produtos
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <Link href={`para-voce`}>Para Você</Link>
                </li>
                <li className="mb-4">
                  <Link href={`para-voce`}>Para Empresas</Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">
                Sobre
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium >">
                <li className="mb-4">
                  <a href={`${empresa?.assine_ja}`}>Assine Já</a>
                </li>
                <a href={`institucional`}>Institucional</a>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 sm:mx-auto lg:my-8 border-transparent" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © {new Date().getFullYear()}
            {`\n`}
            <a href="https://flowbite.com/" className="hover:underline">
              MxFibra
            </a>
            . Todos os direitos reservados.
          </span>
          <div className="flex mt-4 sm:justify-center sm:mt-0">
            <a href=""></a>
          </div>
        </div>
      </div>
    </footer>
  );
}
