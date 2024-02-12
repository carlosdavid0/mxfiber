import { CheckBadgeIcon, HeartIcon, PlusCircleIcon, RocketLaunchIcon } from "@heroicons/react/20/solid";




export function PriceSession() {
    return (
        <section>
            <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
                <div className="mx-auto max-w-screen-md text-center mb-8 lg:mb-12">
                    <h2 className="mb-4 text-4xl tracking-tight font-normal text-blue-700">
                        Mais alta velocidade de <span className="font-semibold">
                            conexão por toda sua casa
                        </span>
                    </h2>

                </div>
                <div className="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0">
                    

                    {Array.from({ length: 3 }).map((_, index) => (
                        <div key={index} className="flex flex-col mx-auto max-w-xl text-center text-gray-900 bg-white rounded-lg select-none">
                            <div className="flex items-center justify-center flex-col px-2 pt-2 ">
                                <div className="bg-blue-600 flex items-center justify-center h-full w-full py-5 px-2 rounded-lg ">
                                    <h3 className="text-[50px] font-semibold flex flex-col">
                                        <span className="text-mx-green-under text-[80px]">
                                            350
                                        </span>
                                        <span className="-mt-8 text-white">
                                            Megas
                                        </span>
                                    </h3>
                                </div>
                                <div className="bg-mx-green-under px-5 -mt-5 rounded-lg flex items-center gap-2">
                                    <PlusCircleIcon className="w-8 text-blue-800" />
                                    <h3 className="text-xl text-blue-800">
                                        Apps inclusos
                                    </h3>
                                </div>
                            </div>
                            <div className="">

                                <ul role="list" className="mb-8 space-y-4 text-left xl:p-8  p-6 ">
                                    <li className="flex items-center space-x-3">

                                        <CheckBadgeIcon className="w-4 text-mx-blue-800" />
                                        <span>Ultra Velocidade</span>
                                    </li>
                                    <li className="flex items-center space-x-3">
                                        <CheckBadgeIcon className="w-4 text-mx-blue-800" />
                                        <span>Rede 100% Fibra</span>
                                    </li>
                                    <li className="flex items-center space-x-3">

                                        <CheckBadgeIcon className="w-4 text-mx-blue-800" />
                                        <span>Roteador Wi-fi 5Ghz</span>
                                    </li>
                                    <li className="flex items-center space-x-3">

                                        <CheckBadgeIcon className="w-4 text-mx-blue-800" />
                                        <span>Repetidor Wi-Fi Mash</span>
                                    </li>

                                </ul>
                                <div>
                                    <button className="w-full bg-mx-blue-800 text-md h-14  border-b border-black  px-4 transform transition-transform duration-500 ease-in-out hover:bg-mx-blue-700">
                                        <div className="flex items-center justify-center gap-2">
                                            <RocketLaunchIcon className="w-5 text-mx-green-under" />
                                            <span className="text-xl text-white">Assine Já</span>
                                        </div>
                                    </button>
                                    <button className="w-full bg-pink-600 text-md h-14  px-4 transform transition-transform duration-500 ease-in-out hover:bg-pink-500">
                                        <div className="flex items-center justify-center gap-2">
                                            <HeartIcon className="w-5 text-mx-green-under" />
                                            <span className="text-xl text-white">Confira nosso beneficios</span>
                                        </div>
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}

                </div>
            </div>
        </section>
    )
}