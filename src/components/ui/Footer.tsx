
'use client'


import Image from 'next/image'
import Logo from '../../../public/logo-blue.png'
export function Footer() {
    return (
        <footer className="bg-white">
            <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
                <div className="md:flex md:justify-between">
                    <div className="mb-6 md:mb-0">
                        <a href="https://flowbite.com/" className="flex items-center">
                            <Image src={Logo} alt="MXFiber" className='w-[15%]' />
                        </a>
                    </div>
                    <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">Institucional</h2>
                            <ul className="text-gray-500  font-medium space-y-2">

                                <li className=''>
                                    <a href="https://tailwindcss.com/" className="hover:400line">Quem Somos</a>
                                </li>
                                <li>
                                    <a href="https://tailwindcss.com/" className="hover:400line">Ética</a>
                                </li>
                                <li>
                                    <a href="https://tailwindcss.com/" className="hover:400line">Política de Privacidade</a>
                                </li>
                                <li>
                                    <a href="https://tailwindcss.com/" className="hover:400line">Seja Parceiro</a>
                                </li>
                                <li>
                                    <a href="https://tailwindcss.com/" className="hover:400line">LGPD</a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase ">Clientes</h2>
                            <ul className="text-gray-500  font-medium space-y-2">

                                <li>
                                    <a href="https://tailwindcss.com/" className="hover:400line">Indique um Amigo</a>
                                </li>
                                <li>
                                    <a href="https://tailwindcss.com/" className="hover:400line">Minha MX</a>
                                </li>
                                <li>
                                    <a href="https://tailwindcss.com/" className="hover:400line">Ouvidoria</a>
                                </li>
                                <li>
                                    <a href="https://tailwindcss.com/" className="hover:400line">2ª via do boleto</a>
                                </li>
                                <li>
                                    <a href="https://tailwindcss.com/" className="hover:400line">Teste de conexão</a>
                                </li>

                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase ">Planos</h2>
                            <ul className="text-gray-500  font-medium space-y-2">

                                <li>
                                    <a href="https://tailwindcss.com/" className="hover:400line">Combos</a>
                                </li>
                                <li>
                                    <a href="https://tailwindcss.com/" className="hover:400line">TV</a>
                                </li>
                                <li>
                                    <a href="https://tailwindcss.com/" className="hover:400line">Para empresas</a>
                                </li>

                            </ul>
                        </div>

                    </div>
                </div>
                <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
                <div className="sm:flex sm:items-center sm:justify-between">
                    <span className="text-sm text-gray-500 sm:text-center ">© {new Date().getFullYear()} <a href={'/'} className="hover:400line">MX Fibra</a>.

                        Powerd by <a href="https://dsolucoes.com/" className="hover:400line hover:text-[#6900ea]">Elavue Tecnologias
                        </a>.
                    </span>
                    <div className="flex mt-4 sm:justify-center sm:mt-0">
                        {/* <a href="#" className="text-gray-500">
                            <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 8 19">
                                <path fill-rule="evenodd" d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z" clip-rule="evenodd" />
                            </svg>
                            <span className="sr-only">Facebook page</span>
                        </a> */}
                    </div>
                </div>
            </div>
        </footer>

    )
}