import Link from "next/link";

import Logo from '../../../public/logo-blue.png'
import Image from "next/image";
import { Bars3Icon } from "@heroicons/react/20/solid";

export function Navbar() {
    return (
        <>
            <div className="main-navbar">
                <div className="navbar__block" />
                <div className="navbar">
                    <div className="navbar__top">
                        <div className="container__top">
                            <div className="navbar__top-left">
                                <div className="number-contact">Ligamos para você</div>
                            </div>
                            <div className="navbar__top-right">
                                <p>David</p>
                                {/* <div>{city}</div>
                                {city ? (
                                    <img
                                        alt="trocar cidade"
                                        src={
                                            themeType === 'light'
                                                ? DarkChevronDownIcon
                                                : LightChevronDownIcon
                                        }
                                    />
                                ) : null} */}
                            </div>
                        </div>
                    </div>
                    <div className="navbar__bottom">
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
                                        <Link href={''}>PARA VOCÊ</Link>
                                        <Link href={''}>PARA EMPRESAS</Link>
                                        <Link href={''}>BLOG</Link>
                                        <Link href={''}>Institucional</Link>
                                    </div>
                                </div>
                                <div className="bottom__right">
                                    <div className="bottom__right-options">
                                        <Link href={''}>Produtos e serviços</Link>
                                    </div>
                                    <button >Assine já</button>
                                    <button>2ª Via</button>
                                    <button>

                                        Minha Online
                                    </button>
                                </div>
                                <div
                                    className="bottom__right-mobile"
                                    style={{ margin: 'auto 0' }}
                                >
                                   <Bars3Icon className="w-10" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
