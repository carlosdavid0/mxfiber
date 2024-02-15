import { Plano } from '@/types/planos'
import { Dialog, Transition } from '@headlessui/react'
import { CheckBadgeIcon, RocketLaunchIcon, HeartIcon } from '@heroicons/react/20/solid'
import { Fragment, useEffect, useState } from 'react'

export function ModalBeneficios({ plano, onClose }: { plano: Plano | undefined, onClose: () => void }) {
    let [isOpen, setIsOpen] = useState(false)

    function closeModal() {

        setIsOpen(false)

        onClose()
    }

    function openModal() {
        setIsOpen(true)
    }

    useEffect(() => {


        if (plano) {
            openModal()
        } else {
            closeModal()
        }



    }, [plano])

    return (
        <>

            <Transition appear show={isOpen} as={Fragment}>
                <Dialog as="div" className="relative z-50  w-screen " onClose={closeModal}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black/25" />
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-y-auto rounded-lg  w-screen ">
                        <div className="flex min-h-full items-center justify-center p-4 text-center  w-screen ">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel className=" max-w-md transform overflow-hidden rounded-lg  w-screen  bg-white  text-left align-middle shadow-xl transition-all">
                                    <Dialog.Title
                                        as="h3"
                                        className="text-4xl font-medium leading-6 text-mx-blue-600"
                                    >
                                        <div className="bg-blue-600 flex items-center justify-center h-full w-full py-5 px-2  ">
                                            <h3 className="lg:text-[40px] text-[30px] font-semibold flex flex-col text-center">
                                                <span className="text-mx-green-under lg:text-[50px] text-[60px]">
                                                    {plano?.nome.split(' ')[0].trim()}
                                                </span>
                                                <span className="mt-5 text-white">
                                                    {plano?.nome.split(' ')[1].trim()}
                                                </span>

                                            </h3>
                                        </div>
                                    </Dialog.Title>
                                    <div className='space-y-4'>
                                        <div className='px-5 py-4 space-y-2'>
                                            <h3 className="lg:text-xl text-blue-800">
                                                Serviços
                                            </h3>

                                            <ul className="grid grid-cols-2 gap-3">
                                                {plano?.servicos.map((servico, index) => (
                                                    <li className="flex items-center space-x-3" key={index}>
                                                        <CheckBadgeIcon className="w-4 text-mx-blue-800" />
                                                        <span>{servico.servicos_id.nome}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>

                                        {plano?.svas && plano.svas.length >= 1 && (
                                            <div>
                                                <div className={` px-5  rounded-lg  items-center gap-2 flex `}>

                                                    <h3 className="lg:text-xl text-blue-800">
                                                        Apps inclusos
                                                    </h3>
                                                </div>


                                                <ul className="grid grid-cols-4 px-2">
                                                    {plano?.svas.map((servico, index) => (
                                                        <li className="flex items-center" key={index}>

                                                            <img src={`${process.env.NEXT_PUBLIC_API_URL}/assets/${servico.sva_id.icone.id}`} alt={servico.sva_id.nome} />

                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>


                                        )}

                                        <div>
                                            
                                            <button onClick={closeModal} className="w-full text-md h-14  px-4 transform transition-transform duration-500 ease-in-out ">
                                                <p>Fechar</p>
                                            </button>
                                        </div>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition >
        </>
    )
}
