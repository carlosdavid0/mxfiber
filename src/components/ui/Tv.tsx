
import { Tvinfo } from "@/types/Tv";

export function TV({ data }: { data: Tvinfo }) {

    const bannerUrl = `${process.env.NEXT_PUBLIC_API_URL}/assets/${data.banner.id}`

    function destacarPalavra(texto: string, palavra: string) {

        return texto.replace(palavra, `<span style='color: ${data.cor_base};'>${palavra}</span>`);
    }
    return (
        <section className={`bg-black/90 bg-cover bg-no-repeat h-[500px] w-full flex items-center justify-center`} style={{ backgroundImage: `url(${bannerUrl})` }}>
            <div className="py-10 px-4 mx-auto lg:max-w-screen-xl w-full  grid lg:grid-cols-2 grid-cols-1 justify-between">
                <div className="max-w-screen-md space-y-5">
                    <div className="space-y-5">
                        <h2 className="text-6xl tracking-tight font-normal text-white whitespace-pre-wrap" dangerouslySetInnerHTML={{ __html: destacarPalavra(data.titulo, data.Nome) }} />
                        <p className="text-2xl tracking-tight font-normal text-white whitespace-pre-wrap" dangerouslySetInnerHTML={{ __html: destacarPalavra(data.descricao, data.Nome) }} />

                    </div>






                    <div className="flex gap-4">
                        <button className="lg:w-fit w-full px-5 bg-white rounded-full text-md h-14  transform transition-transform duration-500 ease-in-out ">
                            <div className="flex items-center justify-center gap-2 hover:scale-105 transition-all duration-200">

                                <span className="text-xl text-mx-blue-800">Canais Disponiveis</span>
                            </div>
                        </button>
                        <button style={{ background: data.cor_base }} className={`lg:w-fit w-full rounded-full text-md h-14  px-4 transform transition-transform duration-500 ease-in-out`}>
                            <div className="flex items-center justify-center gap-2 hover:scale-105 transition-all duration-200">

                                <span className="text-xl text-white">Conheça mais</span>
                            </div>
                        </button>

                    </div>
                </div>



            </div>
        </section >
    )
}