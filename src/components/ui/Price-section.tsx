'use client'

import { Plano } from "@/types/planos";
import { CheckBadgeIcon, HeartIcon, PlusCircleIcon, RocketLaunchIcon } from "@heroicons/react/20/solid";
import Carousel from "react-multi-carousel";
import 'react-multi-carousel/lib/styles.css';
import { useState } from "react";
import { ModalBeneficios } from "./ModalBeneficios";



export function PriceSession({ planos }: { planos: Plano[]; }) {

    const [plano, setPlano] = useState<Plano>()

    function handleOpenDialog(plano: Plano) {
        setPlano(plano)

    }

    return (
        <section>
            <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-10 lg:px-6">
                <div className="mx-auto max-w-screen-lg text-center mb-8 lg:mb-12">
                    <h2 className="text-4xl tracking-tight font-normal text-blue-700">
                        Mais alta velocidade de <span className="font-semibold">
                            conexão por toda sua casa
                        </span>
                    </h2>

                </div>


                <Carousel
                    additionalTransfrom={0}
                    arrows
                    autoPlay
                    autoPlaySpeed={3000}
                    centerMode={false}
                    className=""
                    containerClass="container-with-dots"
                    dotListClass=""
                    draggable
                    focusOnSelect={false}
                    infinite
                    itemClass=""
                    keyBoardControl
                    minimumTouchDrag={80}
                    pauseOnHover
                    renderArrowsWhenDisabled={false}
                    renderButtonGroupOutside={false}
                    renderDotsOutside={false}
                    responsive={{
                        desktop: {
                            breakpoint: {
                                max: 3000,
                                min: 1024
                            },
                            items: 3,
                            partialVisibilityGutter: 20
                        },
                        mobile: {
                            breakpoint: {
                                max: 464,
                                min: 0
                            },
                            items: 1,
                            partialVisibilityGutter: 30
                        },
                        tablet: {
                            breakpoint: {
                                max: 1024,
                                min: 464
                            },
                            items: 2,
                            partialVisibilityGutter: 30
                        }
                    }}
                    rewind={false}
                    rewindWithAnimation={false}
                    removeArrowOnDeviceType={["tablet", "mobile"]}
                    shouldResetAutoplay
                    showDots={false}

                    slidesToSlide={1}
                    ssr={true}
                    swipeable
                >

                    {planos.map((item, index) => (
                        <div key={index} className="flex flex-col mx-5 max-w-xl text-center text-gray-900 bg-white rounded-lg select-none">
                            <div className="flex items-center justify-center flex-col px-2 pt-2 ">
                                <div className="bg-blue-600 flex items-center justify-center h-full w-full py-5 px-2 rounded-lg ">
                                    <h3 className="lg:text-[40px] text-[30px] font-semibold flex flex-col">
                                        <span className="text-mx-green-under lg:text-[50px] text-[60px]">
                                            {item.nome.split(' ')[0].trim()}
                                        </span>
                                        <span className="-mt-8 text-white">
                                            {item.nome.split(' ')[1].trim()}
                                        </span>

                                    </h3>
                                </div>
                                <div className="h-5">
                                    <div className={`bg-mx-green-under px-5 -mt-5 rounded-lg  items-center gap-2 ${item.svas.length >= 1 ? 'flex' : 'hidden'} `}>
                                        <PlusCircleIcon className="w-8 text-blue-800" />
                                        <h3 className="lg:text-xl text-blue-800">
                                            Apps inclusos
                                        </h3>
                                    </div>
                                </div>


                            </div>
                            <div className="">

                                <ul role="list" className=" space-y-4 text-left xl:p-8  p-6 h-52 pb-10 ">
                                    {item.servicos.map((servico, index) => (
                                        <li className="flex items-center space-x-3" key={index}>
                                            <CheckBadgeIcon className="w-4 text-mx-blue-800" />
                                            <span>{servico.servicos_id.nome}</span>
                                        </li>
                                    ))}

                                </ul>
                                <div>
                                    <button className="w-full bg-mx-blue-800 text-md h-14  border-b border-black  px-4 transform transition-transform duration-500 ease-in-out hover:bg-mx-blue-700">
                                        <div className="flex items-center justify-center gap-2">
                                            <RocketLaunchIcon className="w-5 text-mx-green-under" />
                                            <span className="text-xl text-white">Assine Já</span>
                                        </div>
                                    </button>
                                    <button className="w-full bg-pink-600 rounded-b-lg text-md h-14  px-4 transform transition-transform duration-500 ease-in-out hover:bg-pink-500" onClick={() => handleOpenDialog(item)}>
                                        <div className="flex items-center justify-center gap-2">
                                            <HeartIcon className="w-5 text-mx-green-under" />
                                            <span className="text-xl text-white">
                                                Confira nossos beneficios
                                            </span>
                                        </div>
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}


                </Carousel>



            </div>

            <ModalBeneficios plano={plano} onClose={() => setPlano(undefined)} />
        </section>
    )
}