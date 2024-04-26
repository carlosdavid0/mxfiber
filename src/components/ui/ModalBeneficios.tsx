import { Plano } from '@/types/planos'
import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useEffect, useState } from 'react'

export function ModalBeneficios({ plano, onClose }: { plano: Plano | null, onClose: () => void }) {
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
                <Dialog as="div" className="relative z-50  overflow-y-auto" onClose={closeModal}>
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

                    <div className="fixed inset-0 overflow-y-auto rounded-lg">
                        <div className="flex min-h-full items-center justify-center p-4 text-center">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel className=" max-w-xl transform overflow-hidden rounded-lg bg-white  text-left align-middle shadow-xl transition-all">
                                    <Dialog.Title
                                        as="h3"
                                        className="text-4xl font-medium leading-6 text-mx-blue-600"
                                    >
                                        <div className="bg-blue-600 flex items-center justify-center h-full w-full py-5 px-2  ">
                                            <h3 className="lg:text-[40px] text-[30px] font-semibold flex flex-col text-center">
                                                <span className="text-mx-green-400 lg:text-[50px] text-[60px]">
                                                    {plano?.nome.split(' ')[0].trim()}
                                                </span>
                                                <span className="mt-5 text-white">
                                                    {plano?.nome.split(' ')[1].trim()}
                                                </span>

                                            </h3>
                                        </div>
                                    </Dialog.Title>
                                    <div className='space-y-4'>
                                        {plano?.svas && plano.svas.length >= 1 && (
                                            <div>
                                                <div className={` px-5  rounded-lg  items-center gap-2 flex  pt-5`}>

                                                    <h3 className="lg:text-xl text-blue-800">
                                                        Apps inclusos
                                                    </h3>
                                                </div>


                                                <ul className="grid grid-cols-4 px-5 gap-5">
                                                    {plano?.svas.map((servico, index) => (
                                                        <li className="flex items-center" key={index}>

                                                            <img src={`${process.env.NEXT_PUBLIC_API_URL}/assets/${servico.sva_id.icone.id}`} alt={servico.sva_id.nome} className='w-28' />

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
