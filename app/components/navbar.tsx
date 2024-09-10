"use server";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";
import { ChevronDown, MenuIcon } from "lucide-react";
import Image from "next/image";
import { Tarja } from "./minhaMx/tarja";
import { Cidade } from "@/types/cidades";
import { items } from "@/constants/menu";
import { Empresa } from "@/types/empresa";
import logo from "@/assets/logo.png";

type NavbarProps = {
  citie: Cidade;
  empresa: Empresa;
};

export default async function Navbar({ citie, empresa }: NavbarProps) {
  return (
    <section className="shadow-md sticky top-0 z-10 bg-white">
      {empresa.google_play && empresa.apple_store && <Tarja />}
      <header className="flex h-20 lg:h-28 w-full items-center px-4 md:px-6 max-w-screen-xl mx-auto">
        <Sheet>
          <div className="flex items-center justify-between w-full lg:w-fit">
            <div className="flex items-center gap-2 justify-between w-full lg:w-fit">
              <Image
                src={logo}
                alt="Logo MX"
                className="h-14 w-auto lg:hidden"
              />
              <div className="flex items-center gap-5">
                <Link
                  href={
                    `${empresa.whatsapp}?text=Gostaria de assinar um plano de internet na MX` ||
                    "#"
                  }
                >
                  <Button className="lg:hidden">Assine Já</Button>
                </Link>
                <SheetTrigger asChild>
                  <Button variant="outline" size="icon" className="lg:hidden">
                    <MenuIcon className="h-6 w-6 text-blue-700" />
                    <span className="sr-only">Abrir menu de navegação</span>
                  </Button>
                </SheetTrigger>
              </div>
            </div>
          </div>

          <SheetContent side="left" className="bg-white p-4 shadow-lg h-full">
            <a href="/">
              <Image
                src={logo}
                alt="Logo MX"
                className="h-14 w-auto lg:hidden"
              />
            </a>
            <nav className="mt-6 space-y-2">
              {items.map((item, index) => (
                <Link
                  key={index}
                  href="#"
                  className="block py-2 text-lg font-semibold text-blue-700 hover:text-blue-900 focus:outline-none"
                  prefetch={false}
                >
                  {item.name}
                </Link>
              ))}
            </nav>
            <div className="space-y-6 my-5">
              <Link
                href={
                  `${empresa.whatsapp}?text=Gostaria de assinar um plano de internet na MX` ||
                  "#"
                }
                prefetch={false}
                className="flex items-center gap-2 w-full"
              >
                <Button>Assine Já</Button>
              </Link>

              <Link
                href="/"
                prefetch={false}
                className="flex items-center gap-2"
              >
                <span className="text-blue-500 space-x-1">MX Fibra em</span>
                <strong className="text-blue-500">
                  {citie?.nome ? citie.nome : " Sua Cidade"}
                </strong>
                <ChevronDown className="h-6 w-6 text-blue-500" />
              </Link>
            </div>
          </SheetContent>
        </Sheet>
        <Link
          href="/"
          className="mr-6 hidden lg:flex items-center space-x-2"
          prefetch={false}
        >
          <Image
            src={logo}
            alt="Logo MX"
            className="h-12 w-auto"
            width={500}
            height={500}
          />
        </Link>
        <NavigationMenu className="hidden lg:flex flex-grow items-center justify-between w-full">
          <NavigationMenuList className="flex">
            {items.map((item, index) => (
              <NavigationMenuLink key={index} asChild>
                <Link
                  href={`${citie?.slug ? `/${citie.slug}/${item.slug}` : `/`}`}
                  className="group inline-flex items-center px-4 py-2 text-lg font-medium rounded-md transition-colors bg-white text-blue-500 hover:bg-blue-100 hover:text-blue-600 focus:bg-blue-100 focus:text-blue-600"
                  prefetch={false}
                >
                  {item.name}
                </Link>
              </NavigationMenuLink>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
        <div className="items-center space-x-4 ml-auto hidden lg:flex">
          <Link
            href={
              `${empresa.whatsapp}?text=Gostaria de assinar um plano de internet na MX` ||
              "#"
            }
            prefetch={false}
            className="flex items-center gap-2"
          >
            <Button>Assine Já</Button>
          </Link>
          {empresa.nome_do_app && (
            <Button variant={"primaryGreen"} className="te">
              {empresa.nome_do_app}
            </Button>
          )}
          <Link href="/" prefetch={false} className="flex items-center gap-2">
            <span className="text-blue-500 space-x-1">MX Fibra em</span>
            <strong className="text-blue-500">
              {citie?.nome ? citie.nome : " Sua Cidade"}
            </strong>
            <ChevronDown className="h-6 w-6 text-blue-500" />
          </Link>
        </div>
      </header>
    </section>
  );
}
