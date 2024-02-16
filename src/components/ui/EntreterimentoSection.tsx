import { Svas } from "@/types/Sva";


export function EntreterimentoSection({ svas }: { svas: Svas[] }) {
    return (
        <section>
            <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-10 lg:px-6">
                <div className="mx-auto max-w-screen-lg text-center mb-8 lg:mb-12 space-y-2">
                    <h2 className="text-4xl tracking-tight font-normal text-blue-700">
                        Muito mais conteúdo na sua <span className="font-semibold">
                            internet da MX Fibra
                        </span>
                    </h2>

                    <p className="text-lg tracking-tight font-normal text-blue-700">Inclua um de nossos Aplicativos no seu Combo</p>

                </div>

                <section className='grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8'>
                    {svas.map((sva, index) => (
                        <div key={index}>
                            <div
                                className={`flex items-end justify-end rounded-lg shadow-lg`}>
                                <div className=" flex w-fit px-4  rounded-lg z-10 items-end justify-end" style={{ backgroundColor: sva.color_de_fundo }}>
                                    <p className="text-white text-xl">{sva.categoria_em_plano}</p>
                                </div>
                            </div>
                            <div key={index} className="flex items-center justify-center bg-white px-4 py-2 rounded-lg shadow-lg cursor-pointer -mt-7">
                                <div
                                    className="flex items-center flex-col space-y-4 py-5">
                                    <div className=" flex items-center justify-center h-32">
                                        <img src={`${process.env.NEXT_PUBLIC_API_URL}/assets/${sva.icone.id}`}
                                            alt={sva.nome} className={`w-[200px] hover:scale-110 transition-all duration-300 select-none`} />
                                    </div>

                                    <p className="lg:text-sm text-md font-normal text-blue-700 line-clamp-3">{sva.descricao}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </section>

            </div>
        </section>
    )
}