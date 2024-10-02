import { items } from "@/constants/menu";
import { Empresa } from "@/types/empresa";
import { Facebook, Instagram } from "lucide-react";
import Link from "next/link";

type empresas = {
  data: Empresa;
};

export default function Footer({ data }: empresas) {
  return (
    <footer className="bg-gray-100 text-gray-600 py-8 md:py-12">
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center md:text-left">
            <h3 className="font-bold text-lg mb-4">Sobre nós</h3>
            <p className="text-sm">
              A MX Fibra é uma provedora de internet de alta velocidade que atua
              principalmente no estado do Maranhão, oferecendo serviços de fibra
              óptica.
            </p>
          </div>

          <div className="text-center md:text-left">
            <h3 className="font-bold text-lg mb-4">Links</h3>
            <ul className="space-y-2">
              {items.map((item, index) => (
                <li key={index}>
                  <Link
                    href={`${item.slug}`}
                    className="hover:text-gray-900 transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="text-center md:text-left">
            <h3 className="font-bold text-lg mb-4">Siga-nos</h3>
            <div className="flex justify-center md:justify-start space-x-4">
              <a
                href={data.facebook}
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                <Facebook size={24} />
                <span className="sr-only">Facebook</span>
              </a>

              <a
                href={data.instagram}
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                <Instagram size={24} />
                <span className="sr-only">Instagram</span>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-8 pt-8 text-sm md:flex items-start justify-between space-y-8 md:space-y-0">
          <div className="text-center md:text-left">
            <p>
              &copy; {new Date().getFullYear()} MX Fibra. Todos os direitos
              reservados.
            </p>
            <div className="space-y-2 mt-2">
              <p>IMAX SOLUÇÕES E SERVIÇOS-LTDA</p>
              <p>
                <strong>CNPJ:</strong> 37.293.552/0001-00
              </p>
              <p>
                <strong>E-mail: </strong>
                <a href="mailto:suporte@mxfibra.net.br">
                  suporte@mxfibra.net.br
                </a>
              </p>
            </div>
          </div>

          <p className="text-center md:text-left">
            Desenvolvido por Evalue Tecnologias
          </p>
        </div>
      </div>
    </footer>
  );
}
