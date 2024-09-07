import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";
import { MenuIcon } from "lucide-react";

export default function Navbar() {
  return (
    <section className="bg-white shadow-md">
      <header className="flex h-20 lg:h-28 w-full items-center px-4 md:px-6 max-w-screen-xl mx-auto">
        <Sheet>
          <div className="flex items-center justify-between w-full lg:w-fit">
            <div className="flex items-center gap-2 justify-between w-full lg:w-fit">
              <img
                src="https://www.mxfibra.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo-blue.1035add7.png&w=750&q=75"
                alt="Logo MX"
                className="h-14 w-auto lg:hidden"
              />
              <div className="flex items-center gap-5">
                <Button className="lg:hidden">Assine Já</Button>
                <SheetTrigger asChild>
                  <Button variant="outline" size="icon" className="lg:hidden">
                    <MenuIcon className="h-6 w-6 text-blue-700" />
                    <span className="sr-only">Abrir menu de navegação</span>
                  </Button>
                </SheetTrigger>
              </div>
            </div>
          </div>

          <SheetContent side="left" className="bg-white p-4 shadow-lg">
            <img
              src="https://www.mxfibra.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo-blue.1035add7.png&w=750&q=75"
              alt="Logo MX"
              className="h-14 w-auto lg:hidden"
            />
            <nav className="mt-6 space-y-2">
              {["Home", "About", "Services", "Portfolio", "Contact"].map(
                (item, index) => (
                  <Link
                    key={index}
                    href="#"
                    className="block py-2 text-lg font-semibold text-blue-700 hover:text-blue-900 focus:outline-none"
                    prefetch={false}
                  >
                    {item}
                  </Link>
                )
              )}
            </nav>
          </SheetContent>
        </Sheet>
        <Link
          href="#"
          className="mr-6 hidden lg:flex items-center space-x-2"
          prefetch={false}
        >
          <img
            src="https://www.mxfibra.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo-blue.1035add7.png&w=750&q=75"
            alt="Logo MX"
            className="h-12 w-auto"
          />
        </Link>
        <NavigationMenu className="hidden lg:flex flex-grow items-center justify-between w-full">
          <NavigationMenuList className="flex">
            {["Home", "About", "Services", "Portfolio", "Contact"].map(
              (item, index) => (
                <NavigationMenuLink key={index} asChild>
                  <Link
                    href="#"
                    className="group inline-flex items-center px-4 py-2 text-md font-bold rounded-md transition-colors bg-white text-blue-500 hover:bg-blue-100 hover:text-blue-600 focus:bg-blue-100 focus:text-blue-600"
                    prefetch={false}
                  >
                    {item}
                  </Link>
                </NavigationMenuLink>
              )
            )}
          </NavigationMenuList>
        </NavigationMenu>
        <div className="items-center space-x-4 ml-auto hidden lg:flex">
          <Button variant="default">Contact Us</Button>
          <span>
            MX Fibra em <strong>Fortaleza</strong>
          </span>
        </div>
      </header>
    </section>
  );
}
