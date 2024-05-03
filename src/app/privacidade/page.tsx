import { Footer } from "@/components/ui/Footer";
import { Navbar } from "@/components/ui/Navbar";
import { Cidade } from "@/types/cidades";
import { Configuracoes } from "@/types/config";
import request, { gql } from "graphql-request";
import { Metadata } from "next";


export const metadata: Metadata = {
    title: `Privacidade | MXFibra`,
    description: `Privacidade`,
    robots: "index, follow",
    generator: "MXFiber",
    category: "Privacidade",
    publisher: "MXFiber",
    openGraph: {
        type: "website",
        title: `Privacidade`,
        locale: "pt_BR",
        description: `Privacidade`,
        siteName: `Privacidade`,
        alternateLocale: ['pt-BR', 'en-US'],
        images: [
            {
                url: "https://mxfiber.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo-blue.1035add7.png&w=750&q=75",
                width: 800,
                height: 600,
                alt: "MXFiber",
            },
        ],
    },
}


async function getConfig() {
    try {
        const endpoint = `${process.env.NEXT_PUBLIC_API_URL}/graphql`;
        const query = gql`
    query {
        configuracoes{
          lgpd

        }
    }`;

        const { configuracoes }: { configuracoes: Configuracoes } = await request(endpoint, query);

        return {
            configuracoes: configuracoes
        }
    } catch (e) {
        return {
            configuracoes: {
                lgpd: ''
            }
        }
    }
}

export default async function Privacidade() {

    const { configuracoes } = await getConfig()


    return (
        <div className="space-y-5">
            <Navbar cidade={{} as Cidade} />
            <section className="bg-white">
                {/* "py-8 px-4 mx-auto max-w-screen-xl lg:py-10 lg:px-4 grid lg:grid-cols-2 space-y-5 */}
                <div className="py-10 px-4 max-w-screen-xl lg:py-10  mx-auto space-y-4 lg:space-y-0 ">
                    <div className="w-full pt-20">
                        <div dangerouslySetInnerHTML={{ __html: configuracoes.lgpd }}>

                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    )
}