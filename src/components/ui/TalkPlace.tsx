'use client'

import { Disclosure, Transition } from "@headlessui/react";
import { FaqAccordion, FaqItem } from "../faq";
import { DevicePhoneMobileIcon, PhoneIcon } from "@heroicons/react/20/solid";
import WhatsaApp from "../../../public/whatsapp";

export function TalkPlace() {

    const faqItems = Array.from({ length: 6 }, (_, i) => {

        return {
            question: `Pergunta ${i + 1}`,
            answer: `Resposta ${i + 1}`
        }
    })
    return (
        <section>
            <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-10 lg:px-6">

                <div className="lg:grid lg:grid-cols-2 flex flex-col-reverse lg:gap-20 gap-10 ">
                    <div className="space-y-8">
                        <h2 className="text-4xl tracking-tight font-normal text-blue-700">
                            Perguntas Frequentes
                        </h2>
                        <FaqAccordion
                            items={faqItems}
                        />
                    </div>
                    <div className="space-y-8">
                        <h2 className="text-4xl tracking-tight font-normal text-blue-700">
                            Precisa de ajuda? <span className="font-bold">Fale Conosco</span>
                        </h2>
                        <div className="flex items-center gap-3 max-w-xl">
                            <button className="bg-mx-blue-800 hover:bg-mx-blue-700 duration-300 transition-all w-48 rounded-lg  space-y-3 flex items-start flex-col px-4 py-6" >
                                <PhoneIcon className="w-10 text-mx-green-under" />
                                <p className="text-lg text-white">
                                    Ligue Já
                                </p>
                            </button>
                            <button className=" bg-mx-blue-800 hover:bg-mx-blue-700 duration-300 transition-all w-48 rounded-lg  space-y-3 flex items-start flex-col px-4 py-6" >
                                <WhatsaApp width={'40px'} height={'40px'} fill={'#aafa07'} />
                                <p className="text-lg text-white">
                                    WhatsApp
                                </p>
                            </button>
                            <button className=" bg-mx-blue-800 hover:bg-mx-blue-700 duration-300 transition-all w-48 rounded-lg  space-y-3 md:flex hidden items-start flex-col px-4 py-6" >
                                <DevicePhoneMobileIcon className="w-10 text-mx-green-under" />
                                <p className="text-lg text-white">
                                    Minha MX
                                </p>
                            </button>

                        </div>

                        <div className="bg-gray-400/20  px-4 py-6 rounded-lg space-y-4">
                            <p className="text-md">Faça-nos uma visita</p>

                            <div>
                                <h3 className="font-bold">
                                    Endereço
                                </h3>

                                <p className="text-xl">Rua Teste, 555, Centro, Varjota-CE</p>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}